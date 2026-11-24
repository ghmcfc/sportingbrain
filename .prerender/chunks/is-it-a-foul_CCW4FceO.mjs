import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
// src/pages/is-it-a-foul.astro
var is_it_a_foul_exports = /* @__PURE__ */ __exportAll({
	default: () => $$IsItAFoul,
	file: () => $$file,
	url: () => $$url
});
var $$IsItAFoul = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Is It a Foul? The sports rules quiz | SportingBrain",
		"description": "Real rules scenarios from football, cricket, rugby, tennis, snooker, golf, netball and hockey. Fair or foul? Test your knowledge of the laws.",
		"page": "foul"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Is It a Foul?</h1><p>Eighteen situations from eight sports. Ten per game, all under the current laws. Make the call, then read the ruling.</p></header><div id="vs"></div><section class="pg-card" id="game" aria-live="polite"></section><p class="pg-note">Rulings follow the current laws of each game: IFAB for football, the MCC Laws of Cricket, World Rugby, the ITF, World Snooker, the R&amp;A, World Netball and FIH.</p>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/is-it-a-foul.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/is-it-a-foul.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/is-it-a-foul.astro";
var $$url = "/is-it-a-foul.html";
// \0virtual:astro:page:src/pages/is-it-a-foul@_@astro
var page = () => is_it_a_foul_exports;
export { page };
