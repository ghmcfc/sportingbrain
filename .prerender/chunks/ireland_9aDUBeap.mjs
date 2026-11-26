import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$IeBand } from "./ireland_BMVB1g9z.mjs";
import { a as LEGENDS, i as IE_GROUPS, n as IE_BANK, o as MOMENTS, r as IE_BOOKS, t as COUNTIES } from "./ireland_BYHEycyv.mjs";
// src/pages/ireland.astro
var ireland_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Ireland,
	file: () => $$file,
	url: () => $$url
});
var $$Ireland = createComponent(($$result, $$props, $$slots) => {
	const amz = (b) => "https://www.amazon.co.uk/s?k=" + encodeURIComponent(b[0] + " " + b[1].replace(/ with .*/, "")).replace(/%20/g, "+") + "&tag=gmh710f-21";
	const base = "/".replace(/\/?$/, "/");
	const MON = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	const when = (m) => `${+m[0].slice(3)} ${MON[+m[0].slice(0, 2) - 1]} ${m[1]}`;
	const sorted = MOMENTS.slice().sort((a, b) => a[0].localeCompare(b[0]));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"image": "https://sportingbrain.com/og-ireland.png",
		"title": "SportingBrain Ireland: daily Irish sports quizzes and games",
		"description": "Free daily games on Irish sport: the Irish Brain quiz, Name the County and Irish Legends. GAA, rugby, football, racing, boxing and more. Pick your county or club and play.",
		"page": "ireland",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "IeBand", $$IeBand, { "current": "hub" })}${maybeRenderHead($$result)}<div class="ie"><section class="ie-hero"><p class="ga" lang="ga">Fáilte</p><h1>Ireland's daily sports games</h1><p>Three new games every day on Irish sport, from Croke Park to Cheltenham, Thomond Park to Tallaght. Hurling and football, camogie and ladies' football, rugby, the League of Ireland, boxing, racing, golf and more. Hard questions, all 32 counties, men's and women's sport. Free, no sign-up, no betting.</p><div class="row"><a class="btn gold"${addAttribute(`${base}ireland/brain.html`, "href")} data-track="ie-hero-play">Play today's Irish Brain</a><a class="btn ghost" href="#moments">Irish sporting moments</a></div></section><div class="ie-county" id="ieCounty"></div><div class="ie-sec"><h2>Today's games</h2><span lang="ga">Cluichí an Lae</span></div><div class="ie-tiles"><a class="ie-tile"${addAttribute(`${base}ireland/brain.html`, "href")} data-g="ieb"><span class="ga" lang="ga">Dúshlán an Lae</span><b>The Irish Brain</b><span>Five hard questions on Irish sport. Three Hard, two Expert. The Brain has already had a go.</span><small data-st>Not played yet today</small></a><a class="ie-tile"${addAttribute(`${base}ireland/county.html`, "href")} data-g="iec"><span class="ga" lang="ga">Cén Contae?</span><b>Name the County</b><span>Five clues to one of the 32 counties. History, ground, nickname, colours.</span><small data-st>Not played yet today</small></a><a class="ie-tile"${addAttribute(`${base}ireland/legends.html`, "href")} data-g="iel"><span class="ga" lang="ga">Cé Mise?</span><b>Irish Legends</b><span>Five clues to one of Ireland's sporting greats. Hardest clue first.</span><small data-st>Not played yet today</small></a></div><div class="ie-sec"><h2>Pick a sport</h2><span lang="ga">Rogha Spóirt</span></div><div class="ie-groups">${IE_GROUPS.map((g) => renderTemplate`<a${addAttribute(`${base}ireland/quiz.html?s=${g[0]}`, "href")}><b>${g[1]}</b><span>${g[2]}</span><small>Ten questions, play as often as you like</small></a>`)}</div><div class="ie-sec"><h2>Irish Sports Book of the Week</h2><span lang="ga">Leabhar na Seachtaine</span></div><div id="ieBook"><article class="ie-book"><div class="ie-spine" aria-hidden="true">${IE_BOOKS[0][0]}</div><div><p class="pg-step">${IE_BOOKS[0][2]}</p><h3>${IE_BOOKS[0][0]}</h3><p class="by">${IE_BOOKS[0][1]}</p><p>${IE_BOOKS[0][3]}</p><a class="btn gold"${addAttribute(amz(IE_BOOKS[0]), "href")} target="_blank" rel="sponsored nofollow noopener" data-track="ie-book">See it on Amazon</a><p class="aff">Amazon affiliate link: we may earn a small commission, at no cost to you.</p></div></article></div><details class="pg-card" style="margin-top:12px"><summary><b>The Irish sports bookshelf: all ${IE_BOOKS.length} books</b></summary><div class="ie-shelf">${IE_BOOKS.map((b) => renderTemplate`<a${addAttribute(amz(b), "href")} target="_blank" rel="sponsored nofollow noopener" data-track="ie-shelf"><b>${b[0]}</b><span>${b[1]} · ${b[2]}</span></a>`)}</div></details><div class="ie-sec"><h2>How the games work</h2><span lang="ga">Na Cluichí</span></div><div class="ie-more"><a${addAttribute(`${base}sports/gaelic-football.html`, "href")}><b>Gaelic football</b>The rules, the new two-point arc and the greats.</a><a${addAttribute(`${base}sports/hurling.html`, "href")}><b>Hurling and camogie</b>The fastest field game in the world, explained.</a><a${addAttribute(`${base}sports/rugby-union.html`, "href")}><b>Rugby union</b>How it works, from scrums to the breakdown.</a><a${addAttribute(`${base}sports/horse-racing.html`, "href")}><b>Horse racing</b>Jumps, the Flat and how a race card works.</a></div><div class="ie-sec" id="moments"><h2>Irish sporting moments</h2><span lang="ga">Ar an Lá Seo</span></div><div id="ieToday"></div><div class="ie-moments">${sorted.map((m) => renderTemplate`<article class="ie-moment"${addAttribute(m[0], "data-d")}><p class="when">${when(m)}</p><h3>${m[2]}</h3><p>${m[3]}</p></article>`)}</div><div class="ie-sec"><h2>What's in the Irish edition</h2><span lang="ga">Faoi</span></div><div class="pg-card"><p>SportingBrain Ireland is the Irish edition of <a${addAttribute(base, "href")}>SportingBrain</a>, the free daily sports site. It has ${IE_BANK.length} hand-written questions on Irish sport across ${IE_GROUPS.length} sports, all ${COUNTIES.length} counties of the island, ${LEGENDS.length} Irish sporting greats, a weekly Irish sports book and plain-English guides to Gaelic football and hurling, and it grows every week. The games change at midnight, every day.</p><p>We cover the island as a whole, the way most of its sports are run: GAA, rugby, hockey and boxing all play as one Ireland. So Joey Dunlop and Mary Peters sit alongside Katie Taylor and Henry Shefflin. Women's sport gets the same space as men's: camogie, ladies' football, the Irish women's rugby and football teams, and Rachael Blackmore, Kellie Harrington and Cora Staunton.</p><p class="ie-note">Facts are checked when we write them and settled ones only: nothing that changes week to week. If you spot something wrong, <a data-mistake href="#">tell us</a> and we will fix it.</p></div><div class="ie-sec"><h2>More from SportingBrain</h2></div><div class="ie-more"><a${addAttribute(base, "href")}><b>SportingBrain UK</b>Back to the main site: every sport, every day.</a><a${addAttribute(`${base}daily.html`, "href")}><b>Beat the Brain</b>The main daily quiz, every sport.</a><a${addAttribute(`${base}connections.html`, "href")}><b>Connections: Sport</b>Sixteen names, four groups.</a><a${addAttribute(`${base}pub-quiz.html`, "href")}><b>Pub and Club Quiz</b>Four rounds, free to print for your club night.</a><a${addAttribute(`${base}newsletter.html`, "href")}><b>The Weekly Brain</b>The best of the week, every Friday. Free.</a></div></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/ireland.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/ireland.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/ireland.astro";
var $$url = "/ireland.html";
// \0virtual:astro:page:src/pages/ireland@_@astro
var page = () => ireland_exports;
export { page };
