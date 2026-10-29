# Human review packet — Tier A chapters

Prepared 2026-10-30. Regenerate with `node reports/tools/make-review-packets.mjs` after any text edit.

**Scope: 19 Tier A chapters, 477 tips, 0 of 19 chapters signed off.** Every chapter in `data/en-in/manifest.json` still carries `humanReview: "pending"`.

This is the review still owed on the India edition. Until a chapter reads `signed-off`, [india.astro](src/pages/india.astro) lists it under pending human review and the chapter page shows the reviewer chip, so this packet is the blocking item, not a formality. Tier B chapters are not in this packet; their review is not gated.

## How to review one chapter

1. Read the built page against the source chapter. English page: `/chapters/N-slug/` in the local build. Source: `source/book/NN-*.md` in the pinned submodule.
2. Read for the recommendation, not for polish. Nothing may be summarised away, reordered, softened or strengthened, and every number, unit, grade, DOI and citation must still be the source value.
3. Check the India substitution. A figure that exists for India must be named and sourced where it is used; a converted figure must not wear an Indian source.
4. Work the flags. Each flag is a decision, not a re-audit: either the text already carries the hedge, or it gets one.
5. Sign off in the table at the end, then record it:

   ```
   npx tsx scripts/india-status.ts <chapter> checked --human=signed-off --verifier="<name>" --date=2026-10-30
   npx tsx scripts/verify-india.ts --final
   ```

   If the toolchain will not start in your environment, edit `data/en-in/manifest.json` directly: set `chapters["<chapter>"].humanReview` to `"signed-off"`, then run the verifier.

What is not your job here: re-resolving DOIs, re-fetching government pages, or re-grading evidence. Those were done and recorded per chapter in `reports/verification/`. You are the last reader, not a second verifier — but you are the one who decides whether a hedge is enough.

## Chapter index

| Ch | Title | Tips | Needs a decision | Source blocked | Claims recorded | Report | Built page |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | Do Not Die Early | 48 | 8 | 1 | 27 | [chapter-01.md](reports/verification/chapter-01.md) | `/chapters/1-do-not-die-early/` |
| 05 | Do Not Waste Money | 50 | 2 | none | 16 | [chapter-05.md](reports/verification/chapter-05.md) | `/chapters/5-do-not-waste-money/` |
| 07 | How to Get By in India When You Have No Money | 23 | 12 | 7 | 23 | [chapter-07.md](reports/verification/chapter-07.md) | `/chapters/7-living-with-no-money/` |
| 08 | Law and Property Safety | 46 | 26 | 14 | 46 | [chapter-08.md](reports/verification/chapter-08.md) | `/chapters/8-law-and-property-safety/` |
| 09 | Everyday Legal Red Lines | 29 | 22 | 4 | 29 | [chapter-09.md](reports/verification/chapter-09.md) | `/chapters/9-everyday-legal-red-lines/` |
| 12 | Starting Your Own Business | 28 | 9 | none | 13 | [chapter-12.md](reports/verification/chapter-12.md) | `/chapters/12-starting-a-business/` |
| 13 | Emergencies: What to Do First | 48 | 6 | none | 13 | [chapter-13.md](reports/verification/chapter-13.md) | `/chapters/13-emergencies-what-to-do-first/` |
| 14 | Accounts and Information Security | 12 | 2 | none | 12 | [chapter-14.md](reports/verification/chapter-14.md) | `/chapters/14-accounts-and-information-security/` |
| 15 | Renting and Buying Housing | 18 | 2 | none | 13 | [chapter-15.md](reports/verification/chapter-15.md) | `/chapters/15-renting-and-buying-housing/` |
| 16 | Living with Chronic Disease | 14 | 2 | none | 14 | [chapter-16.md](reports/verification/chapter-16.md) | `/chapters/16-living-with-chronic-disease/` |
| 17 | Elderly at Home | 13 | 6 | none | 0 | [chapter-17.md](reports/verification/chapter-17.md) | `/chapters/17-elderly-at-home/` |
| 19 | Employment & Work Injury | 24 | 6 | none | 17 | [chapter-19.md](reports/verification/chapter-19.md) | `/chapters/19-employment-and-work-injury/` |
| 23 | Which Skills to Learn | 25 | 8 | none | 19 | [chapter-23.md](reports/verification/chapter-23.md) | `/chapters/23-which-skills-to-learn/` |
| 24 | Navigating Healthcare and Doctors | 15 | 11 | none | 15 | [chapter-24.md](reports/verification/chapter-24.md) | `/chapters/24-navigating-healthcare/` |
| 25 | After Someone Dies | 12 | none | none | 12 | [chapter-25.md](reports/verification/chapter-25.md) | `/chapters/25-after-someone-dies/` |
| 27 | Pregnancy and Childbirth | 20 | 1 | 2 | 20 | [chapter-27.md](reports/verification/chapter-27.md) | `/chapters/27-pregnancy-and-childbirth/` |
| 29 | After a Major Blow | 14 | none | none | 14 | [chapter-29.md](reports/verification/chapter-29.md) | `/chapters/29-after-a-major-blow/` |
| 31 | Paths After Eighteen | 17 | 6 | none | 0 | [chapter-31.md](reports/verification/chapter-31.md) | `/chapters/31-paths-after-eighteen/` |
| 33 | Living with Disability | 21 | 9 | none | 21 | [chapter-33.md](reports/verification/chapter-33.md) | `/chapters/33-living-with-disability/` |

*Needs a decision* counts the rows the verifier marked partial, unverified or annotated, plus editorial notes carried in the report. *Source blocked* counts claims that read clean but whose primary source returned 403 or would not load: confirm the hedge reads correctly, do not re-fetch.

## Per-chapter worksheets

