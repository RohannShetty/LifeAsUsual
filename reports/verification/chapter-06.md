# Verification: Chapter 6 - The Negative List

Verifier: independent-verifier-025ab0a0-eba1-44cc-96d8-0231fb472844
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/06-the-negative-list.json
Manifest status: draft (recommend checked)

## Method

The source pack records "No high-risk claim in this chapter", so all 35 tips were read and every tip that names a programme, statute, price or foreign case was traced. Indian instruments checked: Ayushman Arogya Mandir and NP-NCD screening (aam.mohfw.gov.in), the Consumer Protection Act, 2019 and the Central Consumer Protection Authority (consumeraffairs.nic.in; s.21 text on the Indian Kanoon statute mirror), the Mental Healthcare Act, 2017 s.89 (Indian Kanoon), and the Food Safety and Standards Authority site. The three previously blocking tips (6-18, 6-22) and the prior non-blocking items (6-22 livestream anecdote, 6-32 survival tables) were treated as regression tests. Access failures: indiacode.nic.in returned HTTP 403 for the statute PDFs, and www.mohfw.gov.in returned HTTP 403; where a page was blocked the same section was verified on the Indian Kanoon mirror or on a working government subdomain (dghs, aam, nvhcp) and that substitution is recorded in the table.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 6-1 | Sesso et al. 2012 multivitamin trial | SRC line in JSON | doi.org | 2026-10-21 | no | Citation defect: "JAMA. JAMA." duplicated and DOI 10.1001/jama.2022.8970 belongs to a 2022 paper, not Sesso 2012 (10.1001/jama.2012.14641). Non-blocking for law/money, but it should be corrected. |
| 6-3 | Multivitamin cost "Roughly 0.2 to 0.₹71 per day, or 100 to ₹2,800 per year" | n/a | n/a | 2026-10-21 | no | Broken string "0.₹71" and a mixed-unit second range (100 in yuan, 2,800 in rupees). |
| 6-7 | Whole-body PET-CT "$7000–$10000 per scan"; tumour-marker panels "a few hundred dollars" | Indian private imaging prices (roughly ₹15,000–₹35,000 for PET-CT) | n/a | 2026-10-21 | no | Dollar amounts, and the magnitude is off by an order of magnitude for India, in a tip that is entirely about money. |
| 6-15 | "in Xixian County, Henan Province, a fortune-telling ring collected ... up to ₹55,200; the ringleader was sentenced to 11 years" | n/a | n/a | 2026-10-21 | no | Chinese criminal case with a converted yuan sum; the surrounding tip also prices entertainment in "a few dollars". |
| 6-18 | Ayushman Arogya Mandir screens adults from 30 for high blood pressure, diabetes and three cancers; no nationwide free annual full-body check over 65 | aam.mohfw.gov.in (screening for hypertension, diabetes and cancers at 30+) | AAM / NP-NCD | 2026-10-21 | yes | Regression cleared: the Chinese basic-public-health package is gone and the text now states the negative explicitly. |
| 6-22 | Misleading advertisements complained to the Central Consumer Protection Authority or a district consumer commission | Consumer Protection Act, 2019 s.21 (CCPA directions and penalties for false or misleading advertisements); consumeraffairs.nic.in | s.21 | 2026-10-21 | yes | Regression cleared: the Chinese Pixiu framing is gone. BENEFIT still has a jurisdiction-free livestream-sales anecdote (note). |
| 6-28 | "Legally, involuntary hospitalization is permitted only for individuals with severe mental disorders who pose a risk of harming themselves or others ... Mental health professionals are prohibited from providing conversion therapy" | Mental Healthcare Act, 2017 s.89 (admission and treatment of persons with mental illness with high support needs) | s.89 | 2026-10-21 | no | No statute is cited. s.89 is framed around high support needs and capacity, with its own harm triggers, so "risk of harm" is not the test; the conversion-therapy prohibition is professional guidance (Indian Psychiatric Society, NMC ethics), not statute. Reword and cite. |
| 6-32 | "roughly 90% of thirty-year-olds survive to age sixty"; 87.4% to 65, 55.6% to 80, +17.5 years at 65 | No population stated | n/a | 2026-10-21 | no | Unlabelled life table (the survival percentages look like United States data while the rupee framing is Indian); the 90%/60 figure does not match the 87.4%/65 figure in the same tip. |
| 6-35 | "In 2017, the Guangdong Provincial Health and Family Planning Commission issued directives ... the National Center for ADR Monitoring Annual Report (2024) indicated that injections accounted for 57.2% of all reported adverse..." | No Indian instrument; NMC rational-use guidance and PvPI are the Indian equivalents | n/a | 2026-10-21 | no | Chinese provincial IV-infusion campaign and China's national ADR centre; only the PLAIN paragraph was localised. |

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 6` reports "PASS: no banned term, CJK character or foreign-jurisdiction term"; no CJK characters. A separate currency grep found dollar amounts in 6-7 and 6-15 and the broken "₹" string in 6-3, none of which the script's term list covers.
- Rendered page: not checked; the build was not run.

## Safety and editorial check

- No unsupported high-risk claim: the chapter has no worklist high-risk tip, but 6-7's prices and 6-35's evidence are unsupported for India, and 6-15 rests on a case that never happened in India.
- No invented scheme, number or hotline: 6-18 and 6-22 now name real Indian institutions. 6-35's "National Center for ADR Monitoring" is a Chinese body, and 6-15's case is Chinese.
- No direct equivalent recorded where needed: missing for the Guangdong IV campaign, the Chinese fortune-telling prosecution and the PET-CT price level.
- Caveats retained: yes, and 6-18's explicit "What India does not have ..." is the model the rest of the chapter should follow. 6-20 still carries the placeholder sentence "The exact criteria for those exceptions haven't been verified yet." (note).

## Blocking issues

- 6-7: convert the PET-CT and tumour-marker prices to Indian rupees (roughly ₹15,000–₹35,000 per PET-CT) or drop the figures; "a few hundred dollars" must go.
- 6-15: remove the Xixian County, Henan Province case and the ₹55,200 figure, or label it explicitly as a Chinese case; "a few dollars" in the caveat must become rupees.
- 6-35: replace the Guangdong Provincial Health and Family Planning Commission directive and the National Center for ADR Monitoring figures with an Indian instrument (NMC rational-use guidance, PvPI reporting) or state that India has no equivalent campaign.
- 6-3: repair "0.2 to 0.₹71 per day" and convert the "100 to ₹2,800 per year" lower bound.
- 6-1, 6-2, 6-4, 6-6, 6-8: the same range break recurs ("0.5 to ₹28 per day", "1 to ₹43 per day", "200 to ₹9,900", "300 to ₹9,900", "200 and ₹28,400"); the lower bound must be converted or the range dropped.
- Note (non-blocking): 6-28's mental-health law sentence needs a statutory citation and softer conversion-therapy wording; 6-32 must say whose life table it is; 6-1's DOI and duplicate "JAMA." should be corrected; 6-20's "haven't been verified yet" sentence should be removed.

Verdict: FAIL
