# Verification: Chapter 01 - Do Not Die Early

Verifier: independent verifier (round 6; re-derived against the source edition)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/01-do-not-die-early.json
Manifest status: `data/en-in/manifest.json` chapter "1": status draft, tier A, tips 48, verifier null, verifiedAt null, sourceCount 0, humanReview pending, openIssues ["Independent verification pending"], bannedTerms 0. The manifest has not yet been flipped to verified; that is the publisher's step, not part of this check.

## Method

Independent audit of the India edition after the round-5 fixes. The source edition
(`data/en/all-chapters.json`, chapter 1) was compared tip by tip with the shipped
India chapter: all 48 tips, their ids, order, tags, costScore, valueTier,
evidenceGrade, disputed and stillVerifying fields are identical (structure diff:
"counts 48 48", "STRUCTURE DIFFS: none", "ids order match: true"). The mechanical
gate was re-run and passed:

```
$ npx tsx scripts/check-chapter.ts 01
chapter 1 (01-do-not-die-early.json): 48 tips
PASS: no banned term, CJK character or foreign-jurisdiction term.
```

Substantive checks were made against primary instruments where the network
allowed: indiankanoon.org (statute text), SooperKanoon and ziplaw (Occupational
Safety, Health and Working Conditions Code 2020), PubMed/efetch and
api.crossref.org (trials and DOIs), naco.mohfw.gov.in, supportbeta.nha.gov.in,
sha.kerala.gov.in, cghshospitals.com, apollo247.com, apollohomecare.com,
who.int, services.bis.gov.in, and a gazette copy at gazettetracker.com. Every
defect that was blocking in earlier rounds was re-derived from scratch rather
than taken on trust, and the full text of the twelve changed tips was re-read.
A regression scan confirmed the earlier fixes are still in place: S.O. 5234(E),
the WHO 92% figure, the Nagpur AF numbers, ICTC and 1097, Inspector-cum-
Facilitator, 14416, "February 2001 exchange rates", IS 4384, Weaver and
Parkinson citations are all present; "disease control", "cross-regional",
"yibao", "12356", "yuan", "China"/"Chinese" are all absent.

Access failures (recorded, not hidden):

