# Verification: Chapter 8 - Law and Property Safety

Verifier: independent-verifier-9600c4f1-c66a-4988-8379-91adcaffe41a
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/08-law-and-property-safety.json
Manifest status: draft (recommend checked)

## Method

Read all 46 tips in data/en-in/chapters/08-law-and-property-safety.json and cross-read
reports/source-packs/chapter-8.md. The earlier reports/verification/chapter-08.md failed
seven tips (8-6, 8-13, 8-31, 8-33, 8-35, 8-39, 8-45) for carrying Chinese criminal-law
content; each was re-checked against the current text as a regression test and all seven
titles are now rewritten.

Instruments: Indian Kanoon for BNSS 2023 ss.173, 175 and 396, BNS 2023 ss.37, 44, 77, 78,
115, 117, 118 and 356, the Consumer Protection Act 2019, the Limitation Act 1963, the
Indian Contract Act 1872, the Protection of Women from Domestic Violence Act 2005 and the
Legal Services Authorities Act 1987; devgan.in section pages for BNS titles; the Motor
Vehicles Act 1988 ss.134, 134A, 184, 185; the Credit Information Companies (Regulation)
Act 2005; the Companies Act 2013 s.164; the Prevention of Corruption Act 1988; and the
published helplines 112, 181, 1091, 1098, 14416, 1915 and 1930.

