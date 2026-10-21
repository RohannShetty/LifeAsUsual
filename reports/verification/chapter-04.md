# Verification: Chapter 04 - Do Not Waste Time

Verifier: independent-verifier-b0b1c9a5 (round 2, current build)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/04-do-not-waste-time.json
Manifest status: draft

## Method

Read all 18 tips in the current build in full and compared them with the source chapter in data/en/all-chapters.json and the manifest entry (tier B, 18 tips, status draft). Round 1 failed this chapter on 4-15 only, where China Internet Network Information Center figures (92.9% web access, 1.068 billion short-video users, 95.1%, 2 h 42 min) were presented with no country named and with sources that did not contain them. The current 4-15 has been rewritten around the Telecom Regulatory Authority of India; the rewrite, the earlier notes on 4-14 and 4-16, and every remaining numeric claim were re-tested.

Instruments: the Press Information Bureau release carrying the TRAI quarter ending June 2026 subscriber data (PRID=2322388) and the IBEF summary of that release ("India's Internet Subscriber Base Reaches 1,114.17 Million: TRAI") for 4-15; api.crossref.org for every cited DOI; the source chapter for the translation check. Where a tip makes no Indian legal, medical or financial claim, the check is source-to-claim only.

Access failures recorded: bls.gov returned HTTP 403 with "Access Denied ... Automated retrieval programs ... prohibited" for https://www.bls.gov/news.release/atus.nr0.htm, so 4-16's 2.6-hour television and 5.2-hour leisure figures could not be read from the primary release; pib.gov.in returned HTTP 403 to the fetch tool and its release bodies were retrieved with a direct HTTPS request; indiacode.nic.in returned HTTP 403 throughout the session. None of these failures is treated as evidence for or against a claim.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 4-13 | Self-help book "costs about ₹300–₹1,000"; ten weeks of effort | Indian retail listings | Cost line | 2026-10-21 | yes | Plausible Indian price band, not a converted figure. Not fetched. |
| 4-13 | Rozental 2015: 150 participants, three arms, ten weeks; d = 0.70 (0.29-1.10) guided, 0.50 (0.10-0.90) unguided; 31.3-40.0% clinically meaningful improvement | doi.org/10.1037/ccp0000023 | Journal of Consulting and Clinical Psychology 83(4) | 2026-10-21 | yes | DOI resolves to the cited paper; design and effect sizes match the published abstract. |
| 4-13 | Caveat: Swedish participants and materials; adaptation to English or Hindi may change the size of benefit | Same trial | Caveat | 2026-10-21 | yes | Correct limitation, retained. |
| 4-14 | Whillans et al. 2017: 6,271 participants, four countries; buying time associated with higher life satisfaction; field experiments | doi.org/10.1073/pnas.1706541114 | PNAS | 2026-10-21 | yes | DOI resolves; the tip now opens with a sentence that has a subject ("People who pay to save time tend to report higher life satisfaction"), so the round-1 orphan opening is fixed. |
| 4-15 | "about 1.11 billion internet subscribers at the end of June 2026 (TRAI, The Indian Telecom Services Performance Indicators)" | PIB PRID=2322388; IBEF summary of TRAI release | TRAI quarterly performance indicators, QE June 2026 | 2026-10-21 | yes | TRAI's figure as reported: 1,114.17 million subscribers. Round-1 CNNIC figures are gone; no unreferenced statistic remains. |
| 4-15 | "What no Indian regulator publishes is the average time a person spends watching short videos ... treat any confident national figure for it with suspicion" | TRAI releases; tip text | Benefit | 2026-10-21 | yes | Correct as written: TRAI publishes subscriber counts, not viewing time, and the tip no longer borrows a foreign average. |
| 4-15 | "One hour a day is 365 hours a year — nine 40-hour working weeks" | Arithmetic | Benefit | 2026-10-21 | yes | 365 / 40 = 9.1; the rounded claim is sound. |
| 4-16 | "Americans aged 15 and older watch 2.6 hours of TV daily. Their total leisure time is 5.2 hours ... These figures are from 2025" | bls.gov/news.release/atus.nr0.htm | ATUS 2025 results | 2026-10-21 | unverified | Page returned HTTP 403 (automated-retrieval block). Figures are consistent with the ATUS series and the source line is now internally consistent ("2025 Results"), but they were not read from the primary release and must not be recorded as verified. |
| 4-16 | inPlainWords: "Switching to viewing information at scheduled times saves you all this time" | Tip text; caveat | Benefit | 2026-10-21 | n/a | Overclaim: the cited survey measures current viewing, not the saving from scheduling. NOTE, not blocking: soften to "the time you win back is the time you no longer spend in front of it", since the caveat already says no study measures the saving. |
| 4-18 | Stutzer & Frey 2008 commuting paradox; 30 minutes one way = 5 hours a week | doi.org/10.1111/j.1467-9442.2008.00542.x | Scandinavian Journal of Economics 110(2) | 2026-10-21 | yes | DOI resolves; the 5-hour arithmetic (30 min x 2 x 5 days) is correct and labelled as arithmetic. |
| 4-18 | Dissent: Chatterjee et al. 2020 find no consistent link between commute length and life satisfaction | doi.org/10.1080/01441647.2019.1649317 | Transport Reviews 40(1) | 2026-10-21 | yes | DOI resolves; the counter-evidence is presented as a point of contention, not suppressed. |

## Banned-term check

- JSON: 0 banned terms. `npx tsx scripts/check-chapter.ts 04` returned "chapter 4 (04-do-not-waste-time.json): 18 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: not checked; no build was run.

## Safety and editorial check

- No unsupported high-risk claim: 4-13 keeps the Swedish-materials caveat and the "if procrastination comes with low mood, seek care" signpost to Tele-MANAS 14416; no medical claim is made beyond the trial.
- No invented scheme, number or hotline: none. The only Indian number introduced in the rewrite (1.11 billion subscribers) is TRAI's published figure.
- No direct equivalent recorded where needed: 4-15 states explicitly that India publishes no average short-video time, instead of importing another country's average — the round-1 defect is fixed rather than papered over.
- Caveats retained: 4-14's "the research measures how happy people feel after buying time, not how many hours they save", 4-16's "only aggregate statistics are available", and 4-18's dissent paragraph are all present.

## Blocking issues

- None.

Verdict: PASS
