# Redesign — after the change

**Date:** 2026-10-26
**Baseline:** commit `042967f` (v2.4.0), clean tree, all nine acceptance checks green.
**Proposal:** `reports/redesign-proposal.md`.
**Scope actually shipped:** Phases 1, 2 (weights and type roles), 3 (material and the two page templates) and 6 (comic toggle). Phases 4 and 5 are partially landed: view transitions are re-cut into named groups, but there is no `transition:persist`, no scroll-linked motion and no `@starting-style` drawers.

---

## 1. What changed, file by file

| File | Change | Why |
| --- | --- | --- |
| `src/cast/Bubble.astro` | `:global([data-comic-effects="off"]) .comic-bubble-wrapper` (was `="false"`) | Settings write `"on"/"off"`; the reader was listening for `"false"`, so Comic effects off never removed a bubble. |
| `src/cast/Character.astro` | same selector fix | Same bug, characters. |
| `src/cast/particle-burst.ts` | `dataset.comicEffects !== 'off'` | Same bug, canvas burst. Third site, missed by the original audit. |
| `src/layouts/BaseLayout.astro` | Deleted the dead scoped `::view-transition-*` block (43 lines) | Scoped styles never match view-transition pseudo-elements, which live outside the component scope. One definition now lives in `comic.css`. |
| `src/styles/comic.css` | Named groups `chrome-rail`, `chrome-nav`, `reading-column`; root and chrome hold, the reading column leaves in 130 ms and arrives in 260 ms | The old wipe transformed the whole root group, so the rail, the nav and the sticky header rode along with the page. Now only the content moves, on the compositor. |
| `src/styles/fonts.css` | Literata roman `font-weight: 400 900`, Bricolage `200 800` | Measured from the shipped `fvar` tables: Literata roman really reaches 900, Bricolage really reaches 800. The `@font-face` ranges were under-declared, so every heavy headline was clamped to 700 or faked. |
| `src/styles/ui.css` | `.paper` and `.plate` material classes | A neutral page material for content surfaces, so `backdrop-filter` is reserved for chrome. |
| `src/pages/index.astro` | Three home panels: glass → `paper` (2) and `plate` (1) | Home no longer paints three blurring surfaces over one another. |
| `src/pages/chapters/[n]-[slug].astro` | Chapter opener: hairline + jade flag rule, title in Literata 600 at 1.85–2.6 rem, meta line demoted to a 0.78 rem tracked sans caption. Pagination cards glass → `paper`. | The opener now reads as the opening of a chapter rather than as a card with a heading. Markup unchanged. |
| `src/components/TipCard.astro` | Card `fake-glass` → `paper` with the opaque theme background and no shadow; title in Literata 600; metadata chips flattened into one tracked caption line separated by slashes; Cost/Benefit boxes become two ruled columns under a single hairline; caveats box becomes a rule-plus-label aside; body-of-card type returns to the serif | The card was five nested rounded boxes inside a sixth. It is now one page with four rules, which is what the proposal's "one tip is one entry in a field guide" meant. |

Nothing under `data/`, `scripts/`, `tests/`, `source/`, `astro.config.mjs`, the legal strings, the palettes or the palettes' hues was touched.

## 2. Verification

Run on 2026-10-26 against a clean `dist/` (build 106 s, 52 pages):

| Gate | Result |
| --- | --- |
| `scripts/verify.ts` | 34/34 chapters, 765/765 tips, 2491 URL checks, 11,682 number checks, zero CJK — Check 2 PASSED |
| `scripts/scan-dist-terms.mjs` | 37 pages, no banned terms |
| `scripts/check-links.mjs` | 52 pages, 2,234 internal links, all resolve |
| `pagefind` | 52 pages, 18,268 words indexed |
| Playwright, 4 viewports | **184 passed, 0 failed** (both suites, after the changes) |
| Reader JS on a chapter page | 9,763 B gzip (cap 60 KB) — ClientRouter 5,266 + SettingsSheet 1,392 + BaseLayout 1,810 + chapter 1,295 |
| Comic font | 10,672 B (cap 25 KB) |
| Font payload total | 221,088 B — unchanged, no font file added or removed |

Computed-style probe at 1440×900 and 360×800 on `/chapters/01-do-not-die-early/`:

```
h1 font           Literata, Georgia, serif / 41.6px / weight 600
hero ::before     rgba(255,255,255,0.1) 1px
tip title         Literata, Georgia, serif / weight 600
tip card class    paper tip-card
tip card bg       rgba(255,255,255,0.09)  box-shadow: none
meta chip         background transparent, border 0
rail              view-transition-name: chrome-rail
reading column    view-transition-name: reading-column
horizontal overflow  0 px at 1440 and at 360 (= 0 px)
```

**Not run: Lighthouse.** No Lighthouse, Chrome-launcher or Chromium-based auditing package is installed in this checkout and the session has no network install path, so the mobile performance/a11y/BP/SEO scores in Check 6 are unverified for this revision. The bundle numbers above are the evidence that is available; a Lighthouse run on a machine that has it should be treated as the outstanding gate.

**Not run: screenshot review.** This model cannot accept image input (the host reports "does not declare image input"), so no rendered page was visually inspected. Every claim above about appearance is a computed-style or geometry measurement. A human or an image-capable model should look at 360, 390, 768 and 1440 in both themes before this is called finished.

## 3. What is deliberately not done

- No new font, so no new network request and no licence question.
- No type-scale token expansion: the ad-hoc `rem` sizes remain. The role split (serif for reading and headlines, sans for labels and chrome) is what changed.
- No `transition:persist` on the rail and nav, and no `view-transition-name`-driven rail morph. Named groups already stop the chrome from moving; persisting it would need a client-side re-assert of the active link on every route load, which is a state bug waiting to happen for no visual gain.
- No scroll-linked animation, no `@starting-style`, no spring tokens. Check 9 ("no task over 50 ms") is easier to keep with nothing to measure.
- No motion setting in the settings sheet — that is a new feature, and `AGENTS.md` §14.4 rules out new features.

## 4. Rollback

```bash
git checkout -- src/cast/Bubble.astro src/cast/Character.astro src/cast/particle-burst.ts \
  src/components/TipCard.astro src/layouts/BaseLayout.astro "src/pages/chapters/[n]-[slug].astro" \
  src/pages/index.astro src/styles/comic.css src/styles/fonts.css src/styles/ui.css
```

The comic-toggle fix (the three `"off"` selectors) is worth keeping even if the rest is reverted: without it, Acceptance Check 8 is red.

## 5. Still open

1. Lighthouse mobile on home, a chapter, and `/progress/` (Check 6).
2. A human look at the rendered pages, especially the new chapter opener at 360 px and the ruled Cost/Benefit columns, which are the two places where measurement cannot stand in for judgement.
3. Phases 4 and 5 as written in the proposal, if the visual direction is approved after that look.
