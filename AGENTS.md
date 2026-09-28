# Project Rules

## Purpose

Implement `cartTotal(items, options)` according to the assignment specification
in `README.md` and the contract documented below.

The implementation belongs in `src/cart.js`.

## Stack

- Node.js 22+ (CI runs Node 22), ES modules (`"type": "module"`)
- Plain JavaScript, no runtime dependencies
- Tests: Node's built-in runner (`node:test`, `node:assert/strict`)
- Format gate: Prettier 3.9.9 (devDependency, chosen by me) — no semicolons,
  single quotes, matching the starter (`.prettierrc`)

## Project structure

- Implementation: `src/cart.js`
- Tests: `test/cart.test.js`
- CI: `.github/workflows/ci.yml`

Do not modify unrelated files unless the task explicitly requires it.

## Commands

- `npm test` — run the tests
- `npm run format` — format project files
- `npm run format:check` — check formatting without writing
- `npm run gate` — run the local project gate: format check, then tests

Before considering the task complete, both the local gate and CI must pass.

## cartTotal contract

`cartTotal(items, options)` must:

- Calculate `subtotal` as the sum of `price * qty` for all items.
- Calculate VAT as `subtotal * options.vatRate`.
- Charge zero shipping when `subtotal >= options.freeShipFrom`.
- Otherwise charge `options.shipFee`.
- Return `0` for an empty cart, with no VAT and no shipping.
- Handle the empty-cart case before calculating VAT or shipping.
- Throw `RangeError` when an item's `price` is negative.
- Throw `RangeError` when an item's `qty` is not a positive integer
  (`0`, `-1`, and `1.5` all throw).
- Round once, on the final total, with `Math.round`; return a number.
- Return `467400` for the worked example in the specification.

## Rules

- Never add a runtime dependency — `dependencies` must stay absent or empty.
  `prettier` is the only allowed devDependency, chosen by me for the format gate.
  Never install any additional package without my approval.
- Never change an expected test value only to make a failing implementation pass.
- Never weaken or remove a specification test to make the gate pass.
- Never return the result of `toFixed()` because it is a string.
- Never modify unrelated project files without a clear reason.

- Read every diff before running generated code.
- Tests must verify behaviour from the specification, not implementation details.
- Keep each test focused so it can fail for one clear reason.
- Reject or revise generated code that conflicts with the specification.
- Do not declare the task complete until `npm run gate` passes locally and CI is green.
