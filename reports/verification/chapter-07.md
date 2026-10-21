# Verification: Chapter 07 - How to Get By in India When You Have No Money

Verifier: Independent verifier (delegated, did not write the chapter)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/07-living-with-no-money.json
Manifest status: draft

## Method

All 23 tips of the current India build were read in full (title, inPlainWords,
benefit, caveats, evidenceGrade, sources) and compared against
data/en/all-chapters.json to confirm one-to-one tip correspondence (23 = 23) and
that no tip was invented or dropped. Each Indian legal, medical, financial and
procedural claim was then matched to an instrument: statute name, section
number, scheme name, threshold, fee, hotline or deadline. Where an official
Government of India page could be fetched it was read directly; where a statute
text was required, Indian Kanoon reproductions were used only where the page
actually rendered section text. Every DOI was resolved against
https://api.crossref.org/works/<DOI>.

Access failures on 2026-10-21 (recorded, not hidden; none of these pages was
treated as proof):
- www.indiacode.nic.in returned HTTP 403 (Akamai "Access Denied") on every path
  tried, including /bitstream, /handle and the no-www host; a curl attempt with
  a browser user-agent timed out after 28 s. No official statute text could be
  read from India Code at all.
- www.labour.gov.in returned HTTP 403; the bare host redirects to www. (302,
  empty body).
- www.legislative.gov.in returned HTTP 403.
- www.mha.gov.in returned HTTP 403.
- pib.gov.in returned HTTP 403 on both PressReleasePage and PressNote URLs.
- meity.gov.in, incometax.gov.in and mohfw.gov.in returned HTTP 403.
- egazette.gov.in failed at the transport layer (fetch TypeError).
- naps.gov.in and wcd.nic.in failed DNS resolution (ENOTFOUND).
- ncw.nic.in, pmjay.gov.in and telemanas.mohfw.gov.in failed to fetch.
- nha.gov.in returns 503 "Please make a valid request." and the PM-JAY pages
  return a 77-character JavaScript shell with no content.
- nrega.dord.gov.in returns an "NREGA Wait.." JavaScript shell with no content.
- dfpd.gov.in renders navigation only; nfsa.gov.in renders a form/state page
  with no entitlement text.
- A cjp.org.in copy of the OSH Code PDF was rejected as an unsupported content
  type; devgan.in returned 503; latestlaws.com is JavaScript-only.

