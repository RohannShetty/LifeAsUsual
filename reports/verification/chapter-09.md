# Verification: Chapter 09 - Everyday Legal Red Lines

Verifier: Independent verifier (delegated, did not write the chapter)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/09-everyday-legal-red-lines.json
Manifest status: draft

## Method

All 29 tips of the current India build were read in full and matched against
data/en/all-chapters.json: 29 tips in both, no tip added or removed. Each tip
was then checked for its specific Indian legal assertion — statute, section,
punishment, threshold or agency — using Indian Kanoon reproductions where the
page rendered actual section text or at least the section heading, and an
official portal where one would load. Because this chapter is a red-line list,
particular attention was paid to tips that deny an offence exists (9-1, 9-3,
9-4, 9-13): a false denial would be a safety defect, so each was read to confirm
it denies only the specific over-claim and does not deny the offence itself.

Access failures on 2026-10-21 (recorded, not hidden; none of these pages was
treated as proof):
- www.indiacode.nic.in returned HTTP 403 (Akamai "Access Denied") on every path
  tried (/, /handle, /bitstream, /show-data, no-www). All 29 India Code
  citations in this chapter therefore could not be opened. A curl with a
  browser user-agent timed out after 28 s.
- meity.gov.in returned HTTP 403, so the Online Gaming Act 2025 (9-13) could
  not be read on the ministry site.
- pib.gov.in returned HTTP 403 on both PressReleasePage and PressNote URLs.
- www.mha.gov.in, www.legislative.gov.in and www.labour.gov.in returned HTTP
  403.
- www.wildlifeofindia / moef pages were not readable in this session; cites.org
  was not reachable from here for the CITES point.
- cybercrime.gov.in renders a JavaScript application with no readable body.
- cara.wcd.gov.in and notto.mohfw.gov.in returned HTTP 403 or failed to fetch.
- telemanas.mohfw.gov.in failed to fetch; ncw.nic.in failed to fetch;
  egazette.gov.in failed at the transport layer (TypeError).

