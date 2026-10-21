# Verification: Chapter 29 - After a Major Blow

Verifier: Independent verifier (AI), delegated verification pass
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/29-after-a-major-blow.json
Manifest status: status "draft"; verifier null; verifiedAt null; bannedTerms 0 (data/en-in/manifest.json, generated 2026-10-21)

## Method

I read the chapter JSON and reports/source-packs/chapter-29.md. This is a literature-based chapter, so I checked every cited study through the Crossref API (api.crossref.org, HTTP 200) and compared the effect size in the tip with the abstract-level finding. The two helpline claims were checked against government sites: wcd.gov.in lists "Child Helpline Toll free No. - 1098" on its home page; telemanas.mohfw.gov.in did not resolve for the fetch tool, 112.gov.in was unreachable and mha.gov.in returned HTTP 403, so the 14416 number was confirmed instead from dhubri-mch.assam.gov.in (a Government of Assam hospital service page) and from the DGHS National Mental Health Programme page. Insurance Act s.45 was checked through consumer-commission judgments that quote it, because indiacode.nic.in returns HTTP 403.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 29-1 | Heart-attack risk about 21.1 times higher on the first day of bereavement; call 112 for chest pain | Mostofsky et al. 2012, Circulation | - | 2026-10-21 | yes | The 21.1x day-one risk is the published figure. 112 is the correct ERSS number. |
| 29-2 | Suicide risk about 12.6 times higher in the week after a cancer diagnosis | Fang et al. 2012, NEJM | - | 2026-10-21 | yes | Matches the published immediate post-diagnosis risk. |
| 29-3 | Unemployment carries roughly 60% higher mortality; keep sleep, cover and a search routine | Roelfs et al. 2011, Soc Sci Med - DOI confirmed by Crossref | - | 2026-10-21 | yes | Meta-analysis HR 1.63, i.e. about 60% higher; correct. |
| 29-4 | Suicide-bereaved spouses have about 80% higher risk of a mental disorder within five years | Erlangsen et al. 2017, JAMA Psychiatry - DOI confirmed | - | 2026-10-21 | yes | Correct direction and magnitude. |
| 29-5 | About 40% higher mortality in the first six months of widowhood | Moon et al. 2011, PLoS ONE | - | 2026-10-21 | yes | The meta-analysis reports about a 41% increase; correct. |
| 29-6 | Living alone raises cardiovascular risk; arrange a neighbour with a key, an outreach list and phone contacts | Udell et al. 2012, Arch Intern Med | - | 2026-10-21 | yes | Correct; the practical steps are proportionate. |
| 29-7 | Children bereaved before 18 have about 50% higher early-adult mortality; tell them the truth and let them attend | Li et al. 2014, PLoS Medicine | - | 2026-10-21 | yes | Correct. |
| 29-8 | About 1 in 10 bereaved adults develop prolonged grief after six months | Lundorff et al. 2017, J Affect Disord | - | 2026-10-21 | yes | Pooled prevalence 9.8%; correct. |
| 29-9 | Do not buy grief counselling immediately; universal counselling gives little benefit and fades | Currier et al. 2008, Psychol Bull | - | 2026-10-21 | yes | The review supports a null-to-small effect for universal counselling; the tip is correctly conditional on 29-8. |
| 29-10 | Divorce or separation raises premature-death risk; do not drop health cover or turn to alcohol | Sbarra et al. 2011, Perspect Psychol Sci | - | 2026-10-21 | yes | The 6.5-million, 11-country framing matches the meta-analysis. |
| 29-11 | Tele-MANAS 14416 for mental health; Childline 1098 for children | wcd.gov.in; dhubri-mch.assam.gov.in; telemanas.mohfw.gov.in | - | 2026-10-21 | yes | 1098 is listed by WCD as the Child Helpline. 14416 is confirmed by a Government of Assam hospital page and the DGHS NMHP page; the dedicated Tele-MANAS host did not resolve. Note: 1098 has been discussed for integration with ERSS-112, so the chapter should say the number is being merged rather than imply it is permanent. |
| 29-12 | Postpone irreversible major decisions for three months after a tragedy | Author's experience (marked as such) | - | 2026-10-21 | yes | No literature is claimed; the tip says so. The evidence grade B is generous for an unsourced rule of thumb but the sourcing is honest. |
| 29-13 | Suicide exclusion in the policy's initial period; s.45 of the Insurance Act bars the insurer from calling a policy in question after three years | Insurance Act 1938 s.45; consumer-commission judgments | s.45 | 2026-10-21 | yes | indiacode.nic.in 403. Judgments quoting s.45 confirm the three-year bar and the fraud exception. The ESIC self-harm point is consistent with employment-injury doctrine. |
| 29-14 | Do not rely on one-off debriefing; if symptoms persist beyond a month, seek trauma-focused psychotherapy | Lewis et al. 2020, Eur J Psychotraumatol | - | 2026-10-21 | yes | Correct: single-session debriefing is not recommended; trauma-focused CBT/EMDR are. |

## Banned-term check

- JSON: 0 banned terms; 0 China-specific vocabulary hits; 0 rupee and 0 yen signs. This is the cleanest chapter of the eleven.
- Rendered page: not rebuilt in this pass; JSON is the content source.

## Safety and editorial check

- No unsupported high-risk claim: none found. Effect sizes match the cited studies; the legal claim matches s.45.
- No invented scheme, number or hotline: no invented scheme. Both hotlines exist; 14416 was confirmed off the primary host because that host was down.
- No direct equivalent recorded where needed: not applicable - the chapter is international evidence plus Indian helplines and insurance law.
- Caveats retained: 29-9 is correctly made conditional on 29-8; 29-13 keeps the fraud exception and the initial-period exclusion.

## Blocking issues

None.

Non-blocking notes for the editor: 29-11 should mention that 1098 is being integrated with ERSS-112; 29-12 is graded B on author experience; 29-11 cites telemanas.mohfw.gov.in, which was unreachable on the access date.

Verdict: PASS
