# Verification: Chapter 23 - Which Skills to Learn

Verifier: independent-verifier-r3
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/23-which-skills-to-learn.json
Manifest status: draft (recommend checked)

## Scope of this pass

Round-3 re-verification after the round-2 fixes in commit 7c76d35. The previous report on this path failed on two blockers: 23-7's converted-yuan course price and 23-22's title revoking a "professional title" under the repealed Chinese MOHRSS Order No. 40. Both were used as regression tests: the fix had to be present in the built JSON, not only in a plan.

## Method

Re-read all 25 tips in the JSON (title, inPlainWords, benefit, caveats, sources). Scanned the whole chapter file for the failing strings and for Chinese-instrument vocabulary - 4,26,300 / 426300 / 30000 / "revocation of your professional title" / "integrity record" / MOHRSS / "Order No. 40" / yuan / RMB / ¥ / China / Chinese - and got zero matches. Re-read the two repaired tips verbatim and re-checked the instruments that carry their claims: the Child and Adolescent Labour (Prohibition and Regulation) Act 1986 as amended by Act 35 of 2016, the Bharatiya Nyaya Sanhita 2023 section numbering, and the World Bank WPS8402 text behind the 9% figure. Ran `npx tsx scripts/check-chapter.ts 23` - PASS (25 tips; 0 banned terms, 0 CJK, 0 foreign-jurisdiction terms).

The table records whether a claim was checked by fetch or only by text in this pass. Access failures are recorded below and are never used as evidence.

## Access notes and failures

- indiacode.nic.in returned HTTP 403 to this session's fetcher for the child-labour Act (handle 20062); curl to www.indiacode.nic.in and upload.indiacode.nic.in timed out with no connection. The Act was read from the Rajasthan Labour Department copy instead.
- meity.gov.in PDF URLs returned 404 (recorded in the chapter 24 report).
- web_fetch refuses application/pdf ("unsupported content type"); PDFs were retrieved with curl and converted with pdftotext.
- pib.gov.in and incometax.gov.in return 403 to this session; no claim in this chapter depends on them.

## Claim checks

