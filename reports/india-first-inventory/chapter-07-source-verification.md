# Chapter 7 source verification (19–22 November 2026)

Audit of tips 7-7, 7-8, 7-9 and 7-13 in `data/en-in/chapters/07-living-with-no-money.json` against official Indian sources. This record separates what was read in a primary source from what could not be verified. It is not a reviewer approval: all four tips remain AI-checked drafts and the dispositions below are proposals.

## Verified and corrected

| Tip | Claim before | Finding | Source read |
| --- | --- | --- | --- |
| 7-13 | "NAPS reimburses 25 per cent of the prescribed stipend ... to the employer" | Wrong direction of payment. The stipend support is credited to the apprentice through the National Apprenticeship Portal; the government share is 25 per cent of the stipend, capped at Rs 1,500 per month per apprentice. Text now says pays the apprentice directly. | PIB Release 2294856, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2294856 |
| 7-13 | "PM-DAKSH pays for training of SC, ST, OBC, EWS, women and transgender candidates" | Current official description lists Scheduled Castes, Other Backward Classes, Economically Weaker Sections, De-notified Tribes and Safai Karamcharis (including waste pickers). ST, women and transgender were removed from the sentence. | PIB Release 2223175, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2223175 |
| 7-8 | "No fee for the UDID card application in most states" | The UDID scheme states fees NIL and delivery free of cost by speed post, nationally. Sentence now says the application is free and the card is posted at no cost. | Department of Empowerment of Persons with Disabilities, https://depwd.gov.in/en/udid-scheme |
| 7-7 | "at a price fixed by the Centre" | Current PIB description states the grain is presently free of cost. Sentence now says the Centre sets the price and it is presently free of cost. | PIB Release 2179514, https://www.pib.gov.in/PressReleasePage.aspx?PRID=2179514 |

NFSA quantities in 7-7 were checked and match the same PIB release: 5 kg per person per month for priority households, 35 kg per household per month for Antyodaya households, coverage capped at 75 per cent rural and 50 per cent urban. ONORC portability is described in PIB Release 2335306.

## Checked, but left unchanged

- 7-7: section 3 and section 4 references, the food-security allowance, ration-card fees and the sentence that Antyodaya status "unlocks" school meals had no readable primary passage in this audit. They are plausible but unverified, and remain HOLD review items rather than corrections.
- 7-8: IGNDPS age band 18-79, severe or multiple disability, BPL requirement and central rate of Rs 300 per month (Rs 500 at 80+) were confirmed against PIB Release 2187327; ADIP caps (Rs 15,000 for aids every three years, Rs 30,000 for prostheses, Rs 50,000 for a motorised tricycle) were confirmed. State top-ups and caregiver allowances are described only as varying by state, which the sources do not contradict.
- 7-9: PM-JAY cover of Rs 5 lakh per family per year was confirmed against PIB Release 2296131 and the Ayushman Vay Vandana track for people aged 70 and above against PIB Release 2082288. ESIC contribution rates of 0.75 per cent employee and 3.25 per cent employer with effect from 1 July 2019 were confirmed at https://esic.gov.in/contribution. The claims that PM-JAY is cashless, covers pre-existing conditions from day one, and issues cards after eKYC were left as written because no contradicting passage was found, not because a passage was read.
- 7-13: Jan Shikshan Sansthan age range 15-45 is confirmed by PIB Release 2241731 and ITI coverage by PIB Release 2294861. "Free including assessment" for PMKVY and "verifiable certificates" on Skill India Digital were not confirmed by a readable passage and remain open review items.

## Sources that could not be read

India Code returned "Access Denied" (Akamai), and these could not be retrieved or rendered: the Department of Food and Public Distribution FAQ, the National Health Authority PM-JAY pages, swavlambancard.gov.in, MSDE pages, skillindiadigital.gov.in (404), apprenticeshipindia.gov.in (single-page app shell), nsap.nic.in (DNS failure) and pmdaksh.dosje.gov.in (timeout). Unreadable is not the same as wrong: items that depend only on these sources stay unverified and are listed for HOLD, not deleted.

