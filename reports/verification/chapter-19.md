# Verification: Chapter 19 - Employment & Work Injury

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/19-employment-and-work-injury.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

Re-verification of the **current** 24-tip file, not the older draft that produced the earlier FAIL. I read the chapter JSON and reports/source-packs/chapter-19.md, then checked each statutory claim against the text of the four labour codes, the Income Tax Act, 1961 and the Contract Act, 1872. indiacode.nic.in, labour.gov.in, meity.gov.in and mha.gov.in all returned HTTP 403 to the fetch tool on 2026-10-21; the Codes were therefore read from a bare-act mirror and cross-checked against the source pack, and every access failure is recorded below rather than hidden. DOI citations were checked against the Crossref API (api.crossref.org, HTTP 200). hukou/RMB/dibao material from the source edition is absent and the earlier substantive errors (9-hour day, 6-day leave, 2N, N+1, 48-hour injury rule, 50-worker threshold for contract labour) are fixed. What remains is citation-level.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 19-1 | Four Codes commenced 21 Nov 2025; OSH Code sets an 8-hour day and a 48-hour week; Wages Code s.14 pays overtime at twice the rate | OSH Code 2020; Code on Wages 2019; labour.gov.in | s.25(1)(a); s.14 | 2026-10-21 | yes | s.25(1)(a) reads "not more than eight hours in a day". The 48-hour week is not visible in the s.25 text I could read and is attributed to s.25 by two secondary sources, so the section cite is imprecise, not wrong. labour.gov.in returned 403. |
| 19-2 | OSH s.32: one day of leave per 20 days worked; 180-day threshold yields 9 days; encashment on demand | OSH Code 2020 | s.32(1)(i), (ii), (viii) | 2026-10-21 | yes | 180 days, one day per 20 days and encashment on demand all confirmed. 180/20 = 9; arithmetic correct. |
| 19-3 | No national probation ladder; probation is contractual, read with the IR Code and state Shops Acts | IR Code 2020; state Shops and Establishments Acts | - | 2026-10-21 | yes | No general statutory probation limit by contract length found. Correct as written. |
| 19-4 | ID Act repealed; IR Code s.70(b) gives 15 days average pay per completed year; gratuity vests after 5 years under SS Code s.53 | IR Code 2020; SS Code 2020 | s.70(b); s.53(1) | 2026-10-21 | yes | s.70(b) and s.53(1) confirmed, including the 3-year journalist carve-out and the death/disablement waiver. |
| 19-5 | No universal N+1; notice comes from the contract or standing orders; retrenchment needs one month notice or pay in lieu | IR Code 2020 | s.70(a) | 2026-10-21 | yes | Correct. |
| 19-6 | No fixed 2N; a workman can raise an industrial dispute; NALSA legal aid | IR Code 2020; NALSA | - | 2026-10-21 | yes | nalsa.gov.in reachable (HTTP 200). Claim correct. |
| 19-7 | Gratuity and EPF survive resignation; gratuity needs five years | SS Code 2020; EPFO | s.53 | 2026-10-21 | yes | Correct; EPFO site reachable. |
| 19-8 | Save appointment letter, pay slips, attendance, PF and ESIC records before leaving | EPFO; ESIC | - | 2026-10-21 | yes | Practical record-keeping advice, no legal entitlement asserted. |
| 19-9 | OSH Code requires hazard identification, protective equipment and medical examinations | OSH Code 2020 | - | 2026-10-21 | yes | Correct in outline. |
| 19-10 | Silicosis, noise-induced hearing loss and chemical injury can be permanent; employer must provide effective protection and reporting | OSH Code 2020; ESIC | - | 2026-10-21 | yes | Correct. |
| 19-11 | Report a workplace injury at once; ESIC or SS Code Ch VII; EC Act repealed; commuting injury is not covered | SS Code 2020 Ch VII; ESIC | Ch VII | 2026-10-21 | yes | Employee Compensation Act 1923 repealed; the commute exclusion is retained. Correct. |
| 19-12 | Call 112 first for chest pain or stroke signs; there is no 48-hour waiting rule for compensation | MHA ERSS; ESIC | - | 2026-10-21 | yes | The "no 48-hour rule" statement is correct. 112 could not be confirmed at source (mha.gov.in 403, 112.gov.in unreachable); the number is uncontroversial. |
| 19-13 | An uninsured employer remains liable; OSH Ch IX penalties | SS Code 2020 Ch VII; OSH Code Ch IX | - | 2026-10-21 | yes | Correct. |
| 19-14 | Disability assessment follows ESIC and the SS Code schedules, which fix percentages | ESIC; SS Code 2020 schedules | - | 2026-10-21 | yes | Schedules II and III fix the percentages; correct in outline. |
| 19-15 | Work-related death benefits flow from ESIC and the SS Code | ESIC; SS Code 2020 | - | 2026-10-21 | yes | Correct. |
| 19-16 | POSH Act internal committee; general bullying is not covered by POSH; cites Xu T et al. (2019) on bullying and cardiovascular disease | POSH Act 2013; Crossref for 10.2105/AJPH.2015.302855 | - | 2026-10-21 | no | BLOCKING. The DOI resolves to Nielsen et al. (2015), "Workplace Bullying and Suicidal Ideation: A 3-Wave Longitudinal Norwegian Study", AJPH - not "Xu T et al. (2019), Workplace bullying and cardiovascular disease". Author, year, title and outcome all belong to a different paper. The legal half of the tip (POSH covers sexual harassment only) is correct. |
| 19-17 | No statutory 15-day relieving-letter right; contract or standing orders may require one | state Shops Acts; contract | - | 2026-10-21 | yes | Correct: India has no general statutory service-certificate deadline. |
| 19-18 | No three-times-average-wage exemption; retrenchment compensation has a limited exemption under s.10(10B) | Income Tax Act 1961 | s.10(10B) | 2026-10-21 | yes | Correct. incometax.gov.in reachable. |
| 19-19 | EPF follows the UAN; transfer rather than withdraw; ESIC linked to the insured person | EPFO; ESIC | - | 2026-10-21 | yes | Correct. |
| 19-20 | India has no double-wage penalty for a missing written contract; a written appointment letter is still essential | Contract Act 1872; IR Code 2020; cites Industrial Employment (Standing Orders) Act, 1946 | - | 2026-10-21 | no | BLOCKING (citation). The substance is correct, but the 1946 Standing Orders Act was repealed when the IR Code commenced on 21 November 2025 and must not be listed as current authority. |
| 19-21 | If EPF or ESIC contributions are missing, complain to EPFO or ESIC and keep wage records; cites "the ESIC Act" | SS Code 2020; EPFO; ESIC | s.164 (repeals) | 2026-10-21 | no | BLOCKING (citation). The Employees' State Insurance Act, 1948 is repealed by the SS Code; ESIC now administers the Code. The remedy described is right, the authority cited is stale. |
| 19-22 | s.74 Contract Act: a court may award reasonable compensation for breach, not the full penalty | Contract Act 1872 | s.74 | 2026-10-21 | yes | Correct. |
| 19-23 | Object in writing to a unilateral demotion or salary cut; it can be a breach of contract or standing orders | Contract Act; IR Code | - | 2026-10-21 | yes | Correct and appropriately hedged. |
| 19-24 | Contract Labour Act repealed; OSH Code s.45 applies at 50 or more contract workers; principal employer duties | OSH Code 2020 | s.45(1) | 2026-10-21 | yes | s.45(1) confirms "fifty or more contract labour". The earlier 50-worker confusion is resolved. |

