import { getLedger, recallDueTipIds, recordRecall, nextRecallLabel } from './storage-ledger';

interface PoolTip {
  i: string; // tip id
  t: string; // title
  c: number; // chapter number
  s: string; // chapter slug without number
}

interface DeckElements {
  deck: HTMLElement;
  list: HTMLUListElement;
  empty: HTMLElement;
  pool: PoolTip[];
}

function chapterHref(tip: PoolTip): string {
  return '/chapters/' + tip.c + '-' + tip.s + '/';
}

function nextDueSentence(pool: PoolTip[]): string {
  const state = getLedger();
  const known = new Set(pool.map((tip) => tip.i));
  let soonest: number | null = null;
  for (const tipId of state.readTipIds) {
    if (!known.has(tipId)) continue;
    const stage = state.recall?.[tipId] ?? 0;
    const intervals = [3, 7, 21, 60];
    const readAt = state.readAt?.[tipId];
    if (readAt === undefined) return 'Come back tomorrow.';
    const at = readAt + intervals[Math.min(stage, intervals.length - 1)] * 86400000;
    if (at > Date.now() && (soonest === null || at < soonest)) soonest = at;
  }
  if (soonest === null) return '';
  const days = Math.max(1, Math.ceil((soonest - Date.now()) / 86400000));
  return 'Next check in ' + days + (days === 1 ? ' day.' : ' days.');
}

function tipMeta(tip: PoolTip): string {
  return 'Chapter ' + tip.c;
}

function renderRow(tip: PoolTip, deck: DeckElements, onAnswer: () => void): HTMLLIElement {
  const item = document.createElement('li');
  item.className = 'recall-item';

  const meta = document.createElement('p');
  meta.className = 'recall-meta';
  meta.textContent = tipMeta(tip);

  const revealBtn = document.createElement('button');
  revealBtn.type = 'button';
  revealBtn.className = 'recall-reveal ui-btn ui-btn-secondary';
  revealBtn.textContent = 'Show the tip';
  revealBtn.setAttribute('aria-expanded', 'false');

  const answer = document.createElement('div');
  answer.className = 'recall-answer';
  answer.hidden = true;

  const link = document.createElement('a');
  link.href = chapterHref(tip);
  link.className = 'recall-tip-title';
  link.textContent = tip.t;
  answer.appendChild(link);

  const actions = document.createElement('div');
  actions.className = 'recall-actions';
  actions.hidden = true;

  const yes = document.createElement('button');
  yes.type = 'button';
  yes.className = 'recall-choice ui-btn ui-btn-primary';
  yes.textContent = 'I remembered';

  const no = document.createElement('button');
  no.type = 'button';
  no.className = 'recall-choice ui-btn ui-btn-secondary';
  no.textContent = 'Not yet';

  const status = document.createElement('p');
  status.className = 'recall-status';
  status.setAttribute('aria-live', 'polite');

  const answerChoice = (remembered: boolean) => {
    recordRecall(tip.i, remembered);
    actions.hidden = true;
    const days = nextRecallLabel(tip.i);
    status.textContent = remembered ? 'Nice. Next check ' + days + '.' : 'No shame in that. It comes back tomorrow.';
    item.classList.add('is-done');
    onAnswer();
  };

  yes.addEventListener('click', () => answerChoice(true));
  no.addEventListener('click', () => answerChoice(false));

  revealBtn.addEventListener('click', () => {
    const open = answer.hidden;
    answer.hidden = !open;
    actions.hidden = !open;
    revealBtn.setAttribute('aria-expanded', String(open));
    revealBtn.textContent = open ? 'Hide the tip' : 'Show the tip';
    if (open) yes.focus();
  });

  actions.append(yes, no);
  item.append(meta, revealBtn, answer, actions, status);
  return item;
}

function init(): void {
  const deckEl = document.querySelector<HTMLElement>('[data-recall-deck]');
  const poolEl = document.getElementById('recall-pool');
  if (!deckEl || !poolEl) return;

  const pool = JSON.parse(poolEl.textContent || '[]') as PoolTip[];
  if (!Array.isArray(pool) || pool.length === 0) return;

  const list = deckEl.querySelector<HTMLUListElement>('[data-recall-list]');
  const empty = deckEl.querySelector<HTMLElement>('[data-recall-empty]');
  if (!list || !empty) return;

  const alwaysShow = deckEl.dataset.mode === 'progress';
  const deck: DeckElements = { deck: deckEl, list, empty, pool };
  const state = getLedger();
  const byId = new Map(pool.map((tip) => [tip.i, tip]));
  const due = recallDueTipIds(state).filter((tipId) => byId.has(tipId));

  if (due.length === 0) {
    if (!alwaysShow) return;
    deckEl.hidden = false;
    list.hidden = true;
    empty.hidden = false;
    empty.textContent = state.readTipIds.length === 0
      ? 'Read a few tips first. Your first memory check appears three days after you read them.'
      : 'Nothing due today. ' + nextDueSentence(pool);
    return;
  }

  deckEl.hidden = false;
  empty.hidden = true;
  list.hidden = false;

  let answered = 0;
  const onAnswer = () => {
    answered += 1;
    if (answered >= due.length) {
      empty.hidden = false;
      empty.textContent = 'That is the check for today. ' + nextDueSentence(pool);
    }
  };

  for (const tipId of due) {
    const tip = byId.get(tipId);
    if (tip) list.appendChild(renderRow(tip, deck, onAnswer));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
