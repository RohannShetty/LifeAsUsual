# Verification: Chapter 24 - Navigating Healthcare and Doctors

Verifier: independent-verifier-r3
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/24-navigating-healthcare.json
Manifest status: draft (recommend checked)

## Scope of this pass

Round-3 re-verification after the round-2 fixes in commit 7c76d35. The previous report failed on 24-3's invented national referral quota, referral-centre mandate and 2027 deadline; this pass re-checked that repair and re-examined 24-11's gift rule and the rest of the chapter's statutory anchors (item (e) and item (f) of the re-verification brief).

## Method

Read all 15 tips in the built JSON (title, inPlainWords, benefit, caveats, sources). Re-read 24-3 and 24-11 verbatim. Re-checked the instruments behind the chapter's anchors: the NMC Registered Medical Practitioner (Professional Conduct) Regulations 2023, the Prevention of Corruption Act 1988, the Clinical Establishments (Registration and Regulation) Act 2010 (s.1 application), the RPwD Act 2016 (s.2(r) benchmark, s.2(zc) specified disabilities and the Schedule), the DPDP Act 2023 (ss.11-12), the PM-JAY benefit page, and news/official reporting on the West Bengal bed-reservation request. Ran `npx tsx scripts/check-chapter.ts 24` - PASS (15 tips; 0 banned terms, 0 CJK, 0 foreign-jurisdiction terms).

The table records whether a claim was checked by fetch or only by text in this pass. Access failures are recorded below and are never used as evidence.

## Access notes and failures

- indiacode.nic.in (both www and upload hosts) returned 403 or timed out; the CE Act and DPDP Act were therefore read from mirrors (Indian Kanoon for the CE Act; the PRS copy for the DPDP Act). The CE Act text was checked against s.1(2) and is quoted in the table.
- nmc.org.in regulation PDFs: .../2023/02/NMC_RMP_Conduct_Regulations_2023.pdf returned 404; .../2023/08/RMP-Professional-Conduct-Regulations-2023.pdf returned 301 then 404. The regulation text was read from an IDMA-hosted copy of the notified regulations (notification No. R-12013/01/2022/Ethics, 2 August 2023).
- meity.gov.in DPDP PDF: 404. The Act was read from the PRS copy.
- clinicalestablishments.gov.in and clinicalestablishments.mohfw.gov.in: fetch failed / connection timed out (curl 000). mohfw.gov.in's CE Act PDF returned 404.
- telegraphindia.com's article on the West Bengal decision returned 403 to both curl and the page fetcher; the decision was confirmed through the Zee News report and corroborating headlines.
- divyangjan.depwd.gov.in (RPwD assessment guidelines) refused the connection (curl 28); the 21-disability count was checked against the Act's Schedule instead.
- web_fetch refuses application/pdf ("unsupported content type"); PDFs were retrieved with curl and converted with pdftotext.
- pib.gov.in returns 403 to this session.

## Claim checks

