# Verification: Chapter 23 - Which Skills to Learn

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/23-which-skills-to-learn.json
Manifest status: data/en-in/manifest.json lists chapter 23 as status draft, 25 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"], bannedTerms 0. The bannedTerms field is wrong: the chapter JSON contains 8 CJK characters. Read only; nothing was edited.

## Method

The source pack marks 23-9 (government training subsidy), 23-22 (no agents or ghostwritten papers) and 23-25 (PhD) as high-risk; all three were checked and all three were in fact rewritten to Indian routes. The real failures are elsewhere. Because this chapter is dense with Chinese education and labour policy, every tip that carries a scheme name, a rupee figure, a regulation or a qualification was checked: 23-1, 23-3 to 23-6, 23-8, 23-11 to 13, 23-20, 23-21, 23-23, 23-24. The evidence-based study-technique tips (23-2, 23-7, 23-10, 23-14 to 23-19) were spot-checked against the papers they cite.

Official sites were probed on 21 October 2026 with curl and a desktop browser user-agent from C:/Users/$hetty/AppData/Local/Temp/verif. msde.gov.in and education.gov.in returned HTTP 403 to the fetcher and were readable only through curl with a browser user-agent (partial access). nsdcindia.org and ugc.gov.in were reachable. pmkvyofficial.org failed DNS (ENOTFOUND). The chapter JSON also cites the Chinese Ministry of Human Resources and Social Security, the National Bureau of Statistics, gov.cn and MOHRSS Order No. 40, none of which is an Indian authority.

