(function(){
'use strict';
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
function next3(items){ return `<div class="next3">${items.map(i=>`<a href="${i[2]}"><span>${i[0]}</span>${esc(i[1])}</a>`).join('')}</div>`; }
const MORE = [['🧠','Today\'s Beat the Brain','daily.html'],['📈','Higher or Lower','higher-or-lower.html'],['🕵️','Guess the Player','guess-the-player.html'],['✅','True or False','true-or-false.html'],['⏱️','Speed Round','speed-round.html'],['🧩','The Grid','the-grid.html'],['🤔','Guess the Sport','guess-the-sport.html']];
const moreExcept = href => next3(shuffle(MORE.filter(m=>m[2]!==href)).slice(0,3));

// theme + font
if(store.get('dark', matchMedia('(prefers-color-scheme: dark)').matches)) document.body.classList.add('dark');
if(store.get('dys',false)) document.body.classList.add('dyslexic');
document.addEventListener('click', e=>{
  if(e.target.closest('[data-dark]')){ const on=!document.body.classList.contains('dark'); document.body.classList.toggle('dark',on); store.set('dark',on); }
  if(e.target.closest('[data-dys]')){ e.preventDefault(); const on=!document.body.classList.contains('dyslexic'); document.body.classList.toggle('dyslexic',on); store.set('dys',on); }
});
const SITE=new URL('./',location.href).href.replace(/index\.html$/,'');
const PITCH='SportingBrain: the free daily sports hub. Puzzles, games and stories from every sport. Can you beat the Brain?';
document.addEventListener('click', e=>{
  if(e.target.closest('[data-share-site]')){ share(`${PITCH}\n${SITE}`); }
  if(e.target.closest('[data-copy-link]')){ navigator.clipboard.writeText(SITE).then(()=>toast('Link copied!'),()=>prompt('Copy this link:',SITE)); }
});
document.querySelectorAll('[data-share-to]').forEach(a=>{});
const td=$('#today-date'); if(td) td.textContent=new Date().toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',timeZone:'Europe/London'});

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
const main = $('#main');

// ================= HOME =================
if(P==='home'){
  const Q=window.SB_QUESTIONS, played=store.get('daily_'+ukKey(),null);
  const brainScore = 2+Math.floor(seeded(DAY)()*3);
  const story=pickDaily(SB_STORIES), sport=pickDaily(SB_SPORTS,1), stat=pickDaily(SB_STATS);
  const p=ukParts();
  const todayN=Date.UTC(2001,p.m-1,p.d);
  let hist=SB_HISTORY.map(h=>{const [m,d]=h.md.split('-').map(Number); let diff=(Date.UTC(2001,m-1,d)-todayN)/86400000; if(diff>182)diff-=365; if(diff<-182)diff+=365; return {...h,diff};}).sort((a,b)=>Math.abs(a.diff)-Math.abs(b.diff)).slice(0,3);
  const onToday = hist.some(h=>h.diff===0);
  const bestHL=store.get('hl_best',0), bestSp=store.get('speed_best',0), streak=store.get('streak',0);
  const mdNow=`${String(p.m).padStart(2,'0')}-${String(p.d).padStart(2,'0')}`;
  const H=(window.SB_HEROES_WEEKS||[]).find(w=>w.from<=w.to ? (mdNow>=w.from&&mdNow<=w.to) : (mdNow>=w.from||mdNow<=w.to)) || null;
  // Today in Sporting History: today's entries newest first, topped up from the nearest dates
  const dist=md=>{const [m,d]=md.split('-').map(Number); let x=(Date.UTC(2001,m-1,d)-todayN)/86400000; if(x>182)x-=365; if(x<-182)x+=365; return x;};
  let tih=SB_TODAY.filter(e=>e.md===mdNow).sort((a,b)=>b.y-a.y);
  if(tih.length<4){ tih=tih.concat(SB_TODAY.filter(e=>e.md!==mdNow).sort((a,b)=>Math.abs(dist(a.md))-Math.abs(dist(b.md))||b.y-a.y).slice(0,4-tih.length)); }
  const dlabel=md=>new Date(Date.UTC(2001,+md.slice(0,2)-1,+md.slice(3))).toLocaleDateString('en-GB',{day:'numeric',month:'long',timeZone:'UTC'});
  const tiles=[
    ['📈','Higher or Lower',`Best: ${bestHL}`,'higher-or-lower.html','#1565C0'],
    ['🕵️','Guess the Player',`Score: ${store.get('gtp_best',0)}`,'guess-the-player.html','#6A1B9A'],
    ['🧩','The Grid','Find 4 groups','the-grid.html','#00695C'],
    ['⏱️','Speed Round',`Best: ${bestSp}`,'speed-round.html','#D32F2F'],
    ['🤔','Guess the Sport','Emoji clues','guess-the-sport.html','#EF6C00'],
    ['✅','True or False','Fact or fib?','true-or-false.html','#2E7D32']];
  const fmtd = h => new Date(Date.UTC(2001,...h.md.split('-').map((v,i)=>i?+v:+v-1))).toLocaleDateString('en-GB',{day:'numeric',month:'short',timeZone:'UTC'});
  main.innerHTML = `
  <section class="hero">
    <div class="row1"><img src="assets/brain.svg" alt="The Brain">
      <div><span class="tag" style="background:var(--gold);color:#14254a">Beat the Brain #${DAY}</span>
      <h1>${played?'You\'ve played today!':'Think you can beat me? Prove it.'}</h1>
      <p>${played?`You scored ${played.marks.filter(Boolean).length}/5. The Brain got ${brainScore}/5.`:'Five questions. Every sport. One cheeky Brain.'}</p></div></div>
    <div class="meta"><div><b>${brainScore}/5</b><span>The Brain's score</span></div><div><b>${streak}</b><span>your day streak</span></div><div><b class="countdown" id="cd">--:--</b><span>until the next one</span></div></div>
    <a class="btn gold wide" href="daily.html">${played?'See your score and share':'Play today\'s puzzle'}</a>
  </section>

  <div class="sec"><h2>${dlabel(mdNow)} in sport</h2><span class="small" id="tihcount"></span></div>
  <section class="card tih" id="tih" aria-roledescription="carousel" aria-label="Today in sporting history">
    <div class="tih-track">${tih.map((e,k)=>`<div class="tih-slide" role="group" aria-label="${k+1} of ${tih.length}" ${k?'hidden':''} style="--c:${colour(e.s)}">
      <div class="tih-year">${e.y}</div><span class="tag" style="background:${colour(e.s)}">${esc(e.s)}</span>${e.md!==mdNow?` <span class="small">${dlabel(e.md)}</span>`:''}
      <p class="tih-text">${esc(e.t)}</p></div>`).join('')}</div>
    <div class="row" style="justify-content:space-between;margin-top:6px">
      <div class="tih-dots">${tih.map((_,k)=>`<button aria-label="Show ${tih[k].y}" data-k="${k}" class="${k?'':'on'}"></button>`).join('')}</div>
      <div class="row" style="gap:6px"><button class="iconbtn dark-btn" id="tihprev" aria-label="Previous">◀</button><button class="iconbtn dark-btn" id="tihpause" aria-label="Pause">❚❚</button><button class="iconbtn dark-btn" id="tihnext" aria-label="Next">▶</button></div>
    </div>
  </section>

  <section class="card who">
    <div class="row" style="flex-wrap:nowrap;align-items:flex-start"><img src="assets/brain.svg" alt="" style="width:56px;height:56px;flex:none">
    <div><div class="title" style="margin-top:0">Welcome to SportingBrain</div>
    <p class="teaser">The free daily sports hub for anyone who loves sport. Puzzles, games, true stories and stats from every sport, men's and women's, for every age. Built by sports fans, for sports fans.</p></div></div>
    <div class="row" style="margin-top:10px"><a class="btn ghost" href="#who" style="padding:8px 14px">Who we are</a><button class="btn pink" data-share-site style="padding:8px 14px">Share SportingBrain</button></div>
  </section>

  <div class="sec" id="games"><h2>Quick games</h2><span class="small">Swipe for more →</span></div>
  <div class="strip">${tiles.map(t=>`<a class="tile" href="${t[3]}" style="background:${t[4]}"><div class="e">${t[0]}</div><b>${t[1]}</b><small>${t[2]}</small></a>`).join('')}</div>

  <div class="sec"><h2>Story of the day</h2><a href="read.html?s=story">All stories</a></div>
  <article class="card" style="border-top:6px solid ${colour(story.sport)}">
    <span class="tag" style="background:${colour(story.sport)}">${esc(story.sport)}</span>
    <div class="row" style="flex-wrap:nowrap;align-items:flex-start;margin-top:6px"><div class="big-emoji">${story.emoji}</div>
    <div><div class="title">${esc(story.title)}</div><p class="teaser">${esc(story.teaser)}</p></div></div>
    <a class="stretch" href="read.html?s=story&id=${story.id}" aria-label="Read: ${esc(story.title)}"></a>
  </article>

  <div class="card stat" style="margin-top:12px;background:linear-gradient(135deg,#14254a,#1F3864);color:#fff">
      <span class="tag" style="background:var(--gold);color:#14254a">Stat of the day</span>
      <div class="n">${esc(stat.n)}</div><p style="margin:0">${esc(stat.t)}</p>
      <p class="row" style="margin:10px 0 0"><button class="btn ghost" id="statshare" style="padding:8px 12px">Share this stat</button></p>
    </div>

  <div class="sec"><h2>Sport of the day</h2><a href="read.html?s=sports">A to Z</a></div>
  <article class="card" style="border-left:8px solid ${colour('Unusual')}">
    <div class="row" style="flex-wrap:nowrap"><div class="big-emoji">${sport.emoji}</div><div><div class="title">${esc(sport.name)}</div><p class="teaser">${esc(sport.what.split('. ')[0])}.</p></div></div>
    <a class="stretch" href="read.html?s=sport&id=${sport.id}" aria-label="Learn about ${esc(sport.name)}"></a>
  </article>

  <div class="sec"><h2>This week's challenges</h2></div>
  <div class="g2">
    ${['weekly','women','world','family'].map(k=>{const c=SB_CHALLENGES[k]; const done=store.get('ch_'+k,null); return `<a class="ch" href="challenge.html?c=${k}" style="background:${c.colour}"><b>${esc(c.title)}</b><small>${done!==null?`You scored ${done}/${c.qs.length}`:'10 questions'}</small></a>`;}).join('')}
  </div>

  <div class="sec"><h2>Women's sport</h2><a href="challenge.html?c=women">Play the weekly</a></div>
  ${H?`<div class="card" style="border-top:6px solid ${colour("Women's sport")}">
    <span class="tag" style="background:${colour("Women's sport")}">Heroine of the week</span>
    <div class="row" style="flex-wrap:nowrap;margin-top:6px"><div class="big-emoji">${H.heroine.emoji}</div><div><div class="title">${esc(H.heroine.name)}</div><span class="tag" style="background:${colour(H.heroine.sport)}">${esc(H.heroine.sport)}</span><p class="teaser">${esc(H.heroine.line)}</p></div></div>
    <a class="stretch" href="read.html?s=story&id=${H.heroine.story}" aria-label="Read about ${esc(H.heroine.name)}"></a>
  </div>`:''}
  <div class="card">
    <span class="tag" style="background:${colour("Women's football")}">The big story</span>
    <div class="title">🦁 Football came home</div><p class="teaser">A sold-out Wembley, extra time, and a moment that changed the women's game.</p>
    <a class="stretch" href="read.html?s=story&id=lionesses" aria-label="Read: Football came home"></a>
  </div>

  ${H?`<div class="sec"><h2>Hero of the week</h2></div>
  <div class="card">
    <div class="row" style="flex-wrap:nowrap"><div class="big-emoji">${H.hero.emoji}</div><div><div class="title">${esc(H.hero.name)}</div><span class="tag" style="background:${colour(H.hero.sport)}">${esc(H.hero.sport)}</span><p class="teaser">${esc(H.hero.line)}</p></div></div>
    <a class="stretch" href="read.html?s=story&id=${H.hero.story}" aria-label="Read about ${esc(H.hero.name)}"></a>
  </div>`:''}

  <div class="sec"><h2>Unusual sport of the week</h2></div>
  <div class="card" style="background:linear-gradient(135deg,#8E24AA,#C2185B);color:#fff">
    <div class="row" style="flex-wrap:nowrap"><div class="big-emoji">🦶</div><div><div class="title">Sepak takraw</div><p style="margin:0">Volleyball, but you can't use your hands. Wait till you see the overhead kicks.</p></div></div>
    <a class="stretch" href="read.html?s=sport&id=sepak-takraw" aria-label="Read about sepak takraw"></a>
  </div>

  <div class="sec"><h2>The Cynical Round-Up</h2></div>
  <div class="card" style="background:#263238;color:#eceff1">
    <span class="satire">SATIRE. Tongue firmly in cheek.</span>
    <div class="row" style="flex-wrap:nowrap;margin-top:8px"><div class="big-emoji">😎</div><div><div class="title">VAR, kick-off times and a luminous third kit</div><p style="margin:0;color:#b0bec5">The week in sport, with a big eye-roll from the Brain.</p></div></div>
    <a class="stretch" href="read.html?s=roundup" aria-label="Read the Cynical Round-Up"></a>
  </div>

  <div class="sec"><h2>For the family</h2></div>
  <div class="g2 stack">
    <a class="ch" href="challenge.html?c=family" style="background:#F57C00"><b>👨‍👩‍👧 The Friday Family Challenge</b><small>Kids' questions and grown-ups' questions. Who wins in your house?</small></a>
    <div class="card"><div class="title">⚽ This weekend: the Keepy-Up Ladder</div><p class="teaser">Best of three tries each. Add up the family total, then beat it next week. Under-8s can let it bounce once between touches. Play on grass, away from windows and roads.</p></div>
  </div>

  <div class="sec"><h2>More stories</h2></div>
  ${shuffle(SB_STORIES.filter(s=>![story.id,'lionesses',H&&H.hero.story,H&&H.heroine.story].includes(s.id)),seeded(DAY+7)).slice(0,3).map(s=>`<article class="card" style="border-left:6px solid ${colour(s.sport)}"><div class="row" style="flex-wrap:nowrap"><div class="big-emoji">${s.emoji}</div><div><div class="title" style="font-size:1.05rem">${esc(s.title)}</div><p class="teaser">${esc(s.teaser)}</p></div></div><a class="stretch" href="read.html?s=story&id=${s.id}" aria-label="${esc(s.title)}"></a></article>`).join('')}

  <div class="sec" id="newsletter"><h2>The Daily Brain newsletter</h2></div>
  <section class="card news">
    <div class="title" style="margin-top:0">📬 Get the Brain in your inbox every morning</div>
    <p class="teaser">Today's puzzle, the story of the day and one stat to win an argument with. Free. This is the only time we ever ask for any of your details, and it's just your email address.</p>
    <iframe data-tally-src="https://tally.so/embed/${window.SB_NEWSLETTER_FORM}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="330" frameborder="0" title="Sign up to The Daily Brain"></iframe>
  </section>

  <div class="sec" id="who"><h2>Who we are</h2></div>
  <section class="card">
    <p style="margin-top:0">SportingBrain is a free daily sports hub, built by sports fans for anyone who loves sport. Whether you know every Premier League scorer since 1992, never miss the snooker, or just want something fun to play with the kids on a Friday night, there's something here for you every single day.</p>
    <div class="values">
      <div><span>🆓</span><b>Free, always</b>No paywall, no subscriptions. Paid for by adverts and sponsors.</div>
      <div><span>🌍</span><b>Every sport</b>Football gets you in. Netball, darts, F1, kabaddi and the rest keep you here.</div>
      <div><span>⚖️</span><b>Women's sport, front and centre</b>Equal billing everywhere, not a tab at the side.</div>
      <div><span>👨‍👩‍👧</span><b>Family-safe</b>No chat, no sign-up to play, nothing you wouldn't want the kids to see.</div>
      <div><span>🚫</span><b>No betting. Ever.</b>No betting ads, no betting links, no gambling.</div>
      <div><span>🔒</span><b>Your data stays yours</b>The only thing we ever ask for is your email, and only if you want the newsletter.</div>
    </div>
    <p>And the Brain? He's our own cartoon mascot. He sets the puzzles, plays against you every day, and is a terrible loser.</p>
  </section>

  <div class="sec"><h2>Share SportingBrain</h2></div>
  <section class="card share-panel">
    <p class="teaser" style="margin-top:0">Know someone who'd love this? Send it to the group chat and see who can beat the Brain.</p>
    <div class="sharebtns">
      <a class="btn" style="background:#25D366" data-share-to="whatsapp" target="_blank" rel="noopener">WhatsApp</a>
      <a class="btn" style="background:#1877F2" data-share-to="facebook" target="_blank" rel="noopener">Facebook</a>
      <a class="btn" style="background:#000" data-share-to="x" target="_blank" rel="noopener">X</a>
      <button class="btn ghost" data-copy-link>Copy link</button>
    </div>
  </section>
  `;
  main.querySelectorAll('[data-share-to]').forEach(a=>{ const u=encodeURIComponent(SITE), t=encodeURIComponent(PITCH);
    a.href={whatsapp:`https://wa.me/?text=${t}%20${u}`, facebook:`https://www.facebook.com/sharer/sharer.php?u=${u}`, x:`https://twitter.com/intent/tweet?text=${t}&url=${u}`}[a.dataset.shareTo]; });
  // carousel behaviour
  (function(){ const root=$('#tih'); if(!root) return; const slides=[...root.querySelectorAll('.tih-slide')], dots=[...root.querySelectorAll('.tih-dots button')]; let k=0, paused=matchMedia('(prefers-reduced-motion: reduce)').matches, t;
    const go=n=>{ k=(n+slides.length)%slides.length; slides.forEach((sl,j)=>sl.hidden=j!==k); dots.forEach((d,j)=>d.classList.toggle('on',j===k)); $('#tihcount').textContent=`${k+1} of ${slides.length}`; };
    const play=()=>{ clearInterval(t); if(!paused) t=setInterval(()=>go(k+1),5000); $('#tihpause').textContent=paused?'▶︎ Play':'❚❚'; $('#tihpause').setAttribute('aria-label',paused?'Play':'Pause'); };
    $('#tihnext').onclick=()=>{go(k+1);play();}; $('#tihprev').onclick=()=>{go(k-1);play();}; $('#tihpause').onclick=()=>{paused=!paused;play();};
    dots.forEach(d=>d.onclick=()=>{go(+d.dataset.k);play();});
    let x0=null; root.addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true}); root.addEventListener('touchend',e=>{ if(x0===null)return; const dx=e.changedTouches[0].clientX-x0; if(Math.abs(dx)>40){go(k+(dx<0?1:-1));play();} x0=null; });
    go(0); play(); })();
  // newsletter embed
  (function(){ const f=main.querySelector('iframe[data-tally-src]'); if(!f) return; f.src=f.dataset.tallySrc; const sc=document.createElement('script'); sc.src='https://tally.so/widgets/embed.js'; sc.async=true; document.body.appendChild(sc); })();
  countdown($('#cd'));
  $('#statshare').onclick=()=>share(`🧠 SportingBrain Stat of the Day\n${stat.n}: ${stat.t}\nsportingbrain.com`);
  main.querySelectorAll('.tf').forEach(box=>box.addEventListener('click',e=>{const b=e.target.closest('button'); if(!b||box.dataset.done)return; box.dataset.done=1; const right=b.dataset.v===box.dataset.a; b.classList.add(right?'right':'wrong'); if(!right) box.querySelector(`[data-v="${box.dataset.a}"]`).classList.add('right'); toast(right?'Spot on!':'Not quite!');}));
}

