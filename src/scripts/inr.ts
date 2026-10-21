import currency from '../../data/currency.json';

const RATE = currency.rate;
const RATE_LABEL = '¥1 ≈ ₹' + RATE.toFixed(2) + ' (' + currency.asOf + ')';
const AMOUNT = /(?:¥\s?([\d,]+(?:\.\d+)?))|(?:([\d,]+(?:\.\d+)?)\s*(?:yuan|RMB)\b)/gi;
const TARGETS = '.in-plain-words, .metric-text, .caveats-text, .daily-lead-text, .guide-body, .india-body';

function formatINR(value: number): string {
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.round(value * RATE));
}

function annotate(root: HTMLElement): void {
  if (root.dataset.inrDone === 'true') return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let current: Node | null;
  while ((current = walker.nextNode())) {
    const text = current.nodeValue || '';
    if (!text) continue;
    AMOUNT.lastIndex = 0;
    if (AMOUNT.test(text)) nodes.push(current as Text);
  }

  for (const textNode of nodes) {
    const parent = textNode.parentElement;
    if (!parent || parent.closest('a, code, .inr-ref')) continue;

    const text = textNode.nodeValue || '';
    const frag = document.createDocumentFragment();
    let last = 0;
    AMOUNT.lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = AMOUNT.exec(text))) {
      const raw = match[0];
      const number = parseFloat((match[1] || match[2] || '').replace(/,/g, ''));
      if (!Number.isFinite(number)) continue;

      frag.append(text.slice(last, match.index));
      frag.append(raw);

      const badge = document.createElement('span');
      badge.className = 'inr-ref';
      badge.textContent = ' ≈ ₹' + formatINR(number);
      badge.title = 'Indicative conversion at ' + RATE_LABEL + '. ' + currency.note;
      frag.append(badge);

      last = match.index + raw.length;
    }

    if (last === 0) continue;
    frag.append(text.slice(last));
    textNode.replaceWith(frag);
  }

  root.dataset.inrDone = 'true';
}

export function initInr(): void {
  if (document.documentElement.getAttribute('data-show-inr') === 'false') return;
  document.querySelectorAll<HTMLElement>(TARGETS).forEach(annotate);
}

if (typeof window !== 'undefined') {
  document.addEventListener('astro:page-load', initInr);
  document.addEventListener('htlb:inr-change', initInr);
  window.addEventListener('load', initInr, { once: true });
  initInr();
}
