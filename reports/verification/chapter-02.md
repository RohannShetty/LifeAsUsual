# Verification: Chapter 02 - Do Not Die Slowly

Verifier: independent verifier (third pass, after two fix rounds)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/02-do-not-die-slowly.json (47 tips)
Manifest status: draft (rewriteStatus "draft" for all 47 tips); gate passes, see Method

## Method

Re-derived from the rebuilt chapter and from primary sources; the two earlier rounds of this check were discarded and every finding re-tested rather than carried forward. Four passes.

1. Structure. Field-by-field diff against the chapter 2 entry of data/en/all-chapters.json. Tips 47 against 47, ids 2-1 to 2-47 in identical order. tags, costScore, valueTier, evidenceGrade, disputed and stillVerifying identical for all 47 tips. Three titles differ, all deliberate India adaptations (2-5 quitline, 2-40 FSSAI licence wording, 2-46 spelling). reviewStatus is "draft" throughout, as shipped.
2. Prices. Every dated Indian price checked against a live listing on the access date, and the arithmetic inside each sentence recomputed. Retailer pages render prices client-side and are truncated at 100,000 characters, so listings were read through the r.jina.ai mirror or from listing titles; the source actually read is named in the table.
3. Law and medicine. PECA 2019 read in full; the quitline number read off the NTCP site; every quoted effect size matched against the study abstract (PubMed E-utilities), and every DOI resolved through api.crossref.org to confirm it points at the paper the text describes. Two contested details were checked in full text: Xue 2016's subgroup table (for "Four of these studies") and the Cochrane 2026 update.
4. Citation convention. The chapter omits published titles that contain the source country's name and says so in the sources line. That convention was tested against its own promises: authors kept, disclosure accurate, DOIs resolving, titles without a banned term retained.

Gate: `npx tsx scripts/check-chapter.ts 02` exits 0 with "chapter 2 (02-do-not-die-slowly.json): 47 tips" and "PASS: no banned term, CJK character or foreign-jurisdiction term." The checker inspects only banned terms, CJK characters, foreign-agency terms and the presence of an http source per tip; it does not read prices or prose, so the checks below carry the weight.

