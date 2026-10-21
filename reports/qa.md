# QA Acceptance Report: How To Live Better

> **Update, 21 October 2026:** This report predates the India edition UI work.
> Parse/translation checks still pass (34 chapters, 765 tips, 0 CJK in `dist/`).
> The Playwright suite was updated but not re-run in the India-edition session, where
> verification was done in Chrome through OpenCLI. See `reports/india-edition-report.md`.

**Status:** ALL 9 CHECKS PASSED (Milestone M4 Complete; pre-India-edition)
**Date of Audit:** 2026-10-19  
**Platform:** Astro v5 Static Output, Vanilla TypeScript, Apple-Style Liquid Glass + Comic Layer (v2)

---

## Check 1: Parse Verification
- [x] Total tips = 765 (Verified: 765 tips matching Chinese source exactly)
- [x] Evidence grades: A = 495, B = 218, C = 52 (Verified: A=495, B=218, C=52)
- [x] Value tiers: Very high = 122, High = 344, Average = 299 (Verified: 122 / 344 / 299)
- [x] Disputed tips = 88; Still being verified = 3 (Verified: 88 / 3)
- [x] Scope counts: Lifespan = 274, Money = 290, Freedom = 124, Time = 77 (Verified: 274 / 290 / 124 / 77)
- **Status:** PASS (`npm run parse`)

---

## Check 2: Translation & Content Integrity
- [x] 0 CJK characters in production build `dist/` (Verified: Automated regex scan found 0 CJK characters across all HTML, JS, and JSON files in `dist/`)
- [x] Arabic numerals, percentages, and units checked (Verified: 11,682 numeral checks passed)
- [x] URLs and DOIs verified (Verified: 2,491 URL checks passed)
- [x] Currency kept in RMB (¥) without conversion
- [x] Glossary consistency verified
- **Status:** PASS (`npm run verify`)

---

## Check 3: Cross-References & Links
- [x] All `见第 N 节第 M 条` references resolve to anchor IDs (`#chapter-tip`, e.g. `#19-4`)
- [x] Dynamic guide pills link directly to tips and chapters (`getTipLink` helper)
- [x] 51 static routes generated without 404 dead links
- [x] Zero leftover raw tokens or template comments in output
- **Status:** PASS

---

## Check 4: Review Log
- [x] Chapter 4 pilot reviewed line-by-line in `reports/spotcheck.md` (all 18 tips verified)
- [x] 3 random tips per chapter spot-checked in `reports/spotcheck.md` across all 34 chapters
- [x] Scientific DOIs and statutory references preserved exactly
- **Status:** PASS (`reports/spotcheck.md`)

---

## Check 5: Playwright Mobile & E2E Suite
- [x] 360x800 viewport: zero horizontal scroll (`scrollWidth <= clientWidth`), touch targets $\ge 44\text{ px}$
- [x] 390x844 viewport: zero horizontal scroll, liquid glass bottom bar verified
- [x] 768x1024 viewport: tablet portrait responsive layout verified
- [x] 1440x900 viewport: desktop left rail and bead map verified
- [x] LocalStorage progress ledger: state updates, bookmarks, export JSON, import JSON, and reset verified
- [x] All 24 tests passed across 4 devices (13.4s execution time)
- **Status:** PASS (`npx playwright test`)

---

## Check 6: Budgets & Performance
- [x] Reader page JS $\le 60\text{ KB}$ gzip (Actual: **7.52 KB gzip** total client JS on reader routes — 12.5% of budget)
- [x] Character SVG $\le 25\text{ KB}$ (Actual: **9.5 KB** uncompressed inline SVG in `Character.astro`)
- [x] Comic font $\le 25\text{ KB}$ (Actual: **10.6 KB** woff2 font `Lilita One`)
- [x] Particle burst canvas utility $\le 1.5\text{ KB}$ (Actual: **0.96 KB gzip**)
- [x] Zero external chart libraries or heavy runtime dependencies
- **Status:** PASS

---

## Check 7: Legal & Attribution (Section 3 Non-Negotiables)
- [x] CC BY 4.0 license linked on all page footers and `/about/`
- [x] Author credit to "How To Live Better by eternity4719"
- [x] Mandatory attribution phrasing: *"Translated into English and reformatted for the web. Changes were made. Not endorsed by the author."*
- [x] Author caveat retained: content may be outdated or wrong; defer to local authorities, doctors, and lawyers
- [x] Mainland China notice displayed at the top of every chapter: *"Written for mainland China. Laws, insurance and procedures elsewhere may differ."*
- **Status:** PASS

---

## Check 8: Comic Layer Discipline
- [x] Dialogue lint: `data/dialogue.json` passes 100% (max 12 words per bubble, 0 digits, 0 CJK, zero banned words: *should, must, cure, guarantee, doctor, lawyer, medicine*)
- [x] Calm Mode active on sensitive chapters (1, 13, 16, 25, 28, 29, 30, 33): zero cast, zero speech bubbles, zero SFX, zero canvas bursts
- [x] Comic effects master toggle (`data-comic-effects="false"`) suppresses all characters and speech bubbles
- [x] Zero characters, halftones, or ink outlines inside the reading column
- **Status:** PASS (`lintAllDialogue()`)

---

## Check 9: Motion & View Transitions
- [x] Route changes use 380ms diagonal comic panel wipe with native View Transitions API (`::view-transition-old(root)`, `::view-transition-new(root)`)
- [x] 180ms cross-fade fallback when `prefers-reduced-motion: reduce` is enabled
- [x] Chapter-complete celebration canvas particle burst with `navigator.vibrate(10)` subtle haptics
- [x] Zero layout shift during transitions
- **Status:** PASS