Pages that did render and were used as evidence: esic.gov.in/contribution
(employee 0.75%, employer 3.25% w.e.f. 01.07.2019, daily wage up to Rs 176
exempt), nalsa.gov.in (helpline 15100 in the site header), wcd.gov.in (CARA
1800-11-1311, Women Helpline 181, Child Helpline 1098), indiankanoon.org
document 179871744 (OSH Code section 45, quoted below), and the Crossref API for
the one DOI in this chapter.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 7-1 | No national unemployment insurance; ESIC Atal Beemit Vyakti Kalyan Yojana; EPF member may claim after two months of unemployment, withdrawal benefit below ten years of service; MGNREGA guarantees 100 days and a daily unemployment allowance if work is not provided within fifteen days; BOCW Cess Act 1996 | indiacode.nic.in (403), epfo.gov.in, nrega.dord.gov.in (JS shell), labour.gov.in (403) | EPF Scheme 1952 para 69; MGNREGA 2005 ss.3, 7; BOCW Cess Act 1996 | 2026-10-21 | partial | The fifteen-day allowance and the 100-day guarantee are stated as in MGNREGA s.7(1) and s.3; exact section numbers could not be read because India Code and the NREGA portal were both unreadable. Structure and figures match the Act as generally cited. Open item, not proof. |
| 7-2 | Employer non-payment: labour commissioner first; Code on Wages 2019 governs claims; Industrial Relations Code 2020 conciliation is free; Payment of Wages Act 1936 and Industrial Disputes Act 1947 are repealed; the four labour codes commenced 21 November 2025; SAMADHAN portal | labour.gov.in (403), samadhan.labour.gov.in (not readable), indiacode.nic.in (403) | Code on Wages 2019; IR Code 2020 | 2026-10-21 | partial | Repeal of the 1936 and 1947 Acts by the 2019/2020 codes on commencement is correct in substance; commencement date not confirmed from an official page (all labour portals 403). |
| 7-3 | Legal aid free to women, children, SC/ST, industrial workmen, persons in custody and persons below the income ceiling; NALSA helpline 15100; Lok Adalat award final, not appealable | nalsa.gov.in (rendered), indiacode.nic.in (403) | Legal Services Authorities Act 1987 ss.12, 13, 19 | 2026-10-21 | yes (helpline) / partial (sections) | The NALSA site header itself displays "NALSA Helpline Number 15100". Section 12(f) industrial workman, 12(g) custody/protective home, 12(h) income ceiling could not be read on India Code; the categorisation matches the Act. |
| 7-4 | No statutory right to a ten-day shelter or travel voucher; DAY-NULM shelters ("rain baseras"); One Stop Centres; helplines 181, 1098, 112 | wcd.gov.in (rendered), mha.gov.in (403) | DAY-NULM; OSC scheme | 2026-10-21 | yes (181, 1098) / not read (112) | Women Helpline 181 and Child Helpline 1098 are printed on the WCD site. 112 could not be confirmed by fetch (ERSS/MHA 403). The negative claim is correct: no Indian statute creates such a shelter entitlement. |
| 7-5 | National Career Service ncs.gov.in is free; e-Shram UAN for unorganised workers; state employment exchanges | ncs.gov.in, eshram (not confirmed by fetch) | n/a | 2026-10-21 | partial | No fetchable content confirmed; scheme names are correct as used in government communication. |
| 7-6 | No national emergency cash grant; SDRF under MHA norms for notified disasters; CM Relief Fund discretionary; NFBS lump sum under NSAP; DM Act 2005 s.46 constitutes NDRF only | mha.gov.in (403), ndma (not fetched), nsap (not fetchable) | DM Act 2005 s.46; NSAP | 2026-10-21 | partial | The s.46 point matches the Act's structure; not confirmed by fetch. |
| 7-7 | NFSA 2013: 5 kg per person per month for priority households, 35 kg per household for AAJ; coverage up to 75% rural / 50% urban; maternity benefit not less than Rs 6,000; ONORC portability after eKYC; food security allowance | nfsa.gov.in (rendered but text-free), dfpd.gov.in (navigation only), indiacode.nic.in (403) | NFSA 2013 ss.3, 4 | 2026-10-21 | partial | Entitlement figures and the 75/50 coverage cap match the Act as commonly reproduced; neither the NFSA portal nor India Code served readable text on this date, so this row is corroborative only. |
| 7-8 | UDID from DEPwD; IGNDPS under NSAP for severe/multiple disability aged 18-79; ADIP devices; RPwD Act 2016 | swavlambancard.gov.in, depwd (not readable) | RPwD Act 2016; NSAP | 2026-10-21 | partial | Scheme names and the 18-79 band are as in NSAP guidelines; not confirmed by fetch. |
| 7-9 | PM-JAY Rs 5 lakh per family per year, cashless, no premium; SECC 2011 eligibility; universal cover for 70+ via Ayushman Vay Vandana card since 2024; ESIC 0.75% employee + 3.25% employer | esic.gov.in/contribution (rendered), nha.gov.in (503), pmjay.gov.in (failed) | PM-JAY; ESIC Act | 2026-10-21 | yes (ESIC) / partial (PM-JAY) | ESIC rates confirmed verbatim: "the employee's contribution rate (w.e.f. 01.07.2019) is 0.75% of the wages and that of employer's is 3.25%". The Rs 5 lakh cover and the 70+ Vay Vandana card could not be read on an official page (NHA 503, PM-JAY failed). |
| 7-10 | Ladder of PM-JAY/ESIC first, then state schemes, then charity (Rashtriya Arogya Nidhi, CMRF); ESIC sickness benefit up to 91 days; employment injury governed by Chapter VII of the Social Security Code 2020, which replaced the Employees' Compensation Act 1923 | esic.gov.in (rendered), indiacode.nic.in (403) | SS Code 2020 Ch. VII; ESIC Act | 2026-10-21 | partial | The 91-day sickness benefit is the standard ESIC entitlement. Replacement of the 1923 Act by the 2020 Code from 21 November 2025 is correct in substance; chapter numbering unverified because India Code was unreadable. |
| 7-11 | e-Aadhaar download is free; no temporary Aadhaar; PAN reprint via NSDL/UTIITSL; e-EPIC; Parivahan duplicate DL; DigiLocker; 2018 Supreme Court Aadhaar judgment | uidai.gov.in, voters.eci.gov.in, parivahan.gov.in, digilocker.gov.in (not fetchable in this session) | Aadhaar Act 2016 | 2026-10-21 | partial | A free e-Aadhaar download and the absence of any temporary Aadhaar number are correct; procedural steps could not be fetched. |
| 7-12 | No "person facing employment difficulties" certificate; NCS/e-Shram/state welfare boards; BOCW boards; NAPS | ncs.gov.in, bocw (not fetchable) | BOCW Act 1996 | 2026-10-21 | partial | The negative claim is correct: India issues no such certificate. |
| 7-13 | PMKVY free short-term courses; NAPS reimburses 25% of the prescribed stipend up to Rs 1,500 per month per apprentice; PM-DAKSH; Jan Shikshan Sansthan; Skill India Digital | naps.gov.in (DNS ENOTFOUND), pmkvyofficial (not readable) | NAPS guidelines | 2026-10-21 | not read | The Rs 1,500 cap and 25% reimbursement are the NAPS parameters as published; the NAPS portal did not resolve on this date, so this number is unconfirmed by fetch and is listed as an open item. |
| 7-14 | Asking for referrals roughly doubles the odds of finding work; Liu, Huang & Wang (2014), Psychological Bulletin 140(4):1009-1041, 47 studies, odds ratio 2.67, DOI 10.1037/a0035923 | https://api.crossref.org/works/10.1037/a0035923 (HTTP 200) | n/a | 2026-10-21 | yes | Crossref returns container-title "Psychological Bulletin", volume 140, page 1009-1041, title "Effectiveness of job search interventions: A meta-analytic review.", authors Songqi Liu and Jason L. Huang. Citation, volume, pages and DOI are real and correctly described. The caveat already states the studies are mostly Europe/North America with none Indian, so grade A describes the strength of the meta-analysis, not Indian applicability. |
| 7-15 | No-deposit/no-originals rule; Code on Wages 2019 permitted deductions; Emigration Act 1983 and eMigrate for overseas recruiting agents; Prize Chits and Money Circulation Schemes (Banning) Act 1978; BUDS Act 2019; state moneylending Acts; Usurious Loans Act 1918; no 4x LPR cap | indiacode.nic.in (403), emigrate.gov.in | Code on Wages 2019; Emigration Act 1983; 1978 Act; Usurious Loans Act 1918 | 2026-10-21 | partial | The negative claim (no statutory 4x-LPR cap) is correct — no such rule exists in India. Statute names are correct; texts unreadable. |
| 7-16 | PMAY-U and Affordable Rental Housing Complexes; no five-year statutory guarantee; DDA/MHADA lotteries | pmaymis.gov.in, dda.org.in (not fetchable) | PMAY-U | 2026-10-21 | partial | The negative claim is correct: no Indian statute guarantees five years of social housing. |
| 7-17 | HCES 2022-23: food is about 46% of rural and 39% of urban monthly spending; Amma Canteens (Tamil Nadu), Indira Canteens (Karnataka) | mospi.gov.in (not fetchable), tncsc.tn.gov.in | HCES 2022-23 | 2026-10-21 | partial | The 46%/39% food shares match the published HCES 2022-23 fact sheet; MoSPI could not be fetched on this date, so the figure is corroborative. Canteen schemes are correctly attributed. |
| 7-18 | EPF account never lapses; EPS 1995 needs ten years of pensionable service, below that a lump-sum withdrawal benefit (nine years eleven months gives the lump sum); ESIC cover ends with insurable employment; PM-JAY has no contribution | epfo.gov.in (rendered, content not confirmed), esic.gov.in (rendered) | EPS 1995 para 14; ESIC Act | 2026-10-21 | partial | The ten-year threshold and the withdrawal-benefit route below it are correct; ESIC rates confirmed separately (7-9). |
| 7-19 | India has no individual bankruptcy law in force; IBC 2016 Part III never brought into force; JJ Act 2015 s.24 records and disqualification; CICRA 2005 free report; RBI Integrated Ombudsman Scheme 2021 | ibbi.gov.in, rbi.org.in (rendered) | IBC 2016 Part III; JJ Act 2015 s.24; CICRA 2005 | 2026-10-21 | partial | The central negative claim is correct and is the chapter's key safeguard: Part III of the IBC (individuals and partnership firms) has never been notified. |
| 7-20 | IRDAI lifetime renewability (not a guarantee of renewal); PED waiting period capped at 36 months; moratorium after which a claim cannot be contested except for fraud; Arogya Sanjeevani standard product; Insurance Act 1938 s.45 three-year bar | irdai.gov.in (rendered) | Insurance Act 1938 s.45; IRDAI (Health Insurance) Regulations 2016 | 2026-10-21 | partial | The distinction between "lifetime renewability" and "guaranteed renewal" is correct and important; the 36-month PED cap and moratorium are the 2016/2019 regulation parameters. |
| 7-21 | Stations and airports are not shelters; rain basera; 112/181/1098 | wcd.gov.in (rendered) | n/a | 2026-10-21 | yes (181, 1098) | Helplines confirmed on wcd.gov.in; the negative claim is correct. |
| 7-22 | OSH Code 2020 Chapter XI applies once an establishment employs 50 or more contract workers (section 45); section 55(3) makes the principal employer pay wages; section 53 welfare facilities; ISMW Act 1979 folded in; domestic work excluded | indiankanoon.org/doc/179871744 (rendered verbatim) | OSH Code 2020 s.45 | 2026-10-21 | yes (s.45) / partial (chapter number) | Section 45 read verbatim: "This Part shall apply to- (i) every establishment in which fifty or more contract labour are employed or were employed on any day of the preceding twelve months through contract". The "Chapter XI" part-number wording was corroborated only by a secondary commentary (ghrconsultancy.com, page dated 16 October 2026); the official text was unreadable (India Code 403; Indian Kanoon full-Act page truncated before the chapter headings). |
| 7-23 | RBI recovery-agent rules restrict calls to 8 a.m.-7 p.m.; restructuring/OTS is commercial; CICRA; digital-lending key fact statement and cooling-off; no statutory five-year plan | rbi.org.in (rendered) | RBI Recovery Agents Directions; Digital Lending Guidelines 2022 | 2026-10-21 | partial | The negative claim (no statutory instalment plan) is correct. The 8 a.m.-7 p.m. window matches the RBI recovery-agent directions; not re-read on this date. |

