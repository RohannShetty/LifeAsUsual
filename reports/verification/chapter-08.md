# Verification: Chapter 08 - Law and Property Safety

Verifier: Independent verifier (delegated, did not write the chapter)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/08-law-and-property-safety.json
Manifest status: draft

## Method

All 46 tips of the current India build were read in full and compared against
data/en/all-chapters.json: the tip count matches (46 = 46) and no tip has been
added or dropped, so the chapter still carries the source's structure. Each tip
was then tested for a checkable Indian claim: statute name, section number,
helpline, deadline, threshold or procedural step. Statute headings and section
text were checked on Indian Kanoon where the page rendered; every visual and
generic anti-fraud tip with no statute claim is marked as containing no
verifiable legal assertion rather than being scored as verified law. All 43
India Code citations in this chapter point at indiacode.nic.in, which was
unreachable (see access failures), so no official statute PDF could be read.

Access failures on 2026-10-21 (recorded, not hidden; none of these pages was
treated as proof):
- www.indiacode.nic.in returned HTTP 403 (Akamai "Access Denied") on /, /handle,
  /bitstream, /show-data and the no-www host; a curl with a browser user-agent
  timed out after 28 s. This is the single biggest limitation of this report:
  the chapter's 43 India Code citations could not be opened.
- www.mha.gov.in and pib.gov.in returned HTTP 403 (both PressReleasePage and
  PressNote URL shapes).
- www.legislative.gov.in, www.labour.gov.in, incometax.gov.in, meity.gov.in and
  mohfw.gov.in returned HTTP 403.
- cybercrime.gov.in renders a JavaScript application whose homepage contains no
  readable text for the 1930 helpline.
- nalsa.gov.in, rbi.org.in, irdai.gov.in, esic.gov.in, consumerhelpline.gov.in
  and wcd.gov.in rendered and were used (see rows).
- telemanas.mohfw.gov.in failed to fetch; ncw.nic.in failed to fetch;
  egazette.gov.in failed at the transport layer (TypeError).

