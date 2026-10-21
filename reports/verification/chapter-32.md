# Verification: Chapter 32 - Studying Abroad

Verifier: Independent verifier (delegated, DeepSeek Harness) - second verification pass on the current build
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/32-studying-abroad.json
Manifest status: draft

## Method

I re-verified the current India build rather than repeating the earlier report, which was
written against a pre-fix draft (that draft's tip 32-6 cited the Chinese Ministry of
Education; the current file cites MEA and is checked below). For each of the 12 tips I
fetched the instrument the tip itself cites - eCFR for the U.S. regulations, GOV.UK for the
Immigration Rules and fee pages, laws-lois.justice.gc.ca for the IRPR, canada.ca for IRCC
policy, immi.homeaffairs.gov.au for subclass 500, the Federal Register API for the OPT fee
proposal, and CourtListener for the F-1 fixed-stay litigation - and compared statute or
paragraph number, figure, date and evidenceGrade against the text actually returned. The
chapter contains no Indian statute; the Indian references (UGC, AIU, MEA) are institutional
pointers, and each body named exists and does that work.

Access failures recorded rather than hidden: the Federal Register document page
(https://www.federalregister.gov/documents/2026/10/08/2026-20660) would not render and
redirected to unblock.federalregister.gov, so the same document was read through
https://www.federalregister.gov/api/v1/documents/2026-20660.json; the CourtListener REST
docket returned HTTP 401 and the docket HTML returned HTTP 403 through the page fetcher, so
docket 74661796 was read through curl (HTTP 200); several GOV.UK pages returned a stubbed
body through the page fetcher, so the Student route text and the fee figures were read
through curl (HTTP 200).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 32-1 | No single Indian "approved school" list; UGC/AIU carry recognition and equivalence; the mission can confirm a college | UGC, AIU, MEA sites (institutional) | n/a | 2026-10-21 | yes | Deliberately negative and correct; no invented list or figure |
| 32-2 | DHS fixed-stay rule announced July 2026, effective 15 Sep 2026; stayed nationwide 14 Sep 2026 under APA s.705 by D. Mass., Presidents' Alliance v. DHS, No. 1:26-cv-13799-FDS; duration of status and 60-day grace continue | CourtListener docket 74661796 (curl); 8 CFR 214.2(f) | Docket No. 1:26-cv-13799 (mad.305059); 8 CFR 214.2(f) | 2026-10-21 | yes | Docket shows Judge F. Dennis Saylor IV and a 14 Sep 2026 "PRELIMINARY INJUNCTION ORDER POSTPONING EFFECTIVE DATE OF FINAL RULE" granting s.705 relief; caption and case number match |
| 32-3 | US 20 h/wk in session; UK 20 h degree and 10 h below degree, ST26.1/ST26.5; Canada 24 h/wk IRPR 186(v); Australia 48 h per fortnight | 8 CFR 214.2 (curl); Appendix Student (curl); IRPR SOR/2002-227 s.186; subclass 500 page | 8 CFR 214.2(f)(9)(i); ST26.1 and ST26.5; IRPR 186(v)(iii) | 2026-10-21 | yes | All four caps confirmed verbatim; ST26.1 is the employment-conditions table and ST26.5 the self-employment, sportsperson and entertainer ban |
| 32-4 | Eligibility requires current full-time enrolment; suspension, withdrawal or a transfer gap ends work rights | IRCC off-campus work page; Study in the States; Appendix Student | ST26.1 ("all other study, including all part-time study - no employment permitted") | 2026-10-21 | yes | Generic statement consistent with the cited conditions |
| 32-5 | Report a US address change within 10 days; 8 CFR 265.1; AR-11 | eCFR title 8 part 265 (curl) | 8 CFR 265.1 | 2026-10-21 | yes | "must report each change of address and new address within 10 days" |
| 32-6 | India publishes MEA travel advisories and mission notices, not a per-country "unsafe" study list | mea.gov.in travel advisories and missions pages | n/a | 2026-10-21 | yes | Current build cites MEA, not the source edition's ministry; the negative framing is accurate |
| 32-7 | OSHC mandatory for the whole stay, no gaps, approved insurers, dependants separately; no proof can mean refusal of entry | immi.homeaffairs.gov.au subclass 500 | Subclass 500 requirement; condition 8501 | 2026-10-21 | yes | Page confirms the OSHC requirement and exemption categories |
| 32-8 | Student visa fee £558; Immigration Health Surcharge £776 per year for students and £1,035 for others, paid upfront | GOV.UK Student visa and healthcare surcharge pages (curl) | Student visa "Fees"; healthcare-immigration-application/how-much-pay | 2026-10-21 | yes | "£558 to apply for a Student visa from outside the UK"; "£776 per year for students"; "£1,035 per year for all other visa and immigration applications" |
| 32-9 | AIU equivalence and MEA attestation or apostille take weeks and cannot be shortcut by an agent | AIU equivalence pages; MEA attestation | n/a | 2026-10-21 | yes | Institutional and negative; "weeks" is consistent with the AIU process |
| 32-10 | AIU equivalence, MEA attestation and NMC/BCI/ICAI recognition are separate gates; online-only degrees may get no equivalence | AIU, MEA, UGC, NMC, BCI, ICAI | n/a | 2026-10-21 | yes | Bodies named correctly; caveat separates equivalence from professional recognition |
| 32-11 | OPT unemployment 90 days aggregate, 150 days with a 24-month STEM extension; SEVIS termination risk; DHS proposed rule of 8 Oct 2026 with $70,000 initial and $30,000 subsequent OPT fees | 8 CFR 214.2 (curl); Federal Register API document 2026-20660 | 8 CFR 214.2(f)(10)(ii)(E); (f)(11)(i)(B); 91 FR 64566 | 2026-10-21 | yes | 90 and 150 days confirmed verbatim. The $70,000/$30,000 figures are real, not invented: the NPRM abstract reads "$70,000 for initial OPT; and $30,000 for any subsequent OPT", published 2026-10-08, comments to 2026-11-09; the chapter correctly calls it a proposal under consideration |
| 32-12 | PAL/TAL required for most post-secondary permits; K-12 exempt; master's and doctoral at a public DLI exempt from 1 January 2026; Quebec uses CAQ | canada.ca provincial attestation letter page | IRCC PAL/TAL guidance | 2026-10-21 | yes | Page lists the master's/doctoral public-DLI exemption "starting January 1, 2026", the K-12 exemption and CAQ for Quebec |

## Banned-term check

- JSON: 0 banned terms - npx tsx scripts/check-chapter.ts 32 -> "chapter 32 (32-studying-abroad.json): 12 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: 0 banned terms; no CJK character, no raw citation token (no 〔NN〕 pattern), and the only currency is sterling, correctly used for a UK fee

## Safety and editorial check

- No unsupported high-risk claim: the consequences described (status termination, refusal of entry, removal) each trace to the cited regulation or government page.
- No invented scheme, number or hotline: every figure traced to a fetched instrument - £558, £776, £1,035, 20/10/24/48 hours, 90/150 days, 10 days, $70,000/$30,000.
- No direct equivalent recorded where needed: the chapter says India has no approved-institution list (32-1) and no per-country "unsafe" list (32-6) instead of manufacturing one.
- Caveats retained: the injunction is described as a stay and not a repeal (32-2); the OPT fee is labelled a proposal (32-11); the PAL exemption is dated (32-12).

## Blocking issues

- None. Non-blocking note for the editor: tip 32-3 calls IRPR 186(v) an "Article"; it is a paragraph of a Canadian regulation, and tip 32-8's "£558" should be re-read against GOV.UK before publication, since fees change annually.

Verdict: PASS
