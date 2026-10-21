# Verification: Chapter 17 - Elderly at Home

Verifier: independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/17-elderly-at-home.json
Manifest status: draft
Pass type: targeted re-verification of the three corrections that blocked the previous round (not a fresh full audit)

## Scope of this pass

The previous full audit of this chapter ended in FAIL on exactly three items, all in the text: (a) 17-2 stated the Indian Succession Act 1925 section 63 witness rule as requiring both witnesses to be present at the same time, which is the opposite of the statute; (b) 17-12 described the repealed Maternity Benefit Act, 1961 as the current maternity statute; (c) 17-1's title and first sentence said India has no adult guardianship statute at all, ignoring limited guardianship under section 14 of the Rights of Persons with Disabilities Act, 2016. A fixer has since edited the shipped JSON. This pass confirms those three corrections in the built file, checks that the edits introduced nothing new, and re-runs the mechanical checker. The other ten tips were not re-audited; their previous findings are carried forward as notes at the end.

## Method

I read the corrections in the shipped file, data/en-in/chapters/17-elderly-at-home.json (13 tips, manifest status draft), not in any override copy. Where a correction turns on statutory wording I read the provision itself:

- Indian Succession Act, 1925, section 63 - https://indiankanoon.org/doc/1673132/ (HTTP 200).
- Rights of Persons with Disabilities Act, 2016, section 14 - https://indiankanoon.org/doc/27742839/ (HTTP 200).
- Code on Social Security, 2020, Chapter VI - section 72 read in full at https://www.advocatekhoj.com/library/bareActs/codeonsocialsecurity/72.php (HTTP 200); the section range 59 to 72 was checked against the same bare-act index, where section 72 is the last section before section 73.

I then ran `npx tsx scripts/check-chapter.ts 17`: exit 0, "chapter 17 (17-elderly-at-home.json): 13 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## Corrections checked

| Item | Correction previously required | What the built JSON now says | How verified | Result |
| --- | --- | --- | --- | --- |
| (a) 17-2 | State section 63 correctly: two or more witnesses, each sees the testator sign, each signs in the testator's presence, and the Act does not require both at the same time | Benefit, line 53: "Section 63 of the Indian Succession Act, 1925 sets the form: writing, the testator's signature, and attestation by two or more witnesses, each of whom has seen the testator sign and each of whom signs in the testator's presence. The Act does not require both witnesses to be present at the same time; having them both present is safer practice, not a legal requirement." The earlier simultaneity claim is gone from the plain words too (line 52: "attested by two or more witnesses who each saw the testator sign") | Fetch: ISA s.63(c) reads "attested by two or more witnesses, each of whom has seen the testator sign ... and each of the witnesses shall sign the Will in the presence of the testator, but it shall not be necessary that more than one witness be present at the same time" | fixed |
| (b) 17-12 | Stop naming the repealed Maternity Benefit Act, 1961 as current; cite Chapter VI of the Code on Social Security, 2020 (ss.59-72) | Benefit, line 325: "... none of them creates a right to elder-care leave, and Chapter VI of the Code on Social Security, 2020 (sections 59 to 72) covers maternity only." A full-text search of the chapter file for "Maternity Benefit Act" returns no hit | Fetch: Chapter VI runs to section 72, and s.72 itself is the maternity-benefit complaint provision ("Any woman claiming that ... maternity benefit ... may make a complaint to the Inspector-cum-Facilitator") | fixed |
| (c) 17-1 | Title says "no general adult guardianship statute"; plain words add RPwD Act 2016 s.14 limited guardianship; RPwD added to sources | Title, line 13: "... India has no general adult guardianship statute, so the tools are a will, a bank mandate and, for mental illness, an advance directive". Plain words, line 27, now include: "The Rights of Persons with Disabilities Act, 2016, section 14 lets a district court or a notified authority appoint a limited guardian for a person with a specified disability who cannot take legally binding decisions; that guardianship is limited and disability-specific." Sources, line 30, now list "Rights of Persons with Disabilities Act, 2016" | Fetch: RPwD s.14 is headed "Provision for guardianship" and provides that "where a district court or any designated authority, as notified by the State Government, finds that a person with disability, who had been provided adequate and appropriate support but is unable to take legally binding decisions, may be provided further support of a limited guardian" | fixed |