Access failures (recorded, not worked around): indiacode.nic.in returns 403 from this network (PECA read on indiankanoon.org/doc/51727498/, the Act as enacted, Act 42 of 2019); pib.gov.in PressReleasePage returns 403 (the health-and-wellness-centre screening claim was confirmed from Ministry screening-drive reporting instead); ab-hwc.nhp.gov.in did not resolve; the MoHFW NCD training module PDF at npcbvi.mohfw.gov.in failed to download; Europe PMC REST returned HTTP 503 all session (abstracts read on PubMed); the Crossref JSON for the Cochrane DOI exceeded the fetch limit (read on PubMed); the Frontiers article body is JavaScript-rendered and its methods could not be read from the page.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 2-1 | Pack-a-day habit roughly ₹200-₹400 | no source found | price | 2026-10-21 | unverified | Plausible for mid and premium brands at ₹20-₹40 a pack; unsourced. Recommendation only. |
| 2-3 | Strip of nine 2 mg gums ₹75-₹105 | 1mg: Nicotex 2 mg 9-pack ₹92.58-₹93.18; 2baconil 9-pack ₹73.25; Netmeds MRP ₹82.80 | price | 2026-10-21 | yes | Band now spans the observed street range (₹73-₹93) up to MRP. Arithmetic holds: 8-12 weeks at 10-20 gums a day is 10-25 strips, i.e. several thousand rupees. |
| 2-5 | Clinic visit free or nearly so in a government hospital | no source found | price | 2026-10-21 | yes | Correct for government OPD care; the earlier ₹200 floor is gone. |
| 2-5 | Quitline 1800-11-2356 | ntcp.mohfw.gov.in: "TO QUIT TOBACCO, CALL 1800 112 356 (TOLL FREE)"; "Quitline ... (Tollfree 1800 11 2356)" | hotline | 2026-10-21 | yes | Correct number, and the call is free as stated. |
| 2-6 | No lawful price; any device illicit; PECA penalties | PECA 2019 ss.3-5, 7-8 (Act 42 of 2019, in force 18 Sep 2019) | law | 2026-10-21 | yes | s.4 bans production, manufacture, import, export, transport, sale, distribution, storage and advertising "whether as a complete product or any part thereof"; s.5 bans knowing storage; s.7 gives up to 1 year / ₹1,00,000 first offence and 3 years / ₹5,00,000 for a repeat; s.8 covers storage. The chapter's penalty sentence matches, and quoting no price is the legally correct choice. |
| 2-6 | Cochrane numbers: 80 trials, 29,861 participants, RR 1.61, +4 quitters, RR 1.75 | PubMed 42642048, Lindson 2026 CD010216.pub11 | medicine | 2026-10-21 | yes | All figures match the abstract, including the 11-trial / 4,114-participant basis, RD 0.01 (-0.01-0.02) for serious adverse events and low-certainty RR 1.75 (1.39-2.20). |
| 2-9 | ₹20-₹30 more per kg of low-sodium salt | Amazon.in: Tata Salt 1 kg ₹29, Tata Salt Lite 1 kg ₹49; Zepto ₹55 | price | 2026-10-21 | yes | ₹20 at Amazon, ₹26-₹28 at quick commerce. |
| 2-9 | SSaSS design and RRs | PubMed 34459569 (Neal 2021) | medicine | 2026-10-21 | yes | 20,995 participants, 600 villages, 75% sodium chloride / 25% potassium chloride substitute, mean 4.74 years; RR 0.88 (0.82-0.95) death, 0.86 stroke, 0.87 major cardiovascular events. The "about five years" and "three-quarters" phrasings are accurate. |
| 2-10 | Floss about ₹125; cleanings ₹800-₹2,500 | Amazon.in Colgate Total 50 m ₹131; Oral-B 50 m ₹124 per count; whatsthecost.in and teeth.in cost guides | price | 2026-10-21 | yes | Published scaling band is ₹800-₹5,000, with the top end being deep scaling plus polishing; ₹800-₹2,500 is the routine part. |
| 2-12 | HWC screens adults from 30 for BP, diabetes and three cancers | Ministry screening-drive reporting (PIB 403); NPCDCS programme pages | scheme | 2026-10-21 | yes, with note | Reporting of the Ministry drive: "100 per cent screening of all individuals aged 30 years and above for prevalent NCDs, including diabetes, hypertension, and ... three cancers - Oral, Breast, and Cervical". The negative claim that India has no nationwide free annual check-up for the over-65s is unverifiable either way. |
| 2-14 | Court fees typically a few hundred rupees per session | no source found | price | 2026-10-21 | unverified | Plausible for hall hire or a private arbitrator. |
| 2-20 | Psychiatrist ₹500-₹1,500 private, less in government | no source found | price | 2026-10-21 | unverified | In range for metro private practice. |
| 2-22 | 28 g/day almonds ₹8,000-₹12,000 a year | mandiprices.co.in APMC Mumbai, 21 Oct 2026: modal ₹994.74/kg, range ₹750-₹1,300/kg | price | 2026-10-21 | yes | 28 g/day = 10.22 kg/year = ₹7,664-₹13,286 at the mandi range, ₹10,166 at modal. The band sits inside the arithmetic. |
| 2-25 | 1 kg leaf tea about ₹500; a few hundred rupees a year | branded CTC: Tata Tea Premium 1 kg ₹820; Society ₹58/100 g | price | 2026-10-21 | yes | Deviation from the first report's suggested ₹1,500-₹2,500 band is the right call: a kg costs ₹500-₹820 and lasts a year or more at three or more cups a week. The earlier band assumed a kg lasts weeks. |
| 2-25 | China-PAR: 100,902 adults, median 7.3 years, HR 0.85 (0.79-0.90), 1.41 and 1.26 years | PubMed 31914807 (Wang 2020) | medicine | 2026-10-21 | yes | Figures match. The caveat now names the confounders (tea drinkers smoking and drinking more) before the adjustment sentence, so the qualifier has an antecedent. |
| 2-26 | ₹15-₹35 a day; 100 g jar ₹350-₹400 lasts a fortnight | dealsspy.in: Bru Gold 100 g ₹324, MRP ₹534 | price | 2026-10-21 | yes | ₹350-₹400 over 14 days = ₹25 a day; 100 g over a fortnight at 3-4 cups a day = 1.7-2.4 g a cup, plausible for instant. |
| 2-27 | ₹30-₹60 a day for 400 g of fruit and vegetables | no source found | price | 2026-10-21 | unverified | Coherent at ₹75-₹150/kg weighted average, realistic for seasonal produce. |
| 2-29 | ₹940-₹1,030 a cylinder; ₹7,500-₹12,500 a year | 1 Oct 2026 domestic prices: Delhi ₹942, Mumbai ₹941.50, Chennai ₹957.50, Lucknow ₹979.50, Patna ₹1,031.50 | price | 2026-10-21 | yes | 8 x ₹940 = ₹7,520 and 12 x ₹1,030 = ₹12,360. The sentence states the household's total gas bill rather than the increment over firewood; defensible, and no PMUY subsidy is asserted. |
| 2-29 | Cohort of 271,217 adults in five rural areas, mean 7.2 years, HR 1.11/1.14/0.87/0.67 | PubMed 29614179 (Yu 2018, JAMA 319(13):1351-1361) | medicine | 2026-10-21 | yes | Cohort size, five rural areas, mean (SD) follow-up 7.2 (1.4) years, and all four hazard ratios match the abstract. The page range and author list in the citation are now correct. |
| 2-30 | - | - | - | - | - | (no price or claim requiring external check) |
| 2-34 | ₹30-₹70 a day for 300-500 ml of milk or curd | no source found | price | 2026-10-21 | unverified | Plausible; top of the band is high for a 1 L pouch at ₹70-₹80. |
| 2-40 | FSS Act licence duty; FSS (Contaminants, Toxins and Residues) Regulations, 2011; GB 2761-2017 limit not Indian law | FSSAI; FSS Act 2006 (indiacode 403, Act read elsewhere); Lei 2024 study record | law | 2026-10-21 | yes, with note | Licensing duty, contaminant regulations and the named standard are as described. Minor: GB 2761-2017 is a national standard, so "that Guangzhou food-safety regulators applied" conflates the enforcing city with the standard-making authority, and the standard is not listed in the sources. |
| 2-42 | Fume extractor ₹5,000-₹25,000 installed | no source found | price | 2026-10-21 | unverified | Plausible for the Indian market. |
| 2-42 | Thirteen case-control studies; OR 1.74 (1.57-1.94); four ventilator studies, OR 2.11 (1.54-2.89) | PubMed 27284248 and full text PMC4881732 (Xue 2016) | medicine | 2026-10-21 | yes | Abstract: 13 articles = 3 population-based + 10 hospital-based case-control studies, 3,596 cases and 6,082 controls, pooled 1.74 and 2.11. Full text Table 2 lists exactly four ventilator studies (Ko 1997 Greater Kaohsiung, Shenyang 2004-2010, Zhong 1999 Shanghai, Zhu 2010 Changsha), so "four of these studies" is correct. |
| 2-42 | Taiwanese study: 1,302 cases vs 1,302 controls; OR 0.49 (0.32-0.76) | PubMed 32317677 (Chen 2020, Sci Rep 10(1):6774) | medicine | 2026-10-21 | yes | Matched pairs in Taiwan 2002-2010 confirmed; the abstract reports long-term extractor use cutting risk "by about 50%", consistent with OR 0.49. |
| 2-42 | Shanghai cohort: 71,320 never-smoking women, 429 cases, HR 1.49/2.03/1.03 | PubMed 24917360 (Kim 2015, IJC 136(3):632-638) | medicine | 2026-10-21 | yes | The split between poor ventilation, 20+ years of coal in poor ventilation, and coal alone is as stated; coal alone is not significant (HR 1.03). |
| 2-45 | Fasting glucose ₹80-₹200 at a private lab | PharmEasy Delhi ₹119 (list ₹299) | price | 2026-10-21 | yes | Observed price sits inside the band. |
| 2-46 | A few tens to a couple of hundred rupees | no source found | price | 2026-10-21 | unverified | Plausible for a packet of nuts or grain. |
| 2-47 | Stool microscopy a few hundred rupees | no source found | price | 2026-10-21 | unverified | Plausible for a private lab. |
| 2-47 | No mainland figures; Clonorchis named; "outside the regions where raw freshwater fish is everyday food" | local text inspection; IARC 2012, Shin 2010, Xia 2015, Qian 2022 | residue | 2026-10-21 | yes | The 9.46 million / Guangxi / Guangdong sentences and the 15-action-plan sentence are gone, no mainland figure survives anywhere in the chapter, and the geographic qualifier now describes a food habit rather than a named region. |
| all | Structure, ids, grading fields | local field-by-field diff against data/en/all-chapters.json | structure | 2026-10-21 | yes | 47/47, ids in order, no difference in tags, costScore, valueTier, evidenceGrade, disputed or stillVerifying. |

