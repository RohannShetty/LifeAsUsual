# Verification: Chapter 13 - Emergencies: What to Do First

Verifier: Independent verification agent (delegated)
Date: 2026-10-21
Access date: 2026-10-21
Chapter file: data/en-in/chapters/13-emergencies-what-to-do-first.json
Manifest status: draft, tier A, 48 tips, verifier null, humanReview pending, bannedTerms 0

## Method

Read `reports/source-packs/chapter-13.md` and the chapter JSON. The one HIGH-RISK tip in the
pack (13-39) was checked against the cited instruments, and every emergency number in the
chapter was counted mechanically across title, in-plain-words, benefit and
caveats. Access: telemanas.mohfw.gov.in did not load; mohfw.gov.in PDF/HTML pages were
partly reachable; gz.119.gov.cn (cited by 13-24), nx.jcy.gov.cn and Chinese municipal pages
were reachable but are not Indian authorities. Of the 48 tips, only 13-39 was rewritten
for India; the rest carry Chinese official sources, and **seven tips tell the reader to
dial 120**, which is not an Indian emergency number. India's single emergency number is
**112** (ERSS); 100/101/102 still work in places, 120 does not.

## Claim checks

| Tip | Claim | Source checked | Section | Accessed | Pass? | Note |
| --- | --- | --- | --- | --- | --- | --- |
| 13-2 | It is legal to walk away from an injured stranger; "calling 120 leaves your phone number on record" (2 occurrences) | ERSS 112; MV Act s.134A | — | 2026-10-21 | no | 120 is China's medical number. In India only 112 is the emergency number; the tip's own title says 112, so the body contradicts it. This is a safety-critical number error. |
| 13-3 | Stroke: call 112 immediately, do not drive yourself ("Calling 120 instead of driving") | ERSS 112 | — | 2026-10-21 | no | Same defect: title 112, body 120. |
| 13-4 | Sudden vision loss/double vision "warrant calling 120 for stroke suspicion" | ERSS 112 | — | 2026-10-21 | no | 120 in the title itself. |
| 13-8 | Aortic dissection: call 112 and describe a tearing pain ("When calling 120") | ERSS 112 | — | 2026-10-21 | no | 120 in the body. |
| 13-22 | Heat illness: move to shade, cool, "call 112 right away" ("while calling 120") | ERSS 112 | — | 2026-10-21 | no | 120 in the body. |
| 13-25 | Drowning: "call 112/120", then reach with a pole | ERSS 112 | — | 2026-10-21 | no | Two numbers offered, one of which does not exist in India. |
| 13-44 | Infant CPR: call 112 on speaker, 30 compressions then 2 breaths | ERSS 112 | — | 2026-10-21 | no | The body quotes Chinese MOH guidance to "perform 2 minutes of CPR before calling 120" (2 occurrences). |
| 13-37 | In a group fight, walk away and call 110; cites Criminal Procedure Law 2018 ss.62, 110, 111, 193 | NPC Criminal Procedure Law (China), nx.jcy.gov.cn | — | 2026-10-21 | no | 110 is not the Indian emergency number and the cited statute is China's. India: BNSS 2023 and BNS; call 112. |
| 13-39 | A person who helps at an accident has no automatic right to a compensation fund; MV Act s.134A protects Good Samaritans; BNSS victim-compensation scheme; legal aid under the Legal Services Authorities Act 1987; government hospitals must treat | MV Act 1988 s.134A; BNSS 2023; LSA Act 1987 | s.134A | 2026-10-21 | yes | s.134A was inserted by the MV (Amendment) Act 2019 and bars civil/criminal liability for a Good Samaritan; the no-automatic-fund statement is correct. This is the one properly Indian tip. |
| 13-1 | Spot check: collapse and no breathing — call 112 and send for an AED, start compressions | ERSS 112 | — | 2026-10-21 | yes | 112 correct; AED advice standard. |
| 13-16 | Seizure: protect the head, do not restrain, time it, nothing in the mouth; quoted CDC line "call 911" | US CDC | — | 2026-10-21 | no (quote) | Medical advice sound, but a retained quotation instructs Indian readers to dial 911. Bracketed replacement needed. |
| 13-6 | Acute angle-closure glaucoma is an emergency; cites a Wuhan lockdown delay study (241.84 h) | Chinese study | — | 2026-10-21 | no (source) | Medical point correct, evidence is a Chinese lockdown cohort; replace with Indian ophthalmology guidance. |
| 13-24 | Fire: stay low, test doors, no lifts; source is Guangzhou fire brigade | gz.119.gov.cn | — | 2026-10-21 | no (source) | Advice standard; the only source is a Chinese fire service. No 119 in the text, but the sourcing is source-edition residue. |
| 13-27 | "If lost or stranded in the Gobi Desert..." | US NPS | — | 2026-10-21 | no (editorial) | A Gobi Desert scenario and a US park service source in an India edition. |
| 13-38 | HIV PEP within 72 hours | Beijing municipal government page | — | 2026-10-21 | no (source) | The 72-hour window is correct internationally, but the citation is a Beijing page; India's NACO/ART-centre route is what the reader needs and is absent. |
| 13-42 | After sexual assault: call 112, do not wash or change clothes, forensic exam, time limits | ERSS 112 | — | 2026-10-21 | yes | 112 here is correct; the content matches Indian practice (hospital forensic exam, police complaint). Sources are Chinese prosecutors, but the number and procedure are right — sourcing still needs replacement. |
| 13-46 | Severe intoxication: recovery position, continuous observation, call emergency; cites a Taixing court award of Rs 14,76,200 | Chinese courts/health commissions | — | 2026-10-21 | no (source) | Medical advice sound; a Chinese damages award is used to support a liability point an Indian reader cannot use. |

