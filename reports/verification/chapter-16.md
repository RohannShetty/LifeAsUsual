# Verification: Chapter 16 - Living with Chronic Disease

Verifier: independent-verifier-a45fe80c-adb7-4922-988d-78d56d4d0b53
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/16-living-with-chronic-disease.json
Manifest status: draft (recommend checked)

## Method

I read all 14 tips of the chapter JSON (title, cost, inPlainWords, benefit, sources, caveats, tags, evidenceGrade), the claim list in reports/source-packs/chapter-16.md, and the older FAIL report at reports/verification/chapter-16.md, whose two blocking findings (16-5 presenting a Chinese 12-week community-clinic dispensing rule and a tiered price differential as Indian rules; 16-8 carrying CJK markers) were re-tested against the current text and are both fixed. Instruments: NICE NG118 (nice.org.uk, HTTP 200, text read in full), nha.gov.in (200, JavaScript shell only), nalsa.gov.in (200), CDSCO/Drugs and Cosmetics Act references, PIB press notes, and the Crossref API (api.crossref.org) for DOIs.

Access failures, recorded rather than hidden: indiacode.nic.in returns HTTP 403 to this fetcher, so statute text was cross-read from section-level mirrors that reproduce the section (indeld, sooperkanoon) and from PIB releases; pib.gov.in press-release bodies return HTTP 403 (titles and note IDs were readable); telemanas.mohfw.gov.in failed to fetch (TypeError) and the 14416 number was confirmed from the PIB launch note instead; mohfw.gov.in was not directly readable. Crossref resolved eight DOIs cleanly (all HTTP 200); a later bulk re-check of all 67 DOIs in the five chapters failed wholesale (HTTP 400 from URL-encoding of the DOI slash, then HTTP 429 rate limiting), so the remaining DOIs here were not individually re-resolved and are marked as such in the notes rather than claimed as verified.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 16-1 | Adherence to long-term treatment is poor (Simpson 2006 systematic review) | BMJ 2006, DOI 10.1136/bmj.38875.675486.55 | - | 2026-10-21 | yes | Standard adherence review; DOI not individually re-resolved (bulk Crossref check rate-limited). No Indian-law claim. |
| 16-2 | India has no national outpatient chronic-disease certificate; cover comes via ESIC, CGHS, PM-JAY or state schemes | nha.gov.in; PM-JAY scheme design; ESIC and CGHS material | - | 2026-10-21 | yes | Negative claim; PM-JAY covers secondary/tertiary hospitalisation, not routine outpatient chronic care, and no national outpatient certificate exists in NHA material. |
| 16-3 | Tele-MANAS mental-health helpline 14416 | PIB press note (NTMHP launched 10 October 2022); telemanas.mohfw.gov.in | - | 2026-10-21 | yes | Number correct. Direct site fetch failed (TypeError), confirmed from the PIB launch note. |
| 16-4 | Medicines are regulated by CDSCO under the Drugs and Cosmetics Act, 1940 | Drugs and Cosmetics Act 1940; CDSCO | - | 2026-10-21 | yes | Act and regulator correct and still in force; not touched by the 2025 labour-code repeals. |
| 16-5 | Ayushman Arogya Mandir, Jan Aushadhi Kendra and eSanjeevani are the Indian routes; India has no all-India rule fixing how many weeks of medicine are dispensed | NHA/NHM material; PMBJP | - | 2026-10-21 | yes | The earlier Chinese 12-week dispensing rule and price-tier differential are gone; no Indian instrument fixing a national dispensing interval was found. |
| 16-6 | India has no single family-doctor registration scheme; AAM/NHM and the Clinical Establishments Act, 2010 are the relevant structures | NHM/AAM; Clinical Establishments (Registration and Regulation) Act 2010 | - | 2026-10-21 | yes | Negative claim stands; the 2010 Act registers facilities, not patients on a GP roster. |
| 16-7 | ADA Standards of Care 2026: annual dilated eye examination and foot examination | Diabetes Care 2026, DOI 10.2337/dc26-S012 | Section 12 | 2026-10-21 | yes | Crossref resolved 200: "12. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes-2026". |
| 16-8 | Adults 2.5-3 L water/day, children 1-2 L, salt under 6 g/day, no calcium restriction (NICE NG118 1.8.1) | nice.org.uk/guidance/ng118/chapter/Recommendations | 1.8.1 | 2026-10-21 | yes | Verified verbatim, including 700-1,200 mg calcium for adults. The "roughly 55% fewer recurrences" figure belongs to Borghi 1996, which is cited separately; NICE does not state it. |
| 16-9 | Urate target below 6 mg/dL (ACR 2020); CARES and FAST safety findings | ACR 2020 guideline; NEJM 2018 CARES, DOI 10.1056/NEJMoa1710895 | - | 2026-10-21 | no | Blocking: the benefit sentence names allopurinol twice and attributes febuxostat's HR 1.22 all-cause and HR 1.34 cardiovascular-death excess to allopurinol. Crossref confirms CARES compared febuxostat with allopurinol. |
| 16-10 | Purine-rich food and alcohol raise urate; diet and weight loss help | Choi 2004 NEJM and related citations | - | 2026-10-21 | yes | Consistent with the cited literature; no Indian statutory claim. |
| 16-11 | With HBsAg positive, ultrasound plus AFP every six months | Surveillance guidance cited in sources | - | 2026-10-21 | yes | Guideline-based and not presented as Indian statute. |
| 16-13 | KDIGO 2024 and ADA 2026 use urine albumin-to-creatinine ratio for kidney risk | KDIGO 2024; DOI 10.2337/dc26-S011 | - | 2026-10-21 | yes | Consistent with both documents. |
| 16-14 | CHALLENGE trial: structured exercise after adjuvant chemotherapy for colon cancer | NEJM 2025, DOI 10.1056/NEJMoa2502760 | - | 2026-10-21 | yes | Crossref resolved 200, title matches. |

## Banned-term check

- JSON: 0 banned terms - npx tsx scripts/check-chapter.ts 16 reports "PASS: no banned term, CJK character or foreign-jurisdiction term".
- Rendered page: not rendered (no build run). The JSON was scanned directly for China/Chinese/mainland/RMB/yuan/hukou/yibao/dibao/CNY, CJK characters and NMPA/NHSA/SAMR/MOHRSS/CSCSE/CBIRC/NFRA/MIIT/SFDA/PRC/State Council/Supreme People/procuratorate/WeChat/Alipay: none.

## Safety and editorial check

- No unsupported high-risk claim: the two high-risk tips (16-2, 16-6) are negative claims about the absence of a national scheme and both hold up against NHA/NHM material; 16-9 is a drug-safety claim and is wrong as written, hence blocking.
- No invented scheme, number or hotline: no invented scheme found; Tele-MANAS 14416 is real; the 55% recurrence figure traces to Borghi 1996.
- No direct equivalent recorded where needed: 16-2, 16-5 and 16-6 all state that India has no national equivalent instead of implying one.
- Caveats retained: caveats present on every tip; 16-5 correctly warns that PM-JAY covers hospitalisation, not outpatient medicines.

## Blocking issues

- 16-9 (benefit): "The CARES trial linked allopurinol to a 22 % higher risk of all-cause mortality (HR 1.22) and a 34 % higher risk of cardiovascular death (HR 1.34) versus allopurinol" names allopurinol twice and attributes febuxostat's excess to allopurinol. Correction: "The CARES trial linked febuxostat to a 22% higher risk of all-cause mortality (HR 1.22) and a 34% higher risk of cardiovascular death (HR 1.34) versus allopurinol".

Verdict: FAIL
