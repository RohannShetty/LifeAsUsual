# Verification: Chapter 23 - Which Skills to Learn

Verifier: independent-verifier-048d208e
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/23-which-skills-to-learn.json
Manifest status: draft (recommend checked)

## Method

Read all 25 tips in the chapter JSON, the source pack (which marks only 23-9, 23-22 and 23-25 as high-risk) and the previous failing report. Treated every blocking item in that report as a regression test: the Chinese child-labour rule, census, tuition waiver, vocational law, returns series, qualification catalogue, eight-level worker grades, NBS wage table, professional-title system, accounting titles, post quota and converted stipends. Each current tip was re-read against the Indian instrument it now cites. Independently checked the quantitative claims against the cited literature: the IHME-CHAIN mortality study via PubMed E-utilities (PMID 38278172), the Psacharopoulos and Patrinos review via the World Bank WPS8402 full text, and the AISHE 2021-22 figures via the Ministry of Education release as summarised by the British Council. Ran `npx tsx scripts/check-chapter.ts 23` (PASS, 0 banned terms/CJK).

Access notes: indiacode.nic.in returned HTTP 504 for its HTML handles in this environment; its RBD Act PDF bitstream was readable, but the child-labour and CA Act pages could not be opened here. Elsevier (doi.org), Taylor & Francis and PubMed's HTML pages returned 403/203; the underlying records were read through PubMed E-utilities and the World Bank repository instead. No access failure is treated as evidence for or against a claim.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 23-1 | Child below 14 cannot be employed; adolescent 14-18 barred from hazardous work; narrow family-enterprise and child-artiste exceptions; RTE 2009 | Child and Adolescent Labour (Prohibition and Regulation) Act, 1986 as amended 2016; RTE Act 2009 | ss.3-4 | 2026-10-21 | yes | Body matches the Act. The title's "no lawful job below 14" overstates the narrow exceptions the body itself states; soften if the title is treated as a standalone claim. |
| 23-2 | Each extra year of schooling cuts adult mortality 1.9% (1.8-2.0); 2.9% (2.8-3.0) at 18-49; 0.8% (0.6-1.0) over 70; 603 studies, 70 locations, 59 countries | IHME-CHAIN, Lancet Public Health, DOI 10.1016/S2468-2667(23)00306-7; PubMed 38278172 | Findings | 2026-10-21 | yes | All figures match the abstract. Text calls it a 2023 review; it was published online January 2024 (2024;9(3):e155-e165). Harmless dating slip. |
| 23-3 | AISHE 2021-22: GER 28.4%, 43.3 million students, 79% undergraduate, 12% postgraduate, 0.5% PhD; Census 2011 literacy 74.04% | Ministry of Education, AISHE 2021-22; Census 2011 | AISHE findings | 2026-10-21 | yes | 43.3m and 28.4% confirmed in the AISHE release; 79/12/0.5 split confirmed. Census 2011 literacy 74.04% is correct. |
| 23-4 | No national tuition waiver; targeted post-matric scholarships, state fee reimbursement, Vidya Lakshmi loans, PM Vidyalaxmi | National Scholarship Portal; Ministry of Education; Vidya Lakshmi | scheme pages | 2026-10-21 | yes | All four routes are real; no rupee amount is asserted. |
| 23-5 | No single vocational law; ITI/NCVT, polytechnic and NSQF tracks; lateral entry; no national linked-admission quota | MSDE; DGT; NCVET; AICTE | - | 2026-10-21 | yes | Accurate negative and accurate description of the three routes. |
| 23-7 | Worldwide private return to one extra year of schooling about 9%; 1,120 estimates, 139 countries, 1950-2014. "If a course costs ₹4,26,300 and lasts half a year..." | Psacharopoulos & Patrinos (2018), Education Economics 26(5); World Bank Policy Research Working Paper 8402 | Abstract; inPlainWords; caveat | 2026-10-21 | no | The 9% and the sample match WPS8402 ("1,120 estimates in 139 countries", "about 9 percent a year"). But ₹4,26,300 is exactly 30,000 yuan x 14.21, i.e. the source edition's 30,000-yuan figure converted into rupees; the caveat still says "30000-rupees investment". This is the prohibited hard-coded currency conversion, and the two figures contradict each other. |
| 23-8 | Check NSQF level, awarding body (NCVET/SSC/NCVT/UGC/AICTE) and verification portal before paying | NCVET; NSDC; UGC | - | 2026-10-21 | yes | Correct Indian architecture; no Chinese catalogue. |
| 23-9 | Free/subsidised training through PMKVY, NSDC and state skill missions; beware "guaranteed job" | MSDE; PMKVY; NSDC | - | 2026-10-21 | yes | Scheme exists. pmkvyofficial.org was not reachable in this pass; that is an access failure, not a claim failure. |
| 23-10 | About 47% of US jobs at high automation risk; Frey and Osborne | Frey & Osborne (2017), Technological Forecasting and Social Change 114 | Abstract | 2026-10-21 | yes | 47% matches; text correctly labels it a US estimate. |
| 23-11 | NSQF has ten levels; no national rule ties pay to a skill grade | NCVET; MSDE | - | 2026-10-21 | yes | Correct negative; no "eight-level worker" system. |
| 23-12 | PLFS reports broad earnings groups; Labour Bureau Wage Rates in Rural India covers rural occupations; no official wage for every job | MoSPI; Labour Bureau | - | 2026-10-21 | yes | Accurate description of the two Indian sources; no converted wage table. |
| 23-13 | PMKVY short courses delivered by training partners/SSCs; test the placement record | MSDE; NSDC; Skill India Digital | - | 2026-10-21 | yes | Accurate; no invented placement statistic. |
| 23-20 | No single statutory professional-title ladder; licences from NMC/State Bar Council/ICAI; UGC/AICTE designations; UPSC/SSC recruitment grades | NMC; Bar Council of India; ICAI; UGC; UPSC | - | 2026-10-21 | yes | Correct Indian mapping; the Chinese 27-series ladder is gone. |
| 23-21 | CA/CMA/CS are the Indian accounting qualifications under ICAI/ICMAI/ICSI; Foundation/Intermediate/Final; CA practical training; CA Act 1949 | ICAI; ICMAI; ICSI; Chartered Accountants Act, 1949 | - | 2026-10-21 | yes | Correct; the Chinese assistant/full-accountant exam route is gone. |
| 23-22 | Forged document can lead to rejection, a ban and a BNS 2023 forgery/cheating case; use university/AIU/UGC/embassy | Bharatiya Nyaya Sanhita, 2023; UGC; AIU | ss.336-340 (forgery), 318 (cheating) | 2026-10-21 | no | Body is now Indian and accurate. The title still says "any proven violations will result in immediate revocation of your professional title and a 3-year entry in your integrity record" — that is the repealed Chinese MOHRSS Order No. 40 rule, and nothing in the body supports revocation or a three-year integrity record. |
| 23-23 | A qualification does not create a post or a pay rise; government recruitment/service rules and sanctioned strength; private grades | DoPT; MSDE; UGC | - | 2026-10-21 | yes | Correct negative; post-ratio quota is gone. |
| 23-24 | No national PG fee cap; fees set by university/state fee committee; UGC/CSIR fellowships, M.Tech assistantships; UK returns study | UGC; CSIR; Britton et al. (2020) | - | 2026-10-21 | yes | Correct; no converted Chinese tuition or stipend amounts. |
| 23-25 | Academic posts usually need a PhD plus UGC-NET/SET; few posts; PhD can delay earnings | UGC; NTA UGC-NET | - | 2026-10-21 | yes | Rewrite is consistent with UGC-NET eligibility. |

