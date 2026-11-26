import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
// src/pages/advent.astro
var advent_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Advent,
	file: () => $$file,
	url: () => $$url
});
var $$Advent = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Sporting Advent Calendar | SportingBrain",
		"description": "A door a day from 1 to 25 December. Each one has a sporting moment from that date in history and a question to go with it.",
		"page": "advent"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Sporting Advent Calendar</h1><p>Twenty-five doors, one a day from 1 December. Behind each is a moment from that date in sporting history and a question to go with it. Doors open at midnight UK time.</p></header><p class="pg-step" id="st" aria-live="polite"></p><div class="adv" id="doors"></div><section class="pg-card" id="door" hidden aria-live="polite" style="margin-top:18px"></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/advent.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/advent.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/advent.astro";
var $$url = "/advent.html";
// \0virtual:astro:page:src/pages/advent@_@astro
var page = () => advent_exports;
export { page };
