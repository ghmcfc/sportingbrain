import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as D } from "./content_Dic6TXw9.mjs";
// src/pages/round-up.astro
var round_up_exports = /* @__PURE__ */ __exportAll({
	default: () => $$RoundUp,
	file: () => $$file,
	url: () => $$url
});
var $$RoundUp = createComponent(($$result, $$props, $$slots) => {
	const r = D.SB_ROUNDUP;
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": `The Cynical Round-Up: ${r.headline} | SportingBrain`,
		"description": "Satire. This week's real sports news, with a big eye-roll.",
		"type": "article",
		"wide": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<article class="ru"><header class="ru-head"><span class="satire">SATIRE. Tongue firmly in cheek.</span><p class="ru-kicker">The Cynical Round-Up · ${r.edition}</p><h1>${r.headline}</h1><p class="ru-small">${r.updated} The facts are real and sourced below. The sarcasm is ours.</p></header><div class="ru-items">${r.items.map((i, k) => renderTemplate`<section class="ru-item"><span class="ru-n">${String(k + 1).padStart(2, "0")}</span><div><h2>${i[0]}</h2><p>${i[1]}</p><div class="ru-rate"${addAttribute(k, "data-k")}><span>Funny?</span><button data-v="1">Yes</button><button data-v="0">Not really</button><small></small></div></div></section>`)}</div><div class="brain-says ru-brain"><img${addAttribute(`${base}assets/brain.svg`, "src")} alt=""><div><b>The Brain's eye-roll of the week</b><p>${r.brain}</p></div></div><button class="btn gold"${addAttribute(`The Cynical Round-Up (satire): ${r.headline}`, "data-share-text")}>Share the Round-Up</button>${r.sources && renderTemplate`<section class="fb-src"><b>The real stories behind it</b><ul>${r.sources.map((s) => renderTemplate`<li><a${addAttribute(s[1], "href")} target="_blank" rel="noopener">${s[0]}</a></li>`)}</ul></section>`}</article>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/round-up.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/round-up.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/round-up.astro";
var $$url = "/round-up.html";
// \0virtual:astro:page:src/pages/round-up@_@astro
var page = () => round_up_exports;
export { page };
