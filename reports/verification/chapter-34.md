# Verification: Chapter 34 - Safe Home Medications

Verifier: Independent verifier (AI), final delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/34-safe-home-medications.json (12 tips, rewriteStatus: draft)
Manifest status: draft, tier B, 12 tips, bannedTerms 0, openIssues ["Independent verification pending"]

## Method

This is the final pass on this chapter. It re-verifies the **current** JSON after the fix round,
not the text the previous report described. The uncommitted diff of that round changes five tips
here: 34-1 (`inPlainWords`, the 4,000 mg sentence), 34-6 (caveat, Schedule H and rule 65(9)),
34-8 (`cost`, the blocking fix), 34-10 (`inPlainWords`, the grandparent sentence) and 34-12
(`inPlainWords`, the rule 97 sentence). All five were re-read in the shipped file, and the other
seven tips were re-read for the usual defects: repealed or foreign statutes, Chinese regulators or
product categories, invented amounts and hotlines, misquoted instruments, unconverted currency,
raw markup.

Instruments consulted this pass:

- **Drugs and Cosmetics Rules, 1945** - the CDSCO PDF (859 pages) retrieved in the previous pass
  and converted with `pdftotext -layout`; the converted text is what was grepped this pass.
  Rule 65(9)(a), the retail-sale restriction, reads: "Substances specified in Schedule H and
  Schedule H1 or Schedule X shall not be sold by retail except on and in accordance with the
  prescription of a Registered Medical Practitioner and in the case of substances specified in
  Schedule X, except in accordance with the conditions of licence for sale and the requirements
  of rule 65A". Schedule H entries re-checked in the same file: 179 Esomeprazole, 367 Omeprazole,
  386 Pantoprazole, 423 Rabeprazole; lansoprazole does not appear in the list. Rule 97(1)(a)-(f)
  was read in full in the previous pass: the only boxed cautions the rule mandates are the
  Schedule G, Schedule H (Rx plus "SCHEDULE H PRESCRIPTION DRUG - CAUTION / Not to be sold by
  retail without the prescription of a Registered Medical Practitioner"), Schedule H NRx, Schedule
  H1 Rx and NRx, and Schedule X XRx wordings. "Drive" and "driving" occur twice in the whole
  Rules, neither time in rule 97, and "machinery" does not occur in rule 97 at all.
- **DOI records** - the four DOIs that carry a number in the tips under review were re-queried at
  https://api.crossref.org/works/{doi} this pass: 10.1002/hep.20948 (Hepatology 42(6):1364-1372,
  2005-12), 10.1002/14651858.CD002847 (Cochrane Database of Systematic Reviews, first published
  2002-01-21), 10.1542/peds.2015-2092 (Pediatrics 136(4):e821-e829, 2015-10-01) and
  10.1016/j.jpeds.2019.12.027 (Journal of Pediatrics 219:188-195.e6, 2020-04). All returned
  HTTP 200 with matching title, volume and pagination. The other six DOIs the chapter cites were
  resolved in the previous pass and are unchanged.