## Review status

At the time of this 19 November pass, all four tips still carried the now-retired `independently-checked` label and evidence grade A, even though several claims rested on domain-root links. PR #63, merged on 20 November 2026, replaced that label with `source-checked` across all 765 inherited tips; it did not change source text, evidence grades, dates, caveats or the underlying review work. The current Chapter 7 file records these tips as `source-checked`. This means an AI/delegated source-check pass, not independent verification, named human review or professional sign-off. The 7-13 and 7-8 corrections show why: a link existing is not the same as the link supporting the sentence. Dispositions recorded: 7-7, 7-8 and 7-13 `PROPOSED_REWRITE`; 7-9 left unchanged pending a readable PM-JAY source.

## Second pass: tips 7-2, 7-3, 7-5 and 7-6 (19 November 2026)

This pass checked the procedural safety-net tips. It removed guarantees that no readable official page supports and kept the verified route structure.

| Tip | Verified | Changed | Left as unverified |
| --- | --- | --- | --- |
| 7-2 | CLC(Central) functions and central-sphere jurisdiction (clc.gov.in); four labour codes commenced 21 November 2025 and SAMADHAN accepts labour-code filings (PIB 2192463, samadhan.labour.gov.in) | Title no longer claims "neither charges a court fee"; cost section says the first stage is conciliation, not a court trial, and that a lawyer is optional but advisable; "three free doors" became "three routes"; removed the savings-for-pending-cases phrase and the decree-enforceability claim | Repeal savings clause, documents checklist, "1-3 visits", claims-authority section numbers, labour-court fee waiver |
| 7-3 | Section 12 categories including industrial workmen and persons in custody; 15100 helpline; DLSA location; Lok Adalat award final with no appeal and no court fee (nalsa.gov.in/legal-aid, /lok-adalats) | Removed the ration-card sentence; court-fee exemption replaced with process fees and drafting, which NALSA actually lists; removed the unverified prison/juvenile/shelter clinic sentence; stopped attributing Lok Adalats to a section number | Section 19 attribution, prison clinics, "many wage disputes" characterisation |
| 7-5 | NCS is the central job-matching platform with job fairs and counselling (PIB 1883671); e-Shram gives a Universal Account Number (PIB 2303053) | Title and prose dropped "free"; "employers are checked before posting" replaced with the published blacklist; exchange certificates softened to "some recruitments ask, check the vacancy notice"; removed the unsupported placement-fee rule | Free registration, pre-posting vetting, registration certificates, agency fee of a month's salary |
| 7-6 | SDRF constituted under section 48(1)(a) for notified disasters and immediate relief; NDRF under section 46; NFBS pays Rs 20,000 to a BPL household on the death of a primary earner aged 18-59 (ndmindia.mha.gov.in/ndmi/response-fund, PIB 2187327) | Title and opening qualified as "no universal" grant; NFBS sentence now states the 18-59 age band, BPL condition and Rs 20,000; SDRF sentence reframed as immediate relief after a notified disaster | CMRF legal basis and discretion, collector's sanctioning power, PM-JAY cross-claim, "slow and discretionary" characterisation |

### Sources that could not be read in this pass

India Code (Akamai "Access Denied", then an Angular single-page app whose Act PDFs are viewer wrappers), labour.gov.in labour-codes page (Next.js shell with no text) and its PDFs (Access Denied), doj.gov.in (empty body), ncs.gov.in and its FAQ (Angular shell), eshram.gov.in (language gate), and nsap.nic.in (DNS failure). The SDRF norms table sits in an MHA PDF behind a viewer and was not extractable. Unreadable does not mean wrong: those claims were softened or left unverified instead of being deleted.

### Review status

At the time of this pass, the four tips still carried the now-retired `independently-checked` label and grades A or B. PR #63 subsequently migrated the corpus to `source-checked` without changing the review substance. This pass found claims in each tip that no readable source supported; the current label must not be read as passage-level verification by a named reviewer. Dispositions recorded as PROPOSED_REWRITE for all four.

