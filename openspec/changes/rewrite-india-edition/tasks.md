# Tasks

## 1. Verification infrastructure

- [x] 1.1 Add scripts/verify-india.ts to validate manifest-declared chapters: 34/34 chapters and 765/765 tips in final mode, required fields, unique IDs, banned terms, official source domains, review status and matching verification reports. Verify with npm run verify:india on the current one-chapter state and with a deliberately broken fixture that must exit non-zero.
- [ ] 1.2 Add scripts/scan-dist-terms.mjs to scan built HTML for China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao and CNY. Verify the current Chapter 19 page reports 0 hits and an injected fixture term fails.
- [x] 1.3 Add data/en-in/manifest.json with chapter status, verifier, verifiedAt, sourceCount, humanReview, openIssues and bannedTerms. Verify the India page and worklist read their completed/queued lists from it.
- [x] 1.4 Add reports/source-packs/_template.md and reports/verification/_template.md with claim, source, section, access date, verdict and open-issue fields. Verify the Chapter 19 source pack and verification report use the templates.
- [x] 1.5 Add tests/india-rewrite.spec.ts covering banned terms, draft/checked badge, chapter notice, no horizontal overflow and reading-state persistence. Verify with npx playwright test tests/india-rewrite.spec.ts across 360, 390, 768 and 1440.
- [x] 1.6 Create the rewrite/india-edition branch and add the India CI workflow (verify:india, dist scan, Astro check, Playwright). Verify the workflow YAML is valid and a local dry run of every command passes.
- [ ] 1.7 Produce the independent verification report for Chapter 19 and set its manifest entry to checked-draft or checked. Verify the claim matrix covers every high-risk tip and the report records all open issues.

## 2. Wave 1: legal and money

- [ ] 2.1 Chapter 7 (How to Live When You Have No Money): source pack, 23-tip India rewrite, independent verification, no banned terms and chapter Playwright pass; verify npm run verify:india -- --chapter 7 and the report has no unresolved high-risk claim.
- [ ] 2.2 Chapter 8 (Law and Property Safety): source pack, 46-tip India rewrite, independent verification, no banned terms and chapter Playwright pass; verify npm run verify:india -- --chapter 8.
- [ ] 2.3 Chapter 5 (Do Not Waste Money): source pack, 50-tip India rewrite, independent verification, no banned terms and chapter Playwright pass; verify npm run verify:india -- --chapter 5.
- [ ] 2.4 Chapter 9 (Everyday Legal Red Lines): source pack, 29-tip India rewrite, independent verification, no banned terms and chapter Playwright pass; verify npm run verify:india -- --chapter 9.
- [ ] 2.5 Chapter 12 (Starting Your Own Business): source pack, 28-tip India rewrite, independent verification, no banned terms and chapter Playwright pass; verify npm run verify:india -- --chapter 12.
- [ ] 2.6 Chapter 29 (After a Major Blow): source pack, 14-tip India rewrite, independent verification, no banned terms and chapter Playwright pass; verify npm run verify:india -- --chapter 29.
- [ ] 2.7 Run the wave gate: all six chapters checked, manifest updated, worklist/report updated, full build and focused Playwright pass; verify git commit and wave QA note.

## 3. Wave 2: health, family and benefits

- [ ] 3.1 Chapter 24 (Navigating Healthcare and Doctors): source pack, 15-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 24.
- [ ] 3.2 Chapter 25 (After Someone Dies): source pack, 12-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 25.
- [ ] 3.3 Chapter 27 (Pregnancy and Childbirth): source pack, 20-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 27.
- [ ] 3.4 Chapter 17 (Elderly at Home): source pack, 13-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 17.
- [ ] 3.5 Chapter 15 (Renting and Buying Housing): source pack, 18-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 15.
- [ ] 3.6 Chapter 23 (Which Skills to Learn): source pack, 25-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 23.
- [ ] 3.7 Chapter 31 (Paths After Eighteen): source pack, 17-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 31.
- [ ] 3.8 Chapter 33 (Living with Disability): source pack, 21-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 33.
- [ ] 3.9 Run the wave gate: eight chapters checked, manifest updated, worklist/report updated, full build and focused Playwright pass; verify git commit and wave QA note.

