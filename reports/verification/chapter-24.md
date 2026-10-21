# Verification: Chapter 24 - Navigating Healthcare and Doctors

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/24-navigating-healthcare.json
Manifest status: data/en-in/manifest.json lists chapter 24 as status draft, 15 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"], bannedTerms 0. That field is wrong: the JSON contains 40 CJK characters and the string "Yibaofa" (yibao). Read only; nothing was edited.

## Method

The source pack marks 24-8 (emergency care cannot be refused), 24-10 (disability certificate and UDID), 24-13 (generic and Jan Aushadhi medicines) and 24-14 (teleconsultation) as high-risk; all four were checked and all four are correctly rewritten to India. The failures are in the other eleven tips, which still describe Chinese medical insurance. Every tip was therefore checked: 24-1 to 24-7 and 24-15 for Chinese insurance and dispute rules, 24-9 and 24-11 for Chinese standards and ethics rules, 24-12 for the dental-implant price reform.

Official sites were probed on 21 October 2026 with curl and a desktop browser user-agent from C:/Users/$hetty/AppData/Local/Temp/verif. Reachable: nha.gov.in, esic.gov.in, janaushadhi.gov.in (a JS single-page app: 3.9 KB with no readable content), swavlambancard.gov.in (via web_fetch), nhm.gov.in. mohfw.gov.in and indiacode.nic.in returned HTTP 403 to the fetcher and were readable only through curl with a browser user-agent (partial access). esanjeevani.mohfw.gov.in is an Angular app with no readable text. pmjay.gov.in failed to fetch.

Pass means: the claim matches the Indian instrument or scheme it cites. Chinese medical-insurance mechanics (deductible accumulation, tier differentials, referral rules, record sealing, disability grading, the Nine Guidelines, dental price governance, fund supervision) fail even where the surrounding patient advice is sound.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 24-1 | For common illness go to a community clinic first; referrals step up to larger hospitals; the hospital deductible is then counted only once | MoHFW; NHA | Whole tip | 2026-10-21 | no | "Deductible calculated only once" is the Chinese 起付线 accumulation rule across referral levels. PM-JAY has no deductible; it pays packages up to a ceiling. India has no stepped referral requirement for insurance |
| 24-2 | Within one insurance region, the lower the hospital level the higher the reimbursement rate, by about 10 percentage points | MoHFW; NHA | Whole tip | 2026-10-21 | no | Chinese reimbursement differential by hospital tier. Indian schemes (PM-JAY, ESIC, CGHS, state schemes) do not set a percentage ladder by hospital level. Caveats also contain CJK markers "〔10000〕〔10000〕〔3000〕〔3000〕〔80〕〔80〕〔70〕〔70〕〔1000〕" |
| 24-2 | (editorial) CJK markers in caveats | Chapter JSON | Caveats | 2026-10-21 | no | Nine Chinese bracket tokens remain |
| 24-3 | Reach a major hospital through a clinic or the hospital's referral centre, not a scalper | No Indian instrument | Whole tip | 2026-10-21 | yes | The anti-scalper advice is sound; the "referral centre" framing is Chinese practice but the tip makes no false legal claim |
| 24-4 | Before care outside your home province, ask locally; the need should be assessed by an associate chief physician or higher | No Indian instrument | Whole tip | 2026-10-21 | no | "Home province" and "associate chief physician or higher" approval for out-of-province treatment is China's 异地就医 referral rule. India has no provincial insurance boundary of this kind and no such approval grade; treatment is portable under PM-JAY's portability for eligible households |
| 24-5 | Stop using tertiary hospitals as prescription hubs; stable chronic patients should go to primary care; primary clinics can issue up to 12 weeks of medicines | No Indian instrument | Whole tip | 2026-10-21 | no | The 12-week long-prescription rule and the campaign to divert stable patients from tertiary hospitals are Chinese policy (and the same defect as 16-5). India has no 12-week dispensing rule; the cross-reference to Section 16 carries the error forward |
| 24-6 | If you doubt the treatment, ask to seal the medical records on the spot; both parties present, a list drawn up, each side gets a copy | No Indian instrument | Whole tip | 2026-10-21 | no | 封存病历 is the Chinese 医疗纠纷预防和处理条例 procedure. India has no statutory record-sealing ritual; the patient's route is a certified copy under the Clinical Establishments Act/state rules and the RTI or a court application |
| 24-7 | Keep a personal copy of records, test reports and scans; caveat cites "Article 16 of the Regulations on Prevention and Handling of Medical Disputes" and Beijing Municipal Health Commission 2019 | No Indian instrument | Caveat | 2026-10-21 | no | Keeping copies is sensible, but the cited provision and the Beijing source are Chinese; caveats also carry CJK markers "〔80〕〔80〕〔70〕〔70〕〔2024〕〔30〕〔180〕〔40〕〔40〕" |
| 24-8 | Emergency care cannot be refused for want of money or ID; the hospital must stabilise first | Parmanand Katara v. Union of India (1989); CE Act 2010; Charter of Patients' Rights | Whole tip | 2026-10-21 | yes | Correct: Supreme Court in Parmanand Katara (1989) 4 SCC 286; the Charter of Patients' Rights (2019) and the CE Act support the duty. The rewrite is sound |
| 24-9 | Disability assessment must wait until treatment is complete; doing it early gives a lower rating; the "Classification of Human Injury and Disability Levels" has ten grades | No Indian instrument | Whole tip | 2026-10-21 | no | The ten-grade 人体损伤致残程度分级 is the Chinese standard. India assesses disability under the RPwD Act 2016 (21 specified disabilities, 4-100% benchmark disability under the 2018 rules) and the UDID guidelines; the waiting rule and the ten grades are not Indian |
| 24-10 | After treatment, get a disability certificate and a UDID from the district medical board | RPwD Act 2016; DEPwD; swavlambancard.gov.in | Whole tip | 2026-10-21 | yes | Correct: the certificate is issued by a medical board, and the UDID is generated on the UDID portal; swavlambancard.gov.in was reachable on 2026-10-21 |
| 24-11 | Thank doctors with letters, banners or ratings instead of cash; the rules prohibit money, not gratitude; "Nine Guidelines on Ethical Conduct for Medical Staff (No. 41, 2021)" | No Indian instrument | Whole tip | 2026-10-21 | no | The Nine Guidelines (九项准则, 国卫医发〔2021〕41号) are Chinese. India's rules are the NMC Registered Medical Practitioner (Professional Conduct) Regulations and the Prevention of Corruption Act 1988 for public hospitals; the cited instrument does not exist in India. Caveats also carry CJK markers "〔40〕 〔40〕" |
| 24-12 | Dental implant bundled price reform: NHSA, Yibaofa [2022] No. 27, ₹63,900 cap, ₹2,13,200 down to ₹85,300-99,500 | No Indian instrument | Whole tip | 2026-10-21 | no | 医保发〔2022〕27号 is a National Healthcare Security Administration document; the price cap and the before/after figures are the Chinese dental implant campaign. India has no national implant price cap; CDSCO regulates devices and the Dental Council regulates practice. The string "Yibaofa" is the banned term yibao in romanised form |
| 24-13 | If a medicine is out of stock, ask for a generic or a Jan Aushadhi alternative; not a "negotiated" price | PMBI; NPPA; CDSCO | Whole tip | 2026-10-21 | yes | Correct: Jan Aushadhi is run by PMBI under the Department of Pharmaceuticals, and NPPA caps scheduled prices; janaushadhi.gov.in was reachable (SPA, no readable text) |
| 24-14 | For a stable chronic disease a teleconsultation can renew a prescription; use a registered doctor and a recognised platform | Telemedicine Practice Guidelines 2020; NMC; eSanjeevani | Whole tip | 2026-10-21 | yes | Correct: the 2020 Guidelines allow a registered medical practitioner to renew a prescription after a teleconsultation, with limits on listed medicines |
| 24-15 | Audit itemised bills, verify uninsured self-pay items before consenting, complain to the hospital dispute desk, report fraud to "healthcare security authorities"; NHSA Order No. 5 | No Indian instrument | Whole tip | 2026-10-21 | no | 医疗保障基金使用监督管理条例 (NHSA Order No. 5) and the "healthcare security authorities" route are Chinese. India's routes are the state clinical establishment grievance mechanism, the National Consumer Helpline, and the NHA's PM-JAY fraud reporting for empanelled hospitals |

