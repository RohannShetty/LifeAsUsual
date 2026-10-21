# Verification: Chapter 29 - After a Major Blow

Verifier: independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/29-after-a-major-blow.json
Manifest status: draft

## Method

I read data/en-in/chapters/29-after-a-major-blow.json tip by tip against the source chapter and the manifest entry. Because the chapter is literature-led, the main instrument was the Crossref API: all 23 DOIs were resolved at https://api.crossref.org/works/<DOI> and accepted only where title, journal and year matched the citation, with numbers re-read from abstracts through Europe PMC where the publisher allowed it. The legal tips were checked against the provisions they cite: the Insurance Act, 1938, the Code on Social Security, 2020 (employment injury) and the Indian Succession Act, 1925. NICE NG116 was read in full at nice.org.uk (HTTP 200). The helplines were checked against the ministry that owns them: the Ministry of Women and Child Development site (wcd.gov.in, HTTP 200) lists "Child Helpline Toll free No. - 1098". Law is assessed as at October 2026: the Code on Social Security, 2020 has been in force since 21 November 2025 and has repealed the ESI Act 1948 and the Employees' Compensation Act 1923, so the chapter is right to cite the Code and not those Acts. Access failures, recorded rather than hidden: pib.gov.in returns HTTP 403; mha.gov.in returns 403 on the ERSS division page; erss.gov.in and 112.gov.in fail with DNS or fetch errors; telemanas.mohfw.gov.in fails with "fetch failed"; elderline.dosje.gov.in fails with DNS; childlineindia.org returns HTTP 503; the Insurance Act text could not be retrieved from this host (India Code 403, Indian Kanoon has no copy), so section 45 is recorded below as not re-read from the statute today.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 29-1 | Call 112 for chest pain; 21-fold rise in heart-attack risk in the first 24 hours; doubled risk in the first month after bereavement | Ministry of Home Affairs, Emergency Response Support System; Mostofsky 2012; Carey 2014 | Crossref metadata | 2026-10-21 | yes | The two studies' DOIs resolve with matching titles and the effect sizes are as cited; 112 is the ERSS number, though the MHA and ERSS pages would not load for this check. |
| 29-2 | Cancer diagnosis: suicide risk peaks in the first week; cardiovascular deaths rise | Fang 2012, N Engl J Med | Crossref metadata | 2026-10-21 | yes | DOI resolves to the Swedish register study; the cohort size and risk ratios are consistent with it. |
| 29-3 | Job loss: 42 studies, over 20 million people, hazard ratio 1.63; register with the state employment exchange and keep health cover | Roelfs 2011 meta-analysis | Crossref metadata | 2026-10-21 | yes | DOI resolves; the chapter refers to the state employment-exchange service, not to the Employment Exchanges (Compulsory Notification of Vacancies) Act, 1959, which the Code on Social Security, 2020 has repealed. |
| 29-4 | Suicide-bereaved people: Danish cohort, incidence rate ratios 1.8 and 1.7 | Danish register studies, Crossref | - | 2026-10-21 | yes | DOIs resolve; figures as cited. |
| 29-5 | Widowhood: 15 studies, 2.26 million people, RR 1.41 in the first six months falling to 1.14 | Moon 2011; Shor 2012 | - | 2026-10-21 | yes | DOIs resolve; pooled estimates as cited. |
| 29-6 | Living alone: 44,573 patients, 19% alone, mortality HR 1.24 (45-65) falling to 0.92 above 80; India has no single statutory visiting scheme; Elderline 14567 run by the Ministry of Social Justice and Empowerment | REACH registry; socialjustice.gov.in; Indian Journal of Psychiatry 2024 | - | 2026-10-21 | yes | Ministry ownership of Elderline confirmed; the number is corroborated in a peer-reviewed Indian guideline (PMID 38445288) because the Elderline portals failed to resolve. |
| 29-7 | Parental death in childhood: 7.3 million cohort, 189,094 bereaved, mortality ratio 1.50 | Crossref | - | 2026-10-21 | yes | DOI resolves; figures as cited. |
| 29-8 | Prolonged grief affects 9.8%; 95 participants in the trial, 51% vs 28% response, number needed to treat 4.3 | Shear 2005, JAMA; Prigerson criteria | abstract | 2026-10-21 | yes | Abstract confirms 83 women and 12 men, i.e. 95 participants. |
| 29-9 | Do not buy grief counselling immediately: 61 studies; five trajectories in 205 bereaved people | Currier 2008; Bonanno 2002 | - | 2026-10-21 | yes | DOIs resolve; the conclusion matches the cited meta-analysis, which found no benefit for universal counselling. |
| 29-10 | Divorce: 32 longitudinal studies, 6.5 million people, 11 countries; keep health cover and avoid alcohol | Crossref | - | 2026-10-21 | yes | DOI resolves; the tip deliberately states no single risk ratio, which is consistent with the heterogeneity reported. |
| 29-11 | Tele-MANAS on 14416 since October 2022 under MoHFW; Childline 1098; District Mental Health Programme | wcd.gov.in; Indian Journal of Psychiatry | - | 2026-10-21 | yes | 1098 confirmed on the WCD ministry site; 14416 corroborated in peer-reviewed Indian Journal of Psychiatry (PMID 39257501, 41924507); the MoHFW portal itself failed to load. |
| 29-12 | Postpone irreversible decisions for three months; the tip itself states there is no single statutory three-month rule | author rule | - | 2026-10-21 | yes | Correctly self-labelled as author-set; the parallel advice that EPF, ESIC and compensation claims should not be delayed is correct. |
| 29-13 | Insurance Act 1938 s.45 three-year bar versus the policy's suicide exclusion; employment injury excludes self-harm; debts fall on the estate; Code on Social Security 2020 | Insurance Act 1938; Code on Social Security 2020 | s.45 | 2026-10-21 | yes | Section 45 is the three-year non-contestability provision and the distinction drawn is correct, but the statute text could not be re-read from this host today (recorded in Method); the Code is correctly cited as current law. |
| 29-14 | PTSD affects 3.9% over a lifetime and about 8% of exposed people; trauma-focused CBT and EMDR effect sizes; NICE NG116 8-12 sessions; Cochrane review of debriefing; work-related PTSD is not a listed occupational disease | NICE NG116; Cochrane CD000560; abstracts | 1.6.16, 1.6.17 | 2026-10-21 | yes | NG116 1.6.17 ("typically ... over 8 to 12 sessions, but more if clinically indicated") verified verbatim; the effect sizes are as cited. |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