## Third pass, 20 November 2026 — tips 7-10, 7-11, 7-14 to 7-23

Read-only audit of the remaining chapter-7 tips against official Indian sources. Six tips had their core claims verified with readable passages (7-10, 7-14, 7-17, 7-20, 7-22, 7-23), three partially (7-15, 7-16, 7-18), one is mostly unreadable (7-11), and two carried stale or overbroad statements that were corrected in this pass (7-19, 7-21).

### Corrections applied

| Tip | What it said | Evidence | What it says now |
| --- | --- | --- | --- |
| 7-19 | "India has no individual bankruptcy law in force"; the individual insolvency chapter "has never been brought into force" | IBBI: Part III of the IBC was notified for personal guarantors to corporate debtors from 1 December 2019 | no general personal-bankruptcy route for ordinary individuals; Part III is partly in force for personal guarantors only; the fresh-start framework is not operational |
| 7-21 | rain basera "run under the urban shelter programme" | PIB 2220349: "The implementation period of DAY-NULM ended on 30.09.2024"; 1,995 shelters, about 1.41 lakh beds built | shelters were built under DAY-NULM, whose implementation period ended on 30 September 2024, and are now run by urban local bodies, states or NGOs; no live central shelter mission is implied |
| 7-20 | "pre-existing waiting period capped at 36 months"; "offer health cover to all ages" | IRDAI master circular 29 May 2024: moratorium is 60 months and claims are not contestable after it except for established fraud; the circular does not state a 36-month cap, and requires products catering to all ages rather than guaranteed acceptance | cap no longer asserted (the policy is the source); moratorium stated as 60 months; "products catering to all ages" |
| 7-11 | "no temporary Aadhaar", "no 60-day rule", email "legally equivalent" to the card | UIDAI page lists e-Aadhaar download and describes it as a password-protected, digitally signed copy; the UIDAI FAQ, ECI and Parivahan pages could not be loaded | asserts only what UIDAI states, and records in the caveat that the PAN, e-EPIC and duplicate-licence steps are unverified |

### Verified in this pass

| Tip | Claim | Source |
| --- | --- | --- |
| 7-10 | PM-JAY Rs 5 lakh per household, cashless; pre-existing conditions from day one; 3 days pre- and 15 days post-hospitalisation | PIB 2185049; PIB NoteId 153181 |
| 7-10 | ESIC sickness benefit up to 91 days a year; employment injury moved to Code chapter VII; codes in force 21.11.2025 | esic.gov.in; Social Security Code 2020; PIB 2223852 |
| 7-14 | job-search coaching meta-analysis, 47 studies, OR 2.67 (95% CI 2.06-3.47) | Liu, Huang & Wang (2014), Psychological Bulletin 140(4):1009-41, DOI 10.1037/a0035923 |
| 7-15 | overseas recruitment agents registered, charges capped at 45 days' wages up to Rs 20,000; unregulated deposit schemes banned | mea.gov.in/ras; BUDS Act 2019 s.3 |
| 7-17 | food share of household spending 46% rural, 39% urban (HCES 2022-23) | PIB 2026672 |
| 7-18 | EPS needs 10 years of eligible service for pension, otherwise withdrawal benefit | epfo.gov.in pension scheme page |
| 7-19 | RBI Integrated Ombudsman Scheme 2021 | RBI notification 12192 |
| 7-20 | lifetime renewability; 60-month moratorium not contestable except established fraud | IRDAI health insurance FAQ; IRDAI master circular, 29 May 2024 |
| 7-21 | One Stop Centre services and 181 helpline | PIB factsheet 149109 |
| 7-22 | OSH Code s.45(1) 50-worker threshold, s.53 principal-employer welfare, s.55(3) wage liability | OSH Code 2020 gazette PDF |
| 7-23 | recovery calls only 8 a.m. to 7 p.m.; KFS and cooling-off for digital loans | RBI 12 August 2022 recovery circular; RBI digital lending master direction |

