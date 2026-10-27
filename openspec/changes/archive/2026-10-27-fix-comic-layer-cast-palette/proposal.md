# Proposal: Correct the documented cast palette

## Why

`openspec/specs/comic-layer/spec.md` still describes Plus as Jade `#46D9A0` and Minus as Amber `#F5B85A`. Those were the v1 accents. The shipped components no longer use them: `src/cast/Character.astro` fills Plus with Peacock `#3FC9B4` (line 48, 55) and Minus with Marigold `#EFAF3E` (line 163), because the `redesign-monsoon-glass` retint replaced the palette at the token layer.

A spec that names colours the code does not use is worse than no colour at all: the next person to touch the cast will either match the spec and break the palette, or match the code and distrust the spec. This change makes the requirement describe what ships.

## What Changes

- `comic-layer` / "Original SVG Character Cast": the two character colours are corrected from Jade `#46D9A0` and Amber `#F5B85A` to Peacock `#3FC9B4` and Marigold `#EFAF3E`. The 3px ink outline `#04110F`, the inline-SVG rule, the 25KB budget and the animation behaviour are unchanged.

## Impact

- Affected spec: `comic-layer` (one modified requirement).
- Affected code: none. This is a documentation correction; the implementation already ships the corrected colours.
- Affected tests: none. No test reads these values.
