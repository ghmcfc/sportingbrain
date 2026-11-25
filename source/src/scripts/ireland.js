// Shared helpers for SportingBrain Ireland: the day number, your county and its colours, and share text.
import { COUNTIES, COUNTY_NAMES } from '../data/ireland.js';
import { store, ukDayNo, esc } from './play.js';
export const IE_DAY0 = 20781; // Irish Brain #1 was Wednesday 25 November 2026 (UK day 20782)
export const ieDay = () => Math.max(1, ukDayNo() - IE_DAY0);
export const getCounty = () => store.get('ie_county', '');
export const setCounty = c => store.set('ie_county', c);
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
export function countyPicker(el, onChange) {
  const cur = getCounty();
  el.innerHTML = `<label for="ieCo">Your county</label><select id="ieCo"><option value="">Pick your county</option>${COUNTY_NAMES.map(n => `<option${n === cur ? ' selected' : ''}>${esc(n)}</option>`).join('')}<option value="Abroad"${cur === 'Abroad' ? ' selected' : ''}>The diaspora (anywhere else)</option></select><span class="ie-chip" id="ieChip"></span><p>Your county goes on every score you share, in its colours. Kept on your device only.</p>`;
  const chip = el.querySelector('#ieChip'), draw = () => { const c = getCounty(); chip.innerHTML = c ? `${colourBar(c)} ${esc(c === 'Abroad' ? 'The diaspora' : c)}` : ''; };
  el.querySelector('#ieCo').onchange = e => { setCounty(e.target.value); draw(); window.sbTrack && sbTrack('ie-county-' + (e.target.value || 'none')); onChange && onChange(); };
  draw();
}
export const countyTag = () => { const c = getCounty(); return !c ? '' : c === 'Abroad' ? ' · Playing for the diaspora' : ` · Playing for ${c}`; };
