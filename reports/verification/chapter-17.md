# Verification: Chapter 17 - Elderly at Home

Verifier: Independent verification agent
Date: 21 October 2026
Access date: 21 October 2026
Chapter file: data/en-in/chapters/17-elderly-at-home.json
Manifest status: data/en-in/manifest.json lists chapter 17 as status draft, 13 tips, verifier null, verifiedAt null, humanReview pending, openIssues ["Independent verification pending"]. Read only; nothing in the chapter, manifest or source tree was edited.

## Method

The source pack marks 17-5, 17-7 and 17-9 as high-risk; all three were checked against the Indian routes they now cite. Because the remaining tips are the ones where a Chinese elder-care regime is easiest to carry over, 17-1, 17-2, 17-6, 17-8, 17-11, 17-12 and 17-13 were checked as well. Two tips were spot-checked for invented schemes, numbers or hotlines (17-3, 17-10).

Official sites were probed on 21 October 2026 with curl and a desktop browser user-agent from C:/Users/$hetty/AppData/Local/Temp/verif. Reachable: esic.gov.in, rbi.org.in, wcd.gov.in. mohfw.gov.in and indiacode.nic.in returned HTTP 403 to the fetcher and were read only through curl with a browser user-agent (partial access). cghs.gov.in did not answer, pmjay.gov.in failed to fetch, npcbvi.gov.in failed DNS (EAI_AGAIN), and indiapost.gov.in returned its navigation shell without the Senior Citizens' Savings Scheme subsection. In the JSON, 17-11 and 17-12 cite gov.cn, flk.npc.gov.cn and the 12333 hotline; those are Chinese official sources, not Indian ones.

Pass means: the claim is supported by the Indian instrument or authority it cites. A claim that reproduces the Chinese Civil Code, a Chinese provincial statute or a Chinese regulator's rule fails even when the surrounding advice is sensible.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 17-1 | A lucid elder can designate a future guardian in writing, and a court appoints one if none is named | No Indian instrument found | Whole tip | 2026-10-21 | no | This is the Chinese Civil Code art. 33 voluntary guardianship with court default. India has no general adult guardianship statute; the Guardians and Wards Act 1890 covers minors, and the Mental Healthcare Act 2017 s.14 provides a nominated representative only in mental illness. The cited MoSJE/MoHFW sources support none of it |
| 17-2 | There are six types of will, a handwritten will must be wholly in the testator's hand, and since 2021 a notarised will no longer takes priority | Indian Succession Act 1925 | s.63 | 2026-10-21 | no | The six-type taxonomy and the 2021 abolition of notarial priority are Chinese Civil Code arts. 1134-1139. Indian law requires a will to be signed and attested by two witnesses (s.63) and never gave a notarised will statutory priority. Advice is wrong for India |
| 17-3 | Keep the elder's money in a separate account with two-person approval for large withdrawals | No instrument needed | Practical | 2026-10-21 | yes | Spot-check: sound practice; the bank's own mandate rules govern, and the tip does not claim a statute |
| 17-4 | A ready-made phrase to deflect unwanted offers | No instrument needed | Practical | 2026-10-21 | yes | No legal or numeric claim; nothing invented |
| 17-5 | No regulator exists for a prepaid senior-care deposit; safe routes are a registered facility with a written contract, the Senior Citizens' Savings Scheme and the MWPSC Act 2007 | MWPSC Act 2007; SCSS; RBI; SEBI | Whole tip | 2026-10-21 | yes | Rewrite is sound: MWPSC Act 2007 provides maintenance and a tribunal; SCSS is a government small-saving product; RBI and SEBI do warn against unauthorised deposit and investment schemes. No invented scheme name |
| 17-6 | Reverse mortgage insurance offered by insurers is the only acceptable "housing-for-pension" route; avoid all other schemes | RBI; IRDAI; chapter sources | Whole tip | 2026-10-21 | no | The tip still describes the Chinese reverse-mortgage pilot: "housing reverse mortgage insurance ... pilot phase", the 6/8/10 per cent loan-to-value ladder, and "the former CBIRC, merged into the National Financial Regulatory Administration". CBIRC/NFRA are Chinese regulators and no such Indian pilot exists. The retained wording is source-edition |
| 17-7 | No single home-care benefit; routes are PM-JAY, ESIC, state palliative care, and the district disability office for assessment and certificate | NHA/PM-JAY; ESIC; DEPwD; MoHFW | Whole tip | 2026-10-21 | yes | ESIC medical benefit verified on esic.gov.in; RPwD Act 2016 certificate route is real; the tip is honest that there is no single benefit. pmjay.gov.in failed to fetch, so PM-JAY is verified only by scheme name |
| 17-8 | Use an electric alternating-pressure air mattress; turn regularly; check bony areas daily | No instrument needed | Clinical | 2026-10-21 | yes | Pressure-ulcer prevention advice is standard |
| 17-8 | Air mattresses "start at a few hundred rupees"; caveat cites long-term care insurance | Chapter cost/caveat text | Cost | 2026-10-21 | no | An electric alternating-pressure mattress is not available at a few hundred rupees in India (entry models run into the thousands). The caveat's long-term-care insurance reference is the Chinese LTCI pilot, not an Indian product |
| 17-9 | NPCBVI funds free cataract surgery at government hospitals; a government hospital gives a free intraocular lens | NPCBVI; MoHFW | Programme | 2026-10-21 | yes | npcbvi.gov.in failed DNS on 2026-10-21, so the page could not be read; the programme and free cataract surgery are uncontroversial and corroborated in MoHFW material. No legal claim, so the access failure does not block |
| 17-10 | Hold a dog leash in the palm, not around the hand or wrist; keep the lead short | No instrument needed | Practical | 2026-10-21 | yes | Spot-check: injury-prevention advice, nothing invented |
| 17-11 | Verify "administrative filing with civil affairs authorities"; security deposits capped at 12 months' bed fees in dedicated bank escrow | No Indian instrument | Whole tip | 2026-10-21 | no | This is the Chinese 养老机构管理办法 regime: filing with civil affairs, a 12-month deposit cap, escrow accounts, fines, and a 2024 seven-ministry document. India's elder-care homes are regulated by state rules and the RPwD Act 2016 for institutions for persons with disabilities; no central filing or deposit cap exists in these terms |
| 17-12 | An only child may claim statutory filial care leave under provincial statutes, with proof of hospitalisation | Henan Art. 29; Fujian Arts. 27/70; flk.npc.gov.cn | Whole tip | 2026-10-21 | no | The entire tip is Chinese: 20 days in Henan, 10 in Fujian, 15 in Guangdong, the 12333 hotline and flk.npc.gov.cn. India has no statutory filial care leave; only some state service rules and company policies give family-care leave. This is the source pack's own highest-risk item and it was not rewritten |
| 17-13 | Visit a memory clinic or neurology department to exclude reversible causes; tests are covered under standard health insurance | National Health Commission 2024; gov.cn | Whole tip | 2026-10-21 | no | Clinical advice is sound, but the cited authority is China's National Health Commission 2024 dementia action plan and the claim that tests are "covered under standard health insurance" describes Chinese medical insurance. India has no standard health insurance; cover depends on ESIC/CGHS/PM-JAY/state schemes |

