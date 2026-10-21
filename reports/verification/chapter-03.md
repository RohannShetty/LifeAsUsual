# Verification: Chapter 03 - Do Not Waste Energy

Verifier: independent-verifier (round 3, targeted re-verification of tips 3-19 and 3-20)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/03-do-not-waste-energy.json
Manifest status: draft (tier B, 27 tips, bannedTerms 0; data/en-in/manifest.json)

## Method

Targeted re-verification, not a fresh full-chapter audit. I read every field of all 27 tips in the shipped build file data/en-in/chapters/03-do-not-waste-energy.json (tip ids 3-1 to 3-27, contiguous) and tested the four items this round was opened for: the 3-19 escalation ladder, the section numbers in the 3-19 caveat, the duplicated 3-20 post-trial Facebook sentence, and the 3-19 first-information-report and free-copy claim. Each of those was checked against the statute text or the study text fetched this round, and against the English source chapter data/en/all-chapters.json to separate inherited wording from the India rewrite. Byte-level searches were run on the parsed file, so the "absent" and "only one occurrence" statements below describe the file itself rather than a rendering of it. The chapter validator was run as `npx tsx scripts/check-chapter.ts 3`. Override files under data/en-in/overrides were opened only to judge whether a chapter rebuild would regenerate the shipped text; they are not treated as evidence for any claim in this report, and the checks are against the shipped chapter file.

Round 1 failed this chapter on 3-19 only (Chinese public-security deadlines presented as Indian). Round 2 failed it again on the wrong section in the 3-19 escalation ladder. This round checks the fix to that ladder and the related 3-20 duplication.

## Verified by fetch (this round)

- **BNSS s.173** - indiankanoon.org/doc/165794322/ returned HTTP 200. Heading: "Information in cognizable cases". s.173(1) allows the information "orally or by electronic communication" and requires it to be reduced to writing and "the substance thereof ... entered in a book". s.173(2): "A copy of the information as recorded under sub-section (1) shall be given forthwith, free of cost, to the informant or the victim." s.173(4): "Any person aggrieved by a refusal on the part of an officer in charge of a police station to record the information referred to in sub-section (1), may send the substance of such information, in writing and by post, to the Superintendent of Police concerned who, if satisfied that such information discloses the commission of a cognizable offence, shall either investigate the case himself or direct an investigation to be made by any police officer subordinate to him, in the manner provided by this Sanhita ... failing which such aggrieved person may make an application to the Magistrate."
- **BNSS s.175** - indiankanoon.org/doc/25110765/ returned HTTP 200. Heading: "Police officer's power to investigate cognizable case". s.175(1) lets the officer in charge investigate a cognizable case without a Magistrate's order. s.175(3): "Any Magistrate empowered under section 210 may, after considering the application supported by an affidavit made under sub-section (4) of section 173, and after making such inquiry as he thinks necessary and submission made in this regard by the police officer, order such an investigation as above-mentioned."
- **Allcott, Braghieri, Eichmeyer & Gentzkow, "The Welfare Effects of Social Media"** - NBER Working Paper 25514 full text (downloaded with curl, converted with pdftotext, 242,315 characters; see access failures). The sentence behind the deleted 3-20 clause reads: "Deactivation reduces this post-endline Facebook mobile app use by 12 minutes per day, or 0.31 standard deviations." The same paper gives "life satisfaction (0.12 SD), anxiety (0.10 SD), depression (0.09 SD), and happiness (0.08 SD)", "Our overall index of subjective well-being improved by 0.09 standard deviations", a "25-40 percent" comparison with psychological interventions, an "0.19 standard deviations" fall in the news-knowledge index, an "0.16 standard deviations" fall in the polarization index, a sample of "2,743 users", and the "$102" treatment offer.
- **Lei, Hu, Sun & Zheng 2026** - Crossref abstract for 10.3389/fpsyg.2026.1825169: "94 effect sizes from 54 independent samples (N = 36,583) using a three-level random-effects framework"; "average correlation ... was r = 0.330, 95% CI [0.289, 0.370]"; "social-evaluative negative emotions (r = 0.438), followed by anxiety (r = 0.382), depression (r = 0.306), lower wellbeing (r = 0.268), and lower self-esteem (r = 0.263)"; no significant moderation by age, cultural background or data collection year.
- **Cited DOIs** - api.crossref.org/works/ for 10.3389/fpsyg.2026.1825169, 10.1257/aer.20190658, 10.1521/jscp.2018.37.10.751, 10.1136/bmj-2023-075847 and 10.1001/jamapsychiatry.2020.4364 all returned HTTP 200 with the cited titles and years.

