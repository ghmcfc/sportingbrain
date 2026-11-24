import '../data/data.js';
import '../data/content.js';
import { FLASHBACKS } from '../data/flashbacks.js';
import { REPLAYS } from '../data/replays.js';
import { ALL as BANK } from '../data/bank_all.js';
import { btbTexts, weeklyExpertQs } from './qsched.js';
import { ukDayNo } from './play.js';
import { GUIDES } from '../data/guides.js';
import { WEEK } from '../data/week.js';
import { PLAY } from '../data/playlist.js';
import { FOULS, COUNTDOWN } from '../data/games.js';
import VIDS from '../data/feeds/videos.json';
import { lotdIndex, renderClip } from './laughs.js';
import { icon } from './icons.js';
import { BOOKS } from '../data/books.js';
import { photoFor, figure } from './photos.js';
(function(){
'use strict';
const BASE=(document.documentElement.dataset.base||'/');
// ---------- storage: device only ----------
const store = {
  get(k,d){ try{ const v=localStorage.getItem('sb_'+k); return v===null?d:JSON.parse(v);}catch(e){return d;} },
  set(k,v){ try{ localStorage.setItem('sb_'+k,JSON.stringify(v)); }catch(e){} }
};
const $ = (s,r=document)=>r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const COL = window.SB_SPORT_COLOURS || {};
const colour = s => COL[s] || '#1F3864';
const params = new URLSearchParams(location.search);

// ---------- dates (UK time) ----------
function ukParts(d=new Date()){ const s=d.toLocaleDateString('en-GB',{timeZone:'Europe/London'}); const [dd,mm,yy]=s.split('/'); return {y:+yy,m:+mm,d:+dd}; }
function ukKey(d=new Date()){ const p=ukParts(d); return `${p.y}-${String(p.m).padStart(2,'0')}-${String(p.d).padStart(2,'0')}`; }
const LAUNCH = Date.UTC(2026,10,23);
function dayNo(){ const p=ukParts(); return Math.floor((Date.UTC(p.y,p.m-1,p.d)-LAUNCH)/86400000)+1; }
const DAY = Math.max(1, dayNo());
const pickDaily = (arr, offset=0) => arr[((DAY-1)+offset) % arr.length];
function seeded(n){ let x=n*9301+49297; return ()=> (x=(x*9301+49297)%233280)/233280; }
function shuffle(a, rnd=Math.random){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

// ---------- ui helpers ----------
function toast(msg){ let t=$('.toast'); if(!t){t=document.createElement('div');t.className='toast';t.setAttribute('role','status');document.body.appendChild(t);} t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2000); }
async function share(text){
  try{ if(navigator.share){ await navigator.share({text}); return; } }catch(e){ return; }
  try{ await navigator.clipboard.writeText(text); toast('Copied! Paste it in the group chat'); }catch(e){ prompt('Copy your score card:', text); }
}
function confetti(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c=document.createElement('canvas'); c.id='confetti'; document.body.appendChild(c);
  const x=c.getContext('2d'); c.width=innerWidth; c.height=innerHeight;
  const cols=['#FFC107','#C2185B','#1E8E3E','#1565C0','#F48FB1','#fff'];
  const P=Array.from({length:140},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.5,r:4+Math.random()*5,c:cols[Math.random()*cols.length|0],vy:2+Math.random()*3,vx:-1.5+Math.random()*3,a:Math.random()*6}));
  let t=0; (function f(){ x.clearRect(0,0,c.width,c.height); P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.a+=.1;x.fillStyle=p.c;x.save();x.translate(p.x,p.y);x.rotate(p.a);x.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.6);x.restore();}); if(++t<200) requestAnimationFrame(f); else c.remove(); })();
}
function countdown(el){ function tick(){ const now=new Date(); const lon=new Date(now.toLocaleString('en-US',{timeZone:'Europe/London'})); const nx=new Date(lon); nx.setHours(24,0,0,0); let s=Math.max(0,Math.floor((nx-lon)/1000)); const h=String(Math.floor(s/3600)).padStart(2,'0'); s%=3600; el.textContent=`${h}:${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`; } tick(); setInterval(tick,1000); }
function next3(items){ return `<div class="gtiles three-up">${items.map(i=>{ const sl=i[2].replace(BASE,'').replace(/\.html.*$/,''); const g=PLAY.find(x=>x[0]===sl)||[sl,i[1],'','','#0F1E36'];
  return `<a class="gt" href="${i[2]}" style="--c:${g[4]}"><span class="gt-ic">${icon(sl,40)}</span><span class="gt-tx"><b>${esc(i[1])}</b>${g[2]?`<small>${esc(g[2])}</small>`:''}</span></a>`; }).join('')}</div>`; }
const MORE = PLAY.filter(g=>!['archive','passport','sports-day','challenge','advent'].includes(g[0])).map(g=>['',g[1],BASE+g[0]+'.html']);
const KIDZ = !!document.querySelector('.kz');
const KIDS_GAMES=[['kids/9-12','Junior Brain quiz'],['kids/6-8','Little Legends quiz'],['kids/true-or-false','True or False'],['kids/guess-the-sport','Guess the Sport'],['kids/guess-the-player','Guess the Player'],['kids/the-grid','The Grid'],['kids/which-sport','Which Sport Are You?'],['kids/academy','Brain Academy']];
const endNavHTML=()=>{ const here=location.pathname.replace(/\.html$/,''); const pool=(KIDZ?KIDS_GAMES:PLAY.filter(g=>!['archive','passport','sports-day','laughs'].includes(g[0])).map(g=>[g[0],g[1]])).filter(g=>!here.endsWith('/'+g[0])); const g=pool[Math.floor(Math.random()*pool.length)];
  return `<div class="end-nav"><a class="btn gold" href="${BASE}${g[0]}.html">Next game: ${esc(g[1])}</a><a class="btn ghost" href="${BASE}${KIDZ?'kids.html':''}">${KIDZ?'Kids Zone home':'Home'}</a></div>`; };
const moreExcept = href => KIDZ ? '' : next3(shuffle(MORE.filter(m=>!href||!m[2].endsWith(href))).slice(0,3));

// theme + font
if(store.get('dark', matchMedia('(prefers-color-scheme: dark)').matches)) document.body.classList.add('dark');
if(store.get('dys',false)) document.body.classList.add('dyslexic'); if(store.get('reduce_motion',false)) document.body.classList.add('reduce-motion'); if(store.get('big_text',false)) document.body.classList.add('big-text');
if(store.get('dys',false)) document.body.classList.add('dyslexic');
document.addEventListener('click', e=>{
  if(e.target.closest('[data-dark]')){ const on=!document.body.classList.contains('dark'); document.body.classList.toggle('dark',on); store.set('dark',on); }
  if(e.target.closest('[data-dys]')){ e.preventDefault(); const on=!document.body.classList.contains('dyslexic'); document.body.classList.toggle('dyslexic',on); store.set('dys',on); }
});
const SITE=location.origin+BASE;
const PITCH='SportingBrain: the free daily sports hub. Puzzles, games and stories from every sport. Can you beat the Brain?';
document.addEventListener('click', e=>{
  if(e.target.closest('[data-share-site]')){ share(`${PITCH}\n${SITE}`); }
  if(e.target.closest('[data-copy-link]')){ navigator.clipboard.writeText(SITE).then(()=>toast('Link copied!'),()=>prompt('Copy this link:',SITE)); }
});
document.querySelectorAll('[data-share-to]').forEach(a=>{});
const td=$('#today-date'); if(td) td.textContent=new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',timeZone:'Europe/London'});


