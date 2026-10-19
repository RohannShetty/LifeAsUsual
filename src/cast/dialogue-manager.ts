import dialogueData from '../../data/dialogue.json';

export type DialogueTrigger =
  | 'first_visit'
  | 'daily_win'
  | 'mark_read'
  | 'pick_saved'
  | 'chapter_complete'
  | 'streak'
  | 'empty_picks'
  | 'not_found';

export type CastSpeaker = 'Plus' | 'Minus';
export type CastMood = 'neutral' | 'happy' | 'surprised' | 'smug' | 'sleepy' | 'cheering';

export interface DialogueLine {
  speaker: CastSpeaker;
  text: string;
  mood?: CastMood;
}

const BANNED_WORDS = [
  'should',
  'must',
  'cure',
  'guarantee',
  'doctor',
  'lawyer',
  'medicine',
];

const CJK_REGEX = /[\u4e00-\u9fa5]/;
const DIGIT_REGEX = /\d/;

/**
 * Validates a single dialogue line against Section 6 & 8 rules:
 * - Max 12 words per bubble
 * - Zero digits (no Arabic numerals)
 * - None of the banned words
 * - Zero CJK characters
 */
export function lintDialogueText(text: string): { valid: boolean; error?: string } {
  if (CJK_REGEX.test(text)) {
    return { valid: false, error: 'Contains CJK characters' };
  }

  if (DIGIT_REGEX.test(text)) {
    return { valid: false, error: 'Contains digits / numbers' };
  }

  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length > 12) {
    return { valid: false, error: `Exceeds 12 words (found ${words.length})` };
  }

  const lower = text.toLowerCase();
  for (const banned of BANNED_WORDS) {
    const wordPattern = new RegExp(`\\b${banned}\\b`, 'i');
    if (wordPattern.test(lower)) {
      return { valid: false, error: `Contains banned word: "${banned}"` };
    }
  }

  return { valid: true };
}

/**
 * Validates the entire dialogue dataset at build/runtime.
 */
export function lintAllDialogue(): { allValid: boolean; errors: string[] } {
  const errors: string[] = [];

  for (const [trigger, groups] of Object.entries(dialogueData)) {
    for (const group of groups) {
      for (const line of group.lines) {
        const result = lintDialogueText(line.text);
        if (!result.valid) {
          errors.push(`[${trigger}] "${line.text}": ${result.error}`);
        }
      }
    }
  }

  return {
    allValid: errors.length === 0,
    errors,
  };
}

/**
 * Selects a dialogue sequence deterministically or by seed/index
 */
export function getDialogueLines(trigger: DialogueTrigger, variantIndex = 0): DialogueLine[] {
  const groups = dialogueData[trigger];
  if (!groups || groups.length === 0) {
    return [
      {
        speaker: 'Plus',
        text: 'Keep on going!',
        mood: 'happy',
      },
    ];
  }

  const group = groups[variantIndex % groups.length];
  return group.lines.map((l) => {
    // Derive natural mood based on speaker & trigger
    let mood: CastMood = 'neutral';
    if (trigger === 'chapter_complete') mood = 'cheering';
    else if (trigger === 'daily_win' || trigger === 'pick_saved') mood = l.speaker === 'Plus' ? 'happy' : 'smug';
    else if (trigger === 'streak') mood = 'happy';
    else if (trigger === 'not_found') mood = 'surprised';

    return {
      speaker: l.speaker as CastSpeaker,
      text: l.text,
      mood,
    };
  });
}