### Chapter 01 — Do Not Die Early

Tips 48 · verified 2026-10-21 · Independent verifier (AI), round 6 delegated pass · claims recorded: 23 clean, 3 to decide, 1 source-blocked

Read `/chapters/1-do-not-die-early/` against `source/book/01-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 1-33 | Cross-references: Chapter 13, Item 19 (CO), Item 20 (ingestion), Item 25 (storage) | partial | 13-19 and 13-20 correct; 13-25 is drowning rescue, not pesticide storage (inherited from the source edition - see residual items) |
| 1-22 | Bonten 2015: 84,496 adults; VE 45.6% (95.2% CI 21.8-62.5); 75.0% (41.4-90.8) | yes | "84,500" is a fair rounding; no invented senior programme; no "CI width" sentence |
| 1-20 | Flu shot about Rs 2,500-3,200 at a private clinic; government facilities charge less | partial | Range brackets the verified private price; upper bound plausible; no citation for the range itself |

**Editorial notes carried in the report**

- 1-33 caveat's "(Chapter 13, Item 25)" points at 13-25 "Upon seeing someone drowning ...", while the sentence is about not storing pesticides or sedatives at home - that guidance is Chapter 1, Item 25. The wrong pointer is inherited verbatim from the source edition (source 13-25 is also the drowning tip), so it is a source-edition bug rather than an India-edition regression, and the sentence is self-contained. If the…
- 1-20's Rs 2,500-3,200 range rests on the verified Apollo Homecare flu price of Rs 2,499 at the bottom end; no source is cited for the range.
- 1-21 (Rs 10,509) and 1-22 (Rs 2,722) keep Tata 1mg figures that cannot be confirmed from this network; each is paired with a verified Apollo price, so the tip-level claim stands.
- 1-11, 1-15 and 1-42 give rupee ranges with no price source; 1-42 cites IS 12640 (Part 2) without listing BIS among its sources.
- 1-9's section numbers (s.185 drink-driving, s.184 dangerous driving) are consistent with the Act but were not textually re-read because indiacode.in returns 403 and the bare-act mirrors are JS-rendered.

**Source blocked at verification** — read the text, confirm the hedge, do not re-fetch: `1-9`

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 05 — Do Not Waste Money

Tips 50 · verified 2026-10-21 · independent-verifier-b0b1c9a5 (round 2, current build) · claims recorded: 14 clean, 2 to decide, 0 source-blocked

Read `/chapters/5-do-not-waste-money/` against `source/book/05-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 5-3 | Source line cites "Employees' Provident Funds and Miscellaneous Provisions Act, 1952" | n/a | Should-fix, not blocking: the Act was subsumed when the labour codes commenced on 21 November 2025, so the source line should read "Code on Social Security, 2020, and the EPF… |
| 5-5 | "Online lotteries are prohibited under the 1998 Act" | partly | Should-fix, not blocking: the Act empowers State Governments to prohibit lotteries, including computerised and online ticket sales, rather than banning online lotteries in its own terms. Suggest "section 5 of… |

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 07 — How to Get By in India When You Have No Money

Tips 23 · verified 2026-10-21 · Independent verifier (delegated, did not write the chapter) · claims recorded: 6 clean, 10 to decide, 7 source-blocked