// ---------- habits: visits, streak savers, badges, welcome ----------
function isoWeek(d=new Date()){ const t=new Date(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())); const day=t.getUTCDay()||7; t.setUTCDate(t.getUTCDate()+4-day); const y0=new Date(Date.UTC(t.getUTCFullYear(),0,1)); return t.getUTCFullYear()+'-W'+Math.ceil(((t-y0)/86400000+1)/7); }
(function(){ const v=store.get('visitdays',[]); const k=ukKey(); if(!v.includes(k)){ v.push(k); store.set('visitdays',v.slice(-60)); } })();
window.addEventListener('message',e=>{ try{ const d=typeof e.data==='string'?JSON.parse(e.data):e.data; if(d&&d.event==='Tally.FormSubmitted'){ store.set('nl_done',true); toast("You're in! See you in the morning."); } }catch(_){} });
function saverAvailable(){ return store.get('saver_week','')!==isoWeek(); }
function streakSaverLine(){ return saverAvailable()?'Streak saver ready this week':'Streak saver used this week'; }
function markPlayed(g){ store.set('pl_'+g,true); const d=store.get('playdays',[]), k=ukKey(); if(!d.includes(k)){ d.push(k); store.set('playdays',d.slice(-30)); } }
// Prompt rules (Super Prompt 5A): one interruptive prompt per visit, two a week, none if tips are switched off.
const PROMPT={ ok(){ if(store.get('tips_off',false)) return false; try{ if(sessionStorage.getItem('sb_prompt')) return false; }catch(e){} const w=store.get('prompt_week',{w:'',n:0}); return !(w.w===isoWeek()&&w.n>=2); },
  used(){ try{ sessionStorage.setItem('sb_prompt','1'); }catch(e){} const w=store.get('prompt_week',{w:'',n:0}); store.set('prompt_week',{w:isoWeek(),n:(w.w===isoWeek()?w.n:0)+1}); } };
function maybeNewsletter(){ let _in=false; try{ _in=localStorage.getItem('sb_nl')==='1'; }catch(e){} if(_in || store.get('nl_done',false) || store.get('playdays',[]).length<2 || Date.now()-store.get('nl_no',0)<30*864e5 || !PROMPT.ok()) return;
  PROMPT.used(); const n=document.createElement('div'); n.className='nudge'; n.setAttribute('role','dialog'); n.setAttribute('aria-label','Newsletter');
  n.innerHTML=`<span>The Weekly Brain: the week's five hardest questions, every Friday. Free.</span><a class="btn gold" href="${BASE}newsletter.html" data-track="nl-nudge-click">Send it to me</a><button class="btn ghost" aria-label="No thanks">No thanks</button>`;
  document.body.appendChild(n); const close=()=>{ n.remove(); store.set('nl_no',Date.now()); }; n.querySelector('button').onclick=close; document.addEventListener('keydown',function k(e){ if(e.key==='Escape'){ close(); document.removeEventListener('keydown',k); } }); }
window.SB_maybeNewsletter=maybeNewsletter;
function badges(){
  const st=store.get('streak',0), beaten=store.get('beaten',0), played=store.get('played',0);
  const games=['daily','hl','gtp','tf','speed','grid','emoji'].filter(g=>store.get('pl_'+g,false)).length;
  return [
    {e:'🎉',n:'First game',got:played>=1,how:'Play Beat the Brain once'},
    {e:'🔥',n:'3-day streak',got:st>=3,how:'Play three days in a row'},
    {e:'🏅',n:'7-day streak',got:st>=7,how:'Play seven days in a row'},
    {e:'🧠',n:'Beat the Brain',got:beaten>=1,how:'Score more than the Brain'},
    {e:'👑',n:'Brain beater x10',got:beaten>=10,how:'Beat the Brain ten times'},
    {e:'🌍',n:'All-rounder',got:games>=7,how:'Play every game on the site'},
    {e:'📈',n:'Stat master',got:store.get('hl_best',0)>=10,how:'Get 10 in a row in Higher or Lower'},
    {e:'🧩',n:'Grid cracker',got:store.get('grid_solved',0)>=1,how:'Solve The Grid'}];
}
const DEFAULT_USP=[['🎯','Call It, every day','We freeze a real moment from a real final. You call what happens next.'],
  ['🌍','Every sport, every fan','Football first, then cricket to darts, F1 to kabaddi. Men\'s and women\'s, same billing.'],
  ['👥','Take on your mates','Share your score to the group chat and see who beats the Brain.'],
  ['📼','Flashback and replays','Forgotten moments told properly, and great finals replayed ball by ball.'],
  ['✅','Free and family-safe','No sign-up to play. No betting. Ever.']];
function welcome(USP, force){ USP=USP||DEFAULT_USP;
  if(new URLSearchParams(location.search).has('welcome')) force=true;
  const seen=store.get('welcomed_at',0), wk=7*86400000;
  if(!force && !PROMPT.ok()) return;
  if(!force && ((document.getElementById('main')||{dataset:{}}).dataset.page==='tiktok' || store.get('played',0)>0 || store.get('nl_done',false) || (store.get('welcomed',false) && Date.now()-seen<wk) || store.get('welcome_count',0)>=2)) return;
  if(!force) PROMPT.used();
  store.set('welcomed',true); store.set('welcomed_at',Date.now()); store.set('welcome_count',store.get('welcome_count',0)+1);
  const mobile=matchMedia('(max-width:767px)').matches;
  const w=document.createElement('div'); w.className='welcome '+(mobile?'sheet':'modal'); w.setAttribute('role','dialog'); w.setAttribute('aria-modal','true'); w.setAttribute('aria-labelledby','wtitle');
  const pts=(USP||[]).slice(0, mobile?3:5);
  w.innerHTML=`<div class="w-back"></div><div class="w-box"><button class="w-x" aria-label="Close">✕</button>
    <div class="w-head"><div><span class="mark" aria-hidden="true">SB</span><h2 id="wtitle">The smartest free sports site in the world.</h2><p class="w-sub">A daily game built on real matches, the stories nobody else tells, and data you can play with. No betting, ever.</p></div></div>
    <ul class="usp in-w">${pts.map(u=>`<li><span>${u[0]}</span><div><b>${u[1]}</b>${mobile?'':`<small>${u[2]}</small>`}</div></li>`).join('')}</ul>
    <div class="row w-btns"><a class="btn gold" href="${BASE}#hook">Play today's challenge</a><button class="btn ghost light w-look">Look around first</button></div></div>`;
  document.body.appendChild(w); document.body.classList.add('w-open');
  const close=()=>{ w.classList.add('out'); document.body.classList.remove('w-open'); setTimeout(()=>w.remove(),250); document.removeEventListener('keydown',esc_); };
  const esc_=e=>{ if(e.key==='Escape') close(); };
  document.addEventListener('keydown',esc_);
  w.querySelector('.w-x').onclick=close; w.querySelector('.w-look').onclick=close; w.querySelector('.w-back').onclick=close;
  // On the home page the challenge is on this page: close the pop-up and scroll to it. Elsewhere the link goes home.
  w.querySelector('.btn.gold').onclick=e=>{ const h=document.getElementById('hook'); if(h){ e.preventDefault(); close(); setTimeout(()=>h.scrollIntoView({behavior:'smooth',block:'start'}),260); } };
  let y0=null; w.querySelector('.w-box').addEventListener('touchstart',e=>y0=e.touches[0].clientY,{passive:true}); w.querySelector('.w-box').addEventListener('touchend',e=>{ if(y0!==null && e.changedTouches[0].clientY-y0>60) close(); y0=null; });
  setTimeout(()=>w.querySelector('.btn.gold').focus(),50);
}
document.addEventListener('click',e=>{ if(e.target.closest('[data-welcome]')){ e.preventDefault(); welcome(window.SB_USP||null,true); } });

// ---------- shared quiz runner ----------
function runQuiz(root, qs, opts){
  const N=qs.length; let i=0, marks=[];
  root.innerHTML=`<div class="progress" id="bar"></div><div class="small" id="qsub"></div><div class="q" id="qt"></div><div class="opts" id="op"></div><div class="fact" id="fx" hidden></div><p><button class="btn wide" id="nx" hidden>Next</button></p>`;
  const bar=()=>{$('#bar',root).innerHTML=qs.map((_,k)=>`<i class="${k<marks.length?(marks[k]?'ok':'no'):(k===i?'now':'')}"></i>`).join('');};
  function show(){ bar(); const q=qs[i]; $('#qsub',root).textContent=q.s?q.s:`Question ${i+1} of ${N}`; $('#qt',root).textContent=q.q; $('#fx',root).hidden=true; $('#nx',root).hidden=true;
    const op=$('#op',root); op.innerHTML=''; q.o.forEach((o,k)=>{const b=document.createElement('button');b.className='opt';b.textContent=o;b.onclick=()=>answer(k);op.appendChild(b);}); }
  function answer(k){ const q=qs[i]; const bs=root.querySelectorAll('.opt'); bs.forEach((b,j)=>{b.disabled=true; if(j===q.a)b.classList.add('right');}); if(k!==q.a) bs[k].classList.add('wrong'); marks.push(k===q.a); bar();
    if(q.f){ $('#fx',root).textContent=(k===q.a?'Correct! ':'Not this time. ')+q.f; $('#fx',root).hidden=false; }
    const nx=$('#nx',root); nx.textContent=i<N-1?'Next question':'See how you did'; nx.hidden=false; }
  $('#nx',root).onclick=()=>{ i++; if(i<N) show(); else opts.done(marks); };
  show();
}

