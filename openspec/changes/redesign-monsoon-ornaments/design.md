# Design — redesign-monsoon-ornaments

## Context

See proposal.md — Why. Current state that shapes the approach:

- `src/components/ReadingMap.astro` already emits 765 anchor beads in `.chapter-cluster` groups, with a 14px `.map-bead` disc and a 44px `::after` hit area, and `subscribeLedger` toggles `.is-read` from localStorage. There is no drawing behind the beads today.
- `src/pages/chapters/[n]-[slug].astro` renders `.chapter-celebration` (liquid glass, `Character` + `Bubble`) only when `!isCalm`, and gates Tier A chapters on `pendingHumanReview`.
- `src/styles/ui.css` renders `.inr-ref` as a filled jade pill; `src/scripts/inr.ts` injects it into a fixed target list and respects `[data-show-inr="false"]`.
- The design tokens already expose `--color-brass` (#C8A24A, documented "Hairlines, rules, seals. Never body text.") and `--theme-brass`, currently used by almost nothing.
- Hard constraints: 60 KB gzip reader JS, ≥90 mobile Lighthouse, no animation of body text, no cast or SFX inside the reading column, Comic effects off must remove characters and bursts, calm chapters render no cast, `prefers-reduced-motion` must leave everything static.

## Goals / Non-Goals

**Goals:**
- Give the four surfaces (reading map, daily panel, chapter completion, ₹ reference) one drawn vocabulary — brass hairline, no fill, no raster, no new dependency.
- Keep the ornament layer purely additive: removing `ornament.css` and the four SVG fragments must leave the current v2.6.1 experience intact and shipping.
- No client JavaScript is added for ornament. Geometry is build-time; state is a CSS custom property written by the existing map script.

**Non-Goals:**
- Not a new palette, typeface, or layout dimension. The brass ladder is a fifth material, not a fifth theme.
- Not full jali screens, not pattern fills, not per-tip illustration, not ornamental page borders.
- Not a rewrite of the map's interaction model, the celebration copy, or the INR converter's targeting rules.

## Decisions

### D1. The kolam loop is a scaled canonical path, not a serpentine through beads

Each `.chapter-cluster` gets one inline SVG overlay (`position:absolute; inset:0; width:100%; height:100%`) holding a single closed path authored once in a 100×100 viewBox: a rounded square with a petal cusp at each corner. It is scaled to the cell with `preserveAspectRatio="none"` and drawn with `vector-effect="non-scaling-stroke"`, so the stroke stays at the 1px hairline rung regardless of cell size.

Progress is normalised, not measured: the path carries `pathLength="1"`, `stroke-dasharray="1 1"`, and `stroke-dashoffset: calc(1 - var(--kolam-trace, 0))`. `subscribeLedger` sets `--kolam-trace` to `readCount / tipCount` per chapter — one style write per chapter, no path maths in the browser, and it works with the same number whether the cell is one row or nine.

**Alternative rejected — serpentine path through bead centres:** the visually nicer reading ("the loop threads the beads"), but a boustrophedon path must know the column count, and the bead lattice wraps by CSS `repeat(auto-fill, 20px)` at every width. Honouring it would mean either fixing columns (breaking the fluid lattice) or shipping three media-queried SVGs, which duplicates all 765 anchors and triples the largest DOM block on the page. The cell contour keeps every bead and stays column-independent.

### D2. Beads stay a CSS grid; the lattice is the grid, not an SVG

`.map-bead` placement remains `display:grid; grid-template-columns: repeat(auto-fill, var(--kolam-pitch))` with `--kolam-pitch: 20px` — the current 14px disc + 6px gutter, unchanged. Reflow therefore needs no JavaScript and no resize listener, and the existing accessibility contract (each bead is an anchor with an accessible name; the `<details>` table mirrors the whole map) is untouched.

The 44px `::after` target is kept as-is. With a 20px pitch the targets overlap, which was already true in v2.6.1; the design does not widen the pitch because that would grow a 50-tip chapter's block by a full row for no gain in hit accuracy — overlapping targets resolve to the topmost, and the chapter heading link gives a coarser fallback.

### D3. The arch crown is a stroke-only ornament above the panel content

The daily panel keeps its 18px radius and its padding. The crown is a separate inline SVG (a cusped multifoil arc in a fixed viewBox, `aria-hidden="true"`) drawn in the panel's own padding band above the topline, full content width, `height: var(--orn-arch-h)` ≈ 22px.

**Alternative rejected — `clip-path` on the panel itself:** it would shape the panel edge literally, but the cut is width-dependent (a fixed `path()` distorts or clips at 360px), it clips the focus ring of the title link on keyboard focus, and it interacts badly with the liquid-glass backdrop-filter stack. Drawing above the content keeps the glass, the radius, the focus ring and the 130%-text reflow all intact.

### D4. The brass seal is static inline SVG, mounted unconditionally

The seal renders inside `.chapter-celebration` for every chapter, and the cast (`Character`, `Bubble`) stays behind the existing `!isCalm` condition. So a calm chapter's section holds the seal alone, and Comic effects off removes only the cast because the seal was never injected by cast code.

The seal settles once (≤400ms, opacity + one ring's dashoffset) under `@media (prefers-reduced-motion: no-preference)`; otherwise it is present at final state. It is `aria-hidden`, sits after the celebration copy, and carries the chapter numeral in `--font-sans` with `tabular-nums`. It is a material, so gating it on Comic effects would be wrong — the same reason the glass panel survives with effects off.

### D5. The ₹ reference becomes a rule, not a pill

`.inr-ref` loses its tinted background, radius and side padding: `background:none; border-radius:0; padding:0 2px; border-bottom:1px solid var(--theme-brass); font-variant-numeric: tabular-nums`, with the existing `0.78em` size. The `≈ ₹` text and the `[data-show-inr="false"]` rule are unchanged, so `inr.ts` targeting needs no edit.

The rule reads as an editorial annotation rather than a second data badge — which matters, because a filled pill beside a figure reads as authoritative and invites the reader to trust the conversion over the author's own number.

### D6. One token ladder in `src/styles/ornament.css`

`--orn-hairline: 1px`, `--orn-rule: 2px`, `--orn-bead: 5px`, `--orn-arch-h: 22px`, `--orn-gap: 20px`, and `--orn-line: color-mix(in srgb, var(--color-brass) 62%, transparent)` per palette. `BaseLayout.astro` imports the file after `ui.css` and before `comic.css` so the ornament never outranks cast layering.

## Risks / Trade-offs

- **[34 extra SVG overlays on the map page could cost paint time]** → each is a single non-animated stroke with `vector-effect` and no filter/shadow; the map's existing bead glow already dominates paint. Measure mobile Lighthouse before merge and drop the overlay to a CSS `border` contour if Check 6 regresses.
- **[The contour loop may read as a plain frame, not a kolam]** → the petal cusps are load-bearing. If the corner cusps are lost at 360px, the motif is withdrawn rather than scaled up, because a frame with no cusps is decoration without meaning.
- **[Brass hairlines at 1px may fail contrast on Kora and Chandni]** → brass is decorative and `aria-hidden`, and the requirement forbids it on body text; still, verify against each of the four palettes at 1px before merge and darken `--orn-line` per palette rather than thickening it.
- **[The seal's settle animation could overlap the celebration burst]** → the burst is inside the cast subtree and the seal sits below it; the seal's 400ms window starts on the same event, so stagger by `animation-delay: 120ms`.
- **[Rule-based ₹ annotations may be mistaken for a citation]** → the rule is hairline brass only, no colour shift to a "link" hue, and the annotation is excluded from links, code spans and citations by `inr.ts`'s existing target list.
- **[Ornament cap drift]** → the ≤2 motifs per page rule is checked in `reports/qa.md` at review time; the four surfaces in this change each count as one motif, so no page can carry two without the layering rule being broken on purpose.

## Migration Plan

1. Land `ornament.css` + tokens with no consumers; verify the build and Check 9 are unchanged.
2. Land the map lattice, then the ₹ rule (both are local to existing components).
3. Land the arch crown, then the seal with the calm-chapter branch.
4. Re-run the full gate set (`scripts/verify.ts`, `scripts/scan-dist-terms.mjs`, `scripts/check-links.mjs`, Playwright at the four viewports, mobile Lighthouse), record the results in `reports/qa.md`, bump to v2.7.0 in `CHANGELOG.md` and `DECISIONS.md`.

Rollback: every step is additive and independent. Reverting the map step restores the v2.6.1 bead grid; reverting `ornament.css` alone strips the arches and the seal styling while leaving all content and interaction intact.

## Open Questions

- Whether the four corner cusps survive at 360px without thickening past 1px — answerable by looking at the built page, and the mitigation above already covers the outcome.
- Whether the seal should carry the chapter numeral or the chapter's tip count — a copy choice, not a structural one; it changes no requirement.

## Implementation notes (as built)

Recorded after implementation, where the build diverged from or sharpened the plan above.

1. **D2's hit-area sentence was wrong, and the build fixed it.** The plan said overlapping 44px targets "resolve to the topmost" and treated that as acceptable. Measurement on the shipped map showed the topmost is whichever `::after` painted last, so a press on bead 1-3 landed on 1-13. The lattice and the 44px target are both unchanged; instead a primary pointer press is resolved to the nearest bead centre within `anchor.closest('.chapter-cluster')`, and keyboard activation (`event.detail === 0`) or a non-primary button keeps the anchor's own href. This is a press-resolution fix, not a reflow: still no resize listener, no per-bead style write.
2. **D1 ships two paths, not one.** The lit loop alone left a fresh or JavaScript-blocked map with no visible contour (a `stroke-dashoffset` of 1 hides the whole shape), which would break the JS-blocked contract. Each cluster therefore holds a dim static `.orn-kolam-base` with the same `d`, plus the lit loop on top. Only the loop is progress-dependent.
3. **D6's import position is unachievable as written.** `src/layouts/BaseLayout.astro` loads `comic.css` before `ui.css`, so "after ui.css and before comic.css" has no place in that order. The import sits directly after `ui.css` (the last stylesheet), which preserves the property that matters — ornament rules override the base rules they refine, and nothing outranks cast layering.
4. **The ₹ rule moved out of `ui.css` entirely** (D5 placed it in `ui.css`). It now lives in `ornament.css` so that every `--orn-*` consumer is an ornament rule; `ui.css` has no `inr-ref` left.
5. **Calm chapters keep the celebration panel, losing only the ink frame.** D4 assumed the section could stay as-is; the calm rule had to be narrowed because the seal lives inside it. `[data-calm-chapter="true"] .chapter-celebration` drops the fill, the 2px ink border and the offset shadow, and suppression now covers only `.comic-bubble-wrapper` and `.character-wrapper`. This also exposed a dead guard in `src/cast/particle-burst.ts` (it read `document.body.dataset.calmChapter` while the flag lives on `.chapter-page-root`); the burst is now imported only when `.celebration-cast` exists.
6. **D3's open question is answered by measurement.** At 360px with browser text at 130%, the arch spans 328px at exactly 22px tall, sits on the panel topline (gap 0), and the title link's focus ring keeps 17px of side clearance and 48px above against a 5px ring extent.

Verification lives in `reports/qa.md` (v2.7.0 block) and `tests/ornament.spec.ts`.
