import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

type TipCollection = { tips: readonly { id: string }[] };
type OverrideCollection = { tips: Record<string, Record<string, unknown>> };

function loadJson<T>(relativePath: string): T {
  return JSON.parse(readFileSync(new URL(relativePath, import.meta.url), 'utf8')) as T;
}

const chapter04 = loadJson<TipCollection>('../data/en-in/chapters/04-do-not-waste-time.json');
const chapter13 = loadJson<TipCollection>('../data/en-in/chapters/13-emergencies-what-to-do-first.json');
const overrides04 = loadJson<OverrideCollection>('../data/en-in/overrides/04.json');
const overrides13 = loadJson<OverrideCollection>('../data/en-in/overrides/13.json');

function getTip(chapter: TipCollection, id: string): Record<string, unknown> {
  const tip = chapter.tips.find((item) => item.id === id);
  if (!tip) throw new Error('Missing expected India tip: ' + id);
  return tip as Record<string, unknown>;
}

test.describe('Editorial safety regression checks', () => {
  test('the authoritative override matches the checked-in reader data', () => {
    for (const [chapter, overrides, tipIds] of [
      [chapter04, overrides04, ['4-9', '4-13', '4-15', '4-16']],
      [chapter13, overrides13, ['13-1']]
    ] as const) {
      for (const id of tipIds) {
        const compiled = getTip(chapter, id);
        const override = overrides.tips[id];
        expect(override).toBeDefined();
        for (const [field, value] of Object.entries(override)) {
          // The chapter builder assigns publication reviewStatus from the manifest.
          // The override's draft value is an authoring marker, not compiled metadata.
          if (field === 'reviewStatus') continue;
          if (typeof value === 'string') expect(compiled[field]).toBe(value);
        }
      }
    }
  });

  test('Chapter 4 preserves qualifiers and real source references', () => {
    const procrastination = getTip(chapter04, '4-9');
    expect(procrastination.inPlainWords).toContain('self-control');
    expect(procrastination.inPlainWords).not.toContain('little to do with laziness or personality traits');

    const selfHelp = getTip(chapter04, '4-13');
    expect(selfHelp.caveats).toContain('item 10 of this section');
    expect(selfHelp.caveats).not.toContain('as in Section 10');
    expect(selfHelp.cost).not.toContain('₹300–₹1,000');
    expect(selfHelp.sources).toContain('https://telemanas.mohfw.gov.in/');
    expect(selfHelp.sources).not.toContain('<https://mohfw.gov.in/>');

    const scrolling = getTip(chapter04, '4-15');
    expect(scrolling.sources).toContain('PRID=2322388');
    expect(scrolling.sources).not.toContain('<https://mohfw.gov.in/>');

    const viewing = getTip(chapter04, '4-16');
    expect(viewing.inPlainWords).not.toContain('gives that half of your leisure time back');
  });

  test('CPR guidance does not present a foreign statistic as universal Indian data', () => {
    const cpr = getTip(chapter13, '13-1');
    expect(cpr.inPlainWords).not.toContain('79.2%');
    expect(cpr.inPlainWords).not.toContain('must not stop compressing');
    expect(cpr.inPlainWords).toContain('call 112 immediately');
    expect(cpr.sources).toContain('https://112.gov.in/');
    expect(cpr.sources).toContain('www.heart.org/en/health-topics/cardiac-arrest/emergency-treatment-of-cardiac-arrest');
  });
});
