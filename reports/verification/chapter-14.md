# Verification: Chapter 14 - Accounts and Information Security

Verifier: independent-verifier-session-cbb8c456
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/14-accounts-and-information-security.json
Manifest status: draft (recommend checked)

## Method

All 12 tips were read in full (5 grade A, 1 grade B, 6 grade C) with
reports/source-packs/chapter-14.md and the earlier report, whose seven blocking
findings (PIPL articles 16 and 44-50 in 14-7 and 14-8, the Chinese facial-recognition
measures in 14-9, the MSS advisory in 14-10, the MIIT number-unbinding regime in 14-12,
and WeChat/Alipay in 14-2 and 14-6) were re-run as regression cases: all are gone.

Instruments checked: the Digital Personal Data Protection Act, 2023 sections 5, 6, 11,
12, 13, 14 and 18 (section 6 read in full at dpdpact.net/reader/section-6); the RBI
circular on customer protection and limited liability for unauthorised electronic
banking transactions, DBR.No.Leg.BC.78/09.07.005/2017-18 dated 6 July 2017, read in
full at rbi.org.in (scripts/NotificationUser.aspx?Id=11040, HTTP 200, paragraphs 6-10
and Tables 1-2); DoT Sanchar Saathi/TAFCOP; TRAI mobile number portability; CISA
password guidance; and the arXiv paper behind 14-10.

Access failures, logged: meity.gov.in PDF returned HTTP 403 "Access Denied" (Akamai);
mha.gov.in and indiacode.nic.in PDFs returned HTTP 403; the RBI page for a second
notification id rendered empty JavaScript and was not used (Id=11040 rendered fully).

