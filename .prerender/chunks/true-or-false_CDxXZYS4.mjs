import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Kids } from "./Kids_D9Q6L2Ma.mjs";
// src/pages/kids/true-or-false.astro
var true_or_false_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TrueOrFalse,
	file: () => $$file,
	url: () => $$url
});
var $$TrueOrFalse = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "True or False | SportingBrain Kids Zone",
		"description": "Sporting facts and fibs for ages 9 to 12.",
		"page": "tf",
		"band": "older"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>True or False</h1><p>Ten sporting facts. Some are true, some are fibs.</p></div></section><div id="game-root"></div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/true-or-false.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/true-or-false.astro";
var $$url = "/sportingbrain/kids/true-or-false.html";
// \0virtual:astro:page:src/pages/kids/true-or-false@_@astro
var page = () => true_or_false_exports;
export { page };