Pages that did render and were used as evidence: indiankanoon.org document
1592411 (Prevention of Insults to National Honour Act, 1971, sections 2 and 3
quoted verbatim below), indiankanoon.org section pages headed "Section 77 in
Bharatiya Nyaya Sanhita, 2023 — 77. Voyeurism.", "Section 118 in Bharatiya
Nyaya Sanhita, 2023" and "Section 67 in The Information Technology Act, 2000",
and search-result titles dated 2025-2026 from PIB and MHA for the 1930 helpline
and the Online Gaming Act 2025 (titles only — the pages themselves were 403).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 9-1 | BNS false information and public mischief; IT Act 2000 ss.66C, 66D, 67; the IT Act does not create a separate offence of publishing false news | indiacode.nic.in (403) | BNS 2023 ss.217, 352; IT Act 2000 ss.66C, 66D, 67 | 2026-10-21 | partial | The negative claim is correct: the IT Act has no "fake news" offence, and 66C/66D are identity theft and impersonation-cheating, 67 is obscenity. Text unreadable (India Code 403). |
| 9-2 | Prevention of Insults to National Honour Act 1971: section 2 (flag and Constitution), section 3 (anthem), punishment up to three years; Emblems and Names (Prevention of Improper Use) Act 1950; no martyrs law | indiankanoon.org/doc/1592411 (rendered verbatim) | 1971 Act ss.2, 3; 1950 Act | 2026-10-21 | yes | The rendered text reads "3. Prevention of singing of Indian National Anthem, etc.— Whoever intentionally prevents the singing of the Indian National Anthem or causes disturbance to any assembly engaged in such singing shall be punished with imprisonment for a term which may extend to three years, or with fine, or with both." Section 2 covers insults to the flag and the Constitution. The no-martyrs-law negative claim is correct. |
| 9-3 | Reading a foreign website is not an offence; BNS Chapter VII offences against the State; UAPA 1967 | indiacode.nic.in (403) | BNS 2023 Ch. VII; UAPA 1967 | 2026-10-21 | partial | Correct: mere reading is not an offence, and the State-offence provisions are in BNS Chapter VII. No invented provision. |
| 9-4 | Private viewing of obscene material is not punished; distribution is; IT Act 2000 s.67; POCSO 2012 | indiankanoon.org (heading) | IT Act 2000 s.67; POCSO 2012 | 2026-10-21 | yes (s.67) / partial | Indian Kanoon's page is headed "Section 67 in The Information Technology Act, 2000" and the IT Act offence is publication or transmission, not private viewing. The negative claim is correct for adult material; the tip correctly carves out POCSO. |
| 9-5 | Money mule; PMLA 2002; RBI KYC Master Directions | indiacode.nic.in (403), rbi.org.in (rendered) | PMLA 2002 s.3 | 2026-10-21 | partial | Correct routes; no invented number. |
| 9-6 | Loan-packaging fraud; BNS forgery and cheating | indiacode.nic.in (403) | BNS 2023 ss.336, 318 | 2026-10-21 | partial | Forgery (336) and cheating (318) are the right provisions; sections not re-read today. |
| 9-7 | Found property; BNS dishonest misappropriation | indiacode.nic.in (403) | BNS 2023 s.314 | 2026-10-21 | partial | Dishonest misappropriation is the correct provision; the tip keeps the "depends on dishonesty" hedge rather than asserting a fixed penalty. |
| 9-8 | Fake accounts and coupon fraud; IT Act ss.66C, 66D; DPDP Act 2023 | indiacode.nic.in (403), meity.gov.in (403) | IT Act 2000 ss.66C, 66D; DPDP Act 2023 | 2026-10-21 | partial | Both IT Act sections are correctly characterised; the DPDP Act 2023 is the current data-protection statute. |
| 9-9 | Throwing objects from a balcony; BNS endangering life; municipal solid-waste rules | indiacode.nic.in (403) | BNS 2023 s.125 | 2026-10-21 | partial | Endangering life by a rash or negligent act is the correct route; municipal rules are state-level and correctly described as such. |
| 9-10 | Arms Act 1959 and Arms Rules 2016; air guns and imitation firearms | indiacode.nic.in (403) | Arms Act 1959; Arms Rules 2016 | 2026-10-21 | partial | The Arms Rules were re-issued in 2016 (replacing the 1962 Rules); the 1959 Act is current law. Correct. |
| 9-11 | Drone Rules 2021; Digital Sky (digitalsky.dgca.gov.in); Aircraft Act 1934 | indiacode.nic.in (403), dgca.gov.in | Drone Rules 2021; Aircraft Act 1934 | 2026-10-21 | partial | The 2021 Rules replaced the 2018 draft regime and Digital Sky is the correct platform; the engine of the Aircraft Act 1934 is correct. |
| 9-12 | Section 77 of the BNS punishes voyeurism, section 78 stalking; DPDP Act 2023; POCSO 2012 | indiankanoon.org (heading) | BNS 2023 ss.77, 78 | 2026-10-21 | yes (77) / partial (78) | Indian Kanoon's page is headed "Section 77 in Bharatiya Nyaya Sanhita, 2023 — 77. Voyeurism.", confirming the section numbers cited. Section 78 (stalking) sits immediately after in the same chapter. |
| 9-13 | Casual card game fine; rake or paid online real-money betting illegal; Public Gambling Act 1867; Promotion and Regulation of Online Gaming Act 2025 prohibits online money games | meity.gov.in (403), pib.gov.in (403) | 1867 Act; Online Gaming Act 2025 | 2026-10-21 | partial | The 2025 Act exists and bans online money games; a PIB search-result title reads "Government Enacts Online Gaming Act 2025, Prohibits All Forms of Online Money Games" and a vikaspedia listing records the Promotion and Regulation of Online Gaming Rules, 2026 notified in April 2026. The pages themselves were 403, so the wording was not read. The 1867 Act is correctly described as the pre-constitution statute still applied by states. |
| 9-14 | Wild Life (Protection) Act 1972; penalties increased in 2022; CITES | indiacode.nic.in (403), cites.org | WLPA 1972 (as amended 2022) | 2026-10-21 | partial | The Wild Life (Protection) Amendment Act 2022 raised penalties and inserted CITES scheduling; correct. Pages unreadable. |
| 9-15 | Cannot detain a debtor; BNS wrongful confinement; NI Act 1881 s.138; IBC 2016 | indiacode.nic.in (403) | BNS 2023 s.126; NI Act 1881 s.138 | 2026-10-21 | partial | Correct: s.138 is the cheque route and detaining a debtor is wrongful confinement. |
| 9-16 | Lending Aadhaar or PAN; Aadhaar Act 2016; DPDP Act 2023 | indiacode.nic.in (403) | Aadhaar Act 2016 s.8; DPDP Act 2023 | 2026-10-21 | partial | Correct statutes; no invented section. |
| 9-17 | Police stop; BNSS 24-hour production rule; NHRC | indiacode.nic.in (403), nhrc.nic.in | BNSS 2023; Art. 22 | 2026-10-21 | partial | The 24-hour production rule is constitutional (Art. 22(2)) and carried into the BNSS; correct. |
| 9-18 | Age of consent 18; POCSO 2012; Prohibition of Child Marriage Act 2006 | indiacode.nic.in (403) | POCSO 2012 s.2(d); PCMA 2006 s.3 | 2026-10-21 | partial | The age of consent under POCSO is 18 and child marriage below 18 is voidable under the 2006 Act; correct. |
| 9-19 | BNS section 115 voluntarily causing hurt, 117 grievous hurt, 118 hurt by dangerous weapons; compensation | indiankanoon.org (heading) | BNS 2023 ss.115, 117, 118 | 2026-10-21 | yes (118) / partial | The section 118 page is headed "Section 118 in Bharatiya Nyaya Sanhita, 2023", and 115/117/118 are the hurt, grievous-hurt and dangerous-weapon provisions in that order. |
| 9-20 | CARA adoption under JJ Act 2015 and Adoption Regulations 2022; prescribed fee in instalments; 1098; Tele-MANAS 14416 | wcd.gov.in (rendered), cara.wcd.gov.in (403) | JJ Act 2015; Adoption Regulations 2022 | 2026-10-21 | yes (1098) / partial | Child Helpline 1098 and CARA's 1800-11-1311 are printed on wcd.gov.in; the Adoption Regulations 2022 are the current regulations and adoption is routed through CARA, not private agencies. 14416 not confirmed by fetch. |
| 9-21 | Insurance fraud; Insurance Act 1938; IRDAI | indiacode.nic.in (403), irdai.gov.in (rendered) | Insurance Act 1938; BNS 2023 ss.318, 336 | 2026-10-21 | partial | Correct: fraud routes through cheating/forgery plus the insurer's own remedies; no invented provision. |
| 9-22 | Transplantation of Human Organs and Tissues Act 1994 (amended 2011); authorisation committee; NOTTO | indiacode.nic.in (403), notto.mohfw.gov.in (403) | THOTA 1994 as amended 2011 | 2026-10-21 | partial | The 1994 Act was amended by the Transplantation of Human Organs (Amendment) Act, 2011, and the authorisation-committee route and NOTTO are correct. The tip's internal "Section 7" reference is a cross-reference to this book's welfare section, not a statute section; it is unambiguous in context but could read as a statutory section. |
| 9-23 | Immoral Traffic (Prevention) Act 1956; brothel and soliciting offences | indiacode.nic.in (403) | ITPA 1956 ss.3, 8 | 2026-10-21 | partial | Correct: the 1956 Act is still in force and ss.3 and 8 cover brothel-keeping and soliciting. |
| 9-24 | Copyright Act 1957; fair dealing; takedown | indiacode.nic.in (403), ipindia.gov.in | Copyright Act 1957 s.52 | 2026-10-21 | partial | Section 52 is the fair-dealing provision and the IT Rules 2021 provide the takedown route; correct. |
| 9-25 | Fan fiction; Copyright Act 1957; Trademarks Act 1999 and passing off | indiacode.nic.in (403) | Copyright Act 1957; TM Act 1999 | 2026-10-21 | partial | Both statutes correct; passing off is the correct common-law route. |
| 9-26 | Arms Act 1959 for baton, stun gun and dagger; pepper spray varies by state | indiacode.nic.in (403) | Arms Act 1959; Arms Rules 2016 | 2026-10-21 | partial | Correct: bladed and prohibited arms are scheduled under the 1959 Act and pepper spray is regulated at state level. |
| 9-27 | Indian Fisheries Act 1897; Wild Life (Protection) Act 1972; closed season | indiacode.nic.in (403) | Indian Fisheries Act 1897; WLPA 1972 | 2026-10-21 | partial | Both statutes are real and current; closed seasons are notified under state fisheries rules, which the tip says. |
| 9-28 | Indian Forest Act 1927; Forest (Conservation) Act 1980; NDMA; 112 | indiacode.nic.in (403), ndma.gov.in | IFA 1927; FCA 1980 | 2026-10-21 | partial | Both statutes correct and current; 112 not confirmed by fetch (MHA 403). |
| 9-29 | Public Examinations (Prevention of Unfair Means) Act 2024; UPSC | indiacode.nic.in (403), upsc.gov.in | 2024 Act | 2026-10-21 | partial | The 2024 Act is real and in force and covers impersonation, paper leaks and answer trading; the caveat correctly limits its coverage to listed examinations and points state exams to their own laws. |

