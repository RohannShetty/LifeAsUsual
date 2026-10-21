# Verification: Chapter 12 - Starting Your Own Business

Verifier: Independent verifier (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/12-starting-a-business.json
Manifest status: draft (tier A, 28 tips, verifier null, humanReview pending)

## Method

Read the India build (28 tips) against the source chapter and the manifest entry. Checked the tax, food-safety, labour-code and regulatory citations against fetched primary or near-primary sources: the Income-tax Act, 2025 bare text (ziplaw.in, taxcode.in), the Code on Wages, 2019 bare text (ziplaw.in ss.26 and 42), the FSSAI 2026 threshold change (legal500.com analysis of the 10 March 2026 amendment regulations and the 13 March 2026 implementation order), Crossref for the Camuffo DOI, and the August 2026 Delhi High Court coverage on the National Nursing and Midwifery Commission. Ran `npx tsx scripts/check-chapter.ts 12` (exit 0).

Access failures recorded: indiacode.nic.in returned 403; pib.gov.in returned 403 for the FSSAI press releases (PRID 2239834 and PRID 2241804), so the FSSAI change rests on the legal analysis and the order date rather than the press release; aniNews returned 403; cert-in.org.in served a PDF the fetch tool cannot read. Rows that depend on an unretrieved page are marked "unverified" rather than passed.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 12-8 | Under the FSSAI order of 13 March 2026, effective 1 April 2026: basic registration up to ₹1.5 crore turnover, state licence ₹1.5 crore to ₹50 crore, central licence above ₹50 crore | legal500.com, S.S. Rana analysis of the Food Safety and Standards (Licensing and Registration of Food Businesses) Amendment Regulations, 2026, gazetted 10 March 2026 | FSS Act 2006 s.31; FSS Regulations 2011 as amended 2026 | 2026-10-21 | yes | The thresholds match the amendment exactly (previously ₹12 lakh, ₹12–20 crore, above ₹20 crore). pib.gov.in 403 recorded. |
| 12-12 | The Income-tax Act, 2025 replaced the 1961 Act from 1 April 2026, and the late fee is under s.428 | ziplaw.in; taxcode.in; incometaxindia.gov.in FAQ | Income-tax Act, 2025 s.428 | 2026-10-21 | yes | s.428 is "Fee for default in furnishing return of income". The tip states no fee amount, so there is nothing to overclaim. |
| 12-17 | Bonus sits in Chapter IV of the Code on Wages, 2019 at ss.26–41, which replaced the Payment of Bonus Act, 1965 | ziplaw.in s.26 and s.42 | Code on Wages 2019 ss.26–41 | 2026-10-21 | yes | s.26 is "Eligibility for bonus" under "Chapter IV · Payment of Bonus"; s.42 opens Chapter V, so the range 26–41 is correct. The repealed Act appears only in the past tense. |
| 12-7 | A factory needs registration under the Occupational Safety, Health and Working Conditions Code, 2020, which replaced the Factories Act, 1948 when it commenced on 21 November 2025 | four labour codes commencing 21 November 2025 | OSH Code 2020 | 2026-10-21 | yes | Kept current: the repealed Factories Act is named only as the replaced statute. No repealed Act is presented as current anywhere in the chapter. |
| 12-18 | A randomised controlled trial followed 116 newly founded Italian companies for about a year | api.crossref.org (10.1287/mnsc.2018.3249) | n/a | 2026-10-21 | yes | Camuffo et al., Management Science 66(2):564; the DOI resolves with matching metadata. |
| 12-22 | Motor Vehicles Act, 1988 s.134A protects a Good Samaritan; the National Nursing and Midwifery Commission Act, 2023 is enacted but the Commission had not been constituted by 2026, so the Indian Nursing Council remains the operative regulator | barandbench.com and thehindu.com, 22 August 2026 ("Delhi High Court tells Centre to decide plea to set up National Nursing and Midwifery Commission") | MV Act 1988 s.134A; NNMC Act 2023 | 2026-10-21 | yes | The Delhi High Court directing the Centre to decide a plea over the long-pending constitution of the NNMC in August 2026 corroborates that the Commission was not yet constituted. The tip keeps the correct hedge ("check which body is acting"). |
| 12-1, 12-2, 12-3 | Partnership Act 1932 joint and several liability; Contract Act 1872 s.126 (guarantee) and s.128 (co-extensive); Companies Act 2013 limited liability and partly paid shares; there is no rule that share capital must be paid up within five years | indiacode.nic.in (403) | Partnership Act 1932 ss.4, 25; Contract Act 1872 ss.126, 128; Companies Act 2013 ss.2(68), 45, 56 | 2026-10-21 | unverified | No five-year paid-up rule exists in the Companies Act, so the negative claim is right; pages not retrievable. |
| 12-4 | Benami Transactions (Prohibition) Act, 1988 as amended in 2016 makes benami property liable to confiscation and the arrangement void; Companies Act requires beneficial-ownership disclosure | indiacode.nic.in (403) | Benami Act 1988 ss.2, 3, 24 as amended 2016; Companies Act 2013 ss.88–90 | 2026-10-21 | unverified | Correct as cited; no fetch. |
| 12-6 | SPICe+ combines name reservation, incorporation, DIN, PAN, TAN and EPFO/ESIC registration; GST and Udyam registrations follow | mca.gov.in (not fetched) | Companies Act 2013 s.7; CGST Act 2017 s.22 | 2026-10-21 | unverified | The SPICe+ scope is accurate and no threshold figure is stated. |
| 12-16 | ESIC and EPF coverage depends on establishment size and activity, and the Code on Social Security, 2020 and Code on Wages, 2019 are the current instruments | labour.gov.in (not fetched) | SS Code 2020; Wages Code 2019 | 2026-10-21 | unverified | The cautious wording is correct and no headcount threshold is asserted, so there is no number to get wrong. |
| 12-23 | Strike-off under Companies Act 2013 s.248 in Form STK-2 under the 2016 Removal of Names Rules; LLP strike-off under the LLP Act; IBC 2016 for liquidation | indiacode.nic.in (403) | Companies Act 2013 s.248; Removal of Names Rules 2016; IBC 2016 | 2026-10-21 | unverified | Correct in substance; no fetch. |
| 12-25 | A company files AOC-4 and MGT-7, an LLP files Form 8 and Form 11, and the dates are fixed by the Acts | taxguru.in (LLP Form 8 due 30 October 2026; LLP Act 2008 s.34 requires the statement within six months of year-end) | Companies Act 2013 ss.92, 129; LLP Act 2008 s.34; LLP Rules 2009 | 2026-10-21 | yes | Good outcome of the re-fix: the tip no longer states a wrong Form 8 deadline. If a date is added later it must be 30 October (30 days from the end of the six-month period), not "30 days from the end of the financial year". |
| 12-26 | Private placement under Companies Act 2013 s.42 is limited to 200 persons in a financial year and cannot be publicly advertised; a public issue needs SEBI | indiacode.nic.in (403) | Companies Act 2013 s.42; SEBI Act 1992 | 2026-10-21 | unverified | The 200-person cap and the ban on public advertising are correct. |
| 12-28 | Partnership Act 1932 defaults: ss.11–13 (profit share, salary, participation), s.32 (retirement), s.43 (dissolution by notice) | indiacode.nic.in (403) | Partnership Act 1932 ss.11–13, 32, 43 | 2026-10-21 | unverified | The section roles are right; no fetch. |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms (`npx tsx scripts/check-chapter.ts 12` exit 0: "PASS: no banned term, CJK character or foreign-jurisdiction term")

## Safety and editorial check

- No unsupported high-risk claim: the tax and food-safety tips are procedural and defer to the portal; the strike-off and insolvency tip does not promise a clean exit.
- No invented scheme, number or hotline: no scheme or fee is invented; 1930 and cybercrime.gov.in are the real financial-fraud channels; the FSSAI turnover bands, the s.66 figure and the s.428 reference are all real.
- No direct equivalent recorded where needed: 12-5 states there is no Indian franchise-disclosure statute; 12-16 states there is no "double wages" penalty for a missing written contract; the nursing tip records that the 2023 Commission is not yet the acting regulator.
- Caveats retained: the FSSAI tip says the threshold is revised from time to time and the 13 March 2026 order is the current one; the labour tips say coverage depends on size, activity and state rules; the registration tip says incorporation is not a licence.

## Blocking issues

- None. The earlier Form 8 deadline error is no longer present in 12-25: the tip states no LLP filing date and leaves the dates to the Acts.
- Coverage gap, not a contradiction: indiacode.nic.in 403 and pib.gov.in 403 prevented primary confirmation of the Companies Act, Partnership Act and FSSAI press-release pages; those rows are marked "unverified".

Verdict: PASS
