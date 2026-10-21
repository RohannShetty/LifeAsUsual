# Verification: Chapter 22 - How to Relax

Verifier: independent verifier (chapter 22 re-check, round 3)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/22-how-to-relax.json
Manifest status: draft (tier B, 12 tips, verifier null, humanReview pending)

## Method

All 12 tips in the current build of `data/en-in/chapters/22-how-to-relax.json` were read against the
source chapter and checked against Indian law and the cited primary literature. Indian instruments used:
the Consumer Protection Act 2019 and the Central Consumer Protection Authority's 2022 service-charge
guidelines (read through a state consumer-affairs reproduction, since the CCPA PDF on
consumeraffairs.nic.in failed at the network layer); the National Consumer Helpline page for the 1915
number; the Legal Metrology (Packaged Commodities) Rules 2011; the Narcotic Drugs and Psychotropic
Substances Act 1985; state fire rules, municipal by-laws and the National Building Code of India 2016.
Every DOI was resolved through Crossref, including the two that break the batch filter
(10.1016/S2542-5196(19)30215-3, confirmed as Lancet Planetary Health 3:e469-e477) and the Japan Consumer
Affairs Agency page behind the 2024 bath-drowning figures, read in Japanese and matched to the
vital-statistics table it quotes.

Access failures recorded: indiacode.nic.in returns 403 and was not used; pib.gov.in press releases return
403; the CCPA guidelines PDF on consumeraffairs.nic.in could not be fetched (TypeError: fetch failed), so
the guidelines were read from a state government reproduction of the same text; Indian Kanoon search
pages return navigation only and did not yield BNS section text.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 22-1 | Fire safety is a state subject; state fire rules, municipal by-laws and NBC 2016; a fire NOC underpins the trade licence | NBC 2016 (BIS); state fire rules | – | 2026-10-21 | yes | Correct constitutional and regulatory framing; no invented national fire code |
| 22-2 | No single central rule forces every venue to display prices; MRP rules; a service charge "is not compulsory" per the 2022 guidelines and can be removed; complain on 1915 | CCPA service-charge guidelines 2022 (state reproduction, 2 Aug 2022); consumerhelpline.gov.in | Guidelines 1-3 | 2026-10-21 | yes | Guidelines read: "No hotel or restaurant shall add service charge automatically or by default in the bill", issued by the Central Consumer Protection Authority under s. 18(2) of the CP Act 2019; "Toll Free 1915" confirmed on the NCH site |
| 22-3 | NDPS Act 1985 possession offences turn on small/commercial quantity; special courts | NDPS Act 1985 | – | 2026-10-21 | yes | Quantity-based sentencing and the special-court structure are correct |
| 22-4 | Drugging someone is an offence; no published fine table; synthetic cannabinoids controlled by notification | NDPS Act 1985 and schedules | – | 2026-10-21 | yes | NDPS is correctly cited for the substances; the "administering without knowledge" limb is incompletely sourced — advisory below |
| 22-5 | No escape-room-specific rule; trade licence, fire NOC and police licence; NBC 2016 exit and travel-distance rules | NBC 2016; state licensing | – | 2026-10-21 | yes | Accurate negative claim plus the correct generic instruments |
| 22-6 | Noetel 2024: 218 RCTs, 14,170 participants; walking/jogging g -0.62; yoga -0.55; strength -0.49; only one trial met rigorous standards | DOI 10.1136/bmj-2023-075847 | – | 2026-10-21 | yes | DOI resolves to BMJ 384:e075847; effect sizes and confidence grading match the abstract |
| 22-7 | Hoge 2023: MBSR vs escitalopram, 276 randomised; difference -0.07 (95% CI -0.38 to 0.23); adverse events 78.6% vs 15.4% | DOI 10.1001/jamapsychiatry.2022.3679 | – | 2026-10-21 | yes | DOI resolves to JAMA Psychiatry 80:13; non-inferiority margin -0.495 matches |
| 22-8 | Balban 2023: cyclic sighing vs box breathing, 5 min/day for a month, self-reported, small sample | DOI 10.1016/j.xcrm.2022.100895 | – | 2026-10-21 | yes | DOI resolves to Cell Reports Medicine 4:100895; grade B is appropriate |
| 22-9 | Holt-Lunstad 2015: 70 studies, 3.4 million people, 7 years; RR 1.29 / 1.26 / 1.32 | DOI 10.1177/1745691614568352 | – | 2026-10-21 | yes | DOI resolves to Perspectives on Psychological Science 10:227-237 |
| 22-10 | Green space: 9 cohorts, 7 countries, 8.32 million; HR 0.96 per 0.1 NDVI within 500 m | DOI 10.1016/S2542-5196(19)30215-3 | – | 2026-10-21 | yes | Crossref record: Lancet Planetary Health, pages e469-e477, "Green spaces and mortality" |
| 22-11 | Sauna/bath deaths and alcohol; Tokyo figures; Japan 2024: 7,776 bath-tub drownings, 7,363 aged 65+ | Japan Consumer Affairs Agency, caution_084; Kenttamies 2008 (10.1111/j.1556-4029.2008.00703.x); Suzuki 2015 (10.2188/jea.JE20140068); Mishima 2018 | – | 2026-10-21 | yes | CAA page quotes vital statistics for 2024: 7,776 / 7,363 and warns against bathing after alcohol or sedatives; all three DOIs resolve |
| 22-12 | Helmet use cuts head injury (OR 0.65; 0.41 under 13), Olivier 2017 head 0.49, fatal 0.35; no Indian law requires a helmet on a ski slope | Russell 2010 (10.1503/cmaj.091080); Olivier 2017 (10.1093/ije/dyw153) | – | 2026-10-21 | yes | Both DOIs resolve (CMAJ 182:333-340; IJE 46:278-292); the "no Indian law" claim is a correct negative |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

`npx tsx scripts/check-chapter.ts 22` reports 12 tips and "PASS: no banned term, CJK character or
foreign-jurisdiction term."

## Safety and editorial check

- No unsupported high-risk claim: the medicinal claims are hedged at the level of the trials cited, and
  the alcohol/sauna warning is attributed to Japanese vital statistics rather than presented as an Indian
  finding.
- No invented scheme, number or hotline: 1915 and the National Consumer Helpline are real and current;
  the 2022 guidelines exist and say what the tip says they say.
- No direct equivalent recorded where needed: no Indian equivalent is invented for Japanese bath-death
  statistics or for bicycle-helmet laws; the "no escape-room-specific rule" and "no published fine table"
  statements are correctly framed as absences.
- Caveats retained: the low-confidence grading in 22-6, the small-sample caveat in 22-8 and the
  "self-reported" framing survive.

## Blocking issues

None.

Advisory, not blocking:

- 22-4 sources: "Giving someone a drug without their knowledge is an offence under the Narcotic Drugs and
  Psychotropic Substances Act, 1985" is defensible for the substances but incomplete for the act of
  administering. Add the Bharatiya Nyaya Sanhita, 2023 to Sources and cite its poison/stupefying-substance
  offence (the successor to IPC s. 328). The specific BNS section number could not be confirmed from an
  accessible source in this round (Indiacode 403; Indian Kanoon search pages return navigation only), so
  the section should be verified before it is printed.
- 22-2 attribution: the 2022 service-charge guidelines were issued by the Central Consumer Protection
  Authority, not by the Department of Consumer Affairs in its own name (the CCPA sits within that
  department). "The CCPA's 2022 guidelines" would be exact.

Verdict: PASS