// ================= DAILY =================
if(P==='daily'){
  const Q=SB_QUESTIONS, N=5, start=((DAY-1)*N)%Q.length; let today=[]; for(let k=0;k<N;k++) today.push(Q[(start+k)%Q.length]);
  const fi=today.findIndex(q=>/football/i.test(q.s)); if(fi>0){const [f]=today.splice(fi,1); today.unshift(f);}
  const brainScore=2+Math.floor(seeded(DAY)()*3), key=ukKey(), saved=store.get('daily_'+key,null);
  main.innerHTML=`<section class="hero"><div class="row1"><img src="assets/brain.svg" alt="The Brain"><div><span class="tag" style="background:var(--gold);color:#14254a">Beat the Brain #${DAY}</span><h1>The Brain scored ${brainScore}/5 today.</h1><p>Your turn. Go on then, beat me.</p></div></div></section><section class="card" style="margin-top:12px" id="game" aria-live="polite"></section><div class="sec"><h2>Keep playing</h2></div>${moreExcept('daily.html')}`;
  const g=$('#game');
  function finish(marks,save){
    const score=marks.filter(Boolean).length;
    if(save){ store.set('daily_'+key,{marks}); const y=new Date(); y.setDate(y.getDate()-1); const last=store.get('lastday',null); let st=store.get('streak',0); st=last===ukKey(y)?st+1:(last===key?st:1); store.set('streak',st); store.set('lastday',key); store.set('played',store.get('played',0)+1); if(score>brainScore) store.set('beaten',store.get('beaten',0)+1); }
    const line=score>brainScore?"You've out-thought the Brain! Frame this score.":score===brainScore?"A draw. The Brain demands a rematch tomorrow.":"Brains 1, Brawn 0. Ooh, same time tomorrow?";
    g.innerHTML=`<div class="small">Your score</div><div class="score">${score}/5</div><div class="brain-says"><img src="assets/brain.svg" alt=""><div>${line}</div></div>
      <div class="stats"><div><b>${store.get('streak',1)}</b>day streak</div><div><b>${store.get('played',1)}</b>played</div><div><b>${store.get('beaten',0)}</b>times you beat the Brain</div></div>
      <p><button class="btn pink wide" id="sh">Share my score</button></p><p class="small">Next puzzle in <span class="countdown" id="cd"></span></p>`;
    const card=`SportingBrain #${DAY} 🧠\n${marks.map(m=>m?'🟩':'🟥').join('')}  ${score}/5\nThe Brain got ${brainScore}/5. ${score>brainScore?'I beat the Brain!':score===brainScore?'Honours even.':'He got me today.'}\nsportingbrain.com`;
    $('#sh').onclick=()=>share(card); countdown($('#cd'));
    if(save && score>brainScore) confetti();
  }
  if(saved&&saved.marks&&saved.marks.length===N) finish(saved.marks,false);
  else runQuiz(g, today.map(q=>({...q,s:q.s})), {done:m=>finish(m,true)});
}

