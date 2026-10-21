# Verification: Chapter 21 - Travel and Abroad Safety

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/21-travel-and-abroad-safety.json
Manifest status: data/en-in/manifest.json lists chapter 21 as status draft, 13 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"]. Read only; nothing was edited.

## Method

The source pack marks 21-2 (MADAD) as high-risk; it was checked against the Ministry of External Affairs. Because this chapter is a translation of Chinese consular and exit-entry material, 21-1, 21-5, 21-7, 21-9, 21-10, 21-11 and 21-13 were checked as well. 21-6 (LRS) and 21-8 (IDP) were verified because they are the two tips where an Indian rule really does exist.

mea.gov.in was reachable on 21 October 2026 with curl and a desktop browser user-agent (HTTP 200) and links both the "Grievances-MADAD Portal" at https://www.madad.gov.in/madad/ and the "Consular Grievances Monitoring System". madad.gov.in itself did not answer the fetcher. rbi.org.in was reachable; indiacode.nic.in returned HTTP 403 to the fetcher and was read only through curl with a browser user-agent (partial access). No Indian instrument was found for 21-1, 21-5, 21-9, 21-10 or 21-13, and the JSON cites cs.mfa.gov.cn, gov.cn and the General Administration of Customs instead.

Pass means: the claim is supported by an Indian authority (MEA, RBI, MHA/Bureau of Immigration, CBIC) or is a generic, uncontroversial statement. Chinese consular and exit-entry law reproduced with Indian labelling fails.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 21-1 | MEA classifies overseas safety risk into four levels and, "as of September 15, 2026", avoiding high-risk countries is codified in administrative regulations | MEA travel advisories | Whole tip | 2026-10-21 | no | The four-level classification and the codification date are China's MFA advisory system and 出境入境管理法 framing. MEA issues country-wise travel advisories but publishes no four-level codified scheme. The source list begins "Consular Department of the Ministry of Foreign Affairs. Security Reminder. <https://cs.mfa.gov.cn/...>" |
| 21-1 | Caveat's "Do Not Travel" list: Eswatini (25 Aug 2026), Palestine (10 Oct 2023), Sudan (17 Apr 2023), Afghanistan (17 Feb 2023), Syria (4 Jan 2023), Peru (29 Dec 2022), Somalia (24 Nov 2022), northern Myanmar, parts of DR Congo | Chinese MFA advisory list | Caveat | 2026-10-21 | no | The dated list is the Chinese MFA list. MEA's advisories use different wording and dates; presenting the Chinese list as MEA's is a factual error |
| 21-2 | Save the MEA MADAD portal and the Indian mission's consular number; write down the address | mea.gov.in | MADAD portal link | 2026-10-21 | yes | Verified: mea.gov.in links the Grievances-MADAD Portal and the Consular Grievances Monitoring System. madad.gov.in did not answer the fetcher on 2026-10-21 (recorded, but the MEA link is sufficient) |
| 21-3 | Consular protection can visit you but cannot bail you out, and you still pay the costs | MEA consular services | Generic | 2026-10-21 | yes | Accurate statement of consular limits; no invented power |
| 21-4 | Buy insurance covering overseas medical care and evacuation; quote "&gt; $100,000" for evacuation | CDC travel insurance page | Insurance | 2026-10-21 | yes | The $100,000 evacuation benchmark is on the CDC page cited |
| 21-5 | "High-paying overseas jobs" are scams; getting caught can lead to a 6-month to 3-year travel ban | No Indian instrument | Whole tip | 2026-10-21 | no | The 6-month to 3-year exit restriction is China's 反电信网络诈骗法 art. 36. India restricts exit under the Passports Act 1967 and the Foreigners Act, but has no such scam-specific travel ban. "Border city" and "northern Myanmar" framing is also Chinese |
| 21-6 | LRS and RBI rules cap foreign exchange; USD 250,000 per financial year | RBI LRS; FEMA 1999 | LRS | 2026-10-21 | yes | Correct: Liberalised Remittance Scheme limit is USD 250,000 per financial year; FEMA 1999 is the governing statute |
| 21-7 | Photograph passport, visa and ID; if lost, report to police first, then apply for a travel document | MEA / Passports Act 1967 | Practical | 2026-10-21 | yes | Procedure is correct; the tip, however, ends by saying the embassy numbers "are the same two emergency hotlines listed", a dangling reference to a list that is not in the chapter |
| 21-7 | (editorial) dangling reference to "the same two emergency hotlines listed" | Chapter JSON | Whole tip | 2026-10-21 | no | No hotline number appears anywhere in the chapter (grep for 12308, 12333, 1915, 112 and 108 returns nothing). The reference survives from the Chinese edition, where 12308 is the consular hotline |
| 21-8 | Check whether the destination accepts an Indian licence or needs an International Driving Permit; IDP under the 1949 Geneva Convention | Motor Vehicles Act 1988; Geneva Convention 1949 | IDP | 2026-10-21 | yes | Correct: India issues IDPs under the 1949 Convention, and many destinations require one |
| 21-9 | "Starting September 15, 2026, agencies handling visa applications, study abroad programs, or immigration must register with immigration authorities within 15 days of establishment, existing agencies within 90 days" | MEA; Bureau of Immigration | Whole tip | 2026-10-21 | no | No Indian instrument creates this registration duty or these deadlines. The 15/90-day registration and prohibited-activity list are Chinese (出入境管理法/中介机构 rules). The cited MEA and IRDAI sources cannot support it |
| 21-10 | Individual fines 5,000 to ₹1,42,100; organisations 10,000 to ₹7,10,500; a further 5,000 to ₹1,42,100 for false invitations | Foreigners Act 1946; Passports Act 1967 | Penalties | 2026-10-21 | no | These are the Chinese 出入境管理法 art. 74 penalty bands converted into rupees. Indian penalties for false representations are set by the Passports Act 1967 s.12 and the Foreigners Act, and do not match these ladders |
| 21-11 | The regulation requires diplomatic missions to give information on local police contacts and other assistance | No Indian instrument | Whole tip | 2026-10-21 | no | The quoted duty is from China's 领事保护与协助条例 (2023). MEA provides consular assistance, but no Indian statute imposes that duty in these words; the tip then reverts to practical advice about sharing an itinerary |
| 21-12 | Japan requires a 14-day advance import certificate for some prescription drugs, ephedrine above 10% is restricted, keep original packaging and doctor's certificate in English | Japan MHLW / NCD | Medicine import | 2026-10-21 | yes | Consistent with Japan's import rules for medicines; the tip is appropriately conditional |
| 21-13 | Do not bring meat, dairy, fresh fruit or seeds; declare animal and plant products via the Red Channel; joint rules by the Ministry of Agriculture and Rural Affairs and the General Administration of Customs; fines up to ₹71,100 | No Indian instrument | Whole tip | 2026-10-21 | no | The authorities named are Chinese (MARA and GAC; GAC Announcement No. 43; PRC customs measures arts. 9, 11, 12, 25, 27). India's rules are the Plant Quarantine (Regulation of Import into India) Order 2003, DGFT policy and CBIC baggage rules; the ₹71,100 fine is a converted Chinese penalty |

