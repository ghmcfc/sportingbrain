import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
// src/pages/archive.astro
var archive_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Archive,
	file: () => $$file,
	url: () => $$url
});
var $$Archive = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Beat the Brain puzzle archive | SportingBrain",
		"description": "Every Beat the Brain puzzle since launch. Missed a day? Play it here. Archive games don't affect your streak.",
		"page": "archive"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Puzzle archive</h1><p>Every Beat the Brain since launch. Archive games don't count towards your streak, so play as many as you like.</p></header><div class="pg-hub" id="list"></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/archive.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/archive.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/archive.astro";
var $$url = "/archive.html";
// \0virtual:astro:page:src/pages/archive@_@astro
var page = () => archive_exports;
export { page };
