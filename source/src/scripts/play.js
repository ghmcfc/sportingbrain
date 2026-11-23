// Shared helpers for the games pages.
export const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
export const SITE = 'https://ghmcfc.github.io' + BASE;
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
  const full = url ? text + '\n' + url : text;
  if (navigator.share) { try { await navigator.share({ text: full }); return; } catch (_) { return; } }
  try { await navigator.clipboard.writeText(full); toast('Copied. Paste it anywhere.'); } catch (_) { prompt('Copy this:', full); }
}
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
  return d;
}
export function markPlayed(g) { store.set('pl_' + g, true); const p = store.get('pg_played', {}); p[g] = (p[g] || 0) + 1; store.set('pg_played', p);
  const u = ukNow(), k = `${u.getFullYear()}-${String(u.getMonth() + 1).padStart(2, '0')}-${String(u.getDate()).padStart(2, '0')}`, d = store.get('playdays', []); if (!d.includes(k)) { d.push(k); store.set('playdays', d.slice(-30)); }
  setTimeout(() => window.SB_maybeNewsletter && window.SB_maybeNewsletter(), 1500); }
