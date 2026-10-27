# Spec Delta: Monsoon Material

## Purpose
Defines the ground plane, the five-rung glass tint ladder, and the bounded blur budget that allow glass content surfaces to stay legible and cheap on a reading site.

## ADDED Requirements

### Requirement: Ground plane behind every page
The system SHALL render a fixed, non-interactive ground plane behind page content with three low-alpha accent pools (11–16% opacity), a grain layer at no more than 3% opacity, and a slow drift animation that is disabled under `prefers-reduced-motion`.

#### Scenario: Rendering the ground in the default dark palette
- **WHEN** any page loads with `data-theme="dark"` and `data-palette="midnight"`
- **THEN** a fixed `.monsoon-ground` layer renders behind the content with the Neel base and its accent pools, without capturing pointer events or appearing in the accessibility tree

#### Scenario: Reader prefers reduced motion
- **WHEN** the operating system reports `prefers-reduced-motion: reduce`
- **THEN** the ground renders as a static plane with no drift animation

### Requirement: Ascending glass tint ladder
The system SHALL expose five glass tint tokens whose background opacity strictly increases — `--glass-ultra-thin` 45%, `--glass-thin` 55%, `--glass-regular` 63%, `--glass-thick` 72%, `--glass-opaque` 94% — so that a surface's tint can be named by thickness rather than guessed.

#### Scenario: Selecting a reading surface tint
- **WHEN** a content card needs a glass background
- **THEN** it uses `--glass-thick`, and the resulting composited text contrast is at least 7:1 against every palette's ground

### Requirement: Blur budget for in-view cards
The system SHALL apply `backdrop-filter` blur to at most three tip cards at a time, only while they intersect the viewport, and SHALL leave every other card opaque-tinted.

#### Scenario: Scrolling a long chapter
- **WHEN** a reader scrolls through a chapter with 47 tips
- **THEN** no more than three tip cards carry `.is-glassy` at any moment, and the oldest is evicted when a fourth comes into view

#### Scenario: Reader reduces transparency
- **WHEN** the reader enables Reduce transparency, or the operating system prefers reduced transparency
- **THEN** no tip card receives blur and every card renders with the opaque tint fallback
