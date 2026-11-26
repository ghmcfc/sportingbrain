import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as WEEK } from "./week_B4Qp89Or.mjs";
import "./content_Dic6TXw9.mjs";
// src/pages/this-week.astro
var this_week_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ThisWeek,
	file: () => $$file,
	url: () => $$url
});
var $$ThisWeek = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "This Week's Sports Quiz: Five on the Week | SportingBrain",
		"description": "Five questions on the past week in sport. Football, rugby, Formula 1 and more. Play, see your score, read the stories behind each answer, then challenge a mate.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="tw"><header class="tw-head"><p class="fp-kicker">Edition: ${WEEK.edition}</p><h1>This Week's Quiz</h1><p class="teaser">Five questions on the past week in sport. Were you paying attention?</p></header><ol class="wb-list tw-quiz" id="quiz"${addAttribute(`twq_${WEEK.edition}`, "data-key")}>${WEEK.quiz.map((q, i) => {
		const st = WEEK.stories[q.story];
		return renderTemplate`<li class="wb-q"${addAttribute(`q${i + 1}`, "id")}${addAttribute(q.ans, "data-ans")}><p class="wb-sport">Question ${i + 1} of ${WEEK.quiz.length} · ${st.sport}</p><h2>${q.q}</h2><div class="wb-opts">${q.opts.map((o, j) => renderTemplate`<button type="button"${addAttribute(j, "data-j")}><b>${"ABCD"[j]}</b> ${o}</button>`)}</div><div class="wb-ex" hidden><p><span class="wb-verdict"></span> ${q.fact}</p><p class="small">Source: <a${addAttribute(st.src[1], "href")} target="_blank" rel="noopener">${st.src[0]}</a></p></div></li>`;
	})}</ol><section class="wb-score" hidden aria-live="polite"><h2>You scored <span id="wbS">0</span> out of ${WEEK.quiz.length}</h2><p id="wbLine"></p><div class="wb-share"><a class="btn gold" id="wbWa" target="_blank" rel="noopener" data-track="weekquiz-whatsapp">Challenge my mates on WhatsApp</a></div><p class="small" style="margin-top:12px"><a${addAttribute(`${base}daily.html`, "href")} style="color:#fff">Then try today's Beat the Brain</a></p><div data-app-card></div></section><script>(function(){var L=document.querySelector('.tw-quiz');if(!L)return;var K=L.dataset.key,S={};try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){}
    function mark(li,j,save){var a=+li.dataset.ans;li.querySelectorAll('.wb-opts button').forEach(function(b,k){b.disabled=true;if(k===a)b.classList.add('ok');else if(k===j)b.classList.add('no');});var ex=li.querySelector('.wb-ex');ex.hidden=false;ex.querySelector('.wb-verdict').textContent=j===a?'Right.':'Not this time.';if(save){S[li.id]=j;try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}if(window.sbTrack&&Object.keys(S).length===1)sbTrack('weekquiz-start');}tally();}
    function tally(){var qs=L.querySelectorAll('.wb-q'),done=0,sc=0;qs.forEach(function(li){if(li.id in S){done++;if(S[li.id]===+li.dataset.ans)sc++;}});if(done===qs.length){var box=document.querySelector('.wb-score');box.hidden=false;document.getElementById('wbS').textContent=sc;document.getElementById('wbLine').textContent=sc===qs.length?'Full marks. You were paying attention.':sc>=3?'Not bad at all.':'Time to watch more sport.';var t='I got '+sc+'/'+qs.length+' on This Week\\'s Quiz at SportingBrain. Your turn: '+location.origin+location.pathname;document.getElementById('wbWa').href='https://wa.me/?text='+encodeURIComponent(t);}}
    var pa=new URLSearchParams(location.search).get('a');L.querySelectorAll('.wb-q').forEach(function(li){if(li.id in S)mark(li,S[li.id],false);else if(li.id==='q1'&&pa!==null&&/^[0-3]$/.test(pa))mark(li,+pa,true);li.querySelectorAll('.wb-opts button').forEach(function(b){b.onclick=function(){mark(li,+b.dataset.j,true);};});});})();<\/script><div class="sec" id="watch"><h2>What to watch</h2></div><ol class="tw-watch">${WEEK.watch.map((w) => renderTemplate`<li><span class="tw-when">${w.when}</span><div><p class="fp-kicker">${w.sport}</p><b>${w.what}</b><p>${w.why}</p></div></li>`)}</ol></section>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/this-week.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/this-week.astro";
var $$url = "/this-week.html";
// \0virtual:astro:page:src/pages/this-week@_@astro
var page = () => this_week_exports;
export { page };
