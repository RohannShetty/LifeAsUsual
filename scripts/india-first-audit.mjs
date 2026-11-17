import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// This produces an editorial review QUEUE, never a verification approval.
export function makeInventory(legacyChapters, indiaChapters, manifest, editorialDecisions = {}) {
  if (!Array.isArray(legacyChapters) || !Array.isArray(indiaChapters)) throw new Error('Invalid chapter collections');
  const legacyById = new Map();
  const indiaById = new Map();
  const chapters = new Map();
  for (const ch of legacyChapters) {
    if (!Number.isInteger(ch.chapter) || !Array.isArray(ch.tips)) throw new Error('Invalid legacy chapter');
    for (const tip of ch.tips) {
      if (!tip.id || legacyById.has(tip.id)) throw new Error('Missing or duplicate legacy tip ID: ' + tip.id);
      if (tip.id !== String(ch.chapter) + '-' + String(tip.tip)) throw new Error('Legacy tip ID mismatch: ' + tip.id);
      legacyById.set(tip.id, { chapter: ch, tip });
    }
  }
  for (const ch of indiaChapters) {
    if (!Number.isInteger(ch.chapter) || !Array.isArray(ch.tips)) throw new Error('Invalid India chapter');
    if (chapters.has(ch.chapter)) throw new Error('Duplicate India chapter: ' + ch.chapter);
    chapters.set(ch.chapter, ch);
    for (const tip of ch.tips) {
      if (!tip.id || indiaById.has(tip.id)) throw new Error('Missing or duplicate India tip ID: ' + tip.id);
      if (tip.id !== String(ch.chapter) + '-' + String(tip.tip)) throw new Error('India tip ID mismatch: ' + tip.id);
      indiaById.set(tip.id, { chapter: ch, tip });
    }
  }
  if (legacyById.size === 0) throw new Error('Legacy corpus is empty');
  const choices = editorialDecisions || {};
  const allowed = new Set(['UNASSESSED','KEEP','REWRITE','REPLACE','COMBINE','RETIRE','HOLD']);
  for (const [key, decision] of Object.entries(choices)) {
    if (!legacyById.has(key)) throw new Error('Editorial decision for unknown legacy ID: ' + key);
    if (!decision || !allowed.has(decision.disposition)) throw new Error('Invalid disposition for ' + key);
    if (decision.disposition !== 'UNASSESSED' && (!decision.rationale || !decision.author))
      throw new Error('Disposition needs a rationale and decision author: ' + key);
  }
  const rows = [];
  for (const [id, original] of legacyById) {
    const decision = choices[id] || {};
    const entry = indiaById.get(id);
    const ch = entry?.chapter || chapters.get(original.chapter.chapter) || original.chapter;
    const tip = entry?.tip;
    const meta = manifest?.chapters?.[String(original.chapter.chapter)] || {};
    const prose = tip ? [tip.title, tip.inPlainWords, tip.cost, tip.benefit, tip.caveats].join(' ') : '';
    const signals = [];
    if (/\b(no (?:direct |single |national )?(?:Indian equivalent|national unemployment|unemployment insurance)|India (?:has|does) not|not available in India|unlike China|Chinese system|source[- ]edition)\b/i.test(prose)) signals.push('absence-or-comparison-framing');
    if (/\b(China|Chinese|mainland|yuan|RMB|hukou|dibao|yibao|WeChat|Alipay)\b/i.test(prose)) signals.push('foreign-specific-reference');
    if (/\b(?:ESIC|EPFO|MGNREGA|PM-JAY|Aadhaar|PAN|PF withdrawal|GST|income tax|welfare board|legal aid|ration card|pension|labour code|helpline)\b/i.test(prose)) signals.push('scheme-or-entitlement-claim');
    if (tip?.disputed || tip?.stillVerifying) signals.push('existing-tip-uncertainty');
    if (meta.tier === 'A' && meta.humanReview !== 'signed-off') signals.push('human-review-pending');
    if (!entry) signals.push('missing-from-current-edition');
    const risk = [];
    if (/\b(?:doctor|medicine|medical|hospital|CPR|emergency|health|pregnancy|newborn|ambulance|suicide|poison|treatment|disability)\b/i.test(prose)) risk.push('health-safety');
    if (/\b(?:law|legal|court|police|tenant|landlord|property|arrest|complaint|rights|statute|labour|wages|work injury)\b/i.test(prose)) risk.push('legal-rights');
    if (/\b(?:money|bank|fraud|loan|insurance|investment|tax|benefits?|pension|EPFO|ESIC|salary|payment|cash|PF)\b/i.test(prose)) risk.push('financial-benefits');
    const urls = [...new Set((tip?.sources || '').match(/https?:\/\/[^\s<>;,)\]]+/g) || [])];
    rows.push({
      legacy_id: id,
      legacy_chapter: original.chapter.chapter,
      legacy_title: original.tip.title || '',
      current_title: tip?.title || '',
      current_route: '/chapters/' + String(ch.chapter).padStart(2, '0') + '-' + ch.slug + '/#' + id,
      current_presence: entry ? 'PRESENT' : 'MISSING_NEEDS_MIGRATION',
      scope: tip?.tags?.scope || '',
      audience: Array.isArray(tip?.tags?.audience) ? tip.tags.audience.join('|') : '',
      tier_from_manifest: meta.tier || '',
      risk_triage_signals: risk.join('|'),
      potential_content_gaps: signals.join('|'),
      source_urls: urls.join('|'),
      evidence_grade_from_edition: tip?.evidenceGrade || '',
      ai_review_status_from_edition: tip?.reviewStatus || '',
      chapter_human_review_from_manifest: meta.humanReview || '',
      verification_date_from_manifest: meta.verifiedAt || '',
      claim_source_verified_in_this_audit: 'NO',
      disposition: decision.disposition || 'UNASSESSED',
      india_first_journey: decision.india_first_journey || '',
      replacement_or_redirect_id: decision.replacement_or_redirect_id || '',
      migration_decision: decision.migration_decision || 'PRESERVE_LEGACY_ID_PENDING_REVIEW',
      editorial_rationale: decision.rationale || '',
      reviewer_identity: '',
      reviewer_approval: 'NONE'
    });
  }
  const extras = [...indiaById.keys()].filter(id => !legacyById.has(id));
  const byChapter = legacyChapters.map(ch => {
    const r = rows.filter(x => x.legacy_chapter === ch.chapter);
    return { chapter: ch.chapter, name: chapters.get(ch.chapter)?.title || ch.title, tips: r.length,
      attentionCandidates: r.filter(x => x.potential_content_gaps !== '').length,
      unassessed: r.filter(x => x.disposition === 'UNASSESSED').length };
  });
  return {
    schema: 'india-first-editorial-inventory/v1',
    warning: 'Automated triage only. Neither official source verification nor qualified human review is established here.',
    legacyIdCount: legacyById.size,
    inEditionCount: rows.filter(x => x.current_presence === 'PRESENT').length,
    legacyIdsMissingFromEdition: rows.filter(x => x.current_presence !== 'PRESENT').map(x => x.legacy_id),
    originalIndiaIdsNotInLegacy: extras,
    unassessed: rows.filter(x => x.disposition === 'UNASSESSED').length,
    byChapter, rows
  };
}
const csvColumns = ['legacy_id','legacy_chapter','legacy_title','current_title','current_route','current_presence',
  'scope','audience','tier_from_manifest','risk_triage_signals','potential_content_gaps','source_urls',
  'evidence_grade_from_edition','ai_review_status_from_edition','chapter_human_review_from_manifest',
  'verification_date_from_manifest','claim_source_verified_in_this_audit','disposition','india_first_journey',
  'replacement_or_redirect_id','migration_decision','editorial_rationale','reviewer_identity','reviewer_approval'];
