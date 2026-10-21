import fs from 'node:fs';
import path from 'node:path';

const sourcePath = path.resolve('data/en/all-chapters.json');
const rewriteDir = path.resolve('data/en-in/chapters');
const outputPath = path.resolve('data/en-in/all-chapters.json');

const source: any[] = JSON.parse(fs.readFileSync(sourcePath, 'utf-8'));
const rewrites = new Map<number, any>();

if (fs.existsSync(rewriteDir)) {
  for (const file of fs.readdirSync(rewriteDir).filter((name) => name.endsWith('.json'))) {
    const chapter = JSON.parse(fs.readFileSync(path.join(rewriteDir, file), 'utf-8'));
    if (typeof chapter.chapter !== 'number' || !Array.isArray(chapter.tips)) {
      throw new Error('Invalid India rewrite chapter: ' + file);
    }
    rewrites.set(chapter.chapter, chapter);
  }
}

const merged = source.map((chapter) => rewrites.get(chapter.chapter) ?? chapter);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(merged, null, 2));

console.log(
  'India edition data: ' +
  rewrites.size +
  ' rewritten chapter(s), ' +
  merged.reduce((sum, chapter) => sum + chapter.tips.length, 0) +
  ' tips.'
);
