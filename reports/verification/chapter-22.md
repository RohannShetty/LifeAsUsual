# Verification: Chapter 22 - How to Relax

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/22-how-to-relax.json
Manifest status: data/en-in/manifest.json lists chapter 22 as status draft, 12 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"]. Read only; nothing was edited.

## Method

The source pack marks 22-2 (price display) as high-risk; it was checked against the Consumer Protection Act 2019, the Legal Metrology (Packaged Commodities) Rules 2011 and the Department of Consumer Affairs' service-charge guidelines. The other venue and drug claims (22-1, 22-3, 22-4, 22-5) were checked because they are Chinese public-order law in disguise, and 22-12 because its caveat names a Beijing regulation. 22-6 to 22-11 were spot-checked against the papers they cite.

consumerhelpline.gov.in was reachable on 21 October 2026 (HTTP 200) and states "Toll Free 1915 (8AM to 8PM)" plus WhatsApp +918800001915, so the hotline in 22-2 is correct. consumeraffairs.nic.in, cited for 22-1 and 22-2, did not connect (curl code 000) on the same date; indiacode.nic.in returned HTTP 403 to the fetcher and was read only through curl with a browser user-agent (partial access).

Pass means: the claim is supported by the Indian statute or authority cited, or by the named study for a clinical claim. Chinese 娱乐场所管理条例, 治安管理处罚法 and Anti-Drug Law provisions reproduced with an Indian citation fail.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 22-1 | "By law, entertainment venues must keep all evacuation routes and emergency exits unobstructed"; the same applies to internet cafes, whose doors, windows and exits must stay open; complaint number must be displayed | No Indian instrument; consumeraffairs.nic.in | Whole tip | 2026-10-21 | no | Quotes 娱乐场所管理条例 ("During operating hours, entertainment venues must guarantee that evacuation routes and emergency exits remain unblocked; they cannot be sealed, locked or fitted with barriers") and 互联网上网服务营业场所管理条例. The only source given is the Department of Consumer Affairs, which has no such rule; that site also did not connect on 2026-10-21. India's route is state fire-safety rules and the National Building Code |
| 22-2 | A shop, restaurant or venue must display its price list before ordering; charging more, or adding an undisclosed service charge, is an unfair trade practice under the Consumer Protection Act 2019 | CPA 2019; LM(PC) Rules 2011; DoCA service-charge guidelines (21 July 2022) | Whole tip | 2026-10-21 | no | No central Indian rule requires a restaurant or venue to display a menu or rate card; the LM(PC) Rules 2011 govern packaged commodities only, and state Shops and Establishments rules vary. DoCA's 2022 guidelines say a service charge is voluntary and may not be levied automatically - they do not make it lawful merely if "disclosed". The legal characterisation is overstated |
| 22-2 | Complain to the National Consumer Helpline on 1915 | consumerhelpline.gov.in | Hotline | 2026-10-21 | yes | Verified on the live page: "Toll Free 1915 (8AM to 8PM)"; WhatsApp +918800001915 |
| 22-3 | Leaving is the answer when "stuff" is offered; harbouring and providing both count as aiding; 3-6 month licence suspension, public-order penalties, criminal liability for harbouring drug use | No Indian instrument; DoCA | Whole tip | 2026-10-21 | no | The licence-suspension ladder, "public order" penalties and harbouring offence are 治安管理处罚法 and 娱乐场所管理条例. India's NDPS Act 1985 offences are different and no consumer authority is involved |
| 22-4 | Do not accept candy, snacks or e-cigarette cartridges; fines ₹14,200-₹71,100, 10-15 days detention; etizolam scheduled from 1 October 2023 | No Indian instrument; NPC Anti-Drug Law via gd.gov.cn | Whole tip | 2026-10-21 | no | The penalty bands and detention periods are Chinese, and the source is the PRC Anti-Drug Law reproduced on a Guangdong government site. India schedules etizolam under the NDPS Act, but the cited figures and instrument are not Indian |
| 22-5 | Avoid scripted-murder-mystery ("jubensha") and escape rooms in residential buildings or below the first basement level | No Indian instrument | Whole tip | 2026-10-21 | no | "Jubensha" (剧本杀) and the five-department 2022 notice restricting such venues to non-residential premises and above the first basement are Chinese. India has no such venue rule |
| 22-6 | Brisk walking or jogging lifts mood; effect size rises with intensity | Exercise-depression literature | Clinical | 2026-10-21 | yes | Consistent with the dose-response evidence cited; no legal claim |
| 22-7 | MBSR works about as well as common anti-anxiety drugs | MBSR trials | Clinical | 2026-10-21 | yes | Cautious framing matches the cited evidence; no invented number |
| 22-8 | Cyclic sighing: two inhalations then a long exhalation, about five minutes | Cyclic sighing study | Clinical | 2026-10-21 | yes | Matches the published protocol |
| 22-9 | Treat regular social contact as a health expense | No instrument needed | Practical | 2026-10-21 | yes | Advice; nothing invented |
| 22-10 | Living near green space supports walking and sitting outdoors | Green-space literature | Clinical | 2026-10-21 | yes | Uncontroversial |
| 22-11 | Half of Finnish sauna deaths involve alcohol; in Tokyo about a quarter of bath deaths had significant blood alcohol; never let an intoxicated person bathe alone | Kenttamies & Karkola 2008; Suzuki 2015 | Forensic series | 2026-10-21 | yes | 50% alcohol involvement and the Tokyo figures (3,289 sudden bath deaths, 550 autopsied, 140 above 0.5 mg/mL) match the cited papers. The source list also carries "Shaanxi Provincial Health Commission", a source-edition citation to remove |
| 22-12 | Ski and snowboard helmets cut head injury about 35% (59% under 13); cycling helmets cut severe TBI 69% and fatal head injury 65%; no increase in neck injury | Russell 2010 (CMAJ 182(4)); Olivier 2017 (IJE 46(1)) | Meta-analyses | 2026-10-21 | yes | The odds ratios (0.65; 0.41; 0.49; 0.31) and the 64,000-cyclist review match the papers |
| 22-12 | (editorial) caveat says "Beijing and internationally mandate helmet use on advanced ski slopes", with a Beijing Municipal Bureau of Sports / CPPCC proposal source | beijing.gov.cn source | Caveat | 2026-10-21 | no | A Beijing municipal regulation and a CPPCC proposal answer cannot support a helmet claim in an India edition; the sentence is source-edition residue and must be removed |