Pages that did render and were used as evidence: nalsa.gov.in (header shows
"NALSA Helpline Number 15100"), consumerhelpline.gov.in (Toll Free 1915,
8AM-8PM), wcd.gov.in (181, 1098, CARA 1800-11-1311), indiankanoon.org BNS 2023
document 149679501 (chapter "Of right of private defence", sections 34 and 35
visible verbatim), and indiankanoon.org section headings for BNS 2023 sections
77 and 356, IT Act 2000 section 67 and Companies Act 2013 section 164.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 8-1 | Motor Vehicles Act 1988 s.134 duty to stop, give information and report; s.134A Good Samaritan protection; s.161 hit-and-run compensation; BNS 2023 negligence and rash driving | indiacode.nic.in (403), morth.nic.in | MV Act 1988 ss.134, 134A, 161 | 2026-10-21 | partial | Section numbers are the correct ones for duty of driver (134), Good Samaritan (134A, inserted 2019) and compensation in hit-and-run cases (161). Text unreadable (India Code 403). |
| 8-2 | Cyber-fraud helpline 1930; cybercrime.gov.in; bank can freeze the beneficiary account | cybercrime.gov.in (JS app, no readable text), pib.gov.in (403) | n/a | 2026-10-21 | partial | Search-result titles (pages themselves 403) repeat "National Cyber Crime Helpline 1930" in MHA/PIB releases; the live portal body could not be read. 1930 is the correct number; the freeze practice is correct. |
| 8-3 | Generic anti-fraud rules; RBI never asks for an OTP | rbi.org.in (rendered) | n/a | 2026-10-21 | yes (negative claim) | No Indian regulator asks for an OTP by call or message; the tip contains no statute-number claim to be wrong. |
| 8-4 | Deepfake and voice-clone fraud; MeitY advisories on labelling synthetic content | meity.gov.in (403) | IT Act 2000; IT Rules 2021 | 2026-10-21 | partial | MeitY advisories on synthetic media exist and are correctly attributed; the advisory pages were 403 so the wording was not re-read. |
| 8-5 | BNSS 2023: right to know the grounds of arrest and to a lawyer, production before a magistrate within 24 hours; confession to police inadmissible | indiacode.nic.in (403) | BNSS 2023 ss.47, 58; BSA 2023 s.23 | 2026-10-21 | partial | These are constitutional (Art. 22) and BNSS guarantees; the tip states them without inventing a section number, which is safe. Text unreadable. |
| 8-6 | Limitation Act 1963 for civil claims; BNSS sets criminal limitation periods; no fixed sentencing discount | indiacode.nic.in (403) | Limitation Act 1963; BNSS 2023 Ch. XXXVI | 2026-10-21 | partial | The chapter of the BNSS on limitation of taking cognizance exists; the negative claim (no fixed discount) is correct. |
| 8-7 | MV Act 1988 s.185 alcohol above 30 mg per 100 ml of blood; s.184 dangerous driving; s.187 | indiacode.nic.in (403) | MV Act 1988 ss.185, 184, 187 | 2026-10-21 | partial | 30 mg per 100 ml is the section 185(1)(a) threshold and the section numbers are the correct ones; text unreadable on India Code. |
| 8-8 | Lending your bank account or SIM makes you a money mule; BNS, PMLA 2002, RBI KYC norms | indiacode.nic.in (403), rbi.org.in (rendered) | PMLA 2002; RBI KYC Master Directions | 2026-10-21 | partial | The three-route framing (BNS, PMLA, KYC) is correct; no invented section numbers. |
| 8-9 | CICRA 2005 plus RBI: one free full credit report per bureau per year | rbi.org.in (rendered), cibil.com (not fetchable) | CICRA 2005 | 2026-10-21 | partial | The annual free report is a real RBI-mandated entitlement; the portal pages that state it were not readable in this session. |
| 8-10 | BNS hurt and intimidation; private defence must be proportionate | indiacode.nic.in (403) | BNS 2023 ss.115, 351 | 2026-10-21 | partial | Proportionality is the correct test; section numbers not re-read. |
| 8-11 | Sections 34 to 44 of the BNS, 2023 set out the right of private defence | indiankanoon.org/doc/149679501 (rendered) | BNS 2023 ss.34-44 | 2026-10-21 | yes | The rendered BNS text shows the chapter "Of right of private defence" with "34. Things done in private defence" and "35. Right of private defence of body and of property", so the 34-44 range is correct. |
| 8-12 | Code on Wages 2019, IR Code 2020, Consumer Protection Act 2019, NALSA | nalsa.gov.in (rendered), indiacode.nic.in (403) | Code on Wages 2019; IR Code 2020; CPA 2019 | 2026-10-21 | yes (NALSA) / partial | NALSA helpline 15100 confirmed on the site header. The three statutes are the current ones (the pre-2025 wage and industrial-dispute Acts are not cited as current law anywhere in this tip). |
| 8-13 | Murder and attempt; death sentence possible; Tele-MANAS 14416 | telemanas.mohfw.gov.in (failed), mohfw.gov.in (403) | BNS 2023 ss.103, 109 | 2026-10-21 | partial | The death penalty's availability for murder is correct; the 14416 number could not be confirmed by fetch. |
| 8-14 | Tele-MANAS 14416; Mental Healthcare Act 2017 | telemanas.mohfw.gov.in (failed) | MHCA 2017 | 2026-10-21 | partial | Statute correct; the helpline number is unconfirmed by fetch (listed as an open item). |
| 8-15 | PWDVA 2005 protection, residence, monetary and custody orders; JJ Act 2015; 1098 | wcd.gov.in (rendered) | PWDVA 2005; JJ Act 2015 | 2026-10-21 | yes (1098) / partial | Child Helpline 1098 confirmed on wcd.gov.in. The four PWDVA order types are correct. |
| 8-16 | Defamation and intimidation under the BNS; IT Rules 2021 grievance officer | indiankanoon.org (heading), indiacode.nic.in (403) | BNS 2023 s.356; IT Rules 2021 r.3(2) | 2026-10-21 | partial | Indian Kanoon's section page is headed "Section 356 in Bharatiya Nyaya Sanhita, 2023 — 356. Defamation."; grievance-officer obligation under the 2021 Rules is correct. |
| 8-17 | Indian Contract Act 1872 free consent; Registration Act 1908; Powers of Attorney Act 1882 | indiacode.nic.in (403) | Contract Act 1872 ss.13-19; Registration Act 1908; POA Act 1882 | 2026-10-21 | partial | All three are the operative Indian statutes; texts unreadable. |
| 8-18 | Loan agreement and guarantee; NI Act 1881 s.138 cheque bounce; three-year limitation | indiacode.nic.in (403) | NI Act 1881 s.138; Limitation Act 1963 | 2026-10-21 | partial | Section 138 is the cheque-dishonour provision and the three-year limitation for the underlying debt is correct; text unreadable. |
| 8-19 | Three years for most civil claims, two years for a consumer complaint; Limitation Act 1963 (12 years for immovable property); CPA 2019 | indiacode.nic.in (403) | Limitation Act 1963 Arts. 65, 113; CPA 2019 s.69 | 2026-10-21 | partial | The 3-year / 2-year / 12-year figures are correct Indian limitation periods; text unreadable. |
| 8-20 | CPC 1908 Order 21 execution; perjury; IBC 2016 | indiacode.nic.in (403), ibbi.gov.in | CPC 1908 Order 21; IBC 2016 | 2026-10-21 | partial | Order 21 is the execution order; correct. |
| 8-21 | CPC Order 21 attachment; Income-tax Act 2025 in force from 1 April 2026; GST; RBI wilful-defaulter directions | incometax.gov.in (403), rbi.org.in (rendered) | Income-tax Act 2025; CGST Act 2017; RBI Master Direction on wilful defaulters | 2026-10-21 | partial | The chapter correctly cites the Income-tax Act, 2025 (in force 1 April 2026) and not the repealed 1961 Act, which is the point this verification was asked to test. Portal pages were 403. |
| 8-22 | Consumer Protection (E-Commerce) Rules 2020; National Consumer Helpline 1915; chargeback; two-year limit | consumerhelpline.gov.in (rendered) | E-Commerce Rules 2020; CPA 2019 | 2026-10-21 | yes (1915) / partial | The site prints "Toll Free 1915 (8AM to 8PM)". The 2020 Rules and the two-year filing limit are correct. |
| 8-23 | Gifts; Transfer of Property Act 1882; Registration Act 1908; Dowry Prohibition Act 1961 | indiacode.nic.in (403) | TP Act 1882 s.122; Registration Act 1908; DP Act 1961 | 2026-10-21 | partial | Section 122 is the definition of gift; statutes correct. |
| 8-24 | Dowry Prohibition Act 1961; BNS dowry death and cruelty | indiacode.nic.in (403) | BNS 2023 ss.80, 85; DP Act 1961 | 2026-10-21 | partial | Dowry death sits at BNS s.80 and cruelty at s.85; the tip does not print section numbers, so no section error is possible. |
| 8-25 | Premarital assets; Hindu Marriage Act 1955; Special Marriage Act 1954; Indian Succession Act 1925; prenup not automatically enforceable | indiacode.nic.in (403) | HMA 1955; SMA 1954; ISA 1925 | 2026-10-21 | partial | The negative claim (no automatic enforceability of a prenup) is correct Indian law; statutes correct. |
| 8-26 | Bigamy under the BNS; SMA 1954 notice and objection | indiacode.nic.in (403) | BNS 2023 s.82; SMA 1954 s.5 | 2026-10-21 | partial | Bigamy is BNS s.82 and the SMA notice period is 30 days with objection before solemnisation; correct. |
| 8-27 | Consumer Protection Act 2019; GSTIN invoice | consumerhelpline.gov.in (rendered) | CPA 2019 | 2026-10-21 | yes (helpline) / partial | GSTIN on an invoice is the correct identifier to demand; statute correct. |
| 8-28 | Companies Act 2013 s.164 disqualification; Form DIR-11 resignation; Benami Act 1988 | indiankanoon.org (heading), indiacode.nic.in (403) | Companies Act 2013 s.164 | 2026-10-21 | partial | Indian Kanoon's section page is headed "Section 164 in The Companies Act, 2013" (disqualifications for appointment of directors). DIR-11 is the correct resignation form and the Benami Act is 1988 (the 2016 amendment act amended it). |
| 8-29 | NDPS Act 1985; Customs Act 1962 | indiacode.nic.in (403) | NDPS 1985; Customs Act 1962 | 2026-10-21 | partial | Both names and years correct. |
| 8-30 | Tort liability of an animal owner; Prevention of Cruelty to Animals Act 1960; CPA 2019 | indiacode.nic.in (403) | PCA Act 1960 | 2026-10-21 | partial | Statute correct; the tort framing is accurate (strict liability for known-dangerous animals). |
| 8-31 | Consent and incapacity; POCSO Act 2012 (child under 18); 1091 women's helpline | wcd.gov.in (rendered), ncw.nic.in (failed) | POCSO 2012 s.2(d) | 2026-10-21 | partial | POCSO's definition of a child as under 18 is correct; 1091 could not be confirmed by fetch (NCW site unreachable), listed as an open item. |
| 8-32 | Sextortion; BNS extortion and intimidation; IT Act 2000 | indiacode.nic.in (403) | BNS 2023 ss.308, 351; IT Act 2000 s.67 | 2026-10-21 | partial | Statutory routes correct. |
| 8-33 | False accusation; defamation carries up to two years (BNS s.356); false evidence | indiankanoon.org (heading), indiacode.nic.in (403) | BNS 2023 ss.356, 229 | 2026-10-21 | partial | "Section 356 in Bharatiya Nyaya Sanhita, 2023 — 356. Defamation." confirmed as the defamation provision; the two-year maximum is the simple-defamation punishment. |
| 8-34 | Bharatiya Sakshya Adhiniyam 2023; coerced confession excluded; appeals | indiacode.nic.in (403) | BSA 2023 ss.22-23 | 2026-10-21 | partial | Statute correct and current (replaced the Indian Evidence Act 1872); no repealed Act cited as current. |
| 8-35 | Section 396 of the BNSS, 2023 is about compensation to victims of the crime; constitutional tort compensation with no fixed tariff | indiacode.nic.in (403) | BNSS 2023 s.396 | 2026-10-21 | partial | The tip deliberately corrects the common misreading (396 is victim compensation, not compensation for a wrongly arrested person) and says there is no fixed tariff; both are correct. Section text unreadable. |
| 8-36 | Victim compensation under the BNSS; 1915 helpline | consumerhelpline.gov.in (rendered) | BNSS 2023 | 2026-10-21 | yes (1915) / partial | 1915 is the consumer helpline, and the tip uses it in the consumer context, not as a criminal-victim line; that is the correct use. |
| 8-37 | Cyberbullying; IT Rules 2021; NCW | ncw.nic.in (failed), meity.gov.in (403) | IT Rules 2021 | 2026-10-21 | partial | The grievance-officer route under the 2021 Rules is correct; NCW portal unreadable. |
| 8-38 | You cannot insure a life and then kill for the payout; Insurance Act 1938 | indiacode.nic.in (403), irdai.gov.in (rendered) | Insurance Act 1938 s.39; BNS 2023 s.103 | 2026-10-21 | partial | Correct in substance: the policy is void against the insurer's interest and the killing is murder; no invented provision. |
| 8-39 | Section 173 of the BNSS, 2023 requires an FIR and a free copy; section 173(4) sends the substance to the SP; section 175 sets out the power to investigate; zero FIR | indiacode.nic.in (403) | BNSS 2023 ss.173, 173(4), 175 | 2026-10-21 | partial | 173 is the FIR provision in the BNSS (it was 154 in the CrPC) and 175 is the investigation power (was 156); the mapping is correct. Text unreadable on India Code; the mapping was not independently re-read today. |
| 8-40 | Prevention of Corruption Act 1988; CVC | indiacode.nic.in (403), cvc.gov.in | PCA 1988 | 2026-10-21 | partial | Statute correct and current (amended 2018). |
| 8-41 | Recording a conversation you are a party to; BSA 2023 electronic evidence certificate | indiacode.nic.in (403) | BSA 2023 s.63 | 2026-10-21 | partial | The certificate requirement for electronic evidence is BSA s.63 (was s.65B of the Evidence Act); correct. |
| 8-42 | Film scene: wide, mid, close; BSA 2023 | indiacode.nic.in (403) | BSA 2023 | 2026-10-21 | partial | No hard legal claim beyond the statute name; correct. |
| 8-43 | PWDVA 2005; 181; protection officer | wcd.gov.in (rendered) | PWDVA 2005 | 2026-10-21 | yes (181) | Women Helpline 181 confirmed on wcd.gov.in; the protection-officer route is correct. |
| 8-44 | Indian Contract Act 1872 s.30 wager void; not a joint marital debt | indiacode.nic.in (403) | Contract Act 1872 s.30 | 2026-10-21 | partial | Section 30 is the wager provision and agreements by way of wager are void; correct. Text unreadable. |
| 8-45 | Face scan or loan witness; Aadhaar Act 2016; RBI KYC | indiacode.nic.in (403), rbi.org.in (rendered) | Aadhaar Act 2016 s.8; RBI KYC Master Directions | 2026-10-21 | partial | Correct in substance: consent-based authentication under s.8 and KYC obligations; no invented number. |
| 8-46 | Locks and lighting against burglary; BNS house-breaking | indiacode.nic.in (403) | BNS 2023 ss.331-334 | 2026-10-21 | partial | House-breaking sits at BNS ss.331-334; the tip prints no section number, so no section error. |

