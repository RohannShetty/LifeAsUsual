# Verification: Chapter 6 - The Negative List

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/06-the-negative-list.json
Manifest status: unchanged - 35 tips; chapter rewriteStatus draft, every tip reviewStatus draft. No chapter, manifest or source file was edited.

## Method

The source pack records "No high-risk claim in this chapter". All 35 tips were nevertheless read, because a negative-list chapter can hide a foreign public programme behind advice. Three tips were checked in full: 6-18 (free annual checks), 6-31 (AI chatbots and legal disputes) and 6-32 (survival probabilities), plus 6-22 (Pixiu) for cultural leftovers. The rest were scanned for named Indian schemes, hotlines, statutes and currency.

Access notes: pib.gov.in and mohfw.gov.in returned HTTP 403; nha.gov.in was bot-gated; indiacode.nic.in returned HTTP 403. The Indian programme claim in 6-18 was therefore checked against published programme design and against the only source the tip actually cites (Cochrane CD009009), which does not mention it.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 6-18 | Generic health checks do not reduce mortality: 17 RCTs; all-cause RR 1.00 (0.97-1.03); CVD RR 1.05; cancer RR 1.01 | Krogsbøll et al. 2019, Cochrane CD009009 | abstract | 2026-10-21 | yes | The Cochrane numbers are accurately reproduced. |
| 6-18 | "As part of the national basic public health service", over-35s get a free annual blood-pressure check and over-65s a free annual physical including CBC, urinalysis, fasting glucose, ECG, liver/kidney/lipid tests and abdominal ultrasound, nationwide; the caveat repeats that these are "already part of the national public health program" | Cochrane CD009009 (only cited source); Indian programme design | benefit; caveat | 2026-10-21 | no | This is China's National Basic Public Health Service package. No Indian national programme provides an annual over-65 physical with abdominal ultrasound; India's Ayushman Arogya Mandirs screen NCDs from age 30 and have no such annual package. The cited Cochrane review says nothing about any national programme. |
| 6-31 | AI chatbots diagnose less accurately than standard web search; do not rely on them for diagnosis or legal disputes | Bean et al. 2026, Nature Medicine 32(2):609-615, doi:10.1038/s41591-025-04074-y | abstract | 2026-10-21 | yes | 1,298 UK laypeople, preregistered; the chapter correctly limits the claim. No Indian legal instrument is asserted, so no equivalent is needed. |
| 6-32 | Survival to 65 is 87.4% (83.0 male / 92.0 female), to 80 is 55.6%; young adults save ~25% less | Heimer et al. 2019, J Finance 74(6):2957-2996, doi:10.1111/jofi.12828 | abstract | 2026-10-21 | yes (with note) | Figures are US life-table values, accurately copied. They are presented to Indian readers without saying so; India's SRS survival to 65 is materially lower (~75%). Non-blocking but should be labelled. |
| 6-22 | Do not buy crystals, bracelets or Pixiu figurines for luck; Barnum effect | Forer 1949, J Abnorm Soc Psychol, doi:10.1037/h0059240 | body | 2026-10-21 | yes (with note) | The Barnum-effect evidence is accurately used. The title keeps "Pixiu", a Chinese mythical beast, and the body adds "in 2026, several livestream shops were penalized" - a Chinese enforcement detail with no Indian equivalent. Cultural leftover; not a legal claim. |
| 6-7 | Whole-body CT screening: 86% of 1,192 symptom-free people had an abnormality, 37% recalled; CA-125/ultrasound screening shows no mortality benefit (RR 1.18, 0.82-1.71) | USPSTF 2018 ovarian cancer statement; PLCO | body | 2026-10-21 | yes | US data, explicitly labelled as USPSTF/US; the negative recommendation is correctly stated. |
| 6-17 | Blood donation does not detoxify or lower cholesterol | WHO/national blood policy | body | 2026-10-21 | yes | No invented benefit; no foreign scheme. |

## Banned-term check

- JSON: 0 banned terms. Regex /China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY|¥|￥/i returns no match.
- Rendered page: not rebuilt; no banned term in the JSON text. Residual Chinese content is "Pixiu" and a 2026 livestream-enforcement sentence; the free-check package in 6-18 is institutional, not lexical.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - 6-18 attributes a Chinese national programme to India.
- No invented scheme, number or hotline: no invented Indian scheme name; the scheme is real but Chinese and unnamed.
- No direct equivalent recorded where needed: 6-18 needs either the Indian screening route (Ayushman Arogya Mandir NCD screening from 30) or an explicit statement that no equivalent exists.
- Caveats retained: yes; the Cochrane caveat in 6-18 is correct, but the same tip's programme claim is not.

## Blocking issues

- 6-18: "national basic public health service" with free annual BP checks from 35 and a free annual over-65 physical including abdominal ultrasound is China's National Basic Public Health Service, presented as an Indian entitlement; the only cited source (Cochrane CD009009) does not support it.
- Non-blocking: 6-22 keeps "Pixiu" and a Chinese enforcement example; 6-32 quotes US survival tables without labelling them.

Verdict: FAIL
