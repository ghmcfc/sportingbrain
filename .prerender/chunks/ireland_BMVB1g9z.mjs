import { b as addAttribute, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { a as createAstro } from "./Base_BwtY1iqR.mjs";
// src/components/IeBand.astro
createAstro("https://sportingbrain.com");
var $$IeBand = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$IeBand;
	const { current = "" } = Astro.props;
	const base = "/".replace(/\/?$/, "/");
	return renderTemplate`${maybeRenderHead($$result)}<div class="ie ie-band"><div class="ie-knot" aria-hidden="true"></div><nav aria-label="SportingBrain Ireland">${[
		[
			"hub",
			"SportingBrain Ireland",
			"Fáilte",
			"ireland.html"
		],
		[
			"brain",
			"The Irish Brain",
			"Dúshlán an Lae",
			"ireland/brain.html"
		],
		[
			"county",
			"Name the County",
			"Cén Contae?",
			"ireland/county.html"
		],
		[
			"legends",
			"Irish Legends",
			"Cé Mise?",
			"ireland/legends.html"
		],
		[
			"quiz",
			"Pick a Sport",
			"Rogha Spóirt",
			"ireland/quiz.html"
		]
	].map(([k, t, ga, h]) => renderTemplate`<a${addAttribute(base + h, "href")}${addAttribute(k === "hub" ? "ie-home" : void 0, "class")}${addAttribute(current === k ? "page" : void 0, "aria-current")}><small lang="ga">${ga}</small>${t}</a>`)}<a class="ie-uk"${addAttribute(base, "href")}><small>Back to</small>SportingBrain UK</a></nav></div>`;
}, "/home/claude/sportingbrain/source/src/components/IeBand.astro", void 0);
export { $$IeBand as t };
