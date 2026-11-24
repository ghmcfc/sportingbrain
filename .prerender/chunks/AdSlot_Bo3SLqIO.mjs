import { b as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { r as createAstro } from "./Base_HiHdV6xW.mjs";
import { t as ads_default } from "./ads_T340unvE.mjs";
// src/components/AdSlot.astro
createAstro("https://sportingbrain.com");
var $$AdSlot = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AdSlot;
	const { name } = Astro.props;
	const slot = ads_default.slots[name], h = ads_default.heights[name];
	return renderTemplate`${ads_default.client && slot && renderTemplate`${maybeRenderHead($$result)}<aside class="ad-slot"${addAttribute(`min-height:${h}px`, "style")} aria-label="Advertisement"><span class="ad-label">Advertisement</span><ins class="adsbygoogle" style="display:block"${addAttribute(ads_default.client, "data-ad-client")}${addAttribute(slot, "data-ad-slot")} data-ad-format="auto" data-full-width-responsive="true"></ins></aside>`}`;
}, "/home/claude/sportingbrain/source/src/components/AdSlot.astro", void 0);
export { $$AdSlot as t };
