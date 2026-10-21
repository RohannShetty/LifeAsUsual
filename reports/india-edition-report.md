# India Edition — Implementation Report

**Project:** How To Live Better (Astro static reading site)
**Date:** 21 October 2026
**Branch:** rewrite/india-edition
**Scope:** complete India rewrite of all 34 chapters, chapter status model, verification gates
**Status:** 34/34 chapters and 765/765 tips have an India draft; structural gate green; independent verification in progress

## 1. Coverage

| Signal | Value |
| --- | --- |
| Chapters with an India file | 34 of 34 |
| Tips in the India edition | 765 of 765 |
| Chapter status | 34 draft |
| Banned source-edition terms in built HTML | 0 across 52 pages |
| High-risk claims tracked | 119 |
| Playwright checks | 140 passed across 360, 390, 768 and 1440 px |

Every chapter now has a file in `data/en-in/chapters/` and an entry in `data/en-in/manifest.json`.
Chapters 7 and 19 were written in an earlier pass; the remaining 32 were rewritten in this pass.

## 2. What changed

- `data/en-in/chapters/` now holds 34 India chapter files, 765 tips, all with `edition: india` and a review status.
- `data/en-in/manifest.json` is the status authority. Every chapter records status, tier, tip count, verifier, verified date, source count, human-review state, open issues and banned-term count.
- `scripts/verify-india.ts` validates chapter count, tip count, required fields, unique IDs, chapter/tip sequencing, banned terms, official Indian sources for India claims, review-status consistency and verification reports. `--final` fails unless all 34 chapters and 765 tips are checked or reviewed.
- `scripts/scan-dist-terms.mjs` scans built HTML in wave mode and `--final` scans all 52 pages.
- `scripts/build-india-chapter.ts` generates chapter JSON from the source edition plus per-chapter overrides, with a conservative auto pass for medium/low-risk tips.
- `scripts/build-india-worklist.ts` regenerates `reports/india-rewrite-worklist.csv` from the manifest.
- `tests/india-rewrite.spec.ts` covers every rewritten chapter at four viewports: status notice, draft/checked badge count, banned terms, horizontal overflow, and reading-state persistence.
- `.github/workflows/india-verify.yml` runs verify, Astro check, build, term scan and Playwright.

## 3. Gates

| Gate | Command | Result |
| --- | --- | --- |
| Schema and coverage | `npm run verify:india` | PASS |
| Astro type check | `npm run check` | PASS |
| Production build | `npm run build` | PASS, 52 pages |
| Built-site term scan | `node scripts/scan-dist-terms.mjs --final` | PASS, 0 hits in 52 pages |
| Playwright (4 viewports) | `npx playwright test tests/india-rewrite.spec.ts` | 140 passed |

## 4. Verification status

Independent verification reports are being produced chapter by chapter in `reports/verification/`.
Until a report records a PASS, the chapter stays `draft` in the manifest and shows a Draft rewrite
badge. Tier A legal, medical and financial chapters stay checked-draft even after a PASS until a
named human reviewer signs off. No chapter is marked `reviewed`.

## 5. Open issues

- Independent verification of the 119 high-risk claims is in progress.
- Tier A human review is outstanding for the legal, medical and financial chapters.
- A source pack exists for every chapter; official portals that returned 403 or DNS failures are
  recorded in the per-chapter packs.
- The final merge to master and the Pages deployment are the publishing step and are not performed
  until verification and the full suite pass.

## 6. Rollback

Revert the branch or the merge commit. Chapter files are additive and `data/en` is untouched.
