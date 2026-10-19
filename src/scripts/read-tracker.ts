/**
 * Read Tracker: Tracks 50% visibility using a shared IntersectionObserver
 * Section 6: max(1.5s, min(6s, 40% of reading time at 230 wpm))
 */

import { markTipRead, isTipRead, toggleTipRead, togglePick, isTipPicked, subscribeLedger } from './storage-ledger';

// Word count estimator & threshold calculator
function calculateReadDurationMs(el: HTMLElement): number {
  const text = el.innerText || '';
  const wordCount = text.trim().split(/\s+/).length || 50;
  // 230 words per minute
  const readingTimeSec = wordCount / (230 / 60);
  const thresholdSec = Math.max(1.5, Math.min(6.0, 0.4 * readingTimeSec));
  return Math.round(thresholdSec * 1000);
}

export function initReadTracker(): () => void {
  const activeTimers = new Map<Element, number>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const tipId = el.dataset.tipId;
        const chapter = parseInt(el.dataset.chapter || '0', 10);
        const tipNum = parseInt(el.dataset.tipNum || '0', 10);

        if (!tipId) return;

        // If already read, ignore
        if (isTipRead(tipId)) {
          updateCardUi(el, true, isTipPicked(tipId));
          return;
        }

        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          // Started sustained visibility
          if (!activeTimers.has(el)) {
            const durationMs = calculateReadDurationMs(el);
            const timerId = window.setTimeout(() => {
              markTipRead(tipId, chapter, tipNum);
              activeTimers.delete(el);
              updateCardUi(el, true, isTipPicked(tipId));
            }, durationMs);
            activeTimers.set(el, timerId);
          }
        } else {
          // Left viewport or fell below 50% threshold: clear timer
          if (activeTimers.has(el)) {
            clearTimeout(activeTimers.get(el));
            activeTimers.delete(el);
          }
        }
      });
    },
    {
      threshold: [0.5],
    }
  );

  // Observe all tip cards
  function observeCards() {
    const cards = document.querySelectorAll('.tip-card');
    cards.forEach((card) => {
      observer.observe(card);
      const tipId = (card as HTMLElement).dataset.tipId;
      if (tipId) {
        updateCardUi(card as HTMLElement, isTipRead(tipId), isTipPicked(tipId));
      }
    });
  }

  observeCards();

  // Handle manual Mark Read and Pick actions
  function handleCardClick(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const markBtn = target.closest('.mark-read-btn') as HTMLElement | null;
    const pickBtn = target.closest('.pick-btn') as HTMLElement | null;
    const copyBtn = target.closest('.copy-link-btn') as HTMLElement | null;

    if (markBtn) {
      const card = markBtn.closest('.tip-card') as HTMLElement;
      const tipId = markBtn.dataset.tipId;
      const chapter = parseInt(card?.dataset.chapter || '0', 10);
      const tipNum = parseInt(card?.dataset.tipNum || '0', 10);
      if (tipId && card) {
        const nowRead = toggleTipRead(tipId, chapter, tipNum);
        updateCardUi(card, nowRead, isTipPicked(tipId));
      }
    } else if (pickBtn) {
      const card = pickBtn.closest('.tip-card') as HTMLElement;
      const tipId = pickBtn.dataset.tipId;
      if (tipId && card) {
        const nowPicked = togglePick(tipId);
        updateCardUi(card, isTipRead(tipId), nowPicked);
      }
    } else if (copyBtn) {
      const anchor = copyBtn.dataset.anchor;
      if (anchor) {
        const url = `${window.location.origin}${window.location.pathname}#${anchor}`;
        navigator.clipboard.writeText(url).then(() => {
          const btnText = copyBtn.querySelector('.btn-text');
          if (btnText) {
            const orig = btnText.textContent;
            btnText.textContent = 'Copied!';
            setTimeout(() => { btnText.textContent = orig; }, 1500);
          }
        });
      }
    }
  }

  document.addEventListener('click', handleCardClick);

  // Sync UI across all visible cards when ledger updates
  const unsubscribe = subscribeLedger((state) => {
    document.querySelectorAll('.tip-card').forEach((card) => {
      const el = card as HTMLElement;
      const tipId = el.dataset.tipId;
      if (tipId) {
        updateCardUi(el, state.readTipIds.includes(tipId), state.picks.includes(tipId));
      }
    });
  });

  return () => {
    observer.disconnect();
    document.removeEventListener('click', handleCardClick);
    unsubscribe();
  };
}

function updateCardUi(card: HTMLElement, isRead: boolean, isPicked: boolean) {
  const markBtn = card.querySelector('.mark-read-btn');
  const pickBtn = card.querySelector('.pick-btn');

  if (markBtn) {
    if (isRead) {
      markBtn.classList.add('is-read');
      const text = markBtn.querySelector('.btn-text');
      if (text) text.textContent = 'Read ✓';
    } else {
      markBtn.classList.remove('is-read');
      const text = markBtn.querySelector('.btn-text');
      if (text) text.textContent = 'Mark Read';
    }
  }

  if (pickBtn) {
    if (isPicked) {
      pickBtn.classList.add('is-picked');
      const text = pickBtn.querySelector('.btn-text');
      if (text) text.textContent = 'Saved ★';
    } else {
      pickBtn.classList.remove('is-picked');
      const text = pickBtn.querySelector('.btn-text');
      if (text) text.textContent = 'Save';
    }
  }
}

// Auto-run on client navigation
if (typeof window !== 'undefined') {
  document.addEventListener('astro:page-load', () => {
    initReadTracker();
  });
}
