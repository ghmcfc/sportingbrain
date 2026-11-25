// Shared helpers for SportingBrain Ireland: the day number, your county and its colours, and share text.
import { COUNTIES, COUNTY_NAMES } from '../data/ireland.js';
import { IE_PICK } from '../data/teams.js';
import { store, ukDayNo, esc } from './play.js';
export const IE_DAY0 = 20781; // Irish Brain #1 was Wednesday 25 November 2026 (UK day 20782)
export const ieDay = () => Math.max(1, ukDayNo() - IE_DAY0);
export const getCounty = () => store.get('ie_county', '');
export const setCounty = c => { store.set('ie_county', c);
  const y = store.get('colours', { picks: {}, badge: '', cols: [] }); y.colmap = y.colmap || {};
  if (c && c !== 'Abroad') { y.picks.gaa = c; y.colmap.gaa = countyColours(c); if (!y.badge || !y.picks[y.badge]) y.badge = 'gaa'; } else { delete y.picks.gaa; delete y.colmap.gaa; if (y.badge === 'gaa') y.badge = Object.keys(y.picks)[0] || ''; }
  y.cols = (y.badge && y.colmap[y.badge]) || []; store.set('colours', y); };
const HEX = { 'sky blue': '#6CACE4', navy: '#13294B', saffron: '#F4C430', orange: '#F47B20', primrose: '#F3E37C', maroon: '#7A1E2C', purple: '#5B2C83', amber: '#F2A900', gold: '#E3B341', yellow: '#FFD100', green: '#0E6B3A', red: '#C8102E', blue: '#1F5AA6', black: '#111111', white: '#FFFFFF' };
// Read a county's colours from its colours clue, in the order they are written.
export function countyColours(name) {
  const c = COUNTIES.find(x => x[0] === name); if (!c) return [];
  let t = c[1][3].toLowerCase(); const out = [];
  for (const k of Object.keys(HEX)) { let i; while ((i = t.indexOf(k)) > -1) { out.push([i, HEX[k]]); t = t.slice(0, i) + ' '.repeat(k.length) + t.slice(i + k.length); } }
  return out.sort((a, b) => a[0] - b[0]).map(x => x[1]);
}
export const colourBar = name => { const c = countyColours(name); return c.length ? `<span class="ie-cols" aria-hidden="true">${c.map(h => `<i style="background:${h}"></i>`).join('')}</span>` : ''; };
export const countyLine = () => { const c = getCounty(); return c ? `Playing for ${c}` : ''; };
// What you play for on Irish pages: colours.picks.ie (any Irish county, club or province), falling back to your GAA county.
export function irishPick() { const c = store.get('colours', null) || {}; const n = (c.picks && (c.picks.ie || c.picks.gaa)) || store.get('ie_county', '');
  return n && n !== 'Abroad' ? { n, cols: (c.colmap && (c.picks.ie ? c.colmap.ie : c.colmap.gaa)) || countyColours(n) } : null; }
function setIrish(name) { const y = store.get('colours', { picks: {}, badge: '', cols: [] }); y.picks = y.picks || {}; y.colmap = y.colmap || {};
  const g = IE_PICK.find(([, , list]) => list.some(t => t[0] === name)), t = g && g[2].find(t => t[0] === name);
  if (t) { y.picks.ie = name; y.colmap.ie = t[1]; if (g[0] === 'gaa') { y.picks.gaa = name; y.colmap.gaa = t[1]; store.set('ie_county', name); } }
  else { delete y.picks.ie; delete y.colmap.ie; }
  if (!y.badge || !y.picks[y.badge]) y.badge = t ? (g[0] === 'gaa' ? 'gaa' : '') || Object.keys(y.picks).find(k => k !== 'ie') || '' : y.badge;
  y.cols = (y.badge && y.colmap[y.badge]) || []; store.set('colours', y); return t ? t[1] : []; }
export function countyPicker(el, onChange) {
  const cur = (irishPick() || {}).n || '';
  el.innerHTML = `<label for="ieCo">Who do you play for?</label><select id="ieCo"><option value="">Your county, club or province</option>${IE_PICK.map(([, label, list]) => `<optgroup label="${esc(label)}">${list.map(t => `<option${t[0] === cur ? ' selected' : ''}>${esc(t[0])}</option>`).join('')}</optgroup>`).join('')}</select><span class="ie-chip" id="ieChip"></span><p>Your GAA county, League of Ireland or NIFL club, or rugby province. It goes on every Irish score you share, in its colours. Your UK team stays on the UK site. Kept on your device only.</p>`;
  const chip = el.querySelector('#ieChip'), draw = () => { const p = irishPick(); chip.innerHTML = p ? `<span class="ie-cols" aria-hidden="true">${p.cols.map(h => `<i style="background:${h}"></i>`).join('')}</span> ${esc(p.n)}` : ''; };
  el.querySelector('#ieCo').onchange = e => { const k = setIrish(e.target.value); draw();
    const s = document.getElementById('ycStrip'), g = document.getElementById('ycShirtFill');
    if (s) { s.style.background = k.length ? 'linear-gradient(90deg,' + k.map((h, i) => `${h} ${i * 100 / k.length}% ${(i + 1) * 100 / k.length}%`).join(',') + ')' : ''; s.hidden = !k.length; }
    if (g) { g.innerHTML = k.map((h, i) => `<rect x="${i * 24 / k.length}" y="0" width="${24 / k.length + .2}" height="24" fill="${h}"/>`).join(''); g.closest('a').classList.toggle('has-team', !!k.length); }
    window.sbTrack && sbTrack('ie-pick-' + (e.target.value || 'none').replace(/\W+/g, '-')); onChange && onChange(); };
  draw();
}
export const countyTag = () => { const p = irishPick(); return p ? ` · Playing for ${p.n}` : ''; };