Read `/chapters/7-living-with-no-money/` against `source/book/07-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 7-6 | No national emergency cash grant; SDRF under MHA norms for notified disasters; CM Relief Fund discretionary; NFBS lump… | partial | The s.46 point matches the Act's structure; not confirmed by fetch. |
| 7-7 | NFSA 2013: 5 kg per person per month for priority households, 35 kg per household for AAJ; coverage… | partial | Entitlement figures and the 75/50 coverage cap match the Act as commonly reproduced; neither the NFSA portal nor India Code served readable text on this date, so this row is… |
| 7-8 | UDID from DEPwD; IGNDPS under NSAP for severe/multiple disability aged 18-79; ADIP devices; RPwD Act 2016 | partial | Scheme names and the 18-79 band are as in NSAP guidelines; not confirmed by fetch. |
| 7-12 | No "person facing employment difficulties" certificate; NCS/e-Shram/state welfare boards; BOCW boards; NAPS | partial | The negative claim is correct: India issues no such certificate. |
| 7-13 | PMKVY free short-term courses; NAPS reimburses 25% of the prescribed stipend up to Rs 1,500 per month per… | not read | The Rs 1,500 cap and 25% reimbursement are the NAPS parameters as published; the NAPS portal did not resolve on this date, so this number is unconfirmed by fetch and… |
| 7-16 | PMAY-U and Affordable Rental Housing Complexes; no five-year statutory guarantee; DDA/MHADA lotteries | partial | The negative claim is correct: no Indian statute guarantees five years of social housing. |
| 7-18 | EPF account never lapses; EPS 1995 needs ten years of pensionable service, below that a lump-sum withdrawal benefit… | partial | The ten-year threshold and the withdrawal-benefit route below it are correct; ESIC rates confirmed separately (7-9). |
| 7-19 | India has no individual bankruptcy law in force; IBC 2016 Part III never brought into force; JJ Act… | partial | The central negative claim is correct and is the chapter's key safeguard: Part III of the IBC (individuals and partnership firms) has never been notified. |
| 7-20 | IRDAI lifetime renewability (not a guarantee of renewal); PED waiting period capped at 36 months; moratorium after which… | partial | The distinction between "lifetime renewability" and "guaranteed renewal" is correct and important; the 36-month PED cap and moratorium are the 2016/2019 regulation parameters. |
| 7-23 | RBI recovery-agent rules restrict calls to 8 a.m.-7 p.m.; restructuring/OTS is commercial; CICRA; digital-lending key fact statement and… | partial | The negative claim (no statutory instalment plan) is correct. The 8 a.m.-7 p.m. window matches the RBI recovery-agent directions; not re-read on this date. |

**Editorial notes carried in the report**

- None found. No wrong statute, no wrong section, no invented number, no Chinese content presented as Indian law, no unconverted foreign currency and no repealed Act presented as current law.
- Open items (non-blocking): the NAPS Rs 1,500 monthly cap (7-13) and helpline 112 (7-4) are correct as commonly published but could not be confirmed by fetch (naps.gov.in DNS failure, MHA/ERSS 403); the "Chapter XI" part numbering in 7-22 rests on a secondary commentary because no official copy of the OSH Code could be read on 2026-10-21.

**Source blocked at verification** — read the text, confirm the hedge, do not re-fetch: `7-1`, `7-2`, `7-5`, `7-10`, `7-11`, `7-15`, `7-17`

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 08 — Law and Property Safety

Tips 46 · verified 2026-10-21 · Independent verifier (delegated, did not write the chapter) · claims recorded: 8 clean, 24 to decide, 14 source-blocked

Read `/chapters/8-law-and-property-safety/` against `source/book/08-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 8-6 | Limitation Act 1963 for civil claims; BNSS sets criminal limitation periods; no fixed sentencing discount | partial | The chapter of the BNSS on limitation of taking cognizance exists; the negative claim (no fixed discount) is correct. |
| 8-8 | Lending your bank account or SIM makes you a money mule; BNS, PMLA 2002, RBI KYC norms | partial | The three-route framing (BNS, PMLA, KYC) is correct; no invented section numbers. |
| 8-10 | BNS hurt and intimidation; private defence must be proportionate | partial | Proportionality is the correct test; section numbers not re-read. |
| 8-13 | Murder and attempt; death sentence possible; Tele-MANAS 14416 | partial | The death penalty's availability for murder is correct; the 14416 number could not be confirmed by fetch. |
| 8-14 | Tele-MANAS 14416; Mental Healthcare Act 2017 | partial | Statute correct; the helpline number is unconfirmed by fetch (listed as an open item). |
| 8-16 | Defamation and intimidation under the BNS; IT Rules 2021 grievance officer | partial | Indian Kanoon's section page is headed "Section 356 in Bharatiya Nyaya Sanhita, 2023 — 356. Defamation."; grievance-officer obligation under the 2021 Rules is correct. |
| 8-20 | CPC 1908 Order 21 execution; perjury; IBC 2016 | partial | Order 21 is the execution order; correct. |
| 8-23 | Gifts; Transfer of Property Act 1882; Registration Act 1908; Dowry Prohibition Act 1961 | partial | Section 122 is the definition of gift; statutes correct. |
| 8-24 | Dowry Prohibition Act 1961; BNS dowry death and cruelty | partial | Dowry death sits at BNS s.80 and cruelty at s.85; the tip does not print section numbers, so no section error is possible. |
| 8-25 | Premarital assets; Hindu Marriage Act 1955; Special Marriage Act 1954; Indian Succession Act 1925; prenup not automatically enforceable | partial | The negative claim (no automatic enforceability of a prenup) is correct Indian law; statutes correct. |
| 8-26 | Bigamy under the BNS; SMA 1954 notice and objection | partial | Bigamy is BNS s.82 and the SMA notice period is 30 days with objection before solemnisation; correct. |
| 8-28 | Companies Act 2013 s.164 disqualification; Form DIR-11 resignation; Benami Act 1988 | partial | Indian Kanoon's section page is headed "Section 164 in The Companies Act, 2013" (disqualifications for appointment of directors). DIR-11 is the correct resignation form and the Benami Act is 1988… |
| 8-29 | NDPS Act 1985; Customs Act 1962 | partial | Both names and years correct. |
| 8-30 | Tort liability of an animal owner; Prevention of Cruelty to Animals Act 1960; CPA 2019 | partial | Statute correct; the tort framing is accurate (strict liability for known-dangerous animals). |
| 8-31 | Consent and incapacity; POCSO Act 2012 (child under 18); 1091 women's helpline | partial | POCSO's definition of a child as under 18 is correct; 1091 could not be confirmed by fetch (NCW site unreachable), listed as an open item. |
| 8-32 | Sextortion; BNS extortion and intimidation; IT Act 2000 | partial | Statutory routes correct. |
| 8-33 | False accusation; defamation carries up to two years (BNS s.356); false evidence | partial | "Section 356 in Bharatiya Nyaya Sanhita, 2023 — 356. Defamation." confirmed as the defamation provision; the two-year maximum is the simple-defamation punishment. |
| 8-34 | Bharatiya Sakshya Adhiniyam 2023; coerced confession excluded; appeals | partial | Statute correct and current (replaced the Indian Evidence Act 1872); no repealed Act cited as current. |
| 8-38 | You cannot insure a life and then kill for the payout; Insurance Act 1938 | partial | Correct in substance: the policy is void against the insurer's interest and the killing is murder; no invented provision. |
| 8-40 | Prevention of Corruption Act 1988; CVC | partial | Statute correct and current (amended 2018). |
| 8-41 | Recording a conversation you are a party to; BSA 2023 electronic evidence certificate | partial | The certificate requirement for electronic evidence is BSA s.63 (was s.65B of the Evidence Act); correct. |
| 8-42 | Film scene: wide, mid, close; BSA 2023 | partial | No hard legal claim beyond the statute name; correct. |
| 8-45 | Face scan or loan witness; Aadhaar Act 2016; RBI KYC | partial | Correct in substance: consent-based authentication under s.8 and KYC obligations; no invented number. |
| 8-46 | Locks and lighting against burglary; BNS house-breaking | partial | House-breaking sits at BNS ss.331-334; the tip prints no section number, so no section error. |