## Verified by text only

- 3-19 benefit and caveats wording, sentence by sentence, against the required correction (the two fetched sections were the reference, but the comparison itself is a text comparison).
- 3-20 duplication: the raw file contains 0 occurrences of "0.31", 0 of "standard deviations per day", and exactly 1 of "12 fewer minutes"; the only surviving sentence is "Even after the trial ended, former suspension users still spent 12 fewer minutes per day on Facebook." The first sentence of the old pair is gone, not reworded into the second.
- 3-19 cross-reference: data/en-in/chapters/08-law-and-property-safety.json does contain tip 8-39, and its text now agrees with 3-19 ("Section 173(4) lets an aggrieved person send the substance of the information in writing to the Superintendent of Police, and if the SP does not investigate, apply to the magistrate; section 175 sets out the police officer's power to investigate a cognisable case").
- Counts and manifest: 27 tips, ids contiguous 3-1 to 3-27; data/en-in/manifest.json chapter 3 is status draft, tier B, tips 27, bannedTerms 0, verifier null.
- Rupee costs in 3-12, 3-25 and 3-27 were not re-fetched; the round-2 reading stands (plausible Indian price bands, not converted figures).

## Access failures

- indiacode.nic.in - HTTP 403 (406-byte body) on https://www.indiacode.nic.in/handle/123456789/20062. The official copy could not be read; both sections were read from Indian Kanoon reproductions instead, and the two reproductions agree with each other and with the known BNSS structure.
- devgan.in - HTTP 503 on https://devgan.in/bnss/section/173.php.
- nber.org PDF - the fetch tool refuses application/pdf ("unsupported content type"), so https://www.nber.org/system/files/working_papers/w25514/w25514.pdf was downloaded with curl and converted with pdftotext. The full text was read; the failure is a tooling limit, not missing evidence.
- doi.org - https://doi.org/10.3389/fpsyg.2026.1825169 was not followed because of a cross-origin redirect to frontiersin.org; the Frontiers article URL and the Crossref abstract were used instead.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 3-19 | "under section 173 of the Bharatiya Nagarik Suraksha Sanhita, 2023 the officer in charge must register a first information report when you report a cognisable offence, and give you a copy free of cost" | BNSS s.173 (Indian Kanoon doc/165794322) | s.173(1)-(2) | 2026-10-21 | yes | s.173(1) records the information and enters its substance in a book; s.173(2) is the free copy. The claim is unchanged by the fix and still correct, with the s.173(3) qualification noted below. |
| 3-19 | "if the station refuses, section 173(4) lets you send the substance of the information in writing to the Superintendent of Police, who must investigate or direct an investigation" | BNSS s.173(4) | s.173(4) | 2026-10-21 | yes | Matches the sub-section's own words ("may send the substance of such information, in writing and by post, to the Superintendent of Police concerned who ... shall either investigate the case himself or direct an investigation"). The statute conditions the duty on the SP being satisfied that the information discloses a cognizable offence; the tip's "must" compresses that condition. |
| 3-19 | "if that fails you can apply to the magistrate, who may order an investigation under section 175(3)" | BNSS s.173(4) and s.175(3) | s.175(3) | 2026-10-21 | yes | "failing which such aggrieved person may make an application to the Magistrate" (s.173(4)); s.175(3) lets a Magistrate "after considering the application supported by an affidavit made under sub-section (4) of section 173 ... order such an investigation". The wrong-section defect is gone: no phrase "section 175 lets you" remains in the file. |
| 3-19 | Caveat route: "a route to the Superintendent of Police under section 173(4) and then to the magistrate under section 175(3)" | BNSS s.173(4), s.175(3) | s.173(4); s.175(3) | 2026-10-21 | yes | The caveat no longer names a wrong section for the ladder. Its other elements (free copy, no statutory investigation schedule) also hold. |
| 3-19 | Cross-reference "set out in Chapter 8, Rule 39" | data/en-in/chapters/08-law-and-property-safety.json, tip 8-39 | Cross-reference | 2026-10-21 | yes | 8-39 exists and now states the same route, so 3-19 and 8-39 no longer contradict each other. |
| 3-20 | Duplicated post-trial pair: "0.31 fewer standard deviations per day" followed by "12 fewer minutes per day" | Whole chapter file, byte search | Benefit | 2026-10-21 | yes | "0.31" appears 0 times, "standard deviations per day" 0 times, "12 fewer minutes" once. Only the minutes sentence survives. |
| 3-20 | Surviving sentence "Even after the trial ended, former suspension users still spent 12 fewer minutes per day on Facebook" | Allcott et al., NBER WP 25514 full text | Post-experiment use | 2026-10-21 | yes | Paper: "Deactivation reduces this post-endline Facebook mobile app use by 12 minutes per day, or 0.31 standard deviations." The deleted sentence was in fact a garbled split of this one line: 0.31 is the standardised size of the same reduction, not a per-day quantity, so keeping the minutes version is the right repair. |
| 3-20 | Meta-analysis: 54 studies, 94 effect sizes, N = 36,583, r = 0.330 (95% CI 0.289-0.370); 0.438 / 0.382 / 0.306 / 0.268 / 0.263; no moderation by age, culture or year | Crossref abstract, 10.3389/fpsyg.2026.1825169 | Abstract, methods and results | 2026-10-21 | yes | Every number matches. Two labels are the source's rather than the abstract's: "fear of negative evaluation" for "social-evaluative negative emotions" and "happiness" for "wellbeing". Inherited; see notes. |
| 3-20 | Trial: 2,743 U.S. Facebook users, 61% accept at under $102, 0.09 SD, 25-40% of interventions, 0.19 SD news knowledge, 0.16 SD polarization | Allcott et al., NBER WP 25514 full text | Results | 2026-10-21 | yes | All figures are in the paper. The "0.09" figure is the paper's overall subjective-well-being index, not life satisfaction specifically; see notes. |
| 3-20 | "a payment equal to about $102" carries the "U.S. Facebook users" qualifier | Tip text | Benefit | 2026-10-21 | yes | The round-2 note asking for that qualifier is resolved: the same sentence now says "In a randomized trial of 2,743 U.S. Facebook users". |
| 3-18 | Tele-MANAS 14416, exercise NMA, light therapy, iCBT | Carried from round 2 | Various | 2026-10-21 (round 2) | yes | Not re-fetched in this round; the chapter file is unchanged for this tip. |