## Citation convention check

The chapter gives seven papers (2-25 three, 2-29 one, 2-42 three) as authors, year, journal, volume, pages and DOI, and says in the sources line that the published title is omitted because it names the study country. Tested against its own promises on the access date:

- Disclosed, not silent: yes, in the sources line where it occurs.
- DOIs resolve: yes, all seven through Crossref, to the exact papers the text describes (OTT 9:2987-2992; Sci Rep 10(1):6774; IJC 136(3):632-638; EJPC 27(18):1956-1963; FCT 146:111830; Toxins 14(7):452; JAMA 319(13):1351-1361).
- Authors kept: yes, now complete and correct in all four affected source lines.
- Disclosure accurate: yes; 2-25 no longer calls three survey papers cohorts, and 2-42's wording fits all three.
- Titles without a banned term retained: yes; 2-40, 2-45, 2-46 and 2-47 keep full titles.

Conclusion: acceptable as an editorial convention, not tampering. The bibliography is visibly mixed (a "Da Qing" title stays while a "China-PAR" title does not), which is a consequence of the gate rather than of the citation; the coordinator is recording the rule in the edition report.

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms (title, cost, inPlainWords, benefit, caveats and sources strings checked individually, because the gate does not inspect the sources field the drawer renders)

No country adjective, mainland agency, mainland hotline, mainland insurance scheme or mainland statistic survives in reader-visible text. Remaining place names (Shanghai, Taiwan, Da Qing, Qidong, Guangzhou, Hong Kong) appear only as study sites in prose and citations, which is correct attribution.

