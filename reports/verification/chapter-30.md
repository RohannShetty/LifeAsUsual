# Verification: Chapter 30 - School-Age Kids

Verifier: independent verifier, subagent of session-cbb8c456-d1d0-47f5-b30f-11f4d6163239
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/30-school-age-kids.json
Manifest status: draft
Pass type: targeted re-verification of the two corrections that blocked the previous round (not a fresh full audit)

## Scope of this pass

The previous full audit of this chapter ended in FAIL on exactly two items, both added by this edition and both editorial rather than evidentiary: the 30-3 and 30-4 caveats ended with a "Grade B because ..." sentence while each tip's evidenceGrade (and the source grade) is A. A fixer has since edited the shipped JSON. This pass confirms that the two caveat endings are gone, that the grades were not changed to match them (which would have broken the parse totals), and that no other caveat in the chapter now states a grade that contradicts its own badge. The remaining nineteen tips were not re-audited; their previous findings are carried forward below.

## Method

I read the two corrected caveats and their grades in the shipped file, data/en-in/chapters/30-school-age-kids.json (21 tips, manifest status draft), not in any override copy. I then checked the whole chapter mechanically rather than by eye: for every tip I compared the grade named in the caveat, if any, with that tip's evidenceGrade field. That scan covers all 21 tips, so the same defect cannot survive elsewhere in the chapter.

I also ran `npx tsx scripts/check-chapter.ts 30`: exit 0, "chapter 30 (30-school-age-kids.json): 21 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

No new web fetch was needed for these two edits: the corrections delete a grade label, and a deleted label is verified by reading the built text and comparing it with the unchanged evidenceGrade, not by consulting a source. The statutes and studies behind the two tips were read in the previous audit and are unchanged; their status is recorded under Notes carried forward.

## Corrections checked

| Item | Correction previously required | What the built JSON now says | How verified | Result |
| --- | --- | --- | --- | --- |
| (g) 30-3 | Delete the added final sentence "Grade B because the association is strong but the studies are observational."; the caveat must end at "Keep copies of every letter."; do not change the grade | Caveat, line 87, now ends: "Distinguish bullying from ordinary rough play, and ask the school which committee handles it and on what timeline. Keep copies of every letter." evidenceGrade, line 85: "A" | Text read in the built file; grade compared with the badge and with the source grade | fixed |
| (g) 30-4 | Delete the added final sentence "Grade B because the trial is strong but the effect is partial and measured over three years only."; the caveat must end at "(items 5 and 9)."; do not change the grade | Caveat, line 114, now ends: "Reading distance, the 20-20-20 break and screen limits are sensible but rest on weaker evidence than daylight (items 5 and 9)." evidenceGrade, line 112: "A" | Text read in the built file; grade compared with the badge and with the source grade | fixed |

## Chapter-wide grade-consistency scan

- 21 tips checked; every caveat that names a grade names the tip's own grade.
- The chapter contains five other "Grade B because ..." sentences (the tips at JSON lines 142, 250, 277, 331 and 385). Each of those tips carries evidenceGrade B, so those sentences are correct and were not part of the finding. Deleting them would have been as wrong as keeping the two that were deleted.
- 30-17's caveat opens "Grade A from Cochrane and pooled randomized trials ..." and the tip's grade is A; that is a grade statement, not a contradiction.
- No tip's evidenceGrade was changed by the fix: the A/B/C distribution of the file is unaltered.

## Why the deletion is the right fix, not a downgrade

The observational limitation the deleted sentence carried is still stated earlier in the same 30-3 caveat ("This evidence is observational, so it shows a strong association rather than proof that bullying alone causes suicide"), and 30-4 already says "a 9.1-point difference means some children are protected, not that any child is guaranteed protection". So the reader loses no caveat, and the badge no longer contradicts the prose. Changing the grades to B instead would have altered the parse totals in the build's acceptance checks (Evidence A 495 / B 218 / C 52), which is why the previous report told the fixer not to do that.

## Confirmed by text only

- The two caveats' remaining sentences are unchanged from the audited version, including the bullying-signs list in 30-3 and the "school time plus encouragement at home" sentence in 30-4.
- No other change is visible in the two tips' title, inPlainWords, benefit, sources or evidenceGrade fields.

## Access failures (carried from the previous audit; nothing was re-fetched this pass)

- education.gov.in and dsel-education.gov.in return HTTP 403 for the RTE PDF.
- indiacode.nic.in returns HTTP 403 for every handle and bitstream.
- legislative.gov.in PDFs return HTTP 403.
- morth.nic.in fails with a fetch TypeError; bprd.mha.gov.in returns "unsupported content type application/pdf", so no PDF could be read through the fetch tool.
- wcd.nic.in and cara.nic.in fail DNS (ENOTFOUND); jharkhandhighcourt.nic.in PDF fetch fails (TypeError).
- pib.gov.in returns Akamai "Access Denied" (403) on both PressReleasePage and PressReleaseIframePage.
- lawyerservices.in redirects to lextechsuite.com, where section pages return 404.

Because of those blocks, the Indian legal layer in the previous audit was read where it could be read: the Rashtriya Bal Swasthya Karyakram description verbatim on nhm.gov.in; section 16 of the RTE Act 2009 as substituted by the 2019 Amendment Act, and section 17, through Indian Kanoon section pages; section 199A of the Motor Vehicles Act 1988 through Kerala High Court decisions of 24 June 2024 that apply it.

## Notes carried forward (non-blocking)

- 30-1, 30-2, 30-3, 30-4, 30-5, 30-6, 30-13, 30-14, 30-16, 30-17, 30-19 and 30-21: every cited DOI resolved at api.crossref.org with matching title, journal and year, and the quoted counts, odds ratios, confidence intervals and effect sizes matched the papers.
- 30-7: RBSK's "four Ds", 32 conditions, anganwadi and government-school screening, District Early Intervention Centre and free treatment up to tertiary surgery were read verbatim on nhm.gov.in.
- 30-8, 30-15, 30-18, 30-19: Tele-MANAS 14416, Childline 1098 and ERSS 112 are the real numbers; the Mental Healthcare Act 2017, JJ Act 2015 and POCSO Act 2012 are correctly named and their effects correctly described.
- 30-9: misleading advertisement as an unfair trade practice under the Consumer Protection Act 2019 and the CCPA's withdrawal power were checked against the Act's provisions.
- 30-10, 30-11, 30-20: the negative claims (no statutory sleep, homework or start-time rule; no right to keep a seat empty; section 4 age bands) hold, and section 199A's numbering was confirmed indirectly because the section text itself is not fetchable.

## Banned-term check

- JSON: 0 banned terms
- `npx tsx scripts/check-chapter.ts 30`: exit 0, "chapter 30 (30-school-age-kids.json): 21 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."

## New blocking items

None. The two caveat endings are deleted, the grades are untouched, and the chapter-wide scan found no other grade statement that contradicts its badge.

Verdict: PASS
