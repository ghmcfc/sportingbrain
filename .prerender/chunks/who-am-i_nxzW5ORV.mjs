import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as $$AdSlot } from "./AdSlot_YzCgxnYl.mjs";
// src/pages/who-am-i.astro
var who_am_i_exports = /* @__PURE__ */ __exportAll({
	default: () => $$WhoAmI,
	file: () => $$file,
	url: () => $$url
});
var $$WhoAmI = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Who Am I? Name the sporting great in five clues | SportingBrain",
		"description": "Five clues, hardest first. Name the sporting great in as few as you can. Men and women, every sport. New every day.",
		"page": "whoami"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Who Am I?</h1><p>Five clues, hardest first. Guess after any clue: the fewer you need, the more points you get. One wrong guess costs you a clue. New every day.</p></header><div id="vs"></div><section class="pg-card" id="wa" aria-live="polite"></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/who-am-i.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/who-am-i.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/who-am-i.astro";
var $$url = "/sportingbrain/who-am-i.html";
// \0virtual:astro:page:src/pages/who-am-i@_@astro
var page = () => who_am_i_exports;
export { page };