| Tip | Claim | Source checked | Basis | Pass? | Note |
| --- | --- | --- | --- | --- | --- |
| 24-1 | No single accumulated deductible; PM-JAY gives an eligible family cashless cover up to ₹5 lakh a year for secondary and tertiary care at an empanelled hospital, with no deductible or co-payment for listed packages; ESIC/CGHS/state schemes differ; primary care first | PM-JAY benefit page, rmlh.mohfw.gov.in (fetched via curl) | fetch | yes | Page states "cover of Rs. 5 lakhs per family per year for secondary and tertiary care hospitalization across public and private empanelled hospitals", "cashless access ... at the point of service", pre-existing conditions from day one, portability and "approximately 1,929 procedures". "No deductible"/"no co-payment" is not printed on that page but matches the scheme's package design (cashless package rates); consistent, not contradicted. |
| 24-2 | No uniform "lower hospital, higher reimbursement" ladder; PM-JAY pays a package rate; compare coverage and empanelment, not hospital level | PM-JAY; ESIC; CGHS | text | yes | Correct negative. No percentage ladder is asserted. |
| 24-3 | FIXED: no national rule reserving appointments or beds for clinic referrals, no national referral-centre mandate and no 2027 deadline; West Bengal's ~10% private-bed request is given as a state administrative example only | West Bengal Health Department announcement (Zee News, 13 June 2026); Telegraph and Eisamay headlines; no national instrument found | fetch | yes | Text now reads: "India has no national rule that requires major hospitals to set aside a share of appointments or beds ... and no national referral-centre mandate or 2027 deadline", then "West Bengal has asked private hospitals to keep about 10% of beds for patients referred by government hospitals, but that is one state's administrative request, not a statute". Zee News (published 13 June 2026) reports the WB health department's direction and a Monday meeting with district nursing-home owners; the Telegraph headline "State push for 10% free beds 'within a month'" and an Eisamay report corroborate. The invented 2027 date and the "must" are gone. Regression test passed. |
| 24-4 | No home-province insurance boundary; PM-JAY is portable across states; CGHS out-of-city treatment normally needs the local wellness centre's permission except in emergency; ESIC referrals stay in the ESIC network | PM-JAY page; CGHS; ESIC | fetch (portability) + text | yes | PM-JAY page: "Benefits of the scheme are portable across the country". The CGHS/ESIC qualifications are accurate. |
| 24-5 | No Indian 12-week prescription rule; a registered doctor prescribes for the clinically appropriate period; schedule medicines need a prescription; stable chronic care can move to primary care | MoHFW; NHA health and wellness centres | text | yes | Correct negative and correct practical advice. |
| 24-6 | No statutory "sealing" ceremony; CE Act 2010 provides for registration/regulation and state rules require records; under DPDP 2023 the patient is data principal and can ask for a copy | CE Act 2010; DPDP Act 2023 ss.11-12 | fetch (both texts) | yes | DPDP s.11(1) "right to obtain from the Data Fiduciary" access to information; s.12 right to correction, completion, updating and erasure. CE Act s.1(2) limits application (see 24-8 note). |
| 24-7 | Patient entitled to a copy of the record; Charter of Patients' Rights 2019 lists access; DPDP 2023 gives a copy right | Charter 2019 (mirrored PDF); DPDP 2023 s.11 | fetch (DPDP) + text (Charter) | yes | Charter right of access is real; DPDP s.11 confirms. |
| 24-8 | Emergency care cannot be refused for want of money or ID; Pt. Parmanand Katara v Union of India (1989); CE Act and Charter support; stabilise first, recover later | Parmanand Katara (1989) 4 SCC 286; CE Act 2010 s.1(2); Charter 2019 | fetch (CE Act) + text (judgment) | yes | The caveat correctly says the CE Act "applies in the states that adopted it". Verified s.1(2): "It applies, in the first instance, to the whole of the States of Arunachal Pradesh, Himachal Pradesh, Mizoram and Sikkim and the Union territories; and it shall apply to such other State which adopts this Act by resolution ... under clause (1) of article 252". |
| 24-9 | RPwD Act 2016 lists 21 specified disabilities; the 2018 rules set how a medical authority assesses percentage and the 40% benchmark; no single national waiting period | RPwD Act 2016 ss.2(r), 2(zc), Schedule; RPwD Rules 2018 | fetch (Act text) + text (Rules) | yes | s.2(r): "person with benchmark disability" means a person with "not less than forty per cent" of a specified disability; s.2(zc) points to the Schedule. The Schedule enumerates the named disabilities (blindness/low vision, leprosy cured, hearing impairment, locomotor, dwarfism, muscular dystrophy, acid attack victim, speech and language, intellectual disability, specific learning disability, autism, mental illness, chronic neurological conditions including multiple sclerosis and Parkinson's, haemophilia, thalassemia, sickle cell, multiple disabilities/deafblindness), which is the DEPwD 21-item enumeration. The 2018 assessment rules are real; DEPwD has since published updated assessment guidelines dated 14 March 2024, which does not make the 2018 reference wrong. |
| 24-10 | District medical board certificate linked to UDID; basis for reservation, concession, scholarship and some social-security benefits; a private letter is not the statutory certificate | RPwD Act 2016; DEPwD UDID (data.gov.in catalogue) | fetch (UDID catalogue link) + text | yes | Correct. |
| 24-11 | FIXED: NMC RMP (Professional Conduct) Regulations 2023 govern conduct; the gift rule targets gifts from pharmaceutical, commercial and corporate-hospital interests rather than a patient's thank-you; a cash queue-jump is a conflict of interest; a government doctor is a public servant under PCA 1988 | NMC RMP (Professional Conduct) Regulations 2023, cl.35; Prevention of Corruption Act 1988 | fetch (regulation text via IDMA copy) | yes | Clause 35 reads: "RMPs and their families must not receive any gifts, travel facilities, hospitality, cash or monetary grants, consultancy fee or honorariums, or access to entertainment or recreation from pharmaceutical companies or their representatives, commercial healthcare establishments, medical device companies, or corporate hospitals under any pretext." The ban is therefore on industry/commercial gifts, not on a patient's thank-you; the tip states exactly that and rests the criminal exposure of a government doctor on the PCA 1988. No general ban on doctors accepting gifts is asserted. Regression test passed. The tip does not print "clause 35", but it names the regulation and states its scope correctly; see residual notes. |
| 24-12 | No national dental-implant price cap; itemise implant, abutment, crown, bone graft, imaging and follow-up; implant is a medical device regulated by CDSCO under the Medical Devices Rules 2017 | CDSCO; Medical Devices Rules 2017; Dentists Act 1948 | text | yes | Correct negative and correct device classification. |
| 24-13 | No national negotiated price for every medicine; ask for a generic or Jan Aushadhi alternative; NPPA caps scheduled prices under DPCO 2013 | PMBI Jan Aushadhi; NPPA; DPCO 2013 | text | yes | Correct; no converted price. |
| 24-14 | Telemedicine Practice Guidelines 2020 let a registered practitioner consult and prescribe online with limits; serious first consultation or restricted drug needs in-person; eSanjeevani | Telemedicine Practice Guidelines 2020; NMC; eSanjeevani | text | yes | Correct statement of the 2020 guidelines. |
| 24-15 | Itemised bill; query duplicates; routes are the state clinical-establishment authority, the consumer commission under CPA 2019, and the scheme grievance channel; medical services are "service" after IMA v. V.P. Shantha (1995); NCH 1915 | Consumer Protection Act 2019; IMA v V.P. Shantha (1995) | text | yes | CPA 2019 and the Shantha position are correctly stated; NCH 1915 is real. No scheme fund-regulation route is invented. |

## Banned-term and currency check

- `npx tsx scripts/check-chapter.ts 24` reports: "chapter 24 (24-navigating-healthcare.json): 15 tips / PASS: no banned term, CJK character or foreign-jurisdiction term."
- Manual scan: no RMB/Chinese-instrument vocabulary remains; the only "province" occurrence is the negative sentence "India has no home-province insurance boundary".
- Amounts: the only money figure in the chapter is PM-JAY's ₹5 lakh per family per year; no invented price cap or converted amount remains.

## Safety and editorial check

- No unsupported high-risk claim: PASS - 24-3's invented national mandate is gone; 24-11 now states the scope of the gift rule accurately.
- No invented scheme, number or hotline: PASS - 1915 and e-Daakhil are real; the 2027 deadline is gone.
- No direct equivalent recorded where needed: PASS - 24-1 to 24-7 and 24-12 to 24-15 state the Indian position; 24-3 now opens with the explicit "no national rule".
- Caveats retained: PASS.

## Residual notes (non-blocking)

1. 24-11 does not print the clause number ("clause 35") even though it names the regulation and describes the clause accurately. Adding "(clause 35)" would let a reader find the rule, but the claim as written is correct.
2. 24-6 describes the CE Act's record-keeping duty without repeating the adoption caveat that 24-8 carries. Because 24-6 speaks of "the state rules made under it" it does not claim nationwide application, but the caveat could be repeated for readers in non-adopting States.
3. 24-9's "21 specified disabilities" is the DEPwD enumeration; the Act's Schedule lists them by category. The current DEPwD assessment guidelines are dated 14 March 2024, so "the rules made in 2018" is accurate but not the latest instrument.
4. The rendered build is stale: dist/chapters/24-navigating-healthcare/index.html (mtime 2026-10-21 18:37) still contains the invented rule ("reserve a specific share of appointments and beds ... by 2027", "referral centers"). The JSON is fixed, but the page must be regenerated before deploy. dist is out of scope for this pass and was not modified.

## Blocking issues

None.

Verdict: PASS
