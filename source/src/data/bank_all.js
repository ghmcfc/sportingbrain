import { BANK as BASE_BANK } from './bank.js';
import { BANK2A } from './bank2a.js';
import { BANK2B } from './bank2b.js';
import { BANK2C } from './bank2c.js';
import { BANK2D } from './bank2d.js';
import { BANK2E } from './bank2e.js';
const key = q => q[2].toLowerCase().replace(/[^a-z]/g, '').slice(0, 40), seen = new Set();
// Original bank first, then additions; anything repeating an earlier question is dropped.
// Too basic for the adult site (Super Prompt section 6). Kept out of every adult game.
const JUVENILE = ['How many balls are','How many points is a try worth','How many players does a netball','What is the maximum break','What does \"LBW\" stand for','What does lbw stand for','How many players does a rugby league','How many players does each team have','What is the championship game of the NFL','What is the NFL\'s championship game','How many points is a shot from beyond','How many runs is','In golf, what is a score of one under','What is one shot under par','How many players are on the pitch','What colour card','Which club plays home games at Anfield','Which club is known as the Gunners','In which city do both Celtic','Which club play at St James','Which country are known as the Springboks','On what surface is Wimbledon','What is a score of zero','Which Grand Slam is played at Roland','How many holes','Which event involves a hammer','What does a chequered flag','How many points is a touchdown','What score do players start from','What colour jersey does the leader','The leader of the Tour de France wears','Which club does the Premier League\'s','Which boxer was known as','Which team does the \"Prancing Horse\"','How many players does each netball','How many strikes'];
const isJuvenile = q => JUVENILE.some(j => q[2].startsWith(j));
export const ALL = [...BASE_BANK, ...BANK2A, ...BANK2B, ...BANK2C, ...BANK2D, ...BANK2E].filter(q => !isJuvenile(q)).filter(q => { const k = key(q); if (seen.has(k)) return false; seen.add(k); return true; });
