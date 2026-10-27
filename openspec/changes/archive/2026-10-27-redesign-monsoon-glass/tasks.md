# Tasks: Redesign the reader as Monsoon Glass

## 1. Foundations

- [x] 1.1 Retint the four `data-palette` grounds to Neel `#0A1230`, Monsoon `#12100E`, Chandni `#EFF2F4`, Kora `#F7F3EA`; keep the IDs.
- [x] 1.2 Retint accents to Peacock `#3FC9B4`, Marigold `#EFAF3E`, Indigo-steel `#93A3C9`; add Brass `#C8A24A` and Kumkum `#C24E58` tokens.
- [x] 1.3 Define the five-rung glass ladder (ultra-thin 45%, thin 55%, regular 63%, thick 72%, opaque 94%), `--glass-blur-card`, `--glass-sat-card`, `--text-measure`.
- [x] 1.4 Sweep every hard-coded accent in `src/cast/`, `src/components/` and `src/pages/about.astro` to the new values; verify zero leftovers.
- [x] 1.5 Add `src/styles/ground.css` with dark, light and reduced-motion variants; mount `.monsoon-ground` in `src/layouts/BaseLayout.astro`.

## 2. Type

- [x] 2.1 Self-host Mukta 400/700/800 (Latin subset) and add `public/fonts/OFL-Mukta.txt`.
- [x] 2.2 Set `--font-sans` to Mukta with a platform UI fallback for `₹`; declare Mukta in `src/styles/fonts.css`.
- [x] 2.3 Remove Bricolage Grotesque: face, file and token reference, after confirming its subset has no U+20B9.
- [x] 2.4 Rename the type pill in `src/components/SettingsSheet.astro` to Mukta and the palette names to Neel, Monsoon, Chandni, Kora.

## 3. Glass reading cards

- [x] 3.1 Move `.tip-card` from `.paper` to `var(--glass-thick)` with hairline and lit top edge.
- [x] 3.2 Add `src/scripts/glass-cards.ts`: at most 3 in-view `.is-glassy` cards, oldest evicted, off under reduced transparency, re-init on `astro:page-load`.
- [x] 3.3 Add the reduced-transparency rule in `src/styles/glass.css` that forces tip cards opaque.
- [x] 3.4 Add `content-visibility: auto` and `contain-intrinsic-size: auto 420px` to `.tip-card`.

## 4. Evidence fold

- [x] 4.1 Restructure the card so Cost, Benefit and Caveats sit in `.notes-body` behind one `.notes-toggle` button with a brass rule, three dots and a chevron.
- [x] 4.2 Gate the collapsed state behind `html.js` so the notes render open without JavaScript.
- [x] 4.3 Animate `grid-template-rows` 0fr→1fr over 400 ms with a 40/80 ms stagger; collapse to 1 ms under reduced motion.
- [x] 4.4 Wire `aria-expanded`, `aria-controls` and `inert`; close on Escape and return focus; restore open cards from `sessionStorage` key `htlb_notes_open_v1`.
- [x] 4.5 Remove the closed-fold blur filter after measuring its layout cost.

## 5. Accessibility repairs

- [x] 5.1 Add `inert` to the closed TOC drawer and settings sheet, toggled on open and close.
- [x] 5.2 Remove the conflicting `aria-label="On this page"` from the chapter "Tips (N)" button.

## 6. Verification

- [x] 6.1 `npm run build`: 52 pages.
- [x] 6.2 `scripts/verify.ts`: 34/34 chapters, 765/765 tips, 2,491 URLs, 11,682 numbers, 0 CJK.
- [x] 6.3 `scripts/scan-dist-terms.mjs --final`: 52 pages, no banned terms. `scripts/check-links.mjs`: 2,234 links resolve.
- [x] 6.4 Playwright, both suites, 4 viewports: 184 passed.
- [x] 6.5 Mobile and desktop Lighthouse on a chapter page: performance 91/99, accessibility 100/100, best practices 100/100, SEO 100/100.
- [x] 6.6 Measure contrast on all four palettes (15.98/16.33/18.35/17.48), fold geometry (0 px → 857.89 px), overflow at 360/390/768/1440 (0 px), and client JS (16,987 B gzip).
- [x] 6.7 Record the change in `CHANGELOG.md`, `DECISIONS.md` (ADR-010), `reports/qa.md` and `reports/monsoon-glass.md`.

## Follow-ups (outside this change)

- Human visual review of the four palettes and the fold on a real device; this session could not accept image input.
- Ornament phase: kolam bead map, daily-panel arch, brass seal, `₹` reference styling.
- Tier A human review of the India rewrite (tracked in `rewrite-india-edition`).
