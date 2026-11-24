// Which bank questions each game uses, so no game shows a question another game is using that week.
import { seeded as seededP, shuffle as shuffleP } from './play.js';
const sd = n => { let x = n * 9301 + 49297; return () => (x = (x * 9301 + 49297) % 233280) / 233280; }; // same as app.js
export const btbDay = ukDay => Math.max(1, ukDay - 20779); // Beat the Brain #1 was 23 Nov 2026
export const mondayUkDay = w => w * 7 - 3;
// Beat the Brain's Hard and Expert questions for a run of its days (same order as the daily page).
export function btbTexts(BANK, fromDay, toDay) {
  const out = new Set();
  for (const l of [3, 4]) {
    const r = sd(l * 9973), Q = BANK.filter(q => q[0] === l).map(q => [r(), q]).sort((a, b) => a[0] - b[0]).map(x => x[1]);
    for (let d = Math.max(1, fromDay); d <= toDay; d++) { const st = ((d - 1) * 5) % Q.length; for (let k = 0; k < 5; k++) out.add(Q[(st + k) % Q.length][2]); }
  }
  return out;
}
// Weekly Expert's ten for week W, skipping anything Beat the Brain uses that week.
export function weeklyExpertQs(BANK, W) {
  const d0 = btbDay(mondayUkDay(W)), busy = btbTexts(BANK, d0, d0 + 6);
  const pool = shuffleP(BANK.filter(q => q[0] === 4), seededP(99)), start = (W * 10) % pool.length, out = [];
  for (let k = 0; out.length < 10 && k < pool.length; k++) { const q = pool[(start + k) % pool.length]; if (!busy.has(q[2])) out.push(q); }
  for (let k = 0; out.length < 10; k++) out.push(pool[(start + k) % pool.length]); // only if the pool is ever too small
  return out;
}
// Everything the daily and weekly games use in week W: the Pub Quiz avoids all of it.
export function weekBusy(BANK, W) {
  const d0 = btbDay(mondayUkDay(W)), s = btbTexts(BANK, d0, d0 + 6);
  weeklyExpertQs(BANK, W).forEach(q => s.add(q[2]));
  return s;
}
