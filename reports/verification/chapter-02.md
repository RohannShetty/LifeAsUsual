# Verification: Chapter 2 - Do Not Die Slowly

Verifier: independent-verifier-025ab0a0-eba1-44cc-96d8-0231fb472844
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/02-do-not-die-slowly.json
Manifest status: draft (recommend checked)

## Method

All 47 tips were read in the JSON, with the single worklist HIGH RISK tip (2-5, the quitline) checked against an official Indian service. Indian instruments checked: the National Tobacco QuitLine (ntqls.in, run from Vallabhbhai Patel Chest Institute, New Delhi), the Prohibition of Electronic Cigarettes Act, 2019 as listed by ntcp.mohfw.gov.in, the Food Safety and Standards Act, 2006 and the Food Safety and Standards (Contaminants, Toxins and Residues) Regulations, 2011 (fssai.gov.in compendium), and the Ayushman Arogya Mandir / NP-NCD screening service (aam.mohfw.gov.in) for the Chapter 6 cross-reference. The two previously blocking tips (2-40, 2-46) were treated as regression tests. Access failures: www.mohfw.gov.in and pib.gov.in returned HTTP 403, telemanas.mohfw.gov.in failed at fetch level, and indiacode.nic.in returned HTTP 403, so the 2019 Act's long title was read on ntcp.mohfw.gov.in instead.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 2-1 | A pack-a-day habit "costs roughly $3–$4" | n/a | n/a | 2026-10-21 | no | Dollar amount in the India edition; use rupees (a 20-cigarette pack is roughly ₹200–₹400). |
| 2-5 | National Tobacco Quitline 1800-11-2356 is free; cessation clinics at district hospitals under NPCDCS | ntqls.in ("toll free number (1800-11-2356)", VPCI New Delhi) | QuitLine | 2026-10-21 | yes | HIGH RISK tip passes: number, operator and free-of-charge claim all confirmed. |
| 2-6 | "Sales through any website, online shop, or social-media platform other than the state-run e-cigarette trading platform are illegal" | Prohibition of Electronic Cigarettes Act, 2019 (ntcp.mohfw.gov.in) | Act 2019, ss.3-4 | 2026-10-21 | no | India prohibits production, import, sale, storage and advertisement of e-cigarettes outright; there is no "state-run e-cigarette trading platform". The sentence is China's state-monopoly model. |
| 2-12 | "adults aged 65 and older have an annual free health checkup including lipid screening (see Chapter 6, Rule 18)" | aam.mohfw.gov.in; Chapter 6 Rule 18 | AAM/NP-NCD | 2026-10-21 | no | No nationwide annual free check-up for everyone over 65; AAM screens from age 30 for NCDs. The cross-reference now contradicts Chapter 6, which says exactly that. |
| 2-40 | Packaged cooking oil must carry an FSSAI licence number; Food Safety and Standards Act, 2006; Contaminants, Toxins and Residues Regulations, 2011 | fssai.gov.in regulations compendium | FSS Act 2006; 2011 Regulations | 2026-10-21 | yes | Regression cleared: the Chinese "SC code" licence number is gone and both instruments exist. Guangzhou aflatoxin cohort still named openly (note). |
| 2-42 | Range hood: "buying and installing a unit costs several hundred to over a thousand dollars" | n/a; SRC lists only MoHFW and WHO | n/a | 2026-10-21 | no | Dollar range, and the magnitude is wrong for India (units run roughly ₹5,000–₹25,000). The BENEFIT cites a Shanghai cohort and a Taiwanese study with no Indian source in SRC. |
| 2-46 | Betel-quid oesophageal cancer; IARC Volume 100F; Shanghai and Qidong cohorts | IARC Monographs Vol. 100F | betel quid | 2026-10-21 | yes | Regression cleared: the corrupted author string "Yuan JM" is gone and the citation set is coherent. Caveat still invokes United States Department of Agriculture guidance (note). |
| 2-47 | Raw freshwater fish and clonorchiasis; IARC Volume 100B | IARC Monographs Vol. 100B | clonorchis | 2026-10-21 | yes | No Indian legal or scheme claim; Chinese dish names remain in the text (note). |

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 2` reports "PASS: no banned term, CJK character or foreign-jurisdiction term"; no CJK characters. A separate currency grep found dollar amounts in two tips (2-1, 2-42), which the script does not flag.
- Rendered page: not checked; the build was not run.

## Safety and editorial check

- No unsupported high-risk claim: 2-5 is solid. 2-6 is unsafe in the opposite direction: it tells Indian readers that some e-cigarette sales are legal, which is false under the 2019 Act.
- No invented scheme, number or hotline: the quitline number is real; "the state-run e-cigarette trading platform" is invented, and the "annual free health checkup over 65" in 2-12 is invented.
- No direct equivalent recorded where needed: missing for e-cigarette legality (India bans rather than channels sales) and for the 65+ check-up.
- Caveats retained: yes, and 2-5 honestly warns that most trials were overseas and local service intensity varies.

## Blocking issues

- 2-6: delete "other than the state-run e-cigarette trading platform" and state the Indian position: all sale, import, advertisement and storage of e-cigarettes is prohibited under the Prohibition of Electronic Cigarettes Act, 2019, so any e-cigarette on sale is illicit. The COST line ("a few dozen to a few hundred rupees per month") should be framed as an illicit-market price or dropped.
- 2-12: delete "adults aged 65 and older have an annual free health checkup including lipid screening (see Chapter 6, Rule 18)"; replace with the Ayushman Arogya Mandir / NP-NCD screening route (adults from 30) or say no national 65+ check-up exists.
- 2-42: convert "several hundred to over a thousand dollars" to an Indian rupee range; either cite an Indian source for the health claim or state that the evidence is from Shanghai and Taiwan.
- 2-1: convert "$3–$4" per pack to rupees.
- Note (non-blocking): 2-40, 2-46 and 2-47 name Chinese cohorts, dishes and agencies without framing; 2-46 cites United States Department of Agriculture guidance.

Verdict: FAIL
