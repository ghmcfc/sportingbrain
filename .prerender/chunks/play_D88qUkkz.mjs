import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { n as GROUPS, r as PLAY, t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as icon } from "./icons_Bj3ITv0j.mjs";
// src/pages/play.astro
var play_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Play,
	file: () => $$file,
	url: () => $$url
});
var $$Play = createComponent(($$result, $$props, $$slots) => {
	const base = "/".endsWith("/") ? "/" : "//";
	const href = (s) => s === "challenge" ? `${base}challenge.html?c=family` : `${base}${s}.html`;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Play: every SportingBrain game, quiz and puzzle | SportingBrain",
		"description": "Call It, Beat the Brain, the Pub and Club Quiz, Stat Attack, Is It a Foul?, Matchday Bingo, Legends XI and more. Free, no betting, no sign-up.",
		"page": "play",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Play</h1><p>${PLAY.length} games, quizzes and puzzles. All free, all built on real sport, men's and women's. Nothing to sign up for and no betting, ever.</p></header>${GROUPS.map(([g, label]) => renderTemplate`<section class="blk"><header class="sh"><h2>${label}</h2></header><div class="gtiles">${PLAY.filter((p) => p[3] === g).map((p) => renderTemplate`<a class="gt"${addAttribute(href(p[0]), "href")}${addAttribute(`--c:${p[4]}`, "style")}${addAttribute(p[0], "data-slug")}><span class="gt-ic">${unescapeHTML(icon(p[0], 44))}</span><span class="gt-tx"><b>${p[1]}</b><small>${p[2]}</small><small data-st></small></span></a>`)}</div></section>`)}<section class="blk"><header class="sh"><h2>For children</h2></header><div class="gtiles"><a class="gt"${addAttribute(`${base}kids.html`, "href")} style="--c:#0B6E4F"><span class="gt-ic">${unescapeHTML(icon("kids", 44))}</span><span class="gt-tx"><b>Kids Zone</b><small>Quizzes and games for ages 6 to 12. No ads, no chat, no sign-up.</small></span></a></div></section><section class="pg-card"><h2>Put a SportingBrain puzzle on your site</h2><p>Clubs, schools and blogs can embed today's question for free. Copy this and paste it into your page.</p><pre class="pg-code" id="embedCode"></pre><button class="btn ghost" id="copyEmbed">Copy the code</button></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/play.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/play.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/play.astro";
var $$url = "/play.html";
// \0virtual:astro:page:src/pages/play@_@astro
var page = () => play_exports;
export { page };
