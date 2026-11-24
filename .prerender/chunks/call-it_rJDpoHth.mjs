import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_HiHdV6xW.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as buildMoments } from "./callit_DuJvZDio.mjs";
// src/pages/call-it.astro
var call_it_exports = /* @__PURE__ */ __exportAll({
	default: () => $$CallIt,
	file: () => $$file,
	url: () => $$url
});
var $$CallIt = createComponent(($$result, $$props, $$slots) => {
	const moments = buildMoments();
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Call It: the daily sports prediction game built on real matches | SportingBrain",
		"description": "We freeze a real moment from a real final. You call what happens next. Then the replay shows you. One a day.",
		"page": "callit",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="ci"><div class="ci-head"><span class="tag" style="background:var(--gold);color:#14254a">Call It #<span id="ciNum"></span></span><h1>We freeze a real match. You call what happens next.</h1><p class="teaser">A real moment from a real final, stopped mid-match. Make your calls, then watch it play out ball by ball. No spoilers until it's bowled. Even if you saw it live, you won't remember this.</p></div><div class="ci-grid"><div class="card ci-board" id="ciBoard"></div><div class="card ci-calls" id="ciCalls"></div></div><div class="card ci-play" id="ciPlay" hidden aria-live="polite"></div><div class="card ci-result" id="ciResult" hidden></div><p class="small">Matches rebuilt from Cricsheet ball-by-ball data (Open Data Commons Attribution License). A new Call It every day at midnight UK time. Want more? <a${addAttribute(`${base}call-it.html?practice=1`, "href")}>Practice mode</a>.</p></section><script id="ciData" type="application/json">${unescapeHTML(JSON.stringify(moments))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/call-it.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/call-it.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/call-it.astro";
var $$url = "/call-it.html";
// \0virtual:astro:page:src/pages/call-it@_@astro
var page = () => call_it_exports;
export { page };