// ================= HIGHER OR LOWER =================
if(P==='hl'){
  main.innerHTML=`<section class="card" style="margin-top:14px" id="hl" aria-live="polite"><span class="tag" style="background:#1565C0">Higher or Lower</span><p class="small">Is the second stat higher or lower than the first? Keep going until you get one wrong.</p>
  <div class="stats"><div><b id="run">0</b>in a row</div><div><b id="best">0</b>your best</div></div>
  <div class="hl" style="margin-top:10px"><div class="item"><div class="lab" id="al"></div><div class="val" id="av"></div></div><div class="item"><div class="lab" id="bl"></div><div class="val" id="bv">?</div></div></div>
  <div class="row" id="btns"><button class="btn" id="hi">Higher ▲</button><button class="btn pink" id="lo">Lower ▼</button></div>
  <div id="res" hidden><div class="brain-says"><img src="assets/brain.svg" alt=""><div id="msg"></div></div><div class="row"><button class="btn pink" id="sh">Share</button><button class="btn ghost" id="ag">Go again</button></div></div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept('higher-or-lower.html')}`;
  const D=SB_HL; let best=store.get('hl_best',0), run=0, a=null, b; $('#best').textContent=best;
  const pick=ex=>{let x; do{x=D[Math.random()*D.length|0];}while(ex&&(x===ex||x.v===ex.v)); return x;};
  function round(){ a=a||pick(); b=pick(a); $('#al').textContent=a.l; $('#av').textContent=a.v.toLocaleString('en-GB'); $('#bl').textContent=b.l; $('#bv').textContent='?'; $('#run').textContent=run; $('#btns').hidden=false; $('#res').hidden=true; }
  function guess(up){ const ok=up?b.v>a.v:b.v<a.v; $('#bv').textContent=b.v.toLocaleString('en-GB'); $('#btns').hidden=true;
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
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept('guess-the-player.html')}`;
  function show(){ const p=L[idx]; clue=0; $('#num').textContent=idx+1; $('#nx').hidden=true; $('#more').hidden=false; renderClues(); const op=$('#op'); op.innerHTML='';
    shuffle(p.o).forEach(o=>{const b=document.createElement('button');b.className='opt';b.textContent=o;b.onclick=()=>pickP(o,b);op.appendChild(b);}); }
  function renderClues(){ const p=L[idx]; $('#cl').innerHTML=p.c.slice(0,clue+1).map((c,k)=>`<li>Clue ${k+1}: ${esc(c)}</li>`).join(''); if(clue>=2) $('#more').hidden=true; }
  $('#more').onclick=()=>{ clue=Math.min(2,clue+1); renderClues(); };
  function pickP(o,btn){ const p=L[idx]; const bs=$('#op').querySelectorAll('.opt'); bs.forEach(b=>{b.disabled=true; if(b.textContent===p.a)b.classList.add('right');});
    if(o===p.a){ const pts=3-clue; total+=pts; toast(`+${pts} points!`);} else btn.classList.add('wrong');
    clue=2; renderClues(); $('#tot').textContent=total; $('#more').hidden=true;
    if(idx<L.length-1){ $('#nx').hidden=false; } else { const best=store.get('gtp_best',0); if(total>best){store.set('gtp_best',total); confetti();} $('#nx').hidden=false; $('#nx').textContent='Share my score'; $('#nx').onclick=()=>share(`SportingBrain Guess the Player 🕵️ ${total}/${L.length*3} points\nsportingbrain.com`); } }
  $('#nx').onclick=()=>{ idx++; show(); };
  show();
}

// ================= TRUE OR FALSE =================
if(P==='tf'){
  const L=shuffle(SB_TF).slice(0,10); let i=0, sc=0;
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#2E7D32">True or False</span><div class="progress" id="bar"></div><div class="q" id="qt"></div>
  <div class="row" id="btns"><button class="btn" style="background:#2E7D32" id="t">True</button><button class="btn" style="background:#c62828" id="f">False</button></div><div id="res"></div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept('true-or-false.html')}`;
  const marks=[]; const bar=()=>{$('#bar').innerHTML=L.map((_,k)=>`<i class="${k<marks.length?(marks[k]?'ok':'no'):(k===i?'now':'')}"></i>`).join('');};
  function show(){ bar(); $('#qt').textContent=L[i][0]; $('#btns').hidden=false; }
  function ans(v){ const ok=v===L[i][1]; marks.push(ok); if(ok)sc++; toast(ok?'Correct!':`It's ${L[i][1]?'true':'false'}!`); i++; if(i<L.length) show(); else { bar(); $('#btns').hidden=true; $('#qt').textContent=`You got ${sc}/10`; if(sc>=9) confetti();
      $('#res').innerHTML=`<div class="brain-says"><img src="assets/brain.svg" alt=""><div>${sc>=8?'Proper sports brain, that.':sc>=5?'Not bad. Not great. Go again?':'Ooh. Did you have your eyes shut?'}</div></div><div class="row"><button class="btn pink" id="sh">Share</button><a class="btn ghost" href="true-or-false.html">Go again</a></div>`;
      $('#sh').onclick=()=>share(`SportingBrain True or False ✅\n${marks.map(m=>m?'🟩':'🟥').join('')} ${sc}/10\nsportingbrain.com`); } }
  $('#t').onclick=()=>ans(true); $('#f').onclick=()=>ans(false); show();
}

