# Spec Delta

## MODIFIED Requirements

### Requirement: 765-Bead Inline SVG Reading Map

The system SHALL render an interactive reading map with 765 beads placed on a build-time kolam lattice — a dot grid under one looping line — where beads light when read, the loop traces the read frontier, and every bead keeps click-to-jump navigation and a 44px touch target.

#### Scenario: Interacting with reading map beads
- **WHEN** a reader clicks an individual bead on the reading map
- **THEN** the browser smoothly navigates directly to the target chapter and scrolls to that specific tip anchor

#### Scenario: Reading the map before any progress
- **WHEN** the progress page renders with no tips read
- **THEN** all 765 beads render unlit, the loop shows no traced segment, and the counter reads 0 of 765

#### Scenario: Tracing the kolam loop as beads light
- **WHEN** a reader marks tips read across several chapters
- **THEN** the loop's traced length grows with the read count, beads behind the frontier are filled, and no bead position moves between visits at the same viewport width

#### Scenario: Geometry is fixed at build time
- **WHEN** the map renders with JavaScript blocked
- **THEN** the lattice, the loop, and all 765 bead anchors are present and navigable, and only the lit state is missing
