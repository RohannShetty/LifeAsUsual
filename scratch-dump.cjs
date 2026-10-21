const f = process.argv[2];
const j = require('./' + f);
console.log('TITLE:', j.title, '| slug:', j.slug, '| status:', j.rewriteStatus, '| tips:', j.tips.length);
console.log('INTRO:', j.intro);
for (const t of j.tips) {
  console.log('\n### ' + t.id + ' | ' + t.title + ' | grade ' + t.evidenceGrade + ' | scope ' + t.tags.scope + ' | money ' + t.tags.money);
  console.log('COST: ' + (t.cost || ''));
  console.log('PLAIN: ' + (t.inPlainWords || ''));
  console.log('BENEFIT: ' + (t.benefit || ''));
  console.log('SRC: ' + (t.sources || ''));
  console.log('CAV: ' + (t.caveats || ''));
}
