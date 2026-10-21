# Verification: Chapter 18 - Is Having Kids Worth It

Verifier: independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/18-is-having-kids-worth-it.json
Manifest status: draft
Pass type: targeted re-verification of the three corrections that blocked the previous round (not a fresh full audit)

## Scope of this pass

The previous full audit ended in FAIL on three items: (1) 18-2 named the repealed Maternity Benefit Act, 1961 as the governing statute; (2) every remaining reference to that Act in 18-2 and 18-3 needed replacing with the Code on Social Security, 2020 (Chapter VI); (3) 18-3 stated a one-year maximum penalty and an "Inspector appointed under the Act", where the Code sets six months and 50,000 rupees and the forum is the Inspector-cum-Facilitator under section 72. The same report asked the fixer to verify the coverage sentence against the Code's applicability provision. A fixer has since edited the shipped JSON, and also narrowed the coverage clause to the First Schedule and dropped an "ESIC-covered establishments" limb. This pass confirms all of that in the built file and checks the edits for new error. The other five tips were not re-audited; their previous findings are carried forward as notes.

## Method

I read the corrections in the shipped file, data/en-in/chapters/18-is-having-kids-worth-it.json (7 tips, manifest status draft), not in any override copy, and searched the file for every remaining occurrence of "Maternity Benefit Act" to classify each one as historical or current. Instrument text was read section by section, because the corrections now put the weight on the Code:

- Code on Social Security, 2020, section 72 (power of Inspector-cum-Facilitator to direct payments) - https://www.advocatekhoj.com/library/bareActs/codeonsocialsecurity/72.php (HTTP 200), sub-sections (1) to (4) in full.
- The same Code, section 133 (penalty for failure to pay contributions, etc.) - https://indiankanoon.org/doc/73373021/ (HTTP 200), clauses (a) to (q) and penalty limbs (i) to (iii).
- Section 60 (right to payment, including the 26-week and 12-week periods and the work-from-home option), section 66 (nursing breaks), section 67 (creche) and section 68 (dismissal for absence during pregnancy) - AdvocateKhoj bare-act pages, HTTP 200.
- First Schedule to the Code, applicability of Chapter VI - https://ziplaw.in/code-on-social-security-2020/section-schedule-i/ (HTTP 200), read with section 1(4) ("The applicability of the Chapters specified in columns (1) and (2) of the First Schedule shall ... be such as is specified in corresponding entry in column (3)").
- Commencement of the four labour codes on 21 November 2025 - https://webiis08.mondaq.com/india/employee-benefits-compensation/1785848/ (HTTP 200): "On 21 November 2025, the Ministry of Labour and Employment notified India's four Labour Codes ... bringing ... into force."

I then ran `npx tsx scripts/check-chapter.ts 18`: exit 0, "chapter 18 (18-is-having-kids-worth-it.json): 7 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## Corrections checked

| Item | Correction previously required | What the built JSON now says | How verified | Result |
| --- | --- | --- | --- | --- |
| (d) 18-2, 18-3 | Name Chapter VI of the Code on Social Security, 2020 (ss.59-72), in force 21 November 2025, replacing the Maternity Benefit Act, 1961; leave no current-tense reference to the repealed Act | Line 52: "If your establishment is covered by Chapter VI of the Code on Social Security, 2020 (sections 59 to 72), in force from 21 November 2025, which replaced the Maternity Benefit Act, 1961, you get 26 weeks ...". Line 55 source: "Code on Social Security, 2020, Chapter VI (sections 59 to 72), in force from 21 November 2025, replacing the Maternity Benefit Act, 1961 ...". Line 77 (18-3) opens "Under the Code on Social Security, 2020 (Chapter VI) ..." | Fetch: commencement confirmed on 21 November 2025; Chapter VI runs to section 72. Text search: the file contains exactly two "Maternity Benefit Act, 1961" strings, both historical ("which replaced ...", "replacing ...") | fixed |
| (e) 18-3 | Penalty of up to six months and/or a fine up to 50,000 rupees under s.133; forum is the Inspector-cum-Facilitator under s.72, who may direct payment or withdrawal of the dismissal order | Line 77: "... the penalty is imprisonment of up to six months, a fine of up to ₹50,000, or both (section 133)." Line 78: "... a route to complain to the Inspector-cum-Facilitator under section 72, who may direct the employer to pay the amount due or to withdraw a dismissal order ..." | Fetch: s.133(d) covers dismissing, discharging or reducing in rank a woman employee contrary to Chapter VI, s.133(i) covers failure to provide maternity benefit, and limb (iii) for clauses (d), (f), (i), (k), (l) and (o) is "imprisonment for a term which may extend to six months or with a fine which may extend to fifty thousand rupees, or with both". s.72(1) allows the complaint to the Inspector-cum-Facilitator, s.72(2)(a) allows a direction that payment be made, s.72(2)(b) allows "such orders as he deems just and proper" on a discharge or dismissal | fixed |
| (f) 18-2 caveat | Verify the coverage sentence against the Code's applicability provision; the fixer also narrowed it to the First Schedule and removed an "ESIC-covered establishments" limb - say whether that is accurate | Line 56: "Chapter VI applies to every factory, mine or plantation, including one belonging to the Government, and to every shop or establishment in which ten or more employees are employed or were employed on any day of the preceding twelve months; the appropriate Government may notify other shops or establishments." | Fetch: the First Schedule entry for Chapter VI reads "(a) to every establishment being a factory, mine or plantation including any such establishment belonging to Government; and (b) to every shop or establishment in which ten or more employees are employed, or were employed, on any day of the preceding twelve months; and such other shops or establishments notified by the appropriate Government" | fixed and accurate |

