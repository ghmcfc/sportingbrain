import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Kids } from "./Kids_a_rXGl2M.mjs";
// src/pages/kids/the-grid.astro
var the_grid_exports = /* @__PURE__ */ __exportAll({
	default: () => $$TheGrid,
	file: () => $$file,
	url: () => $$url
});
var $$TheGrid = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "The Grid | SportingBrain Kids Zone",
		"description": "Find four groups of four sporting words.",
		"page": "grid",
		"band": "older"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>The Grid</h1><p>Sixteen sporting words. Find the four groups of four.</p></div></section><div id="game-root"></div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/the-grid.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/the-grid.astro";
var $$url = "/kids/the-grid.html";
// \0virtual:astro:page:src/pages/kids/the-grid@_@astro
var page = () => the_grid_exports;
export { page };