// ================= SPEED ROUND =================
if(P==='speed'){
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#D32F2F">Speed Round</span><p class="small">60 seconds. True or false. As many right as you can. A wrong answer costs you 3 seconds.</p>
  <div class="stats"><div><b class="timer" id="tm">60</b>seconds</div><div><b class="timer" id="sc">0</b>right</div><div><b id="best">${store.get('speed_best',0)}</b>your best</div></div>
  <div class="q" id="qt" style="min-height:3.2em">Ready?</div><div class="row" id="btns" hidden><button class="btn" style="background:#2E7D32" id="t">True</button><button class="btn" style="background:#c62828" id="f">False</button></div>
  <p><button class="btn gold wide" id="go">Start</button></p><div id="res"></div></section><div class="sec"><h2>Keep playing</h2></div>${moreExcept('speed-round.html')}`;
  let L, i, sc, t, timer;
  function q(){ if(i>=L.length){L=shuffle(SB_TF);i=0;} $('#qt').textContent=L[i][0]; }
  function end(){ clearInterval(timer); $('#btns').hidden=true; $('#go').hidden=false; $('#go').textContent='Play again'; $('#qt').textContent=`Time! You got ${sc} right.`;
    const best=store.get('speed_best',0); if(sc>best){store.set('speed_best',sc);$('#best').textContent=sc; confetti();}
    $('#res').innerHTML=`<button class="btn pink wide" id="sh">Share my score</button>`; $('#sh').onclick=()=>share(`SportingBrain Speed Round ⏱️ ${sc} right in 60 seconds\nsportingbrain.com`); }
  function ans(v){ if(v===L[i][1]){sc++;$('#sc').textContent=sc;} else { t=Math.max(0,t-3); toast('-3 seconds!'); } i++; q(); }
  $('#go').onclick=()=>{ L=shuffle(SB_TF); i=0; sc=0; t=60; $('#sc').textContent=0; $('#res').innerHTML=''; $('#go').hidden=true; $('#btns').hidden=false; q();
    timer=setInterval(()=>{ t--; $('#tm').textContent=t; if(t<=0) end(); },1000); };
  $('#t').onclick=()=>ans(true); $('#f').onclick=()=>ans(false);
}

// ================= THE GRID =================
if(P==='grid'){
  const G=pickDaily(SB_GRIDS); const cols=['#1E8E3E','#1565C0','#C2185B','#EF6C00'];
  let words=shuffle(G.groups.flatMap(g=>g.w)), sel=[], solved=[], lives=4;
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#00695C">The Grid</span><p class="small">Find four groups of four. Tap four words that go together, then press Check. Four mistakes and you're out.</p>
  <div id="sv"></div><div class="gridboard" id="gb"></div><div class="row" style="margin-top:12px"><button class="btn" id="ck">Check</button><button class="btn ghost" id="sf">Shuffle</button><span class="small">Lives: <b id="lv">❤️❤️❤️❤️</b></span></div><div id="res"></div></section>
  <div class="sec"><h2>Keep playing</h2></div>${moreExcept('the-grid.html')}`;
  function draw(){ $('#sv').innerHTML=solved.map((g,k)=>`<div class="solved" style="background:${cols[k]}"><b>${esc(g.n)}</b>${g.w.map(esc).join(', ')}</div>`).join('');
    $('#gb').innerHTML=words.map(w=>`<button class="${sel.includes(w)?'sel':''}">${esc(w)}</button>`).join(''); $('#lv').textContent='❤️'.repeat(lives)+'🖤'.repeat(4-lives);
    $('#gb').querySelectorAll('button').forEach((b,k)=>b.onclick=()=>{const w=words[k]; if(sel.includes(w)) sel=sel.filter(x=>x!==w); else if(sel.length<4) sel.push(w); draw();}); }
  function over(win){ $('#ck').hidden=$('#sf').hidden=true; if(!win){ G.groups.filter(g=>!solved.includes(g)).forEach(g=>solved.push(g)); words=[]; draw(); }
    $('#res').innerHTML=`<div class="brain-says"><img src="assets/brain.svg" alt=""><div>${win?`Cracked it with ${lives} ${lives===1?'life':'lives'} left. Clever clogs.`:'The Grid wins today. Fresh one tomorrow.'}</div></div><button class="btn pink wide" id="sh">Share</button>`;
    $('#sh').onclick=()=>share(`SportingBrain The Grid #${DAY} 🧩 ${win?'Solved':'Beaten'} ${'❤️'.repeat(lives)}\nsportingbrain.com`); if(win) confetti(); }
  $('#ck').onclick=()=>{ if(sel.length!==4){toast('Pick four words');return;} const g=G.groups.find(g=>sel.every(w=>g.w.includes(w)));
    if(g){ solved.push(g); words=words.filter(w=>!g.w.includes(w)); sel=[]; toast('Nice one!'); draw(); if(solved.length===4) over(true); }
    else { const close=G.groups.some(g=>sel.filter(w=>g.w.includes(w)).length===3); lives--; toast(close?'One away!':'Not a group'); sel=[]; draw(); if(lives===0) over(false); } };
  $('#sf').onclick=()=>{ words=shuffle(words); draw(); }; draw();
}