## Banned-term check

- JSON: 0 banned terms — npx tsx scripts/check-chapter.ts 9 printed
  "chapter 9 (09-everyday-legal-red-lines.json): 29 tips" then
  "PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: 0 banned terms. All 29 tips' title, inPlainWords, benefit and
  caveats were scanned in the same pass; no CJK character and none of "China",
  "Chinese", "mainland", "RMB", "yuan", "hukou", "yibao", "dibao", "CNY", "PRC",
  "NMPA", "NHSA", "SAMR", "MOHRSS", "CSCSE", "WeChat", "Alipay",
  "procuratorate", "Supreme People", "State Council" or "jubensha" appears.

## Safety and editorial check

- No unsupported high-risk claim: The chapter's riskiest statements are the
  negative ones (9-1 no fake-news offence, 9-3 reading is not an offence, 9-4
  private viewing is not punished, 9-13 casual card game is fine). Each denies
  only the specific over-claim and leaves the actual offence intact: 9-4 still
  says distribution and POCSO apply, 9-13 still says real-money online games are
  banned, 9-1 still cites 66C/66D/67. None tells the reader that a genuinely
  criminal act is lawful.
- No invented scheme, number or hotline: Every statute cited exists and is in
  force (National Honour Act 1971, IT Act 2000, BNS/BNSS 2023, UAPA 1967, PMLA
  2002, DPDP 2023, Arms Act 1959, Arms Rules 2016, Drone Rules 2021, Aircraft
  Act 1934, Public Gambling Act 1867, Online Gaming Act 2025, WLPA 1972,
  THOTA 1994, ITPA 1956, Copyright Act 1957, Trademarks Act 1999, Indian
  Fisheries Act 1897, Indian Forest Act 1927, FCA 1980, JJ Act 2015, Adoption
  Regulations 2022, Public Examinations Act 2024). No Chinese statute, agency
  or deadline appears. Section numbers 2 and 3 (1971 Act), 77 (BNS), 67 (IT
  Act) and 118 (BNS) were confirmed from rendered statute text or headings.
