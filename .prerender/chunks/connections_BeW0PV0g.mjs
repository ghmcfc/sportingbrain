import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { t as $$AdSlot } from "./AdSlot_YzCgxnYl.mjs";
// src/pages/connections.astro
var connections_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Connections,
	file: () => $$file,
	url: () => $$url
});
var $$Connections = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Connections: Sport. Find the four hidden groups | SportingBrain",
		"description": "Sixteen sporting names, four hidden groups of four. One puzzle a day. Four mistakes and you're out.",
		"page": "connections"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Connections: Sport</h1><p>Sixteen names hide four groups of four. Pick four you think belong together and press Submit. Watch for red herrings. Four mistakes and it's over. A new puzzle every day.</p></header><div id="vs"></div><section id="cx" aria-live="polite"></section><div class="pg-btns"><button class="btn ghost" id="cxShuffle">Shuffle</button><button class="btn ghost" id="cxClear">Deselect all</button><button class="btn gold" id="cxGo" disabled>Submit</button></div><p class="pg-note" id="cxMsg" aria-live="assertive"></p><div id="cxEnd"></div>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/connections.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/connections.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/connections.astro";
var $$url = "/sportingbrain/connections.html";
// \0virtual:astro:page:src/pages/connections@_@astro
var page = () => connections_exports;
export { page };
