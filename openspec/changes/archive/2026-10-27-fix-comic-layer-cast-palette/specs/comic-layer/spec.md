# Spec Delta: comic-layer

## MODIFIED Requirements

### Requirement: Original SVG Character Cast
The system SHALL render original characters Plus (Peacock `#3FC9B4`) and Minus (Marigold `#EFAF3E`) in pure inline SVG with 3px ink outlines (`#04110F`), CSS breathing and blinking, and squash-and-stretch reactions, keeping total character SVG payload under 25KB.

#### Scenario: Displaying cast reactions
- **WHEN** a reader marks a tip as read or saves a pick
- **THEN** the character component renders the corresponding mood with a squash-and-stretch reaction without raster images or external animation libraries

#### Scenario: Keeping the cast inside the palette
- **WHEN** the reader switches between Neel, Monsoon, Chandni and Kora
- **THEN** Plus keeps the peacock accent and Minus the marigold accent from `src/styles/tokens.css`, and neither character introduces a colour absent from the four palettes
