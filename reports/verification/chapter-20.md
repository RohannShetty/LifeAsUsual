# Verification: Chapter 20 - Newborn Care

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/20-newborn-care.json
Manifest status: data/en-in/manifest.json lists chapter 20 as status draft, 17 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"]. Read only; nothing was edited.

## Method

The source pack records no high-risk claim for this chapter, so the whole chapter was read and the claims that carry a national schedule, a national guideline or a regulator were checked: 20-3 (immunisation schedule), 20-4 (infant feeding guidance), 20-10 (diaper quality inspections), 20-13 (post-discharge follow-up) and 20-16 (vitamin D dose). The remaining tips were spot-checked against the international guideline they cite.

Official sites were probed on 21 October 2026 with curl and a desktop browser user-agent from C:/Users/$hetty/AppData/Local/Temp/verif. mohfw.gov.in returned HTTP 403 to the fetcher and was readable only through curl with a browser user-agent (partial access). nhm.gov.in and wcd.gov.in were reachable. Where a tip cites a Chinese regulator or a Chinese service norm, that is recorded even though the site itself may be reachable.

Pass means: the tip's authority is the Indian one it names, or the international guideline it names. A tip that keeps China's National Health Commission, the State Administration for Market Regulation or the national basic public health service norm as its authority fails, even where the clinical advice is correct.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 20-1 | Back sleep on a firm surface, room-share but not bed-share, nothing soft in the crib; about 3,500 US infant deaths a year | AAP 2022 policy statement (Moon, Carlin; Pediatrics 150(1) e2022057990) | Sleep-related deaths | 2026-10-21 | yes | Consistent with the AAP 2022 statement; the ~3,500 figure is the US annual sleep-related death count used there |
| 20-2 | First hepatitis B dose within 24 hours; about 95% of untreated infant infections become chronic; HBIG if the mother is HBsAg positive | WHO | Hepatitis B | 2026-10-21 | yes | WHO recommends a birth dose within 24 hours; the chronicity figure and HBIG use are standard |
| 20-3 | "The current guidelines date to 2026", HPV is now in the national schedule, DTaP starts at 2 months with five doses at 2, 4 and 6 months, all free | MoHFW; WHO | National immunisation schedule | 2026-10-21 | no | This is China's 国家免疫规划 revision. India's Universal Immunisation Programme gives DPT at 6, 10 and 14 weeks with boosters at 16-24 months and 5-6 years, has no universal HPV dose in the national schedule, and the chapter's own "2026" framing matches no Indian schedule |
| 20-4 | Exclusive breastfeeding for six months, no water, solids from six months while breastfeeding continues | WHO; MoHFW | Infant feeding | 2026-10-21 | yes | WHO recommendation correctly stated |
| 20-4 | "The national Health Commission's guidelines likewise promote exclusive breastfeeding ... iron-rich animal products"; caveat requires "at least four of the seven essential food groups" | No Indian authority | Guidance | 2026-10-21 | no | The authority named is China's National Health Commission, and the seven-food-group rule is the Chinese dietary guideline for infants. India's guidance is the IYCF guideline under NHM/MoHFW; the cited mohfw.gov.in and who.int cannot support the quoted rule |
| 20-5 | Prepare formula with water hotter than 70 C, cool before feeding, discard leftovers; 73.8 C | WHO/FAO 2007; Beary 2025 (J Food Protection 88(9) 100571) | Formula preparation | 2026-10-21 | yes | 70 C and the >5 log reduction are the WHO/FAO 2007 recommendation; the 73.8 C figure is from the cited 2025 study |
| 20-6 | No honey under one year | No Indian instrument needed | Botulism | 2026-10-21 | yes | Standard infant botulism advice |
| 20-7 | Vitamin K injection at birth | No Indian instrument needed | VKDB | 2026-10-21 | yes | Standard practice; India's UIP includes vitamin K at birth |
| 20-8 | Under three months with 38 C, go straight to hospital | No Indian instrument needed | Fever | 2026-10-21 | yes | Standard young-infant fever rule |
| 20-9 | Never shake a baby | No Indian instrument needed | Abusive head trauma | 2026-10-21 | yes | Uncontroversial; no legal claim |
| 20-10 | Judge diapers on fit, change frequency, and whether they were flagged in quality inspections; cites "State Administration for Market Regulation" and a June 2026 formaldehyde-in-diapers task force | No Indian regulator | Product safety | 2026-10-21 | no | SAMR is China's market regulator; the June 2026 formaldehyde diaper inspection is a Chinese enforcement action. India's regulator for such products is the BIS/CDSCO/Consumer Protection (Product Liability) route, none of which is named |
| 20-11 | Buy big-ticket baby items in the order borrow, buy used, buy new | No instrument needed | Practical | 2026-10-21 | yes | Spot-check: spending advice; nothing invented |
| 20-12 | Do not avoid peanuts for severe eczema or egg allergy; introduce early under medical guidance; never whole peanuts | LEAP trial | Allergy prevention | 2026-10-21 | yes | Matches LEAP and later guidance; the "never whole peanuts" caution is correct |
| 20-13 | Jaundice within 24 hours, unarousable or refusing feeds, deepening jaundice or pale stools mean same-day assessment | AAP 2022 (Kemper); NICE CG98; NHS | Hyperbilirubinaemia | 2026-10-21 | yes | Clinical thresholds are consistent with the cited guidance |
| 20-13 | Caveat: follow-up "per the national basic public health service norm: home visit within one week after discharge" | No Indian authority | Follow-up | 2026-10-21 | no | The 国家基本公共卫生服务规范 postpartum home visit (28-30 days, with a visit within a week) is Chinese. India's Home Based Newborn Care programme schedules six visits up to 42 days through ASHA/ANM; the norm cited does not exist in India |
| 20-14 | Vegan mothers need B12 or fortified foods; complementary foods must include animal-source foods; consult a paediatrician before a strict vegan diet | No Indian instrument needed | Nutrition | 2026-10-21 | yes | Consistent with ESPGHAN and CDC material; the extra source "National Health Commission General Office (2020)... gov.cn" is a source-edition citation that should go, but the claim itself is supported |
| 20-15 | Do not buy wheeled walkers; use stationary activity centres or playpens; Canada banned them in 2004; 230,676 injuries | Sims 2018 (NEISS); Canada ban | Walker injuries | 2026-10-21 | yes | Figures match the cited study; the Canadian ban date is correct |
| 20-16 | 400 IU vitamin D daily from birth for breastfed infants; no routine calcium in the first six months for term infants | AAP; Munns 2016; Cochrane 2020 | Vitamin D | 2026-10-21 | yes | 400 IU is the correct Indian and international dose; note that the JSON also keeps "National health guidelines stipulate 400-800 IU daily" with an NHC gov.cn source, which should be replaced by the Indian guidance |
| 20-17 | Cold water first then hot; test on inner wrist or elbow; set the heater below 50 C (120 F); scald times 65/60/54/49 C | CPSC; WHO/UNICEF 2008 | Bath scalds | 2026-10-21 | yes | The 2 s/6 s/30 s/5 min scald ladder and the 49 C Washington State setting match the cited sources |

