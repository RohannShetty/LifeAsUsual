# Spec Delta

## Purpose

Defines the site's brass ornament language — one hairline ladder, an arch crown, a completion seal — and the cap that keeps decoration measurable, quiet, and out of the reading column.

## ADDED Requirements

### Requirement: One brass hairline ladder

The system SHALL draw every ornament line from a single three-rung brass ladder — hairline (1px), rule (2px), and bead (a 5px disc) — derived from `--color-brass`, and SHALL never apply brass to body text.

#### Scenario: Drawing an ornament on any surface
- **WHEN** ornament is drawn on a card, panel, or page edge
- **THEN** its stroke comes from the hairline, rule, or bead rung, at most one rung is used per edge, and no additional line weight is introduced

#### Scenario: Brass is measured against the reading text
- **WHEN** a palette is active and body text renders
- **THEN** no prose character, title, or label takes its colour from brass, and the reading text keeps the contrast floor set by the glass specs

### Requirement: Ornament cap and placement

The system SHALL place at most two drawn motifs per page, and SHALL place no motif, fill, halftone, or ink outline inside the reading column's prose or between tip cards.

#### Scenario: A page carrying two motifs
- **WHEN** a chapter page renders its arch crown and its completion seal
- **THEN** both are present and no third drawn motif appears anywhere on that page

#### Scenario: Attempting ornament inside the reading column
- **WHEN** a tip card, its evidence block, or its source list renders
- **THEN** it carries no ornament beyond the existing fold rule and the bead on the review chip, and no jali or repeating pattern is added to the column

### Requirement: Arch crown on the daily panel

The system SHALL give the home page's daily quick-win panel a cusped arch top drawn in CSS geometry, preserving the panel's current padding, first-line clearance, and focus-ring visibility at every supported width.

#### Scenario: Rendering the arch at 360px
- **WHEN** the home page renders at 360px width with text size at 130%
- **THEN** the arch does not clip the headline, the badges, or the call-to-action, and the page keeps zero horizontal overflow

#### Scenario: Focusing inside the arch
- **WHEN** a keyboard reader focuses the panel's call-to-action
- **THEN** the focus ring is fully visible and is not clipped by the arch geometry

### Requirement: Brass seal at chapter completion

The system SHALL render one decorative brass seal at the end of a chapter — concentric hairline rings, the chapter numeral, radial ticks — marked `aria-hidden`, with no text, advice, or statistic in it.

#### Scenario: Completing an ordinary chapter
- **WHEN** a reader reaches the end of a non-calm chapter
- **THEN** the seal settles in over no more than 400ms and the cast celebration renders above it

#### Scenario: Completing a calm chapter
- **WHEN** a reader reaches the end of a chapter in Calm Mode
- **THEN** the seal renders still and no cast, bubble, SFX sticker, or particle burst appears

#### Scenario: Comic effects switched off
- **WHEN** the reader disables Comic effects
- **THEN** the seal still renders, because it is material and not cast

### Requirement: Ornament honours quiet modes

The system SHALL render ornament as static geometry under `prefers-reduced-motion: reduce` and SHALL keep every ornament non-interactive and absent from the accessibility tree.

#### Scenario: Reader prefers reduced motion
- **WHEN** the operating system reports `prefers-reduced-motion: reduce`
- **THEN** the seal and the arch draw with no transition and the kolam loop renders at its current trace without animating

#### Scenario: Screen reader on an ornamented page
- **WHEN** a screen reader walks a page carrying an arch and a seal
- **THEN** neither is announced, and the reading order is unchanged from the same page without ornament