## Banned-term check

- JSON: 0 banned terms. No China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY, and no CJK characters. Source-edition vocabulary appears instead: "KTV", "jubensha", "internet cafes", "Shaanxi Provincial Health Commission", "Beijing", "CPPCC" (22-1, 22-5, 22-11, 22-12).
- Rendered page: 0 banned terms in the literal list; the same source-edition terms would render.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 22-1 and 22-3 state Chinese venue regulations as Indian law with a consumer-affairs citation; 22-2 overstates Indian price-display law.
- No invented scheme, number or hotline: FAIL. 22-4's rupee fines and detention periods are converted Chinese penalties; 22-1 attributes venue fire rules to the Department of Consumer Affairs, which has none.
- No direct equivalent recorded where needed: FAIL. The chapter does not say that India has no KTV/internet-cafe exit rule of this kind, no jubensha venue rule and no central menu-display rule.
- Caveats retained: PASS in form; the 22-12 caveat adds a Beijing regulation that has no place in the India edition.

## Blocking issues

- 22-1: Chinese 娱乐场所管理条例 and 互联网上网服务营业场所管理条例 exit and signage rules presented as Indian law, sourced to the Department of Consumer Affairs (which has no such rule; consumeraffairs.nic.in also did not connect on 2026-10-21).
- 22-2: no Indian central rule requires a restaurant or venue to display a price list before ordering; the LM(PC) Rules 2011 cover packaged commodities only and DoCA's 2022 guidelines make a service charge voluntary rather than lawful on disclosure. The "unfair trade practice" characterisation is not supported as written.
- 22-3: the 3-6 month licence suspension, public-order penalties and harbouring offence are Chinese 治安管理处罚法/娱乐场所管理条例.
- 22-4: fines of ₹14,200-₹71,100, 10-15 days' detention, and the PRC Anti-Drug Law source (gd.gov.cn) are Chinese.
- 22-5: the jubensha/escape-room venue restriction is from the Chinese five-department 2022 notice; no Indian rule.
- 22-12: the caveat's Beijing helmet regulation and Beijing CPPCC proposal source are source-edition residue (the meta-analysis figures themselves pass).

Verdict: FAIL