**Editorial notes carried in the report**

- None found. No wrong statute, no wrong section number, no invented hotline or fee, no Chinese content presented as Indian law, no unconverted foreign currency, and no repealed Act presented as current law. In particular the Income-tax Act, 2025 is cited as current (8-21) and the Indian Evidence Act 1872 is replaced by the Bharatiya Sakshya Adhiniyam 2023 (8-34, 8-41, 8-42).
- Open items (non-blocking): helplines 1930 (8-2), 14416 (8-13, 8-14) and 1091 (8-31) could not be confirmed by fetch; BNSS sections 173/175/396 and MV Act sections 134/161 rest on the standard CrPC-to-BNSS and MV Act mapping because India Code returned 403 on every attempt.

**Source blocked at verification** — read the text, confirm the hedge, do not re-fetch: `8-1`, `8-2`, `8-4`, `8-5`, `8-7`, `8-9`, `8-17`, `8-18`, `8-19`, `8-21`, `8-35`, `8-37`, `8-39`, `8-44`

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 09 — Everyday Legal Red Lines

Tips 29 · verified 2026-10-21 · Independent verifier (delegated, did not write the chapter) · claims recorded: 5 clean, 20 to decide, 4 source-blocked

Read `/chapters/9-everyday-legal-red-lines/` against `source/book/09-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 9-3 | Reading a foreign website is not an offence; BNS Chapter VII offences against the State; UAPA 1967 | partial | Correct: mere reading is not an offence, and the State-offence provisions are in BNS Chapter VII. No invented provision. |
| 9-5 | Money mule; PMLA 2002; RBI KYC Master Directions | partial | Correct routes; no invented number. |
| 9-6 | Loan-packaging fraud; BNS forgery and cheating | partial | Forgery (336) and cheating (318) are the right provisions; sections not re-read today. |
| 9-7 | Found property; BNS dishonest misappropriation | partial | Dishonest misappropriation is the correct provision; the tip keeps the "depends on dishonesty" hedge rather than asserting a fixed penalty. |
| 9-8 | Fake accounts and coupon fraud; IT Act ss.66C, 66D; DPDP Act 2023 | partial | Both IT Act sections are correctly characterised; the DPDP Act 2023 is the current data-protection statute. |
| 9-9 | Throwing objects from a balcony; BNS endangering life; municipal solid-waste rules | partial | Endangering life by a rash or negligent act is the correct route; municipal rules are state-level and correctly described as such. |
| 9-10 | Arms Act 1959 and Arms Rules 2016; air guns and imitation firearms | partial | The Arms Rules were re-issued in 2016 (replacing the 1962 Rules); the 1959 Act is current law. Correct. |
| 9-11 | Drone Rules 2021; Digital Sky (digitalsky.dgca.gov.in); Aircraft Act 1934 | partial | The 2021 Rules replaced the 2018 draft regime and Digital Sky is the correct platform; the engine of the Aircraft Act 1934 is correct. |
| 9-15 | Cannot detain a debtor; BNS wrongful confinement; NI Act 1881 s.138; IBC 2016 | partial | Correct: s.138 is the cheque route and detaining a debtor is wrongful confinement. |
| 9-16 | Lending Aadhaar or PAN; Aadhaar Act 2016; DPDP Act 2023 | partial | Correct statutes; no invented section. |
| 9-17 | Police stop; BNSS 24-hour production rule; NHRC | partial | The 24-hour production rule is constitutional (Art. 22(2)) and carried into the BNSS; correct. |
| 9-18 | Age of consent 18; POCSO 2012; Prohibition of Child Marriage Act 2006 | partial | The age of consent under POCSO is 18 and child marriage below 18 is voidable under the 2006 Act; correct. |
| 9-21 | Insurance fraud; Insurance Act 1938; IRDAI | partial | Correct: fraud routes through cheating/forgery plus the insurer's own remedies; no invented provision. |
| 9-22 | Transplantation of Human Organs and Tissues Act 1994 (amended 2011); authorisation committee; NOTTO | partial | The 1994 Act was amended by the Transplantation of Human Organs (Amendment) Act, 2011, and the authorisation-committee route and NOTTO are correct. The tip's internal "Section 7" reference is a… |
| 9-23 | Immoral Traffic (Prevention) Act 1956; brothel and soliciting offences | partial | Correct: the 1956 Act is still in force and ss.3 and 8 cover brothel-keeping and soliciting. |
| 9-24 | Copyright Act 1957; fair dealing; takedown | partial | Section 52 is the fair-dealing provision and the IT Rules 2021 provide the takedown route; correct. |
| 9-25 | Fan fiction; Copyright Act 1957; Trademarks Act 1999 and passing off | partial | Both statutes correct; passing off is the correct common-law route. |
| 9-26 | Arms Act 1959 for baton, stun gun and dagger; pepper spray varies by state | partial | Correct: bladed and prohibited arms are scheduled under the 1959 Act and pepper spray is regulated at state level. |
| 9-27 | Indian Fisheries Act 1897; Wild Life (Protection) Act 1972; closed season | partial | Both statutes are real and current; closed seasons are notified under state fisheries rules, which the tip says. |
| 9-29 | Public Examinations (Prevention of Unfair Means) Act 2024; UPSC | partial | The 2024 Act is real and in force and covers impersonation, paper leaks and answer trading; the caveat correctly limits its coverage to listed examinations and points state exams to… |

**Editorial notes carried in the report**

- None found. No wrong statute, no wrong section number, no invented punishment, no Chinese content presented as Indian law, no foreign currency and no repealed Act presented as current law (the IT Act 2000 provisions cited remain in force; the BNS/BNSS/BSA 2023 replace the IPC/CrPC/Evidence Act and the chapter cites only the 2023 codes).
- Open items (non-blocking): the Online Gaming Act 2025 (9-13) and the 1930 helpline were confirmed only through search-result titles because meity.gov.in and pib.gov.in returned 403; the Tele-MANAS number 14416 (9-20) and helpline 112 (9-28) could not be confirmed by fetch; BNS sections 78, 115, 117 and the THOTA/ITPA section numbers could not be re-read on India Code (403) although the chapter's numbering is…

**Source blocked at verification** — read the text, confirm the hedge, do not re-fetch: `9-1`, `9-13`, `9-14`, `9-28`

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 12 — Starting Your Own Business

Tips 28 · verified 2026-10-21 · Independent verifier (delegated) · claims recorded: 6 clean, 7 to decide, 0 source-blocked

Read `/chapters/12-starting-a-business/` against `source/book/12-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 12-12 | The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026, and the late fee is under… | yes | s.428 is "Fee for default in furnishing return of income". The tip states no fee amount, so there is nothing to overclaim. |
| 12-4 | Benami Transactions (Prohibition) Act, 1988 as amended in 2016 makes benami property liable to confiscation and the arrangement… | unverified | Correct as cited; no fetch. |
| 12-6 | SPICe+ combines name reservation, incorporation, DIN, PAN, TAN and EPFO/ESIC registration; GST and Udyam registrations follow | unverified | The SPICe+ scope is accurate and no threshold figure is stated. |
| 12-16 | ESIC and EPF coverage depends on establishment size and activity, and the Code on Social Security, 2020 and… | unverified | The cautious wording is correct and no headcount threshold is asserted, so there is no number to get wrong. |
| 12-23 | Strike-off under Companies Act 2013 s.248 in Form STK-2 under the 2016 Removal of Names Rules; LLP strike-off… | unverified | Correct in substance; no fetch. |
| 12-26 | Private placement under Companies Act 2013 s.42 is limited to 200 persons in a financial year and cannot… | unverified | The 200-person cap and the ban on public advertising are correct. |
| 12-28 | Partnership Act 1932 defaults: ss.11–13 (profit share, salary, participation), s.32 (retirement), s.43 (dissolution by notice) | unverified | The section roles are right; no fetch. |

