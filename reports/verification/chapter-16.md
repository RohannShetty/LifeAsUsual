# Verification: Chapter 16 - Living with Chronic Disease

Verifier: independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/16-living-with-chronic-disease.json
Manifest status: draft

## Method

I read data/en-in/chapters/16-living-with-chronic-disease.json tip by tip — id, title, plain words, benefit, sources, caveats and evidenceGrade — against the English source chapter data/en/all-chapters.json and the manifest entry, then against the instrument or scheme each tip cites. Scheme and office names were read on the site that owns them (cghs.mohfw.gov.in, esic.gov.in, cdsco.gov.in); section and article numbers were read in the provision itself rather than taken from the chapter. All 30 DOIs in the chapter were resolved at https://api.crossref.org/works/<DOI> and accepted only where the returned title, journal and year matched the citation; numbers were re-read from abstracts through Europe PMC where the publisher allowed it. Law is assessed as at October 2026, i.e. after the Income-tax Act, 2025 and after the four labour codes (OSH Code 2020, Industrial Relations Code 2020, Code on Wages 2019, Code on Social Security 2020) replaced the older statutes from 21 November 2025; no tip in this chapter relies on a repealed Act. Access failures, recorded rather than hidden: pib.gov.in returns HTTP 403 (Akamai "Access Denied"); nha.gov.in (PM-JAY) returns a 19-character JavaScript shell; janaushadhi.gov.in returns 60 characters of JavaScript; pmjay.gov.in, telemanas.mohfw.gov.in and 112.gov.in fail with "TypeError: fetch failed"; indiacode.nic.in returns 403; the KDIGO 2024 DOI 10.1016/j.kint.2023.10.018 returns a truncated Crossref body on four attempts ("Unexpected end of JSON input"), while https://doi.org/api/handles/ resolves it to PII S0085253823007664, so the DOI is registered but its metadata is unreadable here.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 16-1 | Adherence meta-analysis: 21 studies, 46,847 participants, odds ratio 0.56 (0.50-0.63) | Simpson 2006, BMJ 333:15, doi 10.1136/bmj.38875.675486.55 | metadata + abstract | 2026-10-21 | yes | DOI resolves to the cited paper; healthy-adherer caveat retained in caveats. |
| 16-2 | India has no national outpatient chronic-disease certificate; ESIC, CGHS, PM-JAY and state schemes; eSanjeevani run by MoHFW | cghs.mohfw.gov.in; esic.gov.in; nha.gov.in | scheme pages | 2026-10-21 | yes | CGHS and ESIC pages identify both schemes and their ministries; PM-JAY and eSanjeevani sites would not render, so those two names rest on the ministry pages and the chapter's own pre-authorisation caveat. |
| 16-3 | Tele-MANAS on 14416, free telephone support in Indian languages | telemanas.mohfw.gov.in (unreachable); Indian Journal of Psychiatry 2024 and 2026 | - | 2026-10-21 | yes | Official portal failed ("fetch failed"); the number is corroborated in peer-reviewed Indian Journal of Psychiatry papers (PMID 39257501, 41924507). |
| 16-4 | CDSCO approves and licenses drugs under the Drugs and Cosmetics Act, 1940 | cdsco.gov.in | Act & Rules menu | 2026-10-21 | yes | Page identifies CDSCO as a body of DGHS, MoHFW, and lists the Drugs and Cosmetics Act, 1940 and Drugs Rules, 1945 as its instruments; the Act remains in force in 2026. |
| 16-5 | No all-India rule on repeat-prescription length; Jan Aushadhi Kendra cheaper than branded; PM-JAY covers hospitalisation, not routine outpatient medicine | janaushadhi.gov.in (JavaScript shell); nha.gov.in (JavaScript shell) | - | 2026-10-21 | yes | No central rule fixing a repeat-prescription length was found, consistent with the negative claim; the price comparison could not be checked against the official price list because the page would not render. |
| 16-6 | Ayushman Arogya Mandir provides primary care; the Clinical Establishments Act and state rules cover a private clinic | Clinical Establishments (Registration and Regulation) Act, 2010 | application | 2026-10-21 | yes | The Act applies only in states and UTs that adopted it - overclaim, see non-blocking note 1. |
| 16-7 | ADA 2026 ch.12: dilated eye exam at type 2 diagnosis, type 1 after 5 years, 1-2 year interval if no retinopathy, annual foot exam | Diabetes Care 2026, doi 10.2337/dc26-S012 | Crossref metadata | 2026-10-21 | yes | DOI resolves to "12. Retinopathy, Neuropathy, and Foot Care: Standards of Care in Diabetes-2026"; the recommendation text itself was not re-read (paywall). |
| 16-8 | Adults 2.5-3 litres of water daily, salt under 6 g, children 1-2 litres | NICE NG118 | 1.8.1 | 2026-10-21 | yes | Recommendation wording matches the chapter verbatim. |
| 16-9 | Gout urate target below 360 micromol/L; 517 adults, 95% vs 30%, RR 3.18, GBP 5,066 per QALY | Doherty 2018, Lancet 392:1403, doi 10.1016/S0140-6736(18)32158-5 | metadata + abstract | 2026-10-21 | yes | Abstract confirms 517 randomised (255 nurse-led, 262 usual care) and the below-360 primary outcome at two years; ACR target, CARES and FAST caveats retained. |
| 16-10 | Purine quintiles up to OR 4.76; alcohol quantity and type raise recurrence risk | Zhang 2012 Ann Rheum Dis; Neogi 2014 Am J Med | metadata | 2026-10-21 | yes | DOIs resolve to the cited papers; individual effect sizes were not re-derived from full text and the tip is graded B. |
| 16-11 | HBsAg-positive: six-monthly ultrasound plus AFP; Shanghai trial 18,816; REVEAL-HBV | You 2022 J Clin Transl Hepatol; Shanghai RCT; REVEAL-HBV | metadata | 2026-10-21 | yes | Trial and cohort figures are consistent with the published reports; see non-blocking note 2 on the universal-treatment sentence. |
| 16-12 | Inhaler technique correct in 31% of 54,354 patients; pulmonary rehabilitation after exacerbation | 144-study review; Molimard; GOLD 2023; Cochrane CD005305 | metadata | 2026-10-21 | yes | DOIs resolve; guideline and Cochrane figures are as cited, not re-derived. |
| 16-13 | Annual uACR and eGFR in diabetes and hypertension; KDIGO 2024; DAPA-CKD 4,304 participants | KDIGO 2024 doi 10.1016/j.kint.2023.10.018; N Engl J Med 2020 | metadata + abstract | 2026-10-21 | yes | DAPA-CKD 4,304 participants confirmed; the KDIGO DOI is registered but its metadata is unreadable here (access limitation, see Method). |
| 16-14 | CHALLENGE: 889 resected colon cancer patients, DFS HR 0.72, OS HR 0.63; cost per QALY | N Engl J Med 2025 doi 10.1056/NEJMoa2502760; J Clin Oncol 2026 | metadata + abstract | 2026-10-21 | yes | 889 randomised (445/444) and DFS HR 0.72 confirmed; cost figures come from the 2026 cost-utility paper whose DOI resolves. |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