## Confirmed by fetch

The three corrections each turn on a statutory text, and all three texts were read this session: ISA s.63(c) settles the simultaneity question in the chapter's favour; RPwD s.14 supports the "limited and disability-specific" formulation and the "district court or a notified authority" description; the Code on Social Security, 2020 Chapter VI range and s.72 confirm that ss.59-72 is the maternity chapter. India Code (indiacode.nic.in) returned HTTP 403 on every handle, so these were read on Indian Kanoon and AdvocateKhoj bare-act pages, as noted in the Method.

## Confirmed by text only

- The title and plain words of 17-1 are internally consistent with the added sentence: the claim is now "no general adult guardianship statute", not "no adult guardianship", and the limited routes (National Trust Act 1999, RPwD s.14, Mental Healthcare Act 2017) are all named in the same field.
- The 17-2 caveat, "Two witnesses must see you sign, and each must sign in your presence", remains and does not contradict the corrected benefit.
- 17-13's caveat still opens "Graded Evidence Grade B ..." and the tip's evidenceGrade is B; every caveat in the chapter that states a grade matches the tip's own badge (checked across all 13 tips).

## Access failures

- indiacode.nic.in returns HTTP 403 on every handle and bitstream, so the Acts were read on mirror bare-act pages rather than the official portal.
- pib.gov.in returns HTTP 403 (Akamai "Access Denied").
- Elderline's ministry pages (elderline.dosje.gov.in, scw.dosje.gov.in) fail with DNS or fetch errors, as in the previous round; the 14567 number is corroborated only in peer-reviewed literature.
- The specific RBI circular on reverse mortgage could not be located on rbi.org.in this session, although the site itself is reachable.

## Notes carried forward (non-blocking)

- 17-6: the reverse-mortgage yields are already labelled rules of thumb, and the chapter does not claim a statutory rate. The RBI framework was not read in full.
- 17-9: the 15,000-40,000 rupee range is a market estimate, not a published fee; it is graded B and marked disputed, which is the right treatment.
- 17-5 and 17-11: MWPSCA 2007 section 2(j) defines the Tribunal as the Maintenance Tribunal constituted under section 7; that reading was confirmed in the previous audit and is unchanged.
- 17-13: NICE NG97 recommendations 1.1.12, 1.2.1, 1.2.2 and 1.2.6, and the Clarfield figures (39 studies, 5,620 patients, 9.0 per cent potentially reversible, 0.6 per cent improved), were confirmed in the previous audit and are unchanged.
- 17-12, sources line: the tip now cites the Code on Social Security, 2020 in the benefit but the sources field still lists only the OSH Code 2020, the CCS (Leave) Rules 1972 and the Ministry of Labour and Employment. Adding the Code to the sources would be tidier; it is not blocking, because the ministry source covers the Code and the claim is a passing aside.
- 17-1, sources: the RPwD Act link points at indiacode.nic.in, which returns 403 to this verifier. The link is the correct official location; the 403 is an access failure, not a wrong citation.

## Safety and editorial check

- No new high-risk claim was introduced by the three edits: the guardianship sentence is a statement of statutory power with its limits attached ("limited and disability-specific"), the will sentence states the minimum formality and adds that having both witnesses present is "safer practice, not a legal requirement", and the maternity aside is a scoping remark inside a tip about elder-care leave.
- No invented statute, section or number: all three citations resolve to the sections named.
- The chapter still states its absences rather than importing a foreign rule, and the 17-2 attestation caveat that protects the reader is intact.

## Banned-term check

- JSON: 0 banned terms
- `npx tsx scripts/check-chapter.ts 17`: exit 0, "chapter 17 (17-elderly-at-home.json): 13 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## New blocking items

None found in this pass. The three previous blocking items are corrected, and the edits introduced no new factual or statutory error.

Verdict: PASS
