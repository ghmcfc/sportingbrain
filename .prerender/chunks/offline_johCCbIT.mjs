import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
// src/pages/offline.astro
var offline_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Offline,
	file: () => $$file,
	url: () => $$url
});
var $$Offline = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "You're offline | SportingBrain",
		"description": "No connection right now.",
		"page": "offline",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>You're offline</h1><p>No signal right now. Pages you've already opened still work. Today's games will load as soon as you're back online.</p></header><p><a class="btn gold" href="./">Try again</a></p>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/offline.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/offline.astro";
var $$url = "/offline.html";
// \0virtual:astro:page:src/pages/offline@_@astro
var page = () => offline_exports;
export { page };