## Banned-term check

- JSON: `npx tsx scripts/check-chapter.ts 3` exited 0 with:

  ```
  chapter 3 (03-do-not-waste-energy.json): 27 tips
  PASS: no banned term, CJK character or foreign-jurisdiction term.
  ```

- Rendered page: not checked; no build was run. For this check the rendered page can only be cleaner than the JSON.

## Safety and editorial check

- No unsupported high-risk claim: 3-18 still limits light therapy, exercise and iCBT to adjuncts for mild-to-moderate depression and points moderate-to-severe cases to professional care; the effect sizes remain attributed to the published meta-analyses.
- No invented scheme, number or hotline: the 14416 Tele-MANAS line is real and round-the-clock (round 2, PIB); no invented Indian deadline or fee survives in the chapter, and 3-19 now says explicitly that the statute "does not fix a schedule for the investigation".
- No direct equivalent recorded where needed: the round-1 Chinese investigation and complaint deadlines are gone from 3-19; the tip now states the Indian route and refuses to promise a timetable.
- Caveats retained: 3-19 keeps the grade-C admission that the premise has no scholarly source, 3-18 keeps its small-sample and blinding limits, 3-25 and 3-26 keep their drug and therapy caveats.

## Non-blocking notes

- **3-19, s.173(3) qualification.** BNSS s.173(3) lets the officer in charge, with Deputy Superintendent permission, run a preliminary enquiry of up to fourteen days for a cognizable offence punishable by three years or more but less than seven years, instead of going straight to investigation. So "must register a first information report when you report a cognisable offence" is the general duty, not an unconditional one for that offence band. Worth a clause if the tip is next touched; not needed for this fix.
- **3-19, affidavit.** s.175(3) speaks of "the application supported by an affidavit made under sub-section (4) of section 173"; 3-19 says only "you can apply to the magistrate". A reader following the tip literally may arrive without the affidavit. The benefit already carries a lot of detail, so this is a judgement call, not a defect.
- **3-20, two life-satisfaction numbers in one paragraph.** The tip says "Life satisfaction increased by 0.12 standard deviations" (the Allcott trial's life-satisfaction effect, correct) and later "gained 0.09 standard deviations in overall life satisfaction"; the paper's 0.09 is its composite subjective-well-being index, whose life-satisfaction component is the 0.12. Neither number is wrong in itself, but the two labels collide. Inherited from the source chapter; the fix under review removed the duplicated sentence from that paragraph but left these two figures and their labels as they stood.
- **3-20, placement.** The 0.12 / 0.08 SD sentence sits inside the meta-analysis paragraph, between the correlation results and "Age, cultural background and data collection year do not alter this link", so it reads as a Lei et al. finding when it is an Allcott trial finding. Inherited ordering from the source.
- **3-20, two labels.** "fear of negative evaluation (r = 0.438)" and "lower happiness (0.268)" are the source's renderings of the abstract's "social-evaluative negative emotions" and "lower wellbeing". Same numbers, slightly different constructs.
- **3-20, mobile app.** The paper measures post-endline use of the Facebook mobile app; the tip says "on Facebook". Minor.
- **Rupee costs** in 3-12, 3-25 and 3-27 remain unfetched plausibility checks, as recorded in round 2.

## Open pipeline risk (does not change the verdict on the shipped file)

- The corrected override was written to the wrong filename. data/en-in/overrides/3.json (untracked) holds the fixed 3-19 and 3-20 text and matches the shipped chapter word for word, but the generator resolves the override path as `String(chapterNumber).padStart(2, '0') + '.json'` (scripts/build-india-chapter.ts:40), so it reads data/en-in/overrides/03.json instead.
- data/en-in/overrides/03.json (tracked) still holds the pre-fix 3-19: its benefit says "if the station refuses, section 175 lets you complain to the Superintendent of Police and then to the magistrate", its caveat gives the route without section numbers, and it has no 3-20 entry at all. `tsx scripts/build-india-chapter.ts 3` regenerates data/en-in/chapters/03-do-not-waste-energy.json from data/en/all-chapters.json plus that override and writes the result over the chapter file (scripts/build-india-chapter.ts:318-329), so re-running the chapter generator would restore the wrong section in 3-19 and, through the auto pass, the duplicated 0.31 sentence in 3-20.
- The ordinary build path is safe: scripts/build-india-data.ts (run by predev, prebuild and precheck) only merges the chapter files into data/en-in/all-chapters.json and never reads the overrides, so the shipped chapter file is what actually ships and it is stable.
- The same non-padded naming shows up for chapters 4 and 5 (untracked data/en-in/overrides/4.json and 5.json alongside tracked 04.json and 05.json), so the hazard is not chapter-3-specific.
- Nothing under data/en-in/overrides was modified here, per the task limits. The owner should either move the corrected files onto the names the generator resolves (03.json, 04.json, 05.json) or change the path resolution, otherwise the next manual chapter rebuild reverts these fixes.

## Blocking issues

- None. The four defects this round was opened for are all closed in the shipped file.

Verdict: PASS
