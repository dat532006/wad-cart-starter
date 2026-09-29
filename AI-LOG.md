# AI-LOG

## 2026-09-28 → 29 — IA#1 cartTotal

Tools: Claude (desktop chat, Opus 5.5) as tutor — reviewed and suggested, no
code. Claude Code (Opus 5.5, High, Accept edits, new session) — wrote the code.

### Harness — 038d2aa, df96c23

- By me: first draft of AGENTS.md; chose Prettier as the only devDependency.
- From tutor: `.prettierrc`, `ci.yml`, and parts of AGENTS.md (Node version,
  Commands, rounding line).
- Changed: dependency rule (tutor's wording contradicted itself), gate line
  (CI runs test and format:check separately).
- Rejected: tutor's empty-cart line — moved that case to the brief and a test.

### Brief — 9f490be

- Drafted by tutor. Changed: dropped "about 30 lines" (not in spec).

### Implementation — 5e5729f

- Asked Claude Code for: the task in brief.md.
- Produced: cartTotal + 8 tests; only src/ and test/ changed, nothing
  installed. Allowed once: `npm run gate; git status; git diff` → 9/9 green.
- Checked in the diff: no toFixed, `>=`, empty cart returns before options,
  `Number.isInteger`, `price < 0`, literal expected values.
- Kept: the starter's first test unchanged (its own `options` shadows the
  shared one, same values).
- Committed unedited, so later changes of mine are separate commits.
- By me: 9 deliberate breaks (reverted, no commit) — each failed only its own
  test, except shipFee → 0, which failed all three below-threshold tests.
