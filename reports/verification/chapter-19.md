# Verification: Chapter 19 - Employment & Work Injury

Verifier: independent-verifier-a45fe80c-adb7-4922-988d-78d56d4d0b53
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/19-employment-and-work-injury.json
Manifest status: draft (recommend checked)

## Method

I read all 24 tips, the claim list in reports/source-packs/chapter-19.md (56 checked claims, the most complete pack in the set), and the older FAIL report at reports/verification/chapter-19.md. The pack's decisive facts are that the four labour codes were brought into force on 21 November 2025 by S.O. 5319(E) to 5322(E), that the Factories Act 1948, Industrial Disputes Act 1947, Employees' Compensation Act 1923, ESIC Act 1948, Payment of Gratuity Act 1972 and Contract Labour Act 1970 were repealed, and that the EPF Act 1952 was not repealed. I re-tested those against the Codes' section text and against PIB and professional-firm commencement alerts.

Sections checked: OSH Code s.25 (8-hour day, 48-hour week), s.32 (leave, 1 day per 20 days after 180 days), s.45 (50 contract workers); Code on Wages s.14 (overtime at twice the rate); Industrial Relations Code s.70(a) and (b) (notice and 15 days per year); Social Security Code s.53 (gratuity after five years) and Chapter VII; Income-tax Act ss.10(10B), 10(10C), 10(10AA) and 89; POSH Act 2013 s.4; Indian Contract Act s.74.