Pass means: the claim matches the Indian scheme, statute or study it cites. A tip that describes China's 职业教育法, 中职免学费, 新八级工 or 职称评审 rules in Indian rupees fails, even if the advice is sensible.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 23-1 | Anyone under 16 cannot lawfully be employed; an employer who hires them faces "$5000 per month"; "Article 11/14/58 of the Compulsory Education Law" and "Article 2 of the Regulations on Banning Child Labor" | msde.gov.in; nsdcindia.org | Whole tip | 2026-10-21 | no | Chinese 义务教育法 and 禁止使用童工规定, with a dollar figure. India's law is the Child and Adolescent Labour (Prohibition and Regulation) Act 1986 as amended in 2016: employment of a child under 14 is prohibited (with family/artiste exceptions), and adolescents aged 14-18 may not do hazardous work. Penalty is imprisonment and/or fine, not a monthly per-child charge. The cited skills bodies are the wrong authority for a labour-law claim |
| 23-2 | Each extra year of schooling cuts adult mortality about 1.9%; 2.9% at ages 18-49; 0.8% above 70; 603 studies, 59 countries, publication bias p&lt;0.0001 | IHME-CHAIN, Lancet Public Health 2024 | Meta-analysis | 2026-10-21 | yes | Figures match the published study. Defect is editorial only: caveats contain the raw citation markers "〔10355〕" |
| 23-2 | (editorial) CJK citation markers in caveats | Chapter JSON | Caveats | 2026-10-21 | no | "〔10355〕" is Chinese bracket punctuation; the India edition must contain zero CJK characters |
| 23-3 | The seventh national census had a reference date of 1 November 2020; 218,360,767 people have college education; mean schooling 9.91 years; 15,467 college and 34,507 junior-high per 100,000 | No Indian source | Whole tip | 2026-10-21 | no | This is China's seventh national census. India's Census 2011 gives a different literacy and education structure, and no Indian source is cited. The tip's premise ("only 15467 per 100000") is a Chinese statistic presented as background for Indian readers |
| 23-4 | Most vocational tuition is waived; a 2,300-rupee grant; college students get 3,700 rupees a year; loans up to ₹2,84,200 a year; "national grant for undergraduates rose from 3300 to ₹52,600"; "National Inspirational Scholarship 5000 to ₹85,300"; tuition waiver since autumn 2012; "0.₹99" | msde.gov.in; nsdcindia.org | Whole tip | 2026-10-21 | no | Chinese 中职免学费, 国家助学金 and 国家励志奖学金 with yuan amounts converted to rupees; "0.₹99" is a broken currency conversion left in the text. India has no such national tuition waiver, grant or scholarship at these amounts. Indian routes are post-matric scholarships, state fee reimbursement and education loans under a bank's scheme |
| 23-5 | The Vocational Education Law was enacted in 2022, art. 3 and art. 37 link vocational and academic admission; provinces set reserved proportions for linked admission | No Indian instrument | Whole tip | 2026-10-21 | no | China's 职业教育法 (2022 revision). India's vocational route is NSQF/NSDC and ITI admission, with no statutory "linked admission" or provincial quota of this kind. msde.gov.in does not contain the cited articles |
| 23-6 | Return to education rose from 4.0% a year in 1988 to 10.2% in 2001, and studies cover only urban residents | No source cited | Whole tip | 2026-10-21 | no | The 4.0% to 10.2% series and the "urban residents only" limitation are from Chinese returns-to-education literature; the tip carries no China label and no citation, so an Indian reader is told this about India. Compare 23-7, which correctly uses the global Psacharopoulos figure |
| 23-7 | Each additional year of schooling yields about 9% a year worldwide | Psacharopoulos & Patrinos 2018 | 1,120 estimates / 139 countries | 2026-10-21 | yes | 9% average return matches the published review |
| 23-8 | Before paying for a certification, check the National Vocational Qualification Catalogue and the list of evaluation agencies registered with the Ministry of Human Resources and Social Security | msde.gov.in; nsdcindia.org | Whole tip | 2026-10-21 | no | The National Vocational Qualification Catalogue and MOHRSS (人力资源和社会保障部) are Chinese. India's equivalents are the NSQF, the National Occupational Standards and the awarding bodies under NSDC/MSDE; the tip sends the reader to a body that does not exist in India |
| 23-9 | Use a government training subsidy first; check what is free before paying a commercial course (PMKVY, NSDC, state missions) | MSDE; NSDC; PMKVY | Whole tip | 2026-10-21 | yes | Rewrite is sound and names no invented scheme. Caveat: pmkvyofficial.org, cited in the JSON, failed DNS on 2026-10-21 (ENOTFOUND), so the PMKVY page itself could not be read; the programme's existence is uncontroversial |
| 23-10 | Prioritise skills that need hands-on work and on-the-spot judgment, which automation struggles to replace | Frey & Osborne 2013 | 47% of US jobs | 2026-10-21 | yes | The 47% figure and the engineering-bottleneck framing match the paper |
| 23-11 | Check whether a skill has an official grading system, and whether grades translate into pay rises; the "New Eight-Level Worker" system links pay to skill grade | No Indian instrument | Whole tip | 2026-10-21 | no | 新八级工 is China's skilled-worker grading reform. India has NSQF levels and some industry skill councils, but no national eight-level worker grade with pay linkage. The tip asserts a system that does not exist here |
| 23-12 | Do not read advertised high wages as proof of shortage; check local in-demand occupation lists and subsidy programmes; "2025 data from the National Bureau of Statistics": average annual wage at large-scale enterprises about ₹15,07,400; managers ₹29,84,300; professional/technical ₹22,09,500; clerical ₹13,49,000; production ₹11,47,300; social services ₹11,34,800 | No Indian source | Wage table | 2026-10-21 | no | The wage ladder is China's National Bureau of Statistics release converted into rupees. India's equivalent is the Periodic Labour Force Survey / Wage Rates in Rural India; none is cited. Caveats also contain CJK markers "〔106000〕〔210000〕〔155000〕" |
| 23-12 | (editorial) CJK citation markers in caveats | Chapter JSON | Caveats | 2026-10-21 | no | Three Chinese bracket tokens remain in the text |
| 23-13 | Government supports private training institutions offering market-driven short-term training, and vocational colleges run "micro-specializations" | msde.gov.in; nsdcindia.org | Whole tip | 2026-10-21 | no | The quoted policy language ("micro-specializations", market-driven private training) is from China's vocational education policy. India's MSDE does fund short-term skilling, but the quoted framing and terms are not Indian and the cited pages do not carry them |
| 23-14 | Close the book and test yourself rather than rereading | Yang 2021 | Testing effect | 2026-10-21 | yes | Consistent with the testing-effect literature |
| 23-15 | Spread study over several days instead of cramming | Cepeda 2006 | 317 experiments | 2026-10-21 | yes | The 317-experiment review supports spaced practice |
| 23-16 | Highlighting, rereading and summarising are not primary study methods | Dunlosky 2013 | Ten techniques | 2026-10-21 | yes | Matches the ratings in that review |
| 23-17 | Mix exercise types rather than repeating one kind | Brunmair & Richter 2019 | g=0.42 | 2026-10-21 | yes | Overall g=0.42, with visual 0.67, maths 0.34 and vocabulary -0.39, matches the meta-analysis |
| 23-18 | Do not choose methods by "visual learner / auditory learner" | Pashler 2008 | Learning styles | 2026-10-21 | yes | Correct: no evidence for meshing hypothesis |
| 23-19 | Test yourself with questions shaped like the way you will use the material | Pan & Rickard 2018 | d=0.40 | 2026-10-21 | yes | Transfer effect size matches |
| 23-20 | Find the professional series and level, then the application channel for your employer type; 27 professional series nationwide; MOHRSS Order No. 40; employer must post for at least five working days | No Indian instrument | Whole tip | 2026-10-21 | no | China's 职称评审管理暂行规定 (MOHRSS Order No. 40): 27 series, five working days' public posting. India has no statutory professional-title evaluation system of this kind; the cited MSDE/NSDC pages do not contain it |
| 23-21 | Assistant accountant needs high school; full accountant needs a bachelor's plus four years or an associate degree plus five; national unified exam | No Indian instrument; source line cites gov.cn/zhengce/zhengceku/202405 | Whole tip | 2026-10-21 | no | China's 会计专业技术资格考试 rules; the source line is malformed and points to a Chinese State Council policy library page. India's accounting qualifications are CA/CMA/CS under ICAI/ICMAI/ICSI, with entirely different entry rules |
| 23-22 | Do not hire agents, pay for ghostwritten papers or falsify materials; proven violations mean revocation of the title and a three-year integrity record | UGC; AIU; BNS 2023 | Whole tip | 2026-10-21 | yes | Rewritten to India and plausible: UGC rules on plagiarism and false credentials, BNS 2023 forgery offences. No invented scheme |
| 23-23 | A professional title does not automatically bring a pay rise; check whether the employer uses a post-based quota (岗位结构比例) | No Indian instrument | Whole tip | 2026-10-21 | no | The post-ratio (岗位结构比例) quota is a Chinese public-institution rule under MOHRSS Order No. 40 art. 2. Indian employers have no such statutory quota; the tip should be rewritten to Indian promotion and pay-scale practice or dropped |
| 23-24 | Standard full-time academic master's tuition was capped in principle at ₹1,13,700 a year under 2013 national guidance; national graduate stipend at least ₹85,300; doctoral stipend not less than ₹1,42,100 | No Indian instrument | Whole tip | 2026-10-21 | no | China's 2013 研究生教育收费 and 国家助学金 policy (a 10,000 yuan tuition cap, 6,000 yuan master's and 10,000 yuan doctoral stipends) converted into rupees. India has no national tuition cap or doctoral stipend at these amounts; the real Indian routes are UGC/CSIR fellowships and state fee regulation |
| 23-25 | Before a PhD, check whether the job you want requires one and what it pays in India; UGC-NET, assistant professor, JRF/SRF | UGC | UGC-NET / fellowship pages | 2026-10-21 | yes | Rewritten to India and consistent with UGC-NET for assistant professor and JRF/SRF eligibility; ugc.gov.in reachable on 2026-10-21 |

## Banned-term check

- JSON: 8 CJK characters, in 23-2 caveats ("〔10355〕") and 23-12 caveats ("〔106000〕〔210000〕〔155000〕"). No China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY appears literally. Source-edition vocabulary appears instead: "province/provincial" (23-4, 23-5, 23-20), "gov.cn" (23-21), "Ministry of Human Resources and Social Security" (23-8, 23-20), "National Bureau of Statistics" (23-12).
- Rendered page: the same 8 characters would render, so the rendered page is not clean.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 23-1 states a child-labour rule and a per-month dollar fine that are not Indian; 23-3, 23-4, 23-12 and 23-24 give Chinese statistics and amounts in rupees.
- No invented scheme, number or hotline: FAIL. 23-11's "New Eight-Level Worker" grade, 23-20's 27 professional series and 23-23's post quota are Chinese systems presented as Indian; 23-4's "0.₹99" is a broken conversion.
- No direct equivalent recorded where needed: FAIL. The chapter never tells the reader that the tuition waiver, grants, professional-title system and stipends it describes do not exist in India.
- Caveats retained: PASS in form; two caveats carry untranslated citation markers.

## Blocking issues

- 23-1: Chinese child-labour prohibition (Compulsory Education Law; Regulations on Banning Child Labour) and a "$5000 per month" fine; India's law is the Child and Adolescent Labour (Prohibition and Regulation) Act 1986 as amended 2016.
- 23-3: China's seventh national census figures (218,360,767 college-educated; 9.91 years; 15,467 per 100,000) with no Indian source.
- 23-4: Chinese tuition waiver, 2,300/3,700-rupee grants, ₹2,84,200 loans, ₹52,600/₹85,300 scholarship figures and the broken "0.₹99".
- 23-5: China's Vocational Education Law (2022) arts. 3 and 37 and provincial linked-admission quotas; no Indian equivalent.
- 23-6: Chinese returns-to-education series (4.0% in 1988 to 10.2% in 2001, urban residents only) with no source and no China label.
- 23-8: National Vocational Qualification Catalogue and MOHRSS evaluation-agency list; MOHRSS is not an Indian authority.
- 23-11: "New Eight-Level Worker" grading system with pay linkage; Chinese.
- 23-12: Chinese National Bureau of Statistics 2025 wage ladder converted to rupees; plus three CJK markers in caveats.
- 23-13: Chinese vocational-education policy language (market-driven private training, "micro-specializations") attributed to MSDE.
- 23-20: MOHRSS Order No. 40, 27 professional series, five-working-day posting; Chinese.
- 23-21: Chinese accounting title entry rules and a malformed gov.cn source; India's route is ICAI/ICMAI/ICSI.
- 23-23: post-ratio (岗位结构比例) quota for professional titles; Chinese public-institution rule.
- 23-24: Chinese 2013 graduate tuition cap and stipend amounts converted to rupees (₹1,13,700; ₹85,300; ₹1,42,100).
- 23-2 / 23-12: raw CJK citation markers "〔10355〕" and "〔106000〕〔210000〕〔155000〕" in the caveats.

Verdict: FAIL
