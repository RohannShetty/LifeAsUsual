# Verification: Chapter 29 - After a Major Blow

Verifier: independent-verifier-a45fe80c-adb7-4922-988d-78d56d4d0b53
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/29-after-a-major-blow.json
Manifest status: draft (recommend checked)

## Method

I read all 14 tips, the claim list in reports/source-packs/chapter-29.md, and the older PASS report at reports/verification/chapter-29.md, then re-tested its conclusions against the current text. Because the chapter is literature-led, the main instruments were the Crossref API for the cited studies and government sites for the two helplines; the legal claims were checked against the Insurance Act 1938 s.45, the ESI Act definition of employment injury, and Hindu succession practice.

Crossref resolved eight DOIs cleanly (HTTP 200), including Mostofsky 2012 (10.1161/CIRCULATIONAHA.111.061770), Fang 2012 (10.1056/NEJMoa1110307), Erlangsen 2017 (10.1001/jamapsychiatry.2017.0226) and Kivimaki 2003. A later bulk re-check of all 67 DOIs in the five chapters failed wholesale (HTTP 400 from URL-encoding the DOI slash, then HTTP 429 rate limiting), so the remaining studies (Roelfs, Moon, Shor, Li, Lundorff, Prigerson, Shear, Currier, Stroebe, Sbarra, Lewis, Bisson, Rose, Mayou) were not individually re-resolved and are not claimed as verified here.

Access failures: telemanas.mohfw.gov.in failed to fetch (TypeError) and 14416 was confirmed from the PIB launch note for the National Tele Mental Health Programme (10 October 2022); elderline.gov.in failed DNS (ENOTFOUND) and Elderline 14567 was confirmed from PIB press release 1742375 (launched 1 October 2020); indiacode.nic.in returns HTTP 403, so the Insurance Act s.45 wording was checked through section-level mirrors; wcd.gov.in was readable (Child Helpline 1098, Mission Vatsalya, integrated with ERSS-112).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 29-1 | Heart-attack risk about 21.1 times higher on the first day of bereavement; UK 30-day incidence ratio 2.20; call 112 | Mostofsky 2012, Circulation; Carey 2014 | - | 2026-10-21 | yes | Mostofsky DOI resolved 200; 112 is the correct ERSS number. Carey not individually re-resolved. |
| 29-2 | Suicide risk about 12.6 times higher in the week after a cancer diagnosis | Fang 2012, NEJM | - | 2026-10-21 | yes | DOI resolved 200; the immediate post-diagnosis risk matches the paper. |
| 29-3 | Unemployment carries an average HR of 1.63 for all-cause mortality across 42 studies; keep ESIC or state cover active; register and apply for unemployment benefits | Roelfs 2011, Social Science & Medicine | - | 2026-10-21 | yes | The 1.63 HR and 24% attenuation are the published findings. Note: "register as unemployed and apply for unemployment benefits" has no named Indian scheme behind it - India has no universal unemployment benefit, only ESIC's scheme for insured workers who lose their jobs and some state schemes. The caveat defers details to another section, so nothing is invented, but naming the route would be clearer. |
| 29-4 | Suicide-bereaved spouses carry an incidence rate ratio of about 1.8 (men) and 1.7 (women); Tele-MANAS 14416 | Erlangsen 2017, JAMA Psychiatry | - | 2026-10-21 | yes | DOI resolved 200; 14416 confirmed by PIB (site fetch failed). |
| 29-5 | Mortality about 1.41 times higher in the first six months of widowhood | Moon 2011; Shor 2012 | - | 2026-10-21 | yes | Both are the standard sources for this effect size; not individually re-resolved. |
| 29-6 | Living alone raises cardiovascular risk (REACH); India has no single statutory visiting scheme; Elderline 14567; ASHA and ward office are the practical routes | Udell 2012; elderline; ASHA | - | 2026-10-21 | no | Blocking on two counts: the caveats end with raw leftover markers "[0.03] [13.2] [12.3]", and the cited DOI 10.1001/archinternmed.2011.1636 returns HTTP 404 from Crossref (the correct DOI is 10.1001/archinternmed.2012.2782). The Elderline attribution "under the MWPSC Act, 2007" is loose - it is a Ministry of Social Justice programme, not a statutory body. |
| 29-7 | Parental death before age 18 carries a mortality ratio of about 1.50 | Li 2014, PLoS Medicine | - | 2026-10-21 | yes | Not individually re-resolved; figure consistent with the paper as reported in the pack. |
| 29-8 | Prolonged grief affects about 9.8% of bereaved people | Lundorff 2017; Prigerson 2009; Shear 2005 | - | 2026-10-21 | yes | 9.8% is the pooled prevalence in Lundorff's meta-analysis. |
| 29-9 | Routine counselling is not universally effective; targeted support is better | Currier 2008; Wittouck; Bonanno; Stroebe | - | 2026-10-21 | yes | Consistent with the cited reviews. |
| 29-10 | Divorce is associated with higher mortality; keep ESIC or PM-JAY cover active | Sbarra 2011; ESIC; PM-JAY | - | 2026-10-21 | yes | Correct, and the cover advice is accurate. |
| 29-11 | Tele-MANAS 14416; Childline 1098; District Mental Health Programme | PIB NTMHP note; wcd.gov.in | - | 2026-10-21 | yes | 14416 and 1098 both real; 1098 now routes through Mission Vatsalya and is integrated with ERSS-112. |
| 29-12 | There is no statutory three-month rule for grief or returning to work; the three-month figure is an author guideline | - | - | 2026-10-21 | no | Blocking: the caveat says "which is why the evidence grade is C" while the tip's evidenceGrade field is "B" and the benefit calls it "moderate". The negative legal claim itself is correct. |
| 29-13 | Insurance Act 1938 s.45 bars an insurer from challenging a policy after three years on misstatement; a suicide exclusion is separate; self-harm is not an employment injury under ESIC; debts come out of the estate | Insurance Act 1938 s.45; ESI Act definition of employment injury | s.45 | 2026-10-21 | yes | s.45's three-year bar is quoted correctly and the two rules are properly separated. The ESIC point follows from "arising out of and in the course of employment"; statute text itself was not readable at indiacode (403). |
| 29-14 | Trauma debriefing is not recommended; watch for PTSD; NICE NG116 | Lewis 2020; Bisson 2013; Rose 2002; Mayou 2000; NICE NG116 | - | 2026-10-21 | no | Blocking: the caveat claims work-related PTSD for first responders "is cataloged as a compensable occupational illness (see Chapter 19, Rule 10)". Chapter 19 rule 10 is about dust, noise and chemicals, and the ESIC/Social Security Code occupational-disease schedules do not list PTSD. |

