// Picks a related, credited, self-hosted photo for a story: the actual ground if the story names one,
// otherwise a ground from the same sport (seeded so it stays the same all day), otherwise the house sport photo.
import { VENUES } from '../data/venues.js';
import META from '../data/venues.json';
const BASE = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const slug = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
const V = VENUES.map(v => ({ k: slug(v[0]), name: v[1], alt: v[2], sport: v[3], place: v[4] })).filter(v => META[v.k]).map(v => ({ ...v, m: META[v.k] }));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const SPORT = s => ({ "Women's football": 'Football', Rugby: 'Rugby union' }[s] || s);
const hit = (text, n) => n.length >= 4 && new RegExp('(^|[^a-z])' + n.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '([^a-z]|$)', 'i').test(text);
export function photoFor(text, sport, seed = 0, venue = '') {
  const t = String(text || ''); let file = false;
  let v = venue ? V.find(x => x.name === venue || x.alt.includes(venue.toLowerCase())) : null;
  if (!v) v = V.find(x => [x.name, ...x.alt].some(n => hit(t, n)));
  if (!v) { const pool = V.filter(x => x.sport === SPORT(sport)); if (pool.length) { v = pool[Math.abs(seed) % pool.length]; file = true; } }
  if (v) return { src: `${BASE}photos/venues/${v.m.file}`, alt: `${file ? 'File photo of ' : ''}${v.name}, ${v.place}`, credit: `${file ? 'File photo: ' : ''}${v.name}. Photo: ${v.m.author}, ${v.m.licence}, Wikimedia Commons` };
  const u = globalThis.SB_PHOTO ? globalThis.SB_PHOTO(sport, 800) : null, c = globalThis.SB_CREDIT ? globalThis.SB_CREDIT(sport) : null;
  return u && c ? { src: u, alt: `File photo: ${c.what}`, credit: `File photo: ${c.what}. Photo: ${c.by}, Wikimedia Commons` } : null;
}
export function figure(p, cls = '') {
  return p ? `<figure class="sfig ${cls}"><img src="${p.src}" alt="${esc(p.alt)}" loading="lazy" width="800" height="450"><figcaption>${esc(p.credit)}</figcaption></figure>` : '';
}