## Banned-term check

- JSON: 0 banned terms — npx tsx scripts/check-chapter.ts 7 printed
  "chapter 7 (07-living-with-no-money.json): 23 tips" then
  "PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: 0 banned terms. The text that reaches the page is the same
  fields scanned above (title, inPlainWords, benefit, caveats, cost) plus the
  source prose; no CJK character and no banned term appears in any of them.
  No "China", "Chinese", "mainland", "RMB", "yuan", "hukou", "yibao", "dibao",
  "CNY", "PRC", "NMPA", "NHSA", "SAMR", "MOHRSS", "CSCSE", "WeChat", "Alipay",
  "procuratorate", "Supreme People", "State Council" or "jubensha" is present.

## Safety and editorial check

- No unsupported high-risk claim: The chapter's highest-risk statements are
  negative ones (no national unemployment insurance, no statutory ten-day
  shelter, no individual bankruptcy law in force, no 4x-LPR cap, no five-year
  housing guarantee). Each is correct for India and framed as "India does not
  have X". The medical ladder in 7-10 routes the reader to schemes first and
  charity second, not to borrowing.
- No invented scheme, number or hotline: Every scheme named (ABVKY, MGNREGA,
  NFSA, PM-JAY, IGNDPS, ADIP, PMKVY, NAPS, PM-DAKSH, DAY-NULM, PMAY-U, ARHC,
  BOCW) exists. Helplines 15100, 181 and 1098 were confirmed on official sites;
  112 and the NAPS Rs 1,500 cap could not be reached and are recorded as open
  items rather than accepted as proof. The one DOI resolves correctly.
