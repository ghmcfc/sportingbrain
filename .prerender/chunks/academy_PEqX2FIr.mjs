import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$Kids } from "./Kids_z8uMn17N.mjs";
// src/pages/kids/academy.astro
var academy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Academy,
	file: () => $$file,
	url: () => $$url
});
var $$Academy = createComponent(($$result, $$props, $$slots) => {
	const base = "/".replace(/\/?$/, "/");
	const L = [
		[
			"Football: what is offside?",
			"You are offside if, when a teammate passes the ball to you, you are in the other team's half and nearer to their goal line than both the ball and the second-last defender (the goalkeeper usually counts as one). Being level is fine. You can't be offside from a throw-in, a goal kick or a corner.",
			"Can you be offside from a corner?",
			["No", "Yes"],
			0
		],
		[
			"Tennis: why do they say \"love\" and \"15\"?",
			"Points in a game go love (zero), 15, 30, 40, then game. If it's 40-40, that's deuce, and you need to win two points in a row. Win six games (by two clear) to take a set.",
			"What is the score called when it's 40-40?",
			["Deuce", "Love"],
			0
		],
		[
			"Rugby union: how do you score?",
			"A try is worth 5 points: you put the ball down over the other team's try line. Then you can kick a conversion for 2 more. A penalty kick or a drop goal is worth 3.",
			"How many points is a try worth?",
			["5", "3"],
			0
		],
		[
			"Cricket: how can a batter be out?",
			"The main ways are bowled (the ball hits the stumps), caught (a fielder catches it before it bounces), lbw (the ball hits your leg when it would have hit the stumps), run out and stumped.",
			"If a fielder catches the ball before it bounces, the batter is…",
			["Caught", "Bowled"],
			0
		],
		[
			"Darts: how does 501 work?",
			"Each player starts on 501 and takes away what they score with three darts. To win, you must finish exactly on zero, and your last dart has to land in a double: the thin outer ring, or the bullseye.",
			"Where must your last dart land?",
			["In a double", "Anywhere"],
			0
		],
		[
			"Netball: who can shoot?",
			"Only the Goal Shooter (GS) and Goal Attack (GA) can score, and only from inside the shooting circle. Each goal is one point in most games.",
			"Which two players can score a goal?",
			["GS and GA", "GK and GD"],
			0
		]
	];
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Brain Academy: learn how sports work | SportingBrain Kids Zone",
		"description": "Six short lessons on how sports work, from offside to darts, each with a check question. Plus a Draw the Brain sheet to print.",
		"band": "academy"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>Brain Academy</h1><p>Six quick lessons. Read one, then answer the check question.</p></div></section>${L.map((l, k) => renderTemplate`<section class="kz-card lesson"${addAttribute(k, "data-l")}><h2>${l[0]}</h2><p>${l[1]}</p><p><b>Check:</b> ${l[2]}</p><div class="kz-opts">${l[3].map((o, i) => renderTemplate`<button${addAttribute(i === l[4] ? "1" : "0", "data-a")}>${o}</button>`)}</div><p class="kz-fact" hidden></p></section>`)}<section class="kz-card print-break"><h2>Draw the Brain</h2><p>Print this page and draw the Brain playing your favourite sport. What kit is it wearing? Is it scoring a goal or hitting a six?</p><div style="border:3px dashed #0F1E36;border-radius:12px;min-height:420px;display:grid;place-items:center;padding:20px"><img${addAttribute(`${base}assets/brain.svg`, "src")} alt="The Brain" width="120" style="opacity:.35"></div><p>My name: ________________ &nbsp; My sport: ________________</p><button class="btn gold no-print" onclick="window.print()">Print the sheet</button></section>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/kids/academy.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/academy.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/academy.astro";
var $$url = "/kids/academy.html";
// \0virtual:astro:page:src/pages/kids/academy@_@astro
var page = () => academy_exports;
export { page };