## Banned-term check

- JSON: 0 banned terms - npx tsx scripts/check-chapter.ts 29 reports "PASS: no banned term, CJK character or foreign-jurisdiction term".
- Rendered page: not rendered (no build run). JSON scanned for the banned agency list, CJK characters and China/RMB/yuan/hukou/yibao/dibao: none. The "[0.03] [13.2] [12.3]" hit is numeric residue from the source, not a banned term or CJK.

## Safety and editorial check

- No unsupported high-risk claim: 29-3, 29-4, 29-10 and 29-11 check out; 29-14's compensability sentence is unsupported and is blocking.
- No invented scheme, number or hotline: 14416, 1098, 112 and 14567 are all real; no invented hotline. The unemployment-benefit sentence names no scheme, so nothing is fabricated, but it is vaguer than the rest of the chapter.
- No direct equivalent recorded where needed: 29-6 says India has no single statutory visiting scheme and 29-12 says there is no statutory three-month rule - both correct.
- Caveats retained: caveats present on every tip; 29-6 and 29-12 caveats carry the defects listed above.

## Blocking issues

- 29-6 (caveats): the final sentence ends with raw source markers - "...provide the greatest protective benefit. [0.03] [13.2] [12.3]". Delete the bracketed tokens.
- 29-6 (sources): DOI 10.1001/archinternmed.2011.1636 returns HTTP 404. Replace with the correct DOI for Udell 2012, "Living Alone and Cardiovascular Risk in Outpatients at Risk of or With Atherothrombosis": 10.1001/archinternmed.2012.2782.
- 29-12 (caveats vs evidenceGrade): the caveat says the three-month figure is why "the evidence grade is C", but the field is "B" and the benefit calls it "moderate". Make the text and the grade agree (regrade to C, or rewrite the caveat to match B).
- 29-14 (caveats): "Work-related PTSD for first responders ... is cataloged as a compensable occupational illness (see Chapter 19, Rule 10)" is unsupported - chapter 19 rule 10 covers dust, noise and chemicals, and neither the ESIC nor the Social Security Code occupational-disease schedule lists PTSD. Delete the sentence or replace it with an accurate statement that compensation depends on the state's schedule and medical board.

Verdict: FAIL
