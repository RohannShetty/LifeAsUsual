# Spec Delta

## ADDED Requirements

### Requirement: Indicative INR reference is a ruled secondary annotation

The system SHALL present the indicative INR annotation beside an author's money figure as a ruled brass reference — tabular numerals, a hairline rule, an optical size no larger than 0.8em — and SHALL keep the author's figure first in reading order and in the DOM.

#### Scenario: Annotating an author figure
- **WHEN** a tip body contains a source-currency amount and the INR reference is enabled
- **THEN** the converted amount renders after the author's figure as a ruled reference, the author's figure is unchanged, and the annotation carries no currency symbol other than the rupee sign

#### Scenario: Reader hides the reference
- **WHEN** the reader turns the INR reference off in settings
- **THEN** no annotation is rendered or left hidden in the accessibility tree, and the author's figure still reads correctly on its own

#### Scenario: Reference inside a heading or citation
- **WHEN** an amount appears in a link, a code span, or a source citation
- **THEN** no annotation is inserted there, so a price is never presented as a second source