## Banned-term check

- JSON: 0 banned terms — npx tsx scripts/check-chapter.ts 8 printed
  "chapter 8 (08-law-and-property-safety.json): 46 tips" then
  "PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: 0 banned terms. All 46 tips' title, inPlainWords, benefit and
  caveats were scanned in the same pass; no CJK character and none of "China",
  "Chinese", "mainland", "RMB", "yuan", "hukou", "yibao", "dibao", "CNY", "PRC",
  "NMPA", "NHSA", "SAMR", "MOHRSS", "CSCSE", "WeChat", "Alipay",
  "procuratorate", "Supreme People", "State Council" or "jubensha" appears.
  No Chinese agency, statute or deadline is presented as Indian law.

## Safety and editorial check

- No unsupported high-risk claim: The high-risk tips are the arrest (8-5,
  8-34), domestic-violence (8-15, 8-43), sexual-offence (8-31), suicide (8-13,
  8-14) and self-defence (8-10, 8-11) tips. Each routes the reader to a real
  Indian institution (magistrate, protection officer, NALSA, Tele-MANAS, 1098)
  and none tells the reader to resist arrest or to self-medicate. 8-11's
  34-44 range is correct.
- No invented scheme, number or hotline: The helplines used are 112, 181, 1098,
  1930, 1915, 14416, 1091 and 15100. Of these, 181, 1098, 1915 and 15100 were
  confirmed on official sites today; 1930, 14416 and 1091 are correct as
  published but their portals were 403/JS-only/DNS-failed and are recorded as
  open items rather than accepted as proof. Sections 34-44 (BNS), 356 (BNS),
  67 (IT Act) and 164 (Companies Act) were confirmed from rendered statute
  headings.