const P = $('#main') ? $('#main').dataset.page : '';
const main = $('#game-root') || $('#main');

// ================= HOME =================
if(P==='home'){
  main.classList.add('wide');
  const played=store.get('daily_'+ukKey(),null);
  const brainScore = 2+Math.floor(seeded(DAY)()*3);
  const story=pickDaily(SB_STORIES), sport=pickDaily(GUIDES,1), stat=pickDaily(SB_STATS);
  const p=ukParts(); const todayN=Date.UTC(2001,p.m-1,p.d);
  const mdNow=`${String(p.m).padStart(2,'0')}-${String(p.d).padStart(2,'0')}`;
  const H=(window.SB_HEROES_WEEKS||[]).find(w=>w.from<=w.to ? (mdNow>=w.from&&mdNow<=w.to) : (mdNow>=w.from||mdNow<=w.to)) || null;
  const dist=md=>{const [m,d]=md.split('-').map(Number); let x=(Date.UTC(2001,m-1,d)-todayN)/86400000; if(x>182)x-=365; if(x<-182)x+=365; return x;};
  let tih=SB_TODAY.filter(e=>e.md===mdNow).sort((a,b)=>b.y-a.y);
  if(tih.length<4){ tih=tih.concat(SB_TODAY.filter(e=>e.md!==mdNow).sort((a,b)=>Math.abs(dist(a.md))-Math.abs(dist(b.md))||b.y-a.y).slice(0,4-tih.length)); }
  const dlabel=md=>new Date(Date.UTC(2001,+md.slice(0,2)-1,+md.slice(3))).toLocaleDateString('en-GB',{day:'numeric',month:'long',timeZone:'UTC'});
  const streak=store.get('streak',0), bestHL=store.get('hl_best',0), bestSp=store.get('speed_best',0);
  const photo=(k,w)=>window.SB_PHOTO?SB_PHOTO(k,w):null;
  const img=(k,alt,cls='ph')=>{const u=photo(k,800); return u?`<img class="${cls}" src="${u}" alt="${esc(alt)}" loading="lazy">`:'';};

  // tomorrow's teaser
  const tmr=new Date(Date.now()+86400000); const tdow=tmr.toLocaleDateString('en-GB',{weekday:'long',timeZone:'Europe/London'});
  const weekly={Monday:'the new Weekly Brain Challenge',Wednesday:'World Sport Wednesday',Friday:'the Friday Family Challenge',Sunday:'a fresh Cynical Round-Up'}[tdow];
  const tSport=pickDaily(GUIDES,2);

  // badges
  const B=badges();
  const tiles=[
    ['🎯','Call It',store.get('ci_'+DAY,null)?'Done today':'Make my call',BASE+'call-it.html','#F9A825'],
    ['🧠','Beat the Brain',played?`You: ${played.marks.filter(Boolean).length}/5`:`Brain: ${brainScore}/5`,BASE+'daily.html','#C2185B'],
    ['📈','Higher or Lower',`Best: ${bestHL}`,BASE+'higher-or-lower.html','#1565C0'],
    ['🕵️','Who Am I?',store.get('wa_'+DAY,null)?'Done today':'Five clues',BASE+'who-am-i.html','#6A1B9A'],
    ['🧩','Connections','Find 4 groups',BASE+'connections.html','#00695C'],
    ['⏱️','Speed Round',`Best: ${bestSp}`,BASE+'speed-round.html','#D32F2F'],
    ['🏟️','Ground Guesser','Name the venue',BASE+'ground-guesser.html','#EF6C00'],
    ['✅','True or False','Fact or fib?',BASE+'true-or-false.html','#2E7D32']];
  const USP=[['','Call It, every day','We freeze a real moment from a real final. You call what happens next.'],
    ['','Every sport, every fan','Football first, then cricket to darts, F1 to kabaddi. Men\'s and women\'s, same billing.'],
    ['','Take on your mates','Share your score to the group chat and see who beats the Brain.'],
    ['','Flashback and replays','Forgotten moments told properly, and great finals replayed ball by ball.'],
    ['','Free and family-safe','No sign-up to play. No betting. Ever.']];
  window.SB_USP=USP;
  const heroBg=photo('stadium',1600);
  const mdOf=d=>d?d.slice(5):null; const todayMd=mdNow;
  const soon=[0,1,2,3,4,5,6].map(k=>{const t=new Date(Date.now()+k*86400000); return [k,`${String(t.getUTCMonth()+1).padStart(2,'0')}-${String(t.getUTCDate()).padStart(2,'0')}`];});
  let fb=null, fbAnn='';
  for(const [k,md] of soon){ const f=FLASHBACKS.find(x=>mdOf(x.date)===md); if(f){ fb=f; const yrs=new Date().getUTCFullYear()-(+f.date.slice(0,4)); fbAnn=k===0?`${yrs} years ago today`:`${yrs} years ago this week`; break; } }
  if(!fb) fb=FLASHBACKS[DAY%FLASHBACKS.length];
  const RP6=REPLAYS.slice(0,6), rp=RP6[DAY%RP6.length];

  // today's Call It moment (same order as the Call It page)
  const CM=JSON.parse(($('#ciHome')||{}).textContent||'[]');
  const adTpl=n=>{const t=document.getElementById('ad-'+n);return t?t.innerHTML.trim():'';}, AD1=adTpl('home_leaderboard'), AD2=adTpl('home_infeed');
  const cOrder=CM.map((_,i)=>i).sort((a,b)=>((a*2654435761)%997)-((b*2654435761)%997));
  const cm=CM.length?CM[cOrder[(DAY-1+CM.length*10)%CM.length]]:null;
  const ciDone=store.get('ci_'+DAY,null);
  const fbImg=photo(fb.sport,1400);
  const PRI=['Football','Women\'s football','Cricket','Rugby union','Tennis','Formula 1','Athletics','Golf','Boxing','Snooker','Cycling','Netball','Rugby league'];
  const pri=x=>{const k=PRI.indexOf(x.s);return k<0?99:k;};
  const otdToday=SB_TODAY.filter(e=>e.md===mdNow).sort((a,b)=>pri(a)-pri(b)||a.y-b.y);
  const otd=(otdToday.length?otdToday:tih).slice(0,4);
  const LVL=[['Easy','#0B6E4F','Anyone who follows sport'],['Medium','#1F5FA8','Keen fans'],['Hard','#C8102E','The long-read crowd'],['Expert','#0F1E36','Pub-quiz champions']];
  const guidesPick=[...GUIDES].sort((a,b)=>((GUIDES.indexOf(a)*31+DAY)%GUIDES.length)-((GUIDES.indexOf(b)*31+DAY)%GUIDES.length)).slice(0,8);
  const more=FLASHBACKS.filter(f=>f.id!==fb.id).sort((a,b)=>((FLASHBACKS.indexOf(a)+DAY)%FLASHBACKS.length)-((FLASHBACKS.indexOf(b)+DAY)%FLASHBACKS.length)).slice(0,3);
  const yrOf=f=>(f.date||f.when).match(/\d{4}/)[0];

  const POOL=['sports-grid','connections','who-am-i','ground-guesser','call-it','call-it-football','daily','name-them-all','weekly-expert','pub-quiz','is-it-a-foul','stat-attack','pick-your-xi','stats-detective','higher-or-lower','speed-round','true-or-false'];
  const FIX=['connections','who-am-i','ground-guesser'];
  const rot=shuffle(POOL.filter(x=>!FIX.includes(x)),seeded(DAY*13)).slice(0,5);
  const dk=ukKey(), ud=Math.floor(Date.UTC(p.y,p.m-1,p.d)/86400000);
  const doneToday={connections:store.get('cx_'+ud,null)?.done,'who-am-i':store.get('wa_'+ud,null)?.done,'ground-guesser':!!store.get('gg3_'+ud,null),'call-it':!!store.get('ci_'+DAY,null),'call-it-football':!!store.get('fc_'+ud,null),daily:!!store.get('daily_'+dk,null)};
  const tile=sl=>{const g=PLAY.find(x=>x[0]===sl); if(!g) return ''; const d=doneToday[sl], daily=sl in doneToday;
    return `<a class="gt" href="${BASE}${sl}.html" style="--c:${g[4]}"><span class="gt-ic">${icon(sl,40)}</span><span class="gt-tx"><b>${esc(g[1])}</b><small>${esc(g[2])}</small>${daily?`<em class="${d?'done':'new'}">${d?'Played today':'New today'}</em>`:''}</span></a>`;};
  const W3=WEEK.stories.slice(0,4), lead=W3[0];
  const storyCard=(x,i,cls)=>{const ph=photoFor(x.title+' '+x.body,x.sport,DAY+i,x.venue); return `<a class="story ${cls}" href="${BASE}this-week.html#stories">${figure(ph)}<span class="kick">${esc(x.sport)}</span><h3>${esc(x.title)}</h3>${cls==='lead'?`<p>${esc(x.body.slice(0,210).replace(/\s\S*$/,''))}…</p>`:''}</a>`;};
  const fbPh=photoFor(fb.title+' '+(fb.standfirst||''),fb.sport,DAY);

  main.innerHTML = `
  <div class="fp">
    <div class="fp-main"><section class="hook" id="hook" aria-live="polite"></section><div data-nl-slot class="nl-slot"></div></div>
    <aside class="fp-side">
      ${cm?`<section class="board" aria-label="Today's Call It">
        <div class="board-top"><span>Call It #${DAY}</span><span>${ciDone?'Played':'Live'}</span></div>
        <h2>${esc(cm.team)} v ${esc(cm.opp)}</h2>
        <p class="ctx">${esc(cm.match)}, ${cm.innings?'second':'first'} innings</p>
        <div class="lamp"><b>${esc(cm.score)}</b><span>after ${esc(cm.at)} overs${cm.need?`<br>${esc(cm.need.replace(cm.team+' ',''))}`:''}</span></div>
        <p class="q">${esc(cm.q)}</p>
        <a class="btn gold" href="${BASE}call-it.html">${ciDone?'See how I did':'Make my call'}</a><a class="ci-alt" href="${BASE}call-it-football.html">Prefer football? Call It: Football</a>
      </section>`:''}
      ${(()=>{const bk=BOOKS[((DAY-1)%BOOKS.length+BOOKS.length)%BOOKS.length];const q=encodeURIComponent(bk[0]+' '+bk[1]).replace(/%20/g,'+');return `<section class="botd" aria-label="Book of the Day">
        <div class="botd-top"><span>Book of the Day</span><span>${esc(bk[2])}</span></div>
        <div class="botd-row"><div class="botd-spine" aria-hidden="true"><b>${esc(bk[0])}</b></div>
        <div><h2>${esc(bk[0])}</h2><p class="botd-by">${esc(bk[1])}</p><p>${esc(bk[3])}</p>
        <a class="btn gold sm" href="https://www.amazon.co.uk/s?k=${q}&tag=gmh710f-21" target="_blank" rel="sponsored nofollow noopener">See it on Amazon</a></div></div>
        <p class="botd-aff">Amazon affiliate link. <a href="${BASE}gift-guide.html">More gift ideas</a></p>
      </section>`;})()}
      <p class="you-line">${streak?`Your streak: <b>${streak} day${streak===1?'':'s'}</b>. `:''}New games in <b class="countdown" id="cd2"></b></p>
    </aside>
  </div>

  <section class="blk"><header class="sh"><h2>Today's games</h2><a href="${BASE}play.html">All ${PLAY.length} games</a></header>
    <div class="gtiles">${[...FIX,...rot].map(tile).join('')}</div></section>

  ${AD1}
  <section class="blk"><header class="sh"><h2>This week in sport</h2><a href="${BASE}this-week.html">The full edition</a></header>
    <div class="read-grid">${storyCard(lead,0,'lead')}<div class="story-list">${W3.slice(1).map((x,i)=>storyCard(x,i+1,'sm')).join('')}</div></div>
    <div class="numstrip">${WEEK.numbers.slice(0,3).map(n=>`<div><b>${esc(n[0])}</b><p>${esc(n[1])}</p></div>`).join('')}</div>
  </section>

  ${VIDS.videos.length?`<section class="blk"><header class="sh"><h2>Laugh of the Day</h2><a href="${BASE}laughs.html">This week's laughs</a></header><div class="home-lotd"><div id="homeLotd"></div></div></section>`:''}

  ${AD2}
  <div class="three">
    <section><header class="sh"><h2>${dlabel(mdNow)} in sport</h2><a href="${BASE}on-this-day.html">More from On This Day</a></header>
      <ul class="otd-mini">${otd.map(e=>`<li><b>${e.y}</b><p>${esc(e.t)}</p></li>`).join('')}</ul></section>
    <section><header class="sh"><h2>Flashback</h2><a href="${BASE}flashback.html">All</a></header>
      <a class="story" href="${BASE}flashback/${fb.id}.html">${figure(fbPh)}<span class="kick">${esc(fb.sport)}, ${yrOf(fb)}${fbAnn?` · ${esc(fbAnn)}`:''}</span><h3>${esc(fb.title)}</h3><p>${esc(fb.standfirst)}</p></a></section>
    <section><header class="sh"><h2>The Cynical Round-Up</h2><a href="${BASE}round-up.html">Read it</a></header>
      <a class="ru-mini" href="${BASE}round-up.html"><span class="satire">Satire. Tongue firmly in cheek.</span><h3 class="ru-h">${esc(SB_ROUNDUP.headline)}</h3><p>${esc(SB_ROUNDUP.edition)}. The real week in sport, with an eye-roll.</p></a></section>
  </div>`;

  countdown($('#cd2'));
  if(window.SB_ADS) main.querySelectorAll('ins.adsbygoogle').forEach(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}});
  if(VIDS.videos.length&&$('#homeLotd')) renderClip($('#homeLotd'),VIDS.videos[lotdIndex(VIDS.videos.length)],true);

  // ---------- the daily hook: a different five-question challenge every day of the week ----------
  (function(){
    const el=$('#hook'); if(!el) return;
    const wd=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/London'})).getDay();
    const WD=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const big=['Football','Cricket','Rugby union'];
    // Never repeat today's Beat the Brain questions (same order as the daily page uses).
    const btb=btbTexts(BANK, DAY-7, DAY+7); weeklyExpertQs(BANK, Math.floor((ukDayNo()+3)/7)).forEach(q=>btb.add(q[2])); // a week either side of Beat the Brain, and this week's Weekly Expert
    const fromBank=(f,n)=>{ let pool=BANK.filter(q=>f(q)&&!btb.has(q[2])); if(pool.length<n) pool=BANK.filter(f); const r=seeded(DAY*13+wd), pick=[...pool].sort(()=>r()-.5).slice(0,n); return pick.map(q=>{ const idx=[0,1,2,3].sort(()=>r()-.5); return {s:q[1],q:q[2],o:idx.map(i=>q[3][i]),a:idx.indexOf(q[4]),f:q[5]}; }); };
    const THEMES=[
      ['Women\'s Sport Sunday','Five hard questions on the women who made sport. Three is respectable.',()=>fromBank(q=>q[0]>=3&&/women|Lioness|Matildas|WSL|Black Ferns|Red Roses|\bshe\b|\bher\b/i.test(q[2]+' '+q[5]),5),2],
      ['Monday Expert','Five of the hardest questions we have. Two is good going.',()=>fromBank(q=>q[0]===4,5),2],
      ['Record Tuesday','Five expert questions on records, firsts and numbers. Two is good going.',()=>fromBank(q=>q[0]===4&&/first|record|most|how many|\d/i.test(q[2]),5),2],
      ['World Sport Wednesday','Beyond football, cricket and rugby. Five from the rest of the sporting world.',()=>fromBank(q=>!big.includes(q[1])&&q[0]===4,5),2],
      ['Throwback Thursday','Five moments from the 20th century. Bring someone who was there.',()=>fromBank(q=>q[0]===4&&/\b19\d\d\b/.test(q[2]),5),2],
      ['Friday Showdown','Five expert questions to settle it at the pub. Two is good going.',()=>fromBank(q=>q[0]===4,5),2],
      ['Matchday Saturday','Five football questions before kick-off.',()=>fromBank(q=>q[1]==='Football'&&q[0]===4,5),2],
    ];
    const [title,sub,make,brain]=THEMES[wd], Q=make(), key='hook_'+DAY, saved=store.get(key,null);
    const PIC=['Women\'s football','Cricket','Rugby union','Golf','Tennis','Athletics','Football'][wd], pc=window.SB_CREDIT&&SB_CREDIT(PIC);
    if(pc){ el.style.setProperty('--hookbg',`url('${SB_PHOTO(PIC,1400)}')`); el.classList.add('has-photo'); }
    const SHORT=['Women\'s Sport','Expert','Records','World Sport','Throwback','Showdown','Matchday'];
    const week=`<div class="hook-week" aria-label="This week's challenges">${[1,2,3,4,5,6,0].map(d=>`<span class="${d===wd?'on':''}"><b>${WD[d].slice(0,3)}</b>${SHORT[d]}</span>`).join('')}</div>${pc?`<p class="hook-credit">Photo: ${esc(pc.what)}, ${esc(pc.by)} / Wikimedia Commons</p>`:''}`;
    const nx=COUNTDOWN.find(e=>Date.parse(e[0])>Date.now());
    const chip=nx?`<span class="hook-chip" id="hookChip" data-t="${nx[0]}">${esc(nx[1])} in <b></b></span>`:'';
    const head=`<div class="hook-top"><span>${WD[wd]}'s challenge · 5 questions</span>${chip}</div><h1>${esc(title)}</h1><p class="hook-sub">${esc(sub)}</p>`;
    function tickChip(){ const c=$('#hookChip'); if(!c) return; const d=Date.parse(c.dataset.t)-Date.now(), dd=Math.floor(d/864e5), hh=Math.floor(d/36e5)%24, mm=Math.floor(d/6e4)%60; c.querySelector('b').textContent=`${dd}d ${hh}h ${mm}m`; }
    function done(marks){
      const sc=marks.filter(Boolean).length, line=sc>brain?'You beat the Brain.':sc===brain?'Level with the Brain.':'The Brain wins this one.';
      const tom=THEMES[(wd+1)%7][0];
      el.innerHTML=head+`<div class="hook-res"><div class="hook-score">${sc}<small>/5</small></div><div><p class="hook-line">${line} It scored ${brain}.</p><div class="hook-pips">${marks.map(m=>`<i class="${m?'y':'n'}"></i>`).join('')}</div></div></div>
        <div class="hook-next"><button class="btn gold" id="hookShare">Challenge a mate</button><a class="btn ghost light" href="${BASE}call-it-football.html">Next: today's Call It: Football</a></div>
        <p class="hook-tom">Tomorrow: <b>${esc(tom)}</b>. A new challenge every day at midnight.</p>`+week;
      $('#hookShare').onclick=()=>share(`SportingBrain ${title}: ${sc}/5 ${marks.map(m=>m?'🟩':'🟥').join('')}\nThe Brain got ${brain}. Beat me:\n${SITE}`);
      tickChip();
    }
    if(saved) return done(saved);
    let i=0; const marks=[];
    function show(){ const q=Q[i];
      el.innerHTML=head+`<div class="hook-pips">${Q.map((_,k)=>`<i class="${k<i?(marks[k]?'y':'n'):k===i?'c':''}"></i>`).join('')}</div>
        <p class="hook-k">${esc(q.s)}</p><p class="hook-q">${esc(q.q)}</p>
        <div class="hook-opts ${q.o.length===2?'two':''}">${q.o.map((o,k)=>`<button data-k="${k}">${esc(o)}</button>`).join('')}</div>`+week;
      tickChip(); }
    el.addEventListener('click',e=>{ const b=e.target.closest('.hook-opts [data-k]'); if(b&&!b.disabled){ const q=Q[i], ok=+b.dataset.k===q.a; marks.push(ok);
        el.querySelectorAll('.hook-opts button').forEach(x=>{ x.disabled=true; if(+x.dataset.k===q.a) x.classList.add('ok'); else if(x===b) x.classList.add('no'); });
        el.querySelector('.hook-week').insertAdjacentHTML('beforebegin',`<p class="hook-fact">${ok?'Yes.':'No.'} ${esc(q.f)}</p><button class="btn gold" data-hn>${i<4?'Next question':'See your score'}</button>`); return; }
      if(e.target.closest('[data-hn]')){ i++; if(i<Q.length) show(); else { store.set(key,marks); markPlayed('hook'); done(marks); setTimeout(maybeNewsletter,1500); } } });
    show(); setInterval(tickChip,30000);
  })();
  main.querySelectorAll('[data-share-to]').forEach(a=>{ const u=encodeURIComponent(SITE), t=encodeURIComponent(PITCH);
    a.href={whatsapp:`https://wa.me/?text=${t}%20${u}`, facebook:`https://www.facebook.com/sharer/sharer.php?u=${u}`, x:`https://twitter.com/intent/tweet?text=${t}&url=${u}`}[a.dataset.shareTo]; });

  // streak at risk: a small banner, not a pop-up (Super Prompt 5A)
  (function(){ const y=new Date(); y.setDate(y.getDate()-1); const h=+new Date().toLocaleString('en-GB',{timeZone:'Europe/London',hour:'2-digit',hour12:false});
    if(store.get('streak_banner_off',false) || store.get('lastday',null)!==ukKey(y) || store.get('hook_'+DAY,null) || h<18) return;
    const b=document.createElement('p'); b.className='streak-risk'; b.innerHTML=`Your ${store.get('streak',1)}-day streak ends at midnight. <a href="#hook">Play today's challenge</a>`; main.prepend(b); })();
  // first-visit welcome after 5 seconds or the first scroll, never before
  { let fired=false; const go=()=>{ if(fired) return; fired=true; welcome(USP,false); }; setTimeout(go,5000); addEventListener('scroll',go,{once:true,passive:true}); }

}

