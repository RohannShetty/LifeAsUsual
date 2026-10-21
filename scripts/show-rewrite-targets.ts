import fs from 'node:fs';

const chapterNumber = Number(process.argv[2]);
const source = JSON.parse(fs.readFileSync('data/en/all-chapters.json', 'utf-8'));
const chapter = source.find((c: any) => c.chapter === chapterNumber);
const BANNED = /\b(China|Chinese|mainland|RMB|yuan|hukou|yibao|dibao|CNY)\b/i;
const HOT = /\b(WeChat|Alipay|Taobao|Tmall|JD|Pinduoduo|12345|12308|12315|12321|12377|12389|12309|96110|12356|12355|12348|12333|12320|120|110|119|shebao|gongjijin|gongshang|laodong|caili|Civil Code|NPC|State Council|People's Bank|Ministry of Human Resources)\b/i;
const FIELDS = ['title', 'cost', 'inPlainWords', 'benefit', 'sources', 'caveats'] as const;

console.log('Chapter ' + chapterNumber + ': ' + chapter.title + ' (' + chapter.tips.length + ' tips)');
for (const tip of chapter.tips) {
  const hits = FIELDS.filter((field) => BANNED.test(tip[field] ?? '') || HOT.test(tip[field] ?? ''));
  console.log('\n### ' + tip.id + ' | ' + tip.title);
  if (!hits.length) {
    console.log('CLEAN');
    continue;
  }
  for (const field of hits) {
    console.log('-- ' + field + ': ' + tip[field]);
  }
}
