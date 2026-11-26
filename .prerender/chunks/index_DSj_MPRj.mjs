import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate, n as templateExit, t as templateEnter } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { n as GROUPS, r as PLAY, t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as buildMoments } from "./callit_DuJvZDio.mjs";
import { t as FLASHBACKS } from "./flashbacks_BkymNGeb.mjs";
// src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const M = buildMoments().map((m) => ({
		match: m.match,
		team: m.team,
		opp: m.opp,
		score: m.score,
		at: m.at,
		need: m.need,
		q: m.qs[0].q,
		innings: m.innings
	}));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "SportingBrain: the smartest free sports site in the world",
		"description": "Call It, the daily game built on real matches. Flashback, On This Day, ball-by-ball replays, proper sport guides and the Cynical Round-Up. Free. No betting, ever.",
		"page": "home",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="fp fp-pre"><div class="fp-main"><section class="hook has-photo" id="hookPre" aria-hidden="true"><div class="hook-top"><span id="hpD">Beat the Brain · Hard</span></div><div class="hk-t" id="hpT">Beat the Brain</div><p class="hook-sub" id="hpS">Five questions. The Brain has already played. Your turn.</p><div class="hook-pips"><i class="c"></i><i></i><i></i><i></i><i></i></div><p class="hook-k">Question 1 of 5</p><div class="hook-q hk-ph"></div><div class="hook-opts"><button disabled></button><button disabled></button><button disabled></button><button disabled></button></div></section></div></div><script>(function(){try{var d=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/London'})).getDay();
var f=['329300362865','03839c401997','fa48a10aa76d','03722f0fe294','6eec06d35c25','40d56c180e9c','329300362865'][d],u=(document.documentElement.dataset.base||'/')+'photos/hook/'+f+'.jpg';
var l=document.createElement('link');l.rel='preload';l.as='image';l.setAttribute('fetchpriority','high');l.href=u;document.head.appendChild(l);
var W=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];var h=document.getElementById('hookPre');h.style.setProperty('--hookbg',"url('"+u+"')");document.getElementById('hpD').textContent=W[d]+' · Beat the Brain · Hard';}catch(e){}})();<\/script><div class="crawl"><h1>Free daily sports quizzes, games and stories</h1><p class="teaser">SportingBrain is a free sports site for people who know their sport. Daily games built on real matches, hard quiz questions, and true stories from every sport, men's and women's. No sign-up, no betting, ever.</p>${GROUPS.map(([g, label]) => renderTemplate`<section><h2>${label}</h2><ul>${PLAY.filter((x) => x[3] === g).map((x) => renderTemplate`<li><a${addAttribute(`${base}${x[0]}.html`, "href")}>${x[1]}</a>: ${x[2]}</li>`)}</ul></section>`)}<section><h2>Read</h2><ul><li><a${addAttribute(`${base}this-week.html`, "href")}>This Week's Quiz</a>: five questions on the past week in sport, with the stories behind them.</li><li><a${addAttribute(`${base}on-this-day.html`, "href")}>On This Day</a>: what happened in sport on today's date.</li><li><a${addAttribute(`${base}stories.html`, "href")}>True sports stories</a>: comebacks, firsts, underdogs and heroes.</li><li><a${addAttribute(`${base}sports.html`, "href")}>Sport guides</a>: how every sport really works.</li>${FLASHBACKS.slice(0, 6).map((f) => renderTemplate`<li><a${addAttribute(`${base}flashback/${f.id}.html`, "href")}>${f.title}</a>: ${f.standfirst}</li>`)}</ul></section></div><noscript><p>SportingBrain needs JavaScript switched on to play the games.</p></noscript><template id="ad-home_leaderboard">${templateEnter($$result)}${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "home_leaderboard" })}${templateExit($$result)}</template><template id="ad-home_infeed">${templateEnter($$result)}${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "home_infeed" })}${templateExit($$result)}</template><script id="ciHome" type="application/json">${unescapeHTML(JSON.stringify(M))}<\/script>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/index.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/index.astro";
// \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
export { page };