## Safety and editorial check

- No unsupported high-risk claim: every quoted effect size now matches a study abstract, and the two contested details (the Da Qing cohort's follow-up and Xue 2016's ventilator subgroup) were checked against the papers. The medical advice itself carries its source caveats.
- No invented scheme, number or hotline: the quitline and PECA are real and correctly stated, the HWC screening age and scope match Ministry material, and the FSSAI/FSS duties are as enacted.
- No direct equivalent recorded where needed: the chapter states plainly where Indian rules differ from the source edition (no lawful e-cigarette sale, no free over-65 check-up, FSSAI licence duty, a foreign contaminant standard flagged as not Indian law).
- Caveats retained: all caveats survive, and the three that had lost their antecedents during the mainland cleanup now read coherently.

## Non-blocking notes

- 2-40: GB 2761-2017 is a national standard enforced in Guangzhou, not a Guangzhou rule; "the limit then in force where the study was done" would be exact, and the standard should be listed in the sources if it is quoted.
- 2-6: cites PECA as "The Prohibition of Electronic Cigarettes Act, 2019. <https://www.indiacode.nic.in/>", a bare India Code homepage; the Act's own page would be better. The parenthetical gloss "Do not accept unknown cartridges" is not the actual title of chapter 22, Item 4 (inherited from the source edition).
- 2-12: the negative claim that India has no nationwide free annual check-up for the over-65s could not be confirmed; it is plausible and consistent with the HWC route described, but it is an assertion about absence.
- Unsourced but plausible amounts, recommendation only: 2-1, 2-14, 2-27, 2-42 (the hood installation range), 2-46, 2-47 (stool microscopy), and 2-34's upper bound. Each is marked unverified in the table rather than treated as a defect, because none is contradicted by available evidence.

## Blocking issues

- None. All seven blocking findings from the first report and all four from the second are closed, and each closure was re-verified against the underlying source rather than accepted on description.

## Post-PASS corrections (coordinator, 2026-10-21)

- 2-6 sources: the Prohibition of Electronic Cigarettes Act, 2019 was cited as the bare India Code
  homepage; it now points at a readable copy (https://indiankanoon.org/doc/51727498/). Only change
  after the PASS verdict; rebuilt from overrides and check-chapter re-run clean.

Verdict: PASS