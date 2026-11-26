import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { b as addAttribute, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as $$Base } from "./Base_BwtY1iqR.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as $$AdSlot } from "./AdSlot_NgYEwbda.mjs";
import { t as ALL } from "./bank_all_C8tp09IU.mjs";
// src/data/sportgroups.js
var SB_GROUPS = [
	[
		"football",
		"Football",
		"Men's and women's, from 1930 to now",
		["Football"]
	],
	[
		"cricket",
		"Cricket",
		"Tests, World Cups and the Ashes",
		["Cricket"]
	],
	[
		"rugby",
		"Rugby",
		"Union and league, club and country",
		["Rugby union", "Rugby league"]
	],
	[
		"tennis",
		"Tennis",
		"Grand Slams, greats and Wimbledon",
		["Tennis"]
	],
	[
		"golf",
		"Golf",
		"Majors, Ryder Cups and the Open",
		["Golf"]
	],
	[
		"olympic",
		"Athletics and Olympic sports",
		"Track, field, pool, gym and bike",
		[
			"Athletics",
			"Swimming",
			"Gymnastics",
			"Olympics",
			"Cycling"
		]
	],
	[
		"f1",
		"Formula 1",
		"Champions, circuits and records",
		["Formula 1"]
	],
	[
		"ring",
		"Boxing, snooker and darts",
		"The ring, the table and the oche",
		[
			"Boxing",
			"Snooker",
			"Darts"
		]
	],
	[
		"racing",
		"Horse racing",
		"The National, the Derby, Cheltenham and Royal Ascot",
		["Horse racing"]
	],
	[
		"more",
		"Everything else",
		"Netball, basketball, NFL, ice hockey and more",
		[
			"Netball",
			"Basketball",
			"American football",
			"Ice hockey",
			"Squash",
			"Hockey"
		]
	]
];
// src/data/racing_extra.js
var RACING_EXTRA = [
	[
		2,
		"Horse racing",
		"Which horse won the Grand National three times, in 1973, 1974 and 1977?",
		[
			"Red Rum",
			"Aldaniti",
			"Corbiere",
			"Party Politics"
		],
		0,
		"He also finished second in 1975 and 1976."
	],
	[
		2,
		"Horse racing",
		"At which course is the Derby run?",
		[
			"Epsom",
			"Ascot",
			"Newmarket",
			"Goodwood"
		],
		0,
		"It has been run on the Downs at Epsom since 1780."
	],
	[
		3,
		"Horse racing",
		"Who trained Red Rum?",
		[
			"Ginger McCain",
			"Fred Winter",
			"Martin Pipe",
			"Jenny Pitman"
		],
		0,
		"McCain famously trained him on the sands at Southport."
	],
	[
		3,
		"Horse racing",
		"Bob Champion won the 1981 Grand National on which horse, after recovering from cancer?",
		[
			"Aldaniti",
			"Corbiere",
			"Rag Trade",
			"Ben Nevis"
		],
		0,
		"Aldaniti had come back from serious leg injuries too. Their story became the film Champions."
	],
	[
		3,
		"Horse racing",
		"Frankel retired unbeaten after how many races?",
		[
			"14",
			"12",
			"16",
			"11"
		],
		0,
		"Trained by Sir Henry Cecil and ridden in every race by Tom Queally."
	],
	[
		3,
		"Horse racing",
		"Which grey won the 1989 Cheltenham Gold Cup in heavy ground?",
		[
			"Desert Orchid",
			"One Man",
			"Grey Abbey",
			"Neptune Collonges"
		],
		0,
		"Dessie also won the King George VI Chase four times."
	],
	[
		3,
		"Horse racing",
		"Frankie Dettori rode all seven winners on one card at which course in 1996?",
		[
			"Ascot",
			"York",
			"Newmarket",
			"Goodwood"
		],
		0,
		"The Magnificent Seven, at odds of more than 25,000 to 1."
	],
	[
		3,
		"Horse racing",
		"How many times did Lester Piggott win the Derby?",
		[
			"Nine",
			"Seven",
			"Eleven",
			"Six"
		],
		0,
		"His first was on Never Say Die in 1954, aged 18."
	],
	[
		3,
		"Horse racing",
		"Shergar won the 1981 Derby by a record margin. By how many lengths?",
		[
			"Ten",
			"Six",
			"Eight",
			"Twelve"
		],
		0,
		"He was stolen from a stud farm in Ireland in 1983 and never found."
	],
	[
		3,
		"Horse racing",
		"Enable won the Prix de l'Arc de Triomphe in 2017 and which other year?",
		[
			"2018",
			"2019",
			"2016",
			"2020"
		],
		0,
		"She was second in her bid for a third Arc in 2019."
	],
	[
		3,
		"Horse racing",
		"At which course is the St Leger run?",
		[
			"Doncaster",
			"York",
			"Newmarket",
			"Epsom"
		],
		0,
		"The St Leger is the last Classic of the season, run in September."
	],
	[
		3,
		"Horse racing",
		"Denman beat which stablemate to win the 2008 Cheltenham Gold Cup?",
		[
			"Kauto Star",
			"Neptune Collonges",
			"Imperial Commander",
			"Long Run"
		],
		0,
		"Both were trained by Paul Nicholls in the same yard at Ditcheat."
	],
	[
		4,
		"Horse racing",
		"How many times did Kauto Star win the King George VI Chase?",
		[
			"Five",
			"Four",
			"Three",
			"Six"
		],
		0,
		"In 2006, 2007, 2008, 2009 and 2011."
	],
	[
		4,
		"Horse racing",
		"Which is the oldest of the five British Classics?",
		[
			"The St Leger",
			"The Derby",
			"The Oaks",
			"The 2,000 Guineas"
		],
		0,
		"First run in 1776."
	],
	[
		4,
		"Horse racing",
		"Which horse won five Cheltenham Gold Cups in a row in the 1930s?",
		[
			"Golden Miller",
			"Arkle",
			"Easter Hero",
			"Cottage Rake"
		],
		0,
		"From 1932 to 1936. He also won the 1934 Grand National."
	],
	[
		4,
		"Horse racing",
		"Sam Waley-Cohen won the 2022 Grand National in his final ride. On which horse?",
		[
			"Noble Yeats",
			"Corach Rambler",
			"Delta Work",
			"Any Second Now"
		],
		0,
		"He was an amateur rider and retired straight after the race."
	],
	[
		4,
		"Horse racing",
		"Who trained 2023 Grand National winner Corach Rambler?",
		[
			"Lucinda Russell",
			"Venetia Williams",
			"Emma Lavelle",
			"Sue Smith"
		],
		0,
		"She is based in Kinross, Scotland, and also trained One For Arthur, the 2017 winner."
	],
	[
		4,
		"Horse racing",
		"Constitution Hill won the 2023 Champion Hurdle for which trainer?",
		[
			"Nicky Henderson",
			"Paul Nicholls",
			"Dan Skelton",
			"Willie Mullins"
		],
		0,
		"He won by nine lengths."
	],
	[
		4,
		"Horse racing",
		"Hollie Doyle won her first Group 1 in 2020 on which horse, on British Champions Day?",
		[
			"Glen Shiel",
			"Trueshan",
			"Nashwa",
			"Kew Gardens"
		],
		0,
		"She rode it in the Champions Sprint at Ascot."
	],
	[
		4,
		"Horse racing",
		"Who rode Nick Rockett to win the 2025 Grand National?",
		[
			"Patrick Mullins",
			"Paul Townend",
			"Harry Cobden",
			"Danny Mullins"
		],
		0,
		"Patrick Mullins, the trainer Willie Mullins' son, was an amateur rider."
	]
];
// src/pages/pick-a-sport.astro
var pick_a_sport_exports = /* @__PURE__ */ __exportAll({
	default: () => $$PickASport,
	file: () => $$file,
	url: () => $$url
});
var $$PickASport = createComponent(($$result, $$props, $$slots) => {
	const ALL$1 = ALL.concat(RACING_EXTRA);
	const base = "/".replace(/\/?$/, "/");
	const count = (g) => ALL$1.filter((q) => g[3].includes(q[1]) && q[0] >= 2).length;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Pick a Sport: ten-question sports quizzes | SportingBrain",
		"description": "Ten-question quizzes on the sport you know best: football, cricket, rugby, tennis, golf, F1, athletics and more. A fresh set every time. Free, no sign-up.",
		"page": "pickasport"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<header class="pg-head"><h1>Pick a Sport</h1><p>Ten questions on the sport you know best, Medium to Expert, a fresh set every time. Play as often as you like. Today's Beat the Brain questions are kept out, so nothing gets spoiled.</p></header><div id="vs"></div><div class="ps-groups" id="groups">${SB_GROUPS.map((g) => renderTemplate`<a${addAttribute(`${base}pick-a-sport.html?s=${g[0]}`, "href")}><b>${g[1]}</b><span>${g[2]}</span><small>${count(g)} questions</small></a>`)}<a${addAttribute(`${base}ireland/quiz.html`, "href")} class="ps-ie"><b>Irish sport</b><span>GAA, Irish rugby, the League of Ireland and more</span><small>On SportingBrain Ireland</small></a></div><section class="pg-card" id="pq" aria-live="polite" hidden></section>${renderComponent($$result, "AdSlot", $$AdSlot, { "name": "game_result" })}${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/pick-a-sport.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/pick-a-sport.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/pick-a-sport.astro";
var $$url = "/pick-a-sport.html";
// \0virtual:astro:page:src/pages/pick-a-sport@_@astro
var page = () => pick_a_sport_exports;
export { page };
