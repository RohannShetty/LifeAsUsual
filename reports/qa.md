# QA Acceptance Report: How To Live Better

Status: In Progress (Milestone M0)

## Check 1: Parse Verification
- [x] Total tips = 765 (Verified: 765)
- [x] Evidence grades: A = 495, B = 218, C = 52 (Verified: A=495, B=218, C=52)
- [x] Value tiers: Very high = 122, High = 344, Average = 299 (Verified: 122 / 344 / 299)
- [x] Disputed tips = 88; Still being verified = 3 (Verified: 88 / 3)
- [x] Scope counts: Lifespan = 274, Money = 290, Freedom = 124, Time = 77 (Verified: 274 / 290 / 124 / 77)
- **Status:** PASS (Run on 2026-10-19)

## Check 2: Translation & Content Integrity
- [x] 0 CJK characters in production build / data (Verified: 0 CJK across all 765 tips)
- [x] Arabic numerals, percentages, and units checked (Verified: 11,682 number checks)
- [x] URLs and DOIs verified (Verified: 2,491 URL checks)
- [x] Glossary consistency verified
- **Status:** PASS (Run on 2026-10-19)

## Check 3: Cross-References & Links
- [ ] All `见第 N 节第 M 条` references resolve to anchor IDs
- [ ] No broken internal links
- [ ] Zero leftover raw comments or tokens

## Check 4: Review Log
- [ ] Chapter 4 pilot reviewed line-by-line
- [ ] 3 random tips per chapter spot-checked in `reports/spotcheck.md`

## Check 5: Playwright Mobile & E2E
- [ ] 360x800 viewport: no horizontal scroll
- [ ] 390x844 viewport: no horizontal scroll
- [ ] 768x1024 viewport: tablet layout verified
- [ ] 1440x900 viewport: desktop left rail verified
- [ ] Touch targets $\ge 44\text{ px}$
- [ ] LocalStorage progress survives reload; Reset, Export, Import tested

## Check 6: Budgets & Performance
- [ ] Reader page JS $\le 60\text{ KB}$ gzip
- [ ] Character SVG $\le 25\text{ KB}$
- [ ] Comic font $\le 25\text{ KB}$
- [ ] Lighthouse mobile: Performance $\ge 90$, Accessibility $\ge 95$

## Check 7: Legal & Attribution
- [ ] CC BY 4.0 license link on all pages
- [ ] Author credit to eternity4719
- [ ] Mainland China legal disclaimers present

## Check 8: Comic Layer Discipline
- [ ] Dialogue lint: max 12 words per bubble, no advice words
- [ ] Calm chapters render zero cast, SFX, or bursts
- [ ] Comic effects toggle removes all cast and bursts
- [ ] Zero characters/halftone/outlines in reading column

## Check 9: Motion & View Transitions
- [ ] Route changes use panel wipe or 200ms fade fallback
- [ ] No layout shift during transitions
- [ ] No task $>50\text{ ms}$ on throttled profile
