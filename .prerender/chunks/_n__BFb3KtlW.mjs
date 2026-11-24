import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { r as createAstro, t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/data/weekly.js
var WEEKLY = { 1: {
	date: "Friday 27 November 2026",
	qs: [
		{
			"sport": "Football",
			"q": "Who scored the first goal in a men's World Cup?",
			"opts": [
				"Lucien Laurent",
				"Bert Patenaude",
				"Guillermo Stábile",
				"Héctor Castro"
			],
			"ans": 0,
			"ex": "Laurent scored for France against Mexico on 13 July 1930."
		},
		{
			"sport": "Athletics",
			"q": "Who ran the first sub-five-minute mile by a woman, in 1954?",
			"opts": [
				"Anne Smith",
				"Marjorie Jackson",
				"Diane Leather",
				"Betty Cuthbert"
			],
			"ans": 2,
			"ex": "4:59.6 in Birmingham, 23 days after Bannister's sub-four."
		},
		{
			"sport": "Football",
			"q": "Who was the first player to be sent off in an FA Cup final?",
			"opts": [
				"Pablo Zabaleta",
				"Jose Antonio Reyes",
				"Pat Van Den Hauwe",
				"Kevin Moran"
			],
			"ans": 3,
			"ex": "Manchester United's Kevin Moran, against Everton in 1985. United still won 1-0."
		},
		{
			"sport": "Squash",
			"q": "Who won the women's British Open squash title 16 years in a row, from 1962 to 1977?",
			"opts": [
				"Heather McKay",
				"Sarah Fitz-Gerald",
				"Susan Devoy",
				"Janet Morgan"
			],
			"ans": 0,
			"ex": "The Australian is said to have lost only two matches in her entire career."
		},
		{
			"sport": "Formula 1",
			"q": "Who won the 1982 world title despite winning only one race?",
			"opts": [
				"Alain Prost",
				"John Watson",
				"Keke Rosberg",
				"Didier Pironi"
			],
			"ans": 2,
			"ex": "He won the Swiss Grand Prix, held at Dijon in France."
		}
	]
} };
// src/pages/weekly/[n].astro
var _n__exports = /* @__PURE__ */ __exportAll({
	default: () => $$N,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://sportingbrain.com");
function getStaticPaths() {
	return Object.keys(WEEKLY).map((n) => ({ params: { n } }));
}
var $$N = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$N;
	const { n } = Astro.params;
	const I = WEEKLY[n];
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `The Weekly Brain #${n}: five hard questions | SportingBrain`,
		"description": `The Weekly Brain #${n}, ${I.date}. Five of the week's hardest sports questions. Answer them, check your score, then challenge a mate.`,
		"page": "weekly",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="wb-hero"><p class="gg-kicker">The Weekly Brain #${n} · ${I.date}</p><h1>How many can you get?</h1><p class="wb-stand">Tap an answer. You'll see straight away if you're right.</p></header><ol class="wb-list"${addAttribute(n, "data-issue")}>${I.qs.map((q, i) => renderTemplate`<li class="wb-q"${addAttribute(`q${i + 1}`, "id")}${addAttribute(q.ans, "data-ans")}><p class="wb-sport">Question ${i + 1} · ${q.sport}</p><h2>${q.q}</h2><div class="wb-opts">${q.opts.map((o, j) => renderTemplate`<button type="button"${addAttribute(j, "data-j")}><b>${"ABCD"[j]}</b> ${o}</button>`)}</div><p class="wb-ex" hidden><span class="wb-verdict"></span> ${q.ex}</p></li>`)}</ol><section class="wb-score" hidden aria-live="polite"><h2>You scored <span id="wbS">0</span> out of 5</h2><p id="wbLine"></p><div class="wb-share"><a class="btn gold" id="wbWa" target="_blank" rel="noopener">Challenge a mate on WhatsApp</a><a class="btn"${addAttribute(`${base}daily.html`, "href")}>Play today's Beat the Brain</a></div></section><script>(function(){var L=document.querySelector('.wb-list');if(!L)return;var N=L.dataset.issue,K='wb_'+N,S={};try{S=JSON.parse(localStorage.getItem(K)||'{}')}catch(e){}
  function mark(li,j,save){var a=+li.dataset.ans,bs=li.querySelectorAll('.wb-opts button');bs.forEach(function(b,k){b.disabled=true;if(k===a)b.classList.add('ok');else if(k===j)b.classList.add('no');});var ex=li.querySelector('.wb-ex');ex.hidden=false;ex.querySelector('.wb-verdict').textContent=j===a?'Right.':'Not this time.';if(save){S[li.id]=j;try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}}tally();}
  function tally(){var qs=L.querySelectorAll('.wb-q'),done=0,sc=0;qs.forEach(function(li){if(li.id in S){done++;if(S[li.id]===+li.dataset.ans)sc++;}});if(done===qs.length){var box=document.querySelector('.wb-score');box.hidden=false;document.getElementById('wbS').textContent=sc;document.getElementById('wbLine').textContent=sc===5?'Five out of five. Properly impressive.':sc>=3?'Good going. Most people get two.':'These are hard. Most people get two.';var t='I got '+sc+'/5 on The Weekly Brain #'+N+'. Bet you can\\'t beat it: '+location.origin+location.pathname;document.getElementById('wbWa').href='https://wa.me/?text='+encodeURIComponent(t);}}
  L.querySelectorAll('.wb-q').forEach(function(li){if(li.id in S)mark(li,S[li.id],false);li.querySelectorAll('.wb-opts button').forEach(function(b){b.onclick=function(){mark(li,+b.dataset.j,true);var nx=li.nextElementSibling;if(nx)setTimeout(function(){nx.scrollIntoView({behavior:'smooth',block:'start'})},900);};});});
  var p=new URLSearchParams(location.search),q=p.get('q'),a=(p.get('a')||'').toUpperCase();if(q&&'ABCD'.indexOf(a)>-1&&a){var li=document.getElementById('q'+q);if(li&&!(li.id in S)){mark(li,'ABCD'.indexOf(a),true);}if(li)setTimeout(function(){li.scrollIntoView({block:'start'})},300);}})();<\/script>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/weekly/[n].astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/weekly/[n].astro";
var $$url = "/weekly/[n].html";
// \0virtual:astro:page:src/pages/weekly/[n]@_@astro
var page = () => _n__exports;
export { page };
