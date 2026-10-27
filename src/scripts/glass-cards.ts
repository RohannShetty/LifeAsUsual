/* Only the cards near the viewport pay for a backdrop-filter. Mid-range phones
   blur badly when more than a couple of stacked surfaces are in flight, so the
   observer keeps at most three blown cards alive and lets the rest fall back to
   the flat 72% tint. */

const MAX_GLASSY_CARDS = 3;
const SELECTOR = '.tip-card';

function blurAllowed(): boolean {
  if (window.matchMedia('(prefers-reduced-transparency: reduce)').matches) return false;
  if (document.documentElement.dataset.reduceTransparency === 'true') return false;
  return true;
}

function initGlassCards() {
  const cards = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (!cards.length) return;

  cards.forEach((card) => card.classList.remove('is-glassy'));

  if (!blurAllowed()) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => card.classList.add('is-glassy'));
    return;
  }

  const live: HTMLElement[] = [];

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const card = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (card.classList.contains('is-glassy')) continue;
          card.classList.add('is-glassy');
          live.push(card);
          while (live.length > MAX_GLASSY_CARDS) {
            live.shift()?.classList.remove('is-glassy');
          }
        } else if (card.classList.contains('is-glassy')) {
          card.classList.remove('is-glassy');
          const index = live.indexOf(card);
          if (index !== -1) live.splice(index, 1);
        }
      }
    },
    { rootMargin: '20% 0px 20% 0px', threshold: 0.01 }
  );

  cards.forEach((card) => observer.observe(card));
}

initGlassCards();
document.addEventListener('astro:page-load', initGlassCards);