## On the ESIC limb (item f)

Dropping the "ESIC-covered establishments" limb is correct, and the narrowed clause is now close to verbatim. Chapter VI's reach is fixed by the First Schedule, which keys it to the type of establishment and a ten-employee headcount. It does not key it to Employees' State Insurance coverage: Chapter IV and its own First Schedule row govern ESIC applicability (ten or more persons, other than a seasonal factory, with the hazardous-occupation and plantation options), and the two chapters are separate. A shop with ten or more employees is inside Chapter VI whether or not its staff are insured persons, and a covered factory is inside Chapter VI whether or not it is ESIC-covered. So a clause that made Chapter VI depend on ESIC coverage would have been both narrower and wrong. The replacement text also keeps the two details a reader needs: the Government-establishment inclusion and the power of the appropriate Government to notify other shops or establishments.

## What was re-read because the corrections rest on it

Because 18-2 now cites the Code rather than the repealed Act, the substantive figures in the same tip were re-read in the Code: s.60(3) sets the maximum at 26 weeks, of which not more than eight precede the expected date, with 12 weeks (not more than six before delivery) for a woman with two or more surviving children; s.60(4) gives 12 weeks to a woman who legally adopts a child below three months and to a commissioning mother; s.60(5) lets the employer allow work from home after the benefit on terms the employer and woman agree; s.66 gives two nursing breaks until the child is 15 months; s.67 requires a creche at 50 employees; s.68 makes dismissal during or on account of the absence unlawful. Every figure in 18-2, 18-3's benefit and 18-3's caveat matches those provisions.

## Confirmed by text only

- The 18-2 caveat's second half ("If your workplace falls outside it ...", the two-or-more-surviving-children 12 weeks, the JJ Act 2015 and Adoption Regulations 2022 route) is unchanged and consistent with the Code sections read above.
- 18-3's title, "An employer cannot cut your pay or dismiss you because of pregnancy, childbirth or breastfeeding", is supported by s.68(1), which makes discharge or dismissal during or on account of the absence unlawful and bars varying conditions of service to the woman's disadvantage.
- NALSA helpline 15100 in the 18-3 caveat was confirmed on nalsa.gov.in in the previous audit and the sentence is unchanged.
- Every caveat in the chapter that states a grade matches the tip's own evidenceGrade (checked across all 7 tips).

## Access failures

- indiacode.nic.in returns HTTP 403 on every handle and bitstream, so the Code was read on AdvocateKhoj, Indian Kanoon and a Schedule mirror.
- pib.gov.in returns HTTP 403 (Akamai "Access Denied").
- labour.gov.in returns HTTP 403, and the ministry pages that host the commencement notification are unreachable to this verifier; the 21 November 2025 date therefore rests on a law-firm client note reproduced on Mondaq, not on the gazette notification itself.
- incometax.gov.in returns HTTP 200 on its front page but no usable statute text; mohfw.gov.in returned 403 in the previous round and was not needed this time.

## Notes carried forward (non-blocking)

- 18-3, benefit: "who may direct the employer ... to withdraw a dismissal order" is a fair description of the remedy a reader can expect, but s.72(2)(b) actually says the Inspector-cum-Facilitator "may pass such orders as he deems just and proper". If the sentence is ever revisited, "may order the employer to take her back" would track the statute more exactly. Not a factual error, so not blocking.
- 18-2, plain words: "The employer may also let you work from home after the 26 weeks, on terms you both agree" is s.60(5), and the "may" is correct - the provision is enabling, not a right.
- 18-7: the fecundability ratios, the miscarriage figures, the ART (Regulation) Act 2021 and the PCPNDT Act 1994 were confirmed in the previous audit and are unchanged.
- 18-1, 18-5: PM-JAY, ICDS, PM POSHAN, PMMVY and the absence of a universal child benefit were confirmed in the previous audit and are unchanged.

## Banned-term check

- JSON: 0 banned terms
- `npx tsx scripts/check-chapter.ts 18`: exit 0, "chapter 18 (18-is-having-kids-worth-it.json): 7 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## New blocking items

None found in this pass. The repealed-Act references, the penalty, the forum and the coverage clause are all correct in the built file, and the ESIC limb was rightly removed.

Verdict: PASS
