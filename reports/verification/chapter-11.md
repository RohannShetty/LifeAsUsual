# Verification: Chapter 11 - Red Lines for Developers and Techies

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/11-red-lines-for-developers.json
Manifest status: draft, tier B, 21 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-11.md` and the chapter JSON. Detectors for a
source-edition port: criminal thresholds expressed as "20 users", "illegal gains Rs
71,100 / Rs 1,42,100" and "losses above Rs 14,21,000" (CNY 1,000 / 2,000 / 20,000 converted
at about 71.1); references to platforms that do not operate in India (12306, QQ, WeChat);
Chinese court, procuratorate and regulator domains (`court.gov.cn`, `spp.gov.cn`,
`npc.gov.cn`, `bj148.org`, `szzg.gov.cn`, `miit.gov.cn`); and MeitY/CERT-In cited as the
sole authority for propositions they do not carry. Access: meity.gov.in and cert-in.org.in
both returned HTTP 200 but contain no such rules; **indiacode.nic.in returned HTTP 403**
for the IT Act, which was read on Indian Kanoon instead.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 11-1 | Framing: "if legal action is taken, immediately hire a criminal defense attorney" | MeitY, CERT-In | — | 2026-10-21 | no (note) | Procedural framing is US-style; India has no right to appointed counsel at the investigation stage in the way implied, and a "criminal defense attorney" is not an Indian term of art. Non-blocking but should be rewritten. |
| 11-2 | Selling game cheats, including screenshot-only AI aids, is criminal above "20 users or Rs 71,100" | MeitY, CERT-In | — | 2026-10-21 | no | The threshold is PRC Criminal Law art. 285 (illegal control of computer systems). India's IT Act ss.43/66 has no user-count threshold. |
| 11-3 | Ticket-grabbing and flash-sale scripts are criminal; 12306 bot case | MeitY, CERT-In | — | 2026-10-21 | no | 12306 is China Railway's booking system; the offence exists in Chinese law (illegal获取 computer data). No Indian authority supports it. |
| 11-4 | Scraping lawful only if public, unauthenticated and personal data untouched; "20 users" threshold elsewhere in tip | MeitY, CERT-In | — | 2026-10-21 | no | Indian position turns on IT Act s.43/66, contract and DB rules, not the Chinese thresholds stated. |
| 11-5 | Refusing orders for gambling/fraud/adult apps; payment-gateway liability described with Chinese thresholds | MeitY, CERT-In | — | 2026-10-21 | no | The aiding-liability rule quoted is PRC Criminal Law art. 287-2. |
| 11-7 | Bid rigging / unfair competition under "Anti-Unfair Competition Law (Amended in 2025, Article 10)" | spp.gov.cn (Supreme People's Procuratorate) | Art. 10 | 2026-10-21 | no | Chinese statute, Chinese source. Indian counterparts: Competition Act 2002 s.3, BNS. |
| 11-9 | Unauthorised penetration punished above "20 users or Rs 71,100"; losses "Rs 1,42,100" | MeitY, CERT-In | — | 2026-10-21 | no | Chinese thresholds again; India: IT Act s.66 (up to 3 years / Rs 5 lakh) with no user test. |
| 11-10 | Vulnerability disclosure governed by Chinese regulation; fines "100,000 to Rs 14,21,000" | MeitY, CERT-In | — | 2026-10-21 | no | The regulation described (网络产品安全漏洞管理规定, MIIT/CAC/PSB 2021) is Chinese and is not cited. |
| 11-11 | Selling VPN/firewall-bypass tools is criminal; "fines up to Rs 2,13,200"; state-owned international gateways | MeitY, CERT-In | — | 2026-10-21 | no | PRC regime; India has no equivalent prohibition on VPN sale, and no state-gateway monopoly. |
| 11-12 | Non-compete: max 2 years, 30% of average monthly wage, release after 3 months unpaid | court.gov.cn/zixun/xiangqing/472691.html | — | 2026-10-21 | no | Chinese Labour Contract Law art. 23-24 doctrine. India: Contract Act s.27 renders non-competes void; only confidentiality/notice periods survive. |
| 11-13 | Employee inventions: Patent Law Art. 6 and reward rules | npc.gov.cn | Art. 6 | 2026-10-21 | no | Chinese Patent Law; India's Patents Act 1970 s.39 and employee-invention practice are different. |
| 11-14 | Copyright damages formula for infringement | MeitY, CERT-In | — | 2026-10-21 | no | The tiered statutory damages described are PRC Copyright Law art. 54; India's Copyright Act 1957 has no statutory damages scale. |
| 11-15 | Under-14 users need guardian consent; privacy policy duties; "Rs 1,42,10,000" fine | MeitY, CERT-In | — | 2026-10-21 | no | This is PIPL art. 31 and the Chinese penalty scale. India's DPDP Act 2023 sets the age of consent at 18 and a different penalty schedule. |
| 11-16 | ICP registration, 6-month log retention, classification-protection grading | MeitY, CERT-In | — | 2026-10-21 | no | Chinese ICP/MLPS regime. India has no ICP licence; CERT-In's 2022 directions require 180-day logs, a different rule. |
| 11-17 | Generative-AI services need safety assessment and algorithm registration before public release | MeitY, CERT-In | — | 2026-10-21 | no | Chinese Interim Measures for Generative AI (2023) and algorithm registration. India has advisories, not a registration regime. |
| 11-18 | Ad-blocking cases: Beijing "Lan Jingling"/Mango TV, damages Rs 1,13,68,000 and Rs 12,78,900 | bj148.org, mycaijing.com | — | 2026-10-21 | no | Chinese litigation with converted damages; neither the cases nor the figures exist in India. |
| 11-19 | Shanghai "AI relay" service led to criminal detention; MSS advisory of June 2026 | szzg.gov.cn | — | 2026-10-21 | no | Chinese enforcement; an Indian reader cannot act on it, and the "Ministry of State Security" is China's. |
| 11-20 | IP infringement thresholds "Rs 4,26,300 / Rs 7,10,500" under SPC/SPP interpretation Fa Shi [2025] No. 5 Art. 13 | MeitY, CERT-In | — | 2026-10-21 | no | Chinese judicial interpretation with converted thresholds. |
| 11-21 | Guiding Case 69 and Beijing/Shenzhen/Nantong judgments on data scraping | MeitY, CERT-In | — | 2026-10-21 | no | Chinese guiding cases; no Indian precedent is cited. |
| 11-6 | Spot check: on leaving a job, return access, do not delete data or leave a backdoor | IT Act 2000; BNS 2023 | IT Act ss.43, 66; BNS mischief | 2026-10-21 | yes | Correctly Indian: unauthorised access/damage is IT Act s.43/66, and BNS covers mischief. Genuine rewrite. |
| 11-8 | Spot check: no running your own programs on someone else's server, no crypto-mining on a work machine | IT Act 2000 s.66; BNS 2023 | s.66 | 2026-10-21 | yes | Correctly Indian and accurate. |

## Banned-term check

- JSON: 0 literal banned terms; the Chinese origin is carried by thresholds, platform names
  (12306, QQ, WeChat) and .cn sources, which a term grep does not catch.
- Rendered page: 0 banned terms in `dist/chapters/11-red-lines-for-developers/index.html`.

## Safety and editorial check

- No unsupported high-risk claim: **FAIL.** 18 of 21 tips state Chinese criminal or
  regulatory thresholds as if they applied in India.
- No invented scheme, number or hotline: **FAIL.** Converted figures ("Rs 71,100",
  "Rs 14,21,000", "Rs 4,26,300") are presented as Indian legal thresholds. No hotline is
  invented.
- No direct equivalent recorded where needed: **FAIL.** Only 11-6 and 11-8 name Indian law
  correctly; the rest name none.
- Caveats retained: partially — caveats repeat the Chinese rule rather than flag it.

## Blocking issues

Each of the following states foreign law as Indian law with no Indian instrument, and the
cited MeitY/CERT-In pages do not contain the rule:

1. **11-1** — "immediately hire a criminal defense attorney" framing (editorial, US-style).
2. **11-2** — "20 users or Rs 71,100" threshold for cheat tools.
3. **11-3** — ticket-bot offence built on the 12306 case.
4. **11-4** — scraping rule stated with Chinese thresholds.
5. **11-5** — payment-gateway/aiding liability under PRC Criminal Law art. 287-2.
6. **11-7** — Anti-Unfair Competition Law (2025) Art. 10, sourced to spp.gov.cn.
7. **11-9** — penetration-testing thresholds "20 users / Rs 1,42,100".
8. **11-10** — Chinese vulnerability-disclosure regulation and fine scale.
9. **11-11** — VPN/firewall-bypass prohibition and "Rs 2,13,200" fine.
10. **11-12** — 2-year / 30% non-compete rule from court.gov.cn.
11. **11-13** — Chinese Patent Law Art. 6.
12. **11-14** — PRC copyright statutory-damages formula.
13. **11-15** — under-14 consent and "Rs 1,42,10,000" penalty (India: DPDP Act, age 18).
14. **11-16** — ICP registration and 6-month log retention.
15. **11-17** — generative-AI filing and algorithm registration.
16. **11-18** — Beijing ad-blocking cases and converted damages.
17. **11-19** — Shanghai AI-relay detention and MSS advisory.
18. **11-20** — SPC/SPP Fa Shi [2025] No. 5 thresholds.
19. **11-21** — Guiding Case 69 and Chinese scraping judgments.

Verdict: FAIL

Blocking issues: 19. Two tips (11-6, 11-8) are properly Indian; the remaining 19 need to
be rewritten from the IT Act 2000 (ss.43, 66, 66C-66F, 67), BNS 2023, DPDP Act 2023,
Copyright Act 1957, Patents Act 1970, Contract Act s.27 and the Competition Act 2002 — or,
where India has no equivalent (VPN sale, ICP, algorithm registration), say so explicitly.