| Source | Failure | Consequence |
| --- | --- | --- |
| indiacode.nic.in (all URLs) | HTTP 403 from this network | Statute text read from indiankanoon/SooperKanoon/ziplaw instead |
| pib.gov.in (PressReleasePage, PressReleaseIframePage) and mohfw.gov.in | HTTP 403 | 21 November 2025 commencement corroborated only by an SCC Online report |
| static.pib.gov.in .../doc20251121701501.pdf | web_fetch rejects `application/pdf` ("unsupported content type") | the PIB notification itself was not read |
| egazette.gov.in WriteReadData/2026/276542.pdf | official portal unreachable; PDF also unsupported | S.O. 5234(E) read from the gazettetracker.com copy of CG-DL-E-28092026-276542 |
| telemanas.mohfw.gov.in, en.vikaspedia.in | DNS failure (fetch failed / EAI_AGAIN) | 14416 not re-confirmable this round; verified in an earlier round |
| www.1mg.com product pages | client-rendered HTML, no rupee figure in the response body | 1mg prices are not independently confirmable here |
| nha.gov.in/PM-JAY | JS-rendered shell only ("Integrated Portal") | Rs 5 lakh figure corroborated from a state health agency page |
| latestlaws.com and sooperkanoon.com statute pages (Gas Cylinders Rules 2016; MV Act s.185) | JS-rendered, no statute text in the HTML | 1-4's rule citation and 1-9's section numbers not textually re-read |

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1-46 | Factories Act 1948 s.36 no longer current; OSH Code 2020 s.143 is the repeal provision | indiankanoon.org/doc/77342310/; sooperkanoon.com/act/144535 | s.143 "Repeal and Savings", item (a) Factories Act 1948 | 2026-10-21 | yes | Past tense with the Code route; s.143 is the repeal section |
| 1-46 | Code s.6 (workplace free from hazards) and s.23 (health, safety, ventilation, no dust/noxious gas) | sooperkanoon.com/act/563492; ziplaw.in OSH Code s.23 | ss.6, 23 | 2026-10-21 | yes | Paraphrase accurate |
| 1-46 | Four labour codes in force 21 November 2025 | scconline.com blog, 26 Nov 2025 (PIB PDF unreachable) | - | 2026-10-21 | yes | Secondary source; consistent with the text |
| 1-46 | Manual Scavengers Act 2013 s.7; Inspector-cum-Facilitator under the Code; NAMASTE | indiankanoon.org/doc/193205499/; OSH Code s.2(1)(k), s.34; socialjustice.gov.in/schemes/37 | s.7 / s.34 | 2026-10-21 | yes | All three supported |
| 1-33 | S.O. 5234(E), 22 Sep 2026, s.27(2) r/w s.28 Insecticides Act 1968, published 23 Sep 2026, cancels s.9 registrations; intention notice S.O. 3800(E) 10 Jul 2026 | gazettetracker.com/g/CG-DL-E-28092026-276542 (gazette copy) | Notification text, Gazette No. 5027 | 2026-10-21 | yes | Full order text and dates present; the copy caveat is honest |
| 1-33 | Bangladesh: 1,420 reported, 257 analysed, CFR 43.2%, leg swelling 71.2%, vomiting 65.8%, abdominal pain 58.0% | PMID 42155406, AJTMH 2026;115(1):176-182 | abstract | 2026-10-21 | yes | Exact match |
| 1-33 | CO trial: 76 per group, 25.0% vs 46.1% at six weeks, P=0.007, adj OR 0.45 (0.22-0.92) | Weaver 2002 citation restored in sources; api.crossref.org/works/10.1056/NEJMoa013121 | NEJM 347(14):1057-1067 | 2026-10-21 | yes | Citation now present and metadata matches; round-5 blocking item closed |
| 1-33 | 73 patients: 30% cognitive impairment, 12% white-matter hyperintensities | Parkinson 2002 citation restored; api.crossref.org/works/10.1212/wnl.58.10.1525 | Neurology 58(10):1525-1532 | 2026-10-21 | yes | Citation present; DOI case difference is immaterial |
| 1-33 | Cross-references: Chapter 13, Item 19 (CO), Item 20 (ingestion), Item 25 (storage) | 13-emergencies-what-to-do-first.json titles | ch13 items 19, 20, 25 | 2026-10-21 | partial | 13-19 and 13-20 correct; 13-25 is drowning rescue, not pesticide storage (inherited from the source edition - see residual items) |
| 1-12 | WHO: about 300,000 deaths a year; under-fives nearly a quarter; fourth leading cause 1-4 y, third 5-14 y; 92% in low- and middle-income countries | who.int/news-room/fact-sheets/detail/drowning, 1 May 2026 | fact sheet body | 2026-10-21 | yes | Verbatim |
| 1-12 | Boater life-jacket use, RR 0.51 (95% CI 0.35-0.74) | Cummings 2011 (cited) | - | 2026-10-21 | yes | Unchanged from source edition |
| 1-44 | Nagpur: 8 of 4,077 adults with AF; 3 on warfarin without routine INR; 1 on aspirin; prophylaxis underused | PMID 27326234, Heart Asia 2016;8(1):56-59 | abstract | 2026-10-21 | yes | Matches |
| 1-38 | ICTC under NACP tests and refers to ART; National AIDS Helpline 1097, toll-free, 24x7 | naco.mohfw.gov.in/living-with-hiv-aids/hotlines-helplines/ | page header/text | 2026-10-21 | yes | "HIV / AIDS Helpline 1097 Toll Free - 24x7" |
| 1-35 | PM-JAY: Rs 5 lakh a year per family; cashless at any empanelled hospital outside the home state, home state pays | sha.kerala.gov.in; supportbeta.nha.gov.in/kb/faq.php?id=11 | scheme description / FAQ | 2026-10-21 | yes | Cited NHA page is JS-only; FAQ quoted near-verbatim |
| 1-35 | Goyal 2002: 305 sellers, February 2001 survey, 6 years after sale, 96% debt-driven, USD 1,070 | PMID 12350189, JAMA 288(13):1589-1593 | abstract | 2026-10-21 | yes | "About Rs 50,000 at February 2001 exchange rates" - clear and arithmetically right (USD 1,070 x c. Rs 47) |
| 1-35 | Selling a kidney is a criminal offence (TOHOTA 1994); lawful donation in Chapter 9, Item 22 | indiankanoon.org/doc/144870239/ (s.19); 09-everyday-legal-red-lines.json | s.19 commercial dealings | 2026-10-21 | yes | Supported; cross-reference resolves |
| 1-31 | PARTNER: 972 enrolled, 782 couples / 1,593 couple-years, 15 infections, none linked | PMID 31056293, Lancet 2019;393:2428-2438 | abstract | 2026-10-21 | yes | Accurate |
| 1-31 | HIV/AIDS Act 2017 bars discrimination and disclosure; "Chapter 27" cross-reference | indiankanoon.org/doc/14863653/; 27-pregnancy-and-childbirth.json | s.3; chapter 27 | 2026-10-21 | yes | Act verified (s.9 disclosure not individually sighted); reference corrected |
| 1-4 | Gas Cylinders Rules 2016 require PESO-approved cylinders and fittings; OMC safety instructions cover approved-grade short tubing not run through a wall or under a door; IS 4384 cited | peso.gov.in (as cited); BIS listings for IS 4384 | IS 4384 (LPG hose) | 2026-10-21 | yes | Attribution narrowed from the Rules to the OMC instructions, which is the honest split; IS 4384 is the LPG hose standard; round-5 blocking item closed |
| 1-21 | Shingrix Rs 10,549 Apollo Homecare, Rs 10,509 Tata 1mg; two-dose course about Rs 21,100 | apollohomecare.com/adult-vaccination/ | product price | 2026-10-21 | yes | Apollo exact; 2 x 10,509 = 21,018 and 2 x 10,549 = 21,098, so Rs 21,100 is right; 1mg not confirmable |
| 1-22 | Pneumococcal: PPSV23 Rs 3,155, PCV13 Rs 4,592, PCV20 Rs 6,150 (Apollo); PPSV23 Rs 2,722 (1mg) | apollohomecare.com/adult-vaccination/ | product prices | 2026-10-21 | yes | Apollo figures exact; 1mg not confirmable |
| 1-22 | Bonten 2015: 84,496 adults; VE 45.6% (95.2% CI 21.8-62.5); 75.0% (41.4-90.8) | PMID 25785969; api.crossref.org/works/10.1056/NEJMoa1408544 | abstract | 2026-10-21 | yes | "84,500" is a fair rounding; no invented senior programme; no "CI width" sentence |
| 1-17 | CGHS Rs 1,375 metro NABH, Rs 1,100-1,238 smaller cities, effective 13 Oct 2025; Apollo Pune from Rs 2,800 | cghshospitals.com/rates/x-ray-mammography-bilateral-unilateral-398; apollo247.com/radiology-details/breast-scan-c-pune | rate pages | 2026-10-21 | yes | All three tiers and the effective date on the CGHS page |
| 1-20 | Flu shot about Rs 2,500-3,200 at a private clinic; government facilities charge less | Apollo Homecare flu Rs 2,499 (verified earlier); no price source cited | - | 2026-10-21 | partial | Range brackets the verified private price; upper bound plausible; no citation for the range itself |
| 1-7, 1-24, 1-27, 1-39 | Costs qualitative ("a couple of thousand rupees", "a few thousand rupees", "ask the centre") | no numeric claim left | - | 2026-10-21 | yes | Honest; unverifiable figures and generic citations removed |
| 1-11, 1-15, 1-42 | Rs 500-1,500 window guards; Rs 300-800 clinic plus Rs 1,000-5,000 vaccine; Rs 500-2,000 goggles and shield | none cited | - | 2026-10-21 | partial | Plausible Indian ranges, not mechanical conversions, but no price source |
| 1-42 | IS 12640 (Part 2) covers RCBOs | services.bis.gov.in listings; BIS product manual | IS 12640 (Part 2):2016 / IEC 61009-1 | 2026-10-21 | yes | Standard exists; BIS not listed among the tip's sources |
| 1-9 | MV Act 1988 s.185 drink-driving, s.184 dangerous driving | sooperkanoon.com/act/634559 (title only); indiacode 403 | ss.184-185 | 2026-10-21 | partial | Numbering consistent with the Act; text not readable through this network |
| 1-25, 1-32, 1-37, 1-43 | Tele-MANAS 14416, 24x7 | telemanas.mohfw.gov.in (DNS failure this round); verified earlier | - | 2026-10-21 | yes | Re-check blocked; no indication of change; "Chapter 1, Item 32" resolves to the tell-someone tip |
| 1-14 | India ran a ten-state hepatitis B pilot in 2002-03; national infant schedule from 2011 | MoHFW/UIP history | - | 2026-10-21 | yes | Qidong trial numbers retained with citation |
| whole chapter | 48 tips, ids 1-1..1-48, tags/grades/tiers/sequencing preserved | diff script vs source chapter 1 | - | 2026-10-21 | yes | Zero structural drift |
| whole chapter | No mainland place names, agencies, hotlines, insurance terms or yuan | token scan | - | 2026-10-21 | yes | Only "Qidong" (trial provenance) and "Xinjiang" (paper title) remain |

