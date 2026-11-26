import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as $$IeBand } from "./ireland_BMVB1g9z.mjs";
import { i as IE_GROUPS, n as IE_BANK } from "./ireland_BYHEycyv.mjs";
// src/pages/ireland/quiz.astro
var quiz_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Quiz,
	file: () => $$file,
	url: () => $$url
});
var $$Quiz = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const count = (g) => IE_BANK.filter((q) => g[3].includes(q[1])).length;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"image": "https://sportingbrain.com/og-ireland.png",
		"title": "Pick a Sport: Irish sports quizzes | SportingBrain",
		"description": "Ten-question quizzes on Irish sport, one sport at a time: GAA, rugby, soccer, racing, boxing, Olympic sports, golf and more. Play as often as you like.",
		"page": "iequiz"
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "IeBand", $$IeBand, { "current": "quiz" })}${maybeRenderHead($$result)}<div class="ie"><header class="ie-head"><p class="ga" lang="ga">Rogha Spóirt</p><h1>Pick a Sport</h1><p>Ten questions on the sport you know best. Hard and Expert questions mixed, a fresh set every time you play. No limit, no waiting for tomorrow.</p></header><div id="vs"></div><div class="ie-groups" id="groups">${IE_GROUPS.map((g) => renderTemplate`<a${addAttribute(`${base}ireland/quiz.html?s=${g[0]}`, "href")}><b>${g[1]}</b><span>${g[2]}</span><small>${count(g)} questions</small></a>`)}</div><section class="pg-card ie-game" id="iq" aria-live="polite" hidden></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}</div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/ireland/quiz.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/ireland/quiz.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/ireland/quiz.astro";
var $$url = "/ireland/quiz.html";
// \0virtual:astro:page:src/pages/ireland/quiz@_@astro
var page = () => quiz_exports;
export { page };
