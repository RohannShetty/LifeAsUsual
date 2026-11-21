import fs from 'node:fs';
import path from 'node:path';

export interface EditionStats {
  totalTips: number;
  chapters: number;
  veryHigh: number;
  evidenceGrades: { A: number; B: number; C: number };
}

interface RawChapter {
  tips: Array<{ valueTier?: string; evidenceGrade?: 'A' | 'B' | 'C' }>;
}

let cached: EditionStats | null = null;

/**
 * Edition totals derived from the reader data, never typed by hand.
 * A new chapter is a data change: pages, map counters and the build gate all
 * read these numbers instead of asserting the historical 765 / 34.
 */
export function readEditionStats(): EditionStats {
  if (cached) return cached;
  const file = path.resolve('data/en-in/all-chapters.json');
  const chapters = JSON.parse(fs.readFileSync(file, 'utf-8')) as RawChapter[];
  const totalTips = chapters.reduce((sum, chapter) => sum + chapter.tips.length, 0);
  const veryHigh = chapters.reduce(
    (sum, chapter) => sum + chapter.tips.filter((tip) => tip.valueTier === 'Very high').length,
    0
  );
  const evidenceGrades = { A: 0, B: 0, C: 0 };
  for (const chapter of chapters) {
    for (const tip of chapter.tips) {
      if (tip.evidenceGrade === 'A') evidenceGrades.A += 1;
      if (tip.evidenceGrade === 'B') evidenceGrades.B += 1;
      if (tip.evidenceGrade === 'C') evidenceGrades.C += 1;
    }
  }
  cached = { totalTips, chapters: chapters.length, veryHigh, evidenceGrades };
  return cached;
}
