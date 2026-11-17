import {
  getLedger,
  recallDueTipIds,
  recordRecall,
  nextRecallLabel,
  RECALL_INTERVALS_DAYS,
} from './storage-ledger';

interface PoolTip {
  i: string; // tip id
  t: string; // title
  c: number; // chapter number
  s: string; // chapter slug without number
}

const DAY_MS = 24 * 60 * 60 * 1000;

function chapterHref(tip: PoolTip): string {
  return '/chapters/' + tip.c + '-' + tip.s + '/';
}

/**
 * Soonest future check across the tips this deck can show. A read tip with no
 * timestamp is due now, so it never produces a "come back tomorrow" promise.
 */
function nextDueSentence(pool: PoolTip[]): string {
  const state = getLedger();
  const known = new Set(pool.map((tip) => tip.i));
  let soonest: number | null = null;
  for (const tipId of state.readTipIds) {
    if (!known.has(tipId)) continue;
    const readAt = state.readAt?.[tipId];
    if (readAt === undefined || !Number.isFinite(readAt)) continue;
    const rawStage = state.recall?.[tipId] ?? 0;
    const stage = Math.min(Math.max(rawStage, 0), RECALL_INTERVALS_DAYS.length - 1);
    const at = readAt + RECALL_INTERVALS_DAYS[stage] * DAY_MS;
    if (at > Date.now() && (soonest === null || at < soonest)) soonest = at;
  }
  if (soonest === null) return 'Come back tomorrow.';
  const days = Math.max(1, Math.ceil((soonest - Date.now()) / DAY_MS));
  return 'Next check in ' + days + (days === 1 ? ' day.' : ' days.');
}

function tipMeta(tip: PoolTip): string {
  return 'Chapter ' + tip.c;
}

function renderRow(tip: PoolTip, onAnswer: () => void): HTMLLIElement {
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
  revealBtn.setAttribute('aria-controls', 'recall-answer-' + tip.i);

  const answer = document.createElement('div');
  answer.className = 'recall-answer';
  answer.id = 'recall-answer-' + tip.i;
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
  status.tabIndex = -1;

  const answerChoice = (remembered: boolean) => {
    recordRecall(tip.i, remembered);
    actions.hidden = true;
    const days = nextRecallLabel(tip.i);
    status.textContent = remembered
      ? 'Nice. Next check ' + days + '.'
      : 'No shame in that. It comes back ' + days + '.';
    item.classList.add('is-done');
    // The button that had focus just disappeared; move focus to the outcome.
    status.focus();
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
  const state = getLedger();
  const byId = new Map(pool.map((tip) => [tip.i, tip]));
  const due = recallDueTipIds(state).filter((tipId) => byId.has(tipId));

  if (due.length === 0) {
    if (!alwaysShow) return;
    deckEl.hidden = false;
    list.hidden = true;
    empty.hidden = false;
    const poolRead = state.readTipIds.filter((tipId) => byId.has(tipId)).length;
    empty.textContent = poolRead === 0
      ? 'Read a few Very-high tips first. Your first memory check appears three days after you read them.'
      : 'Nothing due today. ' + nextDueSentence(pool);
    return;
  }

  deckEl.hidden = false;
  empty.hidden = true;
  list.hidden = false;

  let answered = 0;
  const onAnswer = () => {
    answered += 1;
    if (answered < due.length) return;
    // Three rows are shown at a time; more may be due right behind them.
    const remaining = recallDueTipIds(getLedger()).filter((tipId) => byId.has(tipId)).length;
    empty.hidden = false;
    empty.textContent = remaining > 0
      ? answered + ' for today. ' + remaining + (remaining === 1 ? ' more is' : ' more are') + ' due. Open Progress to keep going.'
      : 'That is the check for today. ' + nextDueSentence(pool);
  };

  for (const tipId of due) {
    const tip = byId.get(tipId);
    if (tip) list.appendChild(renderRow(tip, onAnswer));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