// ================= GUESS THE SPORT =================
if(P==='emoji'){
  main.innerHTML=`<section class="card" style="margin-top:14px" aria-live="polite"><span class="tag" style="background:#EF6C00">Guess the Sport</span><p class="small">Three emoji. One sport. Name it.</p><div id="g"></div></section><div class="sec"><h2>Keep playing</h2></div>${moreExcept('guess-the-sport.html')}`;
  const qs=shuffle(SB_EMOJI).slice(0,8).map(e=>({q:'',e:e.e,o:shuffle(e.o),a:null,ans:e.a}));
  qs.forEach(q=>{q.a=q.o.indexOf(q.ans); q.q='Which sport is this?'; q.s=q.e;});
  runQuiz($('#g'), qs, {done:m=>{ const sc=m.filter(Boolean).length; $('#g').innerHTML=`<div class="score">${sc}/8</div><div class="brain-says"><img src="assets/brain.svg" alt=""><div>${sc>=7?'Emoji master!':'Not bad. Have another go?'}</div></div><div class="row"><button class="btn pink" id="sh">Share</button><a class="btn ghost" href="guess-the-sport.html">Go again</a></div>`;
    $('#sh').onclick=()=>share(`SportingBrain Guess the Sport 🤔 ${sc}/8\nsportingbrain.com`); if(sc>=7) confetti(); }});
  // show emoji large
  const fix=()=>{ const s=$('#qsub'); if(s && !s.classList.contains('emoji-q')){ s.className='emoji-q'; } }; new MutationObserver(fix).observe($('#g'),{subtree:true,childList:true}); fix();
}

