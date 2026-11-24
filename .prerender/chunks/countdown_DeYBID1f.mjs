import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as COUNTDOWN } from "./games_C3d5Ac21.mjs";
// src/pages/countdown.astro
var countdown_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Countdown,
	file: () => $$file,
	url: () => $$url
});
var $$Countdown = createComponent(($$result, $$props, $$slots) => {
	const fmt = (iso) => new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: "long",
		year: "numeric",
		timeZone: "Europe/London"
	});
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Countdown Clock: the big sporting events coming up | SportingBrain",
		"description": "Live countdowns to the next big events in sport: the UK Championship, the Darts, the Six Nations, the Masters, the Women's World Cup, the Rugby and Cricket World Cups. With a quick quiz for each.",
		"page": "countdown"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Countdown Clock</h1><p>The next big events, ticking down to the start. Each one has a three-question warm-up quiz. Dates are confirmed by the organisers; start times are approximate and shown in UK time.</p></header><div class="cd-list">${COUNTDOWN.map((e, k) => renderTemplate`<article class="cd-item"${addAttribute(e[0], "data-t")}${addAttribute(e[2], "data-sport")}${addAttribute(`ev${k}`, "id")}><div><p class="pg-step">${e[2]} · ${fmt(e[0])}</p><h3>${e[1]}</h3><p>${e[3]}. <a${addAttribute(e[4], "href")} rel="noopener" target="_blank">Source</a></p></div><div class="cd-clock" aria-live="off"><span data-c>–</span><small>days, hours, minutes</small></div><div class="pg-btns"><button class="btn ghost" data-quiz>Warm-up quiz</button></div><div class="cd-quiz" hidden></div></article>`)}</div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/countdown.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/countdown.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/countdown.astro";
var $$url = "/countdown.html";
// \0virtual:astro:page:src/pages/countdown@_@astro
var page = () => countdown_exports;
export { page };
