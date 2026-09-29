# Self-assessment — IA#1

Submitted by: 24120037 — Nguyễn Đức Đạt

Repository: https://github.com/dat532006/wad-cart-starter

Total I claim: 97 / 100

| Criterion | Max | I claim | Evidence                                                                                                                                                                                                                                                                                                               |
| --------- | --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Behaviour | 30  | 30      | `src/cart.js` (commit 5e5729f). Worked example returns the number `467400` — test "the example from the slides"; threshold — "free shipping at the threshold"; empty cart — "empty cart returns 0" (called with `{ vatRate }` only); RangeError — "negative price throws", "fractional qty throws", "zero qty throws". |
| Tests     | 20  | 20      | `test/cart.test.js`: 9 tests, one rule each, expected values are literals. `npm test` green locally and in CI run 36582341225. Each test fails for one reason: 9 deliberate breaks, see AI-LOG.md → Implementation.                                                                                                    |
| Harness   | 20  | 19      | `AGENTS.md` (stack, commands, 5 "Never" rules) — commit 038d2aa. Gate `npm run gate` = Prettier check + `npm test` — commit df96c23. CI on push: red before the code (run 36412061366), green after (run 36582341225).                                                                                                 |
| Brief     | 15  | 14      | `brief.md` (commit 9f490be, before the code): files it may / must not touch, contract, error cases, "No dependencies", test table, "Done when".                                                                                                                                                                        |
| AI-LOG.md | 15  | 14      | `AI-LOG.md`: tools and models, what each produced, changed (dependency rule, gate line, 30-line limit), rejected (tutor's empty-cart line), by hand; every section points at a commit.                                                                                                                                 |

## What I did not manage

- The brief and parts of the harness (`.prettierrc`, `ci.yml`, some `AGENTS.md`
  lines) were drafted by the tutor chat, not by me. I reviewed and changed
  them, and AI-LOG.md says which parts — but the first draft was not mine.
- I did not ask the lecturer whether a Prettier devDependency is allowed under
  "no dependencies"; I decided it myself and recorded it in `AGENTS.md`.
- CI still warns that `actions/checkout@v4` and `actions/setup-node@v4` run on
  deprecated Node 20. It passes, but I did not bump them.
- The harness and brief entries in AI-LOG.md were written on day 2, not while
  I was doing that work on day 1.

## What I would do differently

Write my own brief first and ask for review after, instead of starting from a
drafted one. Write each AI-LOG entry the moment a step is committed.
