# Verification: Chapter 27 - Pregnancy and Childbirth

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/27-pregnancy-and-childbirth.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-27.md and checked the four Indian entitlement tips (27-11, 27-12, 27-14, 27-15) against ESIC, NHA/PM-JAY, the RBD Act, 1969 and PMMVY, plus the clinical tips against their cited evidence. esic.gov.in, pmmvy.wcd.gov.in and wcd.gov.in were reachable; nha.gov.in served its root but returned 503 on /en; mohfw.gov.in returned HTTP 403; crsorgi.gov.in did not resolve. Six tips are carried over from the mainland edition with Chinese instruments (Jingjiang municipal service list, the 2020 mother-to-child transmission work specification, Beijing Municipal Health Commission, NHSA 2024 analgesia pricing, MOH Order No. 64, the 42-day Jingjiang postpartum package).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 27-1 | 0.4 mg folic acid daily before conception and through the first trimester cuts neural tube defects by about 70% | De-Regil et al. 2015, Cochrane | - | 2026-10-21 | yes | Cochrane review supports the effect size and the 0.4 mg dose. |
| 27-2 | Register for the Maternal and Child Health Handbook at a community health centre before 13 weeks for five free check-ups, home visits and a 42-day check-up | Jingjiang Municipal Government; National Basic Public Health Service | - | 2026-10-21 | no | BLOCKING. Jingjiang is a Chinese municipality; the "handbook", the five-visit schedule and the 42-day package are Chinese services. India's equivalent (PMSMA, JSY, PM-JAY) is not described. |
| 27-3 | At the first prenatal visit HIV, syphilis and hepatitis B testing is free; free treatment prevents transmission | Mohfw; NHA; cites Chinese 2020 Work Specifications and HIV Regulations art. 44 | - | 2026-10-21 | no | BLOCKING. The entitlement is argued from the Chinese work specification and the Chinese HIV/AIDS regulations. India does offer free HIV testing through NACO ICTCs and ANC screening, but the instrument cited is foreign and the "government offers free medication" claim is not sourced to an Indian scheme. |
| 27-4 | No smoking or drinking in pregnancy; no smoking in the household | CDC | - | 2026-10-21 | yes | Correct. |
| 27-5 | For high pre-eclampsia risk, start low-dose aspirin after week 12 | USPSTF 2021 | - | 2026-10-21 | yes | USPSTF recommends 81 mg after 12 weeks in high-risk women; the tip matches. |
| 27-6 | Screen for gestational diabetes at 24 weeks or later | USPSTF 2021 | - | 2026-10-21 | yes | Correct. |
| 27-7 | Urgent maternal warning-sign checklist for pregnancy and the first year | CDC Hear Her; WHO | - | 2026-10-21 | yes | Correct. |
| 27-8 | If waters break, lie flat, raise the hips and call 112 | Beijing Municipal Health Commission; 112 | - | 2026-10-21 | no | BLOCKING. The instruction is sourced to a Beijing municipal health authority, and "lie down flat at home" is not Indian ambulance or WHO guidance (call an ambulance, do not delay transfer). 112 is correct. |
| 27-9 | Labour analgesia works better than other methods and does not raise caesarean risk; from 2024 the NHSA priced it separately | Cochrane 2018; Chinese NHSA 2024 | - | 2026-10-21 | no | BLOCKING. The clinical claim is supported by the Cochrane review, but the access argument rests on Chinese 2024 pricing by the National Healthcare Security Administration. India has no such national analgesia tariff and the tip does not say so. |
| 27-10 | Do not request a caesarean without indication or for an auspicious date | WHO 2015 | - | 2026-10-21 | yes | Correct; WHO statement supports the 10% framing. |
| 27-11 | Maternity cover: ESIC for insured workers, PM-JAY for eligible households, state schemes | ESIC; NHA; PMMVY | - | 2026-10-21 | yes | Correct. ESIC maternity benefit and PM-JAY coverage are real; the tip correctly says there is no single scheme for everyone. |
| 27-12 | Register the birth; hospital reports, registrar issues the certificate | RBD Act 1969 | ss.8, 10 | 2026-10-21 | yes | Correct 21-day framing; crsorgi.gov.in unreachable for a live check. |
| 27-13 | Do not skip newborn heel-prick and hearing tests | Ministry of Health Order No. 64 (China) | Arts 3, 10, 11 | 2026-10-21 | no | BLOCKING. The cited instrument is a Chinese ministerial order. India has no national universal newborn screening programme; the tip presents a foreign mandate as Indian practice and cites it as such. |
| 27-14 | Add the newborn to PM-JAY or ESIC without waiting for the baby's own Aadhaar | NHA; ESIC | - | 2026-10-21 | yes | Correct in outline; PM-JAY covers newborns as dependants and the mother's card plus birth certificate are the usual documents. |
| 27-15 | Register the birth within 21 days with the municipal registrar, not the police | RBD Act 1969 | s.8 | 2026-10-21 | yes | Correct, including the late-registration permission and fee. |
| 27-16 | The 42-day postpartum check-up is free and screens for postpartum depression | Jingjiang Municipal Government; National Basic Public Health Service | - | 2026-10-21 | no | BLOCKING. The 42-day package with PPD screening is a Chinese public-health service. India's JSY/PMSMA pay cash incentives; a universal free 42-day visit with PPD screening is not an Indian entitlement. |
| 27-17 | No need to give away the cat: delegate litter cleaning, cook meat, garden with gloves | CDC | - | 2026-10-21 | yes | Correct. |
| 27-18 | Inactivated influenza vaccine in pregnancy at any stage; avoid live attenuated nasal spray | WHO 2022 | - | 2026-10-21 | yes | Correct. |
| 27-19 | Sleep on either side after 28 weeks; avoid supine sleep | Cronin et al. 2019 IPD meta-analysis | - | 2026-10-21 | yes | The 2.6x stillbirth association matches the meta-analysis. |
| 27-20 | Use contraception after birth; breastfeeding is not reliable; wait at least 18 months | NHS | - | 2026-10-21 | yes | WHO/NHS guidance supports the 18-24 month interpregnancy interval; correct. |

## Banned-term check

- JSON: 0 banned terms. 0 China-specific vocabulary hits by the grep list, and 1 rupee sign. The Chinese provenance is in the instruments and place names (Jingjiang, Beijing, NHSA, MOH Order 64), which the banned-word list does not cover.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - 27-3 (free treatment entitlement), 27-8 (lie flat at home) and 27-13 (newborn screening mandate) are the material ones.
- No invented scheme, number or hotline: no invented scheme; the "Maternal and Child Health Handbook" and the "42-day free check-up" are real Chinese services presented without an Indian equivalent.
- No direct equivalent recorded where needed: no Indian equivalent for the handbook, the newborn screening order, the analgesia pricing or the postpartum package.
- Caveats retained: the chapter keeps good clinical hedging on aspirin, GDM and sleep position.

## Blocking issues

- 27-2 - Jingjiang Maternal and Child Health Handbook and five free visits are Chinese services, not Indian.
- 27-3 - free triple testing is argued from the Chinese 2020 work specification and Chinese HIV regulations, not from an Indian instrument.
- 27-8 - "lie down flat and raise the hips" is Beijing municipal advice; it is not Indian ambulance guidance and delays transfer.
- 27-9 - separate NHSA 2024 pricing for labour analgesia is a Chinese access route presented as if available in India.
- 27-13 - newborn screening mandate is Ministry of Health Order No. 64 (China); India has no national universal programme.
- 27-16 - free 42-day postpartum check-up with depression screening is a Chinese basic-public-health service.

Verdict: FAIL