## Banned-term check

- JSON: 0 banned terms - `npx tsx scripts/check-chapter.ts 01` printed "PASS: no banned term, CJK character or foreign-jurisdiction term." for 48 tips.
- Rendered page: not re-checked; `dist/` is older than the chapter JSON and still carries the pre-fix text, so the publisher must rebuild before any rendered-page QA. The JSON itself is clean.

## Safety and editorial check

- No unsupported high-risk claim: the paraquat order is described accurately, including that it stops new registration and cancels licences but leaves dealer stock; confined-space advice points at the Code and the Inspector-cum-Facilitator, not the repealed section 36; the two carbon-monoxide trials are now cited.
- No invented scheme, number or hotline: PM-JAY, ESIC, CGHS, NAMASTE, ICTC, 1097, 14416, 112, 108, CGHS rates and the Apollo/1mg vaccine listings all correspond to real instruments or listings.
- No direct equivalent recorded where needed: 1-46 states that India has no single confined-space regulation; 1-22 says the free pneumococcal programme covers infants, not adults; mainland epidemiology has been replaced in 1-12 and 1-44.
- Caveats retained: repeal date and the fact that the Code leaves detail to rules and state practice; the gazette-copy caveat in 1-33; grade C reasoning in 1-42; "no statutory rest break" in 1-9; the evidence caveats in 1-25 and 1-33.

