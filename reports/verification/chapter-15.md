# Verification: Chapter 15 - Renting and Buying Housing

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/15-renting-and-buying-housing.json
Manifest status: draft, tier A, 18 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-15.md` and the chapter JSON. All three HIGH-RISK tips in
the pack (15-7, 15-9, 15-16) were checked in detail; 15-1, 15-2, 15-3, 15-4, 15-5, 15-10,
15-11, 15-13, 15-14, 15-17 and 15-18 were checked for an Indian instrument behind the
claim. Access: **mohua.gov.in returned HTTP 403** (so the cited Ministry pages could not be
read at all), **indiacode.nic.in returned HTTP 403**, and **rbi.org.in returned HTTP 200**.
RERA 2016 s.4, the Transfer of Property Act 1882 and the Registration Act 1908 were read on
official or Indian Kanoon mirrors. The chapter is a port of Chinese tenancy and presale
regulation: most tips state Chinese administrative rules (lease deposit rules, agent
escrow, presale supervision, property-management complaints, quality warranties) while
citing only MoHUA and RBI.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 15-1 | Deposit amount, refund timeline and permitted deductions "must be specified in the contract" | MoHUA; RBI | — | 2026-10-21 | no | No Indian statute or rule mandates these contract terms. This is the Chinese lease-regulation framing; Indian tenancy is state law (e.g. Model Tenancy Act 2021, adopted only by some states) and imposes no such contract checklist. |
| 15-2 | Cutting water/electricity, changing locks or threatening to force you out is unlawful; call the police | MoHUA; RBI | — | 2026-10-21 | no | No Indian instrument is cited and mohua.gov.in could not be read (403). Indian self-help eviction is dealt with under state rent law and BNS criminal trespass; the "call the police, it is forbidden by regulation" framing is the Chinese rule. |
| 15-3 | "By regulation, real estate agents are prohibited from collecting or remitting rent and security deposits" | MoHUA; RBI | — | 2026-10-21 | no | False for India: no such prohibition exists, and agents commonly collect rent. Chinese rule (housing lease regulation art. 8). |
| 15-4 | Check a long-term rental's escrow account before paying a year's rent upfront | MoHUA; RBI | — | 2026-10-21 | no | There is no rental escrow account regime in India; the tip sends the reader looking for an account that does not exist. |
| 15-5 | If the house is sold during the lease, the lease survives and you need not move | MoHUA; RBI | — | 2026-10-21 | no | The proposition is broadly correct in India (a lease binds a purchaser with notice under the Transfer of Property Act 1882), but the cited sources contain no such rule. Correct claim, wrong authority — replace the sources with TPA and state rent law. |
| 15-7 | Pay resale consideration by bank transfer, not cash; check RERA registration and the title chain | RERA 2016; TPA 1882; Registration Act 1908; RBI | RERA s.4 | 2026-10-21 | yes | RERA registration, the 70% project-account rule (s.4(2)(l)(D)) and the Registration Act requirement are correctly invoked; the cash-trail advice matches Indian practice (Income Tax Act s.269SS/269ST limits). |
| 15-9 | No household-register bar to buying; land is a State subject; some states restrict agricultural land purchase by non-farmers; register the deed | Registration Act 1908; TPA 1882; state land-revenue law | s.17 | 2026-10-21 | yes | Correct: India has no hukou, land and land-ceiling law is state-specific, and registration is compulsory under s.17. |
| 15-10 | Check the presale permit; deposit, down payment and mortgage funds must go into a supervised account per MOHURD/MoNR/NFRA joint directive Jianfanggui [2026] No. 3 of August 2026 | mohua.gov.in; rbi.org.in | — | 2026-10-21 | no | The directive is Chinese and does not exist in India. The Indian equivalent is RERA registration plus the s.4(2)(l)(D) 70% escrow, which the tip does not mention. |
| 15-11 | If the contract falls through for reasons neither party caused, demand a full refund of the reservation deposit | MoHUA; RBI | — | 2026-10-21 | no | No Indian rule creates this refund right; it reflects Chinese presale/booking regulation. Indian position is contractual, with Consumer Protection Act 2019 and RERA remedies. |
| 15-13 | A three-month rescission right applies to delayed delivery/deed registration | MoHUA; RBI | — | 2026-10-21 | no | Chinese rescission period. India: RERA s.18 provides interest for delay and a buyer's right to withdraw, but no "3 months" rule as stated. |
| 15-14 | Apply for provisional registration immediately after signing; title search for mortgages and attachments | Ministry of Natural Resources (2024 rev.), Implementing Rules for the Interim Regulations on Real Estate Registration | — | 2026-10-21 | no | The cited instrument is Chinese ("Ministry of Natural Resources" in this context is China's). India has no provisional registration; the correct route is Registration Act 1908 s.17 with stamp duty and, for under-construction property, RERA registration. |
| 15-16 | Compare bank loan, EPF housing advance and PMAY before choosing; check the effective rate | RBI; NHB; EPFO; PMAY | — | 2026-10-21 | yes | EPF Scheme 1952 provides a housing advance; PMAY (CLSS) exists; RBI fair-practice rules on floating-rate loans are real. Correctly Indian. |
| 15-17 | If the management company cuts water, electricity, heating or gas to force payment, complain to the local housing bureau | MoHUA | — | 2026-10-21 | no | "Regulations on Property Management" and a "housing bureau" complaint route are Chinese. India has no such regulator; the routes are the state electricity/water regulator, the police and the consumer commission. |
| 15-18 | On handover, inspect and record defects; a Residential Quality Guarantee gives 5 years for waterproofing and 2 years for wiring; MOC Orders 88 and 80; Supreme People's Court interpretation | MoHUA | — | 2026-10-21 | no | Chinese regime. India's nearest rule is RERA s.14(3): a five-year defect-liability period for structural defects and workmanship, which should be cited instead. "MOC Order 88 Arts 32-33" and the SPC interpretation do not exist in India. |

## Banned-term check

- JSON: 0 literal banned terms. The Chinese origin is carried instead by "MOHURD",
  "Ministry of Natural Resources", "NFRA", "Jianfanggui [2026] No. 3", "Supreme People's
  Court" and "Residential Quality Guarantee", none of which the term list catches.
- Rendered page: 0 banned terms in `dist/chapters/15-renting-and-buying-housing/index.html`.

## Safety and editorial check

- No unsupported high-risk claim: **FAIL.** Eleven tips state Chinese tenancy/presale
  regulation; two of them (15-3, 15-4) tell the reader that a rule exists which does not
  exist in India at all.
- No invented scheme, number or hotline: **FAIL.** "Jianfanggui [2026] No. 3", "MOC Order
  88/80", "Residential Quality Guarantee" and the "housing bureau" are presented without
  any indication that they are Chinese.
- No direct equivalent recorded where needed: **FAIL.** For presale escrow, agent handling
  of deposits, quality warranty and property-management complaints, India does have
  analogues (RERA s.4/s.14/s.18, state utility regulators) — none is named except in 15-7.
- Caveats retained: caveats repeat the Chinese rule rather than warning that it is foreign.

## Blocking issues

1. **15-1** — deposit terms as a statutory requirement; no Indian instrument.
2. **15-2** — self-help eviction rule with a police/"forbidden by regulation" framing.
3. **15-3** — "agents are prohibited from collecting or remitting rent and deposits" is
   false in India.
4. **15-4** — rental escrow account does not exist in India.
5. **15-5** — correct claim, but sourced only to MoHUA/RBI; re-source to TPA 1882 and state
   rent law.
6. **15-10** — Jianfanggui [2026] No. 3 (MOHURD/MoNR/NFRA) does not exist; use RERA
   registration and s.4(2)(l)(D) escrow.
7. **15-11** — reservation-deposit refund right has no Indian basis.
8. **15-13** — three-month rescission right; replace with RERA s.18.
9. **15-14** — "Ministry of Natural Resources ... Implementing Rules for the Interim
   Regulations on Real Estate Registration" is Chinese; India has no provisional
   registration.
10. **15-17** — "Regulations on Property Management" and the housing-bureau complaint are
    Chinese; name the Indian regulators.
11. **15-18** — Residential Quality Guarantee, MOC Orders 88/80 and the SPC interpretation
    are Chinese; replace with RERA s.14(3) five-year defect liability.

Verdict: FAIL

Blocking issues: 11 (15-1, 15-2, 15-3, 15-4, 15-5, 15-10, 15-11, 15-13, 15-14, 15-17,
15-18). 15-7, 15-9 and 15-16 are properly Indian; the rest of the chapter needs to be
rewritten around RERA 2016, the Transfer of Property Act 1882, the Registration Act 1908,
the Model Tenancy Act 2021 (where adopted) and state utility/consumer regulators.