Command run: npx tsx scripts/check-chapter.ts 29 - exit 0, "PASS: no banned term, CJK character or foreign-jurisdiction term." (14 tips scanned).

## Safety and editorial check

- No unsupported high-risk claim: the emergency tip 29-1 tells a bereaved reader with chest pain to call 112 rather than wait, which is the safe direction; 29-11 and 29-14 direct readers to clinicians rather than offering treatment. No tip promises that grief will resolve on a timetable.
- No invented scheme, number or hotline: 112, 14416, 1098 and 14567 are real services, and each is attributed to the correct ministry; the two that could not be confirmed on a ministry page this session (14416, 14567) are corroborated in peer-reviewed Indian literature.
- No direct equivalent recorded where needed: 29-6 states that India has no single statutory visiting scheme; 29-12 states that no statute imposes a three-month waiting period; 29-14 states that work-related PTSD is not a listed occupational disease.
- Caveats retained: the tip's own warnings about alcohol, about not dropping health cover, and about the limits of one-off debriefing are all intact and match the source's caution.

## Blocking issues

None. Non-blocking notes:

1. 29-11: Childline 1098 is now delivered under Mission Vatsalya; adding that name is optional and would only help a reader who is told to call 1098 and wants to look it up.
2. 29-1 and 29-6: the MHA/ERSS and Elderline portals were unreachable today (403, DNS, fetch failures). The numbers are correct, but if the build later adds a "where this came from" link, point it at a page that resolves.
3. 29-13: the Insurance Act, 1938 text was not retrievable from this host; the section number and its effect are as the chapter states, but a future run should confirm section 45 against India Code if access improves.

Verdict: PASS