// ================= CHALLENGES =================
if(P==='challenge'){
  const k=params.get('c')||'weekly'; const c=SB_CHALLENGES[k]||SB_CHALLENGES.weekly;
  document.title=`${c.title} | SportingBrain`;
  main.innerHTML=`<section class="card" style="margin-top:14px;border-top:8px solid ${c.colour}"><span class="tag" style="background:${c.colour}">${esc(c.title)}</span><p class="small">${esc(c.sub)}</p><div id="q" aria-live="polite"></div></section>
  <div class="sec"><h2>Other challenges</h2></div><div class="g2">${Object.entries(SB_CHALLENGES).filter(([x])=>x!==k).map(([x,o])=>`<a class="ch" href="challenge.html?c=${x}" style="background:${o.colour}"><b>${esc(o.title)}</b><small>10 questions</small></a>`).join('')}</div>`;
  runQuiz($('#q'), c.qs, {done:m=>{ const sc=m.filter(Boolean).length; store.set('ch_'+k,sc);
    $('#q').innerHTML=`<div class="score">${sc}/${c.qs.length}</div><div class="brain-says"><img src="assets/brain.svg" alt=""><div>${sc>=8?'Proper sports brain. Take a bow.':sc>=5?'Solid. Not spectacular. The Brain respects it.':'Ouch. Same time next week?'}</div></div><button class="btn pink wide" id="sh">Share my score</button>`;
    $('#sh').onclick=()=>share(`SportingBrain ${c.title} 🧠\n${m.map(x=>x?'🟩':'🟥').join('')} ${sc}/${c.qs.length}\nsportingbrain.com`); if(sc>=9) confetti(); }});
}

