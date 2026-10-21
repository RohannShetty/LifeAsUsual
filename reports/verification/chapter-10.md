# Verification: Chapter 10 - Are Dating and Marriage Worth It

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/10-dating-and-marriage.json
Manifest status: draft, tier B, 23 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-10.md` and the chapter JSON, then compared every legal
tip with the instrument it cites. The chapter's central defect is structural, not
per-tip: the substantive law is the marriage-and-family book of the **Civil Code of the
People's Republic of China**, re-labelled with Indian citations. Detectors used: (a) article
numbers in the 1040-1140 range, which exist only in the PRC Civil Code; (b) sources that
are Chinese court or procuratorate sites (`court.gov.cn`, `sft.hubei.gov.cn`,
`jsfy.gov.cn`); (c) figures that are round-number Chinese statistics converted at about
Rs 71.1 per unit; (d) Indian sources (wcd.gov.in, nalsa.gov.in) cited for propositions they
do not contain. Access: wcd.gov.in and nalsa.gov.in both returned HTTP 200; indiacode.nic.in
returned **HTTP 403**, so the Hindu Marriage Act, Special Marriage Act and PCMA were read
on Indian Kanoon and bare-act mirrors.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 10-2 | From January 2026, repeated unwanted messages can be punished as a public-order offence with detention of 5 days and a fine of Rs 14,200 (5-10 days if serious) | wcd.gov.in, nalsa.gov.in — neither contains this | — | 2026-10-21 | no | This is the PRC Public Security Administration Punishments Law regime. "Detention" and the Rs 14,200 figure (CNY 200 converted) have no Indian equivalent; Indian law provides for bail and fine under BNS s.352 / IT Act, not administrative detention. |
| 10-7 | 6.106 million marriages, 4.3 per mille, 3.513 million divorces in 2024, a 20.5% drop and 57.5% share | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | These are Ministry of Civil Affairs of China statistics, not Indian data, and the cited Indian pages do not contain them. India has no comparable central marriage register. |
| 10-9 | 2024 National Time Use Survey: men 1h52m, women 3h29m of housework | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | The figures are China's 2018 Time Use Survey. India ran a Time Use Survey in 2019 with different results; the "2024" survey does not exist in India. |
| 10-10 | Spousal property is governed by Articles 1062 and 1063 | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | PRC Civil Code articles. India has no community-of-property regime: HMA s.27 and the Special Marriage Act ss.21-22 govern differently. |
| 10-11 | From February 2025 the Supreme People's Court interpretation (Fa Interpretation [2025] No. 1, Art. 8) changes cohabitation property rules | court.gov.cn/zixun/xiangqing/452771.html (only source) | Art. 8 | 2026-10-21 | no | Sole source is a Chinese court page; the tip imports a Chinese judicial interpretation into an India edition. |
| 10-12 | Joint debts of a married couple are determined by defined tests | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | PRC Civil Code Art. 1064 doctrine; no Indian statute defines "joint marital debt". |
| 10-14 | Concealing a serious pre-marital illness allows annulment within one year; pre-marital examination is advised | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | Chinese annulment rule (Civil Code Art. 1053). Indian annulment grounds are HMA s.12 / SMA s.24 — unsoundness of mind, impotence, fraud, not concealment of illness, and no one-year window. |
| 10-15 | Divorce requires Articles 1076-1077 with a 30-day cooling-off period | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | Chinese divorce-registration cooling-off. India's nearest rule is HMA s.13B mutual consent with a six-month (waivable) period, per *Amardeep Singh v Harveen Kaur* (2017) 8 SCC 746 — absent from the tip. |
| 10-18 | Inheritance shares follow Articles 1127, 1219, 33, 165 and 1133 | sft.hubei.gov.cn (Hubei justice bureau) | — | 2026-10-21 | no | Chinese succession law. India's applicable statutes are the Hindu Succession Act 1956 / Indian Succession Act 1925. |
| 10-19 | Bigamy and prohibited marriage are Articles 1052 and 1053 | jsfy.gov.cn (Jiangsu court) | — | 2026-10-21 | no | Chinese articles; Indian equivalents are HMA s.5 and IPC/BNS bigamy. |
| 10-21 | Cohabitation begun before 1 February 1994 counts as a de facto marriage | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | Chinese rule. Indian law has no de facto marriage; the Supreme Court in *D. Velusamy v D. Patchaiammal* (2010) 10 SCC 469 treats "relationship in the nature of marriage" narrowly and without a cut-off date. |
| 10-22 | Property can be partitioned during the marriage without divorce; example figure "Rs 79,57,600" | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | Chinese judicial interpretation; the rupee figure is a converted Chinese number. India has no general partition remedy between spouses during a subsisting marriage. |
| 10-23 | Child support: 20-30% of income, e.g. "on an Rs 1,13,700 monthly income ... from 1,600 to Rs 34,100" | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | no | Chinese percentages plus arithmetic that does not close: 20-30% of Rs 1,13,700 is Rs 22,740-34,110, so the Rs 1,600 floor is unexplained. No Indian maintenance statute is cited (CrPC s.125 / BNSS s.144, HMA s.24-25). |
| 10-13 | Marriage registration: HMA s.8, Special Marriage Act notice with a 30-day objection window, PCMA ages 18/21, no household-register requirement | HMA 1955; Special Marriage Act 1954; PCMA 2006 | ss.5, 8, 15 | 2026-10-21 | yes | Correct. This is the one legal tip in the chapter rewritten for India; note the SMA objection window under s.7 extends to 30 days after notice. indiacode 403; read on Indian Kanoon. |
| 10-3 | Spot check: flirting-signal research (Hall et al., 2015) | Hall, Xing & Brooks, "Sex and Gender Differences in Personal Relationships" / related 2015 studies | — | 2026-10-21 | yes | International non-legal source, correctly used; no invented Indian scheme. |
| 10-16 | Spot check: author's experience of arranged-marriage meetings, with WCD and NALSA appended | wcd.gov.in, nalsa.gov.in | — | 2026-10-21 | yes | Non-legal first-person content; the two official URLs are padding and support nothing in the tip, a recurring pattern in the chapter. |

## Banned-term check

- JSON: 0 literal banned terms. The Chinese origin is visible, however, in article
  numbering, Chinese court URLs and converted rupee figures, none of which the banned-term
  grep can catch.
- Rendered page: 0 banned terms in `dist/chapters/10-dating-and-marriage/index.html`.

## Safety and editorial check

- No unsupported high-risk claim: **FAIL.** 13 legal tips state Chinese law as if it were
  Indian law.
- No invented scheme, number or hotline: **FAIL.** The "2024 National Time Use Survey",
  "6.106 million marriages" and "5 days' detention / Rs 14,200 fine" are presented as
  Indian facts; they are Chinese data, some of them converted currency.
- No direct equivalent recorded where needed: **FAIL.** Only 10-13 names Indian law;
  the rest name no Indian statute at all while citing wcd.gov.in and nalsa.gov.in.
- Caveats retained: partially — caveats are generic and do not warn that the rule stated
  is foreign.

## Blocking issues

1. **10-2** — inventing an administrative-detention regime and a Rs 14,200 fine under
   "public order"; no Indian instrument; cited sources do not contain it.
2. **10-7** — Chinese marriage/divorce statistics (6.106m, 4.3‰, 3.513m, 57.5%) presented
   as fact, sourced to WCD/NALSA pages that do not carry them.
3. **10-9** — "2024 National Time Use Survey" figures are China's 2018 survey.
4. **10-10** — Articles 1062/1063 (PRC Civil Code) as the law of marital property.
5. **10-11** — sole source is a Chinese court page; Fa Interpretation [2025] No. 1 Art. 8
   imported wholesale.
6. **10-12** — Chinese joint-debt doctrine with no Indian basis.
7. **10-14** — Chinese annulment-for-concealed-illness rule and one-year window.
8. **10-15** — Articles 1076/1077 and the 30-day cooling-off; Indian s.13B regime absent.
9. **10-18** — Chinese succession articles (1127, 1219, 33, 165, 1133) with a Hubei source.
10. **10-19** — Articles 1052/1053 with a Jiangsu court source.
11. **10-21** — the 1 February 1994 de facto-marriage cut-off.
12. **10-22** — partition without divorce and a converted "Rs 79,57,600" example.
13. **10-23** — Chinese custody percentages with internal arithmetic that does not close.

Verdict: FAIL

Blocking issues: 13 (10-2, 10-7, 10-9, 10-10, 10-11, 10-12, 10-14, 10-15, 10-18, 10-19,
10-21, 10-22, 10-23). This chapter needs re-research, not editing: the Indian law of
marriage, divorce, maintenance and succession has to be written from HMA 1955, SMA 1954,
PCMA 2006, the Special Marriage Act, BNSS s.144 and the Hindu Succession Act / Indian
Succession Act.