// ================= DAILY =================
if(P==='daily'){
  const LV=[null,null,null,{n:'Hard',c:'#C62828',d:'Proper sport knowledge. No gimmes.'},{n:'Expert',c:'#14254a',d:'History, records and the small print.'}], LEVELS=[3,4];
  const ARCH=+new URLSearchParams(location.search).get('day'), QD=(ARCH>0&&ARCH<DAY)?ARCH:DAY, N=5, key=QD===DAY?ukKey():'arch'+QD; let level=+new URLSearchParams(location.search).get('level')||store.get('daily_level',3); if(!LV[level]) level=3;
  const pool=l=>{ const r=seeded(l*9973); return BANK.filter(q=>q[0]===l).map(q=>[r(),q]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]); }; // fixed mixed order, stepped through 5 a day, so no repeats until the pool is used up
  function todays(l){ const Q=pool(l), start=((QD-1)*N)%Q.length, r=seeded(QD*7+l), out=[];
    for(let k=0;k<N;k++){ const q=Q[(start+k)%Q.length]; const idx=[0,1,2,3].sort(()=>r()-.5); out.push({q:q[2],o:idx.map(i=>q[3][i]),a:idx.indexOf(0),f:q[5],s:`${q[1]} · ${LV[l].n}`}); } return out; }
  const brainFor=l=>Math.max(1,Math.min(5,[0,4,3,2,2][l]+Math.floor(seeded(QD*3+l)()*2)));
  function render(){
    const brainScore=brainFor(level), saved=store.get(`daily_${key}_${level}`,null);
    main.innerHTML=`<section class="hero"><div class="row1"><img src="${BASE}assets/brain.svg" alt="The Brain"><div><span class="tag" style="background:var(--gold);color:#14254a">Beat the Brain #${QD}</span><h1>Five hard questions. Every day.</h1><p>The Brain scored ${brainScore}/5 on ${LV[level].n} today. Your turn.</p></div></div></section>
      <div class="lv-pick" role="tablist" aria-label="Difficulty">${LEVELS.map(l=>{const done=store.get(`daily_${key}_${l}`,null);return `<button role="tab" aria-selected="${l===level}" class="lv ${l===level?'on':''}" data-lv="${l}" style="--c:${LV[l].c}"><b>${LV[l].n}</b><small>${done?`Done: ${done.marks.filter(Boolean).length}/5`:LV[l].d}</small></button>`;}).join('')}</div>
      <section class="card" style="margin-top:12px" id="game" aria-live="polite"></section><div data-nl-slot class="nl-slot"></div><div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'daily.html')}`;
    main.querySelectorAll('[data-lv]').forEach(b=>b.onclick=()=>{ level=+b.dataset.lv; store.set('daily_level',level); history.replaceState(null,'',`?level=${level}`); render(); });
    const g=$('#game');
    function finish(marks,save){
      const score=marks.filter(Boolean).length;
      markPlayed('daily'); if(save){ store.set(`daily_${key}_${level}`,{marks}); store.set('daily_'+key,{marks}); if(QD===DAY){ const y=new Date(); y.setDate(y.getDate()-1); const last=store.get('lastday',null); let st=store.get('streak',0); const y2=new Date(); y2.setDate(y2.getDate()-2);
        if(last===ukKey(y)) st=st+1; else if(last===key) st=st; else if(last===ukKey(y2) && st>0 && saverAvailable()){ st=st+1; store.set('saver_week',isoWeek()); setTimeout(()=>toast('Streak saver used. Your streak lives on.'),800); } else st=1; store.set('streak',st); store.set('lastday',key); store.set('played',store.get('played',0)+1); if(score>brainScore) store.set('beaten',store.get('beaten',0)+1); } }
      const line=score>brainScore?(level<4?"You beat the Brain. Try Expert.":"You beat the Brain on Expert. Take a bow."):score===brainScore?"Level with the Brain. Rematch tomorrow.":"The Brain wins this one. Same time tomorrow?";
      const grid=marks.map(m=>m?'🟩':'🟥').join('');
      const card=`SportingBrain #${QD} 🧠 ${LV[level].n}\n${grid}  ${score}/5\nThe Brain got ${brainScore}/5. Beat that.\n${SITE}daily.html?level=${level}`;
      const next=(score>brainScore&&level<4)?`<button class="btn ghost" data-lv="${level+1}">Try ${LV[level+1].n} next</button>`:`<a class="btn ghost" href="${BASE}call-it.html" data-track="daily-next-callit">Play Call It next</a>`;
      g.innerHTML=`<div class="res-top"><div><div class="small">${LV[level].n} · Beat the Brain #${QD}</div><div class="score">${score}/5</div></div><div class="res-grid" aria-label="${score} right out of 5">${grid}</div></div>
        <div class="brain-says"><img src="${BASE}assets/brain.svg" alt=""><div>${line} The Brain got ${brainScore}/5.</div></div>
        <div class="res-cta"><p class="res-ask">${score>=brainScore?'Think your mates can match that?':'Bet your mates do worse.'} Send them your score.</p>
          <a class="btn gold res-main" id="shWa" target="_blank" rel="noopener" data-track="daily-result-whatsapp">Challenge my mates on WhatsApp</a>
          <p class="res-more"><button type="button" class="linkbtn" id="sh" data-track="daily-result-share">More ways to share</button> · <button type="button" class="linkbtn" id="shCopy" data-track="daily-result-copy">Copy my score</button></p></div>
        <div class="stats"><div><b>${store.get('streak',1)}</b>day streak</div><div><b>${store.get('played',1)}</b>played</div><div><b>${store.get('beaten',0)}</b>times you beat the Brain</div></div>
        <div class="row res-next">${next}</div><p class="small">New questions in <span class="countdown" id="cd"></span></p>`;
      g.querySelectorAll('[data-lv]').forEach(b=>b.onclick=()=>{ level=+b.dataset.lv; store.set('daily_level',level); render(); window.scrollTo({top:0,behavior:'smooth'}); });
      $('#shWa').href='https://wa.me/?text='+encodeURIComponent(card);
      $('#sh').onclick=()=>share(card);
      $('#shCopy').onclick=()=>{ (navigator.clipboard?navigator.clipboard.writeText(card):Promise.reject()).then(()=>{ $('#shCopy').textContent='Copied'; setTimeout(()=>$('#shCopy').textContent='Copy my score',2000); }).catch(()=>prompt('Copy your score',card)); };
      countdown($('#cd'));
      if(save && score>brainScore) confetti();
    }
    if(saved&&saved.marks&&saved.marks.length===N) finish(saved.marks,false);
    else runQuiz(g, todays(level), {done:m=>finish(m,true)});
  }
  render();
}