## 4. Wave 3: safety, health and family

- [ ] 4.1 Chapter 1 (Do Not Die Early): source pack, 48-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 1.
- [ ] 4.2 Chapter 2 (Do Not Die Slowly): source pack, 47-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 2.
- [ ] 4.3 Chapter 3 (Do Not Waste Energy): source pack, 27-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 3.
- [ ] 4.4 Chapter 10 (Are Dating and Marriage Worth It): source pack, 23-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 10.
- [ ] 4.5 Chapter 14 (Accounts and Information Security): source pack, 12-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 14.
- [ ] 4.6 Chapter 16 (Living with Chronic Disease): source pack, 14-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 16.
- [ ] 4.7 Chapter 18 (Is Having Kids Worth It): source pack, 7-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 18.
- [ ] 4.8 Chapter 30 (School-Age Kids): source pack, 21-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 30.
- [ ] 4.9 Run the wave gate: eight chapters checked, manifest updated, worklist/report updated, full build and focused Playwright pass; verify git commit and wave QA note.

## 5. Wave 4: universal and context-only

- [ ] 5.1 Chapter 4 (Do Not Waste Time): source pack, 18-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 4.
- [ ] 5.2 Chapter 6 (The Negative List): source pack, 35-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 6.
- [ ] 5.3 Chapter 11 (Red Lines for Developers and Techies): source pack, 21-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 11.
- [ ] 5.4 Chapter 13 (Emergencies: What to Do First): source pack, 48-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 13.
- [ ] 5.5 Chapter 20 (Newborn Care): source pack, 17-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 20.
- [ ] 5.6 Chapter 21 (Travel and Abroad Safety): source pack, 13-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 21.
- [ ] 5.7 Chapter 22 (How to Relax): source pack, 12-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 22.
- [ ] 5.8 Chapter 26 (Building a Website or Platform): source pack, 13-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 26.
- [ ] 5.9 Run the wave gate: eight chapters checked, manifest updated, worklist/report updated, full build and focused Playwright pass; verify git commit and wave QA note.

## 6. Wave 5: finish

- [ ] 6.1 Chapter 28 (Do Not Ruin Health for Looks): source pack, 10-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 28.
- [ ] 6.2 Chapter 32 (Studying Abroad): source pack, 12-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 32.
- [ ] 6.3 Chapter 34 (Safe Home Medications): source pack, 12-tip rewrite, independent verification and chapter Playwright pass; verify npm run verify:india -- --chapter 34.
- [ ] 6.4 Run the wave gate: all three chapters checked, manifest updated, worklist/report updated, full build and focused Playwright pass; verify git commit.

## 7. Final integration and publish

- [ ] 7.1 Verify final coverage: 34/34 chapters, 765/765 tips, all manifest statuses checked or reviewed, 115 high-risk claims resolved; verify npm run verify:india -- --final.
- [ ] 7.2 Verify the built site: 0 banned terms across all 52 pages, 0 CJK, 0 broken internal links; verify scan-dist-terms and the link checker exit 0.
- [ ] 7.3 Run the full suite: npm run build, npm run check, npm run verify, npx playwright test at 360/390/768/1440, light/dark; verify every command exits 0.
- [ ] 7.4 Update /india/, reports/india-edition-report.md and reports/india-rewrite-worklist.csv to the final manifest; verify no queued chapter is presented as rewritten.
- [ ] 7.5 Merge rewrite/india-edition to master and push; verify the Pages workflow succeeds and live Chapter 19 plus a newly rewritten chapter have 0 banned terms and render at 390 px and 1440 px.

## Workflow follow-up

- Obtain Tier A human review for the legal, medical and financial chapters; move checked-draft to reviewed where signed off.
- Archive the change after all tasks and review requirements are satisfied.
- Consider a separate evidence re-grade change after the content is stable.
