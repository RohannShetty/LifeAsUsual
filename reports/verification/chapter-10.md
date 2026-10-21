# Verification: Chapter 10 - Are Dating and Marriage Worth It

Verifier: Independent verifier (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/10-dating-and-marriage.json
Manifest status: draft (tier B, 23 tips, verifier null, humanReview pending)

## Method

Read the India build (23 tips) against the source chapter in `data/en/all-chapters.json` and the manifest entry for chapter 10. Checked every DOI in the chapter against `https://api.crossref.org/works/<DOI>` (19 DOIs, all resolve with matching title, journal, volume and page) and re-read the abstracts behind the quantitative claims through Europe PMC. Checked Indian statutory citations against bare-act reproductions of the Income-tax Act, 2025 (ziplaw.in), the Hindu Marriage Act, 1955 (sooperkanoon) and the Bharatiya Nyaya Sanhita, 2023 (devgan.in), and against the report of Amardeep Singh v Harveen Kaur, 2017 SCC OnLine SC 1073 (scconline.com). Ran `npx tsx scripts/check-chapter.ts 10` (exit 0).

Access failures recorded: indiacode.nic.in returned 403, so official India Code text was unavailable and HMA/BNS sections were read from bare-act reproductions; pib.gov.in returned 403; taxmann.com served a paywalled stub; devgan.in returned 503 intermittently (the BNS pages succeeded on retry). Where a provision is a standard, uncontested section that could not be retrieved in this round, the row is marked "unverified" rather than passed — an unreadable page proves nothing.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 10-1, 10-3, 10-4, 10-5, 10-17, 10-20 | Meta-analytic and experimental figures (4%–18% variance; 52 pairs, 26 clips, 261 observers; 43 datasets and 29 labs, 45% then 18%; 36 questions in 45 minutes; r = 0.07–0.21; g = 1.12, 95% CI 0.92–1.31) | api.crossref.org; Europe PMC abstracts | n/a | 2026-10-21 | yes | Every DOI resolves with matching metadata, and the cited figures match the abstracts (Roddy 2020: 58 studies, 2,092 couples; Joel 2020: 43 datasets, 29 laboratories, 45% then 18%; Robles 2014: 126 articles, >72,000 people). |
| 10-2 | Pursuit against a clear "no" can be stalking under the BNS, 2023; voyeurism is a separate offence; obscene messages fall under the IT Act, 2000; a court can grant a protection order | devgan.in/bns/section/78 and /section/77 | BNS 2023 ss.77, 78 | 2026-10-21 | yes | s.78 stalking (3 years on first conviction, 5 years on a second); s.77 voyeurism; both match the tip's description. The tip states no section number, so it cannot mis-cite one. |
| 10-7 | Marriages are registered under state rules made under the HMA 1955 and SMA 1954; the Registrar General's Civil Registration System covers births and deaths, not marriages | indiacode.nic.in (403) | HMA 1955 s.8; SMA 1954 ss.5–13 | 2026-10-21 | unverified | Consistent with the registration scheme and the CRS mandate, but no page retrieved. Non-blocking: the tip asserts no section or number. |
| 10-8 | Married people have roughly 12% lower mortality, the never-married roughly 24% higher; all three meta-analyses are observational | Europe PMC (Manzoli 2007; Roelfs 2011) | n/a | 2026-10-21 | yes | Manzoli RR 0.88 (95% CI 0.85–0.91), 53 comparisons, >250,000 elderly; Roelfs mean HR 1.24 (1.19–1.30), 95 publications, >500 million person-years. The confounding caveat is present and accurate. |
| 10-10 | A gift from a relative, including a spouse, is generally not taxed as the recipient's income under section 92(3) of the Income-tax Act, 2025 (in force from 1 April 2026); India has no community of property; HSA 1956 gives a Hindu woman absolute property | ziplaw.in/income-tax-act-2025/section-92/ | Income-tax Act, 2025 s.92(2)(m), s.92(3)(a) | 2026-10-21 | yes | s.92(2)(m) charges sums above ₹50,000 received without consideration; s.92(3) disapplies it to sums received "from any relative" or "on the occasion of marriage". Statute name and section are correct. |
| 10-11 | A gift from a parent is not the child's income under section 92(3); a gift of immovable property needs a registered instrument under the Transfer of Property Act, 1882 read with the Registration Act, 1908 | ziplaw.in/income-tax-act-2025/section-92/ | s.92(3) | 2026-10-21 | yes | Same verified provision; the registration point is the standard TPA 1882 s.54 / Registration Act 1908 s.17 rule. |
| 10-12 | A surety's liability is co-extensive with the principal debtor's (s.128); a material variation without consent can discharge the surety (s.133) | indiacode.nic.in (403) | Indian Contract Act, 1872 ss.128, 133 | 2026-10-21 | unverified | Correct in substance as cited; page not retrievable this round. |
| 10-13 | A Special Marriage Act, 1954 marriage needs notice to the marriage officer and a 30-day objection window; the PCMA 2006 sets 18 and 21 | indiacode.nic.in (403) | SMA 1954 ss.5–7; PCMA 2006 | 2026-10-21 | unverified | Consistent with the SMA notice scheme and the PCMA ages; no fetch. |
| 10-15 | Mutual consent under HMA 1955 s.13B or SMA 1954 s.28 needs one year of separation and a six-month cooling-off the court can waive; Divorce Act 1869 s.10A needs two years | scconline.com report of Amardeep Singh v Harveen Kaur, 2017 SCC OnLine SC 1073 (12.09.2017) | HMA s.13B(2) | 2026-10-21 | yes | The judgment holds the six-month waiting period under s.13B(2) directory and waivable where the parties have settled everything and further delay would prolong agony. The tip states the waiver accurately and does not present it as automatic. |
| 10-18 | Indian Succession Act, 1925 s.63 requires a will signed and attested by two witnesses; Powers of Attorney Act, 1882; Mental Healthcare Act, 2017 advance directive | indiacode.nic.in (403) | ISA 1925 s.63; POA Act 1882; MHA 2017 | 2026-10-21 | unverified | Standard provisions, correctly cited in substance; no fetch. |
| 10-19, 10-22 | Maintenance under HMA 1955 ss.24–25 and BNSS 2023 s.144; TPA 1882 s.53 for transfers intended to defeat creditors | indiacode.nic.in (403) | HMA ss.24–25; BNSS 2023 s.144; TPA s.53 | 2026-10-21 | unverified | BNSS 2023 s.144 is the maintenance provision (successor to CrPC s.125); the citation is right. No fetch. |
| 10-21 | Under the HMA 1955 a marriage is complete on ceremony; registration is evidence, and omission to register does not affect validity; the SMA 1954 is different | sooperkanoon.com bare act, HMA 1955 s.8 | HMA 1955 s.8(5) | 2026-10-21 | yes | s.8(5): "Notwithstanding anything contained in this section, the validity of any Hindu marriage shall in no way be affected by the omission to make the entry." The tip states exactly this. |
| 10-23 | Hindu Minority and Guardianship Act, 1956 gives the mother custody of a child below five; Guardians and Wards Act, 1890 makes welfare paramount; HMA s.26; BNSS s.144 | indiacode.nic.in (403) | HMGA 1956 s.6(a); GWA 1890 s.17; HMA s.26 | 2026-10-21 | unverified | s.6(a) is the "not completed the age of five years" custody rule, and the tip correctly refuses to state a 20–30% maintenance formula as law. |

## Banned-term check

- JSON: 0 banned terms
- Rendered page: 0 banned terms (`npx tsx scripts/check-chapter.ts 10` exit 0: "PASS: no banned term, CJK character or foreign-jurisdiction term")

## Safety and editorial check

- No unsupported high-risk claim: legal statements are hedged ("can be", "generally", "depends on the state"), and the divorce-cost tip says expressly that irretrievable breakdown is not a statutory ground.
- No invented scheme, number or hotline: no scheme, hotline or fee is invented; legal aid is referred to generically without a fabricated number; money figures are in rupees.
- No direct equivalent recorded where needed: prenuptial agreements are recorded as having no statutory basis, and Goa is given as the exception rather than the rule.
- Caveats retained: the observational-data caveat, the "laws elsewhere may differ" framing and the maintenance-waiver caveat are all present.

## Blocking issues

- None. Residual gaps (10-7, 10-12, 10-13, 10-18, 10-19, 10-22, 10-23 marked "unverified") are access failures on indiacode.nic.in, not contradictions; the text asserts no section or number that a retrieved source contradicts.

Verdict: PASS
