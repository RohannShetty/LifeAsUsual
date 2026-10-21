# Verification: Chapter 1 - Do Not Die Early

Verifier: independent-verifier-025ab0a0-eba1-44cc-96d8-0231fb472844
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/01-do-not-die-early.json
Manifest status: draft (recommend checked)

## Method

All 48 tips were read in the JSON, with the four worklist HIGH RISK tips (1-25, 1-32, 1-37, 1-43) checked against the cited papers. Indian instruments were checked against peso.gov.in (Gas Cylinders Rules 2016), Indian Kanoon for the Motor Vehicles Act 1988 (s.184, s.185), dghs.mohfw.gov.in and telemanas.mohfw.gov.in for Tele-MANAS 14416, nvhcp.mohfw.gov.in for the hepatitis programme, and NDMA/AERB for the emergency-supply and radiation entries. The three previously blocking tips from the older report (1-4, 1-5, 1-9) and the older non-blocking items (1-14, 1-45) were treated as regression tests. Access failures, recorded rather than hidden: indiacode.nic.in returned HTTP 403 ("Access Denied") for the statute PDFs; www.mohfw.gov.in and pib.gov.in returned HTTP 403; telemanas.mohfw.gov.in failed at fetch level ("fetch failed") so the number was confirmed on dghs.mohfw.gov.in ("toll-free helpline number 1800-89-14416 or short code 14416") and in an indexed snippet of the Tele-MANAS site ("24X7 ... Toll Free Number- 14416"). A grep of the JSON for currency symbols was run in addition to the banned-term script, because the script's term list contains no currency tokens.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1-4 | Cylinders and fittings must be PESO-approved under the Gas Cylinders Rules, 2016 | peso.gov.in, Gas Cylinder Rules 2016 | Rules notified 2016 (S.O. 1081(E)) | 2026-10-21 | yes | Regression cleared: the Chinese gas regulation is gone and no yuan figure remains. |
| 1-5 | "No Indian agency publishes a nationwide count" of wild-mushroom poisoning | MoHFW/NCDC publications | n/a | 2026-10-21 | yes | Regression cleared: the China CDC figures were deleted, and the remaining sentence is a defensible negative claim. |
| 1-9 | Drink-driving limit, dangerous driving, no statutory rest break for a private driver | Motor Vehicles Act 1988 s.185 (30 mg/100 ml) and s.184 | ss.184-185 | 2026-10-21 | yes | Regression cleared: the old Chinese "Article 62" rest rule is gone; the four-hour figure is now labelled advice. |
| 1-25 | Tele-MANAS helpline 14416 | dghs.mohfw.gov.in; telemanas.mohfw.gov.in | Tele-MANAS | 2026-10-21 | yes | Number and scheme real. But "available at least 18 hours a day" understates a 24x7 service; say "24 hours a day". |
| 1-26 | "Emergency Management Department's National Recommended List of Basic Household Emergency Supplies" (11 items); buy extinguishers with the "CCC certification mark" | No Indian instrument; NDMA publishes no household-supply list | n/a | 2026-10-21 | no | Chinese instrument: the 11-item list is the PRC Ministry of Emergency Management list, and CCC is China Compulsory Certification. India would be BIS/ISI. Also a broken link "docs/.md". |
| 1-31 | HIV test confidentiality under the "National Measures for HIV Testing Management" and "Regulations on HIV/AIDS Prevention and Control" Articles 23, 38; "Guangdong Provincial CDC" window periods | No Indian instrument cited | n/a | 2026-10-21 | no | Both instruments are PRC State Council regulations. The Indian text is the HIV/AIDS (Prevention and Control) Act, 2017, with NACO/ICMR window-period guidance. |
| 1-33 | "As of September 26, 2020, soluble concentrate formulations are also prohibited nationwide" (paraquat) | No Indian prohibition; paraquat remains a CIB&RC-registered herbicide with use restrictions | n/a | 2026-10-21 | no | Date and rule are China's 2020 paraquat ban. India has no equivalent nationwide ban. |
| 1-34 | Fall from height: "a trauma ICU in southern Xinjiang"; average hospital stay ₹1,40,300; total health spending 9,089.55 billion rupees | No Indian source | n/a | 2026-10-21 | no | Chinese hospital series plus converted national accounts; the percentages are meaningful only for China. |
| 1-35 | 86% of kidney sellers report worse health; organ sale is illegal | Goyal et al. 2002, JAMA 288(13):1589 | abstract/cohort | 2026-10-21 | yes | Indian cohort now cited correctly; United States donor data labelled as such. |
| 1-36 | "178,000 radioactive sources and 355,000 radiation devices are in use nationwide"; Ningxia iridium-192 case; fine ₹9,94,700 | AERB is the Indian regulator; no such published inventory | n/a | 2026-10-21 | no | Chinese inventory and Chinese criminal case with a converted fine. |
| 1-37 | Gambling distress: call Tele-MANAS 14416 | as 1-25 | Tele-MANAS | 2026-10-21 | yes | Helpline real; the gambling-law cross-reference points to Chapter 9, outside this chapter. |
| 1-43 | Asking directly about suicidal thoughts does not plant the idea | Gould et al. 2005, JAMA 293(13):1635 | RCT | 2026-10-21 | yes | Citation and finding match. |
| 1-45 | Free/nominal HCV testing under the National Viral Hepatitis Control Programme | nvhcp.mohfw.gov.in | NVHCP | 2026-10-21 | yes | Regression cleared: the PRC NHSA source is gone. |
| 1-47 | "The 2022 national guidelines" advise against population screening; gastroscopy every 5 years from 45 | No Indian guideline; sources are Korean (Jun 2017) and Chinese (Zhang) | n/a | 2026-10-21 | no | Unnamed jurisdiction: it is China's 2022 gastric-cancer screening guideline. India has no gastroscopy screening programme; the COST line also keeps "($40–$80)". |
| 1-48 | Bongkrekic acid: Jidong County (Heilongjiang), Guangdong wet-rice-noodle directives, 143 deaths in 2020 | FSSAI is named but no FSSAI data is used | n/a | 2026-10-21 | no | Content is China CDC food-poisoning surveillance; only the agency name was localised. |
| 1-14 | Hepatitis B vaccine: three doses "cost between 100 and ₹4,300 total" | n/a | n/a | 2026-10-21 | no | Mixed-unit range: the lower bound was never converted. |
| 1-20 | Flu shot: "One shot costs 50 to ₹2,100" | n/a | n/a | 2026-10-21 | no | Same mixed-unit break; ₹50 is not an Indian flu-vaccine price. |
| 1-21 | Shingles vaccine: two doses "roughly 3,000 to ₹56,800 in total" | n/a | n/a | 2026-10-21 | no | Same break, and the upper bound is a converted Chinese price, not an Indian one. |
| 1-23 | Breath test "100 to ₹2,800"; eradication drugs "200 to ₹7,100" | n/a | n/a | 2026-10-21 | no | Same mixed-unit break in both ranges. |
| 1-41 | Ice rescue picks "cost under $15–$30" | n/a | n/a | 2026-10-21 | no | United States dollar amount left in the India edition; the ice guidance itself is United States/Canada, with no Indian equivalent acknowledged. |
| 1-42 | Safety goggles and face shield "cost $15–$30" | n/a | n/a | 2026-10-21 | no | Dollar amount left in place. |
| 1-44 | ECG "costs just a few hundred rupees (under $10)" | n/a | n/a | 2026-10-21 | no | Dollar parenthetical left in place. |

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 1` reports "PASS: no banned term, CJK character or foreign-jurisdiction term", and a manual sweep found no CJK. The script's list has no currency tokens, so a separate grep was run: it found dollar amounts (`$`) in 1-41, 1-42, 1-44 and 1-47 and no yuan/RMB wording.
- Rendered page: not checked; the build was not run.

## Safety and editorial check

- No unsupported high-risk claim: 1-25/1-32/1-37/1-43 rest on real papers and a real helpline, but 1-26, 1-31, 1-33, 1-34, 1-36, 1-47 and 1-48 present Chinese law, Chinese statistics or a Chinese clinical series as if they applied to an Indian reader.
- No invented scheme, number or hotline: 14416 is real; the "Emergency Management Department" list, the "2022 national guidelines" and the Ningxia/Xinjiang cases are real but foreign, and the converted rupee figures are invented for India.
- No direct equivalent recorded where needed: missing for paraquat prohibition, the 11-item household kit list, the HIV testing regulations, gastric-cancer screening and bongkrekic-acid surveillance, all of which have no Indian counterpart.
- Caveats retained: yes, including the honest statement that no Indian agency counts mushroom poisonings and that the four-hour driving guidance is advice, not law.

## Blocking issues

- 1-26: replace the PRC "Emergency Management Department" list and the "CCC certification mark" with Indian framing (BIS/ISI mark; no national household-supply list), and repair the broken "docs/.md" link.
- 1-31: delete the "National Measures for HIV Testing Management" and "Regulations on HIV/AIDS Prevention and Control" Articles 23/38 and the Guangdong CDC figures; cite the HIV/AIDS (Prevention and Control) Act, 2017 and NACO/ICMR window periods, or state that India publishes no official window-period table.
- 1-33: delete "As of September 26, 2020, soluble concentrate formulations are also prohibited nationwide"; India has no equivalent ban, so say so and keep only the poisoning/emergency-care content.
- 1-34: remove "a trauma ICU in southern Xinjiang" and the converted national figures (₹1,40,300 average stay, 9,089.55 billion rupees); either label them as Chinese data or drop them.
- 1-36: remove the "178,000 radioactive sources / 355,000 radiation devices" inventory, the Ningxia case and the ₹9,94,700 fine; cite AERB for Indian rules and keep the generic safety advice.
- 1-47: name the jurisdiction of "the 2022 national guidelines" or replace them with the Indian position (no population gastroscopy screening), and remove the leftover "($40–$80)".
- 1-48: remove or explicitly label the Jidong County, Guangdong and 143-death figures as Chinese; FSSAI is named but nothing Indian is said.
- Currency: 1-41 ($15–$30), 1-42 ($15–$30), 1-44 ("under $10") and 1-47 ("($40–$80)") must be converted to rupees.
- Currency: 1-14, 1-20, 1-21 and 1-23 have ranges whose lower bound stayed in yuan ("between 100 and ₹4,300", "50 to ₹2,100", "3,000 to ₹56,800", "100 to ₹2,800", "200 to ₹7,100"); convert both bounds or drop the figures.
- Note (non-blocking): 1-25 should say Tele-MANAS answers 24 hours a day, not "at least 18 hours"; 1-23 and 1-34 name Chinese places without framing; 1-41 and 1-42 rely on United States/Canadian guidance with no Indian equivalent stated.

Verdict: FAIL
