import { BANK as BASE_BANK } from './bank.js';
import { BANK2A } from './bank2a.js';
import { BANK2B } from './bank2b.js';
import { BANK2C } from './bank2c.js';
import { BANK2D } from './bank2d.js';
const key = q => q[2].toLowerCase().replace(/[^a-z]/g, '').slice(0, 40), seen = new Set();
// Original bank first, then additions; anything repeating an earlier question is dropped.
export const ALL = [...BASE_BANK, ...BANK2A, ...BANK2B, ...BANK2C, ...BANK2D].filter(q => { const k = key(q); if (seen.has(k)) return false; seen.add(k); return true; });
