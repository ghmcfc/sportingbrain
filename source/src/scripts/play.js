// Shared helpers for the games pages.
import { PLAY } from '../data/playlist.js';
export const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
export const SITE = 'https://sportingbrain.com' + BASE;
export const $ = (s, r = document) => r.querySelector(s);
export const store = {
  get(k, d) { try { const v = localStorage.getItem('sb_' + k); return v === null ? d : JSON.parse(v); } catch (_) { return d; } },
  set(k, v) { try { localStorage.setItem('sb_' + k, JSON.stringify(v)); } catch (_) {} },
};
export function ukNow() { return new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })); }
export function ukDayNo() { const u = ukNow(); return Math.floor(Date.UTC(u.getFullYear(), u.getMonth(), u.getDate()) / 86400000); }
export function weekNo() { return Math.floor((ukDayNo() + 3) / 7); } // changes each Monday
export function seeded(s) { let x = (Math.abs(s) % 2147483646) + 1; return () => (x = (x * 48271) % 2147483647) / 2147483647; }
export function shuffle(a, r = Math.random) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
export const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export function toast(msg) { let t = document.getElementById('pg-toast'); if (!t) { t = document.createElement('div'); t.id = 'pg-toast'; t.className = 'pg-toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); } t.textContent = msg; t.classList.add('on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2600); }
export async function share(text, url) {
  text = withBadgeLazy(text);
  const full = url ? text + '\n' + url : text;
  if (navigator.share) { try { await navigator.share({ text: full }); return; } catch (_) { return; } }
  try { await navigator.clipboard.writeText(full); toast('Copied. Paste it anywhere.'); } catch (_) { prompt('Copy this:', full); }
}
// Your Colours badge, read straight from storage so this file has no extra imports.
function withBadgeLazy(text) { const c = store.get('colours', null), n = c && c.badge && c.picks && c.picks[c.badge];
  if (!n || n === 'Somewhere else' || /Playing for/.test(text)) return text; const i = text.indexOf('\n'); return i < 0 ? text + ' · Playing for ' + n : text.slice(0, i) + ' · Playing for ' + n + text.slice(i); }
export function badgeLineHTML() { const c = store.get('colours', null), n = c && c.badge && c.picks && c.picks[c.badge];
  const cols = (c && c.cols) || [], bar = cols.length ? `<span class="yc-cols" aria-hidden="true">${cols.map(h => `<i style="background:${h}"></i>`).join('')}</span>` : '';
  return n ? `<p class="yc-line">${bar} Playing for <b>${esc(n)}</b> · <a href="${BASE}colours.html">Change</a></p>`
    : `<p class="yc-line"><a href="${BASE}colours.html" data-track="colours-invite"><b>Pick your team</b></a> and it goes on every score you share, in its colours.</p>`; }
// Challenge-your-mates links: the score travels in the link, nothing is stored on a server.
export function challengeUrl(name, score, out) { const u = new URL(location.href); u.search = ''; u.searchParams.set('vs', (name || 'A mate').slice(0, 20)); u.searchParams.set('s', score + '/' + out); return u.href; }
export function showChallenge(el) {
  const p = new URLSearchParams(location.search), vs = p.get('vs'), s = p.get('s');
  if (!vs || !s || !/^\d{1,3}\/\d{1,3}$/.test(s)) return;
  el.innerHTML = `<div class="pg-vs"><b>${esc(vs)} scored ${esc(s)}.</b> Can you beat it?</div>`;
}
export function challengeBox(score, out, label) {
  const d = document.createElement('div'); d.className = 'pg-chal';
  d.innerHTML = `<label>Your name for the challenge link <input maxlength="20" placeholder="First name"></label><div class="pg-btns"><button class="btn gold" data-a="ch">Challenge a mate</button><button class="btn ghost" data-a="sh">Share score</button></div>`;
  d.addEventListener('click', e => { const a = e.target.closest('[data-a]'); if (!a) return; const n = d.querySelector('input').value.trim();
    if (a.dataset.a === 'ch') share(`I scored ${score}/${out} on ${label} at SportingBrain. Beat that.`, challengeUrl(n, score, out));
    else share(`SportingBrain ${label}: ${score}/${out}`, location.origin + location.pathname); });
  d.appendChild(endNav());
  return d;
}
export function markPlayed(g) { store.set('pl_' + g, true); const p = store.get('pg_played', {}); p[g] = (p[g] || 0) + 1; store.set('pg_played', p);
  const u = ukNow(), k = `${u.getFullYear()}-${String(u.getMonth() + 1).padStart(2, '0')}-${String(u.getDate()).padStart(2, '0')}`, d = store.get('playdays', []); if (!d.includes(k)) { d.push(k); store.set('playdays', d.slice(-30)); }
  setTimeout(() => window.SB_maybeNewsletter && window.SB_maybeNewsletter(), 1500); }

// End-of-game navigation: a random next game, or home. Kids Zone pages stay inside the Kids Zone.
export const KIDS_GAMES = [['kids/9-12', 'Junior Brain quiz'], ['kids/6-8', 'Little Legends quiz'], ['kids/true-or-false', 'True or False'], ['kids/guess-the-sport', 'Guess the Sport'], ['kids/guess-the-player', 'Guess the Player'], ['kids/the-grid', 'The Grid'], ['kids/which-sport', 'Which Sport Are You?'], ['kids/academy', 'Brain Academy']];
export function endNav() {
  const kids = !!document.querySelector('.kz'), here = location.pathname.replace(/\.html$/, '');
  const pool = kids ? KIDS_GAMES : PLAY.filter(g => !['archive', 'passport', 'sports-day', 'laughs'].includes(g[0])).map(g => [g[0], g[1]]);
  const opts = pool.filter(g => !here.endsWith('/' + g[0])), g = opts[Math.floor(Math.random() * opts.length)];
  const d = document.createElement('div'); d.className = 'end-nav';
  d.innerHTML = (kids ? '' : badgeLineHTML()) + `<a class="btn gold" href="${BASE}${g[0]}.html">Next game: ${esc(g[1])}</a><a class="btn ghost" href="${BASE}${kids ? 'kids.html' : ''}">${kids ? 'Kids Zone home' : 'Home'}</a>${kids ? '' : '<div data-app-card></div>'}`;
  return d;
}