Access failures: indiacode.nic.in returns HTTP 403, so the Code text was read from section-level mirrors that reproduce each section (indeld, sooperkanoon) and corroborated with PIB release titles and law-firm commencement notes; labour.gov.in/labour-codes returns HTTP 403 (Akamai) and pib.gov.in press-release bodies return HTTP 403 (titles and note IDs readable). Crossref resolved 10.1136/oem.60.10.779 (HTTP 200, Kivimaki 2003); the bulk re-check of all 67 chapter DOIs failed (HTTP 400 then 429), so no other DOI in this chapter was individually re-resolved - this chapter cites only that one study DOI.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 19-1 | Four labour codes in force from 21 November 2025; eight-hour day and 48-hour week; overtime at twice the normal rate; the Factories Act 1948 is repealed | OSH Code 2020; Code on Wages 2019; PIB PRID 2192463 | OSH s.25(1)(a); Wages s.14 | 2026-10-21 | yes | Both limits and the double rate are correct. Note: the 48-hour week sits in s.25(1) but not clearly in clause (a); the section is right, the clause letter is loose. |
| 19-2 | Earned leave is 1 day per 20 days worked after 180 days in a calendar year; about 9 days at 180 days and about 15 at 300; no 300% encashment rule | OSH Code 2020 s.32 | s.32 | 2026-10-21 | yes | The 180-day qualifying period and 1-per-20 accrual are correct, as is the arithmetic (9 and 15 days). |
| 19-3 | No statutory probation ladder and no 80% pay rule; the minimum-wage floor applies from day one | IR Code 2020; Code on Wages 2019; state Shops and Establishments Acts | - | 2026-10-21 | yes | Negative claims hold; the Chinese probation ladder and 80% rule are gone. |
| 19-4 | One month's notice or pay in lieu; 15 days' average pay per completed year; gratuity after five years; the Industrial Disputes Act 1947 is repealed | IR Code 2020 s.70(a), (b); SS Code 2020 s.53 | ss.70, 53 | 2026-10-21 | yes | Both Code provisions match, and the chapter correctly says the ID Act is repealed. |
| 19-5 | There is no automatic one month's pay per year of service on resignation | IR Code 2020; contract law | - | 2026-10-21 | yes | Correct negative claim; severance depends on contract, standing orders or a collective agreement. |
| 19-6 | There is no fixed two-months-per-year formula; disputes go under the IR Code; NALSA legal aid is available | IR Code 2020; nalsa.gov.in | - | 2026-10-21 | yes | Correct; NALSA 15100 verified separately (chapter 18). |
| 19-7 | Gratuity and EPF survive resignation; gratuity under SS Code s.53; EPF remains under the EPF Act 1952; state Shops Acts apply | SS Code 2020 s.53; EPF Act 1952 | s.53 | 2026-10-21 | yes | EPF Act 1952 verified as still in force (it was not in the 2025 repeal notification). Note: the benefit field for this tip is only a citation list, not a benefit statement. |
| 19-11 | The Employees' Compensation Act 1923 is repealed; claims now run under SS Code Chapter VII; an ordinary commute is generally not an employment injury | SS Code 2020 Ch. VII; repeal notification | Ch. VII | 2026-10-21 | yes | Correct, and the commute point is properly hedged. |
| 19-12 | Call 112 first after a workplace accident; there is no 48-hour reporting rule; ambulance numbers vary by state | ERSS 112 | - | 2026-10-21 | yes | 112 is the correct all-India emergency number; no 48-hour statutory rule exists. |
| 19-13 | An uninsured employer is still liable for a work injury, under SS Code Chapter VII and OSH Code Chapter IX | SS Code Ch. VII; OSH Code Ch. IX | Ch. VII; Ch. IX | 2026-10-21 | yes | Correct; the employer pays from its own funds where the establishment is not covered. |
| 19-14 | Disability assessment follows ESIC and the SS Code schedules; a private doctor's estimate is not the statutory assessment | ESIC; SS Code 2020 schedules | - | 2026-10-21 | yes | Correct in structure; the schedules do fix the percentage assessments. |
| 19-15 | Death benefits come from ESIC, SS Code Chapter VII, EPF and gratuity | ESIC; SS Code Ch. VII; EPF Act 1952; SS Code s.53 | Ch. VII; s.53 | 2026-10-21 | yes | Correct set of routes. Note: benefit field is a citation list only. |
| 19-16 | POSH Act 2013 s.4 requires an internal committee at establishments with 10 or more employees; India has no general anti-bullying statute | POSH Act 2013 s.4; Kivimaki 2003, DOI 10.1136/oem.60.10.779 | s.4 | 2026-10-21 | yes | The 10-employee threshold and committee are correct; the earlier Nielsen/Xu DOI mismatch is fixed and Crossref resolves the DOI to "Workplace bullying and the risk of cardiovascular disease and depression". |
| 19-18 | Income-tax Act ss.10(10B), 10(10C), 10(10AA) and 89 govern gratuity, VRS, leave encashment and relief; there is no three-times-average-wage exemption | Income-tax Act 1961 | ss.10(10B), 10(10C), 10(10AA), 89 | 2026-10-21 | yes | Section numbers are the correct ones for these exemptions; the invented 3x rule is gone. |
| 19-21 | Grievances go to EPFO and ESIC; EPF and ESIC provisions sit in the SS Code 2020 | EPFO; ESIC; SS Code 2020 | - | 2026-10-21 | yes | Note: "SS Code 2020 (EPF and ESIC provisions)" sits awkwardly with 19-7's statement that the EPF Act 1952 remains in force; suggest "SS Code 2020 read with the EPF Act, 1952". Not a legal error. |
| 19-22 | A non-compete is hard to enforce; s.74 of the Indian Contract Act allows reasonable compensation, not a penalty | Indian Contract Act 1872 s.74 | s.74 | 2026-10-21 | yes | Correct: s.74 gives reasonable compensation and Indian courts read down penalties. |
| 19-24 | The Contract Labour Act 1970 is repealed; OSH Code s.45 applies at 50 or more contract workers; the principal employer is liable | OSH Code 2020 s.45; repeal notification | s.45 | 2026-10-21 | yes | The 50-worker threshold is correct (any day in the preceding 12 months), as is principal-employer responsibility. |

## Banned-term check

- JSON: 0 banned terms - npx tsx scripts/check-chapter.ts 19 reports "PASS: no banned term, CJK character or foreign-jurisdiction term".
- Rendered page: not rendered (no build run). JSON scanned for the banned agency list, CJK characters and China/RMB/yuan/hukou/yibao/dibao: none. The earlier Chinese-law framing (N, N+1, 2N, 48-hour injury rule, 108 ambulance, wcd.nic.in) is gone.

## Safety and editorial check

- No unsupported high-risk claim: 19-7, 19-13, 19-14 and 19-15 all match the Codes as in force after 21 November 2025.
- No invented scheme, number or hotline: no invented scheme or hotline; 112 and NALSA 15100 are real; the yuan-derived severance formulas are gone.
- No direct equivalent recorded where needed: 19-3, 19-5, 19-6, 19-12, 19-17 and 19-20 all say there is no Indian rule of the kind the source chapter assumed.
- Caveats retained: caveats throughout, including the second-opinion point in 19-14 and the contractor-chain point in 19-13.

## Blocking issues

- None. Two notes for the copy editor (not blocking): 19-1 should cite s.25(1) rather than s.25(1)(a) for the 48-hour week; 19-21 should read "SS Code 2020 read with the EPF Act, 1952".

Verdict: PASS
