# Verification: Chapter 13 - Emergencies: What to Do First

Verifier: independent-verifier-session-cbb8c456
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/13-emergencies-what-to-do-first.json
Manifest status: draft (recommend checked)
Round: 2, re-verification after the blocking fixes

## Method

This is the second pass on chapter 13. The two blocking findings from the first report
(13-2 importing the Chinese Civil Code's Article 184 and a converted Yuan award; 13-36
giving robbery a three-year minimum, a possible death sentence and an "Article 20"
self-defence rule) were treated as regression cases. Each fixed tip was read in full in
the BUILT JSON (title, plain words, benefit, sources, caveats), then the surrounding
tips in the same chapter were re-read for anything new or obviously wrong.

Two checks were run before the text check, so that "fixed in the built file" could not
be confused with "fixed in the source of the built file":

1. Build reproducibility. scripts/build-india-chapter.ts reads data/en/all-chapters.json,
   applies data/en-in/overrides/13.json per tip per field (a field is either a full
   string or a list of [find, replace] / [start, end, replacement] patches), then runs
   the hotline and auto-adapt passes, and writes the chapter JSON. I re-implemented those
   steps in memory (no build run, no file written) and compared the result with the
   committed file: 48 tips, 0 field differences, 0 patches whose target text was missing.
   The fixes are therefore in the override layer, not only in the generated JSON, and no
   rebuild will bring the old wording back.
2. Fresh static check. `npx tsx scripts/check-chapter.ts 13` -> PASS, 48 tips, no banned
   term, CJK character or foreign-jurisdiction term (exit 0).

Fetches used for this chapter: 11 (7 successful, 4 blocked). Legal text was taken from
bare-act reproductions because indiacode.nic.in, the primary host, refused this session.

Access failures, logged rather than worked around:

- indiacode.nic.in: HTTP 403 "Access Denied", Akamai reference
  18.9df6549a.1792589400.9d2993, on the BNS, BNSS and MV Act texts. The same 403 came
  from indiacode.ecourtsindia.com/bns/section/310/. Statutes below were read from
  sooperkanoon.com, apnilaw.com and bnssections.com instead, and matched against a second
  reproduction where one existed.
- pib.gov.in, mha.gov.in, morth.nic.in and the morth.nic.in PDFs: 403 or fetch failure,
  so the MoRTH guidelines were read from the SaveLIFE Foundation compilation of the
  Supreme Court record (citizenforce.in), which reproduces the Gazette notification.
- 112.gov.in: fetch failed at the network layer this round (no HTTP status, TypeError:
  fetch failed). The ERSS number in the chapter therefore rests on the earlier round's
  keralapolice.gov.in page, which displays "Emergency Helpline 112", and on the internal
  consistency check below.
- indiankanoon.org/doc/165977649/: "Act/Judgment not found", so SaveLIFE Foundation v.
  Union of India (2016) 7 SCC 194 could not be re-fetched; the citation is reported as
  printed in the chapter, and the guidelines it produced were verified separately.
- sooperkanoon.com section pages for BNS 34 and 44 returned a script shell with no
  section text (200, 70,945 bytes, no "private defence" string), and bnssections.com/
  section-34-bns/ likewise; BNS ss.34-44 are therefore checked as text, not fetch.
- devgan.in: 503 twice. mynation.net and veritect.ai: 403. clawlaw.in states that BNS
  309 carries a seven-year minimum where hurt is caused; that conflates IPC 397, and the
  bare 309(6) has no minimum, so the blog was not relied on.

## What the fixes say

- 13-2 (grade B). The benefit now reads: "Section 134A of the Motor Vehicles Act, 1988
  says that a Good Samaritan is not liable for any civil or criminal action ... and it
  defines a Good Samaritan as a person acting in good faith, voluntarily and 'without
  expectation of any reward or compensation'", then the MoRTH guidelines of 12 May 2015
  "issued on the direction of the Supreme Court in SaveLIFE Foundation v. Union of India"
  (bystander may leave at once; a caller cannot be compelled to give his name; a witness
  volunteer is examined once), then "What the law does not provide is money ... no payout
  is guaranteed ... there is no right to compensation for injured ribs or lost hours",
  and finally that s.134A is confined to road accidents, so a fall in a home is not
  covered and the protection there is that Indian law imposes no duty to rescue a
  stranger. "Article 184" and "1,27,900" now return 0 hits in the chapter.