## Banned-term check

- JSON: 40 CJK characters and 1 occurrence of "yibao" (in "Yibaofa [2022] No. 27"). CJK markers sit in 24-2, 24-7 and 24-11 caveats. No China, Chinese, mainland, RMB, yuan, hukou, dibao or CNY appears literally.
- Rendered page: the 40 CJK characters and "Yibaofa" would render, so the rendered page is not clean.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 24-1, 24-2, 24-4 and 24-6 state Chinese insurance and record rules as Indian law; 24-9 states a Chinese disability standard; 24-12 states a Chinese price cap.
- No invented scheme, number or hotline: FAIL. "Healthcare security authorities", NHSA Order No. 5, Yibaofa [2022] No. 27 and the ₹63,900 implant cap are Chinese and do not exist in India; the 10-percentage-point tier differential and 12-week prescription are invented for India.
- No direct equivalent recorded where needed: FAIL. The chapter does not say that India has no deductible, no tier differential, no out-of-province approval grade and no national implant price cap.
- Caveats retained: FAIL in part: three caveats carry untranslated CJK markers and one cites a Chinese regulation.

## Blocking issues

- 24-1: single deductible across referral levels is Chinese 起付线 accumulation; PM-JAY has no deductible.
- 24-2: ~10 percentage point reimbursement differential by hospital level is Chinese; plus nine CJK markers in caveats.
- 24-4: out-of-province approval by an associate chief physician or higher is China's 异地就医 rule; no Indian equivalent.
- 24-5: 12-week long prescriptions and diverting stable patients from tertiary hospitals are Chinese policy; the tip cross-refers to the defective 16-5.
- 24-6: sealing medical records with a list and copies on the spot is the Chinese 医疗纠纷预防和处理条例 procedure.
- 24-7: caveat cites "Article 16 of the Regulations on Prevention and Handling of Medical Disputes" and Beijing Municipal Health Commission 2019, plus CJK markers.
- 24-9: the ten-grade "Classification of Human Injury and Disability Levels" is the Chinese 人体损伤致残程度分级; India uses the RPwD Act 2016 assessment.
- 24-11: "Nine Guidelines on Ethical Conduct for Medical Staff (No. 41, 2021)" is Chinese 九项准则; plus CJK markers.
- 24-12: NHSA / Yibaofa [2022] No. 27, the ₹63,900 cap and the ₹2,13,200 to ₹85,300-99,500 figures are Chinese; "Yibaofa" is the banned term yibao.
- 24-15: NHSA Order No. 5 (医疗保障基金使用监督管理条例) and "healthcare security authorities" are Chinese.

Verdict: FAIL