Access failures: indiacode.nic.in returned HTTP 403 (Akamai "Access Denied") for every
attempt; pib.gov.in and labour.gov.in returned 403; PDFs (thc.nic.in, MHA, MSJE) return
"unsupported content type application/pdf" and were readable only as indexed snippets;
devgan.in returned intermittent 503s; nalsa.gov.in and indiankanoon.org responded
normally. The BNSS limitation-of-cognizance provision (s.514, successor to CrPC s.468)
could not be located in indexed full text, which is why 8-6 is marked with a note rather
than credited to a section it does not cite.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 8-1 | MV Act 1988 s.134 duty to stop and report; s.134A Good Samaritan protection | Motor Vehicles Act 1988 | ss.134, 134A | 2026-10-21 | yes | Both sections exist and say what the tip says. 112 is the ERSS number. |
| 8-2 | 1930 cyber-fraud helpline; National Cyber Crime Reporting Portal; BNS 2023 and IT Act 2000 for cheating and identity misuse | cybercrime.gov.in; BNS/IT Act titles | — | 2026-10-21 | yes | 1930 is the correct national cyber-fraud number; the portal is real. |
| 8-5 | BNSS 2023 sets arrest, bail and 24-hour production before a magistrate; NALSA 15100 legal aid | BNSS 2023; nalsa.gov.in | Production within 24 hours | 2026-10-21 | yes | 24-hour production is BNSS s.58 read with Article 22(2). |
| 8-6 | Voluntary surrender and cooperation can help at sentencing but no fixed discount; criminal cases do have limitation periods; Limitation Act 1963 for civil claims | Limitation Act 1963; BNSS 2023 | Limitation Act 1963 | 2026-10-21 | yes | Regression fixed - the invented 40% self-surrender discount and "no limitation period" claim are gone. Note: the criminal limitation periods sit in BNSS s.514; the tip does not cite it and states no period, so no number is at risk. |
| 8-7 | MV Act 1988 s.185 alcohol above 30 mg per 100 ml of blood; s.184 dangerous driving; BNS for death by negligence | Motor Vehicles Act 1988 | ss.184, 185 | 2026-10-21 | yes | 30 mg/100 ml is the statutory threshold in s.185. |
| 8-8 | BNS 2023, PMLA 2002 and IT Act 2000 cover money-mule accounts; bank freeze | PMLA 2002; BNS 2023 | — | 2026-10-21 | yes | Correct in outline; no invented punishment. |
| 8-9 | Credit Information (Companies) Regulation Act 2005 and RBI directions govern credit bureaus; free annual report | CICRA 2005 | — | 2026-10-21 | yes | Note: the statute's short title is the Credit Information Companies (Regulation) Act, 2005; the chapter's word order is wrong but identifiable. One free report per bureau per year is the CICRA rule. |
| 8-10 | BNSS FIR; compoundable offences may be settled with the court's permission; a first strike is not self-defence | BNSS 2023; BNS 2023 private defence | — | 2026-10-21 | yes | Compoundable-offence settlement with court permission is correct. |
| 8-11 | "Sections 34 to 38 of the BNS, 2023 set out the right of private defence, including the limits and the exceptions" | Indian Kanoon, BNS 2023 ss.37-44 | BNS ss.34-44 | 2026-10-21 | yes | Note, not blocking: private defence runs from s.34 to s.44 (s.37 lists acts with no right of defence; s.44 covers harm to an innocent person). The range "34 to 38" is under-inclusive and omits the very limits the tip mentions. |
| 8-12 | Code on Wages 2019 claims; Industrial Relations Code 2020 adjudication; Consumer Protection Act 2019; LSA 1987; three-year civil limitation | Indian Kanoon, CPA 2019 and Limitation Act 1963 | CPA 2019; Limitation Act 1963 | 2026-10-21 | yes | Three years for a civil claim is correct; labour disputes have their own limits as stated. |
| 8-13 | Driving into a crowd is murder or attempted murder and death remains a possible sentence | BNS 2023 murder provisions | BNS s.103 | 2026-10-21 | yes | Regression fixed - the Chinese "endangering public safety by dangerous means" and its fixed three-year minimum are gone. Death remains a possible sentence for murder under BNS s.103. |
| 8-14 | Tele-MANAS 24-hour helpline 14416; Mental Healthcare Act 2017 rights and advance directive | Tele-MANAS; MHCA 2017 | — | 2026-10-21 | yes | 14416 is the correct Tele-MANAS number; the advance-directive right is in the 2017 Act. |
| 8-15 | Protection of Women from Domestic Violence Act 2005 orders; protection officer; JJ Act 2015; 112 | PWDVA 2005; JJ Act 2015 | PWDVA ss.12, 18-22 | 2026-10-21 | yes | Protection, residence, monetary relief and custody orders are all available under the 2005 Act. |
| 8-16 | BNS 2023 defamation, criminal intimidation; IT Act 2000 obscene publication; IT Rules 2021 grievance officer | BNS 2023 s.356; IT Act 2000 s.67; IT Rules 2021 | s.356 | 2026-10-21 | yes | Correct. |
| 8-17 | Indian Contract Act 1872: contract without free consent voidable | Contract Act 1872 | ss.14, 19 | 2026-10-21 | yes | Coercion, undue influence, fraud and misrepresentation are the s.14 vitiating factors. |
| 8-18 | Guarantor liability under the Contract Act; NI Act 1881 s.138 for a bounced cheque; three-year limitation | Contract Act 1872; NI Act 1881; Limitation Act 1963 | s.138 NI Act | 2026-10-21 | yes | Correct. |
| 8-19 | Three years for civil claims, two years for a consumer complaint; twelve years for immovable property | Limitation Act 1963; CPA 2019 s.69 | CPA s.69; Limitation Act Art. 65 | 2026-10-21 | yes | Both periods are right. |
| 8-20 | CPC 1908 Order 21 execution: attachment, arrest; IBC 2016 route | CPC 1908; IBC 2016 | Order 21 | 2026-10-21 | yes | Correct. |
| 8-21 | Order 21 attachment; Income-tax Act 1961 and GST Act attachment powers; IBC resolution | CPC 1908; IT Act 1961; CGST Act 2017 | Order 21 | 2026-10-21 | yes | Correct in outline. |
| 8-22 | Platform grievance officer; National Consumer Helpline 1915; CPA 2019 two-year limit | CPA 2019; National Consumer Helpline | s.69 | 2026-10-21 | yes | 1915 is the correct National Consumer Helpline number. |
| 8-23 | Contract Act 1872, Transfer of Property Act 1882 and Registration Act 1908 govern gifts; Dowry Prohibition Act 1961 | TPA 1882; Registration Act 1908 | TPA s.122 | 2026-10-21 | yes | Correct. |
| 8-24 | Dowry Prohibition Act 1961 prohibits giving, taking and demanding dowry; BNS 2023 dowry death | Dowry Prohibition Act 1961; BNS 2023 s.80 | s.80 BNS | 2026-10-21 | yes | Correct; no penalty figure stated. |
| 8-25 | Hindu Marriage Act 1955, Special Marriage Act 1954 and Indian Succession Act 1925 govern property and succession for different communities | Statutes named | — | 2026-10-21 | yes | Correct; pre-marital property is generally separate under personal law as the tip says. |
| 8-26 | Special Marriage Act 1954 notice and objection; neither party may have a living spouse | SMA 1954 | ss.5, 6, 14 | 2026-10-21 | yes | Correct. |
| 8-27 | Consumer Protection Act 2019 covers deficient service and unfair trade practice | CPA 2019 | — | 2026-10-21 | yes | Correct. |
| 8-28 | Companies Act 2013 director duties; disqualification under s.164 for failure to file returns | Companies Act 2013 | s.164(2) | 2026-10-21 | yes | s.164(2) disqualifies a director of a company that has not filed financial statements or annual returns for three years. |
| 8-29 | NDPS Act 1985 and Customs Act 1962 apply to contraband carried for another person | NDPS 1985; Customs Act 1962 | — | 2026-10-21 | yes | Correct in outline; no invented punishment. |
| 8-30 | Owner liable in tort for animal injury; Prevention of Cruelty to Animals Act 1960; state municipal leash rules | PCA 1960; tort liability | — | 2026-10-21 | yes | Correct; no invented statutory leash rule claimed. |
| 8-31 | POCSO Act 2012: a child is anyone under 18; intoxicated or unconscious person cannot consent | POCSO 2012 s.2(d); BNS 2023 consent definition | POCSO s.2(d) | 2026-10-21 | yes | Regression fixed - the old "under 14" threshold is gone; 18 is correct. |
| 8-32 | Extortion and criminal intimidation under BNS 2023; IT Act for private images; IT Rules 2021 grievance officer | BNS 2023; IT Act 2000 | — | 2026-10-21 | yes | Correct in outline. |
| 8-33 | False accusation: civil defamation and false evidence; "not five days' detention, and defamation carries up to two years" | Indian Kanoon, BNS 2023 s.356 | s.356 | 2026-10-21 | yes | Regression fixed - the Chinese five-day detention and three-year defamation are gone. BNS s.356 provides up to two years, or fine, or both. |
| 8-35 | Compensation for wrongful arrest under BNSS 2023 and Supreme Court guidelines; s.396 BNSS victim compensation; court awards on the facts | Indian Kanoon, BNSS 2023 s.396 | s.396 | 2026-10-21 | yes | Regression fixed - the fixed daily-rate formula is gone. Note: s.396 is the victim-compensation scheme (State/DLSA, on court recommendation), while compensation for a wrongful arrest rests on the Supreme Court's constitutional-tort principles; the tip uses s.396 only as context, which is acceptable. |
| 8-36 | Victim compensation routes; 1915; CPA 2019; LSA 1987 free legal aid | CPA 2019; LSA 1987 | — | 2026-10-21 | yes | Correct; no invented compensation table. |
| 8-37 | Cyberbullying: platform tools, injunction, BNS 2023 defamation/criminal intimidation/stalking, IT Rules 2021 | BNS 2023 s.78; IT Rules 2021 | s.78 | 2026-10-21 | yes | Correct. |
| 8-38 | Insurance Act 1938 and policy terms exclude a claim where the beneficiary caused the death; murder under BNS | Insurance Act 1938; BNS 2023 | — | 2026-10-21 | yes | Correct in principle; no invented section. |
| 8-39 | "Section 173 of the BNSS, 2023 requires the officer in charge to register an FIR and give a copy to the informant free of cost"; "Section 175 allows a complaint to the Superintendent of Police and then to the magistrate" | Indian Kanoon, BNSS 2023 s.173 (doc/165794322) and s.175 (doc/25110765) | s.173(2) free copy; s.173(4) SP route; s.175 police power to investigate | 2026-10-21 | no | s.173(2) is correct ("given forthwith, free of cost, to the informant or the victim"). The second sentence is wrong: the Superintendent-of-Police escalation is s.173(4); s.175 is the police officer's power to investigate a cognizable case, and 175(3) lets a magistrate order investigation on an application that itself comes through s.173(4). |
| 8-40 | Prevention of Corruption Act 1988 punishes offering and accepting a bribe; BNS 2023 abetment | PCA 1988 | ss.7, 8 | 2026-10-21 | yes | Correct. |
| 8-41 | Bharatiya Sakshya Adhiniyam 2023 electronic evidence with certificate; a party's own recording is admissible if genuine | BSA 2023 s.63; Supreme Court recording cases | s.63 | 2026-10-21 | yes | Correct in outline; the tip does not overstate admissibility. |
| 8-43 | PWDVA 2005 protection, residence, monetary relief and custody; 112/181; JJ Act 2015 | PWDVA 2005 | ss.12, 18-22 | 2026-10-21 | yes | Correct; 181 is the women's helpline. |
| 8-44 | Contract Act 1872 s.30: a wager is void and no suit lies to recover it; spouse not liable for the other's independent debt | Indian Kanoon, Indian Contract Act 1872 s.30 | s.30 | 2026-10-21 | yes | s.30 makes wagering agreements void and bars suits to recover winnings. |
| 8-45 | "If an acquaintance asks you to scan your face, stand witness for a loan or read out an SMS code, refuse: the loan becomes yours, not theirs"; Aadhaar Act 2016 and RBI KYC | Aadhaar Act 2016; RBI KYC Master Direction | — | 2026-10-21 | yes | Regression fixed - the invented "AB Loan" scam name is gone; the biometric/KYC description is accurate. |

