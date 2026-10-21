# Verification: Chapter 33 - Living with Disability

Verifier: Independent verifier (AI), final delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/33-living-with-disability.json (21 tips, rewriteStatus: draft)
Manifest status: draft, tier A, 21 tips, bannedTerms 0, openIssues ["Independent verification pending"]

## Method

This is the final pass on this chapter. It re-verifies the **current** JSON after the fix round,
not the text the previous report described. The uncommitted diff of that round touches six tips
here: 33-3 (`inPlainWords` and `caveats`, the blocking fix), 33-4 (caveat, District Disability
Rehabilitation Centre), 33-11 (`benefit`), 33-17 (caveat), 33-18 (`inPlainWords`) and 33-21
(caveat). All six were re-read in the shipped file, and the rest of the chapter was re-read for
the usual defects: repealed or foreign statutes, Chinese institutions or benefit categories,
invented amounts and hotlines, misquoted instruments, unconverted currency and raw markup.

Instruments consulted this pass:

- **Mental Healthcare Act, 2017** - s.89 read in full from https://indiankanoon.org/doc/63137536/
  (HTTP 200) and re-checked clause by clause: s.89(1)(a) ("independently examined on the day of
  admission or in the preceding seven days, by one psychiatrist and the other being a mental
  health professional or a medical practitioner"), s.89(2) (the admission "shall be limited to a
  period of thirty days"), s.89(3) (once the person no longer meets the criteria "the patient
  shall no longer remain in the establishment"), s.89(7) (the nominated representative "may
  temporarily consent to the treatment plan"), s.89(8) ("In case where consent has been given
  under sub-section (7) ... review the capacity of the patient to give consent every seven
  days"), s.89(9) (report to the Board within three days for a woman or a minor, seven days
  otherwise), s.89(12) (continuing review), s.89(15) (no readmission within seven days of
  discharge).
- **Mental Healthcare Act, 2017, whole Act** - https://indiankanoon.org/doc/14507371/ (HTTP 200;
  body text of about 8,000 lines). Read for the sections 33-3's benefit cites: s.4 ("Capacity to
  make mental healthcare and treatment decisions"), s.5 ("Advance directive"), s.14 ("Appointment
  and revocation of nominated representative"), s.73 ("Constitution of Mental Health Review
  Boards", opening Chapter XI, "Mental Health Review Boards"), s.82 ("Powers and functions of
  Board"), s.88 ("Discharge of independent patients"), s.90 (heading "... beyond thirty days
  (supported admission beyond thirty days)", with the admission "limited to a period up to
  ninety days in the first instance").
- **Income-tax Act, 1961** - s.80DD read at https://indiankanoon.org/doc/1377297/ (HTTP 200).
  Checked: s.80DD(1) deduction of "seventy-five thousand rupees", the proviso raising it to "one
  hundred and twenty-five thousand rupees" "where such dependant is a person with severe
  disability", and the Explanation, whose (b)(i) limb lists the individual's dependants (spouse,
  children, parents, brothers and sisters) and whose (b)(ii) limb covers "a member of the Hindu
  undivided family, dependant wholly or mainly on such individual or Hindu undivided family for
  his support and maintenance".
