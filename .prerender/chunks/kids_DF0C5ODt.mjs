import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Kids$1 } from "./Kids_D9Q6L2Ma.mjs";
// src/pages/kids.astro
var kids_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kids,
	file: () => $$file,
	url: () => $$url
});
var $$Kids = createComponent(($$result, $$props, $$slots) => {
	const base = "/sportingbrain".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids$1, {
		"title": "Kids Zone | SportingBrain",
		"description": "Sport quizzes, amazing facts and games to play at home, for ages 6 to 8 and 9 to 12. No ads, no chat, no sign-up."
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero"><img${addAttribute(`${base}assets/brain.svg`, "src")} alt="The Brain, SportingBrain's mascot" width="160" height="160"><div><h1>Welcome to the Kids Zone</h1><p>Quizzes, amazing sport facts and challenges to try at home. Pick your age to start.</p></div></section><div class="kz-pick"><a class="kz-band young"${addAttribute(`${base}kids/6-8.html`, "href")}><b>Little Legends</b><span>Ages 6 to 8</span><small>Picture-friendly questions, fun facts and games to play with a grown-up.</small></a><a class="kz-band older"${addAttribute(`${base}kids/9-12.html`, "href")}><b>Junior Brain</b><span>Ages 9 to 12</span><small>Proper sport questions, record breakers and challenges. Earn your certificate.</small></a></div><h2 class="kz-h">Games</h2><div class="kz-pick kz-games"><a class="kz-band older"${addAttribute(`${base}kids/true-or-false.html`, "href")}><b>True or False</b><small>Ten sporting facts. Spot the fibs.</small></a><a class="kz-band young"${addAttribute(`${base}kids/guess-the-sport.html`, "href")}><b>Guess the Sport</b><small>Three emoji, one sport.</small></a><a class="kz-band older"${addAttribute(`${base}kids/guess-the-player.html`, "href")}><b>Guess the Player</b><small>Name the star from three clues.</small></a><a class="kz-band young"${addAttribute(`${base}kids/the-grid.html`, "href")}><b>The Grid</b><small>Find four groups of four.</small></a><a class="kz-band older"${addAttribute(`${base}kids/which-sport.html`, "href")}><b>Which Sport Are You?</b><small>Six questions. Find your sport.</small></a></div><p class="kz-parent">Grown-ups: <a${addAttribute(`${base}kids/parents.html`, "href")}>read how the Kids Zone keeps children safe</a>.</p>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids.astro";
var $$url = "/sportingbrain/kids.html";
// \0virtual:astro:page:src/pages/kids@_@astro
var page = () => kids_exports;
export { page };
