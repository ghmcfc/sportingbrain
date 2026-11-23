import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
// src/pages/speed-round.astro
var speed_round_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SpeedRound,
	file: () => $$file,
	url: () => $$url
});
var $$SpeedRound = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Speed Round: 60 seconds | SportingBrain",
		"description": "Sixty seconds. As many right answers as you can.",
		"page": "speed"
	})}`;
}, "/home/claude/sportingbrain/source/src/pages/speed-round.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/speed-round.astro";
var $$url = "/sportingbrain/speed-round.html";
// \0virtual:astro:page:src/pages/speed-round@_@astro
var page = () => speed_round_exports;
export { page };
