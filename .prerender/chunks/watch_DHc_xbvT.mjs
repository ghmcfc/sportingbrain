import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as REPLAYS } from "./replays_C2M6bPcX.mjs";
// src/pages/watch.astro
var watch_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Watch,
	file: () => $$file,
	url: () => $$url
});
var $$Watch = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Watch: ball-by-ball replays and Laugh of the Day | SportingBrain",
		"description": "Great cricket finals replayed ball by ball, Call It play-outs and a funny moment from sport every day.",
		"page": "watch",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Watch</h1><p>Great finals replayed ball by ball, and one funny moment from sport every day.</p></header><div class="hub-grid"><a class="hub-card"${addAttribute(`${base}laughs.html`, "href")}><b>Laugh of the Day</b><span>One hand-picked funny moment from sport, every day.</span></a><a class="hub-card"${addAttribute(`${base}call-it.html`, "href")}><b>Call It, then watch it</b><span>Call the next five overs of a real final, then watch them play out ball by ball.</span></a><a class="hub-card"${addAttribute(`${base}call-it-football.html`, "href")}><b>Call It: Football</b><span>Call the rest of a great final, then watch the goals go in minute by minute.</span></a></div><div class="pg-sec"><h2>Ball-by-ball replays</h2></div><div class="hub-grid">${REPLAYS.map((r) => renderTemplate`<a class="hub-card"${addAttribute(`${base}replays/${r.slug}.html`, "href")}><b>${r.title}</b><span>${r.teaser}</span></a>`)}</div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/watch.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/watch.astro";
var $$url = "/sportingbrain/watch.html";
// \0virtual:astro:page:src/pages/watch@_@astro
var page = () => watch_exports;
export { page };