**Editorial notes carried in the report**

- None. The earlier Form 8 deadline error is no longer present in 12-25: the tip states no LLP filing date and leaves the dates to the Acts.
- Coverage gap, not a contradiction: indiacode.nic.in 403 and pib.gov.in 403 prevented primary confirmation of the Companies Act, Partnership Act and FSSAI press-release pages; those rows are marked "unverified".

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 13 — Emergencies: What to Do First

Tips 48 · verified 2026-10-21 · independent-verifier-session-cbb8c456 · claims recorded: 12 clean, 1 to decide, 0 source-blocked

Read `/chapters/13-emergencies-what-to-do-first/` against `source/book/13-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 13-44 | Infant CPR: 30 compressions, rate 100-120 per minute | yes | "100 to 120" is a rate, not a helpline. Editorial note below on the orphaned institution name in the caveat. |

**Editorial notes carried in the report**

- 13-2 no longer imports the Chinese Civil Code or a converted award. Its benefit cites s.134A and the MoRTH guidelines, and states that no payout is guaranteed.
- 13-36 no longer says robbery carries "at least three years" or death, and no longer cites "Article 20". Its sentences were matched one by one against BNS 308, 309 and 310 and BNSS 173.
- Cross-reference wording: the edition's convention is "Section N, Item M" (13-2 uses "Section 1, Item 13"; 13-36 uses "Section 8, Item 32"), but six caveats in this chapter still say "Rule": 13-45 ("Chapter 13, Rule 26 (back blows and abdominal thrusts) or Rule 43", "Chapter 13, Rule 20"), 13-46 ("Chapter 13, Rule 2", "Chapter 13, Rule 28", "Chapter 34, Rule 11", "Chapter 22, Rule 11"), 13-47 ("Chapter 13, Rule 12",…
- 13-44 caveat still says "How long to compress before calling varies: Capital Institute of Pediatrics and the U.S. single-rescuer flow say 2 minutes; IFRC says 1 minute", but the rewritten benefit no longer introduces that institution. The name is orphaned (and it is a non-Indian institution in an India edition); either drop the clause or name the AHA/AAP guidance that is already in the sources.
- 13-2's India paragraph opens with "Conversely, Indian law protects the rescuer rather than paying him" immediately after advice about helping an elderly relative stand up, where there is nothing to be converse to. Style only; the legal content is right.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 14 — Accounts and Information Security

Tips 12 · verified 2026-10-21 · independent-verifier-session-cbb8c456 · claims recorded: 11 clean, 1 to decide, 0 source-blocked

Read `/chapters/14-accounts-and-information-security/` against `source/book/14-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 14-11 | Check SIMs with Sanchar Saathi/TAFCOP, check the CIBIL report, Aadhaar Act protections, BNS/IT Act remedies | yes | High-risk tip. All instruments real; no invented number or helpline. |

**Editorial notes carried in the report**

- None. Two non-blocking notes: the 14-7 benefit should cite s.6(4) (and optionally s.6(6)) rather than "Sections 6(4) and 6(5)"; the 14-12 caveat should say "item 6/8" rather than "Rule 6/8".

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 15 — Renting and Buying Housing

Tips 18 · verified 2026-10-21 · independent-verifier-session-cbb8c456 · claims recorded: 13 clean, 0 to decide, 0 source-blocked

Read `/chapters/15-renting-and-buying-housing/` against `source/book/15-*.md`.

**Editorial notes carried in the report**