## Banned-term check

- JSON: 0 banned terms, 0 CJK characters, 0 foreign-jurisdiction terms. `npx tsx scripts/check-chapter.ts 23` reports PASS.
- Rendered page: not rebuilt in this pass; the JSON is the content source and is clean.

## Safety and editorial check

- No unsupported high-risk claim: FAIL — 23-7 presents a converted yuan figure as an Indian course cost, and 23-22's title states a Chinese revocation/integrity-record consequence that the body does not support.
- No invented scheme, number or hotline: FAIL — ₹4,26,300 is an Indian-looking amount manufactured from 30,000 yuan; the caveat's "30000-rupees" is the tell.
- No direct equivalent recorded where needed: PASS — 23-4, 23-5, 23-8, 23-11, 23-20, 23-21 and 23-23 now say explicitly that India has no such national system.
- Caveats retained: FAIL in part — 23-7's caveat still refers to a "30000-rupees investment", contradicting the ₹4,26,300 example.

## Blocking issues

- 23-7: Remove the ₹4,26,300 example. It is 30,000 yuan converted at about 14.21 and is a hard-coded currency conversion, not an Indian fee. Either delete the worked example or use a plainly hypothetical Indian amount (for example "a course costing ₹50,000") and make the caveat use the same figure. Do not describe the converted amount as a rupee investment.
- 23-22: Rewrite the title so it matches the body. Suggested: "A forged degree or a ghostwritten paper can cost you the admission or the qualification — and land you in a criminal case under the BNS, 2023." Remove "immediate revocation of your professional title and a 3-year entry in your integrity record"; no Indian instrument in the tip provides that.

Verdict: FAIL
