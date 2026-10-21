# Verification: Chapter 1 - Do Not Die Early

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/01-do-not-die-early.json
Manifest status: unchanged - 48 tips; chapter rewriteStatus draft, every tip reviewStatus draft. No chapter, manifest or source file was edited.

## Method

The four tips the source pack marks HIGH RISK (1-25, 1-32, 1-37, 1-43) were checked against the cited papers through the Crossref and Europe PMC REST APIs and their abstracts were read, not just the titles. The rest of the chapter was read in full and every citation to a legal instrument, hotline, scheme or national statistic was traced. Government sites were tried directly and the result recorded:

- mohfw.gov.in returned HTTP 403 (Akamai "Access Denied"); pib.gov.in and indiacode.nic.in returned HTTP 403.
- telemanas.mohfw.gov.in failed DNS resolution.
- nha.gov.in returned a 19-byte bot gate; its PDFs were also gated.
- Reachable and used: ntcp.mohfw.gov.in (200), dhubri-mch.assam.gov.in (200), api.crossref.org, www.ebi.ac.uk/europepmc.

A claim passes only where the cited source, read at the access date, supports the number or legal statement as written for an Indian reader. A claim copied from a Chinese instrument and relabelled as generic is a fail even where the underlying science is sound.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 1-4 | Replacing an expired gas hose is a user obligation under the "Regulations on Urban Gas Management", Art. 20 cl. 6; gas companies may not force purchases | Regulations on Urban Gas Management (State Council, China), gov.cn gongbao 2010 | Art. 20 | 2026-10-21 | no | Chinese 城镇燃气管理条例. No Indian gas-safety instrument is cited. Sources are corrupted to fragments (" () "; , , "15".) with gov.cn, Shenzhen and Zhangjiagang municipal URLs. |
| 1-5 | 2019-2024: 276-676 cases a year, 0.87%-2.86% mortality; 138 poisonous species in 2025, 34 new | China CDC Weekly, doi:10.46234/ccdcw2025.106 | whole item | 2026-10-21 | no | China surveillance data presented with no India framing. The bibliography is a single malformed string and the DOI is China CDC Weekly, not an Indian source. |
| 1-9 | Four hours of continuous driving without a 20-minute break is a statutory violation | Road Traffic Safety Law Implementation Regulations (China, 2017 rev.), Art. 62 | Art. 62 | 2026-10-21 | no | Chinese rule. India's Motor Vehicles Act 1988 and CMVR 1989 impose no such statutory rest break for private drivers; the caveat states Chinese law as if it applied to the reader. |
| 1-25 | Analgesic restriction cut suicides 43% since 2005; jump barriers cut 86%; school programmes OR 0.45 (0.24-0.85); call 14416 | Zalsman et al. 2016, Lancet Psychiatry, doi:10.1016/S2215-0366(16)30030-X; dhubri-mch.assam.gov.in Tele-MANAS page | abstract; helpline | 2026-10-21 | yes | Abstract says "overall decrease of 43% since 2005", barrier reduction "86% since 2005" (range 79-91%), attempts OR 0.45 (0.24-0.85). Assam government page confirms 14416 as a 24x7 Tele-MANAS helpline, so "at least 18 hours" understates rather than overstates. |
| 1-32 | Immediately after suicidal thoughts, telling someone nearby and handing over the means is protective; 76.8% of attempters communicated beforehand | Deisenhammer et al., J Clin Psychiatry 70(1) 19-24, doi:10.4088/JCP.07m03904 | abstract | 2026-10-21 | yes | Citation resolves correctly (Crossref year 2008 online, print 2009); 47.6%/76.8%/82-person figures match the paper's reported results. |
| 1-37 | Gambling cohort: standardised mortality ratio 1.8, suicide 15-fold; depression predicts suicide | Karlsson et al. 2018, J Behav Addict, doi:10.1556/2006.7.2018.112 | abstract | 2026-10-21 | yes | Abstract: 2,099 individuals 2005-2016, 67 deaths including 21 suicides, SMR 1.8 (20-74), 15-fold suicide mortality. |
| 1-43 | Asking directly about suicide does not plant the idea or raise risk | Gould et al. 2005, JAMA 293(13):1635, doi:10.1001/jama.293.13.1635 | abstract | 2026-10-21 | yes | 2,342 students in 6 New York high schools, 1,172/1,170 randomised; supports the claim. |
| 1-14 | Qidong 30-year trial: 84% lower liver cancer, 72% lower HBsAg carriage; adults without antibodies need 3 doses | Qu et al. 2014, PLoS Med, doi:10.1371/journal.pmed.1001774 | abstract | 2026-10-21 | yes (with note) | Trial and numbers are real. The caveat "applies to adults born before 1992" is a China vaccination-calendar artefact (India's universal hepatitis B schedule dates from 2011) and should be rewritten, but the advice is not false. |
| 1-45 | One-time HCV antibody screen, RNA confirmation, 8-12 week DAA course, >95% cure | USPSTF 2020, JAMA 323(10):970-975; WHO | recommendation | 2026-10-21 | yes (with note) | Clinical claim matches USPSTF/WHO. The source list also pads "National Healthcare Security Administration" - China's NHSA - which should be removed. |
| 1-2 | Helmet use cuts death risk 42% (OR 0.58, 0.50-0.68), head injury 69% | Liu et al. 2008, Cochrane CD004333 | abstract | 2026-10-21 | yes | Numbers match. Cost sentence reads "between 100 and ₹4,300" - the lower bound has lost its ₹ symbol. |
| 1-10 | Car seats cut fatal injury 71% (under 1) and 54% (1-4) | NHTSA DOT HS 813 573; WHO fact sheet | report | 2026-10-21 | yes | Figures match NHTSA. Cost sentence "300 and ₹28,400" is missing the lower ₹ symbol. |
| 1-3 | Working smoke alarm cuts fire death risk ~60% (OR 0.39, 0.18-0.83) | Marshall et al. 1998, JAMA 279(20):1633 | abstract | 2026-10-21 | yes | Numbers match. Cost text "between 30 and ₹1,400" / "50 and ₹2,100" is missing ₹ on the lower bounds. |

## Banned-term check

- JSON: 0 banned terms. Regex /China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY|¥|￥/i over the chapter JSON returns one match, the author name "Armbruster" (matched "rmb" inside the surname), which is a false positive.
- Rendered page: not rebuilt in this pass. The JSON title/body text above is what would render, and it contains no banned term.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 1-4 states a Chinese regulation as the governing rule; 1-9 states a Chinese driving rest rule as a statutory violation; 1-5 presents China CDC surveillance as general fact.
- No invented scheme, number or hotline: hotlines 14416 and 112/1930 are real. No invented scheme found. The problem is the opposite: a real foreign scheme (China's gas regulation) is left in place.
- No direct equivalent recorded where needed: 1-4 and 1-9 need the Indian instrument or an explicit "no Indian equivalent" statement; neither is present.
- Caveats retained: yes, and 1-14/1-45 caveats remain scientifically honest.
- Formatting: 1-2, 1-3, 1-10, 1-12 and 1-18 lose the ₹ sign on the lower bound of cost ranges ("between 100 and ₹4,300", "between 30 and ₹1,400", "300 and ₹28,400"). This is a systematic conversion defect and should be fixed in the same pass.

## Blocking issues

- 1-4: Chinese "Regulations on Urban Gas Management" (Art. 20 cl. 6) is the only legal basis; no Indian gas-safety instrument; source strings are corrupted into punctuation fragments.
- 1-5: China CDC Weekly is the only source; China-only annual case and mortality data are presented without India framing; citation is a malformed single string.
- 1-9: Chinese Road Traffic Safety Law Implementation Regulations Art. 62 is asserted as a statutory rest-break rule; India has no such rule; the caveat misstates Indian law.
- Non-blocking but should be fixed: 1-14 China birth-year caveat; 1-45 NHSA padding source; missing ₹ symbols in 1-2, 1-3, 1-10, 1-12, 1-18.

Verdict: FAIL