Advice-only tips without a statutory citation (8-3, 8-4, 8-34, 8-42, 8-46) were read for
invented numbers and none contains one; 8-42 correctly limits itself to scene safety,
BNSS cooperation and "do not film a face for social media".

## Banned-term check

- JSON: 0 banned terms - `npx tsx scripts/check-chapter.ts 8` prints "PASS: no banned term, CJK character or foreign-jurisdiction term."
- Rendered page: not rebuilt in this pass (the site build was deliberately not run), so the rendered check is the JSON scan, which is clean.

## Safety and editorial check

- No unsupported high-risk claim: one high-risk tip (8-39) cites the wrong section for the police-superintendent escalation; all other high-risk tips match a real instrument.
- No invented scheme, number or hotline: no invented hotline or figure found; every number quoted (24 hours, 30 mg/100 ml, three years, two years, 1930, 1915, 181, 14416, 1091) is real.
- No direct equivalent recorded where needed: the chapter no longer imports a Chinese rule anywhere; the seven earlier title-level imports are all corrected.
- Caveats retained: caveats on limitation, on settlement being unenforceable for serious offences, and on recordings needing proof of genuineness are intact.

## Blocking issues

- 8-39: "Section 175 allows a complaint to the Superintendent of Police and then to the magistrate" is the wrong section. In the BNSS 2023 the Superintendent-of-Police escalation is s.173(4) (a person refused registration may send the substance of the information in writing to the SP, and if the SP does not investigate, apply to the magistrate); s.175 is the police officer's power to investigate a cognizable case. Correction: "Section 173(4) lets an aggrieved person write to the Superintendent of Police, and then apply to the magistrate; section 175 sets out the police officer's power to investigate."

Verdict: FAIL
