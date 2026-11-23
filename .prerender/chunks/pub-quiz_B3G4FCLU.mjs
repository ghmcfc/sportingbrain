import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as $$Base } from "./Base_Cqf3cu7R.mjs";
import { t as renderScript } from "./editorial_CA9FmRQi.mjs";
import { n as VENUES, t as venues_default } from "./venues_DA5n52Va.mjs";
// src/pages/pub-quiz.astro
var pub_quiz_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PubQuiz,
	file: () => $$file,
	url: () => $$url
});
var $$PubQuiz = createComponent(($$result, $$props, $$slots) => {
	const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
	const PICS = VENUES.map((v) => [slug(v[0]), v]).filter(([k]) => venues_default[k]).map(([k, v]) => [
		v[1],
		v[4],
		v[5],
		venues_default[k].file,
		venues_default[k].author,
		venues_default[k].licence
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Free pub and club sports quiz, new every week | SportingBrain",
		"description": "Four rounds of ten sports questions with answers, a team answer sheet and host notes. Free to print and run at your pub, club or school. New every Monday.",
		"page": "pubquiz"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head no-print"><h1>Pub and Club Quiz</h1><p>Forty fact-checked questions in four rounds, a picture round of ten grounds to print, a team answer sheet and notes for the host. New every Monday, free to print and run. A credit to SportingBrain is all we ask.</p></header><div class="pg-tabs no-print" role="group" aria-label="Show"><button aria-pressed="true" data-v="host">Host sheet with answers</button><button aria-pressed="false" data-v="teams">Team answer sheet</button><button aria-pressed="false" data-v="pics">Picture round</button><button aria-pressed="false" data-v="notes">Host notes</button><button aria-pressed="false" data-v="play">Play it here</button></div><div class="pg-btns no-print" style="margin:0 0 16px"><button class="btn gold" onclick="window.print()">Print this</button><button class="btn ghost" id="prev">Last week's quiz</button></div><section class="pg-card" id="out"></section><script id="pqPics" type="application/json">${unescapeHTML(JSON.stringify(PICS))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/pub-quiz.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/pub-quiz.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/pub-quiz.astro";
var $$url = "/sportingbrain/pub-quiz.html";
// \0virtual:astro:page:src/pages/pub-quiz@_@astro
var page = () => pub_quiz_exports;
export { page };
