# Tasks

> Status: all 17 tasks implemented and verified in this session. Evidence: `reports/qa.md` (v2.7.0 block,
> four gates + 216 Playwright tests), `tests/ornament.spec.ts` (32 ornament checks), `reports/tools/measure-reader-js.mjs`
> (budgets), and `design.md` → *Implementation notes (as built)* for the four places the build diverged.
> Archiving still waits on the human visual review in *Workflow follow-up*.

## 1. Ornament foundation

- [x] 1.1 Create `src/styles/ornament.css` with the brass ladder tokens (`--orn-hairline: 1px`, `--orn-rule: 2px`, `--orn-bead: 5px`, `--orn-arch-h: 22px`, `--orn-gap: 20px`) and a `--orn-line` mix per palette, and import it in `src/layouts/BaseLayout.astro` after `ui.css` and before `comic.css`. Verify: `npm run build` succeeds and the built pages are byte-identical in rendered text to the pre-change build (`diff` of the `dist/` text extract shows only the new stylesheet link).
- [x] 1.2 Verify no token shadows an existing one: grep `--orn-` across `src/styles/` and confirm each name is defined once and consumed only by ornament rules, and that `--color-brass` is referenced, never redefined.

## 2. Kolam reading map

- [x] 2.1 In `src/components/ReadingMap.astro`, add the per-chapter contour SVG overlay (single closed cusp-corner path in a 100×100 viewBox, `preserveAspectRatio="none"`, `vector-effect="non-scaling-stroke"`, `pathLength="1"`, `stroke-dasharray="1 1"`, `stroke-dashoffset: calc(1 - var(--kolam-trace, 0))`) and make `.chapter-cluster` its positioning context. Verify: the overlay renders inside each cluster with no change to cluster width or bead pitch (`--kolam-pitch` stays 20px) at 360px and 1440px.
- [x] 2.2 Have the existing map script write `--kolam-trace` per chapter from the ledger, alongside the current `.is-read` toggle, with no new listener and no per-bead style write. Verify: marking every tip of one chapter read sets that cluster's trace to 1 and leaves other clusters at 0; the read counter text is unchanged.
- [x] 2.3 Verify the JS-blocked contract: build, load the progress page with scripting disabled, and confirm all 765 bead anchors, the lattice, and every contour path are present (only the lit state and trace missing), and that the `<details>` table still mirrors the full map.
- [x] 2.4 Verify navigation and touch targets: Playwright at 360×800 and 1440×900 clicks three beads in different chapters and lands on the right tip anchor; computed hit-area of `.map-bead::after` is ≥44px; no horizontal overflow.

## 3. Ruled ₹ reference

- [x] 3.1 Replace the `.inr-ref` filled pill in `src/styles/ui.css` with the hairline bottom rule, `tabular-nums`, no background, no radius, 0.78em size, and keep the `[data-show-inr="false"]` display rule verbatim. Verify: a chapter with an author amount shows `≈ ₹` *after* the figure with a 1px brass rule and no filled background in all four palettes.
- [x] 3.2 Confirm `src/scripts/inr.ts` needs no targeting change and that annotations never land inside `a`, `code`, or citation spans. Verify: `npm run build` then grep the built chapter HTML for `inr-ref` inside `<a`/`<code` contexts and find none; toggle the setting off and confirm no `inr-ref` is emitted or left hidden in the a11y tree.

## 4. Arch crown on the daily panel

- [x] 4.1 Add the cusped arch SVG crown above the daily panel's topline in `src/pages/index.astro` (`aria-hidden="true"`, stroke-only, full content width, height `var(--orn-arch-h)`), leaving the panel's 18px radius, padding, and backdrop-filter untouched. Verify: at 360×800 with browser text size at 130% the panel has no overflow, the headline/badges/CTA keep their clearance, and the title link's focus ring is fully visible on keyboard focus.
- [x] 4.2 Verify ornament-cap compliance on the home page: count drawn motifs and confirm the arch is the only one, and that the daily panel's lead text and CTA keep their existing DOM order for screen readers.

## 5. Brass seal at chapter completion

- [x] 5.1 Add the static inline seal SVG (concentric hairline rings, radial ticks, chapter numeral in `--font-sans` with `tabular-nums`, `aria-hidden="true"`) inside `.chapter-celebration` in `src/pages/chapters/[n]-[slug].astro`, rendered for every chapter, with the cast still behind `!isCalm`. Verify: a calm chapter renders the seal and no `Character`/`Bubble` node; a non-calm chapter renders both; the seal appears after the celebration copy in DOM order.
- [x] 5.2 Give the seal its ≤400ms settle (opacity + one ring dashoffset, `animation-delay: 120ms`) under `@media (prefers-reduced-motion: no-preference)` only. Verify: with reduced motion on the seal is present at final state with no animation; with Comic effects off the seal is still rendered and no burst fires.
- [x] 5.3 Verify the cap and the column rule: no fill, no character/SFX/halftone/outline inside `.reading-column`, and at most two drawn motifs on a chapter page (the seal plus at most the existing fold rule bead).

## 6. Integration gates and release record

- [x] 6.1 Run the full gate set against a clean `npm run build`: `scripts/verify.ts` (34/34 chapters, 765/765 tips), `scripts/scan-dist-terms.mjs --final` (0 banned terms, 0 CJK), `scripts/check-links.mjs` (all links resolve), and record the outputs in `reports/qa.md`. Verify: every check in `reports/qa.md` reads PASS with the measured numbers, and any check still unrun is marked unverified rather than passed.
- [x] 6.2 Run Playwright at 360×800, 390×844, 768×1024, 1440×900 in light and dark, reduced motion on/off, Comic effects on/off, and confirm no horizontal overflow, ≥44px touch targets, progress persistence, and the chapter-complete moment firing exactly once. Verify: the Playwright report passes with the spec count recorded in `reports/qa.md`.
- [x] 6.3 Measure mobile Lighthouse (performance, a11y, best practices, SEO) for a chapter page and the progress page, confirm reader JS stays ≤60KB gzip and the SVG additions do not push it over, and record the four scores with the run date. Verify: all four scores meet their Check 6 thresholds, or the ornament step that regressed them is reverted and re-measured.
- [x] 6.4 Record the release in `CHANGELOG.md` (v2.7.0) and `DECISIONS.md` (why brass is a material, why the loop is a scaled contour and not a serpentine, why the arch is drawn above the panel), then confirm `openspec validate redesign-monsoon-ornaments --strict` stays green. Verify: both files name the change and the decision rationale matches design.md.

## Workflow follow-up

- Archive `redesign-monsoon-ornaments` after the human visual review of the four palettes and the fold on a real phone is recorded, since that review is reviewer-owned and cannot be completed in-session.
- Re-check the ornament cap rule in `openspec/specs/brass-ornament/spec.md` against the archived spec once the change lands.
