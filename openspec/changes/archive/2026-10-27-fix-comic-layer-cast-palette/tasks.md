# Tasks

## 1. Confirm the shipped values

- [x] 1.1 Read `src/cast/Character.astro` and record the fill colours actually used: Plus `#3FC9B4` (lines 48 and 55), Minus `#EFAF3E` (line 163), ink outline `#04110F`.
- [x] 1.2 Confirm the colours are the Monsoon Glass tokens `--color-jade` (Peacock) and `--color-amber` (Marigold) in `src/styles/tokens.css`, not ad hoc values.
- [x] 1.3 Confirm no other spec names the retired hexes (`grep -rn '#46D9A0\|#F5B85A\|#8FB3D9' openspec/specs` returns only `comic-layer/spec.md:9`).

## 2. Correct the requirement

- [x] 2.1 Update the "Original SVG Character Cast" requirement in `openspec/specs/comic-layer/spec.md` to name Peacock and Marigold.
- [x] 2.2 Keep the ink outline, inline-SVG rule, payload budget and scenario text as they were, so the requirement still constrains behaviour rather than only colour.