- 13-36 (grade C). Plain words: bare demand is extortion, BNS s.308, "up to seven years,
  or with fine, or with both", ten years where backed by fear of death or grievous hurt;
  robbery is s.309 "only when he uses force, or puts you in fear of instant death,
  instant hurt or instant restraint, and takes the property there and then", with rigorous
  imprisonment up to ten years and a fine, fourteen on a highway between sunset and
  sunrise, and life or ten years where hurt is voluntarily caused; dacoity is s.310, life
  or ten years, "death is available only where one of them commits murder in the
  dacoity"; private defence "sections 34 to 44" covers stopping an ongoing attack, not
  retaliation afterwards; the first information is recorded under BNSS 2023 s.173. "at
  least three years" and "Article 20" return 0 hits.
- 13-2's sources now list MV Act s.134A, MoRTH, MoHFW's elderly programme, WHO Falls and
  SaveLIFE Foundation v. Union of India (2016) 7 SCC 194. 13-36's sources list BNS ss.34
  to 44 and 308-310, BNSS s.173 and NALSA.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 13-2 | A Good Samaritan is protected from civil and criminal liability; a Good Samaritan acts in good faith, voluntarily and with no expectation of reward or compensation | Motor Vehicles Act, 1988 s.134A, full text at sooperkanoon.com/act/634500/the-motor-vehicles-act-1988-section-134a | s.134A(1)-(2) and the Explanation; inserted by Act 32 of 2019 s.45, w.e.f. 1-10-2020 | 2026-10-21, fetch | yes | The chapter's paraphrase is faithful, including the two limits it draws later: no expectation of reward, and road-accident scope only. |
