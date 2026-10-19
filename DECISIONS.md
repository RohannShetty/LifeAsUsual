# Architecture & Project Decisions

## ADR-001: Hybrid Translation Strategy (Option 2)
- **Context:** Translating ~600k–700k English words across 34 chapters (765 tips) from scratch requires significant API spend and execution time.
- **Decision:** Ingest the CC BY 4.0 English dataset from `parveen0029/The-Evidence-Based-Life` containing all 765 tips matching the chapter structure. Apply normalization, glossary consistency checks, and a humanizing refinement pass to fix stripped citations and enforce direct second-person style.
- **Consequences:** Saves 8–12 hours of API run time and eliminates unnecessary LLM translation cost while retaining strict alignment with the Chinese source.

## ADR-002: Humanizer Integration
- **Context:** Machine/LLM-generated translations frequently introduce AI tells (staged run-ups, forced triads, dramatic one-line closers).
- **Decision:** Install `blader/humanizer` into `.agents/skills/humanizer/SKILL.md`. Enforce that humanizer edits apply strictly to prose rhythm and natural phrasing, leaving numbers, percentages, units, currency (¥ RMB), DOIs, and URLs unchanged.
- **Consequences:** Consistent, natural voice across tips without violating faithful translation non-negotiables.

## ADR-003: Typeface Roles
- **Context:** The site requires a distinct reading serif, a clean UI sans, and a comic display font.
- **Decision:** Self-host:
  - Reading serif: **Literata** (body 17–18px, line-height 1.7, 60–68 char measure).
  - UI sans: **Bricolage Grotesque** (navigation, chips, metadata).
  - Comic display: **Lilita One** (<25KB, Latin subset) strictly for SFX stickers, speech bubbles, splash titles, and Home headline.
- **Consequences:** Zero external font dependencies, no layout shift (`font-display: swap`), strict typography discipline.

## ADR-004: Liquid Glass vs. Fake Glass Performance Boundary
- **Context:** Applying `backdrop-filter: blur(24px)` across 765 scrolling tip cards causes severe GPU lag and breaks 60fps mobile budgets.
- **Decision:** Real Liquid Glass (`backdrop-filter: blur(24px) saturate(180%) brightness(1.06)`) is restricted to floating nav bar, sheets, and modal dialogs (maximum 3 active surfaces). Tip cards use opaque "fake glass" backgrounds with static lighting highlights to preserve 60fps and guarantee $\ge 7:1$ text contrast.
- **Consequences:** Flawless mobile scroll performance with near-zero CLS.

## ADR-005: Initial Calm Mode Chapters
- **Context:** The comic cast and particle celebrations must not appear on chapters covering heavy topics.
- **Decision:** Chapters 1, 13, 16, 25, 28, 29, 30, and 33 run in Calm Mode (`data/calm-chapters.json`), disabling Plus & Minus, SFX stickers, and particle bursts in favor of a quiet glow.
- **Consequences:** Respectful reader experience on sensitive topics.
