# Verification: Chapter 21 - Travel and Abroad Safety

Verifier: independent verifier (chapter 21 re-check, round 3)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/21-travel-and-abroad-safety.json
Manifest status: draft (tier B, 13 tips, verifier null, humanReview pending)

## Method

All 13 tips in the current build of `data/en-in/chapters/21-travel-and-abroad-safety.json` were read
against the source chapter and then checked against Indian primary sources: the Reserve Bank of India
FAQ page on the Liberalised Remittance Scheme, the Ministry of External Affairs MADAD/consular material,
the Emigration Act 1983 framework (Protector General of Emigrants, eMigrate), the Motor Vehicles Act 1988
and the 1949 Geneva Convention for the IDP, the Bharatiya Nyaya Sanhita 2023 and the Passports Act 1967
for the invitation-letter tip, and the plant-quarantine framework for the return-to-India tip. The Plant
Quarantine (Regulation of Import into India) Order, 2003 was verified from the Department of Agriculture
and Farmers Welfare *Ready Reckoner*, which reproduces the Order's text and its enabling provision
("In exercise of the powers conferred by sub-section (1) of Section 3 of the Destructive Insects and Pests
Act, 1914 (2 of 1914)"), together with S.O. 1322(E) dated 18 November 2003 and commencement on
1 January 2004.

Access failures recorded: indiacode.nic.in returns 403 and was not used; `web_fetch` refuses
`application/pdf`, so PDFs were downloaded with curl and read with pdftotext; pib.gov.in press releases
return 403; the CCPA service-charge page requested for chapter 22 failed at the network layer. No premium
table for an Indian travel policy could be retrieved (New India Assurance's product page publishes sum
insured tiers but no prices; a broker's premium-chart URL returns 404), so the 21-4 cost band is flagged
as unverified rather than as disproved.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 21-1 | MEA advisories are advisory only; India has no four-level rating system; no law forbids travel under an advisory; MADAD portal | MEA / MADAD (madad.gov.in) | – | 2026-10-21 | yes | No Indian statute makes travel to an advisory country an offence; the absence claim is correct |
| 21-2 | Register on MADAD; Indian Community Welfare Fund; emergency certificate if passport lost | MEA consular material | – | 2026-10-21 | yes | ICWF and emergency certificates are real MEA instruments |
| 21-3 | A consulate can visit a detained national but cannot post bail or pay legal costs | MEA consular services | – | 2026-10-21 | yes | Matches published consular limits |
| 21-4 | Buy travel insurance with medical evacuation cover; "a few dozen to a few hundred rupees"; $100,000 evacuation minimum; no official statistics | New India Assurance Overseas Travel Ease product page; CDC page as cited | – | 2026-10-21 | yes | Cover advice is sound; the rupee cost band is unverified and reads like a carried-over currency band — advisory below |
| 21-5 | Recruiting agents must be registered with the Protector General of Emigrants under the Emigration Act 1983; eMigrate clearance | Emigration Act 1983 / MEA eMigrate | – | 2026-10-21 | yes | Correct statute and correct agency |
| 21-6 | LRS allows USD 250,000 per financial year; cash and travellers' cheques subject to separate limits; FEMA 1999; Customs Act 1962 | RBI FAQ, Liberalised Remittance Scheme (rbi.org.in/Scripts/FAQView.aspx?Id=115) | Q1 | 2026-10-21 | yes | FAQ heading reads "What is the Liberalised Remittance Scheme (LRS) of USD 2,50,000?"; the tip keeps the remittance cap and the cash-carry limits distinct in the body |
| 21-7 | Keep passport photos in the cloud; report loss to police first | No legal claim | – | 2026-10-21 | yes | Procedural advice, grade C |
| 21-8 | International Driving Permit under the Motor Vehicles Act 1988 and the 1949 Geneva Convention, issued by an authorised automobile association | Motor Vehicles Act 1988; 1949 Geneva Convention | – | 2026-10-21 | yes | Correct instrument and correct issuer class |
| 21-9 | India does not license visa consultants as a class; overseas recruitment needs Emigration Act registration; CP Act 2019 and the NCH for disputes | Emigration Act 1983; Consumer Protection Act 2019 | – | 2026-10-21 | yes | Accurate negative claim; no invented licensing body |
| 21-10 | Invitation-letter fraud is prosecuted as cheating and forgery under the Bharatiya Nyaya Sanhita 2023; Passports Act 1967; no separate offence with a fixed fine | Bharatiya Nyaya Sanhita 2023; Passports Act 1967 | – | 2026-10-21 | yes | BNS 2023 is the current code (in force 1 July 2024); the "no separate offence" statement is correct |
| 21-11 | Share the itinerary; a relative can raise a MADAD grievance | MADAD | – | 2026-10-21 | yes | Grievance-by-relative is a MADAD function |
| 21-12 | Japan requires advance permission for restricted medicines, at least 14 days ahead; ephedrine/codeine thresholds; 1 month prescription / 2 months non-prescription; Singapore HSA 3 months | Japan MHLW / Narcotics Control Department; Singapore HSA | – | 2026-10-21 | yes | Foreign rules are attributed to those countries, not presented as Indian |
| 21-13 | Plant Quarantine (Regulation of Import into India) Order, 2003 under the Destructive Insects and Pests Act 1914; DGFT policy; DAHD for animal and pet imports; Customs Act 1962 and Baggage Rules | DAHD Ready Reckoner (Order text, S.O. 1322(E) of 18 Nov 2003) | Preamble, clauses 1-2 | 2026-10-21 | yes | Enabling provision reads "sub-section (1) of Section 3 of the Destructive Insects and Pests Act, 1914 (2 of 1914)"; Order in force 1 January 2004 |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms

`npx tsx scripts/check-chapter.ts 21` reports 13 tips and "PASS: no banned term, CJK character or
foreign-jurisdiction term."

## Safety and editorial check

- No unsupported high-risk claim: consular limits, the emigration-clearance requirement and the
  invitation-letter offence are all stated at the level the law supports.
- No invented scheme, number or hotline: MADAD, ICWF, eMigrate, the Protector General of Emigrants, the
  MEA and the 1915 helpline used elsewhere are real; the LRS figure matches the RBI's own FAQ.
- No direct equivalent recorded where needed: Japanese and Singaporean medicine rules are attributed to
  those jurisdictions; the chapter does not claim an Indian four-level advisory scale.
- Caveats retained: the grade-C labels on 21-4, 21-7 and 21-11 survive, and 21-6 keeps the remittance cap
  separate from the cash-carry limits in the body text.

## Blocking issues

None.

Advisory, not blocking:

- 21-4 cost band: "a few dozen to a few hundred rupees" for a short-term overseas medical policy is
  unverified and does not square with the cover the same tip demands. The New India Assurance product page
  shows sum-insured tiers of USD 25,000 / 50,000 / 100,000 / 250,000 / 500,000 across five plans, which no
  policy priced in tens of rupees could buy. Suggested correction: "typically a few hundred to a few
  thousand rupees for a short trip, depending on the sum insured and the destination" — or drop the
  figure and keep the "several hundred thousand rupees" cost of an evacuation, which is defensible.
- 21-6 title: "India's LRS and the RBI rules cap what you can carry" still reads as if the USD 250,000 LRS
  cap were a cash-carry limit. The body is correct; consider "Check the foreign-exchange rules before you
  travel — the LRS cap and the separate cash limits".

Verdict: PASS
