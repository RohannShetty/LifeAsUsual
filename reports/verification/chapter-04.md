# Verification: Chapter 04 - Do Not Waste Time

Verifier: independent-verifier-323be2580fd6
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/04-do-not-waste-time.json
Manifest status: draft (recommend checked)

## Method

Read all 18 tips in full (id, title, cost, inPlainWords, benefit, sources, caveats, tags, evidenceGrade) and checked each numeric claim against its cited study. The earlier report (reports/verification/chapter-04.md) recorded PASS with no blocking items, so there was no regression case to re-test; the chapter was re-checked against the high-risk tip in reports/india-rewrite-worklist.csv (4-13) and every tip that cites a rupee amount, a helpline or a population statistic (4-13, 4-14, 4-15, 4-16).

Instruments and sources consulted: Rozental et al. 2015 (Journal of Consulting and Clinical Psychology) for 4-13; Whillans et al. 2017 PNAS for 4-14; the U.S. Bureau of Labor Statistics American Time Use Survey 2025 release for 4-16; and, for the China figures that 4-15 relies on, the CNNIC statistical reports. Because the chapter makes no Indian legal or medical claim, no statute or Indian scheme was at issue; the check is a source-to-claim check.

Access failures recorded: indiacode.nic.in returned HTTP 403 (Akamai); legislative.gov.in PDFs returned HTTP 403; telemanas.mohfw.gov.in failed DNS/fetch; rbidocs.rbi.org.in PDFs returned an Akamai bot challenge. These did not affect this chapter, which cites no Indian instrument, but they are logged because the same session checked chapters 3 and 5.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 4-13 | Rozental 2015: 150 participants, three arms, 10 weeks; guided d = 0.70 (0.29–1.10), unguided d = 0.50 (0.10–0.90); clinically meaningful improvement 31.3–40.0% guided | doi.org/10.1037/ccp0000037 | Internet-based CBT for procrastination RCT | 2026-10-21 | yes | Sample, design and effect sizes match the published trial. |
| 4-13 | "A self-help book costs about ₹300–₹1,000" | Indian retail listings | Cost line | 2026-10-21 | yes | Plausible Indian price range; not a converted yuan figure. |
| 4-13 | Caveat: trial used Swedish-language materials, so effect size may differ in English or Hindi | Same trial | Caveat | 2026-10-21 | yes | Correct limitation, usefully retained. |
| 4-14 | Whillans 2017: 6,271 participants in four countries; buying time associated with higher life satisfaction; field experiments replicate | doi.org/10.1073/pnas.1706541114 | PNAS | 2026-10-21 | yes | Sample and finding match. |
| 4-14 | inPlainWords opens: "Among those who actually do them, the average time spent is 1 hour and 59 minutes." | Tip text only | Opening sentence | 2026-10-21 | n/a | Orphan statistic with no antecedent anywhere in the tip (leftover from an earlier draft). NOTE, not blocking: delete the sentence or restore its subject. |
| 4-15 | "People who accessed the web on any given day make up 92.9% of the population. These figures are from 2024... There are 1.068 billion short-video users, accounting for 95.1% of all internet users. In 2018, the average was only 2 hours and 42 minutes." | CNNIC 55th/54th Statistical Reports on Internet Development in China; cited sources in the JSON are mohfw.gov.in and who.int | No section of either cited source contains these figures | 2026-10-21 | **no** | These are China Internet Network Information Center statistics (92.9% internet penetration; 1.068 billion short-video users; 95.1% of netizens; 2 h 42 min average daily online time). The tip never names China, and India's own figures are very different (TRAI: ~950 million internet subscribers). Population undefined and sources wrong. BLOCKING. |
| 4-16 | Americans 15+ watch 2.6 h TV daily out of 5.2 h leisure | bls.gov/news.release/atus.nr0.htm | ATUS 2025 | 2026-10-21 | yes | Figures consistent with the 2025 release; country and population are named, unlike 4-15. |
| 4-16 | "These figures are from 2025. These numbers date back to 2018." | Tip text only | Benefit | 2026-10-21 | n/a | Self-contradiction left in the text (the source is ATUS 2025). NOTE, not blocking: delete the second sentence. |

Spot-checked (no Indian statute, scheme, helpline or rupee threshold; all cited to peer-reviewed papers, figures internally consistent): 4-1 Gollwitzer & Sheeran 94 studies, d = 0.65; 4-3 Arkes & Blumer 1985 ticket prices $15/$13/$8 giving 4.11/3.32/3.29; 4-5 Leach 2015 (958 participants; 292 completed the diary task) and Bluedorn standing 34% longer; 4-11 Halpern 2015 NEJM 2,538 smokers, $150 deposit, $800 reward, 13.2-point difference; 4-12 Lally 2010 (96 volunteers, 82 analysed, 18–254 days); 4-17 Lane 2005 (251 Word users, 6-participant efficiency study); 4-18 Stutzer & Frey commuting paradox with the 30-minutes-one-way = 5 h/week arithmetic.

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 04` returned: "PASS: no banned term, CJK character or foreign-jurisdiction term." The CNNIC origin of 4-15 is not itself a banned term, which is why the term check passes while the tip still fails the source rule.
- Rendered page: not checked; no build was run.

## Safety and editorial check

- No unsupported high-risk claim: 4-13 retains its caveat that the trial used Swedish materials.
- No invented scheme, number or hotline: none; 4-15's numbers are real but Chinese and unattributed, which is a sourcing failure rather than invention.
- No direct equivalent recorded where needed: 4-15 should either say "in China" or be replaced with Indian data; as written it implies the figures are universal or Indian.
- Caveats retained: all tips keep their limitations, including 4-16's "only aggregate statistics are available".

## Blocking issues

- **4-15** — The benefit presents China Internet Network Information Center statistics as unexplained, unattributed figures: "People who accessed the web on any given day make up 92.9% of the population ... There are 1.068 billion short-video users, accounting for 95.1% of all internet users ... In 2018, the average was only 2 hours and 42 minutes." The population is undefined, the country is never named, and the listed sources (mohfw.gov.in, who.int) do not carry these numbers. **Correction:** state that the figures are China's (CNNIC, year), or replace the benefit with Indian data (TRAI subscriber reports / IAMAI-Kantar Internet in India), and cite the source actually used.

Verdict: FAIL
