import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
// src/pages/stat-attack.astro
var stat_attack_exports = /* @__PURE__ */ __exportAll({
	default: () => $$StatAttack,
	file: () => $$file,
	url: () => $$url
});
var $$StatAttack = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Stat Attack: sports top trumps against the Brain | SportingBrain",
		"description": "Top trumps with Grand Slam tennis legends, men and women. Pick your best stat and take the Brain's cards.",
		"page": "statattack"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Stat Attack</h1><p>Top trumps with fourteen Grand Slam singles legends, seven women and seven men. Pick a stat from your top card. Higher number wins both cards. Win the round, choose again. Most cards after fifteen rounds wins.</p></header><div id="vs"></div><p class="pg-step" id="status" aria-live="polite"></p><div class="sa-table"><div class="sa-card" id="mine"></div><div class="sa-card brain" id="theirs"></div></div><div class="pg-btns" id="ctl"></div><p class="pg-note">Grand Slam singles titles: Australian, French, Wimbledon and US Opens, including the amateur era. Margaret Court's total includes thirteen won before the Open era began in 1968.</p>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/stat-attack.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/stat-attack.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/stat-attack.astro";
var $$url = "/stat-attack.html";
// \0virtual:astro:page:src/pages/stat-attack@_@astro
var page = () => stat_attack_exports;
export { page };