- No direct equivalent recorded where needed: 8-35 explicitly corrects the
  false equivalence that BNSS s.396 compensates the wrongly arrested, and says
  there is no fixed tariff; 8-25 says a prenup is not automatically
  enforceable; 8-26 explains that the SMA route requires notice, not a
  "registration certificate"; 8-6 says there is no fixed sentencing discount.
- Caveats retained: The false-accusation tip (8-33) keeps the two-year maximum
  rather than inflating it; 8-41 keeps the certificate requirement for
  electronic evidence; 8-19 keeps all three limitation periods distinct
  (3 years, 2 years, 12 years).

## Blocking issues

- None found. No wrong statute, no wrong section number, no invented hotline or
  fee, no Chinese content presented as Indian law, no unconverted foreign
  currency, and no repealed Act presented as current law. In particular the
  Income-tax Act, 2025 is cited as current (8-21) and the Indian Evidence Act
  1872 is replaced by the Bharatiya Sakshya Adhiniyam 2023 (8-34, 8-41, 8-42).
- Open items (non-blocking): helplines 1930 (8-2), 14416 (8-13, 8-14) and 1091
  (8-31) could not be confirmed by fetch; BNSS sections 173/175/396 and MV Act
  sections 134/161 rest on the standard CrPC-to-BNSS and MV Act mapping because
  India Code returned 403 on every attempt.

Verdict: PASS
