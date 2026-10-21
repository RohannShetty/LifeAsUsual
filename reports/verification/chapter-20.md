# Verification: Chapter 20 - Newborn Care

Verifier: independent verifier (chapter 20 re-check, round 4 — corrected 20-4 caveat)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/20-newborn-care.json
Manifest status: draft (tier B, 17 tips, verifier null, humanReview pending)

## Method

All 17 tips were re-read in `data/en-in/chapters/20-newborn-care.json` on branch `rewrite/india-edition`
and compared with the corresponding source chapter in `data/en/all-chapters.json`. `git diff` on the
chapter file shows one file changed, 2 insertions and 2 deletions — only the 20-4 "sources" and "caveats"
lines — so the correction could not have disturbed any other tip; every other tip was still re-read for
regressions.

The Indian instrument is the MoHFW/NHM *Mother and Child Protection (MCP) Guide Book*, retrieved from
`https://nhm.gov.in/New_Updates_2018/NHM_Components/Immunization/Guildelines_for_immunization/MCP_Guide_Book.pdf`
(80 pages, 6.1 MB), converted to text locally and read in full; the complementary-feeding card used for
tip 20-4 is "Six months to two years: Complementary Feeding along with breastfeeding", card page 11
(PDF page 28), subsection "Complementary Feeding Frequency". The National Health Mission Home Based
Newborn Care page (`https://nhm.gov.in/index4.php?lang=1&level=0&linkid=491&lid=760`) was re-read for
tip 20-13 and the WHO hepatitis B fact sheet for tip 20-2. Every DOI in the chapter (23) was resolved
again through the Crossref REST API and matched on journal, volume, pages and year. Public-law
citations were checked against the bare Act text: the Canada Consumer Product Safety Act, S.C. 2010,
c. 21 (current to 2026-09-30, last amended 2024-11-20) was read on Justice Laws for the walker provision
cited in 20-15, and the Consumer Protection Act 2019 and the Legal Metrology (Packaged Commodities)
Rules 2011 cited in 20-10 were confirmed as the current instruments (the 1986 Act is repealed; the 2011
Rules remain the base instrument, amended most recently in 2025).