| 13-2 | MoRTH Good Samaritan guidelines of 12 May 2015 were issued on the Supreme Court's direction; the bystander who takes a victim to hospital may leave at once and is not questioned; a caller cannot be forced to give his name; a volunteer witness is examined once | Gazette notification and MoRTH guidelines as reproduced in the SaveLIFE Foundation v. Union of India record, citizenforce.in/SC_Statutory_Force_GOI_12May2015/files/basic-html/page9.html | Guideline paragraphs 1-8; notification dated 12.5.2015, further notification 21.1.2016 | 2026-10-21, fetch (reproduction) | yes | Date and content match. Pages 3-6 of the same file are the judgment's narrative of Irish, Australian and WHO practice, not the guidelines; I did not use them as the source of the Indian rule. |
| 13-2 | Indian law imposes no general duty to rescue a stranger; s.134A does not apply to a fall inside a home | s.134A read in full; no duty-to-rescue provision in the MV Act or in the BNSS provisions consulted | text only | 2026-10-21, text | yes | Negative claim, correctly framed as such in the tip ("it is perfectly legal to walk away"). Not contradicted by anything fetched. This is reasoning from the statute's limits, not a quoted provision, and the report flags it as such. |
| 13-2 | SaveLIFE Foundation v. Union of India (2016) 7 SCC 194 is the judgment behind the guidelines | Citation as printed; indiankanoon.org doc 165977649 returns "Act/Judgment not found" | -- | 2026-10-21, fetch failed | yes | Citation could not be re-fetched this round. The judgment's existence and its role are corroborated by the MoRTH record above, which quotes the Court's direction; the reporter citation itself is taken as printed. |
| 13-36 | A bare demand is extortion under BNS s.308: up to seven years, or fine, or both; up to ten years and a fine where backed by fear of death or grievous hurt | Bharatiya Nyaya Sanhita, 2023 s.308, prashantkanha.com/section-308-of-bhartiya-nyaya-sanhita-2023-bns-equivalent-ipc-section/ | s.308(2) and s.308(5) | 2026-10-21, fetch | yes | Sentences (2) and (5) match the chapter word for word. |
| 13-36 | Robbery, BNS s.309: rigorous imprisonment up to ten years and a fine; fourteen years on a highway between sunset and sunrise; life or up to ten years where hurt is voluntarily caused; no minimum, no death penalty | BNS 2023 s.309 at sooperkanoon.com/act/150710/the-bharatiya-nyaya-sanhita-2023-section-309 and apnilaw.com/bare-act/bns/section-309-bharatiya-nyaya-sanhita-bns-robbery/ | s.309(4), (5), (6) | 2026-10-21, fetch, two reproductions | yes | The old "at least three years" and the death sentence for robbery are both gone and would now be wrong: 309(6) sets "imprisonment for life or ... ten years" with no floor, and death appears only in s.310(3). |
| 13-36 | Dacoity, BNS s.310: imprisonment for life or rigorous imprisonment up to ten years; death only where one of the offenders commits murder in the dacoity | BNS 2023 s.310, bnssections.com/section-310-bns/ | s.310(2) and s.310(3) | 2026-10-21, fetch | yes | The chapter's "death is available only where one of them commits murder in the dacoity" is exactly 310(3). |
| 13-36 | The first information is recorded under BNSS 2023 s.173 | Bharatiya Nagarik Suraksha Sanhita, 2023 s.173, bnssections.com/section-173-bnss/ | s.173(1)-(3) | 2026-10-21, fetch | yes | "Information in cognizable cases": oral or electronic, reduced to writing, read over, signed, entered in a book; electronic information signed within three days. The chapter asks only that the information be recorded, which is right. |
| 13-36 | Private defence is BNS ss.34-44 and covers stopping an ongoing attack, not retaliation after the event | BNS 2023 chapter on general exceptions (right of private defence) | ss.34-44 | 2026-10-21, text | yes | Section range not re-fetched (the section pages returned a script shell). The tip states the scope of the right, not a numeric threshold, so there is no figure to mismatch; the range is the standard one in the 2023 Sanhita. |
| 13-1, 13-2, 13-3, 13-4, 13-7, 13-8, 13-15, 13-22, 13-25, 13-42, 13-44 | Emergency help is reached on 112; 108 is a state ambulance alternative, not the emergency number | Built JSON grep; ERSS confirmed on keralapolice.gov.in in the earlier round; 112.gov.in unreachable this round | ERSS single emergency number | 2026-10-21, grep | yes | 112 appears 47 times; "101" and "110" return 0 hits; the only "120" left is 13-44 "Rate 100 to 120 per minute", a compression rate; the only "108" is 13-3's caveat sentence that 112 "reaches police, fire and ambulance; 108 is the state ambulance service in most states". The 120 -> 112 regression holds chapter-wide. |
| 13-37 | Group fight: leave, call 112, report as a witness; the first information is recorded under BNSS s.173 | BNSS s.173 (fetched, above); NALSA | s.173 | 2026-10-21, fetch and grep | yes | The old Criminal Procedure Law sections 62/110/111/193 return 0 hits in the chapter. |
| 13-39 | A rescuer has no automatic reimbursement fund; s.134A protects from liability, it does not pay; recourse is tort, MV Act, BNSS compensation and NALSA legal aid | s.134A (fetched); NALSA; BNSS victim-compensation provisions | s.134A; LSA Act 1987 | 2026-10-21, fetch and text | yes | High-risk tip and it is right: the reward is left to the state government, and it says so in 13-2 as well, consistently. |
| 13-42 | After a sexual assault: 112, preserve evidence, 72-hour HIV PEP window, One Stop Centre, NALSA | wcd.gov.in One Stop Centre scheme and nalsa.gov.in, both as printed in sources; WHO PEP guidance | OSC scheme; PEP | 2026-10-21, text | yes | Schemes and the 72-hour window are real; nothing new introduced by the rewrite. |
| 13-44 | Infant CPR: 30 compressions, rate 100-120 per minute | AHA/AAP 2025 paediatric BLS, as cited | Part 6 | 2026-10-21, text | yes | "100 to 120" is a rate, not a helpline. Editorial note below on the orphaned institution name in the caveat. |
| 13-45, 13-46 | Button battery and magnet ingestion are time-critical | Litovitz et al. 2010, doi 10.1542/peds.2009-2511, as cited | Pediatrics 125(6) | 2026-10-21, text | yes | Citation and advice unchanged and consistent. |