## Banned-term check

- JSON: 0 banned terms. None of China, Chinese, mainland, RMB, yuan, hukou, yibao, dibao or CNY appears. The source-edition vocabulary is present in other forms: "provincial", "CBIRC", "National Financial Regulatory Administration", "civil affairs", "gov.cn", "flk.npc", "12333" (17-6, 17-11, 17-12, 17-13).
- Rendered page: 0 banned terms in the literal list, but the same source-edition terms would render.

## Safety and editorial check

- No unsupported high-risk claim: FAIL. 17-12 reproduces Chinese provincial statutes as if an Indian only child could claim them; 17-11, 17-13 and 17-6 describe Chinese regulators and rules as current Indian practice.
- No invented scheme, number or hotline: FAIL. 17-12 asserts the 12333 hotline for an Indian claim; 17-6 asserts a reverse-mortgage "pilot phase" with a 6/8/10 per cent ladder that does not exist in India; 17-8 asserts a few-hundred-rupee electric air mattress.
- No direct equivalent recorded where needed: FAIL. 17-1, 17-2 and 17-12 imply Indian equivalents for voluntary guardianship, the Chinese will taxonomy and filial care leave.
- Caveats retained: PASS on substance; the caveats carry the same source-edition defects (17-6 LTCI, 17-8 mattress price).

## Blocking issues

- 17-1: Chinese Civil Code art. 33 voluntary guardianship presented as Indian law; no Indian statute supports it, and the cited MoSJE/MoHFW sources do not.
- 17-2: "Six types of will", "handwritten will entirely by the testator" and "since 2021 notarised wills no longer take priority" are Chinese Civil Code rules; Indian Succession Act 1925 s.63 (two attesting witnesses) is the law that applies.
- 17-6: reverse-mortgage "insurance ... pilot phase", the 6/8/10 per cent ladder, and CBIRC/NFRA are Chinese; no Indian instrument or pilot.
- 17-8: cost claim ("start at a few hundred rupees") is not credible for an electric alternating-pressure mattress in India; caveat invokes Chinese long-term care insurance.
- 17-11: Chinese nursing-home filing, 12-month deposit cap and escrow regime presented as Indian requirements; no Indian equivalent.
- 17-12: whole tip is Chinese provincial filial-care leave (Henan 20 days, Fujian 10, Guangdong 15) plus the 12333 hotline and flk.npc.gov.cn; India has no statutory filial care leave.
- 17-13: cites China's National Health Commission 2024 dementia plan and claims tests are "covered under standard health insurance"; no such Indian scheme.

Verdict: FAIL
