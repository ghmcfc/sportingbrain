import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
// src/pages/weekly-expert.astro
var weekly_expert_exports = /* @__PURE__ */ __exportAll({
	default: () => $$WeeklyExpert,
	file: () => $$file,
	url: () => $$url
});
var $$WeeklyExpert = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Weekly Expert: ten hard sports questions every Monday | SportingBrain",
		"description": "Ten expert-level sports questions, new every Monday. For people who win pub quizzes. Challenge a mate with a link.",
		"page": "expert"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Weekly Expert</h1><p>Ten of the hardest questions in the bank, one go a week, new every Monday. Type the answer for 2 points, or ask for the options and get 1. Fourteen out of 20 is good. Twenty is very rare.</p></header><div id="vs"></div><section class="pg-card" id="game" aria-live="polite"></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/weekly-expert.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/weekly-expert.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/weekly-expert.astro";
var $$url = "/sportingbrain/weekly-expert.html";
// \0virtual:astro:page:src/pages/weekly-expert@_@astro
var page = () => weekly_expert_exports;
export { page };
