/**
 * Lightweight Comic Particle Burst (<1.5KB)
 * Fires celebratory particles and subtle haptic tap on chapter completion.
 * Suppressed in Calm Mode and when Comic Effects are toggled off.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  alpha: number;
  isSquare: boolean;
}

const COLORS = ['#46D9A0', '#F5B85A', '#8FB3D9', '#04110F', '#FFFFFF'];

export function triggerChapterCompleteBurst(): void {
  // Check Calm Mode and Comic Effects suppression
  if (typeof document === 'undefined') return;

  const isCalm = document.body.dataset.calmChapter === 'true';
  const comicEffects = document.documentElement.dataset.comicEffects !== 'off';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isCalm || !comicEffects || reducedMotion) {
    return;
  }

  // Subtle 10ms haptic feedback
  try {
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  } catch {
    // Ignore environments where vibrate is blocked
  }

  // Canvas particle burst
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '9999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const particles: Particle[] = [];
  const particleCount = 42;
  const originX = w / 2;
  const originY = h * 0.45;

  for (let i = 0; i < particleCount; i++) {
    const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.5;
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: 4 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      alpha: 1,
      isSquare: Math.random() > 0.4,
    });
  }

  let startTime: number | null = null;
  const duration = 1200; // 1.2s total

  function frame(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.28; // gravity
      p.vx *= 0.98; // air resistance
      p.rotation += p.vRot;
      p.alpha = Math.max(0, 1 - progress * 1.1);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;

      if (p.isSquare) {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        // ink outline
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#04110F';
        ctx.strokeRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#04110F';
        ctx.stroke();
      }

      ctx.restore();
    });

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(frame);
}