Access failures recorded: `indiacode.nic.in` returns 403 and was not used; `web_fetch` rejects
`application/pdf`, so the MCP Guide Book was downloaded with curl and converted with pdftotext;
`https://pubmed.ncbi.nlm.nih.gov/25705822/` (LEAP) returned a cookie/JavaScript challenge (HTTP 203) and
`https://europepmc.org/article/MED/29581610` returned a Cloudflare 403 this round, so those two records
were confirmed from the Crossref metadata and the earlier Europe PMC record rather than a live page;
`https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6520a1.htm` now 404s (CDC redirects to archive.cdc.gov),
though the chapter cites its DOI (10.15585/mmwr.mm6520a1), which resolves; the Beary 2025 (J Food Prot)
and Sima 2025 (BMC Microbiology) full texts are paywalled, so the 73.8 °C and >5 log-unit figures in
tip 20-5 were not re-derived; the IAP 2017 vitamin D statement itself was not retrieved (its 400 IU
recommendation was confirmed through published coverage of the guideline, not the PDF).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 20-1 | Back sleeping prevents sleep-related death; firm mattress; room-share, not bed-share; no soft items | AAP Moon et al. 2022, DOI 10.1542/peds.2022-057990 (Crossref) | – | 2026-10-21 | yes | DOI resolves to Pediatrics 150(1). Advisory only: the body prices a firm crib mattress at "a few hundred rupees", while Indian crib/cot mattresses observed on Amazon.in run Rs 4,857-11,838 |
| 20-2 | Hepatitis B vaccine within 24 h of birth; free on the UIP; ~95% of infected infants become chronic; HBIG for HBsAg-positive mothers | MCP Guide Book, vaccine table and notes; WHO hepatitis B fact sheet | MCP pp. 36, 65; WHO fact sheet | 2026-10-21 | yes | "Hepatitis B vaccine should be given within 24 hours of birth" confirmed; the WHO page now prints "infection in infancy and early childhood leads to chronic hepatitis in about 95% of cases", so the round-3 caveat on this figure is withdrawn. Advisory: the caveat sends readers to "Section 1" for maternal screening, but Section 1 is safe sleep — the same mismatch exists in the source chapter |
| 20-3 | Full UIP schedule: BCG/OPV-0/HepB at birth; pentavalent + OPV + rotavirus + PCV at 6/10/14 weeks with fractional IPV; MR-1, JE-1, PCV booster at 9-12 months; MR-2, JE-2, DPT booster-1 at 16-24 months; DPT booster-2 at 5-6 years; Td at 10 and 16 years; missed doses caught up, not restarted | MCP Guide Book schedule chart | pp. 36, 65-66 | 2026-10-21 | yes | Matches the UIP chart, including fractional intradermal IPV at 6 and 14 weeks and the PCV booster at 9 months |
| 20-4 | Exclusive breastfeeding for 6 months, no water; solids from 6 months; caveat gives solid-food frequency and composition | MCP Guide Book, "Six months to two years: Complementary Feeding along with breastfeeding" | Card p. 11 (PDF p. 28), "Complementary Feeding Frequency" | 2026-10-21 | yes | Corrected sentence: "infants aged 6-8 months should eat 2-3 times a day plus 1-2 snacks, and those aged 9-12 months should have 3-4 meals a day plus 1-2 snacks between meals." The card reads "6-9 months ... 2-3 times per day plus 1-2 snacks" and "9-12 months: 3-4 meals of finely chopped foods that require chewing and 1-2 snacks per day between meals"; the MCP Guide Book (MoHFW/NHM) is now in Sources. Advisory: the card labels the first band 6-9 months, the chapter writes 6-8, a band-label nuance that changes no age's advice |
| 20-5 | Prepare formula at >70 °C; temperature falls to about 73.8 °C; >5 log reduction of Cronobacter; mortality 40-80% | Beary 2025, DOI 10.1016/j.jfp.2025.100571; Sima 2025, DOI 10.1186/s12866-025-04380-y (Crossref) | – | 2026-10-21 | yes | Both DOIs resolve (J Food Prot 88(9):100571; BMC Microbiology 26(1)). Paywalled, so 73.8 °C and the 5-log figure are recorded as not re-derived |
| 20-6 | No honey under 12 months (infant botulism) | Cited CDC page; no Indian-specific claim made | – | 2026-10-21 | yes | No jurisdiction-specific claim to test |
| 20-7 | Vitamin K 1-2 mg IM at birth; Tashkent incidence 478/100,000; >78.5% reduction | Fiesack, Nutrients 13(11):4109 (DOI 10.3390/nu13114109); Tursunov, Nagoya J Med Sci 80(1):11-20 (DOI 10.18999/nagjms.80.1.11) | – | 2026-10-21 | yes | Nutrients DOI resolves; the Nagoya DOI is still absent from Crossref (404) and was confirmed via Europe PMC (PMID 29581610) |
| 20-8 | Fever at or above 38 °C in an infant under 3 months means hospital now; AAP 8-60 day pathway | AAP 2021, DOI 10.1542/peds.2021-052228 (Crossref) | – | 2026-10-21 | yes | DOI resolves to Pediatrics 148(2) |
| 20-9 | Never shake a baby; 2,250 US deaths under 5, 1999-2014; retinal findings | MMWR 65(20):505-509 (DOI 10.15585/mmwr.mm6520a1); Choudhary 2018, DOI 10.1007/s00247-018-4149-1 | – | 2026-10-21 | yes | Both DOIs resolve. Advisory: the caveat sends readers to "Section 3" for managing their own emotions, but Section 3 is the UIP schedule — inheritance from the source chapter |
| 20-10 | No Indian regulator ranks diaper brands; BIS standards, CDSCO device remit, consumer commissions under the CP Act 2019, Legal Metrology (Packaged Commodities) Rules 2011 | Consumer Protection Act 2019 (current; 1986 Act repealed); Legal Metrology (Packaged Commodities) Rules 2011 (base instrument, amended 2025); BIS; CDSCO | – | 2026-10-21 | yes | Statutes named are current; no hotline number is printed, so none can be invented. The tip's indiacode.nic.in link returns 403 to automated clients, an access limitation only |
| 20-11 | Borrow, buy used or new for big-ticket baby items; never a used car seat or mattress | Author's experience, grade C, no legal claim | – | 2026-10-21 | yes | Consistent with the chapter's own grade |
| 20-12 | LEAP: 640 infants, 1.9% vs 13.7%; EAT: 1,162 infants, 5.6% vs 7.1%, P=0.32 | DOI 10.1056/NEJMoa1414850; DOI 10.1056/NEJMoa1514210 (Crossref) | – | 2026-10-21 | yes | Both resolve to NEJM 372(9):803-813 and 374(18):1733-1743 |
| 20-13 | Jaundice follow-up in India runs through HBNC under the NHM: ASHA/ANM home visits, six visits in the first 42 days | NHM Home Based Newborn Care page | HBNC schedule | 2026-10-21 | yes | Page still states six visits on days 3, 7, 14, 21, 28 and 42 after institutional delivery, plus one within 24 h for home deliveries |
| 20-14 | Vegan mothers need B12; case hospitalised at 15 months, deficits at 32 months | CDC MMWR 2003;52(4):61-64; ESPGHAN DOI 10.1097/MPG.0000000000001454; AND DOI 10.1016/j.jand.2016.09.025 | – | 2026-10-21 | yes | Both DOIs resolve (JPGN 64(1):119-132; JAND 116(12):1970-1980) |
| 20-15 | No wheeled walkers; NEISS 230,676 ED visits 1990-2014; 22.7% fall after the 2010 standard; Canada banned sales on 7 April 2004 | DOIs 10.1542/peds.2017-4332, 10.1542/peds.108.3.790, 10.1136/bmj.324.7352.1494, 10.12968/bjcn.2002.7.11.10889; Canada Consumer Product Safety Act, S.C. 2010, c. 21 | CCPSA s. 5 and Schedule 2 item 3 | 2026-10-21 | yes | All four DOIs resolve. The cited statute section is exact: Schedule 2 item 3 is "Baby walkers that are mounted on wheels ... thereby enabling the horizontal movement of the walker", and section 5 forbids their manufacture, import, advertising or sale; the Act is current to 2026-09-30, so no repealed Act is presented as current law |
| 20-16 | 400 IU (10 mcg) vitamin D daily from birth; IAP and AAP both recommend it; Cochrane 43% reduction (RR 0.57) | Global Consensus DOI 10.1210/jc.2015-2175; Cochrane CD013046; JAMA DOI 10.1001/jama.2013.3404; IAP 2017 guidance | – | 2026-10-21 | yes | Three DOIs resolve (JCEM 101(2):394-415; Cochrane 2020(12); JAMA 309(17):1785). The IAP 400 IU recommendation is confirmed by published coverage of the IAP 2017 guideline, but IAP is not listed in this tip's Sources — advisory only |
| 20-17 | Cold water first, test on wrist/elbow, heater below 50 °C (120 °F); CPSC scald times; Washington State 1983 law; NSW 50 °C cap | CPSC, NHS, WHO and Erdmann 1991 as cited | – | 2026-10-21 | yes | US and Australian regulator claims are attributed to those regulators, never to India |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

