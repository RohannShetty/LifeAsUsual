# Verification: Chapter 18 - Is Having Kids Worth It

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/18-is-having-kids-worth-it.json
Manifest status: data/en-in/manifest.json lists chapter 18 as status draft, 7 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"]. Read only; nothing was edited.

## Method

The source pack marks 18-1 (schemes a child is entitled to) and 18-5 (the three cost periods, author's experience) as high-risk; both were checked. Because this chapter is short and the maternity rules are the classic carry-over, 18-2, 18-3 and 18-7 were checked too. 18-4 and 18-6 were spot-checked for invented numbers and hotlines.

Official sites were probed on 21 October 2026 with curl and a desktop browser user-agent from C:/Users/$hetty/AppData/Local/Temp/verif. Reachable: wcd.gov.in, nha.gov.in, esic.gov.in. mohfw.gov.in and education.gov.in returned HTTP 403 to the fetcher and were readable only through curl with a browser user-agent (partial access). pmjay.gov.in failed to fetch; rural.nic.in was reachable. The chapter JSON cites "State Council", "province" and gov.cn in 18-2 and 18-7, which are Chinese sources.

Pass means: the claim matches the Indian statute or scheme it cites. The governing Indian maternity statute is the Maternity Benefit Act 1961 as amended by the Maternity Benefit (Amendment) Act 2017 (26 weeks for the first two children, 12 weeks thereafter, 12 weeks for adoptive and commissioning mothers, crèche facility above 50 employees).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 18-1 | India pays no universal per-child cash benefit; support is a patchwork of PM-JAY, ICDS, PM POSHAN, the state maternity benefit and state schemes | NHA/PM-JAY; WCD/ICDS; MoE/PM POSHAN; PMMVY | Whole tip | 2026-10-21 | yes | Accurate. No universal child benefit exists; PMMVY is a maternity benefit (Rs 5,000 first living child, Rs 6,000 for a second child if a girl, as maternity benefit), ICDS is supplementary nutrition, PM POSHAN is a school meal. No invented scheme or agent route |
| 18-1 | Eligibility rests on SECC and state lists, not self-declaration; do not pay an agent | NHA; WCD | Eligibility | 2026-10-21 | yes | Consistent with scheme design; the warning against agents is sound |
| 18-2 | Maternity leave lasts 98 days | Maternity Benefit Act 1961 (amended 2017) | s.5 | 2026-10-21 | no | 98 days is the Chinese 女职工劳动保护特别规定 baseline. India gives 26 weeks for the first two children and 12 weeks thereafter. The number, and therefore the tip title, is wrong for India |
| 18-2 | Maternity benefit is paid by "the maternity insurance fund" at the employer's average monthly wage of the prior year, and provinces add a 60-day reward leave to reach 158 days | No Indian instrument | Whole tip | 2026-10-21 | no | This is Chinese 生育保险: a fund paying at the employer's average wage, plus provincial reward leave (98 + 60 = 158). India has no maternity insurance fund; the employer pays under s.5-6 of the MB Act, and ESIC cash benefit applies only to insured workers. "Province" and "State Council" in the caveats confirm the source edition |
| 18-3 | An employer cannot cut pay or dismiss a worker for pregnancy, childbirth or breastfeeding | MB Act 1961 | ss.12, 5(2) | 2026-10-21 | yes | Substantively correct for India: s.12 prohibits dismissal during maternity leave, and pay cannot be reduced for the leave period |
| 18-3 | Penalties are "1,000 to ₹71,100", "at least ₹14,200 and up to ₹71,100 per employee", and one hour of breastfeeding time is required | MB Act 1961 | s.21 | 2026-10-21 | no | These are converted Chinese penalties. Under the MB Act s.21 the fine is imprisonment up to one year and/or a fine (as amended, up to ₹5,000), not a per-employee rupee ladder. The one-hour nursing break is Chinese; India requires two nursing breaks until the child is 15 months |
| 18-4 | The time-cost calculation turns on whose time is used, not how hard the work is | No instrument needed | Framework | 2026-10-21 | yes | Spot-check: an analytic framing, not a factual or legal claim; nothing invented |
| 18-5 | Costs split into ages 0-3, compulsory education, and post-compulsory education; PM POSHAN covers a midday meal and PM-JAY covers an eligible household | Author's experience; MoHFW; WCD | Whole tip | 2026-10-21 | yes | The three-period framing is the author's own experience and is labelled as such ("no direct literature"). PM POSHAN and PM-JAY are real and correctly described. Not a legal claim, so the absence of a study does not block |
| 18-6 | Keep separate savings accounts for children, elders, marriage and old age | No instrument needed | Practical | 2026-10-21 | yes | Spot-check: budgeting advice; no invented scheme, number or hotline |
| 18-7 | Female age affects spontaneous conception and IVF success, falling sharply around 40 | No Indian instrument needed | Clinical | 2026-10-21 | yes | The age-related fertility decline is well established and the tip is appropriately cautious |
| 18-7 | (editorial) "Ministry of Health technical guidelines restrict ART to married couples complying with family planning regulations"; caveat says rules "vary by province, consult local healthcare security bureaus"; source is "General Office of the State Council (2024) Guobanfa [2024] No. 48" | Chapter caveats/sources | Whole tip | 2026-10-21 | no | Chinese: the ART rule, Guobanfa [2024] No. 48, "province" and "healthcare security bureaus" are the Chinese assisted-reproduction regime. India regulates ART under the Assisted Reproductive Technology (Regulation) Act 2021, which has no married-couple or family-planning condition and is not province-varied |

## Banned-term check

- JSON: 0 banned terms. None of China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY appears. Source-edition vocabulary appears instead: "province" (18-2, 18-7), "State Council" (18-7), "healthcare security bureaus" (18-7), "family planning regulations" (18-7).
- Rendered page: 0 banned terms in the literal list; the same source-edition terms would render.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 18-2 states 98 days and a maternity insurance fund as Indian law; the Indian figure is 26 weeks and the employer pays.
- No invented scheme, number or hotline: FAIL. 18-2 invents an Indian "maternity insurance fund" paying at the employer's average wage; 18-3 gives rupee penalty figures that do not come from the MB Act.
- No direct equivalent recorded where needed: FAIL. The chapter does not say that India has no maternity insurance fund and no provincial reward leave.
- Caveats retained: FAIL. The 18-7 caveat directs the reader to provincial healthcare security bureaus, which do not exist in India.

## Blocking issues

- 18-2: 98 days of maternity leave, payment by a "maternity insurance fund" at the employer's average monthly wage, and a provincial 60-day reward leave to 158 days are Chinese 生育保险 rules. India: Maternity Benefit Act 1961 as amended 2017, 26 weeks for the first two children, 12 weeks thereafter, paid by the employer; ESIC covers insured workers. Title and body both wrong.
- 18-3: penalty figures "1,000 to ₹71,100", "at least ₹14,200 and up to ₹71,100 per employee" and the one-hour breastfeeding rule are Chinese; the MB Act s.21 penalty and the 15-month/two-break rule are Indian.
- 18-7: the ART restriction to married couples complying with family planning regulations, the provincial variation caveat, and the Guobanfa [2024] No. 48 source are Chinese; India's ART (Regulation) Act 2021 has no such conditions.

Verdict: FAIL
