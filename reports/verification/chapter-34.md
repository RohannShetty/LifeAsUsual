# Verification: Chapter 34 - Safe Home Medications

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/34-safe-home-medications.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-34.md. The clinical tips were checked against their cited trials. The regulatory tips were checked against the instrument they cite, and that is where the chapter fails: 34-4, 34-6, 34-11 and 34-12 rest on Chinese SFDA/NMPA announcements and a Fujian provincial bulletin. One of them is substantively wrong for India rather than merely mis-sourced: 34-6 tells readers omeprazole is available over the counter, which is a Chinese 2022 reclassification; in India omeprazole remains a Schedule H prescription drug. cdsco.gov.in was reachable (HTTP 200) and is not cited by any tip.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 34-1 | Check ingredient lists; only one product should contain acetaminophen (paracetamol) | Larson et al. 2005, Hepatology | - | 2026-10-21 | yes | Correct; paracetamol is the leading cause of acute liver failure in the US series and the duplication warning is sound. |
| 34-2 | Do not give children aspirin, nimesulide or metamizole for fever | Belay et al. 1999 (Reye's); Indian restrictions | - | 2026-10-21 | yes | Correct and consistent with Indian restrictions (nimesulide is not for children under 12; metamizole is not approved for paediatric fever). |
| 34-3 | Over 60, or with GI bleeding, anticoagulants or steroids, ask a doctor before ibuprofen-type painkillers | CNT Collaboration 2013 | - | 2026-10-21 | yes | Correct; the four-fold GI risk figure matches the meta-analysis. |
| 34-4 | Do not give OTC multi-ingredient cold and cough medicines to children under 2 | SFDA Announcement No. 57 of 2021 (China) | - | 2026-10-21 | no | BLOCKING. The advice is good and is international, but the cited instrument is a Chinese label-revision notice for 14 products. For India the authority is the CDSCO labelling and the Drugs and Cosmetics Rules; the chapter cites neither. |
| 34-5 | Avoid ibuprofen and similar NSAIDs after 20 weeks of pregnancy | FDA 2020 | - | 2026-10-21 | yes | Correct. |
| 34-6 | Since 2022 omeprazole enteric-coated tablets are OTC; use no more than 7 days; red-flag symptoms need a doctor | NMPA Announcement No. 68 of 2022 (China) | - | 2026-10-21 | no | BLOCKING and substantively wrong for India. Omeprazole is a Schedule H prescription drug in India; the Chinese OTC reclassification does not apply, so a reader could try to buy it OTC and be refused or self-treat inappropriately. The 7-day and red-flag advice is otherwise sound. |
| 34-7 | Do not ask for antibiotics for a cold | Kenealy and Arroll 2025, Cochrane | - | 2026-10-21 | yes | Correct. |
| 34-8 | For diarrhoea start with ORS; no anti-diarrhoeals for children under 5 | WHO 2005 | - | 2026-10-21 | yes | Correct, and ORS is the Indian standard of care. |
| 34-9 | Limit painkillers to 15 days a month (10 for combination analgesics); medication-overuse headache | ICHD-3, 2018 | - | 2026-10-21 | yes | Correct: 15 days for simple analgesics, 10 for combination/triptan/opioid per ICHD-3. |
| 34-10 | Clear out expired medicines; dispose with packaging in hazardous-waste bins | Lovegrove et al. 2015, Pediatrics | - | 2026-10-21 | yes | The paediatric-ingestion evidence is correct. The disposal instruction assumes a collection scheme; India has no universal take-back, so "hazardous-waste bin" should be softened to "nearest pharmacy or biomedical waste collection point". |
| 34-11 | Avoid alcohol with cephalosporins and metronidazole, and for 7 days after; includes Huoxiang Zhengqi oral liquid and cough syrups | Fujian Provincial Medical Products Administration (2023) | - | 2026-10-21 | no | BLOCKING. The disulfiram-like reaction advice is sound and is standard Indian labelling, but the authority cited is a Chinese provincial regulator and the named product is a Chinese patent medicine. CDSCO-approved labelling is the Indian source. |
| 34-12 | Do not drive, work at heights or operate machinery on chlorpheniramine or diphenhydramine | NMPA ADR Bulletin No. 32 (2010) | - | 2026-10-21 | no | BLOCKING. The sedating-antihistamine warning is correct and appears on Indian labels, but the instrument cited is a Chinese 2010 ADR bulletin. The Indian source (CDSCO label and the Drugs and Cosmetics Rules) is not cited. |

## Banned-term check

- JSON: 0 banned terms. 9 China-specific vocabulary hits ("provincial", "huoxiang", "prc"). 0 rupee and 0 yen signs.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - 34-6 gives a false OTC availability claim for India; the others are correct advice on foreign authority.
- No invented scheme, number or hotline: no invented scheme or hotline; the defect is imported regulatory status (OTC reclassification, label revisions, ADR bulletin).
- No direct equivalent recorded where needed: no CDSCO label, Schedule H classification or Drugs and Cosmetics Rules reference anywhere in the chapter.
- Caveats retained: the clinical tips are well graded; the red-flag lists are appropriate.

## Blocking issues

- 34-4 - Chinese SFDA Announcement No. 57 of 2021 cited for a paediatric cold-medicine warning; no Indian labelling authority.
- 34-6 - omeprazole is presented as OTC on the strength of a Chinese NMPA 2022 reclassification; in India it remains Schedule H prescription-only.
- 34-11 - Fujian Provincial MPA bulletin and Huoxiang Zhengqi are Chinese; CDSCO labelling not cited.
- 34-12 - NMPA ADR Bulletin No. 32 (2010) cited for the antihistamine driving warning; Indian labelling not cited.

Verdict: FAIL
