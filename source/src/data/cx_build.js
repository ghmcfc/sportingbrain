// Builds the Connections schedule from the group library, the same way every time.
// Rules: four groups from four different families; no group repeats within 25 days;
// every name shown belongs to only one of the four groups (checked against members and hidden extras);
// no puzzle repeats. The hand-made puzzles are spread through the schedule.
import { GROUPS } from './cx_groups.js';
import { CONNECTIONS } from './connections.js';
const rng = s => () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const norm = w => w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]/g, '');
export const CX_DAY0 = 20781; // 24 Nov 2026 is day 0 of the schedule
export function buildSchedule(days = 420, seed = 20261125, firstHand = 5) {
  const r = rng(seed), shuffle = a => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const where = new Map(); // word -> set of group indexes it fits
  GROUPS.forEach((g, gi) => [...g[3], ...(g[4] || [])].forEach(w => { const k = norm(w); if (!where.has(k)) where.set(k, new Set()); where.get(k).add(gi); }));
  const out = [], seen = new Set(), last = new Map();
  let hand = 0; const H = CONNECTIONS.map((_, i) => CONNECTIONS[(i + firstHand) % CONNECTIONS.length]);
  for (let d = 0; out.length < days; d++) {
    if (d % 14 === 0 && hand < H.length) { out.push(H[hand++]); continue; }
    let made = null;
    for (let t = 0; t < 4000 && !made; t++) {
      const pool = shuffle(GROUPS.map((_, i) => i).filter(i => !last.has(i) || out.length - last.get(i) > 25));
      const pick = [], fams = new Set();
      for (const gi of pool) { if (!fams.has(GROUPS[gi][2])) { pick.push(gi); fams.add(GROUPS[gi][2]); } if (pick.length === 4) break; }
      if (pick.length < 4) continue;
      const set = new Set(pick), used = new Set(), groups = [];
      let ok = true;
      for (const gi of pick) {
        const safe = shuffle(GROUPS[gi][3]).filter(w => { const s = where.get(norm(w)); return [...s].every(x => x === gi || !set.has(x)) && !used.has(norm(w)); });
        if (safe.length < 4) { ok = false; break; }
        const four = safe.slice(0, 4); four.forEach(w => used.add(norm(w))); groups.push([GROUPS[gi][0], GROUPS[gi][1] + r() * 0.5, four]);
      }
      if (!ok) continue;
      const sig = groups.map(g => g[0] + ':' + g[2].slice().sort().join(',')).sort().join('|');
      if (seen.has(sig)) continue;
      seen.add(sig); pick.forEach(gi => last.set(gi, out.length));
      groups.sort((a, b) => a[1] - b[1]); made = groups.map((g, i) => [g[0], i + 1, g[2]]);
    }
    if (!made) throw new Error('Connections builder stuck on day ' + out.length);
    out.push(made);
  }
  return out;
}