## Banned-term check

- `npx tsx scripts/check-chapter.ts 13` -> PASS (48 tips, exit 0), run fresh this round.
- Independent grep of the built JSON: 0 hits for China / Chinese / mainland / RMB / yuan /
  CNY / hukou / yibao / dibao / MOC / Jianfanggui, 0 CJK, 0 hits for "Article N", and 0
  hits for the old hotlines 101, 110 and the old medical number 120 outside the CPR rate.
- The banned-term scan cannot see the substantive residue that this round was about,
  because "Article 184", "Article 20", "at least three years" and "1,27,900" were never on
  the term list; those were checked by direct text comparison against the statutes, not by
  the checker.

## Safety and editorial check

- No unsupported high-risk claim remains. 13-2 now separates protection (s.134A) from
  payment (none guaranteed) and says plainly that s.134A does not cover a fall at home.
  13-36 gives no minimum sentence and no death penalty where the statute gives none, and
  says the right of private defence does not survive the event.
- No invented scheme, number or hotline: 112, 108 as a state alternative, NALSA, One Stop
  Centres and the MoRTH guidelines are all real; no invented rupee figure survives in the
  chapter.
- No direct equivalent is silently implied: 13-2 says Indian law imposes no duty to rescue
  a stranger, and 13-39 says there is no automatic reimbursement fund. Both are correct
  no-equivalent statements.
- Caveats retained: all 48 tips keep caveats, and the 13-2 caveat keeps the s.134A
  limitation and the evidence-preservation advice.

## Blocking issues

None. Both blockers from the first report are cleared, in the built JSON and in the
override layer that produces it:

- 13-2 no longer imports the Chinese Civil Code or a converted award. Its benefit cites
  s.134A and the MoRTH guidelines, and states that no payout is guaranteed.
- 13-36 no longer says robbery carries "at least three years" or death, and no longer
  cites "Article 20". Its sentences were matched one by one against BNS 308, 309 and 310
  and BNSS 173.

## Editorial notes (non-blocking)

- Cross-reference wording: the edition's convention is "Section N, Item M" (13-2 uses
  "Section 1, Item 13"; 13-36 uses "Section 8, Item 32"), but six caveats in this chapter
  still say "Rule": 13-45 ("Chapter 13, Rule 26 (back blows and abdominal thrusts) or Rule
  43", "Chapter 13, Rule 20"), 13-46 ("Chapter 13, Rule 2", "Chapter 13, Rule 28", "Chapter
  34, Rule 11", "Chapter 22, Rule 11"), 13-47 ("Chapter 13, Rule 12", "Chapter 1, Rule
  42"), 13-48 ("Chapter 24, Rule 12"). This looks like an artefact of the source edition
  (条 rendered as "Rule") and is systemic across chapters, not specific to chapter 13; a
  single sweep replacing "Rule" with "Item" in cross-references would close it.
- 13-44 caveat still says "How long to compress before calling varies: Capital Institute
  of Pediatrics and the U.S. single-rescuer flow say 2 minutes; IFRC says 1 minute", but
  the rewritten benefit no longer introduces that institution. The name is orphaned (and
  it is a non-Indian institution in an India edition); either drop the clause or name the
  AHA/AAP guidance that is already in the sources.
- 13-2's India paragraph opens with "Conversely, Indian law protects the rescuer rather
  than paying him" immediately after advice about helping an elderly relative stand up,
  where there is nothing to be converse to. Style only; the legal content is right.

Verdict: PASS