- **Rights of Persons with Disabilities Act, 2016** - gazette text read offline (converted copy of
  the legislative.gov.in PDF retrieved in the previous pass): s.13 (legal capacity), s.14(1)
  (limited guardian, with the proviso that an order for total support "shall be reviewed by the
  Court or the designated authority"), s.14(2) ("every guardian appointed under any provision of
  any other law for the time being in force, for a person with disability shall be deemed to
  function as a limited guardian"), and the Explanation defining limited guardianship.
- **DOI records** - the fix round changed no evidence line in this chapter, so no new DOI had to
  be read; the nine the chapter cites all resolved at https://api.crossref.org/works/{doi} in the
  previous same-day pass and are carried unchanged.
- **Numeric claims** - the population figures behind 33-2, 33-5 and 33-21 were read in the
  publisher abstracts through the Europe PMC REST API in the previous pass and are unchanged in
  this one.
- `npx tsx scripts/check-chapter.ts 33` returns PASS, exit 0 (21 tips), re-run against the
  current file.

Amounts and scheme parameters already read off depwd.gov.in, swavlambancard.gov.in,
nationaltrust.nic.in and the Income-tax Act sections are marked "carried" below: they were not
re-fetched in this pass and the URLs are unchanged.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 33-1 | Autonomic dysreflexia: sit the person upright, loosen clothing, remove the trigger, call 112 | Krassioukov 2009, Arch Phys Med Rehabil | 90(4):682-695; DOI 10.1016/j.apmr.2008.10.017 | 2026-10-21 | yes | DOI resolves; the three immediate actions are consensus, and the caveat correctly says so |
| 33-2 | Suicide risk five times the general population, more than 90 per cent in the first ten years; Tele-MANAS 14416 | Savic 2018, Spinal Cord; MoHFW | 56(1):2-6; abstract | 2026-10-21 | yes | 62.5 vs 12.2 per 100,000 and 91 per cent in the first decade match the abstract; 14416 is the correct national number |
| 33-3 | Supported admission up to 30 days on the nominated representative's application "but only after independent psychiatric and mental health assessments"; the capacity review "follows seven days after a supported admission where the nominated representative consented under section 89(8)"; the Board must review the admission | MHA 2017 s.89 | s.89(1)(a), (2), (7), (8), (9), (12) | 2026-10-21 | yes | **Fixed.** The examining pair now matches s.89(1)(a), and "every 15 days" is gone; the caveat now also conditions the review on a supported admission and cites s.89(8). Two precision points remain - the consent power is s.89(7) and s.88 is not the supported-patient discharge rule - see notes |
| 33-4 | Caregiver strain raises mortality about 63 per cent; caveat: local disability associations or a District Disability Rehabilitation Centre for respite care | Schulz 1999, JAMA; DEPwD | 282(23):2215-2219; DDRC programme index | 2026-10-21 | yes | RR 1.63 matches; "civil affairs bureaus" is gone and the DDRC is a real Department of Empowerment of Persons with Disabilities programme |
| 33-5 | Pressure-relieving cushion and daily ischial/sacral checks for long-term wheelchair users | Brienza 2010, J Am Geriatr Soc | 58(12):2308-2314; abstract | 2026-10-21 | yes | n=232, ischial/trochanteric ulcers 8/119 vs 1/113, P=.04; caveat flags the marginal P |
| 33-6 | No cure claims for paralysis, blindness or deafness; RPwD 2016, Consumer Protection Act 2019, NMC, CDSCO | RPwD 2016; CPA 2019; NMC; CDSCO | s.3 (RPwD); CPA 2019 | 2026-10-21 | yes | Regulators are all Indian; instrument text carried from the earlier pass |
| 33-7 | UDID is the single card; a 40 per cent benchmark unlocks most schemes; the pension is state-funded | swavlambancard.gov.in; DEPwD; RPwD s.34 | UDID portal | 2026-10-21 | yes | Portal live; steps are client-rendered (carried); 40 per cent benchmark and state-funded pension are accurate |
| 33-8 | ADIP slabs (100 per cent to Rs 22,500; 50 per cent to Rs 30,000), device ceilings, Niramaya | DEPwD ADIP; National Trust Niramaya | ADIP guidelines; Niramaya | 2026-10-21 | yes | Carried from the earlier pass; amounts consistent with the scheme pages |
| 33-9 | No central home-modification subsidy; some states and municipalities help | DEPwD schemes index | schemes and services | 2026-10-21 | yes | Negative claim, correctly hedged; a negative cannot be proved by fetch |
| 33-10 | Four per cent reservation in government posts; equal-opportunity policy; UDID | RPwD 2016 s.34 | s.34 | 2026-10-21 | yes | "not less than four per cent" is verbatim |
| 33-11 | Section 80U: Rs 75,000, or Rs 1,25,000 for severe disability; section 80DD the same two amounts for a dependant, who "must be wholly or mainly dependent on that person" | Income-tax Act 1961 ss.80U, 80DD | s.80DD(1) and proviso; Explanation (b)(i), (b)(ii) | 2026-10-21 | yes | Amounts verified verbatim this pass. "Wholly or mainly dependent" is the section's own wording but it is the HUF limb, Explanation (b)(ii); for an individual, (b)(i) lists the qualifying relations with no dependency test - see notes |
| 33-12 | Public transport must be made accessible; free travel is a state concession, not a national right | RPwD 2016 s.16(viii); ss.40-46 | s.16(viii) verified | 2026-10-21 | yes | s.16(viii) transport plus attendant verified; the ss.40-46 range was not fetched - see notes |
| 33-13 | Exam boards must give reasonable accommodation on request with the certificate | RPwD 2016 s.16; CBSE; NTA | s.16 | 2026-10-21 | yes | Duty verified; the CBSE/NTA bulletins themselves were not fetched |
| 33-14 | School is a right under the RTE Act and RPwD s.16; home-based education is the fallback | RPwD ss.16-17; RTE 2009 | ss.16, 17 | 2026-10-21 | yes | education.gov.in 403s this session; RTE 6-14 is not disputed |
| 33-15 | No separate disability licence: ordinary RTO test, Form 1/1A, adaptation recorded | Parivahan/MoRTH | learner and permanent licence route | 2026-10-21 | yes | Route is correct; portal not re-fetched in this pass |
| 33-16 | Organised inpatient rehabilitation beats dispersed care (OR 0.77); more is not always better | Langhorne 2020 CD000197; AVERT 2015 | 386(9988):46-55 | 2026-10-21 | yes | Both DOIs resolve; "more is not always better" is the AVERT result and the caveat says so |
| 33-17 | Hearing aids for hearing now, not to prevent dementia; caveat: reasonable accommodation under RPwD, and see the driving item | ACHIEVE 2023, Lancet | 402(10404):786-797 | 2026-10-21 | yes | The "(C5)" and listening-test phrasing are gone; the caveat now points to the exam item and the driving item, both of which exist |
| 33-18 | No plenary declaration; limited guardianship with support, total support exceptional and reviewed; the "every guardian appointed before the Act" deeming sentence is deleted | RPwD 2016 s.14 | s.14(1), s.14(2), Explanation | 2026-10-21 | yes | The sentence is gone, so nothing unverified ships. But s.14(2) does deem every guardian appointed under any other law to function as a limited guardian, so the deleted sentence was true - reinstatement with the citation is recommended, see notes |
| 33-19 | A guardian is not automatically liable for harm the adult causes; the adult's own assets answer | RPwD 2016; general law | s.14 context | 2026-10-21 | yes | General-law account, correctly flagged as not advice on a case |
| 33-20 | Discrimination remedy: RPwD ss.20-21, state commissioner, labour court, grievance officer | RPwD 2016 ss.20-21 | ss.20, 21 | 2026-10-21 | yes | Remedies are the ones the Act provides |
| 33-21 | Neurogenic bladder: shared decision with the urologist; avoid unattended long-term indwelling catheter | Savic 2017, Spinal Cord; Weld 2000; EAU | 55(10):891-897 | 2026-10-21 | yes | 11.5 per cent genitourinary share matches; the EAU item is retained and the caveat now says "Item 1" where it used to say "Rule 1" |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

Both chapter files were parsed directly rather than only through the checker. Zero hits for
China|Chinese|mainland|PRC, RMB|yuan|CNY|Renminbi, the yen/yuan sign, CJK (U+3000-U+303F,
U+3400-U+4DBF, U+4E00-U+9FFF, U+F900-U+FAFF, U+FF00-U+FFEF), "civil affairs", \bC5\b,
gaokao|listening test|foreign-language, and the foreign regulators NMPA|SFDA|State Council|hukou|
yibao|dibao. A currency sweep of every string in every tip of both chapters 33 and 34 returned
zero hits for the dollar sign, "dollar", "USD", the rupee, yen, euro and pound signs. No raw
markup (angle-bracket tags, asterisk emphasis, TODO/FIXME) and no unstripped template tokens. The
rendered page was not rebuilt in this pass: the page text is generated from these JSON strings,
and the JSON is clean.

## Safety and editorial check

- No unsupported high-risk claim: 33-1, 33-5, 33-16, 33-17 and 33-21 each carry a grade caveat
  proportionate to the evidence, and 33-17 separates the primary ACHIEVE result from the subgroup
  claim. 33-3's detention safeguard is now stated at the period the Act actually uses.
- No invented scheme, number or hotline: the hotline (112), Tele-MANAS 14416, the ADIP slabs, the
  Rs 75,000/Rs 1,25,000 deductions, the four per cent quota and the UDID thresholds all trace to
  an instrument or a scheme page, and the DDRC cited in 33-4 exists. The invented 15-day review
  that the previous report blocked is no longer in the chapter, and no replacement figure was
  invented.
- No direct equivalent recorded where needed: 33-12 states there is no national free-travel
  right, 33-9 that there is no central home-modification grant, 33-17 that the dementia benefit
  is unproven, and 33-18/33-19 that Indian guardianship is limited rather than a plenary power of
  attorney. These are the places where a US or Chinese equivalent would have been smuggled in,
  and none was.
- Caveats retained: every A/B tip keeps its caveat; 33-4 flags that the confidence interval
  touches 1.00, 33-5 that the P value is marginal, 33-16 that the trials are stroke-only, and
  33-11 that the new tax regime withdraws most deductions.

## Blocking issues

None this round. The single blocking item the previous report raised against this chapter is
fixed in the shipped file:

- **33-3 - fixed.** `inPlainWords` now says "independent psychiatric and mental health
  assessments" (s.89(1)(a)'s pair, not two psychiatrists) and places the capacity review "seven
  days after a supported admission where the nominated representative consented under section
  89(8)". "Every 15 days", "two independent psychiatric assessments" and the "no separate right
  to a second evaluation after three days" clause are all gone, so the main text no longer
  contradicts its caveat. The caveat now conditions the review on a supported admission and cites
  s.89(8), and it keeps the complaint route (medical superintendent, then the State Mental Health
  Authority and the Review Board).

## Non-blocking notes

- 33-3, sub-section attribution: the consent power is s.89(7) ("the nominated representative may
  temporarily consent to the treatment plan"); s.89(8) is the duty that follows - record the
  consent and review capacity every seven days. "Consented under section 89(8)" therefore
  attaches the sub-section to the wrong step, and the caveat's "the seven-day capacity review of
  a supported admission under section 89(8)" carries no consent qualifier, though the
  `inPlainWords` does. A lawyer's edit: "where the representative consented under section
  89(7)" and "the section 89(8) review". The substance - seven days, on a supported admission,
  conditional - is right.
- 33-3, discharge: the benefit says "Section 88 covers discharge: a voluntary patient can leave,
  and a supported patient must be discharged when the grounds end". s.88 is titled "Discharge of
  independent patients"; the supported-patient rule is s.89(3) ("the patient shall no longer
  remain in the establishment"), and extension beyond 30 days runs through s.90. The statement is
  true of the Act as a whole but the citation covers only the voluntary half.
- 33-3, the Board: Chapter XI ("Mental Health Review Boards") runs from s.73, which constitutes
  the Boards, to s.84; s.82 is "Powers and functions of Board" and s.83 is the appeal to the High
  Court. "Sections 73 to 82" is an accurate pointer to constitution and functions, but a reader
  who needs to appeal should also be sent to s.83. "Section 90 ... 30 to 90 days" is verbatim
  correct ("limited to a period up to ninety days in the first instance").
- 33-11: "wholly or mainly dependent" is the section's own language, but it is the HUF limb,
  Explanation (b)(ii). For an individual, Explanation (b)(i) lists the spouse, children, parents,
  brothers and sisters with no dependency test, so the sentence reads as a condition the section
  does not impose on the common case. It is conservative rather than generous - nobody is told
  they qualify when they do not - but it could deter a valid claim and should be scoped to an HUF
  or dropped.
- 33-18: deleting the transitional sentence was safe but it removed a true statement. s.14(2)
  says "every guardian appointed under any provision of any other law for the time being in
  force, for a person with disability shall be deemed to function as a limited guardian". The
  sentence could go back with that citation, which would also answer the reader's practical
  question about old guardianship orders.
- 33-12: the ss.40-46 range for the accessibility chapter is unverified (s.16(viii) is verified);
  the substantive claim is the safe one either way.
- 33-1's "Level 5 evidence" and "Level 1/2" phrasing is the review's own scale, not a grade in
  this book; harmless, but a reader may confuse it with the A/B/C grades.
- 33-7 and 33-9 depend on portals that are client-rendered or on the absence of a scheme; both
  are hedged correctly.

## Access failures

| Target | Failure |
| --- | --- |
| https://www.indiacode.nic.in/ | 403 to this session (as in the earlier passes); statutes were read from Indian Kanoon instead |
| https://www.incometax.gov.in/, https://www.incometaxindia.gov.in/ | 403; the 80U/80DD amounts are carried from the Act text read here and in the earlier pass |
| https://www.education.gov.in/ | 403 (Akamai "Access Denied") |
| https://depwd.gov.in/ (direct page fetches) | "TypeError: fetch failed" from the fetch tool; the DDRC programme was confirmed from the site index entry returned by search, not from the page body |
| https://legislative.gov.in/sites/default/files/*.pdf (MHA 2017, RPwD A2016-49_1) | returned a 4,660-byte HTML page instead of a PDF; the RPwD text was therefore read from the converted copy kept offline |

Only this report was written. No chapter JSON, override, manifest, openspec, src, script, dist or
data/en file was modified, and no git state was changed.

Verdict: PASS
## Post-PASS corrections (coordinator, 2026-10-21)

Applied after the PASS verdict, using this report's own precision notes:

- 33-3: consent power corrected to section 89(7); section 89(8) now described as the review that follows it.
- 33-3: benefit now distinguishes section 88 (discharge of a voluntary patient) from section 89(3) (a supported patient must no longer remain once the grounds end).
- 33-18: reinstated the deeming clause with its citation, "Section 14(2) also deems every guardian appointed under any other law to function as a limited guardian."

Rebuilt from data/en-in/overrides/33.json; regenerated file matched by hand with zero field differences; check-chapter PASS.
