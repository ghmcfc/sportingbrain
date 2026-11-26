import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { g as renderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
// src/pages/embed.astro
var embed_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Embed,
	file: () => $$file,
	url: () => $$url
});
var $$Embed = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>SportingBrain question of the day</title>${renderHead($$result)}</head><body style="background:transparent;margin:0"><div class="pg-card" style="margin:0" id="w" aria-live="polite"></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/embed.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/claude/sportingbrain/source/src/pages/embed.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/embed.astro";
var $$url = "/embed.html";
// \0virtual:astro:page:src/pages/embed@_@astro
var page = () => embed_exports;
export { page };