// ================= READ =================
if(P==='read'){
  const s=params.get('s')||'story', id=params.get('id');
  const quizBlock=(qs)=>`<div class="card" style="margin-top:12px"><span class="tag">Quick quiz</span><div id="rq"></div></div>`;
  if(s==='story' && id){
    const st=SB_STORIES.find(x=>x.id===id)||SB_STORIES[0]; document.title=`${st.title} | SportingBrain`;
    main.innerHTML=`<article class="card" style="margin-top:14px;border-top:8px solid ${colour(st.sport)}"><span class="tag" style="background:${colour(st.sport)}">${esc(st.sport)}</span><div class="big-emoji" style="margin-top:8px">${st.emoji}</div><h1 class="title" style="font-size:1.6rem">${esc(st.title)}</h1>${st.body.map(p=>`<p>${esc(p)}</p>`).join('')}
      <button class="btn ghost" id="sh">Share this story</button></article>${quizBlock()}<div class="sec"><h2>Read next</h2></div>${next3(SB_STORIES.filter(x=>x.id!==st.id).slice(0,3).map(x=>[x.emoji,x.title,`read.html?s=story&id=${x.id}`]))}`;
    $('#sh').onclick=()=>share(`${st.title} 🧠 ${st.teaser}\nsportingbrain.com`);
    runQuiz($('#rq'), st.quiz, {done:m=>{ $('#rq').innerHTML=`<div class="score">${m.filter(Boolean).length}/${m.length}</div><p>${moreExcept('')}</p>`; }});
  } else if(s==='story'){
    main.innerHTML=`<div class="sec"><h2>True sports stories</h2></div>${SB_STORIES.map(x=>`<article class="card" style="border-left:6px solid ${colour(x.sport)}"><div class="row" style="flex-wrap:nowrap"><div class="big-emoji">${x.emoji}</div><div><div class="title" style="font-size:1.05rem">${esc(x.title)}</div><p class="teaser">${esc(x.teaser)}</p></div></div><a class="stretch" href="read.html?s=story&id=${x.id}" aria-label="${esc(x.title)}"></a></article>`).join('')}`;
  } else if(s==='sport' && id){
    const sp=SB_SPORTS.find(x=>x.id===id)||SB_SPORTS[0]; document.title=`${sp.name}: how it works | SportingBrain`;
    main.innerHTML=`<article class="card" style="margin-top:14px;border-top:8px solid ${colour('Unusual')}"><span class="tag" style="background:${colour('Unusual')}">Sport A to Z</span><div class="big-emoji" style="margin-top:8px">${sp.emoji}</div><h1 class="title" style="font-size:1.6rem">${esc(sp.name)}</h1>
      <p><b>Where it's played:</b> ${esc(sp.where)}</p><p>${esc(sp.what)}</p><div class="fact"><b>Did you know?</b> ${esc(sp.fact)}</div></article>${quizBlock()}<div class="sec"><h2>More sports</h2></div>${next3(SB_SPORTS.filter(x=>x.id!==sp.id).slice(0,3).map(x=>[x.emoji,x.name,`read.html?s=sport&id=${x.id}`]))}`;
    runQuiz($('#rq'), sp.quiz, {done:m=>{ $('#rq').innerHTML=`<div class="score">${m.filter(Boolean).length}/${m.length}</div><p class="small">Every sport counts. Even this one.</p>`; }});
  } else if(s==='sports'){
    main.innerHTML=`<div class="sec"><h2>Sport A to Z</h2></div><div class="g2">${SB_SPORTS.slice().sort((a,b)=>a.name.localeCompare(b.name)).map(x=>`<a class="card" style="text-decoration:none" href="read.html?s=sport&id=${x.id}"><div class="big-emoji">${x.emoji}</div><b>${esc(x.name)}</b></a>`).join('')}</div>`;
  } else if(s==='roundup'){
    const r=SB_ROUNDUP; document.title='The Cynical Round-Up | SportingBrain';
    main.innerHTML=`<article class="card" style="margin-top:14px;background:#263238;color:#eceff1"><span class="satire">SATIRE. Tongue firmly in cheek.</span><h1 class="title" style="font-size:1.5rem">😎 ${esc(r.title)}</h1>${r.items.map(i=>`<p><b>${esc(i[0])}:</b> ${esc(i[1])}</p>`).join('')}<div class="brain-says" style="background:rgba(255,255,255,.08)"><img src="assets/brain.svg" alt=""><div><b>The Brain's eye-roll of the week:</b> "${esc(r.brain)}"</div></div><button class="btn gold" id="sh">Share the Round-Up</button></article><div class="sec"><h2>Right, enough moaning</h2></div>${moreExcept('')}`;
    $('#sh').onclick=()=>share(`The Cynical Round-Up (satire) 😎 The week in sport with a big eye-roll.\nsportingbrain.com`);
  }
}