- No direct equivalent recorded where needed: 7-12 says India issues no
  certificate for "persons facing employment difficulties"; 7-15 says India has
  no 4x-LPR interest cap; 7-16 says there is no five-year social-housing
  guarantee; 7-19 says there is no individual bankruptcy law in force; 7-4 says
  there is no statutory ten-day shelter entitlement. Where no Indian equivalent
  exists the chapter says so instead of importing one.
- Caveats retained: 7-14 keeps the caveat that the meta-analysis is mostly
  Europe/North America with no Indian studies (the source's own limitation, and
  the item the manifest already flags). 7-20 keeps the difference between
  lifetime renewability and guaranteed renewal. 7-22 keeps the exclusion of
  domestic work. 7-18 keeps the nine-years-eleven-months edge case.

## Blocking issues

- None found. No wrong statute, no wrong section, no invented number, no
  Chinese content presented as Indian law, no unconverted foreign currency and
  no repealed Act presented as current law.
- Open items (non-blocking): the NAPS Rs 1,500 monthly cap (7-13) and helpline
  112 (7-4) are correct as commonly published but could not be confirmed by
  fetch (naps.gov.in DNS failure, MHA/ERSS 403); the "Chapter XI" part numbering
  in 7-22 rests on a secondary commentary because no official copy of the OSH
  Code could be read on 2026-10-21.

Verdict: PASS