### Left unverified, and why

- 7-10 Rashtriya Arogya Nidhi and CM Relief Fund: the MoHFW page is a JavaScript shell; no readable passage.
- 7-11 PAN reprint, e-EPIC, duplicate licence, police lost-document report: UIDAI FAQ is blocked by a web application firewall; ECI and Parivahan are script-only.
- 7-14 free NCS counselling; 7-15 Prize Chits Act, Code on Wages deductions, Usurious Loans Act, state moneylending Acts; 7-16 DDA/MHADA lotteries and "applying is free"; 7-17 Amma/Indira canteens; 7-18 EPF interest and ESIC cessation; 7-19 JJ Act s.24, CICRA, Lok Adalat debt relief; 7-20 Arogya Sanjeevani and Insurance Act s.45; 7-22 BOCW, Shops Act, domestic-work exclusion.
- 7-18 EPS paragraph is verified but the EDLI and EPF interest claims are not.

Everything above is an automated pass with recorded sources. No tip in this chapter has a named human reviewer, and none of these edits constitutes legal, financial or medical review.

## Fourth pass: EPF and EPS rules after the 2026 schemes (22 November 2026)

This pass rechecked tips 7-1 and 7-12 after the 19 November 2026 EPFO Board announcement. It separates EPF full settlement, EPF partial withdrawal and EPS pension/withdrawal benefit. This is an AI/delegated source pass, not legal or financial advice, a named human review, or professional sign-off.

### Findings from the notified schemes

| Tip | Claim checked | Text read | Correction |
| --- | --- | --- | --- |
| 7-1, 7-12 | Ordinary full EPF settlement | Employees' Provident Funds Scheme, 2026, G.S.R. 525(E), paragraph 49(2): full amount in cases not covered by paragraph 49(1) may be withdrawn after the member has not been employed in a covered establishment for a continuous period of at least 12 months immediately before applying. | Retained the ordinary 12-month rule; removed wording that treated the period as a universal two-month wait. |
| 7-1, 7-12 | Statutory two-month cases | Paragraph 49(1)(vi) separately requires at least two continuous months immediately before application for specified cases: a closed establishment transferring non-retrenched employees to a non-covered establishment; transfer to a non-covered establishment under the same employer; and discharge with retrenchment compensation under the Industrial Relations Code. Paragraph 49(1)(iv) separately lists mass or individual retrenchment, and paragraph 49(1)(v) voluntary retirement under a mutual scheme. | Explicitly distinguished the narrow two-month cases from ordinary exit under paragraph 49(2). |
| 7-1, 7-12 | EPF partial withdrawals | Paragraph 46: the Minimum Balance is 25% of aggregate employee and employer contributions plus interest, and must remain after a partial withdrawal. Eligible Member Balance is the account balance after deducting that Minimum Balance. Paragraphs 46(2)–(4) permit up to 100% of Eligible Member Balance for listed illness, education, marriage, housing and special-circumstance purposes, with eligibility and frequency limits. Most listed purposes require 12 months' total membership; paragraph 46(5) separately covers a member exiting before 12 months. | Replaced the inaccurate “75% of the eligible balance at any time” claim with the correct distinction: up to 100% of Eligible Member Balance for permitted purposes, after retaining the 25% Minimum Balance. |
| 7-1 | EPS monthly pension and withdrawal benefit | Employees' Pension Scheme, 2026, G.S.R. 527(E), paragraph 12(1): ten years of eligible service for monthly superannuation or early pension. Paragraph 13: before meeting that threshold, a member may take a withdrawal benefit or choose a scheme certificate where eligible; for exits before superannuation, withdrawal benefit is available only after 36 months from the date the last contribution became due or on reaching superannuation age, whichever is earlier. | Added the scheme-certificate option and the 36-month EPS withdrawal-benefit condition; kept it separate from EPF's 12-month full-settlement rule. |
| 7-1, 7-12 | 19 November 2026 Board approval | PIB Release ID 2338667, posted 19 November 2026, reports CBT approval to reduce the minimum balance from 25% to 10% and the ordinary final-withdrawal wait from 12 months to two months. Section 15(1)(e) of the Code on Social Security, 2020 says the Central Government may modify a scheme by notification. The PIB release records Board approval but does not identify an amending notification number or commencement date. The Scheme text read in this pass still states 25% and 12 months. | Kept the Board decision as an announcement only; readers are told not to rely on the proposed change until the amended rule and commencement are confirmed. |

