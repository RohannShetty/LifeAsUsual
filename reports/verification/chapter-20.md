# Verification: Chapter 20 - Newborn Care

Verifier: independent verifier (chapter 20 re-check, round 3)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/20-newborn-care.json
Manifest status: draft (tier B, 17 tips, verifier null, humanReview pending)

## Method

All 17 tips were read in the current build of `data/en-in/chapters/20-newborn-care.json` and compared
with the corresponding source chapter in `data/en/all-chapters.json`, then checked against Indian
official guidance and the primary literature the tips cite. The main Indian instrument used is the
MoHFW/NHM *Mother and Child Protection (MCP) Guide Book* (Immunization and IYCF chapters), retrieved
in full and read locally; the Home Based Newborn Care page of the National Health Mission was read for
tip 20-13. Every DOI in the chapter was resolved through the Crossref REST API
(`https://api.crossref.org/works/<DOI>`, batched where possible) and matched on journal, volume, pages
and year; the Nagoya DOI 10.18999/nagjms.80.1.11 does not appear in Crossref (404) but was confirmed
through the Europe PMC record (Nagoya J Med Sci 2018;80(1):11-20). Public-law citations (Indiacode is
blocked with 403) were checked against bare-act or departmental reproductions.

Access failures recorded: indiacode.nic.in returns 403 and was not used; `web_fetch` rejects
`application/pdf`, so the MCP Guide Book was downloaded with curl and converted with pdftotext; the
Beary 2025 (J Food Prot) and Sima 2025 (BMC Microbiology) full texts are paywalled, so the 73.8 °C and
>5 log-unit figures in tip 20-5 could not be re-derived (this is an access limitation, not an error);
the IAP policy statement behind the tip 20-16 attribution was not retrieved.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 20-1 | Back sleeping prevents sleep-related death; firm mattress; ~3,500 US infant sleep deaths a year | AAP Moon 2022, DOI 10.1542/peds.2022-057990 (Crossref) | – | 2026-10-21 | yes | DOI resolves to Pediatrics 150 (2022). Cost band "a few hundred rupees" for a firm crib mattress sits below Indian retail prices — advisory only |
| 20-2 | Hepatitis B vaccine within 24 h of birth; free on the UIP; ~95% of infected infants become chronic; HBIG for HBsAg-positive mothers | MCP Guide Book, vaccine table and notes | pp. 36, 65 | 2026-10-21 | yes | "Hepatitis B vaccine should be given within 24 hours of birth" confirmed; the WHO fact sheet cited in Sources no longer prints an infant chronicity percentage, so ~95% is neither confirmed nor contradicted by the cited page |
| 20-3 | Full UIP schedule: BCG/OPV-0/HepB at birth; pentavalent + OPV + rotavirus + PCV at 6/10/14 weeks with two fractional IPV doses; MR-1, JE-1, PCV booster at 9-12 months; MR-2, JE-2, DPT booster-1 at 16-24 months; DPT booster-2 at 5-6 years; Td at 10 and 16 years; missed doses are caught up, not restarted | MCP Guide Book schedule chart | pp. 36, 65-66 | 2026-10-21 | yes | Matches the UIP chart exactly, including fractional IPV at 6 and 14 weeks (intradermal), PCV-1 at 6 weeks, PCV-2 at 14 weeks, PCV booster at 9 months, and Td at 10 and 16 years |
| 20-4 | Exclusive breastfeeding for 6 months, no water; solids from 6 months; caveat gives solid-food frequencies | MCP Guide Book, IYCF counselling pages | pp. 65-66 (IYCF) | 2026-10-21 | no | The caveat's frequencies ("6-8 months 1-2 times daily", "9-12 months 2-3 servings per day") are below India's own IYCF guidance — see Blocking issues |
| 20-5 | Prepare formula at >70 °C; temperature falls to about 73.8 °C; >5 log reduction of Cronobacter; mortality 40-80% | Beary 2025 (DOI 10.1016/j.jfp.2025.100571), Sima 2025 (DOI 10.1186/s12866-025-04380-y) | – | 2026-10-21 | yes | Both DOIs resolve (J Food Prot 88:100571; BMC Microbiology 26). Paywalled, so 73.8 °C and the 5-log figure are recorded as not re-derived |
| 20-6 | No honey under 12 months (infant botulism) | Cited CDC page; no Indian-specific claim made | – | 2026-10-21 | yes | No jurisdiction-specific claim to test |
| 20-7 | Vitamin K 1-2 mg IM at birth; Tashkent incidence 478/100,000; >78.5% reduction | Fiesack, Nutrients 13:4109 (DOI 10.3390/nu13114109); Tursunov, Nagoya J Med Sci 80(1):11-20 (DOI 10.18999/nagjms.80.1.11) | – | 2026-10-21 | yes | Nagoya DOI absent from Crossref (404) but confirmed via Europe PMC (PMID 29581610) |
| 20-8 | Fever >=38 °C in an infant under 3 months means hospital now; AAP 8-60 day pathway | AAP 2021, DOI 10.1542/peds.2021-052228 | – | 2026-10-21 | yes | DOI resolves to Pediatrics 148 |
| 20-9 | Never shake a baby; 2,250 US deaths under 5, 1999-2014; retinal findings | MMWR 65:505-509 (DOI 10.15585/mmwr.mm6520a1); Choudhary 2018 (DOI 10.1007/s00247-018-4149-1) | – | 2026-10-21 | yes | Both DOIs resolve |
| 20-10 | No Indian regulator ranks diaper brands; BIS standards, CDSCO device remit, consumer commissions under the CP Act 2019, Legal Metrology (Packaged Commodities) Rules 2011, National Consumer Helpline | Consumer Protection Act 2019; Legal Metrology (Packaged Commodities) Rules 2011; consumerhelpline.gov.in | – | 2026-10-21 | yes | Statutes named are current; helpline 1915 confirmed on the departmental site |
| 20-11 | Borrow, buy used or new for big-ticket baby items; never a used car seat or mattress | Author's experience, grade C, no legal claim | – | 2026-10-21 | yes | Consistent with the chapter's own grade |
| 20-12 | LEAP: 640 infants, 1.9% vs 13.7%; EAT: 1,162 infants, 5.6% vs 7.1%, P=0.32 | DOI 10.1056/NEJMoa1414850; DOI 10.1056/NEJMoa1514210 | – | 2026-10-21 | yes | Both DOIs resolve to NEJM 372:803 and 374:1733 |
| 20-13 | Jaundice follow-up in India runs through HBNC under NHM: ASHA/ANM home visits, six visits in the first 42 days | NHM, Home Based Newborn Care and HBYC page (nhm.gov.in/index4.php?lang=1&level=0&linkid=491&lid=760) | HBNC schedule | 2026-10-21 | yes | Page states six visits on days 3, 7, 14, 21, 28 and 42 after institutional delivery (plus one within 24 h for home deliveries) |
| 20-14 | Vegan mothers need B12; case hospitalised at 15 months, deficits at 32 months | CDC MMWR 2003;52(4):61-64; ESPGHAN DOI 10.1097/MPG.0000000000001454; AND DOI 10.1016/j.jand.2016.09.025 | – | 2026-10-21 | yes | Both DOIs resolve (JPGN 64:119; JAND 116:1970) |
| 20-15 | No wheeled walkers; NEISS 230,676 ED visits; 22.7% fall after the 2010 standard; Canada banned sales 7 April 2004 | DOIs 10.1542/peds.2017-4332, 10.1542/peds.108.3.790, 10.1136/bmj.324.7352.1494, 10.12968/bjcn.2002.7.11.10889 | – | 2026-10-21 | yes | All four DOIs resolve to the cited journals, volumes and pages |
| 20-16 | 400 IU (10 mcg) vitamin D daily from birth; IAP and AAP both recommend it; Cochrane 43% reduction (RR 0.57) | Global Consensus DOI 10.1210/jc.2015-2175; Cochrane CD013046; JAMA DOI 10.1001/jama.2013.3404 | – | 2026-10-21 | yes | Three DOIs resolve; the IAP statement itself was not retrieved (access limitation), no contrary evidence found |
| 20-17 | Cold water first, test on wrist/elbow, heater below 50 °C (120 °F); CPSC scald times; Washington State 1983 law; NSW 50 °C cap | CPSC, NHS, WHO and Erdmann 1991 as cited | – | 2026-10-21 | yes | US/Australian regulator claims are attributed to those regulators, not to India |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

