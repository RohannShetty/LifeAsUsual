# Monsoon Glass — implementation report

Date: 2026-10-27
Version: 2.6.0
Scope: reading surface, material system, type, evidence fold, mobile performance

## 1. Thesis

The reader asked for a whole-glass reading surface, a livelier interface, an Indian identity without clip art, and a fold over the per-tip evidence block that was dominating every chapter. "Monsoon Glass" does all four with one idea: the page is a glass shell over a living ground. The ground carries the Indian colour and the motion; the glass is thick enough that only colour moves behind the type, never the type itself.

## 2. What shipped

| Area | File | Change |
| --- | --- | --- |
| Palette and materials | `src/styles/tokens.css` | Grounds Neel `#0A1230`, Monsoon `#12100E`, Chandni `#EFF2F4`, Kora `#F7F3EA`. Accents Peacock `#3FC9B4`, Marigold `#EFAF3E`, Indigo-steel `#93A3C9`, plus Brass `#C8A24A` and Kumkum `#C24E58`. Five ascending glass tints, blur and saturation tokens, `--text-measure: 62ch`. `data-palette` IDs unchanged. |
| Ground | `src/styles/ground.css` (new) | Fixed `.monsoon-ground`, three accent pools at 11–16% alpha, 2.8% grain, 90 s drift, light variant, static reduced-motion variant. |
| Reading cards | `src/components/TipCard.astro` | Glass card on `--glass-thick` with hairline and lit edge; `content-visibility: auto`; Cost/Benefit/Caveats folded behind a brass "Open the notes" handle. |
| Blur budget | `src/scripts/glass-cards.ts` (new) | IntersectionObserver adds `.is-glassy` to at most 3 in-view cards, evicting the oldest; off for reduced transparency. |
| Type | `src/styles/fonts.css`, `src/styles/tokens.css`, `src/components/SettingsSheet.astro` | Mukta 400/700/800 replaces Bricolage as the interface face; Bricolage removed; palette names Neel/Monsoon/Chandni/Kora. |
| Shell | `src/layouts/BaseLayout.astro` | Ground element, transparent body, new theme colours, `html.js` boot class, glass-cards import. |
| Accessibility | `src/components/SettingsSheet.astro`, `src/pages/chapters/[n]-[slug].astro` | Closed sheets are `inert`; the "Tips (N)" button's visible text is its accessible name. |

The fold is the visible content change: a tip now opens as title, grade, plain words and a handle. Cost, Benefit and Caveats sit behind that handle, animate from `0fr` to `1fr` over 400 ms, keep `aria-expanded`/`aria-controls`/`inert` correct, close on Escape, and remember open cards for the session only (`htlb_notes_open_v1`). With JavaScript off, the notes render open and the handle is hidden.

## 3. Measurements

Contrast of the reading text against the composited card, computed from the resolved background colour per palette (390 px viewport, chapter 02):

| Palette | Ground | Card tint | Title/body contrast |
| --- | --- | --- | --- |
| Neel (dark) | `#0A1230` | 72% of ground | 15.98:1 |
| Monsoon (dark) | `#12100E` | 72% of ground | 16.33:1 |
| Chandni (light) | `#EFF2F4` | 72% white | 18.35:1 |
| Kora (light) | `#F7F3EA` | 72% white | 17.48:1 |

Lighthouse, chapter 02 (`reports/lighthouse-desktop.json`, `reports/lighthouse-mobile.json`):

| Preset | Perf | A11y | Best practices | SEO | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Desktop | 99 | 100 | 100 | 100 | 0.6 s | 0.6 s | 0 ms | 0.007 |
| Mobile (throttled) | 91 | 100 | 100 | 100 | 2.6 s | 2.8 s | 0 ms | 0.041 |

Mobile performance was 88 before `content-visibility` and the blur removal, with 2,022 ms of Style & Layout; after, 901 ms and 91. Accessibility was 96 with two real defects (focusable content inside `aria-hidden` closed sheets, and a button whose `aria-label` ignored its visible text) and is now 100.

Other gates: build 52 pages; `scripts/verify.ts` 34/34 chapters, 765/765 tips, 2,491 URLs, 11,682 numbers, 0 CJK; `scripts/scan-dist-terms.mjs --final` 52 pages clean; `scripts/check-links.mjs` 2,234 links resolve; Playwright 184 passed; client JS 16,987 B gzip across the build; font payload 207,308 B (Mukta 63,108 B added, Bricolage 76,888 B removed).

Fold geometry, measured in the browser: 0 px closed, 857.89 px open for a typical tip; horizontal overflow 0 px at 360, 390, 768 and 1440; no layout shift from the fold itself (CLS 0.041 comes from font and ground settling at load).

## 3b. Visual review (v2.6.1)