// ================= HIGHER OR LOWER =================
if(P==='hl'){
  main.innerHTML=`<section class="card" style="margin-top:14px" id="hl" aria-live="polite"><span class="tag" style="background:#1565C0">Higher or Lower</span><p class="small">Is the second stat higher or lower than the first? Keep going until you get one wrong.</p>
  <div class="stats"><div><b id="run">0</b>in a row</div><div><b id="best">0</b>your best</div></div>
  <div class="hl" style="margin-top:10px"><div class="item"><div class="lab" id="al"></div><div class="val" id="av"></div></div><div class="item"><div class="lab" id="bl"></div><div class="val" id="bv">?</div></div></div>
  <div class="row" id="btns"><button class="btn" id="hi">Higher ▲</button><button class="btn pink" id="lo">Lower ▼</button></div>
  <div id="res" hidden><div class="brain-says"><img src="${BASE}assets/brain.svg" alt=""><div id="msg"></div></div><div class="row"><button class="btn pink" id="sh">Share</button><button class="btn ghost" id="ag">Go again</button></div>${endNavHTML()}</div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'higher-or-lower.html')}`;
  const D=SB_HL; let best=store.get('hl_best',0), run=0, a=null, b; $('#best').textContent=best;
  const pick=ex=>{let x; do{x=D[Math.random()*D.length|0];}while(ex&&(x===ex||x.v===ex.v)); return x;};
  function round(){ a=a||pick(); b=pick(a); $('#al').textContent=a.l; $('#av').textContent=a.v.toLocaleString('en-GB'); $('#bl').textContent=b.l; $('#bv').textContent='?'; $('#run').textContent=run; $('#btns').hidden=false; $('#res').hidden=true; }
  function guess(up){ markPlayed('hl'); const ok=up?b.v>a.v:b.v<a.v; $('#bv').textContent=b.v.toLocaleString('en-GB'); $('#btns').hidden=true;
    if(ok){ run++; $('#run').textContent=run; toast('Correct!'); setTimeout(()=>{a=b;round();},1000); }
    else { const pb=run>best; if(pb){best=run;store.set('hl_best',best);$('#best').textContent=best; if(run>=5) confetti();}
      $('#res').hidden=false; $('#msg').textContent=run===0?"First one! The Brain is trying not to laugh.":`${run} in a row. ${pb?'New personal best!':'Your best is '+best+'.'}`;
      $('#sh').onclick=()=>share(`SportingBrain Higher or Lower 🧠\n${'🟩'.repeat(Math.min(run,15))}🟥 ${run} in a row\nsportingbrain.com`); } }
  $('#hi').onclick=()=>guess(true); $('#lo').onclick=()=>guess(false); $('#ag').onclick=()=>{run=0;a=null;round();}; round();
}

