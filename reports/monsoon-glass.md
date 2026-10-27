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
