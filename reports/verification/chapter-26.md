# Verification: Chapter 26 - Building a Website or Platform

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/26-building-a-website-or-platform.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-26.md, then checked the two India-specific tips (26-4, 26-9) against the IT Act, 2000, the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the DPDP Act, 2023, and checked the rest against the authority they actually describe. meity.gov.in and cert-in.org.in returned HTTP 403 to the fetch tool; indiacode.nic.in returned HTTP 403. The decisive finding is structural: ten of the thirteen tips are mainland-China telecom, PIPL, CSL and live-streaming rules (value-added telecom licence, MIIT, online cultural activities licence, CAC security assessment, real-name registration, under-16 live-stream ban, per-age tipping caps) with Chinese fines converted into rupees.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 26-1 | A platform that collects buyer money and forwards it to sellers is operating a payment business | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. This is the Chinese payment-settlement rule. In India the test is RBI's Payment and Settlement Systems Act authorisation, which the tip does not cite; the cited sites do not contain the rule. |
| 26-2 | Paid websites need a Value-Added Telecommunications Business Licence; transaction platforms a different permit; free sites only register | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. No such licence exists in India; this is the MIIT regime. |
| 26-3 | Live streaming needs a provincial Online Cultural Activities Licence listing "online performance" | Chinese Ministry of Culture, Wenshifa [2016] No. 33 | Arts 2, 4, 6, 13, 20 | 2026-10-21 | no | BLOCKING. The cited instrument is Chinese and the licence does not exist in India. |
| 26-4 | India does not require server registration; comply with the IT Act, IT Rules 2021 and the DPDP Act | IT Act 2000; IT Rules 2021; DPDP Act 2023 | s.79 | 2026-10-21 | yes | Correct. India has no server-registration requirement; the tip correctly names the Indian regime. |
| 26-5 | Platforms hosting third-party sellers must verify identity, register data, report and retain records for three years | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. Three-year retention is the Chinese e-commerce rule; the IT Rules 2021 require 180 days. The cited sites do not support the claim. |
| 26-6 | Platforms are legally responsible for user content and must run moderation, reporting and immediate takedown | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. Contradicts the Indian safe-harbour model in s.79, which the chapter itself states correctly in 26-4 and 26-9. This is the Chinese platform-responsibility rule. |
| 26-7 | Sites that allow posting or chat must collect users' real identity; refusals must be blocked | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. India has no general real-name registration mandate; this is the Chinese Cybersecurity Law. |
| 26-8 | No live-streaming account for anyone under 16; tipping limits set by age band | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. Chinese live-streaming rules; no Indian instrument cited or applicable. |
| 26-9 | Publish a grievance process and act on a valid notice or court order; the safe harbour depends on due diligence (title says "restore content after 15 days if no response") | IT Act 2000 s.79; IT Rules 2021 | s.79; Rules | 2026-10-21 | no | BLOCKING (title only). The body is correct and even states that India does not have the 15-day restoration rule, but the headline asserts that rule. Title contradicts body and misleads a skimming reader. |
| 26-10 | Personal data may not be transferred abroad casually: CAC security assessment, certification or standard contract | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. This is the Chinese PIPL transfer framework. India's DPDP Act 2023 has no such three-pathway scheme (the DPDP Rules were still notifying in 2026), and the cited sites do not contain it. |
| 26-11 | Choose a server by downtime tolerance and support before price | author's experience | - | 2026-10-21 | yes | Experience-based and marked GC; no legal claim. The trailing reference to "filing" is a China leftover and should be cut. |
| 26-12 | On a breach, contain it, notify users and authorities, and report cyberattacks to "public security" | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. "Public security" is the Chinese police reporting channel. In India the duties are CERT-In's 6-hour incident report and the DPDP breach-notification rule; neither is cited. |
| 26-13 | Auto-renewing subscriptions need conspicuous pre-signup and pre-charge reminders and easy cancellation | MeitY; CERT-In | - | 2026-10-21 | no | BLOCKING. This is the Chinese auto-renewal rule. India's closest instruments are the RBI e-mandate pre-debit notification and the Consumer Protection (E-Commerce) Rules, neither cited. |

## Banned-term check

- JSON: 0 banned terms. 2 China-specific vocabulary hits ("provincial"). The file carries 28 rupee signs, including converted Chinese fines (for example 71,05,000, 14,21,000 and 2,84,200) - rupee amounts invented for the India edition by converting Chinese penalties.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: FAIL - a website operator following 26-2, 26-5, 26-7, 26-10 or 26-12 would comply with Chinese law and not Indian law.
- No invented scheme, number or hotline: invented-for-India schemes and rupee amounts - the "Value-Added Telecommunications Business Licence", the "Online Cultural Activities Licence", the three-year retention rule and converted fines.
- No direct equivalent recorded where needed: no Indian equivalent (RBI payment authorisation, IT Rules due diligence, CERT-In reporting, DPDP transfer rules) is recorded for the ten Chinese tips.
- Caveats retained: 26-4 and 26-9 are correctly hedged; 26-11 is honest about being experience-based.

## Blocking issues

- 26-1 - payment-settlement rule is Chinese; Indian test is RBI authorisation.
- 26-2 - Value-Added Telecommunications Business Licence does not exist in India (MIIT regime).
- 26-3 - provincial Online Cultural Activities Licence is a Chinese licence.
- 26-5 - three-year record retention is Chinese; IT Rules 2021 require 180 days.
- 26-6 - strict platform liability for user content contradicts IT Act s.79 safe harbour.
- 26-7 - general real-name registration mandate is Chinese (CSL), not Indian.
- 26-8 - under-16 live-stream ban and age-band tipping caps are Chinese rules.
- 26-9 - title asserts a 15-day content-restoration rule that the body correctly says India does not have.
- 26-10 - CAC security assessment/certification/standard contract is the PIPL transfer regime, not Indian law.
- 26-12 - reporting cyberattacks to "public security" is the Chinese channel; India uses CERT-In (6 hours) and the DPDP Act.
- 26-13 - auto-renewal disclosure rule is Chinese; India's RBI e-mandate and e-commerce rules are not cited.

Verdict: FAIL