- Cross-reference wording, same artefact as chapter 13: 15-14 caveat says "Chapter 15, Rule 6" and 15-18 caveat says "Chapter 15, Rule 13", where these are items. 15-12 is fixed. Suggest one sweep of "Rule" -> "Item" in cross-references across the edition.
- 15-16: the two dates (CLSS closed 31 March 2021; PMAY-U 2.0 approved 2024) could not be confirmed against an official release because pib.gov.in returns 403 to this session. The chapter's substance is right and the portal confirms CLSS is closed and 2.0 is running; if a citation is wanted, a reachable official page or the PMAY-U 2.0 operational guidelines would close the gap.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 16 — Living with Chronic Disease

Tips 14 · verified 2026-10-21 · independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239 · claims recorded: 12 clean, 2 to decide, 0 source-blocked

Read `/chapters/16-living-with-chronic-disease/` against `source/book/16-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 16-6 | Ayushman Arogya Mandir provides primary care; the Clinical Establishments Act and state rules cover a private clinic | yes | The Act applies only in states and UTs that adopted it - overclaim, see non-blocking note 1. |
| 16-11 | HBsAg-positive: six-monthly ultrasound plus AFP; Shanghai trial 18,816; REVEAL-HBV | yes | Trial and cohort figures are consistent with the published reports; see non-blocking note 2 on the universal-treatment sentence. |

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 17 — Elderly at Home

Tips 13 · verified 2026-10-21 · independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239 · claims recorded: 0 clean, 0 to decide, 0 source-blocked

Read `/chapters/17-elderly-at-home/` against `source/book/17-*.md`.

This report carries no claim table (a targeted pass or a narrative verification), so its notes are the whole record. Read `reports/verification/chapter-17.md` before signing off.

**Editorial notes carried in the report**

- 17-6: the reverse-mortgage yields are already labelled rules of thumb, and the chapter does not claim a statutory rate. The RBI framework was not read in full.
- 17-9: the 15,000-40,000 rupee range is a market estimate, not a published fee; it is graded B and marked disputed, which is the right treatment.
- 17-5 and 17-11: MWPSCA 2007 section 2(j) defines the Tribunal as the Maintenance Tribunal constituted under section 7; that reading was confirmed in the previous audit and is unchanged.
- 17-13: NICE NG97 recommendations 1.1.12, 1.2.1, 1.2.2 and 1.2.6, and the Clarfield figures (39 studies, 5,620 patients, 9.0 per cent potentially reversible, 0.6 per cent improved), were confirmed in the previous audit and are unchanged.
- 17-12, sources line: the tip now cites the Code on Social Security, 2020 in the benefit but the sources field still lists only the OSH Code 2020, the CCS (Leave) Rules 1972 and the Ministry of Labour and Employment. Adding the Code to the sources would be tidier; it is not blocking, because the ministry source covers the Code and the claim is a passing aside.
- 17-1, sources: the RPwD Act link points at indiacode.nic.in, which returns 403 to this verifier. The link is the correct official location; the 403 is an access failure, not a wrong citation.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 19 — Employment & Work Injury

Tips 24 · verified 2026-10-21 · independent-verifier-a45fe80c-adb7-4922-988d-78d56d4d0b53 · claims recorded: 12 clean, 5 to decide, 0 source-blocked

Read `/chapters/19-employment-and-work-injury/` against `source/book/19-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 19-1 | Four labour codes in force from 21 November 2025; eight-hour day and 48-hour week; overtime at twice the… | yes | Both limits and the double rate are correct. Note: the 48-hour week sits in s.25(1) but not clearly in clause (a); the section is right, the clause letter is loose. |
| 19-7 | Gratuity and EPF survive resignation; gratuity under SS Code s.53; EPF remains under the EPF Act 1952; state… | yes | EPF Act 1952 verified as still in force (it was not in the 2025 repeal notification). Note: the benefit field for this tip is only a citation list, not a… |
| 19-15 | Death benefits come from ESIC, SS Code Chapter VII, EPF and gratuity | yes | Correct set of routes. Note: benefit field is a citation list only. |
| 19-18 | Income-tax Act ss.10(10B), 10(10C), 10(10AA) and 89 govern gratuity, VRS, leave encashment and relief; there is no three-times-average-wage… | yes | Section numbers are the correct ones for these exemptions; the invented 3x rule is gone. |
| 19-21 | Grievances go to EPFO and ESIC; EPF and ESIC provisions sit in the SS Code 2020 | yes | Note: "SS Code 2020 (EPF and ESIC provisions)" sits awkwardly with 19-7's statement that the EPF Act 1952 remains in force; suggest "SS Code 2020 read with the EPF Act,… |

**Editorial notes carried in the report**

- None. Two notes for the copy editor (not blocking): 19-1 should cite s.25(1) rather than s.25(1)(a) for the 48-hour week; 19-21 should read "SS Code 2020 read with the EPF Act, 1952".

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 23 — Which Skills to Learn

Tips 25 · verified 2026-10-21 · independent-verifier-r3 · claims recorded: 15 clean, 4 to decide, 0 source-blocked

