# Verification: Chapter 14 - Accounts and Information Security

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/14-accounts-and-information-security.json
Manifest status: draft, tier A, 12 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-14.md` and the chapter JSON. All five HIGH-RISK tips in
the pack (14-2, 14-5, 14-6, 14-11, 14-12) were checked against the cited authority, plus
14-1, 14-3, 14-4, 14-7, 14-8, 14-9 and 14-10. The RBI circular behind 14-5 was read in
full at rbi.org.in/Scripts/NotificationUser.aspx?Id=11040 (HTTP 200). Access failures:
cisa.gov and fcc.gov reachable; RBI, CERT-In, Sanchar Saathi, CIBIL and incometax.gov.in
reachable; **indiacode.nic.in returned HTTP 403** (Aadhaar Act read via uidai.gov.in
instead). Two tips (14-7, 14-8) and one (14-9, 14-10) cite only RBI and CERT-In for rights
that exist in Chinese law, not Indian.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 14-1 | 350,000 account-hijack attempts studied; over 94% of hijacked accounts had no link to the attacker's IP; in 100% of cases the attacker logged in from a different IP region | Doerfler et al., WWW '19 | — | 2026-10-21 | yes | International research, correctly cited; no Indian-specific number invented. |
| 14-2 | Use a password used nowhere else, at least 16 characters, for the email account that can reset everything | US CISA, "Use Strong Passwords" | — | 2026-10-21 | yes | CISA guidance matches. **Caveat defect:** it names "WeChat favourites" as an example of what an email account can unlock — source-edition residue. |
| 14-3 | Set a screen lock and a SIM PIN | RBI; CERT-In; author's experience | — | 2026-10-21 | yes | Uncontroversial operational advice; no invented Indian scheme. |
| 14-4 | Lost phone: block the SIM, remote-lock, change passwords, file a police report, freeze cards | US FCC "Protect Your Smart Device" | — | 2026-10-21 | yes | Procedure matches Indian practice (DoT SIM blocking, CEIR/Sanchar Saathi, bank hotline). |
| 14-5 | Report and freeze first; liability depends on how fast you report; zero liability for third-party breach reported within three working days | RBI circular DBR.No.Leg.BC.78/09.07.005/2017-18 dated 06.07.2017 | paras 6-8 | 2026-10-21 | yes | Exact match: zero liability where the unauthorised transaction is due to a third-party breach and the customer notifies the bank within three working days of the bank's communication; shadow reversal within 10 working days; complaint resolved within 90 days. The only precisely instrument-backed tip in the chapter. |
| 14-6 | Log out devices you do not recognise from the account's "logged-in devices" page | author's experience; RBI; CERT-In | — | 2026-10-21 | no (caveat) | The advice is sound, but the caveat says the feature is "available in WeChat, Alipay, email accounts, Apple ID" — WeChat and Alipay are source-edition residue in an India edition. |
| 14-7 | Once you refuse consent, a provider may not refuse service on the ground that you did not consent; you may withdraw consent | RBI; CERT-In (neither contains this) | — | 2026-10-21 | no | This is PRC Personal Information Protection Law art. 16. India's DPDP Act 2023 has consent and withdrawal but no such non-discrimination right in those terms. Unsupported as an Indian right. |
| 14-8 | You have the right to view, copy, correct and delete your data, and to sue for a breach | RBI; CERT-In | — | 2026-10-21 | no | PIPL arts. 44-50 framed as Indian rights. DPDP Act 2023 gives access/correction/erasure through a Data Fiduciary and the Data Protection Board — different mechanism, different remedies; the tip cites no Indian provision. |
| 14-9 | Face data is sensitive; processing needs separate consent and a necessity test; quotes the "Administrative Measures for the Safe Use of Facial Recognition Technology" (effective 1 June 2025) | RBI; CERT-In | — | 2026-10-21 | no | The quoted instrument is Chinese (CAC/PSB measures). India has no such facial-recognition regulation; DPDP Act 2023 treats biometric data as sensitive personal data but the quoted duties do not exist here. |
| 14-10 | "In June 2026, the Ministry of State Security issued a cybersecurity advisory" about AI relay proxies; cites arXiv 2604.08407 | Chinese MSS advisory; arXiv | — | 2026-10-21 | no | "Ministry of State Security" is China's; the advisory does not exist in India. Readers cannot act on it. |
| 14-11 | Annual audit of SIMs and bank accounts: use Sanchar Saathi/TAFCOP, check CIBIL, close unused accounts, one number per service | DoT Sanchar Saathi; TAFCOP; RBI KYC Master Direction; CIBIL; Aadhaar Act | — | 2026-10-21 | yes | Sanchar Saathi/TAFCOP is the real DoT portal, the 9-SIM cap is real (DoT, Dec 2021), and CIBIL reports can be pulled free once a year. Genuine India rewrite. |
| 14-12 | Before changing your number, unbind services: cites MII Order No. 36 (2005) Appendix 2 item 2.1.7, MIIT Letter [2025] No. 85, MIIT Letter [2026] No. 258 (258 apps, 850m unbinding requests), People's Posts and Telecom 2024, and the "One ID All Queries 2.0" service | miit.gov.cn, nmca.miit.gov.cn, wxb.xzdw.gov.cn | — | 2026-10-21 | no | Entire tip is Chinese: MIIT's 2005 numbering specification, MIIT bulletins, the Chinese carriers' "one ID" query service, WeChat and Alipay. There is no Indian instrument and the enumerated services do not exist in India. |

## Banned-term check

- JSON: 0 literal banned terms. The Chinese origin is carried instead by **WeChat and
  Alipay** (14-2 caveat, 14-6 caveat, 14-12 benefits), **MIIT** (14-12), and the Chinese
  instruments in 14-9 and 14-10.
- Rendered page: 0 banned terms in `dist/chapters/14-accounts-and-information-security/index.html`,
  but that page contains "MIIT" and "WeChat/Alipay"; the same strings appear in
  `dist/explore/index.html` and `dist/picks/index.html`, so the leak is visible outside the
  chapter page too.

## Safety and editorial check

- No unsupported high-risk claim: **FAIL.** 14-7, 14-8, 14-9 and 14-10 state Chinese data
  rights and a Chinese security advisory as if they applied to an Indian reader.
- No invented scheme, number or hotline: pass on numbers (RBI's three-working-day and
  ten-working-day rules are real); **fail on schemes** — "One ID All Queries 2.0",
  MIIT letters and the 258-app list are Chinese schemes presented without qualification.
- No direct equivalent recorded where needed: **FAIL.** 14-12 has no Indian equivalent
  (TRAI/DoT number-portability unbinding) and does not say so; 14-9 has no Indian
  facial-recognition instrument and does not say so.
- Caveats retained: partially; two caveats (14-2, 14-6) themselves carry WeChat/Alipay.

## Blocking issues

1. **14-7** — non-discrimination-on-refusal right is PIPL art. 16, not Indian law; cited
   RBI/CERT-In pages do not contain it.
2. **14-8** — data access/correction/deletion plus right to sue is PIPL arts. 44-50 stated
   as Indian law; DPDP Act 2023 machinery is not cited.
3. **14-9** — quotes China's Administrative Measures for the Safe Use of Facial Recognition
   Technology as governing law.
4. **14-10** — "Ministry of State Security" advisory of June 2026 is Chinese; no Indian
   advisory exists.
5. **14-12** — whole tip is the Chinese number-unbinding regime (MII Order No. 36 of 2005,
   MIIT Letters [2025] No. 85 and [2026] No. 258, "One ID All Queries 2.0", 258 apps,
   850m requests). Needs rewrite around TRAI MNP, Sanchar Saathi and each provider's
   account-closure route, or an explicit statement that India has no equivalent.
6. **14-2 caveat** — "WeChat favourites" must be removed.
7. **14-6 caveat** — "available in WeChat, Alipay..." must be removed/replaced with
   Indian services (Google, Apple, banks, email).

Verdict: FAIL

Blocking issues: 7 (14-7, 14-8, 14-9, 14-10, 14-12, 14-2 caveat, 14-6 caveat). 14-1, 14-3,
14-4, 14-5 and 14-11 are sound; 14-5 in particular matches the RBI circular word for word.
