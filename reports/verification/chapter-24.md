# Verification: Chapter 24 - Navigating Healthcare and Doctors

Verifier: independent-verifier-048d208e
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/24-navigating-healthcare.json
Manifest status: draft (recommend checked)

## Method

Read all 15 tips, the source pack (which marks 24-8, 24-10, 24-13 and 24-14 as high-risk) and the previous failing report. Used that report's blocking list as a regression test: the accumulated deductible, the hospital-tier reimbursement ladder, out-of-province approval, the 12-week prescription, record sealing, the ten-grade disability standard, the Nine Guidelines, the dental-implant price cap and the NHSA fund-regulation route. All of those Chinese rules are gone from the current text except the referral-quota rule in 24-3. Checked the Indian replacements against: the PM-JAY benefit page (rmlh.mohfw.gov.in, because nha.gov.in is a JavaScript shell with no readable text), the Charter of Patients' Rights 2019 (a mirrored PDF, because the NHRC copy was not a valid PDF and the PIB release returned 403), the NMC Registered Medical Practitioner (Professional Conduct) Regulations 2023 (an IDMA excerpt; the nmc.org.in full PDF returned 404), the RPwD Act 2016 and the 2018 assessment rules, the Telemedicine Practice Guidelines 2020, CDSCO/Medical Devices Rules 2017, and the Consumer Protection Act 2019. Ran `npx tsx scripts/check-chapter.ts 24` (PASS, 0 banned terms/CJK).

