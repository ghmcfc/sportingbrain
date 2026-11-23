(function(){
  // ---- storage (device only, never sent anywhere) ----
  const store = {
    get(k, d){ try{ const v = localStorage.getItem('sb_'+k); return v===null? d : JSON.parse(v); }catch(e){ return d; } },
    set(k, v){ try{ localStorage.setItem('sb_'+k, JSON.stringify(v)); }catch(e){} }
  };
  window.SB = { store };

  // ---- helpers ----
  const LAUNCH = Date.UTC(2026, 10, 23); // day 1 of SportingBrain
  function ukDayKey(d=new Date()){
    const s = d.toLocaleDateString('en-GB',{timeZone:'Europe/London'}); // dd/mm/yyyy
    const [dd,mm,yy] = s.split('/'); return `${yy}-${mm}-${dd}`;
  }
  function dayNumber(){
    const [y,m,d] = ukDayKey().split('-').map(Number);
    return Math.floor((Date.UTC(y,m-1,d) - LAUNCH)/86400000) + 1;
  }
  function seeded(n){ let x = n*9301+49297; return () => (x = (x*9301+49297)%233280)/233280; }
  function toast(msg){
    let t = document.querySelector('.toast');
    if(!t){ t = document.createElement('div'); t.className='toast'; t.setAttribute('role','status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 2200);
  }
  async function share(text){
    try{ if(navigator.share){ await navigator.share({text}); return; } }catch(e){ return; }
    try{ await navigator.clipboard.writeText(text); toast('Copied. Paste it in the group chat!'); }
    catch(e){ prompt('Copy your score card:', text); }
  }
  function countdown(el){
    function tick(){
      const now = new Date();
      const lon = new Date(now.toLocaleString('en-US',{timeZone:'Europe/London'}));
      const next = new Date(lon); next.setHours(24,0,0,0);
      let s = Math.max(0, Math.floor((next-lon)/1000));
      const h = String(Math.floor(s/3600)).padStart(2,'0'); s%=3600;
      const m = String(Math.floor(s/60)).padStart(2,'0'); const ss = String(s%60).padStart(2,'0');
      el.textContent = `${h}:${m}:${ss}`;
    }
    tick(); setInterval(tick, 1000);
  }
  SB.toast = toast; SB.share = share; SB.countdown = countdown; SB.dayNumber = dayNumber; SB.ukDayKey = ukDayKey;

  // ---- dyslexia-friendly font toggle ----
  if(store.get('dys', false)) document.body.classList.add('dyslexic');
  document.querySelectorAll('[data-dys]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault(); const on = !document.body.classList.contains('dyslexic');
    document.body.classList.toggle('dyslexic', on); store.set('dys', on);
  }));

  // ---- Beat the Brain (daily) ----
  const game = document.getElementById('daily');
  if(game){
    const Q = window.SB_QUESTIONS, N = 5;
    const day = dayNumber();
    const rnd = seeded(day);
    // pick 5 questions for today: rotate through the bank, football-led
    const start = ((day-1)*N) % Q.length;
    let today = []; for(let i=0;i<N;i++) today.push(Q[(start+i) % Q.length]);
    const fi = today.findIndex(q => /football/i.test(q.s));
    if(fi>0){ const [f] = today.splice(fi,1); today.unshift(f); }
    const brainScore = 2 + Math.floor(rnd()*3); // the Brain gets 2 to 4 today
    const key = ukDayKey();
    const saved = store.get('daily_'+key, null);

    const el = id => game.querySelector(id);
    el('#dayno').textContent = day;
    el('#brainscore').textContent = brainScore;

    let i = 0, marks = [];
    function bar(){
      el('#bar').innerHTML = today.map((_,k)=>`<i class="${k<marks.length?(marks[k]?'ok':'no'):(k===i?'now':'')}"></i>`).join('');
    }
    function show(){
      bar();
      const q = today[i];
      el('#sport').textContent = q.s;
      el('#qtext').textContent = q.q;
      el('#fact').hidden = true; el('#next').hidden = true;
      el('#opts').innerHTML = '';
      q.o.forEach((o,k)=>{
        const b = document.createElement('button'); b.className='opt'; b.textContent=o;
        b.onclick = () => answer(k, b); el('#opts').appendChild(b);
      });
    }
    function answer(k){
      const q = today[i]; const btns = el('#opts').querySelectorAll('.opt');
      btns.forEach((b,j)=>{ b.disabled = true; if(j===q.a) b.classList.add('right'); });
      if(k!==q.a) btns[k].classList.add('wrong');
      marks.push(k===q.a);
      el('#fact').textContent = (k===q.a? 'Correct! ' : 'Not this time. ') + q.f;
      el('#fact').hidden = false;
      el('#next').textContent = i < N-1 ? 'Next question' : 'See how you did';
      el('#next').hidden = false; bar();
    }
    el('#next').onclick = () => { i++; if(i<N) show(); else finish(); };

    function finish(save=true){
      const score = marks.filter(Boolean).length;
      if(save){
        store.set('daily_'+key, {marks});
        // streak
        const last = store.get('lastday', null); let streak = store.get('streak', 0);
        const y = new Date(); y.setDate(y.getDate()-1);
        streak = (last === ukDayKey(y)) ? streak+1 : (last === key ? streak : 1);
        store.set('streak', streak); store.set('lastday', key);
        store.set('played', store.get('played',0)+1);
        if(score > brainScore) store.set('beaten', store.get('beaten',0)+1);
      }
      el('#play').hidden = true; el('#done').hidden = false;
      el('#yourscore').textContent = `${score}/${N}`;
      let line;
      if(score > brainScore) line = "You've out-thought the Brain! Frame this score.";
      else if(score === brainScore) line = "A draw. The Brain demands a rematch tomorrow.";
      else line = "Brains 1, Brawn 0. Ooh, same time tomorrow?";
      el('#verdict').textContent = line;
      el('#streak').textContent = store.get('streak',1);
      el('#played').textContent = store.get('played',1);
      el('#beaten').textContent = store.get('beaten',0);
      const grid = marks.map(m => m ? '🟩' : '🟥').join('');
      const card = `SportingBrain #${day} 🧠\n${grid}  ${score}/${N}\nThe Brain got ${brainScore}/${N}. ${score>brainScore?'I beat the Brain!':score===brainScore?'Honours even.':'He got me today.'}\nsportingbrain.com`;
      el('#share').onclick = () => share(card);
      countdown(el('#cd'));
    }
    if(saved && saved.marks && saved.marks.length===N){ marks = saved.marks; finish(false); }
    else show();
  }

  // ---- Higher or Lower ----
  const hl = document.getElementById('hl');
  if(hl){
    const D = window.SB_HL.slice();
    let best = store.get('hl_best', 0), run = 0, a, b;
    const el = id => hl.querySelector(id);
    el('#best').textContent = best;
    function pick(exclude){ let x; do{ x = D[Math.floor(Math.random()*D.length)]; } while(x===exclude || (exclude && x.v===exclude.v)); return x; }
    function round(){
      a = a || pick(); b = pick(a);
      el('#alab').textContent = a.l; el('#aval').textContent = a.v.toLocaleString('en-GB');
      el('#blab').textContent = b.l; el('#bval').textContent = '?';
      el('#run').textContent = run; el('#hlbtns').hidden = false; el('#hlres').hidden = true;
    }
    function guess(higher){
      const right = higher ? b.v > a.v : b.v < a.v;
      el('#bval').textContent = b.v.toLocaleString('en-GB'); el('#hlbtns').hidden = true;
      if(right){
        run++; el('#run').textContent = run; toast('Correct! Keep going');
        setTimeout(()=>{ a = b; round(); }, 1100);
      } else {
        if(run > best){ best = run; store.set('hl_best', best); el('#best').textContent = best; }
        el('#hlres').hidden = false;
        el('#hlmsg').textContent = run === 0 ? "Ooh, first one. The Brain is trying not to laugh." : `You got ${run} in a row. ${run>=best?'New personal best!':'Your best is '+best+'.'}`;
        const card = `SportingBrain Higher or Lower 🧠\n${'🟩'.repeat(Math.min(run,15))}🟥  ${run} in a row\nsportingbrain.com/higher-or-lower`;
        el('#hlshare').onclick = () => share(card);
      }
    }
    el('#higher').onclick = () => guess(true);
    el('#lower').onclick = () => guess(false);
    el('#again').onclick = () => { run = 0; a = null; round(); };
    round();
  }
})();