// ================= GUESS THE PLAYER =================
if(P==='gtp'){
  const L=shuffle(SB_PLAYERS); let idx=0, total=0, clue=0;
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#6A1B9A">Guess the Player</span><p class="small">Clues get easier as you go. Guess on clue 1 for 3 points, clue 2 for 2, clue 3 for 1.</p>
  <div class="stats"><div><b id="tot">0</b>points</div><div><b id="num">1</b>of ${L.length}</div></div><ul class="clues" id="cl"></ul><div class="opts" id="op"></div>
  <div class="row" style="margin-top:10px"><button class="btn ghost" id="more">Show another clue</button><button class="btn" id="nx" hidden>Next player</button></div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'guess-the-player.html')}`;
  function show(){ const p=L[idx]; clue=0; $('#num').textContent=idx+1; $('#nx').hidden=true; $('#more').hidden=false; renderClues(); const op=$('#op'); op.innerHTML='';
    shuffle(p.o).forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o;b.onclick=()=>pickP(o,b);op.appendChild(b);}); }
  function renderClues(){ const p=L[idx]; $('#cl').innerHTML=p.c.slice(0,clue+1).map((c,k)=>`<li>Clue ${k+1}: ${esc(c)}</li>`).join(''); if(clue>=2) $('#more').hidden=true; }
  $('#more').onclick=()=>{ clue=Math.min(2,clue+1); renderClues(); };
  function pickP(o,btn){ markPlayed('gtp'); const p=L[idx]; const bs=$('#op').querySelectorAll('.opt'); bs.forEach(b=>{b.disabled=true; if(b.textContent===p.a)b.classList.add('right');});
    if(o===p.a){ const pts=3-clue; total+=pts; toast(`+${pts} points!`);} else btn.classList.add('wrong');
    clue=2; renderClues(); $('#tot').textContent=total; $('#more').hidden=true;
    if(idx<L.length-1){ $('#nx').hidden=false; } else { const best=store.get('gtp_best',0); if(total>best){store.set('gtp_best',total); confetti();} $('#nx').hidden=false; $('#nx').textContent='Share my score'; $('#nx').insertAdjacentHTML('afterend',endNavHTML()); $('#nx').onclick=()=>share(`SportingBrain Guess the Player 🕵️ ${total}/${L.length*3} points\nsportingbrain.com`); } }
  $('#nx').onclick=()=>{ idx++; show(); };
  show();
}

// ================= TRUE OR FALSE =================
if(P==='tf'){
  const L=shuffle(KIDZ?SB_TF_KIDS:SB_TF).slice(0,10); let i=0, sc=0;
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#2E7D32">True or False</span><div class="progress" id="bar"></div><div class="q" id="qt"></div>
  <div class="row" id="btns"><button class="btn" style="background:#2E7D32" id="t">True</button><button class="btn" style="background:#c62828" id="f">False</button></div><div id="res"></div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'true-or-false.html')}`;
  const marks=[]; const bar=()=>{$('#bar').innerHTML=L.map((_,k)=>`<i class="${k<marks.length?(marks[k]?'ok':'no'):(k===i?'now':'')}"></i>`).join('');};
  function show(){ bar(); $('#qt').textContent=L[i][0]; $('#btns').hidden=false; }
  function ans(v){ markPlayed('tf'); const ok=v===L[i][1]; marks.push(ok); if(ok)sc++; toast(ok?'Correct!':`It's ${L[i][1]?'true':'false'}!`); i++; if(i<L.length) show(); else { bar(); $('#btns').hidden=true; $('#qt').textContent=`You got ${sc}/10`; if(sc>=9) confetti();
      $('#res').innerHTML=`<div class="brain-says"><img src="${BASE}assets/brain.svg" alt=""><div>${sc>=8?'Proper sports brain, that.':sc>=5?'Not bad. Not great. Go again?':'Ooh. Did you have your eyes shut?'}</div></div><div class="row"><button class="btn pink" id="sh">Share</button><a class="btn ghost" href="${BASE}true-or-false.html">Go again</a></div>`;
      $('#res').insertAdjacentHTML('beforeend',endNavHTML()); $('#sh').onclick=()=>share(`SportingBrain True or False ✅\n${marks.map(m=>m?'🟩':'🟥').join('')} ${sc}/10\nsportingbrain.com`); } }
  $('#t').onclick=()=>ans(true); $('#f').onclick=()=>ans(false); show();
}

