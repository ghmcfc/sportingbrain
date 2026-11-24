import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$Kids } from "./Kids_z8uMn17N.mjs";
// src/pages/kids/kit.astro
var kit_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kit,
	file: () => $$file,
	url: () => $$url
});
var $$Kit = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Design your own football kit | SportingBrain Kids Zone",
		"description": "Pick colours, stripes or hoops and a number, then print your own kit. Saved on your device only.",
		"band": "kit"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>Design your own kit</h1><p>Choose your colours and pattern, add a number, then print it out.</p></div></section><section class="kz-card kit-wrap"><svg viewBox="0 0 200 210" role="img" aria-label="Your kit" id="kit"><defs><clipPath id="body"><path d="M60 20 L80 10 Q100 24 120 10 L140 20 L190 50 L172 88 L152 78 L152 200 L48 200 L48 78 L28 88 L10 50 Z"></path></clipPath></defs><g clip-path="url(#body)"><rect x="0" y="0" width="200" height="210" id="base"></rect><g id="pat"></g><path d="M10 50 L60 20 L48 78 L28 88 Z" id="sl1"></path><path d="M190 50 L140 20 L152 78 L172 88 Z" id="sl2"></path></g><path d="M60 20 L80 10 Q100 24 120 10 L140 20 L190 50 L172 88 L152 78 L152 200 L48 200 L48 78 L28 88 L10 50 Z" fill="none" stroke="#0F1E36" stroke-width="3"></path><text x="100" y="140" text-anchor="middle" font-family="Big Shoulders Display, sans-serif" font-weight="800" font-size="64" id="num">10</text></svg><form class="pg-form" id="kf" style="grid-template-columns:1fr 1fr"><label>Main colour <input type="color" name="a" value="#0B6E4F"></label><label>Second colour <input type="color" name="b" value="#FFFFFF"></label><label>Sleeves <input type="color" name="c" value="#0F1E36"></label><label>Number colour <input type="color" name="n" value="#FFFFFF"></label><label>Pattern <select name="p"><option value="plain">Plain</option><option value="stripes">Stripes</option><option value="hoops">Hoops</option><option value="halves">Halves</option><option value="sash">Sash</option></select></label><label>Number <input name="no" type="number" min="1" max="99" value="10"></label><div class="pg-btns" style="grid-column:1/-1"><button type="button" class="btn gold" onclick="window.print()">Print my kit</button><button type="button" class="btn ghost" id="rnd">Surprise me</button></div></form></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/kids/kit.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/kit.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/kit.astro";
var $$url = "/kids/kit.html";
// \0virtual:astro:page:src/pages/kids/kit@_@astro
var page = () => kit_exports;
export { page };
