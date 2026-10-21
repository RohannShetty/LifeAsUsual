# Verification: Chapter 16 - Living with Chronic Disease

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/16-living-with-chronic-disease.json
Manifest status: data/en-in/manifest.json lists chapter 16 as status draft, 14 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"]. The chapter JSON and the manifest were read only; no chapter, manifest or source file was edited. This report is the only file written.

## Method

Every high-risk claim named in reports/source-packs/chapter-16.md (16-2, 16-6) was checked against the Indian instrument or authority it now cites, and the two remaining tips that carry a legal or scheme claim (16-5, 16-8) were checked as well. Two further tips were spot-checked for invented schemes, numbers or hotlines (16-3, 16-13).

Official sites were probed on 21 October 2026 with curl and a desktop browser user-agent from C:/Users/$hetty/AppData/Local/Temp/verif; PDFs were converted with pdftotext. Reachable: nha.gov.in, nhm.gov.in, esic.gov.in, wcd.gov.in. mohfw.gov.in returned HTTP 403 to the fetcher and was readable only through curl with a browser user-agent (partial access). cghs.gov.in did not answer the fetcher and pmjay.gov.in failed to fetch (recorded as access failures, not as passes). npcbvi.gov.in failed DNS (EAI_AGAIN) and nmc.org.in returned a cross-origin redirect loop. eSanjeevani is an Angular single-page application whose shell returns no readable text.

A negative claim ("India has no X") cannot be proved by a single instrument. For 16-2 the claim was tested by reading the National Health Authority and National Health Mission material for any national outpatient or chronic-disease certification, and by the design of PM-JAY, which covers hospitalisation packages. No such national certificate was found.

