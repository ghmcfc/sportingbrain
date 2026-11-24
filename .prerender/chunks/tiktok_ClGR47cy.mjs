import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
// src/pages/tiktok.astro
var tiktok_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Tiktok,
	file: () => $$file,
	url: () => $$url
});
var $$Tiktok = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Welcome from TikTok | SportingBrain",
		"description": "You've watched the quiz. Now play today's five hard sports questions, free. No sign-up, no betting.",
		"page": "tiktok",
		"noindex": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="tt-hero"><p class="gg-kicker">Hello from TikTok</p><h1>You've watched the quiz. Now beat the Brain.</h1><p class="tt-stand">Five hard sports questions, new every day. The Brain has already set a score. Free, no sign-up, no app to download.</p><a class="tt-go"${addAttribute(`${base}daily.html`, "href")}>Start my five questions</a><p class="tt-note">Takes about two minutes. Then come back to TikTok and comment your score.</p></section><section class="tt-more" aria-labelledby="tt-more-h"><h2 id="tt-more-h">If you like that, try these</h2><div class="tt-grid"><a${addAttribute(`${base}call-it.html`, "href")}><b>Call It</b><span>A real cricket final, frozen. Call what happens next.</span></a><a${addAttribute(`${base}sports-grid.html`, "href")}><b>Sports Grid</b><span>Fill the grid with players who fit both clues.</span></a><a${addAttribute(`${base}connections.html`, "href")}><b>Connections</b><span>Sixteen sporting names, four hidden groups.</span></a><a${addAttribute(`${base}ground-guesser.html`, "href")}><b>Ground Guesser</b><span>Name the stadium from a close-up.</span></a></div></section>` })}`;
}, "/home/claude/sportingbrain/source/src/pages/tiktok.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/tiktok.astro";
var $$url = "/tiktok.html";
// \0virtual:astro:page:src/pages/tiktok@_@astro
var page = () => tiktok_exports;
export { page };
