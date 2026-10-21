# Verification: Chapter 28 - Do Not Ruin Health for Looks

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/28-do-not-ruin-health-for-looks.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-28.md. Six tips rest on international clinical literature and were checked against the cited study and its DOI through the Crossref API (api.crossref.org, HTTP 200). Four tips rest on Chinese instruments (Ministry of Health Order No. 19, the drug-operation measures, the NMPA clear-aligner review guideline and the NMPA "Guozhuang Tezi" special-cosmetics registration), which is the blocking problem: India regulates medical aesthetics and cosmetics through the NMC/state medical establishment registration, the Drugs and Cosmetics Act 1940 and the Cosmetics Rules 2020, none of which appears in the chapter. cdsco.gov.in was reachable (HTTP 200) but is not cited by any tip.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 28-1 | Do not use extreme dieting, fasting or self-induced vomiting; anorexia mortality about 5.9 times higher | Arcelus et al. 2011, Arch Gen Psychiatry | - | 2026-10-21 | yes | Meta-analysis of 36 studies gives an SMR of about 5.86; correct. |
| 28-2 | Before injectables, thread lifts or surgery check that the facility's licence lists "medical aesthetics" and that the practitioner is a "licensed attending physician" | Ministry of Health (2002), Order No. 19 | Arts 2, 8 | 2026-10-21 | no | BLOCKING. Order No. 19 is Chinese and there is no "medical aesthetics" licence category or "attending physician" grade in India. The correct Indian check is the facility's registration under the Clinical Establishments Act or state Act and the doctor's NMC/state council registration. |
| 28-3 | Avoid filler in the nasal bridge, glabella and forehead; avoid unregulated clinics | Beleznay et al. 2019, Aesthet Surg J | - | 2026-10-21 | yes | The review reports vision-loss cases with the nose as the commonest site; the anatomical advice matches. |
| 28-4 | Do not buy weight-loss pills, coffees, candies or "enzymatic plums" promising rapid results; sibutramine is the usual illegal ingredient | James et al. 2010, NEJM (SCOUT) | - | 2026-10-21 | yes | SCOUT found increased cardiovascular events with sibutramine; the warning is sound. |
| 28-5 | Do not use anabolic steroids to build muscle; users had about a three-fold higher risk | Horwitz et al. 2019, J Intern Med | - | 2026-10-21 | yes | Correct. |
| 28-6 | Prescription weight-loss drugs need a doctor's prescription; pharmacies must keep the prescription for at least five years; do not buy online | Chinese drug-operation measures (gov.cn); Mohfw | Arts 8-10 | 2026-10-21 | no | BLOCKING. The five-year retention rule is Chinese. India's Drugs and Cosmetics Rules require prescription records for two years (three for Schedule H1), and the cited Mohfw page does not contain the rule. |
| 28-7 | Sex-hormone therapy only on prescription with follow-up; do not self-adjust | Getahun et al. 2018, Ann Intern Med | - | 2026-10-21 | yes | Correct; the cohort supports cardiovascular risk with cross-sex hormones. |
| 28-8 | Body-image assessment before cosmetic surgery; 15.04% of cosmetic-surgery seekers meet body dysmorphic disorder criteria | Ribeiro 2017, Aesthetic Plastic Surgery | - | 2026-10-21 | yes | Crossref confirms the paper and the 15.04% pooled prevalence. |
| 28-9 | Clear aligners are regulated devices requiring clinical supervision; do not self-treat online | NMPA Center for Medical Device Evaluation (2022) | - | 2026-10-21 | no | BLOCKING. The authority is the Chinese NMPA. In India aligners are medical devices under the Medical Devices Rules 2017 and the treating dentist must be registered with the Dental Council; neither is cited, and the tip is graded GC despite asserting a regulatory duty. |
| 28-10 | Whitening creams need NMPA "special cosmetics" registration ("Guozhuang Tezi"); avoid salon and influencer preparations | NMPA Notice No. 14 of 2026 | - | 2026-10-21 | no | BLOCKING. "Guozhuang Tezi" and the special-cosmetics category are Chinese. India has no equivalent registration; imported cosmetics need CDSCO registration and domestic manufacture a Cosmetics Rules 2020 licence. |

## Banned-term check

- JSON: 0 banned terms. 4 China-specific vocabulary hits ("provincial", "guozhuang"). 0 rupee and 0 yen signs.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - 28-2 and 28-10 tell readers to check for licences and registration codes that do not exist in India, so the advice cannot be followed.
- No invented scheme, number or hotline: the "medical aesthetics" licence, the "attending physician" grade, the five-year retention rule and the "Guozhuang Tezi" code are imported schemes presented as checks an Indian reader can perform.
- No direct equivalent recorded where needed: no NMC registration, Clinical Establishments Act registration, CDSCO cosmetic registration or Medical Devices Rules reference.
- Caveats retained: the clinical tips are well hedged and correctly graded.

## Blocking issues

- 28-2 - Chinese Order No. 19 licence and "attending physician" test; not applicable in India.
- 28-6 - five-year prescription retention is Chinese; Indian rule is two years (three for Schedule H1).
- 28-9 - NMPA clear-aligner guideline cited as the regulatory basis; no Indian device/dental-council route recorded, and the tip is graded GC.
- 28-10 - "Guozhuang Tezi" special-cosmetics registration does not exist in India.

Verdict: FAIL
