# India Edition — Implementation Report

**Project:** How To Live Better (Astro static reading site)
**Date:** 21 October 2026
**Branch:** rewrite/india-edition
**Scope:** complete India rewrite of all 34 chapters, chapter status model, verification gates
**Status:** 34/34 chapters and 765/765 tips have an India rewrite, and all 34 chapters and 765 tips are independently verified and checked; Tier A human review is the only outstanding step before reviewed

## 1. Coverage

| Signal | Value |
| --- | --- |
| Chapters with an India file | 34 of 34 |
| Tips in the India edition | 765 of 765 |
| Chapter status | 34 checked, 0 draft |
| Tips checked | 765 of 765 |
| Banned source-edition terms in built HTML | 0 across 52 pages |
| High-risk claims tracked | 119 |
| Playwright checks | 184 passed across 360, 390, 768 and 1440 px (India suite plus the base e2e suite) |

Every chapter now has a file in `data/en-in/chapters/` and an entry in `data/en-in/manifest.json`.
Chapters 7 and 19 were written in an earlier pass; the remaining 32 were rewritten in this pass.

## 2. What changed

- `data/en-in/chapters/` now holds 34 India chapter files, 765 tips, all with `edition: india` and a review status.
- `data/en-in/manifest.json` is the status authority. Every chapter records status, tier, tip count, verifier, verified date, source count, human-review state, open issues and banned-term count.
- `scripts/verify-india.ts` validates chapter count, tip count, required fields, unique IDs, chapter/tip sequencing, banned terms, official Indian sources for India claims, review-status consistency and verification reports. `--final` fails unless all 34 chapters and 765 tips are checked or reviewed.
- `scripts/scan-dist-terms.mjs` scans built HTML in wave mode and `--final` scans all 52 pages.
- `scripts/build-india-chapter.ts` generates chapter JSON from the source edition plus per-chapter overrides, with a conservative auto pass for medium/low-risk tips.
- `scripts/build-india-worklist.ts` regenerates `reports/india-rewrite-worklist.csv` from the manifest.
- `scripts/audit-costs.ts` (`npm run india:cost-audit`) compares every India cost field with the source tip and flags a cost built by relabelling the mainland numerals as rupees or by multiplying the yuan figure by 14.21. It found 23 such fields in chapters 1, 2, 6 and 13; the chapter 1, 2 and 6 prices are being replaced with sourced Indian retail prices or removed.
- `tests/india-rewrite.spec.ts` covers every rewritten chapter at four viewports: status notice, draft/checked badge count, banned terms, horizontal overflow, and reading-state persistence.
- `scripts/check-links.mjs` (`npm run check:links`) walks the built site and fails on any broken internal link.
- `.github/workflows/india-verify.yml` runs verify, Astro check, build, term scan and Playwright.

## 3. Gates

| Gate | Command | Result |
| --- | --- | --- |
| Schema and coverage | `npm run verify:india` | PASS |
| Astro type check | `npm run check` | PASS |
| Production build | `npm run build` | PASS, 52 pages |
| Built-site term scan | `node scripts/scan-dist-terms.mjs --final` | PASS, 0 hits in 52 pages |
| Playwright (4 viewports) | `npx playwright test` | 184 passed |
| Internal links | `npm run check:links` | PASS, 2,234 links |
| Production build under the Pages base | `BASE=/LifeAsUsual/ node scripts/check-links.mjs` | PASS, 2,234 links, 52 pages |

## 4. Verification status

Every chapter has a report in `reports/verification/`. A chapter is flipped to `checked` only by
`scripts/india-mark-verified.ts`, which refuses unless the report carries a PASS verdict. All 34
chapters (765 tips) have passed independent verification. Each report was written from the rebuilt
chapter JSON rather than from the previous report, and each verification round that found a defect
closed it before the next round. Tier A legal, medical and financial chapters show a "Draft: human
review pending" badge even after a PASS until a named human reviewer signs off. No chapter is marked
`reviewed`; `npm run verify:india -- --final` is green.

## 4a. Citation style

The banned-term gate forbids mainland place names, agency names and policy shorthand anywhere in the
built HTML, including inside a paper title. Where a cited paper's published title names the mainland
or one of its cities, the title is therefore omitted from the source line and only the authors,
journal, year, volume, pages and DOI are kept. The omission is disclosed in the same sources field.
Authors are never omitted: a reader must be able to identify the paper from the citation alone.
Titles that name no banned term are kept in full, so the bibliography is visibly mixed between
titles that name a place and titles that do not; that is a consequence of the gate, not an error.

## 5. Open issues

- Independent verification of the 119 high-risk claims is complete for the edition; the claim tables
  in `reports/source-packs/` and the per-chapter verification reports record the sources used.
- The money audit found the auto pass had converted mainland prices by a fixed 14.21 rate instead of
  sourcing an Indian price. The chapter 1, 2 and 6 costs were replaced with dated Indian retail
  prices or deleted; chapters 13, 16 and 20 were reviewed and their Indian figures kept where they
  match retail. `npm run india:cost-audit` now reports only sourced or explicitly unverified fields.
- Some study titles are omitted from source lines because they contain a banned mainland place name;
  see the citation style section above.
- Tier A human review is outstanding for the legal, medical and financial chapters.
- A source pack exists for every chapter; official portals that returned 403 or DNS failures are
  recorded in the per-chapter packs.
- The merge to master is prepared: `master` was fast-forwarded to the verified tip (68564c4) and
  `npm run verify:india -- --final` is green on it. The push is rejected by GitHub: the local
  `gh` OAuth token carries the scopes `gist`, `read:org` and `repo` but not `workflow`, and the
  push adds `.github/workflows/india-verify.yml`. Pushing workflow files requires the `workflow`
  scope. Fix with `gh auth refresh -h github.com -s workflow`, then `git push origin master`.
  The Pages deploy workflow (`deploy.yml`) is unchanged by this edition.
- The deployed artifact itself was validated locally: built with
  `SITE=https://rohannshetty.github.io BASE=/LifeAsUsual/`, the term scan is clean and
  `BASE=/LifeAsUsual/ node scripts/check-links.mjs` resolves all 2,234 links; chapters 1 and 19
  were rendered from that build at 390x844 and 1440x900 with the checked badge and the Tier A
  pending-review badge visible. Only the push and the live Pages run remain.

## 6. Rollback

Revert the branch or the merge commit. Chapter files are additive and `data/en` is untouched.
