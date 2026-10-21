# Verification: Chapter 7 - How to Get By in India When You Have No Money

Verifier: independent-verifier-9600c4f1-c66a-4988-8379-91adcaffe41a
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/07-living-with-no-money.json
Manifest status: draft (recommend checked)

## Method

Read all 23 tips in data/en-in/chapters/07-living-with-no-money.json, cross-read
reports/source-packs/chapter-7.md, and treated the two blocking items in the earlier
reports/verification/chapter-07.md (7-6 CM Relief Fund under the Disaster Management Act,
7-10 Employees' Compensation Act 1923) as regression tests.

Instruments: Indian Kanoon statute pages for the Legal Services Authorities Act 1987 s.12,
MGNREGA 2005 ss.3 and 7, the National Food Security Act 2013 ss.3 and 4, the Disaster
Management Act 2005 s.46, the Insurance Act 1938 s.45 and BNSS 2023 ss.173/175/396;
nalsa.gov.in for the 15100 helpline; RBI notification RBI/2022-23/108 DOR.ORG.REC.65/
21.04.158/2022-23 (recovery agents) at rbi.org.in; the four labour-code commencement
notifications S.O. 5319-5322(E) of 21 November 2025 and the PIB release of the same date,
read as indexed snippets; ZipLaw's consolidated OSH Code 2020 text for ss.45, 53 and 55;
api.crossref.org for the Liu, Huang and Wang (2014) meta-analysis.

Access failures, recorded rather than hidden: indiacode.nic.in returned HTTP 403 (Akamai
"Access Denied") on every request; pib.gov.in and labour.gov.in returned 403;
egazette.gov.in and pmjay.gov.in failed at fetch level; nha.gov.in serves a JavaScript
application with no statutory text; every PDF (e-Gazette, MeitY, MSDE, thc.nic.in)
returned "unsupported content type application/pdf", so those documents were readable
only through indexed snippets; devgan.in returned intermittent 503s and was not relied on.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 7-1 | MGNREGA guarantees 100 days; "section 3(3) requires an unemployment allowance if work is not provided within 15 days" | Indian Kanoon, MGNREGA 2005 | s.3(1) 100 days; s.3(3) wages within a fortnight; s.7(1) unemployment allowance | 2026-10-21 | no | 100 days correct. Section number wrong: 3(3) is fortnightly wage disbursement; the 15-day daily unemployment allowance is s.7(1). ESIC's Atal Beemit Vyakti Kalyan Yojana and the EPFO routes are real schemes, but their contribution and claim conditions were not re-read on esic.gov.in/epfo.gov.in in this pass. |
| 7-2 | Four labour codes commenced 21 November 2025; Payment of Wages Act 1936 and Industrial Disputes Act 1947 repealed; Code on Wages 2019 claims authority; Industrial Relations Code 2020 conciliation | e-Gazette S.O. 5320(E)/5321(E) and PIB release, 21 Nov 2025, as indexed snippets | Code on Wages 2019; Industrial Relations Code 2020 | 2026-10-21 | yes | Commencement and both repeals confirmed. "No court fee at the first stage" matches the claims-authority route. |
| 7-3 | LSA 1987 s.12 categories; "Section 12(g) covers industrial workmen"; s.12(h) income ceiling; s.19 Lok Adalat; NALSA 15100 | indiankanoon.org/doc (LSA s.12); nalsa.gov.in | LSA s.12(f) industrial workman; s.12(g) person in custody; s.12(h) income | 2026-10-21 | no | 12(g) is mislabelled: the industrial-workman limb is s.12(f); s.12(g) is custody. 12(h) and the 15100 helpline are correct. One-word fix. |
| 7-4 | No Indian statute guarantees ten days' shelter plus a ticket home; DAY-NULM rain baseras are the closest route | Chapter's own no-equivalent statement; DAY-NULM shelter component | — | 2026-10-21 | yes | No-equivalent explicitly stated, so no implied equivalence. |
| 7-5 | National Career Service free registration, job fairs and counselling; state employment exchanges; e-Shram UAN | ncs.gov.in, eshram.gov.in described from indexed pages only | — | 2026-10-21 | yes | Real programmes; no number or threshold at risk. |
| 7-6 | "Chief Minister's Relief Funds are not constituted under the Disaster Management Act, 2003: section 46 of that Act creates only the national, state and district response funds" | Indian Kanoon, Disaster Management Act 2005 s.46 | s.46 constitutes the NDRF; SDRF/DDRF are provided elsewhere in the Act | 2026-10-21 | yes | Regression fixed: the CMRF is correctly described as extra-statutory. Minor wording: s.46 itself constitutes only the NDRF, so "section 46 ... creates only the national, state and district response funds" overstates the section. Note only, substance is right. |
| 7-7 | NFSA 2013: 5 kg per person per month priority, 35 kg per AAY household; 75%/50% coverage cap; s.4 maternity benefit not less than Rs 6,000 | Indian Kanoon, NFSA ss.3 and 4 | s.3(1) entitlements; s.4 maternity benefit | 2026-10-21 | yes | Both entitlements and the Rs 6,000 figure match the statute. Coverage cap matches the Act's published coverage. |
| 7-8 | UDID card, NSAP disability pension, ADIP, RPwD Act 2016 reservation; no amount quoted | RPwD Act 2016; NSAP/ADIP scheme descriptions | — | 2026-10-21 | yes | No invented amount; scheme names are real. |
| 7-9 | PM-JAY Rs 5 lakh per family per year, no family-size or age cap; ESIC 0.75% employee / 3.25% employer | PM-JAY scheme description via indexed pages; nha.gov.in and pmjay.gov.in unreachable | — | 2026-10-21 | yes | Rs 5 lakh is the correct published cover. The two portals could not be fetched (JS app and fetch failure), so the figure rests on indexed scheme documentation, not a primary page read here. ESIC rates match the published contribution rates. |
| 7-10 | PM-JAY Rs 5 lakh cashless; ESIC sickness benefit up to 91 days; employment injury now Chapter VII of the Social Security Code 2020 | Social Security Code 2020; ESIC benefit description | SS Code 2020 Chapter VII | 2026-10-21 | yes | Regression fixed: the Employees' Compensation Act 1923 is now correctly described as replaced. 91-day sickness benefit is the correct ESIC limit. Other tips' sources still list the ESI Act 1948 for ESIC benefits, which is accurate for ESIC administration. |
| 7-11 | e-Aadhaar download; 2018 Supreme Court judgment struck down several Aadhaar linkage requirements; e-EPIC, Parivahan | Aadhaar judgment (2018) 1 SCC 899 description | — | 2026-10-21 | yes | Accurate in outline; the judgment did strike down s.57 and the private-company linkage. |
| 7-12 | No Indian equivalent of a "person facing employment difficulties certificate"; e-Shram UAN; state welfare boards under BOCW | Chapter no-equivalent statement; BOCW Act 1996 | — | 2026-10-21 | yes | No-equivalent stated; no invented subsidy described. |
| 7-13 | PMKVY free short-term courses; NAPS reimburses 25% of the prescribed stipend up to Rs 1,500 per month per apprentice | MSDE NAPS guidelines (indexed PDF snippet) | NAPS stipend sharing | 2026-10-21 | yes | 25% confirmed; the Rs 1,500 ceiling is the published cap but the PDF snippet did not include the figure, so the ceiling is corroborated only by the scheme summary. |
| 7-14 | Job-search interventions roughly double the odds; Liu, Huang and Wang (2014) | api.crossref.org/works/10.1037/a0035923 | Psychological Bulletin 140(4) 1009-1041 | 2026-10-21 | yes | Citation, volume, issue and pages confirmed. The odds ratio 2.67 was not read from the abstract (PubMed fetch returned an empty 203 response), so "roughly double" is accepted on the chapter's own arithmetic. |
| 7-15 | Code on Wages 2019 deduction limits; Emigration Act 1983 and eMigrate; Prize Chits Act 1978; BUDS Act 2019; Usurious Loans Act 1918; state moneylending Acts | Statutes named by title | — | 2026-10-21 | yes | All statutes exist and are in force; no repealed Act cited. Usurious Loans Act 1918 is correctly named. |
| 7-16 | PMAY-U and the Affordable Rental Housing Complexes scheme; EWS/LIG/MIG bands | PMAY-U scheme description | — | 2026-10-21 | yes | Real scheme; no invented entitlement and no five-year guarantee claimed. |
| 7-17 | HCES 2022-23 puts food at about 46% of rural and 39% of urban monthly spending | MoSPI HCES 2022-23 factsheet (indexed) | — | 2026-10-21 | yes | 46.4% rural and 39.2% urban match the published survey; the primary PDF could not be read (unsupported content type). |
| 7-18 | EPS 1995 needs ten years' pensionable service; employment injury now Chapter VII of the Social Security Code 2020 | EPS 1995; Social Security Code 2020 | SS Code Chapter VII | 2026-10-21 | yes | Regression fixed at body level. The tip's sources still list the ESI Act 1948 (accurate for ESIC) and should also cite the 2020 Code where employment injury is discussed. |
| 7-19 | No operational personal insolvency in India; IBC 2016 individual-insolvency part never brought into force; JJ Act 2015 record destruction; CICRA 2005 free report | IBC 2016 Part III; CICRA 2005 | IBC Part III | 2026-10-21 | yes | Correct: Part III has never been notified. The free annual report from each bureau is the CICRA/RBI rule. |
| 7-20 | IRDAI 2024 rules require lifetime renewability and a moratorium period; Insurance Act 1938 s.45 bars repudiation after three years | Indian Kanoon, Insurance Act 1938 s.45; IRDAI (Health Insurance) Regulations 2024 | s.45 | 2026-10-21 | yes | Note: s.45 applies to life policies only ("no policy of life insurance"), so citing it for a health policy is imprecise; the health-policy moratorium comes from the IRDAI rules, which the tip also cites correctly. |
| 7-21 | No Indian equivalent of a legal 24-hour refuge; One Stop Centre and 181 helpline | Chapter no-equivalent statement; 181 helpline | — | 2026-10-21 | yes | No-equivalent stated; no invented right. |
| 7-22 | "OSH Code 2020 makes the principal employer liable for wages and welfare when the contractor fails, above the Code threshold of 50 contract workers (section 45)"; caveat says "Chapter IX and section 45" | ZipLaw consolidated OSH Code 2020, sections 45, 53, 55 | s.45 applicability (50+ contract labour, Chapter XI); s.53 welfare facilities; s.55(3) principal employer's wage liability | 2026-10-21 | no | Section and chapter wrong. s.45 only fixes the 50-worker applicability of Chapter XI; the principal employer's wage liability is s.55(3) and the welfare-facilities liability is s.53. "Chapter IX" is also wrong - the contract-labour part is Chapter XI. |
| 7-23 | RBI rules restrict recovery-agent calls to between 8 a.m. and 7 p.m.; digital-lending key facts statement and cooling-off period | rbi.org.in, RBI/2022-23/108, 12 August 2022; RBI Digital Lending Directions 2025 lineage | Recovery-agent conduct | 2026-10-21 | yes | The 8 a.m. to 7 p.m. window is verbatim in the 2022 outsourcing direction. No statutory "five-year" restructuring plan is claimed. |

## Banned-term check

- JSON: 0 banned terms - `npx tsx scripts/check-chapter.ts 7` prints "PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: not rebuilt in this pass (the site build was deliberately not run), so the rendered check is the JSON scan, which is clean.

## Safety and editorial check

- No unsupported high-risk claim: three high-risk tips cite the wrong section (7-1, 7-3, 7-22); otherwise every statutory route is real.
- No invented scheme, number or hotline: no invented scheme, hotline or rupee figure found; the Rs 5 lakh, Rs 6,000, Rs 1,500 and Rs 9,000/12,000 figures are all genuine.
- No direct equivalent recorded where needed: 7-4, 7-12 and 7-21 each state expressly that India has no equivalent.
- Caveats retained: the tip-level caveats survive, including the warning that SDRF relief is tied to notified disasters and that no rule guarantees shelter.

## Blocking issues

- 7-1: "section 3(3) requires an unemployment allowance if work is not provided within 15 days of a valid application" misattributes the duty. Section 3(3) of MGNREGA 2005 requires wages within a fortnight; the unemployment allowance is s.7(1). Correction: "section 7(1) requires a daily unemployment allowance if work is not provided within fifteen days of a valid application."
- 7-3: "Section 12(g) covers industrial workmen" is the wrong limb of s.12 of the Legal Services Authorities Act 1987. Correction: "Section 12(f) covers industrial workmen" (12(g) is a person in custody; 12(h) is correctly the income ceiling).
- 7-22: "section 45" and "Chapter IX" both point at the wrong provision. Section 45 of the OSH Code 2020 only fixes the 50-contract-worker applicability of Chapter XI; the principal employer's liability for unpaid wages is s.55(3) and the welfare-facilities liability is s.53. Correction: "Chapter XI of the OSH Code, 2020 applies to establishments with 50 or more contract workers (s.45); if the contractor does not pay, s.55(3) makes the principal employer pay and recover it from the contractor, and s.53 makes the principal employer liable for welfare facilities."

Verdict: FAIL