export function asCsv(report) {
  const q = value => { const s = String(value ?? ''); return /[",\r\n]/.test(s) ? '"' + s.replaceAll('"', '""') + '"' : s; };
  return [csvColumns.join(','), ...report.rows.map(row => csvColumns.map(k => q(row[k])).join(','))].join('\n') + '\n';
}
export function asSummary(report) {
  const flagged = report.rows.filter(r => r.potential_content_gaps);
  return '# India-first inherited content audit: baseline\n\n' +
    '> Not an editorial approval. Classification is a search queue only; every disposition is UNASSESSED.\n\n' +
    '- Legacy IDs inventoried: **' + report.legacyIdCount + '**\n' +
    '- Present in current India edition: **' + report.inEditionCount + '**\n' +
    '- Missing from edition (requiring mapping): **' + report.legacyIdsMissingFromEdition.length + '**\n' +
    '- New India-only IDs (outside inherited corpus): **' + report.originalIndiaIdsNotInLegacy.length + '**\n' +
    '- Editorial decisions pending: **' + report.unassessed + '**\n' +
    '- Tips flagged for further inspection by keyword triage: **' + flagged.length + '** (not verified defects)\n\n' +
    '## Chapter queue\n\n| Chapter | Current title | Inherited IDs | Flagged candidates | Unassessed |\n|---|---|---:|---:|---:|\n' +
    report.byChapter.map(c => '| ' + c.chapter + ' | ' + c.name.replaceAll('|','/') + ' | ' + c.tips + ' | ' + c.attentionCandidates + ' | ' + c.unassessed + ' |').join('\n') +
    '\n\n## Required review\n\nUse legacy-inventory.csv to record KEEP, REWRITE, REPLACE, COMBINE, RETIRE or HOLD decisions after checking the actual tip, applicability and primary-source passages. Do not label a tip professionally reviewed because it has evidence grade A, independently-checked, or a passing browser test.\n\n' +
    'No public routes, anchors, current tip bodies or stored progress are modified by this report. Track implementation under [Issue #23](https://github.com/RohannShetty/LifeAsUsual/issues/23).\n';
}
function readJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }
export function inventoryFromDirectory(root = process.cwd()) {
  const src = readJson(path.join(root,'data/en/all-chapters.json'));
  const dir = path.join(root,'data/en-in/chapters');
  const india = fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort().map(f => readJson(path.join(dir,f)));
  const manifest = readJson(path.join(root,'data/en-in/manifest.json'));
  const decisionFile = readJson(path.join(root,'reports/india-first-inventory/editorial-decisions.json'));
  if (decisionFile.schema !== 'india-first-editorial-decisions/v1' || !decisionFile.decisions || Array.isArray(decisionFile.decisions))
    throw new Error('Invalid editorial decision file');
  return makeInventory(src,india,manifest,decisionFile.decisions);
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const report = inventoryFromDirectory();
  const out = path.resolve('reports/india-first-inventory');
  const files = {'legacy-inventory.csv': asCsv(report), 'summary.md': asSummary(report)};
  if (process.argv.includes('--check')) {
    for (const [name, content] of Object.entries(files)) {
      if (!fs.existsSync(path.join(out,name)) || fs.readFileSync(path.join(out,name),'utf8') !== content)
        throw new Error('Editorial inventory drift: ' + name + '. Run node scripts/india-first-audit.mjs and commit the refreshed report.');
    }
  } else {
    fs.mkdirSync(out,{recursive:true});
    for (const [name,content] of Object.entries(files)) fs.writeFileSync(path.join(out,name),content);
  }
  console.log('India-first inventory: ' + report.legacyIdCount + ' legacy IDs; ' + report.unassessed + ' editorial decisions pending; ' + report.legacyIdsMissingFromEdition.length + ' unmapped legacy IDs.');
}