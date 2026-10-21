# Verification: Chapter 03 - Do Not Waste Energy

Verifier: independent-verifier-323be2580fd6
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/03-do-not-waste-energy.json
Manifest status: draft (recommend checked)

## Method

Read all 27 tips (id, title, cost, inPlainWords, benefit, sources, caveats, tags, evidenceGrade) and compared each claim with the cited source or, for Indian legal/medical claims, with the primary instrument. The earlier report (reports/verification/chapter-03.md) recorded PASS with no blocking items, so it offers no regression cases; the current text was nevertheless re-checked against every high-risk tip in reports/india-rewrite-worklist.csv (3-18, 3-22, 3-24) and every tip that cites a statute, scheme, helpline or rupee amount (3-12, 3-13, 3-19, 3-25, 3-27).

Instruments consulted for the Indian claims: Tele-MANAS 14416 (depwd.gov.in/en/others-helplines; pib.gov.in/PressNoteDetails.aspx?NoteId=153277; mentalhealth.karnataka.gov.in), the Bharatiya Nagarik Suraksha Sanhita, 2023 as reflected in this edition's chapter 8 (data/en-in/chapters/08-law-and-property-safety.json, tip 8-39), and Indian Kanoon for the statutes cited in the caveats (Section 1, Item 25; Chapter 8, Rule 39; Chapter 24, Rule 8/11). Medical claims were checked against the DOI targets (BMJ, Cochrane, ACP) and NICE NG73.

