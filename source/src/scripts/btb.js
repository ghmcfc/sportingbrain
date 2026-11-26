// Beat the Brain: the same daily questions, Brain score and streak rules as before, shared by the UK daily page.
import { ALL as BANK } from '../data/bank_all.js';
import { store } from './play.js';
function seeded(n){ let x=n*9301+49297; return ()=> (x=(x*9301+49297)%233280)/233280; }
function ukParts(d=new Date()){ const s=d.toLocaleDateString('en-GB',{timeZone:'Europe/London'}); const [dd,mm,yy]=s.split('/'); return {y:+yy,m:+mm,d:+dd}; }
export function ukKey(d=new Date()){ const p=ukParts(d); return `${p.y}-${String(p.m).padStart(2,'0')}-${String(p.d).padStart(2,'0')}`; }
const LAUNCH = Date.UTC(2026,10,23);
export const DAY = Math.max(1, (()=>{ const p=ukParts(); return Math.floor((Date.UTC(p.y,p.m-1,p.d)-LAUNCH)/86400000)+1; })());
const CURVE_FROM=4; export const LVNAME=['','Easy','Medium','Hard','Expert'];
const btbPool=l=>{ const r=seeded(l*9973); return BANK.filter(q=>q[0]===l).map(q=>[r(),q]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); };
export function btbQs(day,l){ const r=seeded(day*7+l), pick=(lv,k,per)=>{ const Q=btbPool(lv); return Q[((day-1)*per+k)%Q.length]; };
  const curve=l===3&&day>=CURVE_FROM, raw=curve?[pick(2,0,1),pick(3,0,5),pick(3,1,5),pick(3,2,5),pick(4,0,5)]:[0,1,2,3,4].map(k=>pick(l,k,5));
  return raw.map(q=>{ const idx=[0,1,2,3].sort(()=>r()-.5); return {q:q[2],o:idx.map(i=>q[3][i]),a:idx.indexOf(0),f:q[5],sport:q[1],lv:curve?q[0]:l}; }); }
export const btbBrain=(day,l)=>Math.max(1,Math.min(5,[0,4,3,2,2][l]+Math.floor(seeded(day*3+l)()*2)));
const BRAIN_LINES=['It has done its homework.','It reckons you will fold on question five.','It has never watched a ball kicked and still fancies itself.','It says this is the easiest set all week. It would.','It thinks your group chat will crumble.','It does not sleep, so it had time to revise.','It is quietly confident. Prove it wrong.','It says nobody in your family will beat it.','It got question five. Will you?','It says you only know one sport. Go on.'];
export const brainLine=day=>BRAIN_LINES[(day*7)%BRAIN_LINES.length];
// Saves a finished game: the result, the streak, and the played and beaten counts (same keys as before).
export function btbSave(day,l,marks,brain){ const key=day===DAY?ukKey():'arch'+day, score=marks.filter(Boolean).length;
  store.set(`daily_${key}_${l}`,{marks}); store.set('daily_'+key,{marks}); if(day===DAY&&l===3) store.set('hook_'+DAY,marks);
  if(day!==DAY) return; const y=new Date(); y.setDate(y.getDate()-1); const last=store.get('lastday',null); let st=store.get('streak',0);
  if(last===key) return; st = last===ukKey(y) ? st+1 : 1;
  store.set('streak',st); store.set('lastday',key); store.set('played',store.get('played',0)+1); if(score>brain) store.set('beaten',store.get('beaten',0)+1); }
