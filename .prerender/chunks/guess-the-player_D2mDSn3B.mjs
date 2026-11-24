import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Kids } from "./Kids_z8uMn17N.mjs";
// src/pages/kids/guess-the-player.astro
var guess_the_player_exports = /* @__PURE__ */ __exportAll({
	default: () => $$GuessThePlayer,
	file: () => $$file,
	url: () => $$url
});
var $$GuessThePlayer = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Guess the Player | SportingBrain Kids Zone",
		"description": "Three clues. Name the sporting star.",
		"page": "gtp",
		"band": "older"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>Guess the Player</h1><p>The fewer clues you need, the more points you get.</p></div></section><div id="game-root"></div>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/guess-the-player.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/guess-the-player.astro";
var $$url = "/kids/guess-the-player.html";
// \0virtual:astro:page:src/pages/kids/guess-the-player@_@astro
var page = () => guess_the_player_exports;
export { page };