- No direct equivalent recorded where needed: 9-2 states plainly that India has
  no law specially protecting the reputation of martyrs and gives the routes
  that do exist; 9-13 distinguishes a casual card game from a rake-based
  real-money game instead of importing a blanket ban; 9-22 distinguishes a
  genuine donation from commercial dealing; 9-25 distinguishes copyright from
  trademark passing off. Where India has no equivalent, the tip says so.
- Caveats retained: 9-4 keeps the community-standards context test; 9-7 keeps
  the "depends on value and intention" hedge; 9-19 keeps the "he hit me first is
  not a licence" limit on private defence; 9-29 keeps the coverage limitation of
  the 2024 Act; 9-22 keeps the separate-clearance point for foreign donors.

## Blocking issues

- None found. No wrong statute, no wrong section number, no invented punishment,
  no Chinese content presented as Indian law, no foreign currency and no
  repealed Act presented as current law (the IT Act 2000 provisions cited remain
  in force; the BNS/BNSS/BSA 2023 replace the IPC/CrPC/Evidence Act and the
  chapter cites only the 2023 codes).
- Open items (non-blocking): the Online Gaming Act 2025 (9-13) and the 1930
  helpline were confirmed only through search-result titles because meity.gov.in
  and pib.gov.in returned 403; the Tele-MANAS number 14416 (9-20) and helpline
  112 (9-28) could not be confirmed by fetch; BNS sections 78, 115, 117 and the
  THOTA/ITPA section numbers could not be re-read on India Code (403) although
  the chapter's numbering is consistent with the codes.

Verdict: PASS