## Banned-term check

- JSON: 0 literal banned terms. The Chinese origin is visible instead in the emergency
  numbers, the .cn sources and the "Gobi Desert" scenario.
- Rendered page: `dist/chapters/13-emergencies-what-to-do-first/index.html` contains
  **12 occurrences of "120" against 98 of "112"**; 0 banned terms from the list.

## Safety and editorial check

- No unsupported high-risk claim: **FAIL.** Seven tips tell the reader to dial a number
  that does not connect to emergency services in India, and 13-37 cites Chinese criminal
  procedure.
- No invented scheme, number or hotline: **FAIL.** 110 and 120 are presented as Indian
  numbers; 911 survives inside a quotation.
- No direct equivalent recorded where needed: **FAIL.** 13-39 is the only tip that names
  the Indian instrument; the rest name none, and the Chinese MOH/NPC sources remain.
- Caveats retained: 13-2's caveat is the location of two of the 120 occurrences, so the
  caveat itself carries the wrong number.

## Blocking issues

1. **13-2** — "calling 120 leaves your phone number on record" (twice). Replace with 112
   and state that 112 is the ERSS number.
2. **13-3** — "Calling 120 instead of driving".
3. **13-4** — title "all warrant calling 120 for stroke suspicion".
4. **13-8** — "When calling 120".
5. **13-22** — "while calling 120".
6. **13-25** — "call 112/120"; remove 120.
7. **13-44** — quoted Chinese MOH instruction to "perform 2 minutes of CPR before calling
   120" (twice); the quote must be replaced, not just the link.
8. **13-37** — "calling 110" plus Criminal Procedure Law 2018 ss.62/110/111/193 from
   nx.jcy.gov.cn. Replace with BNSS 2023 and 112.

Additional non-blocking but required before release: remove the 911 quotation (13-16),
replace the Chinese sources in 13-6, 13-24, 13-27, 13-38 and 13-46 with Indian or
international clinical sources, and replace the Gobi Desert scenario (13-27).

Verdict: FAIL

Blocking issues: 8 (13-2, 13-3, 13-4, 13-8, 13-22, 13-25, 13-37, 13-44). The chapter's
structure and clinical content are usable; the emergency numbers and the 13-37 legal frame
must be corrected first, and the source set re-based on Indian authorities.