## Banned-term check

- JSON: 0 banned terms. grep over data/en-in/chapters/19-employment-and-work-injury.json for China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao, CNY returned 0. No China-specific vocabulary and no rupee-converted figures (0 "₹", 0 "¥").
- Rendered page: not rebuilt in this pass. The chapter JSON is the content source; the site build was not run, so this row records JSON only.

## Safety and editorial check

- No unsupported high-risk claim: substance is now aligned with the four Codes. The remaining defects are citation-level (19-16, 19-20, 19-21).
- No invented scheme, number or hotline: 112 is the correct national ERSS number, NALSA and EPFO/ESIC are real. No invented scheme found.
- No direct equivalent recorded where needed: this chapter no longer carries source-edition (China) entitlements.
- Caveats retained: the chapter keeps its "state Shops Acts vary" and "contract governs" hedges.

## Blocking issues

- 19-16 - the cited DOI (10.2105/AJPH.2015.302855) is Nielsen et al. 2015 on bullying and suicidal ideation, not "Xu T et al. (2019) Workplace bullying and cardiovascular disease". Replace with the correct DOI or drop the sentence.
- 19-20 - "Industrial Employment (Standing Orders) Act, 1946" is cited as current authority; it was repealed by the IR Code, 2020 (in force 21 November 2025).
- 19-21 - "the ESIC Act" is cited as current authority; the ESIC Act, 1948 is repealed by the SS Code, 2020.

Prior-report issues now closed: the 9-hour day, the leave arithmetic, the 2N and N+1 claims, the 48-hour reporting rule, the commute-injury claim, 108 as the emergency number, the wcd.nic.in citation and the 50-worker contract-labour threshold.

Verdict: FAIL
