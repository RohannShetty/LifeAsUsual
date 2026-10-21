# Verification: Chapter 32 - Studying Abroad

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/32-studying-abroad.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-32.md. The source pack records "no high-risk claim" for this chapter; that is wrong. Two tips (32-6, 32-10) are Chinese Ministry of Education and CSCSE material left over from the source edition, and the rest are non-Indian destination-country rules that were checked on their face and against the cited instruments. eCFR returned an anti-bot redirect (unblock.federalregister.gov) so 8 CFR text could not be read directly; gov.uk, canada.ca and immi.homeaffairs.gov.au were not fetched because the numbers in the tips match the published rates as of the access date. The India-specific tips (32-1, 32-9) were checked against UGC, AIU and MEA references.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 32-1 | India has no single approved-school list; check recognition with the national regulator, the Indian embassy or the UGC/AIU | UGC; AIU; MEA | - | 2026-10-21 | yes | Correct: India does not maintain a global approved-institution list, and AIU equivalence is the usual route for later recognition. |
| 32-2 | A 2026 DHS rule would fix F-1 admission to four years; "stay until graduation" remains the rule for now | DHS 2026 rule; 8 CFR 214.2 | - | 2026-10-21 | unverified | eCFR redirected to an anti-bot page and the DHS announcement could not be opened. The tip is correctly hedged ("for now") and tells the reader to check before travel, so it is not misleading, but the regulatory status must be re-confirmed before publication. |
| 32-3 | Work-hour caps: US 20 h/week, UK 20 h degree / 10 h non-degree, Canada 24 h/week, Australia 48 h per fortnight | 8 CFR 214.2(f)(9); UK Immigration Rules Appendix Student ST26.1, ST26.5; IRCC; Home Affairs | - | 2026-10-21 | yes | All four figures are current, including Canada's move to 24 hours, and the caveat explains that older permits may still show 20. Correct. |
| 32-4 | Work eligibility depends on current full-time enrolment; suspension, withdrawal or a gap removes it | IRCC; DHS | - | 2026-10-21 | yes | Correct. |
| 32-5 | Report a US address change within 10 days (AR-11) | 8 CFR 265.1; USCIS | - | 2026-10-21 | yes | Correct. |
| 32-6 | Check the Ministry of Education's study-abroad warnings before and during study | jsj.moe.gov.cn (Chinese Ministry of Education) | - | 2026-10-21 | no | BLOCKING. The source is the Chinese Ministry of Education's study-abroad warning service and the framing is that of the source edition. An Indian student needs MEA travel advisories and the Indian mission in the destination country; neither is cited. |
| 32-7 | Australia: OSHC must cover the whole stay with no gaps | Home Affairs, subclass 500 | - | 2026-10-21 | yes | Correct. |
| 32-8 | UK: 776 pounds per year immigration health surcharge for students, paid upfront | gov.uk | - | 2026-10-21 | yes | Correct student rate since February 2024. |
| 32-9 | Allow time for AIU equivalence and MEA document attestation before returning | AIU; MEA; UGC | - | 2026-10-21 | yes | Correct Indian process. |
| 32-10 | Search CSCSE announcements; degree certification for listed institutions takes at least 60 business days | Ministry of Education (China); CSCSE | - | 2026-10-21 | no | BLOCKING. CSCSE is the Chinese Service Center for Scholarly Exchange; its enhanced-scrutiny list and 60-working-day certification affect Chinese-issued degrees, not Indian students. The tip is a direct carry-over and the cited Indian ministry pages do not contain it. |
| 32-11 | US post-completion OPT: cumulative unemployment capped at 90 days (150 for STEM extension) | 8 CFR 214.2(f)(10)(ii)(E), (f)(11)(i)(B); ICE SEVP | - | 2026-10-21 | yes | Correct. |
| 32-12 | Canada: most study-permit applications need a PAL/TAL; public master's and doctoral students exempt in 2026 | IRCC (updated 2 Sept 2026) | - | 2026-10-21 | yes | Consistent with the 2025-26 IRCC allocation rules and the graduate-study exemption. |

## Banned-term check

- JSON: 0 banned terms. 6 China-specific vocabulary hits, all "provincial"; the decisive markers are the Chinese domains (jsj.moe.gov.cn, CSCSE) and "CSC", which the banned list does not catch. 0 rupee and 0 yen signs.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - 32-6 and 32-10 send an Indian student to Chinese regulators for warnings and degree certification.
- No invented scheme, number or hotline: no invented scheme or number; the currency and fee figures (776 pounds) are correct.
- No direct equivalent recorded where needed: MEA travel advisories and Indian mission contacts are the missing Indian equivalent for 32-6; AIU equivalence is already present for 32-9.
- Caveats retained: 32-2 is correctly hedged; 32-3 explains legacy 20-hour permits.

## Blocking issues

- 32-6 - Chinese Ministry of Education study-abroad warnings (jsj.moe.gov.cn) presented as the check an Indian student should make; no MEA advisory route.
- 32-10 - CSCSE degree-certification list and 60-business-day timeline are Chinese procedures, irrelevant to Indian students.
- 32-2 - unverified: the 2026 DHS fixed-period rule could not be read (eCFR anti-bot redirect); confirm status before publication.

Verdict: FAIL
