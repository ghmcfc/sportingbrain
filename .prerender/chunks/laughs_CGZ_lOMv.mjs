import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { C as unescapeHTML, b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
var videos_default = { videos: [] };
var video_config_default = {
	playlist: "",
	channel: ""
};
// src/pages/laughs.astro
var laughs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Laughs,
	file: () => $$file,
	url: () => $$url
});
var $$Laughs = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Laugh of the Day: the funniest moments in sport | SportingBrain",
		"description": "One hand-picked funny sports clip every day, chosen by a person, not an algorithm. Family-safe, and new at midnight.",
		"page": "laughs"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Laugh of the Day</h1><p>One funny moment from sport every day, hand-picked by a person, not an algorithm, and always family-safe. New at midnight.</p></header><section id="lotd"></section><div class="pg-sec"><h2>This week's laughs</h2></div><div class="lotd-grid" id="lotdWeek"></div>${video_config_default.channel && renderTemplate`<p><a class="btn ghost"${addAttribute(video_config_default.channel, "href")} target="_blank" rel="noopener">Subscribe on YouTube</a></p>`}<p class="pg-note">Clips play in YouTube's privacy-enhanced player and belong to their owners. Spotted something that shouldn't be here? Use "Spotted a mistake?" at the foot of the page.</p><script id="vids" type="application/json">${unescapeHTML(JSON.stringify(videos_default.videos))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/laughs.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/laughs.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/laughs.astro";
var $$url = "/laughs.html";
// \0virtual:astro:page:src/pages/laughs@_@astro
var page = () => laughs_exports;
export { page };
