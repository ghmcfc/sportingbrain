import { b as addAttribute, c as renderComponent, d as renderSlot, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { n as createAstro, t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
// src/layouts/Kids.astro
createAstro("https://ghmcfc.github.io");
var $$Kids = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Kids;
	const { title, description, band = "", page = "" } = Astro.props;
	const base = "/sportingbrain".replace(/\/?$/, "/");
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": description,
		"page": page,
		"wide": true,
		"noads": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="kz"${addAttribute(band, "data-band")}><nav class="kz-nav" aria-label="Kids Zone"><a${addAttribute(`${base}kids.html`, "href")} class="kz-home"><img${addAttribute(`${base}assets/brain.svg`, "src")} alt="" width="40" height="40">Kids Zone</a><a${addAttribute(`${base}kids/6-8.html`, "href")}>Ages 6 to 8</a><a${addAttribute(`${base}kids/9-12.html`, "href")}>Ages 9 to 12</a><a${addAttribute(`${base}kids/kit.html`, "href")}>Design a kit</a><a${addAttribute(`${base}kids/academy.html`, "href")}>Brain Academy</a><a${addAttribute(`${base}sports-day.html`, "href")}>Sports Day</a><a${addAttribute(`${base}kids/parents.html`, "href")}>For parents</a></nav>${renderSlot($$result, $$slots["default"])}<div class="kz-break" id="kzBreak" hidden role="status"><b>Time for a move break!</b> You've been playing for 20 minutes. Stand up, do ten star jumps, then come back. <button class="btn gold" id="kzBreakOk">Done it</button></div>${renderScript($$result, "/home/claude/sportingbrain/source/src/layouts/Kids.astro?astro&type=script&index=0&lang.ts")}<p class="kz-safe">No ads. No chat. No sign-up. Nothing you type here leaves this device.</p></div>` })}`;
}, "/home/claude/sportingbrain/source/src/layouts/Kids.astro", void 0);
export { $$Kids as t };