Read `/chapters/23-which-skills-to-learn/` against `source/book/23-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 23-1 | Child below 14 cannot be employed, with narrow family-enterprise and child-artiste exceptions; adolescent 14-18 barred from hazardous work;… | yes | s.3 as substituted reads "No child shall be employed or permitted to work in any occupation and process"; s.3(2) carries the family-enterprise (non-hazardous, after school hours or during vacations) and… |
| 23-6 | Weigh early earnings against the later premium; no national data asserted in the tip | yes | Advice/negative tip, no citation needed. The caveat still carries editorial scaffolding about a "1988-2001 series ... not reproduced here" - see residual notes. |
| 23-9 | Free or subsidised training through PMKVY, NSDC and state skill missions; treat "guaranteed job" as a warning | yes | Scheme exists; no placement statistic invented. |
| 23-13 | PMKVY short-term courses delivered by training partners under SSCs; test the placement record, not the brochure | yes | No invented placement statistic. |

**Editorial notes carried in the report**

- indiacode.nic.in returned HTTP 403 to this session's fetcher for the child-labour Act (handle 20062); curl to www.indiacode.nic.in and upload.indiacode.nic.in timed out with no connection. The Act was read from the Rajasthan Labour Department copy instead.
- meity.gov.in PDF URLs returned 404 (recorded in the chapter 24 report).
- web_fetch refuses application/pdf ("unsupported content type"); PDFs were retrieved with curl and converted with pdftotext.
- pib.gov.in and incometax.gov.in return 403 to this session; no claim in this chapter depends on them.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 24 — Navigating Healthcare and Doctors

Tips 15 · verified 2026-10-21 · independent-verifier-r3 · claims recorded: 12 clean, 3 to decide, 0 source-blocked

Read `/chapters/24-navigating-healthcare/` against `source/book/24-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 24-3 | FIXED: no national rule reserving appointments or beds for clinic referrals, no national referral-centre mandate and no 2027… | yes | Text now reads: "India has no national rule that requires major hospitals to set aside a share of appointments or beds ... and no national referral-centre mandate or 2027 deadline",… |
| 24-11 | FIXED: NMC RMP (Professional Conduct) Regulations 2023 govern conduct; the gift rule targets gifts from pharmaceutical, commercial and… | yes | Clause 35 reads: "RMPs and their families must not receive any gifts, travel facilities, hospitality, cash or monetary grants, consultancy fee or honorariums, or access to entertainment or recreation from… |
| 24-15 | Itemised bill; query duplicates; routes are the state clinical-establishment authority, the consumer commission under CPA 2019, and the… | yes | CPA 2019 and the Shantha position are correctly stated; NCH 1915 is real. No scheme fund-regulation route is invented. |

**Editorial notes carried in the report**

- indiacode.nic.in (both www and upload hosts) returned 403 or timed out; the CE Act and DPDP Act were therefore read from mirrors (Indian Kanoon for the CE Act; the PRS copy for the DPDP Act). The CE Act text was checked against s.1(2) and is quoted in the table.
- nmc.org.in regulation PDFs: .../2023/02/NMC_RMP_Conduct_Regulations_2023.pdf returned 404; .../2023/08/RMP-Professional-Conduct-Regulations-2023.pdf returned 301 then 404. The regulation text was read from an IDMA-hosted copy of the notified regulations (notification No. R-12013/01/2022/Ethics, 2 August 2023).
- meity.gov.in DPDP PDF: 404. The Act was read from the PRS copy.
- clinicalestablishments.gov.in and clinicalestablishments.mohfw.gov.in: fetch failed / connection timed out (curl 000). mohfw.gov.in's CE Act PDF returned 404.
- telegraphindia.com's article on the West Bengal decision returned 403 to both curl and the page fetcher; the decision was confirmed through the Zee News report and corroborating headlines.
- divyangjan.depwd.gov.in (RPwD assessment guidelines) refused the connection (curl 28); the 21-disability count was checked against the Act's Schedule instead.
- web_fetch refuses application/pdf ("unsupported content type"); PDFs were retrieved with curl and converted with pdftotext.
- pib.gov.in returns 403 to this session.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 25 — After Someone Dies

Tips 12 · verified 2026-10-21 · independent-verifier-048d208e · claims recorded: 12 clean, 0 to decide, 0 source-blocked

Read `/chapters/25-after-someone-dies/` against `source/book/25-*.md`.

No flag survived verification for this chapter: every claim row was recorded clean and no editorial note was carried. Read it as a reader and sign off.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 27 — Pregnancy and Childbirth

Tips 20 · verified 2026-10-21 · Independent verifier (subagent session, did not write the chapter) · claims recorded: 17 clean, 1 to decide, 2 source-blocked

Read `/chapters/27-pregnancy-and-childbirth/` against `source/book/27-*.md`.

**Needs a decision**

| Tip | Claim | Recorded | Why it needs you |
| --- | --- | --- | --- |
| 27-11 | India has no single maternity insurance; ESIC maternity benefit and care; PM-JAY hospital cover; state schemes; private waiting… | Yes | ESIC: 26 weeks at full wage, 70 days of contributions in the last two contribution periods, extendable by one month on medical advice, Rs 15,000 medical bonus where ESI facilities… |

**Source blocked at verification** — read the text, confirm the hedge, do not re-fetch: `27-3`, `27-14`

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 29 — After a Major Blow

Tips 14 · verified 2026-10-21 · independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239 · claims recorded: 14 clean, 0 to decide, 0 source-blocked

Read `/chapters/29-after-a-major-blow/` against `source/book/29-*.md`.

No flag survived verification for this chapter: every claim row was recorded clean and no editorial note was carried. Read it as a reader and sign off.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 31 — Paths After Eighteen

Tips 17 · verified 2026-10-21 · independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239 · claims recorded: 0 clean, 0 to decide, 0 source-blocked

Read `/chapters/31-paths-after-eighteen/` against `source/book/31-*.md`.

This report carries no claim table (a targeted pass or a narrative verification), so its notes are the whole record. Read `reports/verification/chapter-31.md` before signing off.

**Editorial notes carried in the report**

