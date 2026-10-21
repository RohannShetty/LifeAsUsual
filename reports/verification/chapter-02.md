# Verification: Chapter 2 - Do Not Die Slowly

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/02-do-not-die-slowly.json
Manifest status: unchanged - 47 tips; chapter rewriteStatus draft, every tip reviewStatus draft. No chapter, manifest or source file was edited.

## Method

The single HIGH RISK tip in the pack (2-5, the quitline) was checked against the National Tobacco Control Programme site. The rest of the chapter was read in full and every named licence, standard, agency, cohort and hotline was traced. Access results:

- ntcp.mohfw.gov.in returned HTTP 200 and was used for the quitline.
- mohfw.gov.in returned HTTP 403 (Akamai "Access Denied"); pib.gov.in and indiacode.nic.in returned HTTP 403; nha.gov.in was bot-gated.
- FSSAI (fssai.gov.in) returned HTTP 200.
- DOI metadata through api.crossref.org.

The China-specific problem in this chapter is not a wrong number but a wrong jurisdiction: the aflatoxin science and the Chinese food-licence system are carried over unchanged.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 2-5 | Call the National Tobacco Quitline on 1800-11-2356 | ntcp.mohfw.gov.in, National Tobacco Quit Line Services | helpline block | 2026-10-21 | yes | Page states "TO QUIT TOBACCO, CALL 1800 112 356 (TOLL FREE) OR GIVE A MISSED CALL AT 011-22901701"; chapter's 1800-11-2356 is the same number. |
| 2-5 | Combined pharmacotherapy plus behavioural support RR 1.83 (1.68-1.98); medical-setting subgroup 1.97 | Stead et al. 2016, Cochrane CD008286 | abstract | 2026-10-21 | yes | Numbers match the Cochrane abstract (52 trials, 19,488 participants). |
| 2-40 | Buy pre-packaged cooking oil that carries an "SC code" | China food production licence (SC 食品生产许可), GB 2761-2017 | title; body | 2026-10-21 | no | "SC code" is China's food-production licence number. India's equivalent is an FSSAI licence number (14-digit, on the label). The body also relies on Guangzhou small-producer rules and the 2017 GB 2761-2017 standard issued by the "National Health and Family Planning Commission, State Food and Drug Administration" - both Chinese. No FSSAI instrument is cited. |
| 2-40 | Guangzhou enforcement cut abnormal liver function by ~35%; Guangxi homemade-oil mothers had ~90% higher low birth weight, 80% higher preterm risk | Chinese municipal/provincial studies as cited | body | 2026-10-21 | unverified | Cannot be checked against an Indian instrument because none is cited; the studies are Chinese and are not framed as such. |
| 2-46 | Shanghai cohort: urinary aflatoxin biomarkers raise liver cancer ~3.4x; with hepatitis B ~59x | Ross RK, Yuan JM, Yu MC, et al. (1992), Lancet 339:943-946, doi:10.1016/0140-6736(92)91528-G | citation | 2026-10-21 | no | The citation is corrupted: the second author prints as "rupees JM" instead of "Yuan JM" - the term-replacement pass substituted the surname "Yuan" (Chinese currency) with "rupees". The DOI is correct, so the paper is real, but the bibliography is not publication-quality and the finding is China-only. |
| 2-46 | Aflatoxins are IARC Group 1, heat-stable; discard whole package | IARC Monographs Vol. 100F | monograph | 2026-10-21 | yes | IARC classifies aflatoxins as Group 1; heat stability is standard. |
| 2-47 | Raw freshwater fish carry liver flukes; 4-5x cholangiocarcinoma risk; praziquantel | IARC Vol. 100F (Clonorchis/Opisthorchis) | monograph | 2026-10-21 | yes (with note) | Science sound. The tip keeps Chinese culinary examples ("freshwater sashimi, raw fish porridge, drunken prawns") and records no Indian equivalent, although raw/fermented freshwater fish is eaten in north-east India. |

## Banned-term check

- JSON: 0 banned terms. Regex over the chapter JSON returns no China/Chinese/mainland/RMB/yuan/hukou/yibao/dibao/CNY match. The corruption is the reverse direction: "Yuan" was replaced, producing "rupees JM".
- Rendered page: not rebuilt. The residual Chinese content is institutional (SC code, GB 2761-2017, NHFPC/SFDA, Guangzhou, Guangxi, Shanghai), not the literal banned words.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 2-40 tells the reader to look for a licence mark that does not exist in India; 2-46's bibliography is corrupted.
- No invented scheme, number or hotline: no invented hotline. "SC code" is a real Chinese scheme wrongly presented to Indian readers.
- No direct equivalent recorded where needed: 2-40 lacks the FSSAI licence equivalent; 2-47 lacks an Indian raw-fish example.
- Caveats retained: yes.

## Blocking issues

- 2-40: title requires an "SC code", China's food-production licence; body cites Chinese standards and agencies (GB 2761-2017; NHFPC/SFDA; Guangzhou and Guangxi studies) with no FSSAI licence equivalent.
- 2-46: citation corrupted to "Ross RK, rupees JM, Yu MC" (should be Yuan JM); Shanghai cohort presented without India framing.
- Non-blocking: 2-47 keeps Chinese dish names and records no Indian equivalent.

Verdict: FAIL