npx tsx scripts/check-chapter.ts 14 -> PASS, 12 tips, no banned term, CJK character or
foreign-jurisdiction term (exit 0).

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 14-1 | Study: 350,000 hijack attempts; device-based checks blocked >94% of phishing and 100% of automated attacks; knowledge-based 10%/73%; 52% failed first login, 97% eventually recovered | Doerfler P, Thomas K, Marincenko M, et al. (2019), WWW '19, doi 10.1145/3308558.3313481 | Whole paper | 2026-10-21 | yes | Numbers match the published study. |
| 14-2 | Unique password per account, at least 16 characters | CISA, Use Strong Passwords | Length guidance | 2026-10-21 | yes | High-risk tip. CISA's 16-character recommendation is real. WeChat is gone from the caveat. |
| 14-3 | SIM PIN; default 1234/0000; PUK after three wrong tries | Author's experience (stated in sources); operator practice | SIM PIN/PUK | 2026-10-21 | yes | Operational, not a legal claim; defaults and PUK behaviour are accurate. |
| 14-4 | Lost phone: block SIM, remote lock, change passwords from another device, file police report, freeze cards | FCC, Protect Your Smart Device; DoT Sanchar Saathi | Device theft | 2026-10-21 | yes | Sequence is correct and both instruments are real. |
| 14-5 | Unauthorised transaction: zero liability if reported within 3 working days; bank credits within 10 working days; complaint resolved within 90 days; call 1930 | RBI circular DBR.No.Leg.BC.78/09.07.005/2017-18 | paras 6, 9, 10; Table 2 | 2026-10-21 | yes | High-risk tip. Verbatim: "Within 3 working days Zero liability"; "credit (shadow reversal)... within 10 working days"; "not exceeding 90 days from the date of receipt of the complaint". 1930 is the national cyber-fraud helpline (cybercrime.gov.in). |
| 14-6 | Review logged-in devices and authorised apps | Google/Apple/Microsoft and banking app settings | Account security pages | 2026-10-21 | yes | High-risk tip. Caveat now names only Google, Apple, Microsoft and banking/UPI apps; WeChat and Alipay are gone. No claim about Chinese law. |
| 14-7 | DPDP Act 2023: consent must be free, specific, informed, unconditional, unambiguous, by clear affirmative action, limited to necessary data; notice under s.5; withdrawal as easy as giving | DPDP Act, 2023 s.6(1), s.6(4), s.5 | s.6(1)-(6) | 2026-10-21 | yes | High-risk tip historically. s.6(1) and s.5 match. The benefit cites "Sections 6(4) and 6(5)" for easy withdrawal: s.6(4) says withdrawal must be "comparable" in ease to giving consent, but s.6(5) is about the consequences of withdrawal, not its ease. Minor citation slip; recommend "section 6(4)" or "sections 6(4) and 6(6)". The text correctly says the Act gives no right to refuse consent and still receive service (that is the GDPR position), which is the key no-equivalent statement. |
| 14-8 | DPDP rights: summary of data (s.11), correction/erasure (s.12), grievance redressal (s.13), nomination (s.14); Data Protection Board (s.18) | DPDP Act, 2023 | ss.11-14, 18 | 2026-10-21 | yes | High-risk tip historically. Section mapping is correct; the Board is established under s.18. |
| 14-9 | India has no facial-recognition-specific statute; DPDP consent, Puttaswamy (2018), Aadhaar Act 2016, RBI video-KYC, BNS voyeurism | DPDP Act ss.5-6; K.S. Puttaswamy (2017) 10 SCC 1; Aadhaar Act, 2016; RBI KYC Master Direction; BNS 2023 | Privacy and consent | 2026-10-21 | yes | The no-equivalent statement is explicit and accurate. Voyeurism under BNS 2023 is the right provision. |
| 14-10 | arXiv 2026 study of malicious LLM intermediaries: 28 paid and 400 free routers, 1 paid and 8 free routers injecting code, 2 with adaptive evasion, AWS credentials abused, test wallet under $50 | arXiv:2604.08407, "Your Agent Is Mine: Measuring Malicious Intermediary Attacks on the LLM Supply Chain" | Abstract | 2026-10-21 | yes | Paper exists (submitted 9 April 2026, Liu et al.) and the abstract matches the chapter's figures; the caveat correctly says media reports inflated the loss to $500,000. |
| 14-11 | Check SIMs with Sanchar Saathi/TAFCOP, check the CIBIL report, Aadhaar Act protections, BNS/IT Act remedies | DoT Sanchar Saathi; TAFCOP; CIBIL; Aadhaar Act, 2016; BNS 2023; IT Act, 2000 | SIM fraud and identity | 2026-10-21 | yes | High-risk tip. All instruments real; no invented number or helpline. |
| 14-12 | Number unbinding: India has no single unbind-everything service; go provider by provider via TRAI MNP; Sanchar Saathi; RBI KYC mobile number | TRAI MNP regulations; DoT Sanchar Saathi; RBI KYC Master Direction | MNP; KYC | 2026-10-21 | yes | High-risk tip. The no-equivalent statement is explicit and the provider-by-provider route is correct. Minor: the caveat cross-references "Chapter 14, Rule 6" and "Rule 8"; these are items/tips, not rules — editorial wording only. |

## Banned-term check

- JSON: 0 banned terms (check-chapter.ts 14 PASS; no China/Chinese/mainland/RMB/yuan/
  hukou/yibao/dibao/CNY, no CJK, no NMPA/NHSA/SAMR/MOHRSS/CSCSE/CBIRC/NFRA/MIIT/SFDA/
  PRC/State Council/Supreme People/procuratorate/WeChat/Alipay).
- Rendered page: not built in this pass (build deliberately not run); the JSON is the
  only source of the rendered text.

## Safety and editorial check

- No unsupported high-risk claim: 14-2, 14-5, 14-6, 14-11 and 14-12 are all supported
  by the instruments named; 14-5's three deadlines are verbatim from the RBI circular.
- No invented scheme, number or hotline: 1930, Sanchar Saathi, TAFCOP, the Data
  Protection Board and TRAI MNP all exist; no invented hotline found.
- No direct equivalent recorded where needed: 14-7 says the Act has no right to refuse
  consent and still get service, 14-9 says there is no facial-recognition statute, and
  14-12 says there is no single unbinding service — all three no-equivalent statements
  are present and correct.
- Caveats retained: every tip retains its caveat; the 14-10 caveat keeps the
  media-exaggeration warning and the 14-5 caveat keeps the reporting-duty condition.

## Blocking issues

- None. Two non-blocking notes: the 14-7 benefit should cite s.6(4) (and optionally
  s.6(6)) rather than "Sections 6(4) and 6(5)"; the 14-12 caveat should say "item 6/8"
  rather than "Rule 6/8".

Verdict: PASS
