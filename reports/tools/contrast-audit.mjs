// Measure painted contrast for the ROI badge in all four palettes, from screenshots
// rather than by eye: the modal colour inside the pill is its flat background, so
// antialiased glyph edges and the 1px border cannot skew the reading.
// Needs the preview server (npm run preview, port 4321). Prints JSON to stdout.
import { chromium } from 'playwright';
import zlib from 'node:zlib';

function decodePng(buf) {
  let off = 8, w=0, h=0, bd=0, ct=0, idat=[];
  while (off < buf.length) {
    const len = buf.readUInt32BE(off), type = buf.toString('ascii', off+4, off+8);
    const data = buf.subarray(off+8, off+8+len);
    if (type==='IHDR'){ w=data.readUInt32BE(0); h=data.readUInt32BE(4); bd=data[8]; ct=data[9]; }
    else if (type==='IDAT') idat.push(data);
    else if (type==='IEND') break;
    off += 12+len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const ch = ct===6?4:ct===2?3:4, bpp = ch*(bd/8), stride = w*bpp;
  const out = Buffer.alloc(h*stride);
  let p = 0;
  for (let y=0;y<h;y++){
    const f = raw[p++]; const line = raw.subarray(p, p+stride); p+=stride;
    const cur = out.subarray(y*stride, (y+1)*stride), prev = y? out.subarray((y-1)*stride, y*stride):null;
    for (let x=0;x<stride;x++){
      const a = x>=bpp? cur[x-bpp]:0, b = prev? prev[x]:0, c = (prev&&x>=bpp)? prev[x-bpp]:0;
      let v = line[x];
      if (f===1) v+=a; else if (f===2) v+=b; else if (f===3) v+=(a+b)>>1;
      else if (f===4){ const pa=Math.abs(b-c), pb=Math.abs(a-c), pc=Math.abs(a+b-2*c); v += (pa<=pb&&pa<=pc)?a:(pb<=pc?b:c); }
      cur[x]=v&255;
    }
  }
  return { w, h, ch, data: out };
}
const px = (img,x,y)=>{ const i=(y*img.w+x)*img.ch; return [img.data[i],img.data[i+1],img.data[i+2]]; };
const lum = c => { const s=c.map(v=>{v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);}); return 0.2126*s[0]+0.7152*s[1]+0.0722*s[2]; };
const cr = (a,b)=>{ const l1=lum(a),l2=lum(b); const [x,y]=l1>l2?[l1,l2]:[l2,l1]; return (x+0.05)/(y+0.05); };

const browser = await chromium.launch();
const out = [];
for (const palette of ['midnight','monsoon','pearl','ivory']) {
  const page = await browser.newPage({ viewport:{ width:390, height:844 }, deviceScaleFactor:2 });
  await page.addInitScript(p => localStorage.setItem('htlb_settings_v1', JSON.stringify({ theme: p==='midnight'||p==='monsoon'?'dark':'light', palette:p, textSize:100, comicEffects:'off', reduceTransparency:false })), palette);
  await page.goto('http://localhost:4321/chapters/01-do-not-die-early', { waitUntil:'networkidle' });
  await page.waitForTimeout(600);
  const info = await page.evaluate(() => {
    const b = document.querySelector('.roi-very-high') || document.querySelector('[class*="roi-"]');
    const m = document.querySelector('.meta-label');
    const g = el => el ? getComputedStyle(el).color : null;
    return { badge: b ? g(b) : null, meta: m ? g(m) : null, cls: b? b.className : null };
  });
  const el = await page.$('.roi-very-high') || await page.$('[class*="roi-"]');
  const box = await el.boundingBox();
  const shot = await page.screenshot({ clip: { x: Math.round(box.x), y: Math.round(box.y), width: Math.max(6,Math.round(box.width)), height: Math.max(6,Math.round(box.height)) } });
  const img = decodePng(shot);
  // sample a background pixel near the left padding edge (inside border, above text baseline)
  // Modal colour inside the pill = the flat background; glyph edges and the border are minority pixels.
  const counts = new Map();
  for (let y=2;y<img.h-2;y++) for (let x=2;x<img.w-2;x++){
    const c = px(img,x,y); const k = c.join(',');
    counts.set(k, (counts.get(k)||0)+1);
  }
  const top = [...counts.entries()].sort((a,b)=>b[1]-a[1]);
  const bg = top[0][0].split(',').map(Number);
  const share = +(top[0][1] / ((img.w-4)*(img.h-4)) * 100).toFixed(1);
  const parse = s => s.match(/[\d.]+/g).map(Number).slice(0,3);
  const fg = parse(info.badge);
  out.push({ palette, badgeClass: info.cls, fg: info.badge, modalBg: bg, modalSharePct: share, ratio: +cr(fg, bg).toFixed(2), metaColor: info.meta });
  await page.close();
}
await browser.close();
console.log(JSON.stringify(out, null, 1));
