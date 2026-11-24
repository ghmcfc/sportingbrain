import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
// src/pages/bingo.astro
var bingo_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Bingo,
	file: () => $$file,
	url: () => $$url
});
var $$Bingo = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Matchday Bingo: a bingo card for the next football match you watch | SportingBrain",
		"description": "A free bingo card for watching football at home or at the ground. Tap squares as they happen, or print cards for everyone.",
		"page": "bingo"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head no-print"><h1>Matchday Bingo</h1><p>Twenty-four things that happen in most matches, and a few that don't. Tap a square when it happens. First to a line shouts. Each card is different, so give everyone their own.</p></header><div class="pg-btns no-print" style="margin:0 0 14px"><button class="btn" id="newc">New card</button><button class="btn ghost" onclick="window.print()">Print this card</button><button class="btn ghost" id="clear">Clear marks</button></div><p class="pg-step" id="st" aria-live="polite"></p><div class="bingo" id="card" role="group" aria-label="Bingo card"></div><p class="pg-note">Card number <span id="cno"></span>. Your marks stay on this device.</p>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/bingo.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/bingo.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/bingo.astro";
var $$url = "/bingo.html";
// \0virtual:astro:page:src/pages/bingo@_@astro
var page = () => bingo_exports;
export { page };