## Banned-term check

- JSON: 0 banned terms. No China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY, and no CJK characters. Source-edition vocabulary appears instead: cs.mfa.gov.cn, gov.cn, PRC, "General Administration of Customs", "Ministry of Agriculture and Rural Affairs", "northern Myanmar", "border city", "mission" (21-1, 21-5, 21-9, 21-10, 21-11, 21-13).
- Rendered page: 0 banned terms in the literal list; the same source-edition terms and the Chinese advisory list would render.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 21-9 states a new registration duty with 15/90-day deadlines that no Indian instrument creates; 21-10 states criminal fines that are Chinese.
- No invented scheme, number or hotline: FAIL. 21-7 refers to "the same two emergency hotlines listed" when no hotline is listed; 21-5, 21-9 and 21-10 carry Chinese legal thresholds as Indian.
- No direct equivalent recorded where needed: FAIL. The chapter does not say that India has no four-level advisory scheme, no exit ban for overseas-job scams and no agency registration duty.
- Caveats retained: PASS in form, but the 21-1 caveat is the Chinese MFA "Do Not Travel" list.

## Blocking issues

- 21-1: MEA's "four-level" risk classification, the 15 September 2026 codification, and the dated "Do Not Travel" list are China's MFA advisory system; MEA's own advisories are not described this way.
- 21-5: the 6-month to 3-year travel ban for overseas-job scams is China's 反电信网络诈骗法 art. 36; India has no equivalent.
- 21-7: dangling reference to "the same two emergency hotlines listed"; the chapter contains no hotline number.
- 21-9: the 15-day/90-day agency registration duty and its prohibited-activity list do not exist in Indian law.
- 21-10: the rupee penalty bands (5,000-₹1,42,100; 10,000-₹7,10,500) are converted Chinese immigration penalties.
- 21-13: the customs and quarantine rules and the ₹71,100 fine are PRC customs (MARA/GAC), not India's Plant Quarantine Order 2003 / CBIC rules.

Verdict: FAIL