### Source copies and access limitations

- EPF Scheme: G.S.R. 525(E), dated 29 June 2026, Gazette ID CG-DL-E-01072026-273957; paragraphs 46 and 49 appear on PDF pages 86–90. The e-Gazette host did not load in this retrieval environment. The text was read from a third-party PDF mirror that displays the Gazette heading, notification number and text: https://www.staffnews.in/wp-content/uploads/2026/07/Employees-Provident-Funds-Scheme-2026-273957.pdf. The 4 August 2026 corrigendum G.S.R. 703(E) was also checked; its listed corrections concern earlier pages, not paragraphs 46 or 49.
- EPS Scheme: G.S.R. 527(E), dated 29 June 2026, Gazette ID CG-DL-E-30062026-273951; paragraphs 12 and 13 were read from a third-party PDF mirror: https://labour-codes-by-vivek.github.io/sources/ntf-2026-06-29-pension-scheme-2026.pdf. The 4 August corrigendum G.S.R. 704(E), 25 September amendment G.S.R. 847(E), and 15 October amendment G.S.R. 890(E) were checked; the ten-year threshold in paragraph 12(1) and the withdrawal-benefit rule in paragraph 13 remain as described here.
- Board announcement: Ministry of Labour and Employment, PIB, 240th Central Board of Trustees meeting, 19 November 2026, Release ID 2338667: https://www.pib.gov.in/PressReleasePage.aspx?PRID=2338667&lang=1&reg=3. Section 15(1)(e) of the Code on Social Security, 2020 requires a Central Government notification to modify a scheme. The PIB release records Board approval but does not identify that notification or a commencement date for the two withdrawal changes. Official India Code text: https://www.indiacode.nic.in/bitstream/123456789/16823/1/a2020-36.pdf.
- The two-month period already present in paragraph 49(1)(vi) is limited to the listed closure/transfer/discharge cases. It must not be presented as the general post-employment waiting period in paragraph 49(2).

### Changes applied

- Replaced the superseded EPF Scheme 1952 paragraph 69 citation in 7-1 with the 2026 Scheme's paragraphs 46 and 49.
- Removed the claim that 75% of the “eligible balance” can be withdrawn at any time without documentation.
- Distinguished EPF partial withdrawal from full settlement and EPS withdrawal benefit from monthly pension.
- Added the 19 November Board approval as pending the Central Government notification required by section 15(1)(e).
- Updated the Chapter 7 conflict record and the two proposed editorial rationales. Both remain PROPOSED_REWRITE; reviewer approval remains NONE.

### Still open

- Recheck the Official Gazette and EPFO implementation pages for the Central Government notification required by section 15(1)(e), recording its number and commencement date before changing the current-rule wording.
- Recheck ABVKY validity and the current ESIC portal conditions; the earlier 30 June 2027 date was not independently revalidated in this pass.
- Obtain qualified independent financial/legal review before treating either job-loss tip as professionally reviewed. No such review is claimed here.


## Rebase checkpoint (26 November 2026)

This draft has been rebased onto the then-current master baseline `4c7ddbe` after confirming that none of the six changed files had been modified on master since the PR base. The official PDUNASS-hosted scheme PDFs and the linked Gazette corrigenda/amendments are now recorded above. Exact-head inventory, India verification, source scan, type-check and Playwright validation must pass on the final synchronized PR head before merge; qualified independent financial/legal review remains outstanding.
