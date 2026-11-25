// Your Colours: the teams you follow, saved on this device only. One of them is your badge, which goes on every score you share.
import { store, esc, BASE } from './play.js';
export const getC = () => store.get('colours', { picks: {}, badge: '', cols: [] });
function save(c) { const b = c.badge && c.picks[c.badge]; c.cols = b ? (c.colmap && c.colmap[c.badge]) || [] : []; store.set('colours', c); paintStrip(); }
export function setPick(sport, name, cols) {
  const c = getC(); c.colmap = c.colmap || {};
  if (name) { c.picks[sport] = name; c.colmap[sport] = cols || []; if (!c.badge || !c.picks[c.badge]) c.badge = sport; }
  else { delete c.picks[sport]; delete c.colmap[sport]; if (c.badge === sport) c.badge = Object.keys(c.picks)[0] || ''; }
  if (sport === 'gaa') store.set('ie_county', name || '');
  save(c); window.sbTrack && sbTrack('colours-' + sport + '-' + (name || 'none').replace(/\s+/g, '-'));
}
export function setBadge(sport) { const c = getC(); if (c.picks[sport]) { c.badge = sport; save(c); } }
export const badgeName = () => { const c = getC(); return (c.badge && c.picks[c.badge]) || ''; };
export const bar = cols => cols && cols.length ? `<span class="yc-cols" aria-hidden="true">${cols.map(h => `<i style="background:${h}"></i>`).join('')}</span>` : '';
// Adds "Playing for X" to the first line of a score message, unless it already says who you play for.
export function withBadge(text) { const n = badgeName(); if (!n || /Playing for/.test(text)) return text;
  const tag = n === 'Somewhere else' ? '' : ` · Playing for ${n}`; if (!tag) return text;
  const i = text.indexOf('\n'); return i < 0 ? text + tag : text.slice(0, i) + tag + text.slice(i); }
// The line under every result: your badge, or an invitation to pick one.
export function badgeLine() { const c = getC(), n = badgeName();
  return n ? `<p class="yc-line">${bar(c.cols)} Playing for <b>${esc(n)}</b> · <a href="${BASE}colours.html">Change</a></p>`
    : `<p class="yc-line"><a href="${BASE}colours.html" data-track="colours-invite"><b>Pick your team</b></a> and it goes on every score you share, in its colours.</p>`; }
export function paintStrip() { const s = document.getElementById('ycStrip'); if (!s) return; const cols = getC().cols || [];
  s.style.background = cols.length ? `linear-gradient(90deg,${cols.map((h, i) => `${h} ${i * 100 / cols.length}% ${(i + 1) * 100 / cols.length}%`).join(',')})` : ''; s.hidden = !cols.length; }
