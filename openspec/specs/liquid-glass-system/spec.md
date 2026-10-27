# liquid-glass-system Specification

## Purpose
Defines the visual materials, optical lighting physics, anti-banding dither, and accessibility fallback states for Apple-style liquid glass surfaces.

## Requirements

### Requirement: Specular highlight and directional rim lighting
The system SHALL style liquid glass surfaces with a directional 135-degree rim light (35% white top-left fading to 6% bottom-right) and a 135-degree soft specular sheen (25% to 0% opacity) on interactive containers.

#### Scenario: Rendering liquid glass in dark mode
- **WHEN** a liquid glass surface renders under the default dark theme
- **THEN** it displays the directional rim highlight, specular gradient, and deep soft drop shadow with 24px backdrop blur

### Requirement: Accessibility transparency reduction fallback
The system SHALL immediately switch liquid glass surfaces to high-contrast opaque background fills when either the operating system prefers reduced transparency or the user toggles the Reduce Transparency reading setting.

#### Scenario: Reader enables Reduce Transparency in settings
- **WHEN** the reader checks "Reduce Transparency" in the Reading Settings sheet
- **THEN** the root element receives data-reduce-transparency="true" and all liquid-glass elements immediately render with solid opaque fills and no blur filters

### Requirement: Anti-banding dither treatment
The system SHALL apply a faint noise dither layer (at most 2% opacity) on dark gradient surfaces to eliminate visible color banding on high-contrast OLED and mobile displays.

#### Scenario: Displaying gradient panels on mobile screens
- **WHEN** the daily quick win panel or floating glass nav renders on an OLED display
- **THEN** color gradations appear smooth and continuous without visible step banding

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
