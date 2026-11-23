import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as WEEK } from "./week_D70pcIAI.mjs";
import { t as GUIDES } from "./guides_wX4Wgl8Y.mjs";
// src/pages/this-week.astro
var this_week_exports = /* @__PURE__ */ __exportAll({
	default: () => $$ThisWeek,
	file: () => $$file,
	url: () => $$url
});
var $$ThisWeek = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	const spot = GUIDES.find((g) => g.id === WEEK.spotlight.id);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "This Week in Sport: the stories, the numbers, the arguments | SportingBrain",
		"description": "The week in sport: what happened, the numbers behind the weekend, the talking points, and what to watch next.",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="tw"><header class="tw-head"><p class="fp-kicker">Edition: ${WEEK.edition}</p><h1>This Week in Sport</h1><nav class="sg-tabs" aria-label="Sections"><a href="#stories">The stories</a><a href="#numbers">The numbers</a><a href="#talking">Talking points</a><a href="#watch">What to watch</a><a href="#spotlight">Spotlight</a></nav></header><div class="sec" id="stories"><h2>The stories that mattered</h2></div><div class="tw-stories">${WEEK.stories.map((s, i) => renderTemplate`<article${addAttribute(i === 0 ? "tw-lead" : "tw-item", "class")}><p class="fp-kicker">${s.sport}</p><h3>${s.title}</h3><p>${s.body}</p><p class="small">Source: <a${addAttribute(s.src[1], "href")} target="_blank" rel="noopener">${s.src[0]}</a></p></article>`)}</div><div class="sec" id="numbers"><h2>The numbers behind the weekend</h2></div><div class="tw-nums">${WEEK.numbers.map((n) => renderTemplate`<div><b>${n[0]}</b><p>${n[1]}</p></div>`)}</div><div class="sec" id="talking"><h2>Talking points</h2></div><p class="teaser">Have your say. Your vote is kept on this device.</p><div class="tw-polls">${WEEK.talking.map((t) => renderTemplate`<div class="tw-poll"${addAttribute(t.id, "data-poll")}><h3>${t.q}</h3><p class="small">${t.why}</p><div class="tw-opts">${t.opts.map((o, k) => renderTemplate`<button${addAttribute(k, "data-k")}>${o}</button>`)}</div><p class="tw-done small" hidden></p></div>`)}</div><div class="sec" id="watch"><h2>What to watch</h2></div><ol class="tw-watch">${WEEK.watch.map((w) => renderTemplate`<li><span class="tw-when">${w.when}</span><div><p class="fp-kicker">${w.sport}</p><b>${w.what}</b><p>${w.why}</p></div></li>`)}</ol><div class="sec" id="spotlight"><h2>Sport spotlight: ${spot.name}</h2><a${addAttribute(`${base}sports/${spot.id}.html`, "href")}>Read the guide</a></div><p class="teaser">${WEEK.spotlight.why}</p><ol class="sg-watch">${spot.watch.map((w) => renderTemplate`<li>${w}</li>`)}</ol><section class="fb-src"><b>Sources</b><ul>${[
		...WEEK.stories.map((s) => s.src),
		...WEEK.numbersSrc,
		...WEEK.watchSrc
	].map((s) => renderTemplate`<li><a${addAttribute(s[1], "href")} target="_blank" rel="noopener">${s[0]}</a></li>`)}</ul></section></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/this-week.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/this-week.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/this-week.astro";
var $$url = "/sportingbrain/this-week.html";
// \0virtual:astro:page:src/pages/this-week@_@astro
var page = () => this_week_exports;
export { page };
