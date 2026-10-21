# Verification: Chapter 13 - Emergencies: What to Do First

Verifier: independent-verifier-session-cbb8c456
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/13-emergencies-what-to-do-first.json
Manifest status: draft (recommend checked)

## Method

All 48 tips were read in full (8 grade A, 37 grade B, 3 grade C), together with
reports/source-packs/chapter-13.md and the earlier verification report, whose eight
blocking findings (the number 120 used as the medical emergency number in 13-2, 13-3,
13-4, 13-8, 13-22, 13-25 and 13-44, and Criminal Procedure Law sections 62/110/111/193
in 13-37) were re-tested as regression cases. Legal claims were checked against the
Bharatiya Nyaya Sanhita, 2023 sections 309 and 310 (bare-act text), the Bharatiya
Nagarik Suraksha Sanhita, 2023 section 173, the Motor Vehicles Act, 1988 section 134A,
the Legal Services Authorities Act, 1987 and the Model Tenancy Act material where cross
referenced; the emergency number was checked against an official state police portal.
Medical and first-aid claims were sampled against the cited WHO, CDC, NHS, AHA and IFRC
material and the DOIs in the sources.

Access failures, logged rather than hidden: indiacode.nic.in bitstream PDFs returned
HTTP 403 "Access Denied" (Akamai) for the BNS, BNSS and MV Act texts; mha.gov.in
(including the ERSS page) and india.gov.in returned HTTP 403 from the same edge;
112.gov.in failed at the DNS/TLS layer (fetch failed). The statutes were therefore read
from bare-act reproductions (advocatekhoj.com BNS 309, verified against a second
commentary on BNS 309/310) and the ERSS number from keralapolice.gov.in, which displays
"Emergency Helpline 112".

npx tsx scripts/check-chapter.ts 13 -> PASS, 48 tips, no banned term, CJK character or
foreign-jurisdiction term (exit 0).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 13-1, 13-3, 13-4, 13-7, 13-8, 13-15, 13-22, 13-25, 13-42, 13-44 | Emergency help is reached on 112 | keralapolice.gov.in (official state portal) | ERSS single emergency number | 2026-10-21 | yes | 112 is the national Emergency Response Support System number; 108 is correctly offered only as a state ambulance alternative in the 13-3 caveat. The string "120" now survives only as the CPR compression rate "100 to 120 per minute" in 13-44, which is a rate, not a phone number. Regression fixed. |
| 13-2 | Good Samaritan protection for helping an injured person | Motor Vehicles Act, 1988 s.134A; MoRTH Good Samaritan scheme | s.134A | 2026-10-21 | no | Title, plain words and caveat now cite s.134A, 112 and correctly say that walking away from a stranger is legal. But the benefit field still reads "Article 184 protects anyone who voluntarily and urgently helps another person" and quotes a pharmacy-owner case ending in "over ₹1,27,900 in compensation". Article 184 is the Chinese Civil Code good-Samaritan clause and the rupee figure is a converted yuan award from a Chinese case. |
| 13-13 | Rabies: wash 15 minutes, vaccinate same day | WHO rabies fact sheet | Rabies, post-exposure prophylaxis | 2026-10-21 | yes | 15-minute soap-and-water wash and same-day vaccine match WHO guidance. |
| 13-18, 13-19 | Electrical injury and carbon monoxide first aid | US CDC pages cited in sources | First aid sections | 2026-10-21 | yes | Foreign public-health source is named as such; no foreign law is presented as Indian. |
| 13-24 | Fire: get out, stay low, do not use lifts | FEMA/NDMA material cited | Home fire safety | 2026-10-21 | yes | Behavioural advice, no legal claim. |
| 13-27 | Desert/high-plateau survival | US NPS and Death Valley material cited | Heat and water | 2026-10-21 | yes | The Gobi-specific framing was replaced by generic desert/high plateau; sources are attributed, not implied Indian. |
| 13-36 | Punishment for robbery, limits of self-defence | BNS 2023 s.309, s.310 (advocatekhoj bare act; cross-check clawlaw.in) | ss.309-310; private defence ss.34-44 | 2026-10-21 | no | Plain words say robbery is "punishable by at least three years up to ten years", and that entering a residence, using a weapon or causing serious injury or death raises it to "ten years or more, even life imprisonment or death". BNS s.309 has no three-year minimum and no death penalty; it provides rigorous imprisonment up to ten years (fourteen on a highway at night), life or up to ten years where hurt is caused, and death is available only for murder committed in a dacoity (s.310). The benefit field cites "Article 20" for self-defence, which is the Chinese Criminal Law article (India: BNS private defence). Sources cite only NDMA and MoHFW, no legal instrument. |
| 13-37 | Group fight: leave, call 112, report as witness | BNS 2023; BNSS 2023 s.173; NALSA | s.173 BNSS | 2026-10-21 | yes | The old Criminal Procedure Law sections 62/110/111/193 are gone; s.173 BNSS (information in cognizable cases) and 112 are right. |
| 13-39 | Injury while helping: no automatic reimbursement fund; use tort, MV Act, BNSS compensation, legal aid | MV Act s.134A; BNSS victim compensation; Legal Services Authorities Act, 1987; nalsa.gov.in | s.134A; BNSS; LSA Act | 2026-10-21 | yes | High-risk tip. Correctly separates protection from liability (s.134A) from payment, and says there is no automatic state fund. |
| 13-42 | After sexual assault: 112, preserve evidence, 72-hour PEP window | wcd.gov.in One Stop Centres; nalsa.gov.in; WHO | OSC scheme; PEP | 2026-10-21 | yes | One Stop Centres and NALSA legal aid are real; the 72-hour HIV PEP window is standard. |
| 13-44 | Infant CPR: 30 compressions, rate 100-120/min | AHA/AAP 2025 paediatric BLS (cited) | Part 6 | 2026-10-21 | yes | The "100 to 120" here is a compression rate, correctly not a helpline. |
| 13-45 | Button battery / magnet ingestion is an emergency | Litovitz et al. 2010, doi 10.1542/peds.2009-2511 | Pediatrics 125(6) | 2026-10-21 | yes | Citation and advice match. |

