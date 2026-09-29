# Brief — cartTotal

## Task

Implement `cartTotal(items, options)` in `src/cart.js` and its tests in
`test/cart.test.js`, exactly as specified below. Plain JavaScript, no
dependencies. Follow `AGENTS.md`.

## Files

- May change: `src/cart.js`, `test/cart.test.js`
- Must not change: `package.json`, `package-lock.json`, `AGENTS.md`,
  `README.md`, `brief.md`, `.prettierrc`, `.github/`
- Keep the signature and the named export:
  `export function cartTotal(items, options)`

## Contract

- `items`: array of `{ name, price, qty }` — `price` in đồng, `qty` a count
- `options`: `{ vatRate, freeShipFrom, shipFee }`
- `subtotal` = sum of `price * qty` over all items
- `vat` = `subtotal * vatRate`
- `shipping` = `0` when `subtotal >= freeShipFrom` (exactly at the threshold is
  free), otherwise `shipFee`
- Return `subtotal + vat + shipping`, rounded once with `Math.round`, as a
  **number** (not a string)

## Edge and error cases

- Empty cart: `[]` returns `0` — no VAT, no shipping. This must work when
  `options` has only `vatRate`, e.g. `cartTotal([], { vatRate: 0.08 })`, so
  return before reading or validating `freeShipFrom` / `shipFee`.
- `price` below `0` → throw `RangeError`. A price of `0` is allowed.
- `qty` that is not a positive integer → throw `RangeError`. `0`, `-1` and
  `1.5` all throw.

## Constraints

- No dependencies: do not install anything and do not edit `package.json`.
- Do not use `toFixed` — it returns a string.
- Do not invent options, default values, or behaviour not listed here.
- Do not mutate `items`.
- Keep `src/cart.js` short and readable — no helpers or abstractions beyond what
  the contract needs.
- If anything here is unclear or conflicts with `README.md`, stop and ask
  instead of guessing.

## Tests required

One `test()` per case, so each test can fail for one reason. Expected values
are literal numbers, computed by hand from the specification — do not compute
them in the test. Keep the existing test "the example from the slides".

Options for every case except the empty cart:
`{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`

| Test name                        | Items (price × qty)                 | Expected     |
| -------------------------------- | ----------------------------------- | ------------ |
| the example from the slides      | 180000 × 2, 45000 × 1               | `467400`     |
| empty cart returns 0             | `[]`, options `{ vatRate: 0.08 }`   | `0`          |
| free shipping at the threshold   | 500000 × 1                          | `540000`     |
| shipping charged below threshold | 450000 × 1                          | `516000`     |
| rounds to the whole đồng         | 12345 × 1 (43332.6 before rounding) | `43333`      |
| negative price throws            | -1 × 1                              | `RangeError` |
| fractional qty throws            | 100000 × 1.5                        | `RangeError` |
| zero qty throws                  | 100000 × 0                          | `RangeError` |
| negative qty throws              | 100000 × -1                         | `RangeError` |

Use `assert.equal` from `node:assert/strict` for totals and
`assert.throws(() => ..., RangeError)` for errors.

## Done when

- `npm run gate` passes locally: format check clean, all tests green.
- Report back with the diff of `src/cart.js` and `test/cart.test.js` and the
  `npm run gate` output. Do not commit — I review the diff and commit myself.