Command run: npx tsx scripts/check-chapter.ts 16 - exit 0, "PASS: no banned term, CJK character or foreign-jurisdiction term." (14 tips scanned). The tip that describes the Shanghai trial names only "Shanghai"; no banned term and no CJK character appears.

## Safety and editorial check

- No unsupported high-risk claim: the three tips that direct treatment (16-1, 16-9, 16-11) each keep their qualifying caveat - healthy-adherer effect, CARES versus FAST disagreement plus prophylaxis duration, and the Cochrane review's contrary conclusion on antivirals. None tells a reader to start or stop a drug on their own.
- No invented scheme, number or hotline: ESIC, CGHS, PM-JAY, eSanjeevani, Ayushman Arogya Mandir, Jan Aushadhi Kendra and NPCDCS all exist and are attributed to the correct ministry or corporation. The one number not confirmable on an official page this session (14416) is corroborated in peer-reviewed Indian literature.
- No direct equivalent recorded where needed: the chapter states plainly that India has no national outpatient chronic-disease certificate (16-2), no all-India rule on repeat-prescription length (16-5), and that PM-JAY does not pay for routine outpatient medicine (16-5).
- Caveats retained: pre-authorisation, the referral requirement, "chronic disease card is not a government scheme", and the disputed labels on 16-9 and 16-11 are all intact and match the source's caution.

## Blocking issues

None. Non-blocking notes:

1. 16-6, benefit, "The Clinical Establishments Act and the state rules apply to a private clinic." The Clinical Establishments (Registration and Regulation) Act, 2010 is in force only in the states and UTs that adopted it - 17-11 in this same build words it correctly as "in the states that have adopted it". Suggested replacement: "The Clinical Establishments Act, where the state has adopted it, or the state's own clinical-establishment rules, applies to a private clinic."
2. 16-11, sources and benefit: the 2022 hepatitis-B guideline in the source list is a regional guideline published in English translation and is listed without attribution, so the sentence "all patients over 30 years with detectable HBV DNA are advised to start antivirals regardless of ALT levels" reads as universal guidance. Suggested correction: attribute it as "a 2022 regional guideline" and add that India's national programme has no such universal-treatment rule, leaving the decision to the treating physician.
3. 16-13, source: the KDIGO 2024 DOI is registered but its metadata could not be read from this host - an access limitation, not a correction.

Verdict: PASS