The session model cannot accept image input, so the screens were reviewed by a vision model: `modlens` run from the CLI (`npx @liustack/modlens analyze -i <png> -m "Gemini 3.8 Flash (Low)"`), against a local `astro preview`, with pages driven by Playwright and by Orca's built-in browser. Screenshots live in `reports/visual/` (gitignored). Nine screens were read: home and chapter, Neel / Chandni / Kora, 1440 px and 390 px, plus a 2x card-header crop.

What the review found, and what changed:

| Defect | Evidence | Fix |
| --- | --- | --- |
| Two status chips that contradict each other ("Checked" beside "Draft: human review pending") | every chapter card | one chip, "Review pending" / "Checked", full phrase in `title`, brass bead |
| Metadata line wrapped with an orphaned leading "/" | 390 px card | separators trail their pair and are dropped below 640 px |
| Pill text clipped by its own border | measured 30 px content inside a 23 px pill | block-level SVG in the chip, `line-height: 1.15`; now 21 px / 21 px |
| Pills squeezed to two lines inside a fixed height | 360–390 px, until `flex: none` | `flex: none; white-space: nowrap`, size via `--badge-fs`/`--badge-pad`/`--badge-h` |
| Body text reading through the floating nav | 390 px at rest | 104 px gradient scrim behind the capsule, trust shell padding raised to 6.25 rem |
| Nested rules inside a tip card (card, metrics, caveats) | 1440 px desktop | caveats section lost its own rule; the fold's brass rule is the only divider |
| "Sources & Citations" rendered as a filled rounded box inside the card | 1440 px desktop | flattened to a quiet 44 px disclosure row with a chevron; no second rectangle, no fill |
| Mascot bubble tight against the featured card | 1440 px home | hero margin 1.4 rem → 1.75 rem (measured gap 22 px → 28 px) |

Three findings were declined as false positives after measurement.

1. The US/NHTSA figures under an "India edition" banner are the faithful-translation rule working (`data/en-in/chapters/01-do-not-die-early.json` keeps and cites them).
2. The home column's right-hand whitespace is the centred app shell (rail 240 px + main 760 px, 220 px either side), not an alignment bug.
3. The flagged contrast of the teal "Very high ROI" pill and of the uppercase metadata labels. Measured, not eyeballed: the pill was screenshotted in all four palettes and its own flat interior colour taken as the modal colour of the crop, then compared with the painted text colour.

| Palette | ROI pill (text on pill) | Metadata label (text on card) | AA floor |
| --- | --- | --- | --- |
| Neel | 7.06:1 | 9.95:1 | 4.5:1 |
| Monsoon | 9.08:1 | 9.18:1 | 4.5:1 |
| Chandni | 5.15:1 | 7.60:1 | 4.5:1 |
| Kora | 5.19:1 | 7.06:1 | 4.5:1 |

The vision model saw the lively teal pill against a bright ground and inferred a contrast failure; the arithmetic says every combination clears AA, and the tightest (Chandni, 5.15:1) still has 14 % headroom. Nothing was darkened, because darkening a passing colour would have cost the palette its accent.

Re-audit after the fixes: "No clipping observed… badges are arranged horizontally on a single line with consistent baseline vertical alignment… metadata fits on exactly one clean line… no visual defects detected." Badge geometry was then checked as a matrix — 360/390/768 px × text size 100/115/130 % — with zero clipped pills and zero horizontal overflow; one row at 390 and 768, two tidy rows at 360.

Remaining known compromise: the floating nav still passes over body text mid-scroll. It hides on scroll-down, the scrim keeps contrast, and the shell reserves 6.25 rem so the last line always clears it; a nav that never overlaps would have to be a static bar.

## 4. Limits accepted

- **Blur is a budget, not a promise.** Three cards blur at once; a fast flick can leave a card opaque mid-scroll. The tint is thick enough that this reads as a material change, not a flash.
- **The ground moves.** Readers who set reduced motion get a static plane; the reduce-transparency setting makes cards opaque.
- **Bricolage is gone.** Its Latin subset had no rupee sign, so it was a 77 KB download that could not do the job it was kept for. `₹` now comes from the platform UI font; no external request is made.
- **The fold needs JavaScript for the transition**, not for reading. Without JS the evidence is open and quiet.
- **Ornament is capped**: one brass hairline vocabulary, three dots, one chamfer on the fold handle. No jali pattern was added to the reading column.

## 5. Open items

1. **Human visual review.** This session's model cannot accept image input; every aesthetic judgement above is computed style, geometry and contrast arithmetic. A person must look at the four palettes and the fold on a real phone.
2. **Tier A human review of the India rewrite** remains outstanding from `rewrite-india-edition`, independent of this redesign.
3. **Ornament phase not started**: kolam bead map, daily-panel arch, brass seal, `₹` reference styling are specified but out of this slice.
4. Lighthouse was run against the local preview on a synthetic throttled profile, not a deployed origin with real network conditions.