- **Numeric claims** - the Agarwal 2020 figures behind 34-10 were re-read in the Europe PMC
  abstract: "From February to September 2017, 5 US poison centers ...", "Grandparents' medications
  were involved in 30.7% of prescription medication exposures" and "51.5% ... involved children
  accessing medications that had previously been removed from original packaging". The Larson
  2005, Belay 1999 and Lovegrove 2015 figures (275 of 662, "74 (27%) died without
  transplantation", 31 per cent case fatality, 45.9 per cent oral prescription solids) are carried
  from that pass and are unchanged in the text.
- `npx tsx scripts/check-chapter.ts 34` returns PASS, exit 0 (12 tips), re-run against the
  current file.

The FDA drug-safety communication behind 34-5, the DailyMed and Indian Pharmacopoeia material
behind 34-11 and the Bio-Medical Waste Management Rules 2016 behind 34-10 were not re-fetched in
this pass; those tips were checked by text and are marked accordingly below.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 34-1 | Never take two paracetamol-containing products; 42 per cent of acute liver failure, median 24 g, 48 per cent unintentional; "Indian adult packs generally print a maximum of 4,000 mg a day ... and the line printed on your own pack governs" | Larson 2005, Hepatology | 42(6):1364-1372; abstract | 2026-10-21 | yes | 42 per cent, 24 g, 48 per cent and 27 per cent match the abstract (DOI re-queried this pass). The 4,000 mg line is now framed as what packs print, with the lower limits named and the pack itself governing - it no longer asserts a legal cap |
| 34-2 | No aspirin for a child's fever; Reye's 82 per cent with salicylates, 31 per cent mortality; nimesulide and metamizole are adult drugs | Belay 1999, NEJM | 340(18):1377-1382; abstract | 2026-10-21 | yes | 82 per cent and 31 per cent verified; nimesulide is Schedule H entry 358, not banned - the tip does not claim a ban |
| 34-3 | Over 60, previous GI bleed, anticoagulant or steroid: ask before ibuprofen and similar | Bhala 2013, Lancet | 382(9894):769-779 | 2026-10-21 | yes | 280 trials and 124,513 participants match; caveat that the figures are for high dose is correct |
| 34-4 | No over-the-counter cough or cold medicine for a child under two on your own | Smith 2014 CD001831 | 2014(11) | 2026-10-21 | yes | Paediatric trials showed no benefit over placebo; paracetamol-duplication caveat retained |
| 34-5 | Avoid NSAIDs from about 20 weeks of pregnancy | FDA drug-safety communication, 2020-10-15 | NSAID 20-week warning | 2026-10-21 | yes | Text not re-fetched this pass; the warning and date are correct, and it is framed as the US regulator's advice |
| 34-6 | Omeprazole needs a prescription in India; short course under a doctor; red flags mean investigation; caveat: "omeprazole, rabeprazole and esomeprazole are Schedule H drugs, and rule 65(9) of the Drugs and Cosmetics Rules, 1945 allows a Schedule H drug to be sold only on the prescription of a registered medical practitioner" | CDSCO, Drugs and Cosmetics Rules 1945 | Sched H entries 179/367/423; rule 65(9)(a); rule 97(1)(b) caution box | 2026-10-21 | yes | **Fixed.** Rule 65(9)(a) says exactly what the caveat says, and the three named PPIs are all in the Schedule H list. Pantoprazole (entry 386) is in the list too but is not named; lansoprazole is not in the list, so the `inPlainWords` phrase "and the other proton-pump inhibitors" is a generalisation - see notes |
| 34-7 | Do not ask for an antibiotic for a cold; do not accept one without a prescription; cephalosporins are Schedule H1 | Kenealy CD000247; CDSCO Rules | Sched H1; rule 97(1) H1 box | 2026-10-21 | yes | RR 0.83 (0.60-1.14) matches; the cephalosporins are in Schedule H1 in the PDF |
| 34-8 | Oral rehydration first; never loperamide under five; cost: "An oral rehydration sachet costs very little at any Indian pharmacy, so it is worth keeping one at home" | WHO 2005 manual; Hahn 2002 CD002847 | WHO/FCH/CAH/05.1 | 2026-10-21 | yes | **Fixed.** No currency figure of any kind remains - no dollar, no rupee, no conversion. The clinical text (245 mOsm/L, the 33 per cent reduction in unplanned IV fluids, the 8-trial OR 0.59) is sound and unchanged |
| 34-9 | No painkillers on 15 or more days a month; combination analgesics 10 days | ICHD-3, Cephalalgia | 38(1):1-211, 8.2 | 2026-10-21 | yes | 15-day and 10-day thresholds match ICHD-3 8.2 |
| 34-10 | Clear out old medicines yearly; about 640,000 unsupervised exposures 2004-2013, 59,000 in 2013, 45.9 per cent oral prescription solids; "a grandparent's medicine is often the source"; take them to a collection point | Lovegrove 2015, Pediatrics; Agarwal 2020; BMW Rules 2016 | 136(4):e821-e829; J Pediatr 219:188-195.e6 | 2026-10-21 | yes | **Fixed.** The hedged sentence matches the source, and the benefit now gives the exact shares: 30.7 per cent of prescription ingestions involved a grandparent's medicine and 51.5 per cent of the drugs had been taken out of their original packaging. Both verified in the Agarwal abstract; both DOIs re-queried this pass |
| 34-11 | No alcohol with metronidazole or a cephalosporin, and for days after | DailyMed metronidazole; IPC | label contraindication | 2026-10-21 | yes | Text not re-fetched; framed as label practice and pharmacology, not as an Indian statutory rule |
| 34-12 | Older antihistamines impair driving as much as 0.10 per cent blood alcohol; "Many Indian packs carry a warning ... though the Drugs and Cosmetics Rules, 1945 do not themselves mandate that sentence: rule 97 requires the Schedule H and Schedule H1 caution boxes, not a driving warning" | Weiler 2000, Ann Intern Med; CDSCO Rules rule 97 | 132(5):354-363; rule 97(1)(a)-(f) | 2026-10-21 | yes | Rule 97 was read in full: no driving or machinery warning anywhere, so the sentence is accurate and the rest of the tip (s.185 MV Act 1988, cetirizine caveat) stands |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

Both chapter files were parsed directly rather than only through the checker. Zero hits for
China|Chinese|mainland|PRC, RMB|yuan|CNY|Renminbi, the yuan sign, CJK (U+3000-U+303F,
U+3400-U+4DBF, U+4E00-U+9FFF, U+F900-U+FAFF, U+FF00-U+FFEF), and the foreign regulators
NMPA|SFDA|State Council|hukou|yibao|dibao. No SFDA announcement, provincial adverse-reaction
bulletin or Chinese product name appears. No raw markup and no template tokens. The rendered page
was not rebuilt in this pass; the page text is generated from these JSON strings.

The currency sweep is clean: a programmatic walk of every string in every tip of chapters 33 and
34 returned zero hits for the dollar sign, "dollar", "USD", and the rupee, yen, euro and pound
signs. The previous "a few dollars" line in 34-8 was the last such figure in either chapter and it
is gone; nothing was substituted for it, and no rupee price was invented.

## Safety and editorial check

- No unsupported high-risk claim: 34-1, 34-2 and 34-8 carry the strongest warnings and each is
  tied to a study or a WHO manual; 34-3's dose caveat, 34-6's "do not stop a long-standing
  prescription" caveat and 34-11's "stop drinking and get to a hospital" line are proportionate.
  Nothing tells a reader to self-treat a red-flag symptom.
- No invented scheme, number or hotline: no Indian regulator, scheme, toll-free number or price is
  invented. Every quantity (42 per cent, 24 g, 82 per cent, 31 per cent, 280 trials, 124,513,
  RR 0.83, 640,000, 59,000, 45.9 per cent, 30.7 and 51.5 per cent, 15 and 10 days) traces to the
  cited paper; the rule citations (Schedule H entries 179/367/423, rule 65(9), rule 97, Schedule
  H1 cephalosporins, s.185 MV Act 1988) trace to the instruments. The removed price line left no
  gap: the tip now makes a qualitative point, which is what the edition rule requires when no
  Indian price source is cited.
- No direct equivalent recorded where needed: 34-6 says plainly that the over-the-counter
  omeprazole pack sold abroad does not exist in India, and 34-12 separates pack practice from the
  statutory labelling rule instead of asserting a US-style warning mandate. No foreign rule is
  presented as binding in India.
- Caveats retained: each B tip keeps its caveat, including 34-12's admission that the trial is
  small, 34-3's high-dose limitation and 34-10's instruction to keep medicines in the original box
  until they are handed over.

## Blocking issues

None this round. The single blocking item the previous report raised against this chapter is fixed
in the shipped file:

- **34-8 - fixed.** The `cost` field now reads "An oral rehydration sachet costs very little at
  any Indian pharmacy, so it is worth keeping one at home." No dollar figure, no rupee figure and
  no conversion remains, in this chapter or in chapter 33. The clinical content of the tip - the
  WHO line that anti-diarrhoeals do not help a child, the loperamide warning, the low-osmolarity
  point and the Cochrane result - is untouched and unchanged.

## Non-blocking notes

- 34-6: the caveat's three named PPIs are all in Schedule H, but pantoprazole (entry 386) is also
  listed and lansoprazole is not, so the `inPlainWords` "Omeprazole and the other proton-pump
  inhibitors are Schedule H drugs" is broader than the list. Naming the four listed molecules, or
  saying "the common ones", would match the schedule exactly. The legal chain the tip now draws -
  Schedule H entry plus rule 65(9)(a) - is correct and is the strongest statement in the chapter.
- 34-1: Indian paracetamol packs vary (several 650 mg products print a lower daily maximum), which
  is why "generally print" plus "the line printed on your own pack governs" is the right framing;
  the sentence no longer asserts a cap. If it is ever tightened further, cite a specific label
  rather than a convention.
- 34-10: the Bio-Medical Waste Management Rules 2016 were not fetched; the claim that they bind
  health-care facilities and not households is correct in substance but asserted without the
  "occupier" definition.
- 34-4: "Indian labels for paediatric cold products are approved by CDSCO" is a shorthand - CDSCO
  approves new drugs, state licensing authorities approve many formulations. Consider "the drug
  licensing authority".
- 34-5 and 34-11 rest on US label material and Indian label practice respectively; both are
  correctly framed as label practice rather than as an Indian statutory duty.
- 34-12's caveat cites s.185 of the Motor Vehicles Act 1988 for driving under the influence; that
  is right for alcohol and drugs, and the tip does not claim the section names medicines.
- 34-9's ICHD-3 thresholds are a classification convention rather than an Indian rule; the tip is
  framed as the headache classification, which is the correct status.

## Access failures

| Target | Failure |
| --- | --- |
| https://www.cdsco.gov.in/ HTML pages | the portal is reachable, but the Rules exist only as a PDF, which the fetch tool rejects ("unsupported content type application/pdf"); the file was retrieved with curl and converted locally, so rule 65(9) and rule 97 were read from its text layer |
| https://www.indiacode.nic.in/ | 403 to this session |
| https://legislative.gov.in/sites/default/files/*.pdf | returned a 4,660-byte HTML page instead of a PDF |
| https://www.fda.gov/ (34-5 communication) | not attempted this pass; the claim was checked by text |

Only this report was written. No chapter JSON, override, manifest, openspec, src, script, dist or
data/en file was modified, and no git state was changed.

Verdict: PASS
## Post-PASS corrections (coordinator, 2026-10-21)

- 34-6: the Schedule H statement now names the four PPIs actually on the list (omeprazole, esomeprazole, pantoprazole, rabeprazole) instead of "the other proton-pump inhibitors", because lansoprazole is not on Schedule H.

Rebuilt from data/en-in/overrides/34.json; regenerated file matched by hand with zero field differences; check-chapter PASS.
