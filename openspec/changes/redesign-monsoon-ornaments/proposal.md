# Proposal

## Why

Monsoon Glass gave the site a material system and a four-palette Indian identity, but it deliberately stopped the ornament at "one brass hairline vocabulary, three dots, one chamfer on the fold handle" — the colour carries India, the geometry does not. The ornament phase is the other half of the same thesis: an Indian identity built from measure and geometry (a kolam lattice, an arch crown, a cast seal, ruled numerals) rather than clip art.

It also closes one gap the v2.6.1 review left: ornament language currently lives only in CSS comments and a report paragraph, so nothing stops the next change from adding a fourth dot or a jali pattern into the reading column.

## What Changes

- **Kolam lattice reading map.** The 765 beads move from rectangular chapter clusters onto a dot lattice, connected by a single looping kolam line generated at build time. Read beads light the loop; the line traces forward as progress accumulates.
- **Arch crown on the daily panel.** The home page's "Today's quick win" panel gets a cusped arch crown drawn along its top edge, sized so the headline, badges and call-to-action keep their current clearance.
- **Brass seal at chapter completion.** One quiet, non-animated seal (concentric hairline rings, chapter numeral, radial ticks) replaces the plain completion glow on calm chapters and sits beneath the cast on ordinary ones. No burst, no confetti, no advice.
- **Ruled rupee reference.** The indicative INR annotation stops being a filled pill and becomes ruled brass numerals: tabular figures, a hairline rule, and a smaller optical size than the author's figure, which stays primary.
- **A written ornament cap.** One brass hairline ladder, two drawn motifs on a page, never inside the reading column's prose, never a fill, never a jali pattern, never the cast's ink outlines.

## Capabilities

### New Capabilities
- `brass-ornament`: the ornament vocabulary and its hard cap — the hairline ladder, the arch crown, the completion seal, and the rules that keep ornament out of the reading column and off the cast's outlines.

### Modified Capabilities
- `reading-progress`: the 765-bead map requirement changes from "beads grouped by chapter" to a build-time kolam lattice whose loop is a progress indicator, keeping click-to-jump and the 44px target rule.
- `india-edition`: adds the requirement that the indicative INR annotation is presented as a ruled reference that never displaces the author's original figure or reads as a second price.

## Impact

- `src/styles/tokens.css` — brass hairline/rule tokens and the ornament measure scale.
- `src/styles/ornament.css` (new) — the four motifs and their quiet/reduced-motion variants.
- `src/components/ReadingMap.astro` — kolam lattice geometry generated at build time; bead anchors and the accessible table stay.
- `src/pages/index.astro` — arch crown on the daily panel.
- `src/pages/chapters/[n]-[slug].astro` — seal at chapter completion, calm-chapter variant.
- `src/styles/ui.css`, `src/scripts/inr.ts` — ruled INR reference.
- `openspec/specs/reading-progress/spec.md`, `openspec/specs/india-edition/spec.md`, `openspec/specs/brass-ornament/spec.md`.
- Budgets unchanged: no new JavaScript beyond class toggles inside the existing map script, no new font, no raster art, no external request.
