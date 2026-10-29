// Extract the reader-visible text of a built site, for byte-level comparison
// between two builds. Strips scripts, styles, SVG and comments (all chrome and
// all ornament), decodes the entities Astro emits, and collapses whitespace.
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2] ?? 'dist';
const out = process.argv[3] ?? 'dist-text.txt';

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = walk(root).sort();
const chunks = files.map((file) => {
  const rel = path.relative(root, file).split(path.sep).join('/');
  return '### ' + rel + '\n' + textOf(fs.readFileSync(file, 'utf8'));
});
fs.writeFileSync(out, chunks.join('\n\n'));
console.log(files.length + ' pages -> ' + out + ' (' + fs.statSync(out).size + ' bytes)');