- 31-15, caveat (JSON line 381): the sentence "the deemed-residency rule for an Indian citizen not liable to tax in any other country whose income above fifteen lakh rupees is deemed resident in section 6(7)" is grammatically tangled. The citation and the substance are right, so this is an editorial note, not a blocking item; a rewrite along the lines of "the deemed-resident rule in section 6(7), for a citizen not…
- 31-1, 31-9: the NDA and CDS age bands, the unmarried condition and the Coast Guard's direct Navik entry were checked against recruitment notifications in the previous audit and are unchanged.
- 31-4: Seva Nidhi, the four-year term and the NSP, Vidya Lakshmi and PM Vidyalaxmi routes are correct; the paramilitary and state-police reservation is stated without a percentage, which is the honest formulation, because the PIB releases that would fix the share are unreadable (403).
- 31-12: the Code on Social Security 2020 gig-worker definition, the Social Security Fund and the 1-2 per cent of turnover capped at 5 per cent of gig-worker payments were confirmed in the previous audit; the Code, not a repealed Act, is cited.
- 31-8, 31-13: education.gov.in returns 403, so the NCTE and TET route and the "no national six-year MBBS bond" claim rest on the statutory framework and prospectus practice rather than a ministry page.
- 31-16, 31-17: MUDRA, CGTMSE, Stand-Up India and PMEGP exist as described, and the negative claims (no fresh-graduate quota in central recruitment; NCC and sports marks in some state police recruitment only) hold.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

### Chapter 33 — Living with Disability

Tips 21 · verified 2026-10-21 · Independent verifier (AI), final delegated verification pass · claims recorded: 21 clean, 0 to decide, 0 source-blocked

Read `/chapters/33-living-with-disability/` against `source/book/33-*.md`.

**Editorial notes carried in the report**

- **33-3 - fixed.** `inPlainWords` now says "independent psychiatric and mental health assessments" (s.89(1)(a)'s pair, not two psychiatrists) and places the capacity review "seven days after a supported admission where the nominated representative consented under section 89(8)". "Every 15 days", "two independent psychiatric assessments" and the "no separate right to a second evaluation after three days" clause are…
- 33-3, sub-section attribution: the consent power is s.89(7) ("the nominated representative may temporarily consent to the treatment plan"); s.89(8) is the duty that follows - record the consent and review capacity every seven days. "Consented under section 89(8)" therefore attaches the sub-section to the wrong step, and the caveat's "the seven-day capacity review of a supported admission under section 89(8)" carries…
- 33-3, discharge: the benefit says "Section 88 covers discharge: a voluntary patient can leave, and a supported patient must be discharged when the grounds end". s.88 is titled "Discharge of independent patients"; the supported-patient rule is s.89(3) ("the patient shall no longer remain in the establishment"), and extension beyond 30 days runs through s.90. The statement is true of the Act as a whole but the…
- 33-3, the Board: Chapter XI ("Mental Health Review Boards") runs from s.73, which constitutes the Boards, to s.84; s.82 is "Powers and functions of Board" and s.83 is the appeal to the High Court. "Sections 73 to 82" is an accurate pointer to constitution and functions, but a reader who needs to appeal should also be sent to s.83. "Section 90 ... 30 to 90 days" is verbatim correct ("limited to a period up to ninety…
- 33-11: "wholly or mainly dependent" is the section's own language, but it is the HUF limb, Explanation (b)(ii). For an individual, Explanation (b)(i) lists the spouse, children, parents, brothers and sisters with no dependency test, so the sentence reads as a condition the section does not impose on the common case. It is conservative rather than generous - nobody is told they qualify when they do not - but it could…
- 33-18: deleting the transitional sentence was safe but it removed a true statement. s.14(2) says "every guardian appointed under any provision of any other law for the time being in force, for a person with disability shall be deemed to function as a limited guardian". The sentence could go back with that citation, which would also answer the reader's practical question about old guardianship orders.
- 33-12: the ss.40-46 range for the accessibility chapter is unverified (s.16(viii) is verified); the substantive claim is the safe one either way.
- 33-1's "Level 5 evidence" and "Level 1/2" phrasing is the review's own scale, not a grade in this book; harmless, but a reader may confuse it with the A/B/C grades.
- 33-7 and 33-9 depend on portals that are client-rendered or on the absence of a scheme; both are hedged correctly.

- [ ] Read in full against the source
- [ ] Numbers, units, grades and citations unchanged from source
- [ ] India figures named and sourced where used
- [ ] Every flag above resolved in the text or accepted with a reason

## Sign-off

| Ch | Reviewer | Date | Verdict | Note |
| --- | --- | --- | --- | --- |
| 01 |  |  | pending / signed off / changes required |  |
| 05 |  |  | pending / signed off / changes required |  |
| 07 |  |  | pending / signed off / changes required |  |
| 08 |  |  | pending / signed off / changes required |  |
| 09 |  |  | pending / signed off / changes required |  |
| 12 |  |  | pending / signed off / changes required |  |
| 13 |  |  | pending / signed off / changes required |  |
| 14 |  |  | pending / signed off / changes required |  |
| 15 |  |  | pending / signed off / changes required |  |
| 16 |  |  | pending / signed off / changes required |  |
| 17 |  |  | pending / signed off / changes required |  |
| 19 |  |  | pending / signed off / changes required |  |
| 23 |  |  | pending / signed off / changes required |  |
| 24 |  |  | pending / signed off / changes required |  |
| 25 |  |  | pending / signed off / changes required |  |
| 27 |  |  | pending / signed off / changes required |  |
| 29 |  |  | pending / signed off / changes required |  |
| 31 |  |  | pending / signed off / changes required |  |
| 33 |  |  | pending / signed off / changes required |  |

A verdict of *changes required* sends the chapter back to draft (`npx tsx scripts/india-status.ts <chapter> draft`) with the change written as an `--issue=` entry, so it reappears in the manifest as an open issue instead of a memory.