Pass means: the rewritten claim is supported by the Indian instrument or authority it cites, or, where it is a clinical claim, by the guideline named. A claim that describes Chinese medical-insurance practice while citing only an Indian ministry fails, even if the clinical advice around it is sound.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 16-1 | Take medication exactly as prescribed; do not stop when you feel better | No instrument needed | Clinical | 2026-10-21 | yes | Uncontroversial adherence advice; no legal or numeric claim |
| 16-2 | India runs no national outpatient certification that unlocks chronic-disease reimbursement across states | NHA / PM-JAY; NHM; CGHS | Scheme design | 2026-10-21 | yes | No national outpatient certificate found; PM-JAY is a hospitalisation package scheme. nha.gov.in is a JS single-page app with little text and cghs.gov.in did not respond, so this is a negative finding from absence, not a quoted provision |
| 16-2 | Cover depends on the scheme: ESIC, CGHS, PM-JAY, or a state scheme | esic.gov.in; PM-JAY; CGHS | Benefit scope | 2026-10-21 | yes | ESIC site lists medical benefit for insured persons and dependants; CGHS covers central government staff; PM-JAY is eligibility-based. Framing is accurate |
| 16-2 | eSanjeevani provides free teleconsultation in many states | eSanjeevani (MoHFW) | Service | 2026-10-21 | yes | Programme exists under MoHFW; the site is an SPA whose shell carries no text, so the service is verified by name and domain, not by a quoted page |
| 16-3 | Follow the doctor's intervals and record every measurement | No instrument needed | Clinical | 2026-10-21 | yes | Spot-check: no invented scheme, number or hotline |
| 16-4 | Do not stop proper treatment for folk remedies or supplements | No instrument needed | Clinical | 2026-10-21 | yes | Uncontroversial; no regulatory claim |
| 16-5 | Stable chronic-disease patients can get up to 12 weeks of medicines at one time from a community clinic | MoHFW; NHM | No provision found | 2026-10-21 | no | A 12-week dispensing limit is the Chinese long-prescription policy for community health centres. No Indian instrument sets it; NHM has no such national rule and state practice varies. Unsupported as written |
| 16-5 | Community-clinic reimbursement is about 10 percentage points higher than at a higher-level hospital | MoHFW; NHM | No provision found | 2026-10-21 | no | This is the Chinese medical-insurance differential by hospital tier (see also 24-2). India has no such national differential; PM-JAY is package-based, not a tiered percentage |
| 16-6 | India has no single family-doctor registration scheme; the public route is the Ayushman Arogya Mandir | NHM; NHSRC | AAM letter | 2026-10-21 | yes | Verified: NHSRC letter (qps.nhsrcindia.org, aam.pdf) renames SHC/PHC as "Ayushman Arogya Mandir - Primary Health Centre (AAM-PHC)" and defines the service package, including NCD screening |
| 16-6 | PM-JAY hospitalisation, eSanjeevani teleconsultation, and the Clinical Establishments Act apply to a private clinic | NHA; MoHFW; state rules | Scheme / statute | 2026-10-21 | yes | Each element exists; the tip does not overstate what a private retainer covers |
| 16-7 | Dilated eye exam at diabetes diagnosis, then per schedule; annual foot check | No Indian instrument needed | Clinical | 2026-10-21 | yes | Consistent with standard diabetes care; no invented number |
| 16-8 | Drink 2.5-3 litres of water daily and keep salt under 6 g after kidney stones | NICE NG118 | Recommendations 1.8.1 | 2026-10-21 | yes | Verified verbatim: adults 2.5 to 3 litres of water per day; children 1-2 litres; daily salt no more than 6 g; fresh lemon juice; avoid carbonated drinks; 24-hour urine volume target. Substance passes |
| 16-8 | (editorial) caveats contain raw citation markers | Chapter JSON | Caveats field | 2026-10-21 | no | Four CJK characters "〔100〕 〔100〕" remain in the caveats text; see Banned-term check |
| 16-9 | Keep uric acid below 360 umol/L on long-term urate-lowering therapy | No Indian instrument needed | Clinical | 2026-10-21 | yes | Target matches international gout guidance; no invented authority |
| 16-10 | Avoid large single-meal meat and seafood portions and limit alcohol in gout | No instrument needed | Clinical | 2026-10-21 | yes | Uncontroversial dietary advice |
| 16-11 | With HBsAg positive, ultrasound plus AFP every six months; do not stop antivirals on your own | No Indian instrument needed | Clinical | 2026-10-21 | yes | Six-monthly surveillance is standard; advice to remain under physician review is sound |
| 16-12 | Demonstrate inhaler technique; complete pulmonary rehabilitation after an exacerbation | No instrument needed | Clinical | 2026-10-21 | yes | Consistent with COPD guidance; no legal claim |
| 16-13 | Annual uACR and serum creatinine in diabetes or hypertension | No instrument needed | Clinical | 2026-10-21 | yes | Spot-check: standard CKD screening; no invented scheme or hotline |
| 16-14 | Structured exercise for three years after colon cancer surgery and adjuvant chemotherapy | No instrument needed | Clinical | 2026-10-21 | yes | Exercise benefit is well established; the three-year framing is a programme duration, not a legal rule |

## Banned-term check

- JSON: 4 banned/CJK characters, all in tip 16-8 caveats ("〔100〕 〔100〕"). No occurrence of China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY anywhere in the chapter JSON.
- Rendered page: the same 4 characters would render, so the rendered page is not clean.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 16-5 states two Chinese medical-insurance rules (12-week dispensing, ~10-point tier differential) as Indian fact with only MoHFW/NHM cited.
- No invented scheme, number or hotline: PASS. 16-2 and 16-6 name only real schemes (ESIC, CGHS, PM-JAY, Ayushman Arogya Mandir, eSanjeevani); no hotline is asserted.
- No direct equivalent recorded where needed: PASS in part. 16-2 and 16-6 correctly say there is no single Indian equivalent; 16-5 does not.
- Caveats retained: PASS on substance, but 16-8 caveats carry untranslated citation markers.

## Blocking issues

- 16-5: presents the Chinese long-prescription policy (12 weeks of medicines from a community clinic) and the Chinese medical-insurance tier differential (~10 percentage points) as Indian rules, citing only MoHFW/NHM. Neither exists in Indian national policy. Remove or rewrite to Indian state-level practice, or mark as not applicable to India.
- 16-8: four CJK citation markers "〔100〕 〔100〕" remain in the caveats field; the edition must contain zero CJK characters.

Verdict: FAIL
