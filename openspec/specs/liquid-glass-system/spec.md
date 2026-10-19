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