## Banned-term check

- JSON: 0 banned terms (check-chapter.ts 13 PASS; no China/Chinese/mainland/RMB/yuan/
  hukou/yibao/dibao/CNY, no CJK, no NMPA/NHSA/SAMR/MOHRSS/CSCSE/CBIRC/NFRA/MIIT/SFDA/
  PRC/State Council/Supreme People/procuratorate/WeChat/Alipay).
- Rendered page: not built in this pass (build deliberately not run); the JSON is the
  only source of the rendered text, so the JSON result carries over. Note that the
  banned-term scan does not catch the substantive residue recorded for 13-2 and 13-36,
  because "Article 184" and "Article 20" are not on the term list.

## Safety and editorial check

- No unsupported high-risk claim: 13-39 is supported and correctly says no automatic
  fund exists. 13-36 is unsupported: its punishment thresholds and "Article 20" have no
  Indian instrument behind them.
- No invented scheme, number or hotline: 112, 108 (as a state alternative), NALSA and
  the One Stop Centres are real. No invented hotline found.
- No direct equivalent recorded where needed: 13-39 explicitly says there is no
  automatic reimbursement fund, and 13-2 says walking away is legal under Indian law —
  both correct no-equivalent statements. 13-36 does not state any no-equivalent
  position and instead imports Chinese criminal-law thresholds.
- Caveats retained: all 48 tips keep caveats; the 13-2 caveat keeps the s.134A
  limitation and the evidence-preservation advice.

## Blocking issues

- 13-2 (grade B): benefit field still imports the Chinese Civil Code and a Chinese
  damages figure. Replace "Article 184 protects anyone who voluntarily and urgently
  helps another person: 'A rescuer bears no civil liability for any harm caused to the
  victim during such efforts.'" and the pharmacy-owner case with "over ₹1,27,900 in
  compensation" by the Indian position: MV Act s.134A plus the MoRTH Good Samaritan
  scheme protect the rescuer from civil and criminal liability; there is no statutory
  compensation payable to the rescuer. Delete the rupee figure entirely.
- 13-36 (grade C): plain words overstate robbery punishment ("at least three years",
  "ten years or more, even life imprisonment or death" for entering a residence or
  causing injury) and the benefit cites "Article 20" for self-defence. Rewrite to BNS
  2023 s.309 (rigorous imprisonment up to ten years and fine; up to fourteen years on a
  highway between sunset and sunrise; imprisonment for life or up to ten years where
  hurt is voluntarily caused) and s.310 for dacoity (life or ten years; death only
  where murder is committed in the dacoity), cite BNS private-defence provisions
  instead of Article 20, note that a mere demand without force or fear of instant harm
  is extortion under s.308, and add a legal source to the sources list.

Verdict: FAIL
