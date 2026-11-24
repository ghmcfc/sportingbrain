import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$Kids } from "./Kids_z8uMn17N.mjs";
import { t as KIDS } from "./kids_CZXCgZbO.mjs";
// src/pages/kids/6-8.astro
var _6_8_exports = /* @__PURE__ */ __exportAll({
	default: () => $$68,
	file: () => $$file,
	url: () => $$url
});
var $$68 = createComponent(($$result, $$props, $$slots) => {
	const K = KIDS.young;
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Little Legends: sport quiz and games for ages 6 to 8 | SportingBrain",
		"description": "Five sport questions a day, amazing facts and challenges to try at home. No ads, no chat, no sign-up.",
		"band": "young"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>${K.name}</h1><p>Ages ${K.ages}. Five new questions every day.</p></div></section><section class="kz-card" id="kzQuiz" aria-live="polite"></section><section class="kz-cert kz-card" id="kzCert" hidden><h2>Print your certificate</h2><label>Your first name <input id="kzName" maxlength="20" autocomplete="off"></label><div class="cert" id="cert"><div class="cert-in"><img src="../assets/brain.svg" alt="" width="70"><p class="cert-k">SportingBrain ${K.name}</p><p class="cert-t">Certificate of Sporting Brilliance</p><p class="cert-n" id="certName">Your name</p><p class="cert-s" id="certScore"></p><p class="cert-d" id="certDate"></p></div></div><button class="btn gold" onclick="window.print()">Print it</button><p class="small">Your name stays on this device. We never see it.</p></section><h2 class="kz-h">Amazing facts</h2><div class="kz-facts">${K.facts.map((f) => renderTemplate`<div class="kz-card">${f}</div>`)}</div><h2 class="kz-h">Try this at home</h2><div class="kz-try">${K.tryThis.map((t) => renderTemplate`<div class="kz-card"><b>${t[0]}</b><p>${t[1]}</p></div>`)}</div><script id="kzData" type="application/json">${unescapeHTML(JSON.stringify(K.qs))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/kids/6-8.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/6-8.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/6-8.astro";
var $$url = "/kids/6-8.html";
// \0virtual:astro:page:src/pages/kids/6-8@_@astro
var page = () => _6_8_exports;
export { page };
