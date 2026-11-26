import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Kids } from "./Kids_a_rXGl2M.mjs";
// src/pages/kids/guess-the-sport.astro
var guess_the_sport_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuessTheSport,
	file: () => $$file,
	url: () => $$url
});
var $$GuessTheSport = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Guess the Sport | SportingBrain Kids Zone",
		"description": "Three emoji clues. Name the sport.",
		"page": "emoji",
		"band": "older"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>Guess the Sport</h1><p>Three emoji. One sport. Can you name all eight?</p></div></section><div id="game-root"></div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/guess-the-sport.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/guess-the-sport.astro";
var $$url = "/kids/guess-the-sport.html";
// \0virtual:astro:page:src/pages/kids/guess-the-sport@_@astro
var page = () => guess_the_sport_exports;
export { page };