// ================= SPEED ROUND =================
if(P==='speed'){
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#D32F2F">Speed Round</span><p class="small">60 seconds. True or false. As many right as you can. A wrong answer costs you 3 seconds.</p>
  <div class="stats"><div><b class="timer" id="tm">60</b>seconds</div><div><b class="timer" id="sc">0</b>right</div><div><b id="best">${store.get('speed_best',0)}</b>your best</div></div>
  <div class="q" id="qt" style="min-height:3.2em">Ready?</div><div class="row" id="btns" hidden><button class="btn" style="background:#2E7D32" id="t">True</button><button class="btn" style="background:#c62828" id="f">False</button></div>
  <p><button class="btn gold wide" id="go">Start</button></p><div id="res"></div></section><div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'speed-round.html')}`;
  let L, i, sc, t, timer;
  function q(){ if(i>=L.length){L=shuffle(SB_TF);i=0;} $('#qt').textContent=L[i][0]; }
  function end(){ clearInterval(timer); $('#btns').hidden=true; $('#go').hidden=false; $('#go').textContent='Play again'; $('#qt').textContent=`Time! You got ${sc} right.`;
    const best=store.get('speed_best',0); if(sc>best){store.set('speed_best',sc);$('#best').textContent=sc; confetti();}
    $('#res').innerHTML=`<button class="btn pink wide" id="sh">Share my score</button>`; $('#res').insertAdjacentHTML('beforeend',endNavHTML()); $('#sh').onclick=()=>share(`SportingBrain Speed Round ⏱️ ${sc} right in 60 seconds\nsportingbrain.com`); }
  function ans(v){ if(v===L[i][1]){sc++;$('#sc').textContent=sc;} else { t=Math.max(0,t-3); toast('-3 seconds!'); } i++; q(); }
  $('#go').onclick=()=>{ markPlayed('speed'); L=shuffle(SB_TF); i=0; sc=0; t=60; $('#sc').textContent=0; $('#res').innerHTML=''; $('#go').hidden=true; $('#btns').hidden=false; q();
    timer=setInterval(()=>{ t--; $('#tm').textContent=t; if(t<=0) end(); },1000); };
  $('#t').onclick=()=>ans(true); $('#f').onclick=()=>ans(false);
}

// ================= THE GRID =================
if(P==='grid'){
  const G=pickDaily(SB_GRIDS); const cols=['#1E8E3E','#1565C0','#C2185B','#EF6C00'];
  let words=shuffle(G.groups.flatMap(g=>g.w)), sel=[], solved=[], lives=4;
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#00695C">The Grid</span><p class="small">Find four groups of four. Tap four words that go together, then press Check. Four mistakes and you're out.</p>
  <div id="sv"></div><div class="gridboard" id="gb"></div><div class="row" style="margin-top:12px"><button class="btn" id="ck">Check</button><button class="btn ghost" id="sf">Shuffle</button><span class="small">Lives: <b id="lv">❤️❤️❤️❤️</b></span></div><div id="res"></div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'the-grid.html')}`;
  function draw(){ $('#sv').innerHTML=solved.map((g,k)=>`<div class="solved" style="background:${cols[k]}"><b>${esc(g.n)}</b>${g.w.map(esc).join(', ')}</div>`).join('');
    $('#gb').innerHTML=words.map(w=>`<button class="${sel.includes(w)?'sel':''}">${esc(w)}</button>`).join(''); $('#lv').textContent='❤️'.repeat(lives)+'🖤'.repeat(4-lives);
    $('#gb').querySelectorAll('button').forEach((b,k)=>b.onclick=()=>{const w=words[k]; if(sel.includes(w)) sel=sel.filter(x=>x!==w); else if(sel.length<4) sel.push(w); draw();}); }
  function over(win){ markPlayed('grid'); if(win) store.set('grid_solved',store.get('grid_solved',0)+1); $('#ck').hidden=$('#sf').hidden=true; if(!win){ G.groups.filter(g=>!solved.includes(g)).forEach(g=>solved.push(g)); words=[]; draw(); }
    $('#res').innerHTML=`<div class="brain-says"><img src="${BASE}assets/brain.svg" alt=""><div>${win?`Cracked it with ${lives} ${lives===1?'life':'lives'} left. Clever clogs.`:'The Grid wins today. Fresh one tomorrow.'}</div></div><button class="btn pink wide" id="sh">Share</button>`;
    $('#res').insertAdjacentHTML('beforeend',endNavHTML()); $('#sh').onclick=()=>share(`SportingBrain The Grid #${DAY} 🧩 ${win?'Solved':'Beaten'} ${'❤️'.repeat(lives)}\nsportingbrain.com`); if(win) confetti(); }
  $('#ck').onclick=()=>{ if(sel.length!==4){toast('Pick four words');return;} const g=G.groups.find(g=>sel.every(w=>g.w.includes(w)));
    if(g){ solved.push(g); words=words.filter(w=>!g.w.includes(w)); sel=[]; toast('Nice one!'); draw(); if(solved.length===4) over(true); }
    else { const close=G.groups.some(g=>sel.filter(w=>g.w.includes(w)).length===3); lives--; toast(close?'One away!':'Not a group'); sel=[]; draw(); if(lives===0) over(false); } };
  $('#sf').onclick=()=>{ words=shuffle(words); draw(); }; draw();
}