## Blocking issues

None. The two round-5 blockers are closed: 1-33 again cites Weaver 2002 and Parkinson 2002 (both records match the quoted studies), and 1-4 now separates the Gas Cylinders Rules requirement from the oil-marketing-company hose instructions and cites IS 4384.

## Residual non-blocking items

- 1-33 caveat's "(Chapter 13, Item 25)" points at 13-25 "Upon seeing someone drowning ...", while the sentence is about not storing pesticides or sedatives at home - that guidance is Chapter 1, Item 25. The wrong pointer is inherited verbatim from the source edition (source 13-25 is also the drowning tip), so it is a source-edition bug rather than an India-edition regression, and the sentence is self-contained. If the fixer wants it airtight, change "Chapter 13, Item 25" to "Chapter 1, Item 25".
- 1-20's Rs 2,500-3,200 range rests on the verified Apollo Homecare flu price of Rs 2,499 at the bottom end; no source is cited for the range.
- 1-21 (Rs 10,509) and 1-22 (Rs 2,722) keep Tata 1mg figures that cannot be confirmed from this network; each is paired with a verified Apollo price, so the tip-level claim stands.
- 1-11, 1-15 and 1-42 give rupee ranges with no price source; 1-42 cites IS 12640 (Part 2) without listing BIS among its sources.
- 1-9's section numbers (s.185 drink-driving, s.184 dangerous driving) are consistent with the Act but were not textually re-read because indiacode.in returns 403 and the bare-act mirrors are JS-rendered.

## Post-PASS corrections (coordinator, 2026-10-21)

- 1-33 caveats: the parenthetical storage pointer changed from "Chapter 13, Item 25" to
  "Chapter 1, Item 25", as the verifier proposed. This is the only change after the PASS verdict;
  the chapter was rebuilt from overrides and check-chapter re-run clean.

Verdict: PASS