// ================= ABOUT =================
if(P==='about'){
  main.innerHTML=`<section class="card" style="margin-top:14px"><h1 class="title">About SportingBrain</h1><p>SportingBrain is a free daily sports hub for every fan, every sport and every age. Football gets you through the door. Everything else, from netball to darts, F1 to kabaddi, keeps you coming back. Women's sport sits front and centre, right alongside the men's game.</p><p>The Brain is our own cartoon mascot. He sets the puzzles, plays against you, and is a terrible loser.</p><p><b>No betting. No gambling ads. Ever.</b></p></section>
  <section class="card"><h2 class="title">Privacy, in plain English</h2><p><b>What we collect:</b> nothing, unless you sign up to The Daily Brain newsletter. That is the only time we ask for any details, and it's just your email address. You don't need an account to play anything.</p><p><b>The newsletter:</b> we use your email address only to send you the newsletter. We never sell it or share it for marketing. The sign-up form is run for us by Tally, a European form service that follows GDPR. You can unsubscribe at any time with one click, and you can ask us to delete your email address whenever you like. You must be 13 or over to sign up.</p><p><b>What stays on your device:</b> your scores, streaks and settings are saved in your own browser so they're there next time. They never leave your device. Clearing your browser data removes them.</p><p><b>Cookies and adverts:</b> there are none yet. Before we add any, we'll ask your permission first, and there will never be targeted adverts aimed at children.</p><p><b>For parents:</b> there's no chat, no messaging between users and no sign-up needed to play.</p></section>
  <section class="card"><h2 class="title">Spotted a mistake?</h2><p>We check our facts carefully. If you think we've got one wrong, tell us and we'll fix it.</p></section>`;
}
})();