// ================= GUESS THE SPORT =================
if(P==='emoji'){
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#EF6C00">Guess the Sport</span><p class="small">Three emoji. One sport. Name it.</p><div id="g"></div></section><div class="sec"><h2>Keep playing</h2></div>${moreExcept(BASE+'guess-the-sport.html')}`;
  const qs=shuffle(SB_EMOJI).slice(0,8).map(e=>({q:'',e:e.e,o:shuffle(e.o),a:null,ans:e.a}));
  qs.forEach(q=>{q.a=q.o.indexOf(q.ans); q.q='Which sport is this?'; q.s=q.e;});
  runQuiz($('#g'), qs, {done:m=>{ markPlayed('emoji'); const sc=m.filter(Boolean).length; $('#g').innerHTML=`<div class="score">${sc}/8</div><div class="brain-says"><img src="${BASE}assets/brain.svg" alt=""><div>${sc>=7?'Emoji master!':'Not bad. Have another go?'}</div></div><div class="row"><button class="btn pink" id="sh">Share</button><a class="btn ghost" href="${BASE}guess-the-sport.html">Go again</a></div>`;
    $('#g').insertAdjacentHTML('beforeend',endNavHTML()); $('#sh').onclick=()=>share(`SportingBrain Guess the Sport 🤔 ${sc}/8\nsportingbrain.com`); if(sc>=7) confetti(); }});
  // show emoji large
  const fix=()=>{ const s=$('#qsub'); if(s && !s.classList.contains('emoji-q')){ s.className='emoji-q'; } }; new MutationObserver(fix).observe($('#g'),{subtree:true,childList:true}); fix();
}

// ================= CHALLENGES =================
if(P==='challenge'){
  const k=params.get('c')||'weekly'; const c=SB_CHALLENGES[k]||SB_CHALLENGES.weekly;
  document.title=`${c.title} | SportingBrain`;
  main.innerHTML=`<section class="card" style="margin-top:14px;border-top:8px solid ${c.colour}"><h1 style="margin:.2em 0 .1em">${esc(c.title)}</h1><p class="small">${esc(c.sub)}</p><div id="q" aria-live="polite"></div></section>
  <div class="sec"><h2>Other challenges</h2></div><div class="g2">${Object.entries(SB_CHALLENGES).filter(([x])=>x!==k).map(([x,o])=>`<a class="ch" href="${BASE}challenge.html?c=${x}" style="background:${o.colour}"><b>${esc(o.title)}</b><small>10 questions</small></a>`).join('')}</div>`;
  runQuiz($('#q'), c.qs, {done:m=>{ const sc=m.filter(Boolean).length; store.set('ch_'+k,sc);
    $('#q').innerHTML=`<div class="score">${sc}/${c.qs.length}</div><div class="brain-says"><img src="${BASE}assets/brain.svg" alt=""><div>${sc>=8?'Proper sports brain. Take a bow.':sc>=5?'Solid. Not spectacular. The Brain respects it.':'Ouch. Same time next week?'}</div></div><button class="btn pink wide" id="sh">Share my score</button>`;
    $('#q').insertAdjacentHTML('beforeend',endNavHTML()); $('#sh').onclick=()=>share(`SportingBrain ${c.title} 🧠\n${m.map(x=>x?'🟩':'🟥').join('')} ${sc}/${c.qs.length}\nsportingbrain.com`); if(sc>=9) confetti(); }});
}

// ================= STORY / SPORT QUIZ ISLANDS =================
document.querySelectorAll('[data-quiz]').forEach(el=>{
  const kind=el.dataset.quiz, id=el.dataset.id;
  const item = kind==='story' ? SB_STORIES.find(x=>x.id===id) : SB_SPORTS.find(x=>x.id===id);
  if(!item) return;
  runQuiz(el, item.quiz, {done:m=>{ el.innerHTML=`<div class="score">${m.filter(Boolean).length}/${m.length}</div><p class="small">${kind==='sport'?'Every sport counts. Even this one.':'Fancy another?'}</p>${moreExcept('')}`; }});
});
document.querySelectorAll('[data-share-text]').forEach(b=>b.addEventListener('click',()=>share(`${b.dataset.shareText}\n${location.href}`)));

// ================= GAME PAGE HEADER: the game's own icon and colour =================
(function(){ if(KIDZ) return; const sl=location.pathname.replace(/\.html$/,'').split('/').pop(); const g=PLAY.find(x=>x[0]===sl); if(!g) return;
  let h=document.querySelector('main .pg-head');
  if(!h && sl!=='daily' && sl!=='challenge' && !main.querySelector('h1')){ h=document.createElement('header'); h.className='pg-head'; h.innerHTML=`<h1>${esc(g[1])}</h1><p>${esc(g[2])}</p>`; main.prepend(h); main.classList.add('has-gh'); }
  if(!h) return;
  h.classList.add('game-head'); h.style.setProperty('--c',g[4]); const s=document.createElement('span'); s.className='gh-ic'; s.innerHTML=icon(sl,52); h.prepend(s); })();

// ================= START AGAIN (every game) =================
// Clears this game's saved answers for today (or this week) on this device, then reloads. Streaks are kept.
(function(){
  const slug=location.pathname.replace(/\.html$/,'').split('/').filter(Boolean).slice(-2).join('/').replace(/^sportingbrain\//,'');
  const name=slug.split('/').pop();
  const GAMES={'call-it':['ci_'],'call-it-football':['fc_'],'connections':['cx_'],'who-am-i':['wa_'],'ground-guesser':['gg3_','gg2_'],'daily':['daily_'],'weekly-expert':['expert2_'],
    'pub-quiz':[],'countdown':[],'is-it-a-foul':[],'stat-attack':[],'stats-detective':[],'rewind':[],'advent':[],'bingo':['bingo'],'higher-or-lower':[],'true-or-false':[],'speed-round':[],'name-them-all':[],'sports-grid':['sg_'],
    'challenge':[],'pick-your-xi':['xi_draft'],'guess-the-sport':[],'the-grid':[],'guess-the-player':[],'which-sport':[],'6-8':[],'9-12':[],'archive':[]};
  if(!(name in GAMES)) return;
  const pre=GAMES[name], up=ukParts(), abs=Math.floor(Date.UTC(up.y,up.m-1,up.d)/86400000), dkey=ukKey();
  const ends=[DAY, abs, Math.floor((abs+3)/7)].map(n=>'_'+n);
  const keys=()=>Object.keys(localStorage).filter(k=>pre.some(p=>k.startsWith('sb_'+p)) && (name==='bingo'||name==='pick-your-xi'||ends.some(e=>k.endsWith(e))||k.includes(dkey)));
  const host=main; if(!host) return;
  const b=document.createElement('button'); b.type='button'; b.className='btn ghost reset-btn'; b.textContent='Start again';
  b.setAttribute('aria-label','Start again: clear this game and play it from the beginning');
  let armed=false;
  b.onclick=()=>{ const k=keys();
    if(k.length && !armed){ armed=true; b.textContent='Tap again to clear today\'s answers'; setTimeout(()=>{armed=false; b.textContent='Start again';},4000); return; }
    k.forEach(x=>localStorage.removeItem(x)); const u=new URL(location.href); ['vs','s','x','r'].forEach(p=>u.searchParams.delete(p)); location.replace(u.href); };
  const wrap=document.createElement('div'); wrap.className='reset-wrap'; wrap.appendChild(b);
  if(host===main) main.appendChild(wrap); else host.appendChild(wrap);
})();
})();

