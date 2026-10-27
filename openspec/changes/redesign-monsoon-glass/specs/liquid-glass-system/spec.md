# Spec Delta: liquid-glass-system

## Purpose
Extends the material system from chrome-only glass to content glass with a bounded blur budget, without weakening the contrast or reduced-transparency guarantees.

## ADDED Requirements

### Requirement: Glass content surfaces with bounded cost
The system SHALL permit `backdrop-filter` on reading content only through the in-view blur budget, and SHALL keep every other content surface on an opaque-tinted material.

#### Scenario: Comparing chrome and content glass
- **WHEN** a chapter page renders with its sticky header and bottom navigation
- **THEN** the chrome keeps its 24px blur, tip cards take 16px blur only while in view (maximum three), and no glass surface is nested inside another glass surface

### Requirement: Contrast floor on tinted reading surfaces
The system SHALL keep reading text at no less than 7:1 contrast against its composited card background on all four palettes, measured against the resolved tint rather than the ground.

#### Scenario: Checking contrast on the light palettes
- **WHEN** the reader selects Chandni or Kora and opens a chapter
- **THEN** title and body text measure at least 7:1 against the 72% white card tint, and the ground's accent pools remain decorative only

### Requirement: Interface face carries the Latin script, not the rupee sign
The system SHALL declare the interface face as Mukta with a platform UI fallback for glyphs the subset lacks, and SHALL NOT ship a webfont whose only purpose is an unsupported glyph.

#### Scenario: Rendering a rupee amount
- **WHEN** a page contains `₹` inside interface text
- **THEN** the glyph renders from the platform UI fallback without any additional webfont request