For 24-3 I also searched for an Indian referral-quota instrument: the only hit was a West Bengal administrative decision asking private hospitals to reserve 10% of beds for government-referred patients. No national statute, rule, scheme guideline or 2027 deadline was found.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 24-1 | PM-JAY gives an eligible family cashless cover up to ₹5 lakh a year for secondary and tertiary care at empanelled hospitals, no deductible or co-payment for listed packages; ESIC/CGHS/state schemes differ | PM-JAY benefit page, rmlh.mohfw.gov.in | Key Features / Benefit Cover | 2026-10-21 | yes | Page states "Rs. 5 lakhs per family per year", cashless at point of service, pre-existing conditions from day one, portability. No deductible language. |
| 24-2 | No uniform "lower hospital, higher reimbursement" ladder; PM-JAY pays a package rate; compare coverage and empanelment, not hospital level | PM-JAY; ESIC; CGHS | - | 2026-10-21 | yes | Correct negative. No percentage ladder is asserted. |
| 24-3 | "Major hospitals must set aside a portion of appointments and beds specifically for patients referred from local clinics... establish a referral center... fully implemented by 2027"; lead hospitals in integrated networks must reserve a specific share | MoHFW; NHA | - | 2026-10-21 | no | No national Indian instrument creates a reserved referral quota, a referral-centre mandate or a 2027 implementation deadline. The only similar measure found is a West Bengal administrative request that private hospitals reserve 10% of beds for government-referred patients. The 2027 date and the "must" are invented; the tip is the Chinese 分级诊疗/医联体 rule in Indian dress. |
| 24-4 | No home-province insurance boundary; PM-JAY is portable across states; CGHS out-of-city treatment normally needs the wellness centre's permission except in emergency; ESIC referrals stay in network | PM-JAY; CGHS; ESIC | Portability | 2026-10-21 | yes | PM-JAY page confirms portability. The CGHS/ESIC qualifications are accurate. |
| 24-5 | No Indian 12-week prescription rule; a registered doctor prescribes for the clinically appropriate period; schedule medicines need a prescription; stable chronic care can move to primary care | MoHFW; NHA health and wellness centres | - | 2026-10-21 | yes | Correct negative and correct practical advice. |
| 24-6 | No statutory record-sealing ceremony; CE Act 2010 and state rules require records; DPDP Act 2023 gives the patient access as data principal | Clinical Establishments Act 2010; DPDP Act 2023; Charter of Patients' Rights 2019 | DPDP ss.11-12 | 2026-10-21 | yes | CE Act is a real registration/regulation statute; state rules require record-keeping. DPDP s.11 gives access and s.12 correction/erasure. |
| 24-7 | Patient entitled to a copy of the medical record; Charter 2019 lists access; DPDP Act 2023 gives a copy right | Charter of Patients' Rights 2019; DPDP Act 2023; CE Act 2010 | Charter right 3; DPDP s.11 | 2026-10-21 | yes | Charter PDF: "Right to records... access the original copy of their all medical records" and a copy of clinical records. |
| 24-8 | A hospital cannot refuse emergency treatment for want of money or ID; Parmanand Katara (1989); CE Act 2010 and Charter support; stabilise first, recover later | Pt. Parmanand Katara v Union of India (1989) 4 SCC 286; CE Act 2010; Charter 2019 | - | 2026-10-21 | yes | Correct citation and correct statement of the duty. |
| 24-9 | RPwD Act 2016 lists 21 specified disabilities; 2018 rules set assessment and the 40% benchmark; no single national waiting period; assess the residual impairment | RPwD Act 2016; RPwD Rules 2018 | ss.2(zc), 2(y); Rules | 2026-10-21 | yes | 21 disabilities and 40% benchmark are correct; the "wait until stable" advice is clinical, not a statutory waiting period, and the text says so. |
| 24-10 | District medical board certificate linked to UDID; basis for reservation/concession/scholarship; private letter is not the statutory certificate | RPwD Act 2016; DEPwD UDID portal | - | 2026-10-21 | yes | Correct. |
| 24-11 | Doctor's conduct governed by NMC RMP (Professional Conduct) Regulations 2023; a government doctor is a public servant under the PCA 1988; cash gift is a conduct violation | NMC Regulations 2023; Prevention of Corruption Act 1988 | NMC cl.35; PCA ss.7-9 | 2026-10-21 | yes | The instrument and the PCA statement are right. Note: the clause produced (35) bars gifts from pharmaceutical/commercial/corporate-hospital entities, not gifts from patients; the blanket "cash gift is a conduct violation" is broader than that clause. Narrow the sentence to "a cash gift is treated as misconduct under professional-conduct rules and, for a government doctor, can attract the PCA" or cite the patient-gift clause if one is retained in the full regulations. Non-blocking, but tighten it. |
| 24-12 | No national dental-implant price cap; itemise implant, abutment, crown, graft, imaging, follow-up; implant is a medical device under CDSCO/Medical Devices Rules 2017 | CDSCO; Medical Devices Rules 2017; Dental Council of India | - | 2026-10-21 | yes | Correct negative and correct device classification. No converted Chinese price cap. |
| 24-13 | No national insurance-negotiated price for every medicine; ask for a generic or Jan Aushadhi alternative; PMBI runs Jan Aushadhi; NPPA caps scheduled prices | PMBI Jan Aushadhi; NPPA; CDSCO | - | 2026-10-21 | yes | Correct. |
| 24-14 | Telemedicine Practice Guidelines 2020 allow a registered practitioner to consult/prescribe online with limits; first consultation for serious condition or restricted drug needs in-person; eSanjeevani | Telemedicine Practice Guidelines 2020; NMC; eSanjeevani | - | 2026-10-21 | yes | Correct statement of the 2020 guidelines. |
| 24-15 | Itemised bill; query duplicates; routes are state clinical-establishment authority, consumer commission under CPA 2019, and scheme grievance | Consumer Protection Act 2019; NCH; e-Daakhil; NHA | CPA ss.2(11), 2(42), 35 | 2026-10-21 | yes | Medical services are "service" under the CPA; NCH 1915 and e-Daakhil are real. No Chinese fund-supervision route. |

## Banned-term check

- JSON: 0 banned terms, 0 CJK characters; the only "province" occurrence is the negative sentence "India has no home-province insurance boundary". `npx tsx scripts/check-chapter.ts 24` reports PASS.
- Rendered page: not rebuilt in this pass; the JSON is the content source and is clean.

## Safety and editorial check

- No unsupported high-risk claim: FAIL — 24-3 states a national reserved-appointment/bed quota, a referral-centre mandate and a 2027 deadline that no Indian instrument contains.
- No invented scheme, number or hotline: FAIL — the 2027 deadline and the "must reserve a specific share" rule are invented for India; 1915 and e-Daakhil are real.
- No direct equivalent recorded where needed: PASS for 24-1 to 24-7 and 24-12 to 24-15; FAIL for 24-3, which does not say India has no such national rule.
- Caveats retained: PASS — caveats are Indian and no CJK markers remain.

## Blocking issues

- 24-3: Delete the national mandate. Replace the first two sentences with an accurate statement, for example: "India has no national rule requiring major hospitals to reserve appointments or beds for referred patients, and no national referral-centre mandate or 2027 deadline. Some states have administrative arrangements — West Bengal has asked private hospitals to reserve 10% of beds for government-referred patients — but this is state policy, not a national entitlement. In practice, ask the hospital's OPD/referral desk or your primary-care doctor for a referral, and do not use touts." Keep the anti-scalper advice.

Verdict: FAIL