`npx tsx scripts/check-chapter.ts 20` reports 17 tips and "PASS: no banned term, CJK character or
foreign-jurisdiction term."

## Safety and editorial check

- No unsupported high-risk claim: the emergency advice (38 °C under 3 months, no shaking, no honey, no
  walkers, vitamin K at birth) is consistent with the cited guidance; the one exception is the day-to-day
  solid-food frequency in 20-4, which is below Indian guidance.
- No invented scheme, number or hotline: HBNC, UIP, BIS, CDSCO, the National Consumer Helpline, the 1915
  number and the Legal Metrology rules all exist as described; no unreachable hotline or scheme is cited.
- No direct equivalent recorded where needed: the chapter does not claim an Indian equivalent for the US
  CPSC scald rules, the Canadian walker ban or the NHS jaundice pathway; the India paragraph that does
  exist (HBNC) is accurate.
- Caveats retained: formula-is-fine and "breastfeeding matters less than safe sleep" caveats are intact,
  as are the grade-C labels on 20-10 and 20-11.

## Blocking issues

- **20-4, caveats — solid-food frequencies contradict India's own IYCF guidance.** Current text:
  "As for frequency of solid food intake: infants aged 6-8 months should consume solids 1-2 times daily,
  while those aged 9-12 months should have 2-3 servings per day."
  The MoHFW/NHM MCP Guide Book gives: at 6-9 months "2-3 times per day plus 1-2 snacks"; at 9-12 months
  "3-4 meals of finely chopped foods ... and 1-2 snacks per day between meals"; at 13-24 months "3-4 times
  a day and 1-2 snacks".
  Correction — replace that sentence with: "As for frequency of solid food intake: infants aged 6-8 months
  should eat 2-3 times a day plus 1-2 snacks, while those aged 9-12 months should have 3-4 meals a day plus
  1-2 snacks between meals." Add the MCP Guide Book (MoHFW/NHM) to Sources for this tip.

Advisory, not blocking:

- 20-1 cost band ("a few hundred rupees" for a firm crib mattress) reads like a carried-over currency band;
  Indian crib mattresses start around a few thousand rupees. Consider "a few thousand rupees" or dropping
  the figure.
- 20-2 "~95%" is a commonly quoted perinatal figure but the cited WHO page no longer prints a percentage;
  consider "about 90% of infants infected at birth" with the WHO fact sheet, or cite a source that states
  the number.

Verdict: FAIL