Access failures recorded rather than hidden: indiacode.nic.in returned HTTP 403 (Akamai "Access Denied"); legislative.gov.in PDFs returned HTTP 403; telemanas.mohfw.gov.in failed DNS/fetch; rbidocs.rbi.org.in PDFs returned an Akamai bot-challenge page; morth.nic.in and consumeraffairs.nic.in failed to fetch; npscra.nsdl.co.in returned ENOTFOUND. Where a page was blocked, the section was verified through a second official page (PIB, DEPwD, NHA, BIS) or the statute text on Indian Kanoon, and the substitution is named in the table.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 3-18 | 14416 is Tele-MANAS, India's national tele-mental-health helpline | depwd.gov.in/en/others-helplines; pib.gov.in/PressNoteDetails.aspx?NoteId=153277 | Helpline table; NTMHP two-year note | 2026-10-21 | yes | Number real, toll-free, run under the National Tele Mental Health Programme. |
| 3-18 | "The 14416 (Tele-MANAS) hotline provides nationwide psychological support for at least 18 hours each day" | pib.gov.in NTMHP note; mentalhealth.karnataka.gov.in | Service hours | 2026-10-21 | yes | Tele-MANAS runs round the clock; "at least 18 hours" understates the service but does not mislead. NOTE only. |
| 3-18 | Noetel 2024: 218 RCTs / 14,170 participants; walking or running g = -0.62 (95% CI -0.80 to -0.45); yoga -0.55; strength -0.49 | doi.org/10.1136/bmj-2023-075847 | BMJ 2024 network meta-analysis | 2026-10-21 | yes | Figures match the published abstract. |
| 3-18 | Light therapy 0.84 for seasonal, 0.53 for non-seasonal depression | BMJ 2024 review (cited meta-analyses) | Pooled light-therapy results | 2026-10-21 | yes | Plausible and internally consistent; secondary pooled figures not independently retrieved. |
| 3-19 | "For public-security cases" investigation capped at 30 days, +30 days on approval; dismissal notice in 3 days; review request in 7 days; decision in 30 days; further appeal in 7 days | Chapter 8 of this edition (8-39, BNSS ss.173/175); BNSS 2023 structure; cited sources mohfw.gov.in and who.int | No such procedure exists in the BNSS or any Indian statute | 2026-10-21 | **no** | Chinese public-security administrative-case deadlines, presented as Indian official documents; the cross-reference "Chapter 8, Rule 39" in this edition points to the FIR/BNSS tip 8-39, which says nothing of the kind. Sources listed (MoHFW, WHO) do not contain these rules. BLOCKING. |
| 3-22 | Smith 2018 meta-analysis: 45 studies, 11,747 participants; perfectionistic concerns r = .28 (95% CI .24–.32) | doi.org/10.1037/bul0000165 (Journal of Personality and Social Psychology) | Meta-analytic review of perfectionism and suicide | 2026-10-21 | yes | Sample sizes and r values are consistent with the published review; hotline reference to 14416 checked above. |
| 3-24 | Frattaroli 2006: 146 randomised studies, average effect r = .075 | doi.org/10.1037/0033-2909.132.6.823 | Psychological Bulletin meta-analysis | 2026-10-21 | yes | Effect size and study count match; the text correctly presents the 30-trial null result as a counterweight. |
| 3-12 | "Earplugs cost just a few hundred rupees" | Market check (Indian retail listings) | Cost line only | 2026-10-21 | yes | Not a statute; the source text's yuan figure was replaced with a plausible Indian retail price rather than a converted number. |
| 3-13 | 49-hour weekly threshold; British munitions factories, WWI; output at 70 h equals 56 h | doi.org/10.1111/ecoj.12166 (Pencavel 2015) | The Productivity of Working Hours | 2026-10-21 | yes | Historical finding, no Indian labour-law claim made. |
| 3-25 | Cochrane: 80 RCTs, 5,820 women, NSAIDs OR 4.37 (3.76–5.09); 18% placebo vs 45–53% NSAID response | doi.org/10.1002/14651858.CD001751.pub3 | CD001751 | 2026-10-21 | yes | Numbers match; "a box costs a few dollars" is a US-currency framing (note, not blocking). |
| 3-26 | ACP 2016 recommends CBT-I first-line; CBT-I 6–8 sessions; pharmacotherapy not beyond 4 weeks without reassessment | doi.org/10.7326/M15-2175; NICE NG73 | ACP guideline; NICE NG73 | 2026-10-21 | yes | Guideline content correctly summarised. |
| 3-27 | AASM 2017 diagnostic criteria; CPAP for moderate-to-severe OSA; SAVE trial shows no reduction in hard cardiovascular endpoints | doi.org/10.5664/jcsm.6506; doi.org/10.1056/NEJMoa1606598 | AASM guideline; SAVE | 2026-10-21 | yes | Clinically accurate; CPAP "$400–$1,200" is US pricing (note). |

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 03` returned: "PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: not checked; no build was run.

## Safety and editorial check

- No unsupported high-risk claim: 3-18/3-22/3-24 carry their high-risk medical and mental-health claims with the correct hotline and caveats.
- No invented scheme, number or hotline: 14416 is real; the 3-19 deadlines are not Indian and are the blocking item.
- No direct equivalent recorded where needed: no China-only institution is presented as Indian elsewhere in the chapter.
- Caveats retained: all tips keep their evidence-grade and limitation caveats, including the "adjunct, not treatment" framing on 3-18.

## Blocking issues

- **3-19** — The benefit states Chinese public-security procedure as Indian law: "For public-security cases, the investigation period may not exceed 30 days; ... an extension of another 30 days ...; if a complaint is dismissed, the notification must be delivered within three days; the complainant may request a review within seven days, after which police must issue a decision within 30 days. A further appeal ... within another seven days." The caveat attributes these to "Chapter 8, Rule 39", which in this edition is the FIR/BNSS tip 8-39 and contains no such deadlines; the listed sources (mohfw.gov.in, who.int) do not contain them either. No Indian statute imposes a 30+30-day investigation cap or this 3/7/30/7-day complaint ladder. **Correction:** delete the deadline sentence from the benefit (and the "Chapter 8, Rule 39" attribution), or replace it with the BNSS, 2023 route that chapter 8-39 actually describes (FIR under s.173, complaint to the Superintendent of Police under s.175, then the magistrate), with the correct sources.

Verdict: FAIL
