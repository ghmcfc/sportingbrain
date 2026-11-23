import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as WEEK } from "./week_D70pcIAI.mjs";
import { t as FLASHBACKS } from "./flashbacks_C9iOEUpR.mjs";
import { t as GUIDES } from "./guides_wX4Wgl8Y.mjs";
// src/pages/read.astro
var read_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Read,
	file: () => $$file,
	url: () => $$url
});
var $$Read = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const lead = WEEK.stories[0];
	const S = [
		[
			"this-week",
			"This Week in Sport",
			`${WEEK.stories.length} stories from the week, men's and women's, each with its source. New every Monday.`
		],
		[
			"flashback",
			"Flashback",
			`${FLASHBACKS.length} forgotten moments told properly, with photos and sources.`
		],
		[
			"on-this-day",
			"On This Day",
			"What happened in sport on today's date, through the years."
		],
		[
			"sports",
			"Sport guides",
			`${GUIDES.length} guides: how each sport works, what experts watch for, the greats and the language.`
		],
		[
			"round-up",
			"The Cynical Round-Up",
			"The real week in sport, with an eye-roll. Satire, clearly labelled."
		],
		[
			"newsletter",
			"The Daily Brain",
			"Today's game, a Flashback and one stat to win an argument with. Free, every morning."
		]
	];
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Read: This Week, Flashback, On This Day and sport guides | SportingBrain",
		"description": "This Week in Sport, Flashback, On This Day, guides to every sport and the Cynical Round-Up.",
		"page": "read",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Read</h1><p>Proper sports writing: this week's stories with sources, forgotten moments, today in history and guides to every sport.</p></header><a class="hub-lead"${addAttribute(`${base}this-week.html`, "href")}><span class="pg-step">This Week · ${WEEK.edition}</span><b>${lead.title}</b><span>${lead.body.slice(0, 180).replace(/\s\S*$/, "")}…</span></a><div class="hub-grid">${S.map(([h, t, d]) => renderTemplate`<a class="hub-card"${addAttribute(`${base}${h}.html`, "href")}><b>${t}</b><span>${d}</span></a>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/read.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/read.astro";
var $$url = "/sportingbrain/read.html";
// \0virtual:astro:page:src/pages/read@_@astro
var page = () => read_exports;
export { page };
