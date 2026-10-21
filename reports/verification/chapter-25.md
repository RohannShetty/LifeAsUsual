# Verification: Chapter 25 - After Someone Dies

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/25-after-someone-dies.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-25.md and checked each claim against the instrument it cites. indiacode.nic.in returned HTTP 403, mha.gov.in returned HTTP 403, crsorgi.gov.in did not resolve for the fetch tool, so the BNSS and RBD Act points were checked from the source pack and published text and the failures are recorded. The decisive finding is that six of the twelve tips are carried over verbatim from the mainland-China edition (funeral-home licensing, morgue storage limits, county-level civil affairs registration, a 48-hour autopsy rule and post-mortem data rights) and are dressed with Indian citations that do not contain those rules.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 25-1 | Sudden or unexplained death: call 112, do not move the body; police register a case and arrange a post-mortem; "an unnatural death needs a magistrate's inquest" | BNSS 2023; RBD Act 1969; MHA | BNSS s.194, s.196 | 2026-10-21 | no | indiacode.nic.in 403. BNSS s.194 requires the police to investigate an unnatural death and report to the nearest Executive Magistrate; a Magistrate's own inquiry under s.196 is discretionary. "Needs a magistrate's inquest" overstates the procedure, though the rest of the tip is right. |
| 25-2 | Death registered with the municipal registrar; doctor certifies the cause; 21 days | RBD Act 1969; MHA CRS | ss.8, 10 | 2026-10-21 | yes | 21-day window, medical certificate of cause of death and registrar's certificate match the Act. crsorgi.gov.in unreachable for verification. |
| 25-3 | Transport, storage, embalming and cremation "can only be done by funeral homes"; hospital morgues are not authorised; storage generally limited to 3 days | MHA; Indian Succession Act 1925 | - | 2026-10-21 | no | BLOCKING. Neither cited instrument regulates funeral homes, morgues or embalming. The rule is from the mainland Funeral Management Regulations; India has no 3-day statutory storage cap. |
| 25-4 | Any doubt about the cause: request an autopsy within 48 hours; medical records sealed | MHA; Indian Succession Act 1925 | - | 2026-10-21 | no | BLOCKING. The 48-hour autopsy request is the Chinese medical-dispute rule; in India the police or a Magistrate orders the post-mortem and there is no 48-hour request window. |
| 25-5 | India has no household-register cancellation; register the death, then inform bank, insurer, employer, EPFO | RBD Act 1969; EPFO; IRDAI | - | 2026-10-21 | yes | Correct and correctly framed as an Indian procedure. |
| 25-6 | Funeral services split into "basic" and "non-basic" with fees set by law and a statutory list | MHA; Indian Succession Act 1925 | - | 2026-10-21 | no | BLOCKING. No Indian instrument creates a basic/non-basic funeral tariff. This is the Chinese funeral-price regime. |
| 25-7 | Forced bundling, above-tariff charges and item-splitting are "explicitly listed as price violations under regulations"; complain | MHA; Indian Succession Act 1925 | - | 2026-10-21 | no | BLOCKING. The cited regulations do not exist in Indian law; consumer-protection law would be the route, and the tip does not cite it. |
| 25-8 | Intermediaries must register with the "county-level civil affairs bureau" | MHA; Indian Succession Act 1925 | - | 2026-10-21 | no | BLOCKING. "County-level civil affairs bureau" is a Chinese administrative office; India has no such registration for funeral intermediaries. |
| 25-9 | Collect EPF/EPS, ESIC dependants' benefit, life insurance, bank balances and work-related benefits | EPFO; ESIC; IRDAI | - | 2026-10-21 | yes | All schemes exist and the claim is correctly general. |
| 25-10 | Close relatives may ask a platform to access, copy, correct or delete the deceased's personal information | MHA; Indian Succession Act 1925 | - | 2026-10-21 | no | BLOCKING. This is PIPL art. 49 (China). The DPDP Act, 2023 gives no such relative-access right, and neither cited instrument mentions it. |
| 25-11 | An heir is liable for the deceased's debts only up to the estate received | Indian Succession Act 1925; CPC 1908 | - | 2026-10-21 | yes | Correct as a general principle; the Acts do not state it in one section, so the citation is broad but not wrong. |
| 25-12 | Probate is not mandatory for every estate; a nominated bank deposit can be released on the bank's form | RBI; Indian Succession Act 1925 | - | 2026-10-21 | yes | Correct: probate is required only in the cases the Act specifies, and RBI nomination rules allow release to a nominee. |

## Banned-term check

- JSON: 0 banned terms (China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao, CNY all absent). The file does contain 11 China-specific vocabulary hits: "civil affairs bureau", "county-level", "prefecture", "provincial", "ethnic minorities" - the banned-word list alone does not catch this chapter.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - 25-3, 25-4, 25-6, 25-7, 25-8 and 25-10 state Chinese rules as Indian law.
- No invented scheme, number or hotline: no hotline invented; 112 is correct. The "3 days", "48 hours" and "county-level" figures are imported, not invented, which is worse for a legal chapter because they read as Indian procedure.
- No direct equivalent recorded where needed: no Indian equivalent is recorded for funeral-home licensing, morgue storage, funeral tariffs or relative data access.
- Caveats retained: the chapter keeps a "do not cremate before registration" caveat, which is sound.

## Blocking issues

- 25-1 - "an unnatural death needs a magistrate's inquest" misstates BNSS 2023 s.194/s.196; the inquest is by the police and reported to the Magistrate.
- 25-3 - funeral homes, morgue authority and a 3-day storage cap are Chinese rules, not MHA or Indian Succession Act rules.
- 25-4 - 48-hour autopsy request is the Chinese medical-dispute rule; Indian post-mortem is ordered by police or Magistrate.
- 25-6 - basic/non-basic funeral tariff set by law does not exist in India.
- 25-7 - "explicitly listed as price violations under regulations" refers to Chinese funeral-price rules; no Indian instrument is cited or applicable.
- 25-8 - registration with a "county-level civil affairs bureau" is a Chinese requirement; no Indian equivalent exists.
- 25-10 - relative access/correction/deletion of a deceased person's data is PIPL art. 49, not Indian law.

Verdict: FAIL