## Banned-term check

- JSON: 0 banned terms. No China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY, and no CJK characters.
- Rendered page: 0 banned terms.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 20-3 states a 2026 national immunisation schedule with HPV and a two-month DTaP start that is not India's; 20-13 states a post-discharge home-visit norm that is not India's.
- No invented scheme, number or hotline: FAIL. 20-3's schedule and 20-13's follow-up norm are Chinese, not invented, but they are presented as Indian; 20-10 attributes diaper inspections to a regulator India does not have.
- No direct equivalent recorded where needed: FAIL. The chapter never says that India's schedule differs (DPT at 6/10/14 weeks, no universal HPV) or that HBNC, not a "basic public health service norm", governs newborn follow-up.
- Caveats retained: PASS on clinical caution; FAIL on the 20-4 food-group rule and 20-13 follow-up norm, which are Chinese.

## Blocking issues

- 20-3: "current guidelines date to 2026", HPV added to the national schedule, and DTaP from two months in five doses are China's national immunisation programme. India's UIP schedule (DPT 6/10/14 weeks, boosters, no universal HPV) is different, so the tip misinforms parents about which vaccines are free and when.
- 20-4: the authority is China's National Health Commission, and the "at least four of the seven essential food groups" caveat is the Chinese infant feeding guideline, not Indian IYCF guidance.
- 20-10: the diaper quality-inspection claim cites the State Administration for Market Regulation and a June 2026 formaldehyde task force, both Chinese; no Indian regulator or inspection is identified.
- 20-13: the post-discharge "national basic public health service norm" home visit is the Chinese norm; India's HBNC schedule (six visits to 42 days) is different.

Verdict: FAIL