`npx tsx scripts/check-chapter.ts 20` prints "chapter 20 (20-newborn-care.json): 17 tips" and "PASS: no
banned term, CJK character or foreign-jurisdiction term." A manual scan of the same JSON for
`$[0-9]|USD|dollar|RMB|yuan|CNY|China|Chinese|PRC|1986 Act|Consumer Protection Act, 1986` returns nothing,
every price in the chapter is in rupees, and no CJK character appears in any field.
`node scripts/scan-dist-terms.mjs` scans 37 built pages and reports "PASS: no banned terms found."

## Safety and editorial check

- No unsupported high-risk claim: with the 20-4 frequency corrected, the emergency advice (38 °C under 3
  months, no shaking, no honey, no walkers, vitamin K at birth) and the day-to-day feeding advice now sit
  at or above the Indian standard the chapter cites.
- No invented scheme, number or hotline: HBNC, the UIP, BIS, CDSCO, the National Consumer Helpline and the
  Legal Metrology rules all exist as described; no hotline number is printed anywhere in the chapter, so no
  unreachable number can be cited.
- No direct equivalent recorded where needed: the chapter does not claim an Indian equivalent for the US
  CPSC scald rules, the Canadian walker prohibition or the NHS jaundice pathway; the India paragraph that
  does exist (HBNC) matches the NHM page.
- Caveats retained: formula-is-fine and "breastfeeding matters less than safe sleep" are intact, as are the
  grade-C labels on 20-10 and 20-11, and the 20-4 caveat now carries the MCP frequency, the oil/ghee and
  animal-source food guidance, the texture rule and the peanut note.

## Blocking issues

- None. The 20-4 caveat now reproduces the MCP Guide Book frequency (2-3 times plus 1-2 snacks at 6-8
  months; 3-4 meals plus 1-2 snacks between meals at 9-12 months) and the MCP Guide Book is in that tip's
  Sources; the rest of the chapter shows no regression: no Chinese rule, no invented number, section or
  hotline, no USD or unconverted currency presented as an Indian price, no CJK or banned term, and no
  repealed Act presented as current law.

Advisory, not blocking:

- 20-1: a firm crib mattress is priced at "a few hundred rupees"; Indian crib mattresses run to a few
  thousand rupees. Consider "a few thousand rupees" or dropping the figure.
- 20-4: the MCP card labels the first frequency band "6-9 months", the chapter writes "6-8 months". Both
  give every age the right advice; align the label if a later pass is convenient.
- 20-2 and 20-9: the caveats point to "Section 1" and "Section 3" for topics those tips do not cover (safe
  sleep and the UIP schedule). The same mismatch is in the source chapter, so it is inherited, not a
  translation error.
- 20-16: the text attributes the 400 IU recommendation to the Indian Academy of Pediatrics but does not
  list IAP in Sources; add the IAP 2017 guideline.
- 20-15: the 7 April 2004 date comes from the Health Canada news release of that day, while the prohibition
  now sits in the CCPSA (s. 5 and Schedule 2 item 3); the citation is correct as to current law.

Publish-time note (outside this report's subject, no edit made): the built page
`dist/chapters/20-newborn-care/index.html` still contains the pre-correction "1-2 times daily" wording and
no mention of snacks, so the site must be rebuilt before publication; `data/en-in/overrides/20.json`
already carries the corrected sentence.

Verdict: PASS