| Tip | Claim | Source checked | Basis | Pass? | Note |
| --- | --- | --- | --- | --- | --- |
| 23-1 | Child below 14 cannot be employed, with narrow family-enterprise and child-artiste exceptions; adolescent 14-18 barred from hazardous work; RTE 2009 | Child and Adolescent Labour (Prohibition and Regulation) Act 1986, as amended by Act 35 of 2016, ss.3, 3A | fetch: labour.rajasthan.gov.in PDF, 2026-10-21 | yes | s.3 as substituted reads "No child shall be employed or permitted to work in any occupation and process"; s.3(2) carries the family-enterprise (non-hazardous, after school hours or during vacations) and audio-visual-artiste exceptions; s.3A bars adolescents from the hazardous Schedule. Body accurate. The title "Below 14 there is no lawful job to take" is stronger than the body's own exceptions - non-blocking, see residual notes. |
| 23-2 | Each extra year of schooling cuts adult mortality ~1.9%; 2.9% (2.8-3.0) at 18-49; 0.8% (0.6-1.0) above 70 | IHME-CHAIN review, Lancet Public Health, PMID 38278172 | text (unchanged; verified in the previous pass) | yes | No figure changed in this pass. Text still calls it "a 2023 systematic review"; it appeared online January 2024 (2024;9(3):e155-e165). Harmless dating slip. |
| 23-3 | AISHE 2021-22: GER 28.4%, 43.3 million students, 79% undergraduate / 12% postgraduate / 0.5% PhD; Census 2011 literacy 74.04% | Ministry of Education, AISHE 2021-22; Census 2011 | text (unchanged from verified pass) | yes | Figures unchanged and consistent with the release; no converted statistic. |
| 23-4 | No national tuition waiver; NSP post-matric scholarships for SC/ST/OBC/minority, state fee reimbursement, Vidya Lakshmi and PM Vidyalaxmi loans; PM YASASVI | National Scholarship Portal; Ministry of Education | text; NSP portal returned 200 | yes | All named routes exist; no rupee amount is asserted. |
| 23-5 | No single vocational law; ITI under DGT/NCVT, polytechnic under state board, NSQF-aligned SSC courses; lateral entry; no national linked-admission quota; Apprentices Act 1961 | DGT; MSDE; NCVET | text | yes | Correct negative and correct mapping of the three routes; Apprentices Act 1961 is the right instrument. |
| 23-6 | Weigh early earnings against the later premium; no national data asserted in the tip | - | text | yes | Advice/negative tip, no citation needed. The caveat still carries editorial scaffolding about a "1988-2001 series ... not reproduced here" - see residual notes. |
| 23-7 | FIXED: worldwide private return of about 9% per extra year of schooling (1,120 estimates, 139 countries, 1950-2014); worked example is now a plainly hypothetical ₹50,000 half-year course | Psacharopoulos & Patrinos (2018); World Bank Policy Research Working Paper 8402, full text | fetch: openknowledge.worldbank.org PDF, 2026-10-21 | yes | inPlainWords now reads "if a hypothetical course costs ₹50,000 and lasts half a year"; the caveat now reads "if a hypothetical course demanded a ₹50,000 fee and six months of effort". Grep of the file for 4,26,300 / 426300 / 30000 / yuan / ¥ returns zero. WPS8402 confirms "based on a database of 1,120 estimates in 139 countries", "about 9 percent a year", returns to higher education increasing, and female returns about two percentage points higher. Regression test passed. |
| 23-8 | Check the NSQF level, the awarding body (NCVET, SSC, NCVT, UGC, AICTE) and the issuer's verification portal before paying | NCVET; NSDC; UGC | fetch: ncvet.gov.in returned 200 (Hindi shell) | yes | Correct Indian architecture; no foreign catalogue. |
| 23-9 | Free or subsidised training through PMKVY, NSDC and state skill missions; treat "guaranteed job" as a warning | MSDE; NSDC; state missions | text | yes | Scheme exists; no placement statistic invented. |
| 23-10 | About 47% of US jobs at relatively high automation risk; three bottlenecks (dexterity, creative problem-solving, social interaction) | Frey & Osborne (2017), Technological Forecasting and Social Change 114; 2013 Oxford working paper | text | yes | The 47% figure and the "unpublished draft paper from 2013" framing are accurate. |
| 23-11 | No national rule ties pay to a skill grade; NSQF has ten levels; Sector Skill Councils set occupational standards | NCVET; MSDE | text | yes | Correct negative; no "eight-level worker" system. |
| 23-12 | PLFS reports broad occupation/industry earnings; Labour Bureau's Wage Rates in Rural India covers agricultural and some rural occupations; no official wage for every job | MoSPI; Labour Bureau | text | yes | Accurate description of the two Indian sources; no converted wage table. |
| 23-13 | PMKVY short-term courses delivered by training partners under SSCs; test the placement record, not the brochure | MSDE; NSDC | text | yes | No invented placement statistic. |
| 23-14 to 23-19 | Study-technique tips: self-testing, distributed practice, interleaving, learning styles, transfer-appropriate testing | Dunlosky et al. (2013); Cepeda et al. (2006) | text only | yes | Not law-dependent. No figure was re-fetched in this pass; the "ten techniques" and "317 experiments" framing is carried unchanged from the reviewed edition. |
| 23-20 | No single statutory "professional title" ladder; licences from NMC, State Bar Council and ICAI; UGC/AICTE designations; UPSC/SSC grades; AIU equivalence for foreign credentials | NMC; Bar Council of India; ICAI; UGC; AIU | fetch (icai.org 200) + text | yes | Correct Indian mapping; the Chinese series ladder is gone. |
| 23-21 | CA (ICAI), CMA (ICMAI) and CS (ICSI) are the accounting qualifications; Foundation/Intermediate/Final; CA practical training; Chartered Accountants Act 1949 | ICAI; ICMAI; ICSI; CA Act 1949 | text (icai.org 200) | yes | Correct; the foreign "assistant accountant" exam route is gone. |
| 23-22 | FIXED: a forged degree or ghostwritten paper can cost the admission or the qualification and lead to a BNS 2023 case; use the university, AIU, UGC or embassy | Bharatiya Nyaya Sanhita 2023, ss.318, 335, 336, 339, 340 | fetch: BNS 2023 full text, 2026-10-21 | yes | Title is now the BNS framing; no "revocation", no "integrity record", no MOHRSS (grep zero). BNS numbering matches: s.318 cheating, s.335 making a false document, s.336 forgery, s.339 possession of a forged document, s.340 forged document or electronic record used as genuine. Regression test passed. |
| 23-23 | A qualification does not create a post or a pay rise; government recruitment rules, service rules and sanctioned strength, private grades | DoPT; MSDE; UGC | text | yes | Correct negative; the post-quota rule is gone. |
| 23-24 | No national PG fee cap (university/state fee committee sets fees); UGC/CSIR fellowships, M.Tech assistantships; UK returns study | UGC; CSIR; Britton et al. (2020) | text | yes | Correct; no converted tuition or stipend amount. |
| 23-25 | A permanent academic post usually needs a PhD plus UGC-NET or a state eligibility test; few posts; a PhD can delay earnings | UGC; NTA UGC-NET | text | yes | Consistent with UGC recruitment rules. |

## Banned-term and currency check

- `npx tsx scripts/check-chapter.ts 23` reports: "chapter 23 (23-which-skills-to-learn.json): 25 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."
- Manual scan of the file: 0 hits for 4,26,300 / 426300 / 30000 / "revocation of your professional title" / "integrity record" / MOHRSS / "Order No. 40" / yuan / RMB / ¥ / China / Chinese.
- Every amount in the chapter is now a hypothetical rupee figure (₹50,000 in 23-7); no RMB amount remains.

## Safety and editorial check

- No unsupported high-risk claim: PASS - both former blockers are repaired in the built JSON.
- No invented scheme, number or hotline: PASS - no scheme named in the chapter is fictitious.
- No direct equivalent recorded where needed: PASS - 23-4, 23-5, 23-11, 23-20, 23-21 and 23-23 say explicitly that India has no such national rule.
- Caveats retained: PASS - every tip keeps its caveat, and 23-7's caveat now uses the same hypothetical ₹50,000 as the body.

## Residual notes (non-blocking)

1. 23-1's title ("Below 14 there is no lawful job to take") is stronger than the Act and than the tip's own body, which states the family-enterprise and artiste exceptions. Soften the title if it is judged as a standalone claim.
2. 23-6's caveat still contains an editorial meta-sentence about a foreign "1988-2001 series ... not reproduced here". It is honest but reads as scaffolding; consider deleting it.
3. 23-2 calls the review "2023" although it appeared in the 2024 volume; the prior report made the same note.
4. The rendered build is stale: dist/chapters/23-which-skills-to-learn/index.html (mtime 2026-10-21 18:37) still contains "4,26,300" and "revocation of your professional title". The JSON is fixed, but the page must be regenerated before deploy. dist is out of scope for this pass and was not modified.
5. The parent's anchor list includes the JJ Act 2015, but no tip in chapter 23 cites it. Its absence is not an error.

## Blocking issues

None.

Verdict: PASS
