import { C as unescapeHTML, X as UnavailableAstroGlobal, Z as AstroError, b as addAttribute, d as renderSlot, g as renderHead, m as renderTemplate, n as templateExit, t as templateEnter, x as defineScriptVars } from "./server_CmGXGesc.mjs";
import { t as createComponent } from "./compiler_BTQQOE5i.mjs";
import { t as renderScript } from "./editorial_EDQVPNOA.mjs";
import { t as ads_default } from "./ads_T340unvE.mjs";
// node_modules/@astrojs/runtime/dist/internal/server/astro-global.js
var ASTRO_GENERATOR = `Astro v7.4.13`;
function createError(name) {
	return new AstroError({
		...UnavailableAstroGlobal,
		message: UnavailableAstroGlobal.message(name)
	});
}
function createAstro(site) {
	return {
		get site() {
			console.warn(`Astro.site inside getStaticPaths is deprecated and will be removed in a future major version of Astro. Use import.meta.env.SITE instead`);
			return site ? new URL(site) : void 0;
		},
		get generator() {
			console.warn(`Astro.generator inside getStaticPaths is deprecated and will be removed in a future major version of Astro.`);
			return ASTRO_GENERATOR;
		},
		get callAction() {
			throw createError("callAction");
		},
		get clientAddress() {
			throw createError("clientAddress");
		},
		get cookies() {
			throw createError("cookies");
		},
		get csp() {
			throw createError("csp");
		},
		get currentLocale() {
			throw createError("currentLocale");
		},
		get getActionResult() {
			throw createError("getActionResult");
		},
		get isPrerendered() {
			throw createError("isPrerendered");
		},
		get locals() {
			throw createError("locals");
		},
		get originPathname() {
			throw createError("originPathname");
		},
		get params() {
			throw createError("params");
		},
		get preferredLocale() {
			throw createError("preferredLocale");
		},
		get preferredLocaleList() {
			throw createError("preferredLocaleList");
		},
		get props() {
			throw createError("props");
		},
		get redirect() {
			throw createError("redirect");
		},
		get request() {
			throw createError("request");
		},
		get response() {
			throw createError("response");
		},
		get rewrite() {
			throw createError("rewrite");
		},
		get routePattern() {
			throw createError("routePattern");
		},
		get self() {
			throw createError("self");
		},
		get slots() {
			throw createError("slots");
		},
		get url() {
			throw createError("url");
		},
		get session() {
			throw createError("session");
		},
		get cache() {
			throw createError("cache");
		},
		get logger() {
			throw createError("logger");
		}
	};
}
// node_modules/@fontsource/big-shoulders-display/files/big-shoulders-display-latin-900-normal.woff2?url
var big_shoulders_display_latin_900_normal_default = "/_astro/big-shoulders-display-latin-900-normal.CW8trzgu.woff2";
// node_modules/@fontsource/big-shoulders-display/files/big-shoulders-display-latin-800-normal.woff2?url
var big_shoulders_display_latin_800_normal_default = "/_astro/big-shoulders-display-latin-800-normal.DDUD9Xuh.woff2";
// node_modules/@fontsource-variable/source-serif-4/files/source-serif-4-latin-opsz-normal.woff2?url
var source_serif_4_latin_opsz_normal_default = "/_astro/source-serif-4-latin-opsz-normal.BpEBLj1O.woff2";
var analytics_default = { goatcounter: "sportingbrain" };
// src/data/shop.js
var AMZ_TAG = "gmh710f-21";
var amz = (q) => `https://www.amazon.co.uk/s?k=${encodeURIComponent(q).replace(/%20/g, "+")}&tag=${AMZ_TAG}`;
var PICKS = {
	quiz: [
		[
			"Sports quiz books",
			"sports quiz book",
			"Thousands of questions for car journeys, Christmas Day and quiz nights."
		],
		[
			"Pub quiz buzzers",
			"quiz buzzer set",
			"Proper game-show buzzers so you know who hit first."
		],
		[
			"Guinness World Records",
			"Guinness World Records book",
			"The yearly book of records, with a big sport section."
		]
	],
	pubquiz: [
		[
			"Quiz buzzers",
			"quiz buzzer set",
			"Run your quiz night like a TV show."
		],
		[
			"Mini whiteboards and pens",
			"mini whiteboards for quiz",
			"Teams write answers and hold them up. No paper to collect."
		],
		[
			"Sports quiz books",
			"sports quiz book",
			"More rounds when ours run out."
		]
	],
	football: [
		[
			"Subbuteo",
			"Subbuteo",
			"The flick-to-kick table football game played since the 1940s."
		],
		[
			"Football tactics board",
			"football tactics board magnetic",
			"Magnetic board to pick your team and plan the shape."
		],
		[
			"Football annuals and books",
			"football book",
			"Histories, biographies and stats for the fan who knows it all."
		]
	],
	grounds: [
		[
			"Football ground guides",
			"football grounds guide book",
			"Books for groundhoppers on every stadium in the country."
		],
		[
			"Stadium jigsaw puzzles",
			"football stadium jigsaw",
			"Iconic grounds as 1000-piece puzzles."
		],
		[
			"Football stadium prints",
			"football stadium print",
			"Line drawings and prints of famous grounds for the wall."
		]
	],
	players: [
		[
			"Football autobiographies",
			"football autobiography",
			"The life stories of the players behind the clues."
		],
		[
			"Panini sticker album",
			"Panini sticker album",
			"The swapping, the doubles and the one you can never find."
		],
		[
			"Football trivia books",
			"football trivia book",
			"For the fan who got every clue today."
		]
	],
	referee: [
		[
			"Referee kit",
			"referee whistle cards set",
			"Whistle, cards and notebook. Settle the argument yourself."
		],
		[
			"The Laws of the Game explained",
			"football laws of the game book",
			"Books that explain the rules properly, offside included."
		],
		[
			"Pop-up goals",
			"pop up football goals garden",
			"Two goals that fold flat. Ideal for the garden or the park."
		]
	],
	cricket: [
		[
			"Wisden Cricketers' Almanack",
			"Wisden Cricketers Almanack",
			"The yellow \"Bible of cricket\", published every year since 1864."
		],
		[
			"Kwik Cricket set",
			"Kwik Cricket set",
			"Plastic bat, ball and stumps for the garden or the beach."
		],
		[
			"Cricket books",
			"cricket book",
			"Histories and memoirs from the greatest game ever invented."
		]
	],
	darts: [
		[
			"Winmau Blade 6 dartboard",
			"Winmau Blade 6 dartboard",
			"A bristle board from one of the biggest names in darts."
		],
		[
			"Tungsten darts",
			"tungsten darts set",
			"Slimmer and heavier than brass, so they group tighter."
		],
		[
			"Dartboard cabinet",
			"dartboard cabinet",
			"Protects the wall and looks smart when shut."
		]
	],
	allsports: [
		[
			"Swingball",
			"Swingball",
			"The garden tennis game on a pole. Good for all ages."
		],
		[
			"Table football",
			"table football",
			"A proper bar-style table for the games room."
		],
		[
			"Mini snooker table",
			"mini snooker table",
			"A table-top snooker set for the kitchen table."
		]
	],
	family: [
		[
			"Sports day set",
			"sports day race set egg and spoon sack race",
			"Sacks, eggs and spoons for our Sports Day at Home."
		],
		[
			"Cones and bibs",
			"training cones and bibs",
			"Mark out pitches and pick teams in the park."
		],
		[
			"Swingball",
			"Swingball",
			"The garden tennis game on a pole. Good for all ages."
		]
	],
	books: [
		[
			"Inverting the Pyramid, by Jonathan Wilson",
			"Inverting the Pyramid Jonathan Wilson",
			"The history of football tactics, told brilliantly."
		],
		[
			"Open, by Andre Agassi",
			"Open Andre Agassi",
			"An honest sports memoir, even if you don't follow tennis."
		],
		[
			"Bounce, by Matthew Syed",
			"Bounce Matthew Syed",
			"Talent, practice and what really makes a champion."
		]
	],
	stats: [
		[
			"The Numbers Game",
			"The Numbers Game Chris Anderson David Sally",
			"What football data really tells us."
		],
		[
			"Moneyball, by Michael Lewis",
			"Moneyball Michael Lewis",
			"How a baseball team used numbers to beat richer rivals."
		],
		[
			"Football stats books",
			"football statistics book",
			"Records and numbers for settling arguments."
		]
	],
	advent: [
		[
			"Football advent calendars",
			"football advent calendar",
			"A door a day until Christmas for the football fan."
		],
		[
			"Sports quiz books",
			"sports quiz book",
			"Questions for the Christmas table."
		],
		[
			"Subbuteo",
			"Subbuteo",
			"The Boxing Day tournament, sorted."
		]
	]
};
var PAGE_PICKS = {
	"": "quiz",
	index: "quiz",
	daily: "quiz",
	challenge: "quiz",
	"weekly-expert": "quiz",
	"speed-round": "quiz",
	"true-or-false": "quiz",
	countdown: "quiz",
	connections: "quiz",
	"which-sport": "allsports",
	"guess-the-sport": "allsports",
	bingo: "quiz",
	passport: "allsports",
	play: "quiz",
	"pub-quiz": "pubquiz",
	"sports-grid": "football",
	"the-grid": "football",
	"pick-your-xi": "football",
	"call-it-football": "football",
	"legends-xi": "football",
	"ground-guesser": "grounds",
	"who-am-i": "players",
	"guess-the-player": "players",
	"name-them-all": "players",
	"is-it-a-foul": "referee",
	"call-it": "cricket",
	"higher-or-lower": "stats",
	"stat-attack": "stats",
	"stats-detective": "stats",
	"sports-day": "family",
	advent: "advent",
	read: "books",
	flashback: "books",
	stories: "books",
	"on-this-day": "books",
	"this-week": "quiz",
	"round-up": "books",
	rewind: "books",
	archive: "books",
	sports: "allsports",
	watch: "books",
	replays: "books",
	laughs: "books"
};
var picksFor = (path) => {
	const slug = path.replace(/^\//, "").replace(/\.html$/, "").replace(/\/index$/, "");
	if (/darts/.test(slug)) return PICKS.darts;
	if (/^(flashback|sports)\//.test(slug)) return /cricket/.test(slug) ? PICKS.cricket : /darts/.test(slug) ? PICKS.darts : /football/.test(slug) ? PICKS.football : PICKS.books;
	const k = PAGE_PICKS[slug];
	return k ? PICKS[k] : null;
};
// src/data/seo.js
var SEO = {
	"/index.html": {
		title: "Free Daily Sports Quizzes, Games and Stories | SportingBrain",
		description: "Free daily sports quizzes and games built on real matches: Call It, Beat the Brain, Connections and more. Men's and women's sport. No sign-up, no betting."
	},
	"/daily.html": {
		title: "Beat the Brain: Hard Daily Sports Quiz | SportingBrain",
		description: "Five hard sports quiz questions every day, on Hard or Expert. Football, cricket, rugby, tennis and more, men's and women's. Beat the Brain's score. Free.",
		h1: "Beat the Brain: five hard sports questions every day",
		intro: "A daily sports quiz on two levels, Hard and Expert. Football, cricket, rugby, tennis, golf, athletics and more, men's and women's. The Brain has already had a go: can you beat its score?"
	},
	"/call-it.html": {
		title: "Call It: Daily Cricket Prediction Game | SportingBrain",
		description: "A real moment from a great cricket final, frozen. Call what happens next, then watch it play out ball by ball. A new moment every day. Free, no betting."
	},
	"/call-it-football.html": {
		title: "Call It Football: Call the Great Finals | SportingBrain",
		description: "A moment from a great World Cup, Euro or Champions League final, men's and women's. Call what happens next, then watch it play out minute by minute."
	},
	"/bingo.html": {
		title: "Matchday Bingo: Football Bingo Card | SportingBrain",
		description: "A free football bingo card for the next match you watch, at home or at the ground. Tap the squares as they happen and shout when you get a line. No sign-up."
	},
	"/challenge.html": {
		title: "Weekly Sports Quiz Challenges | SportingBrain",
		description: "This week's SportingBrain challenges: the Weekly Brain Challenge, World Sport Wednesday and more. Hard sports quiz questions, men's and women's. Free.",
		h1: "This week's sports quiz challenges",
		intro: "The Weekly Brain Challenge and the themed challenges for this week. Hard questions from every sport, men's and women's. Free, no sign-up."
	},
	"/connections.html": {
		title: "Sports Connections: Daily Sport Puzzle | SportingBrain",
		description: "Sixteen sporting names, four hidden groups of four. Find the connections in one new sports puzzle a day. Four mistakes and you're out. Free, no sign-up."
	},
	"/countdown.html": {
		title: "Sports Countdown: Big Events Coming Up | SportingBrain",
		description: "Live countdowns to the next big events in sport: darts, snooker, the Six Nations, the majors and more, men's and women's. Dates checked as they're confirmed."
	},
	"/ground-guesser.html": {
		title: "Ground Guesser: Name the Stadium Quiz | SportingBrain",
		description: "Name the stadium from a close-up photo. 156 real grounds: football, cricket, rugby, tennis, golf, racing and F1. Daily puzzle, endless mode and a collection."
	},
	"/higher-or-lower.html": {
		title: "Higher or Lower: Sports Stats Game | SportingBrain",
		description: "Is the next sports stat higher or lower? Goals, titles, records and crowds from every sport. Keep going until you get one wrong. Free, no sign-up.",
		h1: "Higher or Lower: the sports stats game",
		intro: "Two sports stats. Is the second one higher or lower than the first? Keep going until you get one wrong, and try to beat your best run."
	},
	"/kids/6-8.html": {
		title: "Sports Quiz for Kids Aged 6 to 8 | SportingBrain",
		description: "Little Legends: five sport questions a day for ages 6 to 8, with amazing facts and challenges to try at home. No ads, no chat, no sign-up, no data collected."
	},
	"/kids/9-12.html": {
		title: "Sports Quiz for Kids Aged 9 to 12 | SportingBrain",
		description: "Junior Brain: five proper sport questions a day for ages 9 to 12, plus games and challenges to try at home. No ads, no chat, no sign-up, no data collected."
	},
	"/kids/academy.html": {
		title: "Brain Academy: How Sports Work, for Kids | SportingBrain",
		description: "Six short lessons for children on how sports work, from offside to darts scoring, each with a check question. No ads, no chat, no sign-up, no data collected."
	},
	"/kids/guess-the-player.html": {
		title: "Guess the Player: Kids Sports Quiz | SportingBrain",
		description: "Three clues, one sporting star. A guessing game for ages 9 to 12 in the SportingBrain Kids Zone, men's and women's sport. No ads, no chat, no data collected."
	},
	"/kids/guess-the-sport.html": {
		title: "Guess the Sport: Emoji Game for Kids | SportingBrain",
		description: "Three emoji clues. Can you name the sport? A quick guessing game for children in the SportingBrain Kids Zone. No ads, no chat, no sign-up, no data collected."
	},
	"/kids/the-grid.html": {
		title: "The Grid: Sports Word Puzzle for Kids | SportingBrain",
		description: "Find four groups of four sporting words in this puzzle for ages 9 to 12. A new grid to solve in the SportingBrain Kids Zone. No ads, no chat, no data collected."
	},
	"/kids/true-or-false.html": {
		title: "True or False: Sports Facts for Kids | SportingBrain",
		description: "Sporting facts and fibs for ages 9 to 12. Can you spot which is true? With the real story behind every answer. No ads, no chat, no sign-up, no data collected."
	},
	"/kids/which-sport.html": {
		title: "Which Sport Are You? Quiz for Kids | SportingBrain",
		description: "Six quick questions to find the sport that matches your personality, for ages 6 to 12. A SportingBrain Kids Zone quiz. No ads, no chat, no data collected."
	},
	"/kids/parents.html": {
		title: "Kids Zone Safety: For Parents | SportingBrain",
		description: "No data collected, no ads, no chat and no sign-up. How SportingBrain's Kids Zone keeps children safe and follows the Children's Code, explained for parents."
	},
	"/laughs.html": {
		title: "Laugh of the Day: Funniest Sports Moments | SportingBrain",
		description: "One hand-picked funny sports clip every day, chosen by a person, not an algorithm. Family-friendly bloopers and moments from every sport. Free to watch."
	},
	"/newsletter.html": {
		title: "The Weekly Brain: Free Sports Quiz Email | SportingBrain",
		description: "Every Friday: the week's five hardest sports questions, the best Call It moment, a forgotten story and the Cynical Round-Up. Free, and unsubscribe in one click."
	},
	"/passport.html": {
		title: "Ground Hopper Passport: Grounds Visited | SportingBrain",
		description: "Keep a passport of every stadium and ground you've been to, in any sport. Stamp each visit and watch the collection grow. Saved on your device. Free."
	},
	"/pick-your-xi.html": {
		title: "Pick Your XI: Greatest, Duffers and Cult XIs | SportingBrain",
		description: "Pick a Greatest XI, Duffers XI, Daft Names XI or Cult Heroes XI from any players you like, then share it. A free football team picker. No sign-up."
	},
	"/play.html": {
		title: "Free Sports Quizzes and Games | SportingBrain",
		description: "Every SportingBrain game in one place: Call It, Beat the Brain, Connections, the Pub Quiz, Who Am I?, Ground Guesser and more. Free, no betting, no sign-up."
	},
	"/pub-quiz.html": {
		title: "Free Sports Pub Quiz, New Every Week | SportingBrain",
		description: "Four rounds of ten sports questions with answers, a picture round, a team answer sheet and host notes. Free to print and run at your pub or club every week."
	},
	"/read.html": {
		title: "Sports Stories, Flashbacks and Guides | SportingBrain",
		description: "This Week's Quiz, Flashback, On This Day, true sports stories, guides to how every sport works and the Cynical Round-Up. Men's and women's sport. Free."
	},
	"/replays.html": {
		title: "Cricket Finals Replayed Ball by Ball | SportingBrain",
		description: "Replay the greatest cricket World Cup finals ball by ball, women's and men's, with worm charts, every wicket and a live scoreboard. Built from real data.",
		h1: "Cricket finals, replayed ball by ball"
	},
	"/rewind.html": {
		title: "Sports Quiz by Decade, 1950s to 2010s | SportingBrain",
		description: "Pick a decade from the 1950s to the 2010s and play a sports quiz round about it. Best played with someone who was there. Men's and women's sport. Free."
	},
	"/round-up.html": {
		title: "The Cynical Round-Up: Satirical Sports News | SportingBrain",
		description: "Satire, clearly labelled. The week's real sports news retold with a raised eyebrow, every Friday. Read this week's Cynical Round-Up from SportingBrain."
	},
	"/speed-round.html": {
		title: "Speed Round: 60-Second Sports Quiz | SportingBrain",
		description: "Sixty seconds on the clock. Answer as many sports quiz questions as you can, from football and cricket to tennis and F1. Beat your best. Free, no sign-up.",
		h1: "Speed Round: a 60-second sports quiz",
		intro: "Sixty seconds. As many right answers as you can, from every sport. Then try to beat your best."
	},
	"/stat-attack.html": {
		title: "Stat Attack: Tennis Top Trumps | SportingBrain",
		description: "Top trumps with Grand Slam tennis legends, men and women. Pick your best stat and take on the Brain, card by card. Real stats, checked. Free, no sign-up."
	},
	"/stats-detective.html": {
		title: "Stats Detective: Cricket Final Puzzle | SportingBrain",
		description: "A batting or bowling line from a real cricket World Cup final, men's and women's. Work out whose it was from the numbers and the clues. A new case every day."
	},
	"/stories.html": {
		title: "True Sports Stories: Comebacks and Firsts | SportingBrain",
		description: "Remarkable true stories from every sport: comebacks, firsts, underdogs and heroes, men's and women's. Short reads, checked against the sources. Free.",
		h1: "True sports stories"
	},
	"/this-week.html": {
		title: "This Week's Sports Quiz: Five on the Week | SportingBrain",
		description: "Five questions on the past week in sport. Football, rugby, Formula 1 and more. Play, see your score, read the stories behind each answer, then challenge a mate."
	},
	"/true-or-false.html": {
		title: "True or False Sports Quiz | SportingBrain",
		description: "Sporting facts and fibs from every sport. Can you tell which is which? A quick true or false sports quiz, men's and women's, with the real story behind each.",
		h1: "True or False: the sports quiz",
		intro: "Sporting facts and fibs. Can you tell which is which? Every answer comes with the real story."
	},
	"/watch.html": {
		title: "Watch: Sports Replays and Laughs | SportingBrain",
		description: "Great cricket finals replayed ball by ball, Call It play-outs and a funny moment from sport every day. Men's and women's. Free to watch, no sign-up."
	},
	"/weekly-expert.html": {
		title: "Weekly Expert: Hard Sports Quiz | SportingBrain",
		description: "Ten expert-level sports questions, new every Monday. Type the answer for two points or take the options for one. For people who win pub quizzes. Free."
	},
	"/who-am-i.html": {
		title: "Who Am I? Sports Star Guessing Game | SportingBrain",
		description: "Five clues, hardest first. Name the sporting great in as few as you can. Men and women, every sport. A new player every day. Free, no sign-up."
	},
	"/gift-guide.html": {
		title: "Gifts for Sports Fans: Christmas 2026 Guide | SportingBrain",
		description: "The best Christmas gifts for sports fans: darts boards, Subbuteo, Wisden, quiz buzzers, sports books and stocking fillers, picked by SportingBrain."
	},
	"/app.html": {
		title: "Get the SportingBrain App, Free | SportingBrain",
		description: "Put SportingBrain on your phone or computer in ten seconds. Free, no app store, no sign-up. One tap from your home screen to today's games."
	},
	"/kids.html": {
		title: "Kids Zone: Free Sports Games for Kids | SportingBrain",
		description: "Free, ad-free sports games and quizzes for children aged 6 to 12. No sign-up, no data collected, no adverts. Safe sport fun for the whole family."
	},
	"/settings.html": {
		title: "Your Settings and Saved Progress | SportingBrain",
		description: "Change your SportingBrain settings: dark mode, dyslexia-friendly font, saved scores and streaks. Everything stays on your own device."
	},
	"/about.html": {
		title: "About SportingBrain and Your Privacy",
		description: "Who runs SportingBrain, what we do and how we look after your privacy: no accounts, no tracking cookies, and your email used only for the newsletter."
	},
	"/credits.html": {
		title: "Photo Credits and Image Licences | SportingBrain",
		description: "Photo credits for SportingBrain: every Wikimedia Commons photograph we use, with its photographer, licence and source, plus notes on our own artwork."
	}
};
// src/data/sharetext.js
var SHARE = {
	"this-week": ["This Week's Quiz", "Five questions on the past week in sport. Were you paying attention? Play, then challenge a mate."],
	"gift-guide": ["Gifts for sports fans", "41 Christmas presents for every kind of sports fan, from darts boards and Subbuteo to the best sports books and stocking fillers."],
	"call-it": ["Call It: Cricket", "A real moment from a great cricket final, frozen mid-over. You call the runs and the wickets, then watch the real thing play out ball by ball. New every day."],
	"call-it-football": ["Call It: Football", "A moment from a great World Cup, Euro or Champions League final, men's or women's. Call who scores next and how it ends, then watch it unfold minute by minute."],
	"connections": ["Connections: Sport", "Sixteen sporting names hiding four groups of four. Spot the links before you make four mistakes. One new puzzle a day."],
	"ireland": ["SportingBrain Ireland", "Three daily games on Irish sport: the Irish Brain quiz, Name the County and Irish Legends. Pick your county and play."],
	"ireland/brain": ["The Irish Brain", "Five hard questions on Irish sport every day: GAA, rugby, football, racing, boxing and more. Can you beat the Brain?"],
	"ireland/county": ["Name the County", "Five clues to one of Ireland's 32 counties: the history, the ground, the nickname, the colours. How few do you need?"],
	"ireland/legends": ["Irish Legends", "Five clues to one of Ireland's sporting greats, hardest first. A new legend every day."],
	"colours": ["Your Colours", "Pick your football club, rugby team, cricket county or GAA county, and it goes on every SportingBrain score you share."],
	"ireland/quiz": ["Pick a Sport: Ireland", "Ten questions on the Irish sport you know best: GAA, rugby, soccer, racing, boxing and more."],
	"pick-a-sport": ["Pick a Sport", "Ten questions on the sport you know best: football, cricket, rugby, tennis, golf, F1 and more. A fresh set every time."],
	"who-am-i": ["Who Am I?", "Five clues to one sporting great, hardest clue first. The fewer clues you need, the higher you score. A new player every day."],
	"ground-guesser": ["Ground Guesser", "A real stadium, zoomed right in. Name the ground in as few steps as you can, from football and cricket to tennis, golf and F1."],
	"sports-grid": ["Sports Grid", "Nine squares. Name a club that fits both the row and the column, with no repeats. Harder than it looks."],
	"name-them-all": ["Name Them All", "Every Ballon d'Or winner, every PDC world champion and more. Type as many as you can before the clock runs out."],
	"daily": ["Beat the Brain", "Five hard sports questions a day, on Hard or Expert. The Brain has already set a score. Can you beat it?"],
	"weekly-expert": ["Weekly Expert", "Ten expert-level sports questions, new every Monday. Type the answer for two points, or take the options for one. For people who win pub quizzes."],
	"pub-quiz": ["Pub and Club Quiz", "A free weekly sports quiz: four rounds of ten, a picture round, answer sheets and host notes. Print it and run it at your pub or club."],
	"countdown": ["Countdown Clock", "The big events in sport, ticking down, with a quick quiz on each one while you wait."],
	"is-it-a-foul": ["Is It a Foul?", "Real rules situations from eight sports. You're the referee: fair or foul? Most people get at least two wrong."],
	"stat-attack": ["Stat Attack", "Top trumps against the Brain with Grand Slam tennis legends, men and women. Pick your strongest stat and win the cards."],
	"stats-detective": ["Stats Detective", "A batting or bowling line from a real cricket World Cup final. Work out whose figures they were."],
	"pick-your-xi": ["Pick Your XI", "Pick a Greatest XI, Duffers XI, Daft Names XI or Cult Heroes XI from any players you like, and see how it rates."],
	"rewind": ["Grandparent Rewind", "A sports quiz round for every decade from the 1950s to the 2010s. Play it with someone who was there."],
	"bingo": ["Matchday Bingo", "A bingo card for the next football match you watch. Tap the squares as they happen and shout when you get a line."],
	"advent": ["Sporting Advent Calendar", "A door a day from 1 December, each with a sports question and the story behind it."],
	"higher-or-lower": ["Higher or Lower", "Two sports numbers. Is the next one higher or lower? Keep the run going as long as you can."],
	"true-or-false": ["True or False", "Sporting facts and fibs from every sport. Can you tell which is which?"],
	"speed-round": ["Speed Round", "Sixty seconds on the clock. As many sports questions as you can answer. Beat your best."],
	"archive": ["Puzzle archive", "Every past Beat the Brain, ready to play. Catch up on the days you missed."],
	"passport": ["Ground Hopper Passport", "Stamp every ground and venue you've been to, in any sport, and watch your collection grow."],
	"sports-day": ["Sports Day at Home", "Eight events for the garden or the park, a scorecard and a 30-day challenge for the whole family."],
	"challenge": ["This week's challenges", "The Weekly Brain Challenge and the themed challenges for this week. Ten questions each. Who knows the most?"]
};
// src/data/playlist.js
var PLAY = [
	[
		"call-it",
		"Call It: Cricket",
		"A real over from a real final. Call the runs and wickets before the ball is bowled.",
		"daily",
		"#F2A900"
	],
	[
		"laughs",
		"Laugh of the Day",
		"One hand-picked funny moment from sport, every day.",
		"watch",
		"#F2A900"
	],
	[
		"call-it-football",
		"Call It: Football",
		"A moment from a great final. Who scores next, and how many more?",
		"daily",
		"#C8102E"
	],
	[
		"connections",
		"Connections: Sport",
		"Sixteen names, four hidden groups. One a day.",
		"daily",
		"#9BB8E3"
	],
	[
		"who-am-i",
		"Who Am I?",
		"Five clues, hardest first. Name the sporting great.",
		"daily",
		"#C8102E"
	],
	[
		"ground-guesser",
		"Ground Guesser",
		"A real venue, zoomed right in. Name it in as few steps as you can.",
		"daily",
		"#0B6E4F"
	],
	[
		"sports-grid",
		"Sports Grid",
		"Nine squares, nine guesses. Name the club that fits the row and the column.",
		"daily",
		"#0B6E4F"
	],
	[
		"name-them-all",
		"Name Them All",
		"Every Ballon d'Or winner, every PDC champion. Type them all before the clock stops.",
		"quiz",
		"#C8102E"
	],
	[
		"daily",
		"Beat the Brain",
		"Five hard questions a day, Hard or Expert. The Brain has already had a go.",
		"daily",
		"#0B6E4F"
	],
	[
		"weekly-expert",
		"Weekly Expert",
		"Ten expert questions. New every Monday. For people who win pub quizzes.",
		"quiz",
		"#C8102E"
	],
	[
		"pub-quiz",
		"Pub and Club Quiz",
		"Four rounds of ten, answer sheet and host notes. Free to print and run.",
		"quiz",
		"#0F1E36"
	],
	[
		"countdown",
		"Countdown Clock",
		"The big events coming up, ticking down, with a quick quiz for each.",
		"quiz",
		"#2A3A55"
	],
	[
		"is-it-a-foul",
		"Is It a Foul?",
		"Eighteen real rules scenarios across eight sports. Fair or foul?",
		"games",
		"#C8102E"
	],
	[
		"stat-attack",
		"Stat Attack",
		"Top trumps against the Brain with Grand Slam legends. Pick your stat.",
		"games",
		"#0F1E36"
	],
	[
		"stats-detective",
		"Stats Detective",
		"A batting line from a World Cup final. Whose was it?",
		"games",
		"#0B6E4F"
	],
	[
		"pick-your-xi",
		"Pick Your XI",
		"Any player, any theme: Greatest, Duffers, Daft Names, Cult Heroes. Share it and get it rated.",
		"games",
		"#0B6E4F"
	],
	[
		"rewind",
		"Grandparent Rewind",
		"A round for every decade from the 1950s. Play it with someone who was there.",
		"quiz",
		"#2A3A55"
	],
	[
		"bingo",
		"Matchday Bingo",
		"A card for the next game you watch. Tap squares as they happen, or print it.",
		"games",
		"#F2A900"
	],
	[
		"advent",
		"Sporting Advent Calendar",
		"A door a day from 1 December, each with a question and a story.",
		"family",
		"#0B6E4F"
	],
	[
		"pick-a-sport",
		"Pick a Sport",
		"Ten questions on the sport you know best. A fresh set every time.",
		"quiz",
		"#0F1E36"
	],
	[
		"higher-or-lower",
		"Higher or Lower",
		"Which number is bigger? Keep the run going.",
		"quiz",
		"#2A3A55"
	],
	[
		"true-or-false",
		"True or False",
		"Sporting facts and fibs.",
		"quiz",
		"#2A3A55"
	],
	[
		"speed-round",
		"Speed Round",
		"Sixty seconds. As many as you can.",
		"quiz",
		"#2A3A55"
	],
	[
		"archive",
		"Puzzle archive",
		"Missed a day? Every Beat the Brain is here.",
		"quiz",
		"#2A3A55"
	],
	[
		"passport",
		"Ground Hopper Passport",
		"Stamp every ground and venue you visit. Kept on your device only.",
		"family",
		"#C8102E"
	],
	[
		"sports-day",
		"Sports Day at Home",
		"Eight events for the garden or the park, a scorecard and a 30-day challenge.",
		"family",
		"#0B6E4F"
	],
	[
		"ireland/brain",
		"The Irish Brain",
		"Five hard questions on Irish sport every day. GAA, rugby, racing, boxing and more.",
		"ireland",
		"#0E6B45"
	],
	[
		"ireland/county",
		"Name the County",
		"Five clues to one of Ireland's 32 counties. Name it in as few as you can.",
		"ireland",
		"#0B4D32"
	],
	[
		"ireland/legends",
		"Irish Legends",
		"Five clues to one of Ireland's sporting greats, hardest first.",
		"ireland",
		"#D9A72B"
	],
	[
		"ireland/quiz",
		"Pick a Sport: Ireland",
		"Ten questions on one Irish sport: GAA, rugby, soccer, racing, boxing and more.",
		"ireland",
		"#0E6B45"
	],
	[
		"challenge",
		"Family challenge",
		"Pass the phone round. Who knows the most?",
		"quiz",
		"#0B6E4F"
	]
];
var GROUPS = [
	["daily", "Today's games"],
	["quiz", "Quizzes"],
	["games", "Games"],
	["family", "Family and seasonal"],
	["ireland", "SportingBrain Ireland"]
];
var $$Base = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const { title, description, page = "", wide = false, image, type = "website", noindex = false, noads = false } = Astro.props;
	const adsOn = !!ads_default.client && !noads && !/^\/kids/.test(Astro.url.pathname);
	const isGamePage = PLAY.some((x) => "/" + x[0] === Astro.url.pathname.replace(/\.html$/, "").replace(/\/$/, "")) || /^\/(daily|ireland\/(brain|county|legends|quiz)|pick-a-sport)/.test(Astro.url.pathname);
	const base = "/".endsWith("/") ? "/" : "//";
	const pathKey = "/" + Astro.url.pathname.replace(/^\//, "").replace(base.replace(/^\//, ""), "");
	const S = SEO[pathKey] || SEO[pathKey + ".html"] || {};
	let pageTitle = S.title || title;
	if (pageTitle.length > 60) pageTitle = pageTitle.replace(" | Flashback | SportingBrain", " | SportingBrain");
	if (pageTitle.length > 60) pageTitle = pageTitle.replace(/ \| SportingBrain( Kids Zone)?$/, "");
	let pageDesc = S.description || description || "";
	if (pageDesc.length > 160) pageDesc = pageDesc.slice(0, 157).replace(/[\s,;:.]+\S*$/, "") + "…";
	const shareItem = SHARE[pathKey.replace(/^\//, "").replace(/\.html$/, "")];
	const canonical = new URL(/\/index(\.html)?$/.test(Astro.url.pathname) ? base : Astro.url.pathname, Astro.site).href;
	const crumbs = (() => {
		const parts = pathKey.replace(/\.html$/, "").split("/").filter(Boolean);
		if (parts.length < 2) return null;
		const sec = {
			flashback: ["Flashback", "flashback.html"],
			stories: ["True stories", "stories.html"],
			replays: ["Replays", "replays.html"],
			sports: ["Sport guides", "sports.html"],
			kids: ["Kids Zone", "kids.html"],
			ireland: ["SportingBrain Ireland", "ireland.html"]
		}[parts[0]];
		if (!sec) return null;
		return {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "SportingBrain",
					item: new URL(base, Astro.site).href
				},
				{
					"@type": "ListItem",
					position: 2,
					name: sec[0],
					item: new URL(base + sec[1], Astro.site).href
				},
				{
					"@type": "ListItem",
					position: 3,
					name: pageTitle.replace(/ \|.*$/, ""),
					item: canonical
				}
			]
		};
	})();
	const ogImage = image || new URL(base + "og.png", Astro.site).href;
	const nav = [
		[
			"Today",
			base,
			"today"
		],
		[
			"Brain",
			`${base}daily.html`,
			"brain"
		],
		[
			"Who Am I",
			`${base}who-am-i.html`,
			"whoami"
		],
		[
			"Grounds",
			`${base}ground-guesser.html`,
			"grounds"
		],
		[
			"Sports",
			`${base}pick-a-sport.html`,
			"sports"
		],
		[
			"Ireland",
			`${base}ireland.html`,
			"ireland"
		],
		[
			"More",
			`${base}more.html`,
			"more"
		]
	];
	const path = Astro.url.pathname.replace(base, "/").replace(/\.html$/, "");
	const section = /^\/kids/.test(path) ? "kids" : /^\/ireland/.test(path) ? "ireland" : /^\/daily/.test(path) ? "brain" : /^\/who-am-i/.test(path) ? "whoami" : /^\/ground-guesser/.test(path) ? "grounds" : /^\/pick-a-sport/.test(path) ? "sports" : path === "/" || path === "/index" ? "today" : /^\/(about|credits|settings|offline)/.test(path) ? "" : "more";
	const isKids = /^\/kids/.test(path);
	const giftPicks = !noads && !isKids ? picksFor(path) : null;
	const slotPage = path === "/" || /^\/(index|daily)(\.html)?$/.test(path);
	const nlBar = !isKids && !noads && /^\/(flashback\/|stories|on-this-day|round-up|gift-guide|sports\/|read)/.test(path);
	const showNl = !isKids && !noads && (!!shareItem || path === "/" || /^\/(index|read|this-week|flashback|on-this-day|round-up|tiktok)(\.html)?$/.test(path)) && !/^\/newsletter/.test(path);
	const SOCIAL = [
		["X", "https://x.com/_sportingbrain"],
		["Instagram", "https://www.instagram.com/_sportingbrain/"],
		["TikTok", "https://www.tiktok.com/@_sportingbrain"]
	];
	const ld = [{
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "SportingBrain",
		url: new URL(base, Astro.site).href,
		description: "The free daily sports hub for everyone who loves sport."
	}, {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "SportingBrain",
		url: new URL(base, Astro.site).href,
		logo: new URL(base + "assets/icon-512.png", Astro.site).href,
		sameAs: SOCIAL.map((x) => x[1])
	}];
	return renderTemplate`<html lang="en-GB"${addAttribute(base, "data-base")}><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${pageTitle}</title><meta name="description"${addAttribute(pageDesc, "content")}>${noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`}<link rel="canonical"${addAttribute(canonical, "href")}><meta property="og:type"${addAttribute(type, "content")}><meta property="og:site_name" content="SportingBrain"><meta property="og:locale" content="en_GB"><meta property="og:title"${addAttribute(pageTitle.replace(/ \| SportingBrain$/, ""), "content")}><meta property="og:description"${addAttribute(pageDesc, "content")}><meta property="og:image:alt"${addAttribute(pageTitle.replace(/ \| SportingBrain$/, ""), "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site" content="@_sportingbrain"><meta name="theme-color" content="#0F1E36"><link rel="preload"${addAttribute(big_shoulders_display_latin_900_normal_default, "href")} as="font" type="font/woff2" crossorigin><link rel="preload"${addAttribute(big_shoulders_display_latin_800_normal_default, "href")} as="font" type="font/woff2" crossorigin><link rel="preload"${addAttribute(source_serif_4_latin_opsz_normal_default, "href")} as="font" type="font/woff2" crossorigin><link rel="manifest"${addAttribute(`${base}manifest.webmanifest`, "href")}><link rel="apple-touch-icon"${addAttribute(`${base}assets/apple-touch-icon.png`, "href")}><link rel="icon"${addAttribute(`${base}assets/mark.svg`, "href")} type="image/svg+xml"><script type="application/ld+json">${unescapeHTML(JSON.stringify(crumbs ? [...ld, crumbs] : ld))}<\/script>${adsOn && !isGamePage && renderTemplate`<script async${addAttribute(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ads_default.client}`, "src")} crossorigin="anonymous"><\/script>`}${adsOn && isGamePage && renderTemplate`<script>(function(){${defineScriptVars({ adClient: ads_default.client })}window.SB_loadAds=function(){if(window.__sbAds)return;window.__sbAds=1;var s=document.createElement('script');s.async=true;s.crossOrigin='anonymous';s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+adClient;document.head.appendChild(s);};})();<\/script>`}${adsOn && renderTemplate`<script>window.SB_ADS=true;document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>document.querySelectorAll('ins.adsbygoogle:not([data-adsbygoogle-status])').forEach(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}}),50));<\/script>`}${analytics_default.goatcounter && !noads && renderTemplate`<script${addAttribute(`https://${analytics_default.goatcounter}.goatcounter.com/count`, "data-goatcounter")} async src="https://gc.zgo.at/count.js"><\/script>`}<script>(function(){var Q=[];window.sbTrack=function(n){if(window.goatcounter&&window.goatcounter.count){window.goatcounter.count({path:'event/'+n,title:n,event:true});}else{Q.push(n);}};
var t=setInterval(function(){if(window.goatcounter&&window.goatcounter.count){clearInterval(t);Q.splice(0).forEach(sbTrack);}},700);setTimeout(function(){clearInterval(t)},15000);
var sa=matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;if(sa){document.documentElement.classList.add('is-app');try{if(!sessionStorage.getItem('sb_appopen')){sessionStorage.setItem('sb_appopen','1');sbTrack('app-open');}}catch(e){}}
addEventListener('appinstalled',function(){sbTrack('app-installed');});
document.addEventListener('click',function(e){var a=e.target.closest('a,button');if(!a)return;var n=a.getAttribute('data-track');if(n){sbTrack(n);return;}
var h=a.getAttribute('href')||'';if(/amazon\\.co\\.uk/.test(h)){sbTrack('amazon-click'+location.pathname.replace(/\\.html$/,'').replace(/\\//g,'-'));return;}
var q=a.getAttribute('data-sq');if(q){sbTrack('share-'+q+location.pathname.replace(/\\.html$/,'').replace(/\\//g,'-'));return;}
if(a.hasAttribute('data-share-page')||a.hasAttribute('data-share-site')){sbTrack('share-header');}},true);})();<\/script><script>(function(){var H=document.documentElement,B=H.dataset.base||'/',dp=null,K='sb_appx',T=function(n){window.sbTrack&&sbTrack(n)};
var ua=navigator.userAgent,ios=/iPhone|iPad|iPod/.test(ua)||(/Macintosh/.test(ua)&&navigator.maxTouchPoints>1),sa=H.classList.contains('is-app');
function kids(){return !!document.querySelector('.kz')||/\\/kids/.test(location.pathname)}
function off(){try{return Date.now()<(+localStorage.getItem(K)||0)||localStorage.getItem('sb_appdone')==='1'}catch(e){return false}}
function snooze(d){try{localStorage.setItem(K,String(Date.now()+d*864e5))}catch(e){}}
function can(){return !sa&&!kids()&&!off()&&(dp||ios)}
function done(){try{localStorage.setItem('sb_appdone','1')}catch(e){}document.querySelectorAll('.appc,.appbar').forEach(function(x){x.remove()})}
function go(src){T('app-click-'+src);if(dp){var p=dp;dp=null;p.prompt();p.userChoice.then(function(r){T('app-'+r.outcome+'-'+src);if(r.outcome==='accepted')done();}).catch(function(){});return true;}if(ios){showIos();return true;}return false;}
function showIos(){var c=document.querySelector('.appc');if(c){c.querySelector('.appc-ios').hidden=false;var gb=c.querySelector('[data-app-go]');if(gb)gb.hidden=true;c.scrollIntoView({block:'center',behavior:'smooth'});return;}location.href=B+'app.html';}
var IOS='<p class="appc-ios" hidden>In Safari, tap the <b>Share</b> button <span aria-hidden="true">(the square with the arrow)</span>, scroll down and tap <b>Add to Home Screen</b>. Done.</p>';
function card(){return '<div class="appc" role="region" aria-label="Get the app"><img src="'+B+'assets/icon-192.png" alt="" width="52" height="52"><div class="appc-tx"><b>Tomorrow\\'s games, one tap away</b><p>Put SportingBrain on your home screen. Free, no sign-up, nothing to download.</p>'+IOS+'<div class="appc-btns"><button type="button" class="btn gold" data-app-go="after-game">'+(dp?'Add it to my home screen':'Show me how')+'</button><button type="button" class="linkbtn" data-app-x>Not now</button></div></div></div>';}
function fill(){if(!can())return;document.querySelectorAll('[data-app-card]').forEach(function(h){if(h.firstChild||document.querySelector('.appc'))return;h.innerHTML=card();T('app-card-shown');});}
function bar(){if(!can()||document.getElementById('appBar')||/\\/app(\\.html)?$/.test(location.pathname))return;var days=[];try{days=JSON.parse(localStorage.getItem('sb_days')||'[]');if(sessionStorage.getItem('sb_appbar'))return;}catch(e){}if(days.length<2)return;
var n=0,t=setTimeout(show,20000);function act(){if(++n>=3){clearTimeout(t);show();}}addEventListener('scroll',act,{passive:true});addEventListener('click',act);
function show(){removeEventListener('scroll',act);removeEventListener('click',act);if(!can()||document.querySelector('.appc')||document.querySelector('.welcome:not([hidden])'))return;try{sessionStorage.setItem('sb_appbar','1')}catch(e){}
var d=document.createElement('div');d.id='appBar';d.className='appbar';d.setAttribute('role','region');d.setAttribute('aria-label','Get the app');d.innerHTML='<img src="'+B+'assets/icon-192.png" alt="" width="36" height="36"><span><b>SportingBrain on your home screen</b><small>Free. One tap to today\\'s games.</small></span><button type="button" class="btn gold" data-app-go="bar">'+(dp?'Add it':'Show me')+'</button><button type="button" class="appbar-x" data-app-x aria-label="Close">×</button>';document.body.appendChild(d);T('app-bar-shown');}}
try{var dk=new Date().toISOString().slice(0,10),ds=JSON.parse(localStorage.getItem('sb_days')||'[]');if(ds[ds.length-1]!==dk){ds.push(dk);localStorage.setItem('sb_days',JSON.stringify(ds.slice(-10)));}}catch(e){}
addEventListener('beforeinstallprompt',function(e){e.preventDefault();dp=e;H.classList.add('can-install');fill();bar();});
addEventListener('appinstalled',done);
document.addEventListener('click',function(e){var g=e.target.closest('[data-app-go],[data-app-install]');if(g){if(go(g.dataset.appGo||g.dataset.appInstall))e.preventDefault();if(g.dataset.appGo==='bar'&&ios){var b=document.getElementById('appBar');b&&b.remove();location.href=B+'app.html';}return;}
var x=e.target.closest('[data-app-x]');if(x){snooze(30);T('app-dismiss');(x.closest('.appc')||x.closest('.appbar')).remove();}});
new MutationObserver(function(){if(document.querySelector('[data-app-card]:empty'))fill();}).observe(document.body||H,{childList:true,subtree:true});
if(ios){document.addEventListener('DOMContentLoaded',function(){fill();bar();});}})();<\/script><script>if('serviceWorker' in navigator&&location.protocol==='https:')addEventListener('load',()=>navigator.serviceWorker.register(document.documentElement.dataset.base+'sw.js').catch(()=>{}));<\/script>${renderHead($$result)}</head><body><a class="skip" href="#main">Skip to content</a><header class="top"><div class="wrap"><a class="wordmark"${addAttribute(base, "href")}><span class="mark" aria-hidden="true">SB</span><span>SportingBrain</span></a><nav class="sb-tabs" aria-label="Main">${nav.filter(([, , k]) => !(k === "gifts" && (isKids || noads))).map(([t, h, k]) => renderTemplate`<a${addAttribute(h, "href")}${addAttribute(k === "gifts" ? "tab-gifts" : void 0, "class")}${addAttribute(section === k ? "page" : void 0, "aria-current")}>${t}</a>`)}</nav><div class="hdr-right">${shareItem ? renderTemplate`<button class="iconbtn hdr-share" data-share-page aria-label="Share this page">Share</button>` : renderTemplate`<button class="iconbtn hdr-share" data-share-site aria-label="Share SportingBrain">Share</button>`}${!isKids && renderTemplate`<a class="iconbtn hdr-app"${addAttribute(`${base}app.html`, "href")} data-app-install="header">App</a>`}${!isKids && renderTemplate`<a class="iconbtn hdr-team"${addAttribute(`${base}colours.html`, "href")} aria-label="Pick your team" data-track="colours-header"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><defs><clipPath id="ycShirt"><path d="M8 3l-5 3 2 4 2-1v12h10V9l2 1 2-4-5-3c-.6 1.6-2.2 2.6-4 2.6S8.6 4.6 8 3z"></path></clipPath></defs><g clip-path="url(#ycShirt)" id="ycShirtFill"><rect width="24" height="24" fill="none"></rect></g><path d="M8 3l-5 3 2 4 2-1v12h10V9l2 1 2-4-5-3c-.6 1.6-2.2 2.6-4 2.6S8.6 4.6 8 3z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path></svg><span class="hdr-team-t">Team</span></a>`}<button class="iconbtn hdr-dark" data-dark aria-label="Switch dark mode">Dark</button></div></div></header>${!isKids && renderTemplate`<div id="ycStrip" class="yc-strip" hidden></div>`}${!isKids && renderTemplate`<script>(function(){try{var c=JSON.parse(localStorage.getItem('sb_colours')||'null'),ie=/\\/ireland(\\/|\\.html|$)/.test(location.pathname),k=c?(ie?(c.colmap&&(c.picks&&c.picks.ie?c.colmap.ie:c.colmap.gaa))||[]:c.cols||[]):[],s=document.getElementById('ycStrip');if(!s||!k.length)return;s.style.background='linear-gradient(90deg,'+k.map(function(h,i){return h+' '+(i*100/k.length)+'% '+((i+1)*100/k.length)+'%'}).join(',')+')';s.hidden=false;var g=document.getElementById('ycShirtFill');if(g){g.innerHTML=k.map(function(h,i){return '<rect x="'+(i*24/k.length)+'" y="0" width="'+(24/k.length+.2)+'" height="24" fill="'+h+'"/>'}).join('');var b=g.closest('a');b.classList.add('has-team');var nm=ie?(c.picks&&(c.picks.ie||c.picks.gaa)):(c.picks&&c.picks[c.badge]);b.setAttribute('aria-label','Your team: '+(nm||'')+'. Change it');if(ie)b.href=(document.documentElement.dataset.base||'/')+'ireland.html#ieCounty';}}catch(e){}})();<\/script>`}${renderScript($$result, "/home/claude/sportingbrain/source/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")}${shareItem && renderTemplate`<div${addAttribute(["wrap sq-top sq-btns", { wide }], "class:list")}${addAttribute(shareItem[0], "data-sq-title")}${addAttribute(`${shareItem[0]} on SportingBrain. ${shareItem[1]} Free to play.`, "data-sq-text")}${addAttribute(canonical, "data-sq-url")}><span class="sq-top-l">${/gift-guide/.test(path) ? "Share this guide" : "Share this game"}</span><a class="sqt wa" data-sq="whatsapp" target="_blank" rel="noopener" aria-label="Share on WhatsApp"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2s.2-1.1.1-1.2l-.4-.2z"></path></svg><span>WhatsApp</span></a><a class="sqt" data-sq="x" target="_blank" rel="noopener" aria-label="Share on X"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z"></path></svg><span class="vh">X</span></a><a class="sqt" data-sq="facebook" target="_blank" rel="noopener" aria-label="Share on Facebook"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M14 8V6.3c0-.8.2-1.3 1.4-1.3H17V2h-2.6C11.3 2 10 3.7 10 6.2V8H8v3h2v11h4V11h2.7l.4-3H14z"></path></svg><span class="vh">Facebook</span></a><button type="button" class="sqt" data-sq="copy">Copy link</button><button type="button" class="sqt nat" data-sq="native" hidden>More</button></div>`}<main${addAttribute(["wrap", {
		wide,
		jsdraw: !!(S.h1 && page),
		"is-game": PLAY.some((x) => "/" + x[0] === path.replace(/\.html$/, ""))
	}], "class:list")}${addAttribute(page, "data-page")} id="main">${S.h1 && page && renderTemplate`<div class="crawl"><h1>${S.h1}</h1>${S.intro && renderTemplate`<p class="teaser">${S.intro}</p>`}</div>`}${renderSlot($$result, $$slots["default"])}</main>${showNl && !slotPage && renderTemplate`<aside${addAttribute(["wrap nl-box", { wide }], "class:list")} aria-labelledby="nlb-h"><div class="nlb-copy"><h2 id="nlb-h">The Weekly Brain</h2><p>${/^\/ireland/.test(path) ? "Every Friday: the week's five hardest questions plus an Irish section, with the Irish question of the week and the Irish sports book. Free." : "The week's five hardest questions, the best Call It moment and a forgotten story. Every Friday. Free."}</p></div><form class="nlb-form" data-nl novalidate><label class="vh" for="nlb-e">Email address</label><input id="nlb-e" type="email" name="EMAIL" autocomplete="email" placeholder="Your email address" required><input type="text" name="email_address_check" value="" tabindex="-1" autocomplete="off" class="vh" aria-hidden="true"><button type="submit" class="btn gold">Send me the Weekly Brain</button><p class="nlb-msg" role="status"></p></form><p class="nlb-small">We'll email a link to confirm. Unsubscribe in one click. 13 or over only. <a${addAttribute(`${base}about.html`, "href")}>Privacy</a></p></aside>`}${showNl && slotPage && renderTemplate`<template id="nl-tpl">${templateEnter($$result)}<aside class="nl-box in-slot" aria-label="The Weekly Brain newsletter"><div class="nlb-copy"><h2>The Weekly Brain</h2><p>${/^\/ireland/.test(path) ? "Every Friday: the week's five hardest questions plus an Irish section, with the Irish question of the week and the Irish sports book. Free." : "The week's five hardest questions, the best Call It moment and a forgotten story. Every Friday. Free."}</p></div><form class="nlb-form" data-nl novalidate><label class="vh">Email address</label><input type="email" name="EMAIL" autocomplete="email" placeholder="Your email address" required><input type="text" name="email_address_check" value="" tabindex="-1" autocomplete="off" class="vh" aria-hidden="true"><button type="submit" class="btn gold">Send me the Weekly Brain</button><p class="nlb-msg" role="status"></p></form><p class="nlb-small">We'll email a link to confirm. Unsubscribe in one click. 13 or over only. <a${addAttribute(`${base}about.html`, "href")}>Privacy</a></p></aside>${templateExit($$result)}</template>`}${shareItem && renderTemplate`<section class="wrap share-quiz" aria-labelledby="sq-h"><h2 id="sq-h">${/^\/gift-guide/.test(path) ? "Share this guide" : "Share this quiz"}</h2><p class="sq-what"><b>${/[?!]$/.test(shareItem[0]) ? shareItem[0] : shareItem[0] + "."}</b> ${shareItem[1]}</p><div class="sq-btns"${addAttribute(shareItem[0], "data-sq-title")}${addAttribute(`${shareItem[0]} on SportingBrain. ${shareItem[1]} Free to play.`, "data-sq-text")}${addAttribute(canonical, "data-sq-url")}><button type="button" class="btn" data-sq="native">Share</button><a class="btn ghost" data-sq="whatsapp" target="_blank" rel="noopener">WhatsApp</a><a class="btn ghost" data-sq="x" target="_blank" rel="noopener">X</a><a class="btn ghost" data-sq="facebook" target="_blank" rel="noopener">Facebook</a><button type="button" class="btn ghost" data-sq="copy">Copy link</button></div></section>`}${giftPicks && renderTemplate`<aside class="wrap gift-strip" aria-labelledby="gs-h"><div class="gs-head"><h2 id="gs-h">Gift ideas for sports fans</h2><a${addAttribute(`${base}gift-guide.html`, "href")}>See the full gift guide</a></div><ul>${giftPicks.map(([n, q, why]) => renderTemplate`<li><a${addAttribute(amz(q), "href")} target="_blank" rel="sponsored nofollow noopener"><b>${n}</b><span>${why}</span><em>See on Amazon</em></a></li>`)}</ul><p class="aff-note">As an Amazon Associate SportingBrain earns from qualifying purchases.</p></aside>`}<script>document.querySelectorAll('.sq-btns').forEach(function(b){var t=b.dataset.sqText,u=b.dataset.sqUrl,e=encodeURIComponent;
b.querySelector('[data-sq=whatsapp]').href='https://wa.me/?text='+e(t+' '+u);
b.querySelector('[data-sq=x]').href='https://twitter.com/intent/tweet?text='+e(t)+'&url='+e(u)+'&via=_sportingbrain';
b.querySelector('[data-sq=facebook]').href='https://www.facebook.com/sharer/sharer.php?u='+e(u);
var n=b.querySelector('[data-sq=native]');n.hidden=!navigator.share;n.onclick=function(){navigator.share({title:b.dataset.sqTitle,text:t,url:u}).catch(function(){});};
var c=b.querySelector('[data-sq=copy]');c.onclick=function(){(navigator.clipboard?navigator.clipboard.writeText(t+' '+u):Promise.reject()).then(function(){c.textContent='Link copied';setTimeout(function(){c.textContent='Copy link'},2000);}).catch(function(){prompt('Copy this link',u);});};});<\/script><script>document.addEventListener('click',function(e){var h=e.target.closest('[data-share-page]');if(!h)return;var b=document.querySelector('.sq-btns');if(!b)return;var t=b.dataset.sqText,u=b.dataset.sqUrl;if(navigator.share){navigator.share({title:b.dataset.sqTitle,text:t,url:u}).catch(function(){});}else{b.scrollIntoView({behavior:'smooth',block:'center'});b.classList.add('flash');setTimeout(function(){b.classList.remove('flash')},1200);}});<\/script><script>(function(){var U="https://fd11700d.sibforms.com/serve/MUIFAJgc5cpazbaWaJl9ZiHpHSD-40XnqFF738oUI36WSx8rYGXYaeD9z6J4v_hluWowR4_0EjsO3rVU3FJuniGjsoSow49NsUtDmeLWB6imCGPl6PCBIjMG77DvLdc_taLVpH1CkquGbgmqOnbyojSMcv7szn-aQK3GYDiDFLkkvPr5cblu-FuTcBGcPr9wQRxj1Q8E0Y_imJZ4eg==";function isIn(){try{return localStorage.getItem('sb_nl')==='1'}catch(e){return false}}
function fill(){var t=document.getElementById('nl-tpl');if(t)document.querySelectorAll('[data-nl-slot]:empty').forEach(function(s){s.appendChild(t.content.cloneNode(true));});if(isIn())document.querySelectorAll('.nl-box').forEach(function(b){b.classList.add('is-in')});}
fill();new MutationObserver(fill).observe(document.getElementById('main')||document.body,{childList:true,subtree:true});
document.addEventListener('submit',function(e){var f=e.target;if(!f.matches||!f.matches('form[data-nl]'))return;e.preventDefault();var m=f.querySelector('.nlb-msg'),i=f.querySelector('input[type=email]'),b=f.querySelector('button');var v=(i.value||'').trim();
if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(v)){m.textContent='Please enter a full email address, like name@example.com.';i.focus();return;}
var hp=f.querySelector('[name=email_address_check]');if(hp&&hp.value)return;b.disabled=true;b.textContent='Joining';
var d=new URLSearchParams();d.append('EMAIL',v);d.append('email_address_check','');d.append('locale','en');
fetch(U+(U.indexOf('?')>-1?'&':'?')+'isAjax=1',{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:d.toString()}).then(function(){f.classList.add('ok');m.textContent='Nearly there. Check your inbox and click the link in our email to confirm. It can take a minute, and may land in junk.';try{localStorage.setItem('sb_nl','1')}catch(e){}if(window.sbTrack)sbTrack('newsletter-signup');}).catch(function(){b.disabled=false;b.textContent='Send me the Weekly Brain';m.innerHTML='That didn\\'t go through. <a href="'+U+'" target="_blank" rel="noopener">Sign up here instead</a>.';});});})();<\/script>${nlBar && renderTemplate`<div class="nl-bar" id="nlBar" hidden role="region" aria-label="Newsletter"><span><b>The Weekly Brain.</b> The week's five hardest questions, every Friday. Free.</span><a class="btn gold"${addAttribute(`${base}newsletter.html`, "href")} data-track="nl-bar-click">Send it to me</a><button type="button" class="nl-bar-x" aria-label="Close">×</button></div><script>(function(){var b=document.getElementById('nlBar');if(!b)return;try{if(localStorage.getItem('sb_nl')==='1'||sessionStorage.getItem('sb_nlbar_x'))return;}catch(e){}
var shown=false;function pos(){var h=document.querySelector('header.top');b.style.top=(h?Math.max(0,h.getBoundingClientRect().bottom):0)+'px';}
function chk(){var d=document.documentElement,p=(scrollY+innerHeight)/d.scrollHeight;if(!shown&&p>0.4){shown=true;b.hidden=false;pos();if(window.sbTrack)sbTrack('nl-bar-shown');}if(shown)pos();}
addEventListener('scroll',chk,{passive:true});addEventListener('resize',function(){if(shown)pos();});
b.querySelector('.nl-bar-x').onclick=function(){b.hidden=true;removeEventListener('scroll',chk);try{sessionStorage.setItem('sb_nlbar_x','1')}catch(e){}};})();<\/script>`}<footer class="site-foot"><div class="wrap wide foot-grid"><div><a class="wordmark"${addAttribute(base, "href")}><span class="mark" aria-hidden="true">SB</span><span>SportingBrain</span></a><p>The smartest free sports site in the world. Real matches, real data, stories nobody else tells. No betting, ever.</p></div><div><h2>Play</h2><a${addAttribute(`${base}play.html`, "href")}>All games</a><a${addAttribute(`${base}pub-quiz.html`, "href")}>Pub and Club Quiz</a><a${addAttribute(`${base}weekly-expert.html`, "href")}>Weekly Expert</a><a${addAttribute(`${base}call-it.html`, "href")}>Call It</a><a${addAttribute(`${base}daily.html`, "href")}>Beat the Brain</a><a${addAttribute(`${base}higher-or-lower.html`, "href")}>Higher or Lower</a><a${addAttribute(`${base}connections.html`, "href")}>Connections</a><a${addAttribute(`${base}challenge.html?c=family`, "href")}>Family challenge</a><a${addAttribute(`${base}kids.html`, "href")}>Kids Zone</a></div><div><h2>Read</h2><a${addAttribute(`${base}this-week.html`, "href")}>This Week's Quiz</a><a${addAttribute(`${base}flashback.html`, "href")}>Flashback</a><a${addAttribute(`${base}on-this-day.html`, "href")}>On This Day</a><a${addAttribute(`${base}replays.html`, "href")}>Replays</a><a${addAttribute(`${base}sports.html`, "href")}>Sport guides</a><a${addAttribute(`${base}round-up.html`, "href")}>The Cynical Round-Up</a>${!noads && renderTemplate`<a${addAttribute(`${base}gift-guide.html`, "href")}>Sports gift guide</a>`}</div><div><h2>SportingBrain</h2><a${addAttribute(`${base}newsletter.html`, "href")}>The Weekly Brain newsletter</a><a${addAttribute(`${base}app.html`, "href")}>Get the app</a><a${addAttribute(`${base}about.html`, "href")}>About and privacy</a><a href="#" data-welcome>What is SportingBrain?</a><a href="#" data-dys>Dyslexia-friendly font</a><a${addAttribute(`${base}colours.html`, "href")}>Your Colours: pick your team</a><a${addAttribute(`${base}settings.html`, "href")}>Your settings</a><a${addAttribute(`${base}credits.html`, "href")}>Photo credits</a><a href="https://tally.so/r/zE7LVZ" data-mistake target="_blank" rel="noopener">Spotted a mistake? Tell us</a></div><div><h2>Follow</h2>${SOCIAL.map(([n, u]) => renderTemplate`<a${addAttribute(u, "href")} target="_blank" rel="noopener me">${n} @_sportingbrain</a>`)}</div></div><div class="wrap wide foot-small"><p>Photos from Wikimedia Commons, credited on each page and on the Photo credits page. Cricket data from Cricsheet (Open Data Commons Attribution License). Facts checked against the sources listed on every article.</p></div></footer>${renderScript($$result, "/home/claude/sportingbrain/source/src/layouts/Base.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "/home/claude/sportingbrain/source/src/layouts/Base.astro", void 0);
export { createAstro as a, amz as i, GROUPS as n, PLAY as r, $$Base as t };
