# Design: Monsoon Glass

## Context

The reader wants glass, motion and an Indian identity, and also wants the evidence block out of the way. Three earlier decisions argued the other way: ADR-004 (chrome-only blur), ADR-007 (opaque paper cards) and ADR-008 (Bricolage for interface text). Each was made for a real reason — 47 blurred cards cannot hold 60 fps on a throttled phone; the rupee glyph was assumed to need Bricolage. Both reasons turn out to be solvable, so this change supersedes them rather than ignoring them.

## Decisions

### Glass on content, made thick instead of cheap
A 52–62% tint over a moving ground either washes the type out or forces the ground to stay still. The chosen rung is `--glass-thick`: 72% of the page ground, plus a hairline and a lit top edge, which measures 15.98:1 (Neel), 16.33:1 (Monsoon), 18.35:1 (Chandni) and 17.48:1 (Kora) for the reading text. Users approved the light 72% tint knowingly, with the measure capped at 62ch so the glass never becomes a window on a busy ground.

### Blur is a budget enforced by code
`glass-cards.ts` watches `.tip-card`, adds `.is-glassy` to at most three intersecting cards and evicts the oldest when a fourth arrives. It refuses to run under `prefers-reduced-transparency` or the Reduce transparency setting. Cards never nest glass inside glass, and chrome keeps its own 24 px blur.

### Offscreen work is skipped, not deferred by hand
`content-visibility: auto` with `contain-intrinsic-size: auto 420px` removes layout and paint for cards outside the viewport. Measured effect on throttled mobile: Style & Layout 2,022 ms → 901 ms; Lighthouse performance 88 → 91.

### The evidence fold is a reader feature, not a drawer
Collapsed state is the default. The handle is a single 44 px button with a brass rule, three dots and a chevron; open state animates `grid-template-rows` from `0fr` to `1fr` over 400 ms with a 40/80 ms stagger on the two sections. `inert` is applied to the closed body so its links and text stay out of the tab order, `aria-expanded` and `aria-controls` stay in step, Escape closes and returns focus, and open cards are remembered in `sessionStorage` (`htlb_notes_open_v1`, capped at 40) — never in the persistent ledger, which is reserved for reading progress. With JavaScript off, the CSS only collapses when `html.js` is present, so the notes render open and the handle is hidden.

### Palette retint without breaking saved state
`data-palette` values stay `midnight`, `monsoon`, `pearl` and `ivory`, because saved settings and the test suite key on them. The visible names become Neel, Monsoon, Chandni and Kora; grounds and accents change under the same IDs. Brass and Kumkum are new tokens used only for rules, seals and outlines — never as text on tint.

### Mukta replaces Bricolage, and Bricolage leaves
Mukta (Ek Type) is the interface face at 400/700/800. Bricolage was kept as a rupee fallback, but inspection of its shipped subset showed no U+20B9 at all: the browser downloaded 76,888 B to discover that. The fallback is now the platform UI font declared after Mukta, no webfont is fetched for `₹`, and the 77 KB is gone. Font payload: 221,088 B → 207,308 B.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Blur on content drops frames | Cap of 3 in-view cards, eviction, opaque fallback, measured at 91 mobile performance |
| Ground moving behind text hurts legibility | 72% tint, 62ch measure, contrast floor measured on all four palettes, decor at 11–16% alpha |
| Fold hides evidence from screen readers | `aria-expanded`, `inert` when closed, visible handle label, open-by-default without JS |
| Palette retint breaks saved preferences | `data-palette` IDs unchanged; only values move |
| `content-visibility` changes scroll height | `contain-intrinsic-size: auto` reserves a measured tip height; CLS 0.041 |
| Removing Bricolage changes `₹` rendering | Falls back to platform UI font; no third-party request; verified on chapter 02 (36 instances) |

## Migration

No data migration. Saved settings keep working because palette IDs and the settings key (`htlb_settings_v1`) are unchanged. Readers who had Reduce transparency on keep opaque cards.
