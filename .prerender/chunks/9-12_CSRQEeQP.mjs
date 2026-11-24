import { t as __exportAll } from "./rolldown-runtime_D8jQpDG7.mjs";
import { S as unescapeHTML, c as renderComponent, h as maybeRenderHead, m as renderTemplate } from "./server_-BCFLE-H.mjs";
import { t as createComponent } from "./compiler_CVFqGt4m.mjs";
import { t as renderScript } from "./editorial_yLEYGdBR.mjs";
import { t as $$Kids } from "./Kids_z8uMn17N.mjs";
import { t as KIDS } from "./kids_CZXCgZbO.mjs";
// src/data/bank.js
var BANK = [
	[
		1,
		"Football",
		"Which country won the first men's FIFA World Cup, in 1930?",
		[
			"Uruguay",
			"Brazil",
			"Italy",
			"Argentina"
		],
		0,
		"Uruguay hosted and won it, beating Argentina 4-2 in the final in Montevideo."
	],
	[
		1,
		"Football",
		"Who captained England's women to the Euro 2022 title?",
		[
			"Leah Williamson",
			"Millie Bright",
			"Steph Houghton",
			"Lucy Bronze"
		],
		0,
		"Williamson lifted the trophy at Wembley after the 2-1 extra-time win over Germany."
	],
	[
		1,
		"Cricket",
		"How many balls are there in a standard over?",
		[
			"Six",
			"Five",
			"Eight",
			"Four"
		],
		0,
		"Eight-ball overs were used in Australia and elsewhere until 1979-80; six is now universal."
	],
	[
		1,
		"Tennis",
		"On what surface is the French Open played?",
		[
			"Clay",
			"Grass",
			"Hard court",
			"Carpet"
		],
		0,
		"Roland Garros is the only Grand Slam played on red clay."
	],
	[
		1,
		"Athletics",
		"Usain Bolt's 100m world record is 9.58 seconds. In which city did he set it?",
		[
			"Berlin",
			"Beijing",
			"London",
			"Osaka"
		],
		0,
		"He ran 9.58 at the 2009 World Championships in Berlin."
	],
	[
		1,
		"Formula 1",
		"Which team has won the most Formula 1 constructors' championships?",
		[
			"Ferrari",
			"McLaren",
			"Williams",
			"Mercedes"
		],
		0,
		"Ferrari have more constructors' titles than any other team."
	],
	[
		1,
		"Rugby union",
		"How many points is a try worth in rugby union?",
		[
			"Five",
			"Four",
			"Three",
			"Six"
		],
		0,
		"It went from four to five points in 1992."
	],
	[
		1,
		"Golf",
		"Which golf major is always played at Augusta National?",
		[
			"The Masters",
			"The Open",
			"US Open",
			"US PGA"
		],
		0,
		"The Masters is the only major played at the same course every year."
	],
	[
		1,
		"Football",
		"Which club did Alex Ferguson manage immediately before Manchester United?",
		[
			"Aberdeen",
			"Celtic",
			"Rangers",
			"St Mirren"
		],
		0,
		"He won the Cup Winners' Cup with Aberdeen in 1983, beating Real Madrid in the final."
	],
	[
		1,
		"Netball",
		"How many players does a netball team have on court?",
		[
			"Seven",
			"Six",
			"Five",
			"Eight"
		],
		0,
		"Seven positions, each restricted to certain areas of the court."
	],
	[
		1,
		"Cricket",
		"In which city is Lord's cricket ground?",
		[
			"London",
			"Manchester",
			"Birmingham",
			"Leeds"
		],
		0,
		"Lord's, in St John's Wood, is the home of MCC and Middlesex."
	],
	[
		1,
		"Tennis",
		"Who won Wimbledon in 2013, ending a 77-year wait for a British men's singles champion?",
		[
			"Andy Murray",
			"Tim Henman",
			"Greg Rusedski",
			"Cameron Norrie"
		],
		0,
		"Fred Perry, in 1936, had been the last British man to win it."
	],
	[
		1,
		"Snooker",
		"What is the maximum break in standard snooker?",
		[
			"147",
			"155",
			"140",
			"150"
		],
		0,
		"15 reds with 15 blacks, then the six colours: 147."
	],
	[
		1,
		"Darts",
		"What is the highest possible checkout in darts?",
		[
			"170",
			"180",
			"167",
			"160"
		],
		0,
		"Treble 20, treble 20, bullseye: the \"big fish\"."
	],
	[
		1,
		"Athletics",
		"Which British athlete won heptathlon gold at London 2012?",
		[
			"Jessica Ennis",
			"Katarina Johnson-Thompson",
			"Denise Lewis",
			"Kelly Sotherton"
		],
		0,
		"Ennis won on the evening that became known as Super Saturday."
	],
	[
		1,
		"Football",
		"Which club won the Premier League in 2015-16 at odds of 5000-1?",
		[
			"Leicester City",
			"Tottenham Hotspur",
			"Arsenal",
			"Southampton"
		],
		0,
		"Claudio Ranieri's side finished ten points clear."
	],
	[
		1,
		"Rugby union",
		"Which country won the men's Rugby World Cup in both 2019 and 2023?",
		[
			"South Africa",
			"New Zealand",
			"England",
			"France"
		],
		0,
		"South Africa have now won four men's titles: 1995, 2007, 2019 and 2023."
	],
	[
		1,
		"Formula 1",
		"Who shares the record of seven F1 drivers' titles with Michael Schumacher?",
		[
			"Lewis Hamilton",
			"Sebastian Vettel",
			"Max Verstappen",
			"Ayrton Senna"
		],
		0,
		"Hamilton and Schumacher each won seven drivers' titles."
	],
	[
		1,
		"Cricket",
		"Which country won the 2017 Women's Cricket World Cup final at Lord's?",
		[
			"England",
			"India",
			"Australia",
			"New Zealand"
		],
		0,
		"England beat India by nine runs at Lord's."
	],
	[
		1,
		"Swimming",
		"How many Olympic gold medals did Michael Phelps win?",
		[
			"23",
			"18",
			"21",
			"28"
		],
		0,
		"23 golds and 28 medals in total, both records."
	],
	[
		1,
		"Boxing",
		"Muhammad Ali's 1974 fight with George Foreman in Kinshasa is known as what?",
		[
			"The Rumble in the Jungle",
			"The Thrilla in Manila",
			"The Fight of the Century",
			"The Brawl in Zaire"
		],
		0,
		"Ali used the \"rope-a-dope\" and knocked Foreman out in the eighth."
	],
	[
		1,
		"Football",
		"Which Spanish club has won the most European Cups and Champions Leagues?",
		[
			"Real Madrid",
			"Barcelona",
			"Atlético Madrid",
			"Sevilla"
		],
		0,
		"Real Madrid won the first five European Cups, from 1956 to 1960."
	],
	[
		1,
		"Tennis",
		"Serena Williams won how many Grand Slam singles titles?",
		[
			"23",
			"22",
			"24",
			"20"
		],
		0,
		"One short of Margaret Court's record of 24."
	],
	[
		1,
		"Cycling",
		"The leader of the Tour de France wears which colour jersey?",
		[
			"Yellow",
			"Green",
			"Pink",
			"Red"
		],
		0,
		"Yellow, the colour of the paper L'Auto, which founded the race in 1903."
	],
	[
		1,
		"Horse racing",
		"Which horse won the Grand National three times in the 1970s?",
		[
			"Red Rum",
			"Aldaniti",
			"L'Escargot",
			"Crisp"
		],
		0,
		"Red Rum won in 1973, 1974 and 1977, and was second in 1975 and 1976."
	],
	[
		1,
		"Golf",
		"Which side do Rory McIlroy and Shane Lowry play for in the Ryder Cup?",
		[
			"Europe",
			"Ireland",
			"Great Britain",
			"Northern Ireland"
		],
		0,
		"The Ryder Cup is USA against Europe."
	],
	[
		1,
		"Football",
		"Which England player scored a hat-trick in the 1966 World Cup final?",
		[
			"Geoff Hurst",
			"Bobby Charlton",
			"Roger Hunt",
			"Martin Peters"
		],
		0,
		"He was the first man to score a hat-trick in a men's World Cup final; Kylian Mbappé matched it in 2022."
	],
	[
		1,
		"Athletics",
		"In 2023 Faith Kipyegon set world records at 1500m, 5000m and which other distance?",
		[
			"The mile",
			"800m",
			"3000m steeplechase",
			"10,000m"
		],
		0,
		"Three world records in about seven weeks."
	],
	[
		1,
		"Cricket",
		"What does \"LBW\" stand for?",
		[
			"Leg before wicket",
			"Leg behind wicket",
			"Line between wickets",
			"Long ball wide"
		],
		0,
		"One of the ways a batter can be dismissed."
	],
	[
		1,
		"Rugby league",
		"How many players does a rugby league team field?",
		[
			"13",
			"15",
			"11",
			"12"
		],
		0,
		"Rugby union has 15; league dropped to 13 in 1906."
	],
	[
		1,
		"Football",
		"Which country won the 2023 Women's World Cup?",
		[
			"Spain",
			"England",
			"Sweden",
			"USA"
		],
		0,
		"Spain beat England 1-0 in Sydney; Olga Carmona scored."
	],
	[
		1,
		"American football",
		"What is the championship game of the NFL called?",
		[
			"Super Bowl",
			"Grand Final",
			"World Series",
			"Stanley Cup"
		],
		0,
		"First played in January 1967."
	],
	[
		1,
		"Basketball",
		"How many points is a shot from beyond the arc worth?",
		[
			"Three",
			"Two",
			"Four",
			"One"
		],
		0,
		"The NBA adopted the three-point line in 1979-80."
	],
	[
		1,
		"Ice hockey",
		"What trophy is awarded to the NHL champions?",
		[
			"Stanley Cup",
			"Grey Cup",
			"Calder Cup",
			"Commissioner's Trophy"
		],
		0,
		"Donated in 1892, it is the oldest trophy in North American professional sport."
	],
	[
		1,
		"Tennis",
		"Which tournament is played at Flushing Meadows?",
		[
			"US Open",
			"Australian Open",
			"Indian Wells",
			"Miami Open"
		],
		0,
		"The US Open moved there from Forest Hills in 1978."
	],
	[
		1,
		"Football",
		"Lionel Messi won the World Cup with Argentina in which year?",
		[
			"2022",
			"2014",
			"2018",
			"2010"
		],
		0,
		"Argentina beat France on penalties after a 3-3 draw in Qatar."
	],
	[
		1,
		"Athletics",
		"Which event did Mo Farah win at both the 2012 and 2016 Olympics, along with the 5000m?",
		[
			"10,000m",
			"Marathon",
			"3000m steeplechase",
			"1500m"
		],
		0,
		"He did the 5000m and 10,000m double at both Games."
	],
	[
		1,
		"Cricket",
		"How many runs is it when the ball crosses the boundary without bouncing?",
		[
			"Six",
			"Four",
			"Five",
			"Eight"
		],
		0,
		"Bouncing first makes it four."
	],
	[
		1,
		"Golf",
		"In golf, what is a score of one under par on a hole called?",
		[
			"Birdie",
			"Eagle",
			"Bogey",
			"Albatross"
		],
		0,
		"Two under is an eagle, three under an albatross."
	],
	[
		1,
		"Rugby union",
		"Which nations compete in the Six Nations?",
		[
			"England, France, Ireland, Italy, Scotland, Wales",
			"England, France, Ireland, Scotland, Wales, Georgia",
			"England, France, Ireland, Italy, Scotland, Spain",
			"England, Ireland, Italy, Scotland, Wales, Argentina"
		],
		0,
		"Italy joined in 2000 to turn the Five Nations into the Six."
	],
	[
		2,
		"Football",
		"Who scored the winning goal for England in the Euro 2022 final?",
		[
			"Chloe Kelly",
			"Ella Toone",
			"Alessia Russo",
			"Beth Mead"
		],
		0,
		"Kelly scrambled it home in the 110th minute and celebrated by swinging her shirt above her head."
	],
	[
		2,
		"Cricket",
		"Who took 6 for 46 to win the 2017 Women's World Cup final for England?",
		[
			"Anya Shrubsole",
			"Katherine Brunt",
			"Sophie Ecclestone",
			"Alex Hartley"
		],
		0,
		"India lost their last seven wickets for 28 runs."
	],
	[
		2,
		"Tennis",
		"Who won the \"Golden Slam\" in 1988: all four majors plus Olympic gold?",
		[
			"Steffi Graf",
			"Martina Navratilova",
			"Chris Evert",
			"Gabriela Sabatini"
		],
		0,
		"She beat Sabatini in the Olympic final in Seoul."
	],
	[
		2,
		"Athletics",
		"Who broke the women's 400m hurdles world record several times between 2021 and 2024, going under 51 seconds?",
		[
			"Sydney McLaughlin-Levrone",
			"Femke Bol",
			"Dalilah Muhammad",
			"Sally Gunnell"
		],
		0,
		"She took it to 50.37 at the Paris Olympics."
	],
	[
		2,
		"Formula 1",
		"At which circuit is the Belgian Grand Prix held?",
		[
			"Spa-Francorchamps",
			"Zolder",
			"Zandvoort",
			"Nivelles"
		],
		0,
		"Home of Eau Rouge and Raidillon."
	],
	[
		2,
		"Football",
		"Which club won the first Women's Super League title, in 2011?",
		[
			"Arsenal",
			"Chelsea",
			"Birmingham City",
			"Everton"
		],
		0,
		"Arsenal won the first two WSL titles, in 2011 and 2012."
	],
	[
		2,
		"Rugby union",
		"Who scored the drop goal that won the 2003 Rugby World Cup final?",
		[
			"Jonny Wilkinson",
			"Mike Catt",
			"Paul Grayson",
			"Matt Dawson"
		],
		0,
		"With his weaker right foot, 26 seconds from the end of extra time."
	],
	[
		2,
		"Cricket",
		"Who was the first batter to score 400 in a Test innings?",
		[
			"Brian Lara",
			"Matthew Hayden",
			"Garfield Sobers",
			"Don Bradman"
		],
		0,
		"Lara made 400 not out against England in Antigua in 2004."
	],
	[
		2,
		"Golf",
		"How many majors did Jack Nicklaus win?",
		[
			"18",
			"14",
			"15",
			"20"
		],
		0,
		"Tiger Woods is second on 15."
	],
	[
		2,
		"Football",
		"Which team won the first men's European Championship, in 1960?",
		[
			"Soviet Union",
			"Spain",
			"Yugoslavia",
			"France"
		],
		0,
		"They beat Yugoslavia 2-1 after extra time in Paris; Lev Yashin was in goal."
	],
	[
		2,
		"Cycling",
		"Which British rider won the Tour de France in 2012, the first Briton to do so?",
		[
			"Bradley Wiggins",
			"Chris Froome",
			"Mark Cavendish",
			"Geraint Thomas"
		],
		0,
		"Froome finished second that year."
	],
	[
		2,
		"Tennis",
		"Who did Billie Jean King beat in the 1973 \"Battle of the Sexes\"?",
		[
			"Bobby Riggs",
			"Jimmy Connors",
			"Rod Laver",
			"Arthur Ashe"
		],
		0,
		"In straight sets, in front of more than 30,000 at the Houston Astrodome."
	],
	[
		2,
		"Athletics",
		"Which athlete won Olympic gold in the 10,000m at both 1992 and 2000?",
		[
			"Derartu Tulu",
			"Tirunesh Dibaba",
			"Paula Radcliffe",
			"Sonia O'Sullivan"
		],
		0,
		"Tirunesh Dibaba (2008, 2012) is the only other woman to win it twice."
	],
	[
		2,
		"Snooker",
		"Who has won the most World Championships in the Crucible era?",
		[
			"Ronnie O'Sullivan and Stephen Hendry, seven each",
			"Steve Davis",
			"John Higgins",
			"Ray Reardon"
		],
		0,
		"O'Sullivan equalled Hendry's seven Crucible titles in 2022."
	],
	[
		2,
		"Football",
		"Who managed Arsenal's \"Invincibles\" in 2003-04?",
		[
			"Arsène Wenger",
			"George Graham",
			"Bruce Rioch",
			"Unai Emery"
		],
		0,
		"Played 38, won 26, drawn 12, lost none."
	],
	[
		2,
		"Cricket",
		"Which country won the first men's T20 World Cup, in 2007?",
		[
			"India",
			"Pakistan",
			"Australia",
			"Sri Lanka"
		],
		0,
		"They beat Pakistan by five runs in Johannesburg."
	],
	[
		2,
		"Rugby union",
		"Which country won the first women's Rugby World Cup, in 1991?",
		[
			"United States",
			"England",
			"New Zealand",
			"France"
		],
		0,
		"The USA beat England 19-6 in Cardiff."
	],
	[
		2,
		"Formula 1",
		"Who won Formula 1's 1,000th World Championship race, the 2019 Chinese Grand Prix?",
		[
			"Lewis Hamilton",
			"Sebastian Vettel",
			"Valtteri Bottas",
			"Max Verstappen"
		],
		0,
		"Hamilton led a Mercedes one-two."
	],
	[
		2,
		"Basketball",
		"Which player scored 100 points in an NBA game in 1962?",
		[
			"Wilt Chamberlain",
			"Bill Russell",
			"Elgin Baylor",
			"Jerry West"
		],
		0,
		"Chamberlain's Philadelphia Warriors beat the Knicks 169-147."
	],
	[
		2,
		"Football",
		"Which Scottish club won the European Cup in 1967?",
		[
			"Celtic",
			"Rangers",
			"Aberdeen",
			"Hearts"
		],
		0,
		"The \"Lisbon Lions\", every player born within about 30 miles of Celtic Park."
	],
	[
		2,
		"Netball",
		"Which country won the 2019 Netball World Cup in Liverpool?",
		[
			"New Zealand",
			"Australia",
			"England",
			"Jamaica"
		],
		0,
		"New Zealand beat Australia 52-51 in the final."
	],
	[
		2,
		"Tennis",
		"Who won the 2021 US Open as a qualifier?",
		[
			"Emma Raducanu",
			"Leylah Fernandez",
			"Coco Gauff",
			"Iga Swiatek"
		],
		0,
		"She won ten matches without dropping a set."
	],
	[
		2,
		"Darts",
		"Who won 16 world titles across the BDO and PDC?",
		[
			"Phil Taylor",
			"Raymond van Barneveld",
			"Eric Bristow",
			"Michael van Gerwen"
		],
		0,
		"Two BDO titles and 14 PDC titles."
	],
	[
		2,
		"Football",
		"Who is the all-time top scorer in Women's World Cup finals tournaments?",
		[
			"Marta",
			"Abby Wambach",
			"Birgit Prinz",
			"Christine Sinclair"
		],
		0,
		"Marta has 17 goals in World Cup finals."
	],
	[
		2,
		"Cricket",
		"What is the name of the trophy contested by India and Australia in Tests?",
		[
			"Border-Gavaskar Trophy",
			"Frank Worrell Trophy",
			"Wisden Trophy",
			"Pataudi Trophy"
		],
		0,
		"Named after Allan Border and Sunil Gavaskar."
	],
	[
		2,
		"Golf",
		"Which European captained the 2012 Ryder Cup \"Miracle at Medinah\"?",
		[
			"José María Olazábal",
			"Darren Clarke",
			"Colin Montgomerie",
			"Paul McGinley"
		],
		0,
		"Europe came from 10-6 down on the final day."
	],
	[
		2,
		"Rugby league",
		"Which club has won the most Challenge Cups?",
		[
			"Wigan",
			"Leeds",
			"St Helens",
			"Warrington"
		],
		0,
		"Wigan won eight in a row from 1988 to 1995."
	],
	[
		2,
		"Swimming",
		"Which British swimmer won Olympic 100m breaststroke gold in 2016 and 2020?",
		[
			"Adam Peaty",
			"Duncan Goodhew",
			"Ross Murdoch",
			"James Wilby"
		],
		0,
		"The first British swimmer to defend an Olympic title."
	],
	[
		2,
		"Football",
		"Which player has made the most appearances for the US women's national team?",
		[
			"Kristine Lilly",
			"Carli Lloyd",
			"Christie Pearce",
			"Mia Hamm"
		],
		0,
		"Lilly won 354 caps between 1987 and 2010."
	],
	[
		2,
		"Horse racing",
		"Which jockey rode a record 4,358 jump winners?",
		[
			"AP McCoy",
			"Richard Dunwoody",
			"Ruby Walsh",
			"Peter Scudamore"
		],
		0,
		"He was champion jockey 20 years in a row."
	],
	[
		2,
		"Cycling",
		"In which event did Laura Kenny win her first Olympic gold, at London 2012?",
		[
			"Team pursuit",
			"Omnium",
			"Madison",
			"Sprint"
		],
		0,
		"She won the omnium too, later that week."
	],
	[
		2,
		"Athletics",
		"Who won Olympic 100m gold in 1988 after Ben Johnson was disqualified?",
		[
			"Carl Lewis",
			"Linford Christie",
			"Calvin Smith",
			"Dennis Mitchell"
		],
		0,
		"Linford Christie was promoted to silver."
	],
	[
		2,
		"Football",
		"Which team did Nottingham Forest beat in the 1979 European Cup final?",
		[
			"Malmö",
			"Hamburg",
			"Liverpool",
			"Ajax"
		],
		0,
		"Trevor Francis scored the only goal. Forest beat Hamburg in the 1980 final."
	],
	[
		2,
		"Cricket",
		"Which England captain regained the Ashes in 2005?",
		[
			"Michael Vaughan",
			"Nasser Hussain",
			"Andrew Flintoff",
			"Andrew Strauss"
		],
		0,
		"England won 2-1 after losing the first Test at Lord's."
	],
	[
		2,
		"Tennis",
		"Who has won the most Wimbledon men's singles titles?",
		[
			"Roger Federer",
			"Novak Djokovic",
			"Pete Sampras",
			"Björn Borg"
		],
		0,
		"Federer won eight, Djokovic and Sampras seven each."
	],
	[
		2,
		"Ice hockey",
		"Wayne Gretzky's jersey number, retired across the whole NHL, was what?",
		[
			"99",
			"66",
			"87",
			"9"
		],
		0,
		"The NHL retired 99 for every team in 2000."
	],
	[
		2,
		"American football",
		"Which quarterback has won the most Super Bowls?",
		[
			"Tom Brady",
			"Joe Montana",
			"Terry Bradshaw",
			"Patrick Mahomes"
		],
		0,
		"Seven: six with New England and one with Tampa Bay."
	],
	[
		3,
		"Football",
		"Who scored the goal that won the 1999 Champions League final for Manchester United?",
		[
			"Ole Gunnar Solskjær",
			"Teddy Sheringham",
			"Dwight Yorke",
			"Andy Cole"
		],
		0,
		"Sheringham equalised in stoppage time; Solskjær won it moments later."
	],
	[
		3,
		"Football",
		"Who was the first woman to referee a men's Premier League match?",
		[
			"Rebecca Welch",
			"Sian Massey-Ellis",
			"Stéphanie Frappart",
			"Amy Fearn"
		],
		0,
		"Welch refereed Fulham v Burnley in December 2023."
	],
	[
		3,
		"Athletics",
		"Who holds the men's marathon world record of 2:00:35, set in Chicago in 2023?",
		[
			"Kelvin Kiptum",
			"Eliud Kipchoge",
			"Kenenisa Bekele",
			"Dennis Kimetto"
		],
		0,
		"Kiptum died in a road accident in February 2024, aged 24."
	],
	[
		3,
		"Tennis",
		"Who is the last man to win the Calendar Grand Slam?",
		[
			"Rod Laver, in 1969",
			"Novak Djokovic, in 2021",
			"Rafael Nadal, in 2010",
			"Roger Federer, in 2006"
		],
		0,
		"Djokovic won the first three in 2021 but lost the US Open final to Medvedev."
	],
	[
		3,
		"Formula 1",
		"Who is the only driver to win the F1 world title posthumously?",
		[
			"Jochen Rindt",
			"Gilles Villeneuve",
			"Ronnie Peterson",
			"Wolfgang von Trips"
		],
		0,
		"Rindt was killed at Monza in 1970; nobody overtook his points total."
	],
	[
		3,
		"Rugby union",
		"Which player scored 15 tries at the 1995 and 1999 World Cups combined, setting the record at the time?",
		[
			"Jonah Lomu",
			"Bryan Habana",
			"Doug Howlett",
			"Shane Williams"
		],
		0,
		"Lomu scored 15 World Cup tries; Habana equalled it in 2015."
	],
	[
		3,
		"Football",
		"Who managed Denmark to the Euro 1992 title after they were called up late to replace Yugoslavia?",
		[
			"Richard Møller Nielsen",
			"Sepp Piontek",
			"Morten Olsen",
			"Åge Hareide"
		],
		0,
		"They beat Germany 2-0 in the final in Gothenburg."
	],
	[
		3,
		"Cricket",
		"Jim Laker took 19 wickets in a Test in 1956. Against which country?",
		[
			"Australia",
			"South Africa",
			"India",
			"New Zealand"
		],
		0,
		"At Old Trafford, including all ten in the second innings."
	],
	[
		3,
		"Golf",
		"Who won The Open at Carnoustie in 1999 after Jean van de Velde's collapse on the 18th?",
		[
			"Paul Lawrie",
			"Justin Leonard",
			"Ernie Els",
			"Padraig Harrington"
		],
		0,
		"Lawrie came from ten shots back on the final day and won the play-off."
	],
	[
		3,
		"Football",
		"Which club won the women's Champions League (as the Women's Cup) in its first season, 2001-02?",
		[
			"1. FFC Frankfurt",
			"Lyon",
			"Umeå",
			"Arsenal"
		],
		0,
		"Arsenal are the only English winners, in 2007 and 2025."
	],
	[
		3,
		"Athletics",
		"Which British athlete won Olympic 400m hurdles gold in 1992 and the world title in a world record a year later?",
		[
			"Sally Gunnell",
			"Kathy Cook",
			"Tessa Sanderson",
			"Sonia Lannaman"
		],
		0,
		"Her 52.74 in Stuttgart in 1993 was a world record."
	],
	[
		3,
		"Snooker",
		"Who made the first televised 147 break, in 1982?",
		[
			"Steve Davis",
			"Cliff Thorburn",
			"Kirk Stevens",
			"Alex Higgins"
		],
		0,
		"At the Lada Classic in Oldham, against John Spencer."
	],
	[
		3,
		"Cycling",
		"Which rider won the Tour de France five times in a row from 1991 to 1995?",
		[
			"Miguel Induráin",
			"Bernard Hinault",
			"Eddy Merckx",
			"Jacques Anquetil"
		],
		0,
		"Induráin was the first to win five in a row."
	],
	[
		3,
		"Tennis",
		"Who won the first Wimbledon ladies' singles championship, in 1884?",
		[
			"Maud Watson",
			"Lottie Dod",
			"Blanche Bingley",
			"Charlotte Cooper"
		],
		0,
		"Watson beat her sister Lilian in the final."
	],
	[
		3,
		"Football",
		"Which club were the first English winners of the UEFA Cup, in 1972?",
		[
			"Tottenham Hotspur",
			"Liverpool",
			"Ipswich Town",
			"Leeds United"
		],
		0,
		"Spurs beat Wolves in an all-English final over two legs."
	],
	[
		3,
		"Cricket",
		"Which Australian holds the women's record for the highest ODI score in a World Cup final, 170?",
		[
			"Alyssa Healy",
			"Meg Lanning",
			"Beth Mooney",
			"Ellyse Perry"
		],
		0,
		"In Christchurch in 2022. It is also the highest score in any World Cup final, men's or women's."
	],
	[
		3,
		"Boxing",
		"Lennox Lewis lost his world titles in 1994 to which boxer?",
		[
			"Oliver McCall",
			"Hasim Rahman",
			"Evander Holyfield",
			"Riddick Bowe"
		],
		0,
		"McCall stopped him in the second round at Wembley Arena. Rahman beat him later, in 2001."
	],
	[
		3,
		"Formula 1",
		"Which team did Damon Hill drive for when he won the 1996 world title?",
		[
			"Williams",
			"Benetton",
			"McLaren",
			"Arrows"
		],
		0,
		"He was dropped by Williams before the next season and moved to Arrows."
	],
	[
		3,
		"Football",
		"Which of these won the Ballon d'Or while playing for a Soviet club?",
		[
			"Igor Belanov",
			"Rinat Dasayev",
			"Oleg Protasov",
			"Alexander Zavarov"
		],
		0,
		"Belanov won it in 1986 with Dynamo Kyiv. Lev Yashin (1963) and Oleg Blokhin (1975) also won it with Soviet clubs."
	],
	[
		3,
		"Rugby union",
		"England's women won the World Cup in 1994 and 2014. Which other year?",
		[
			"2025",
			"2010",
			"2017",
			"2002"
		],
		0,
		"England beat Canada 33-13 in the 2025 final at Twickenham."
	],
	[
		3,
		"Athletics",
		"Which athlete won 800m and 1500m gold at the 2004 Athens Olympics?",
		[
			"Kelly Holmes",
			"Maria Mutola",
			"Svetlana Masterkova",
			"Hasna Benhassi"
		],
		0,
		"She was 34, and had battled injury for years."
	],
	[
		3,
		"Cricket",
		"Who scored 501 not out for Warwickshire in 1994, the highest first-class score?",
		[
			"Brian Lara",
			"Graeme Hick",
			"Mark Ramprakash",
			"Dermot Reeve"
		],
		0,
		"Against Durham at Edgbaston, two months after his Test record 375."
	],
	[
		3,
		"Golf",
		"Who was the first woman to compete in a PGA Tour event in the modern era, in 2003?",
		[
			"Annika Sörenstam",
			"Michelle Wie",
			"Suzy Whaley",
			"Laura Davies"
		],
		0,
		"Sörenstam played the Colonial in Texas and missed the cut by four shots."
	],
	[
		3,
		"Athletics",
		"In which year did women first run the Olympic marathon?",
		[
			"1984",
			"1972",
			"1976",
			"1988"
		],
		0,
		"The first one was run in Los Angeles."
	],
	[
		1,
		"Football",
		"Which country did England beat 4-2 after extra time in the 1966 World Cup final?",
		[
			"West Germany",
			"Portugal",
			"Argentina",
			"Soviet Union"
		],
		0,
		"At Wembley on 30 July 1966."
	],
	[
		3,
		"Cricket",
		"Who were the first team to win the Women's Premier League in India, in 2023?",
		[
			"Mumbai Indians",
			"Delhi Capitals",
			"Royal Challengers Bangalore",
			"UP Warriorz"
		],
		0,
		"They beat Delhi Capitals in the final at the Brabourne Stadium."
	],
	[
		4,
		"Football",
		"Who scored the first ever Premier League goal, in August 1992?",
		[
			"Brian Deane",
			"Alan Shearer",
			"Mark Hughes",
			"Teddy Sheringham"
		],
		0,
		"For Sheffield United against Manchester United, after five minutes."
	],
	[
		4,
		"Cricket",
		"Who captained England in the 1973 Women's World Cup, two years before the first men's World Cup?",
		[
			"Rachael Heyhoe Flint",
			"Enid Bakewell",
			"Lynne Thomas",
			"Mary Pilling"
		],
		0,
		"Enid Bakewell scored 118 in the deciding match at Edgbaston."
	],
	[
		4,
		"Athletics",
		"Who ran the first sub-five-minute mile by a woman, in 1954?",
		[
			"Diane Leather",
			"Anne Smith",
			"Betty Cuthbert",
			"Marjorie Jackson"
		],
		0,
		"4:59.6 in Birmingham, 23 days after Bannister's sub-four."
	],
	[
		4,
		"Football",
		"How many people watched Dick, Kerr Ladies play St Helens Ladies at Goodison Park on Boxing Day 1920?",
		[
			"53,000",
			"23,000",
			"38,000",
			"71,000"
		],
		0,
		"Within a year, the FA had banned women's football from its members' grounds."
	],
	[
		4,
		"Squash",
		"Who ended Jahangir Khan's unbeaten run of 555 matches in 1986?",
		[
			"Ross Norman",
			"Jansher Khan",
			"Chris Dittmar",
			"Rodney Martin"
		],
		0,
		"In the World Open final in Toulouse, 9-5 9-7 7-9 9-1."
	],
	[
		4,
		"Tennis",
		"Who is the youngest Wimbledon singles champion of all time?",
		[
			"Lottie Dod",
			"Martina Hingis",
			"Boris Becker",
			"Monica Seles"
		],
		0,
		"Dod was 15 years and 285 days old in 1887."
	],
	[
		4,
		"Formula 1",
		"Who won the 1976 world title by a single point from Niki Lauda?",
		[
			"James Hunt",
			"Jody Scheckter",
			"Mario Andretti",
			"Clay Regazzoni"
		],
		0,
		"Decided in the rain at Fuji, the last race of the season."
	],
	[
		4,
		"Cricket",
		"Who was the first player to score a double century in a men's ODI?",
		[
			"Sachin Tendulkar",
			"Virender Sehwag",
			"Rohit Sharma",
			"Chris Gayle"
		],
		0,
		"200 not out against South Africa in Gwalior in 2010. Belinda Clark had made 229 not out in a women's ODI in 1997."
	],
	[
		4,
		"Football",
		"Which club were the first to win the English league and cup double in the 20th century?",
		[
			"Tottenham Hotspur, 1961",
			"Arsenal, 1971",
			"Liverpool, 1986",
			"Preston North End"
		],
		0,
		"Preston did it in 1889 and Aston Villa in 1897. Spurs were the first of the 20th century."
	],
	[
		4,
		"Athletics",
		"Fanny Blankers-Koen won four golds in London in 1948. Which was not one of them?",
		[
			"Long jump",
			"80m hurdles",
			"200m",
			"4x100m relay"
		],
		0,
		"She won the 100m, 200m, 80m hurdles and the relay. The rules allowed only three individual events."
	],
	[
		4,
		"Golf",
		"Who won the first US Women's Open, in 1946, when it was played as match play?",
		[
			"Patty Berg",
			"Babe Zaharias",
			"Louise Suggs",
			"Betsy Rawls"
		],
		0,
		"Berg won 15 women's majors, still the record."
	],
	[
		4,
		"Cycling",
		"Major Taylor became world sprint champion in 1899 in which city?",
		[
			"Montreal",
			"Paris",
			"Copenhagen",
			"Chicago"
		],
		0,
		"He was the first African American world champion in cycling."
	],
	[
		4,
		"Rugby union",
		"Who scored the try in the 1973 Barbarians v New Zealand match often called the greatest ever?",
		[
			"Gareth Edwards",
			"Phil Bennett",
			"JPR Williams",
			"David Duckham"
		],
		0,
		"\"That fella Edwards!\" Cliff Morgan called it at Cardiff Arms Park."
	],
	[
		4,
		"Football",
		"What was the score when Hungary became the first team from outside the UK and Ireland to beat England at Wembley, in 1953?",
		[
			"6-3",
			"7-1",
			"4-2",
			"5-3"
		],
		0,
		"Hungary then won the return in Budapest 7-1 the following May."
	],
	[
		4,
		"Gymnastics",
		"What did Shun Fujimoto score on the rings in Montreal in 1976, with a broken kneecap?",
		[
			"9.7",
			"10.0",
			"9.5",
			"9.4"
		],
		0,
		"He landed it, held it, and was then told he could not continue."
	],
	[
		4,
		"Cricket",
		"Which bowler took a hat-trick in the men's 2019 World Cup final?",
		[
			"Nobody did",
			"Jofra Archer",
			"Trent Boult",
			"Liam Plunkett"
		],
		0,
		"There was no hat-trick in the final. The match was tied, and the Super Over was tied too."
	],
	[
		4,
		"Athletics",
		"At the 1904 Olympic marathon, who was first across the line before being disqualified?",
		[
			"Fred Lorz",
			"Thomas Hicks",
			"Albert Corey",
			"Andarín Carvajal"
		],
		0,
		"He had ridden in a car for part of the course."
	],
	[
		4,
		"Football",
		"Who scored four goals in the 1960 European Cup final, Real Madrid 7-3 Eintracht Frankfurt?",
		[
			"Ferenc Puskás",
			"Alfredo Di Stéfano",
			"Francisco Gento",
			"Luis del Sol"
		],
		0,
		"Di Stéfano scored the other three, at Hampden Park in front of 127,000."
	],
	[
		4,
		"Tennis",
		"Who won the 1977 Wimbledon ladies' title in the Championships' centenary year?",
		[
			"Virginia Wade",
			"Chris Evert",
			"Betty Stöve",
			"Sue Barker"
		],
		0,
		"She beat Betty Stöve in the final, with the Queen watching."
	],
	[
		4,
		"Snooker",
		"Who beat Steve Davis on the final black in the 1985 World Championship final?",
		[
			"Dennis Taylor",
			"Alex Higgins",
			"Jimmy White",
			"Joe Johnson"
		],
		0,
		"Watched by 18.5 million on BBC Two after midnight."
	],
	[
		4,
		"Formula 1",
		"How many championship points did Jochen Rindt have when he died in 1970, enough to win the title?",
		[
			"45",
			"52",
			"38",
			"60"
		],
		0,
		"Jacky Ickx finished second on 40 points."
	],
	[
		4,
		"Netball",
		"Which country won the 2018 Commonwealth Games netball gold with a last-second goal?",
		[
			"England",
			"Australia",
			"Jamaica",
			"New Zealand"
		],
		0,
		"Helen Housby scored with the final shot to beat Australia 52-51 on the Gold Coast."
	],
	[
		4,
		"Cricket",
		"In 1882, which defeat led to the mock obituary of English cricket and the Ashes?",
		[
			"Australia beat England by 7 runs at The Oval",
			"Australia beat England by 45 runs at Melbourne",
			"Australia beat England by an innings at Lord's",
			"England lost to Australia at Old Trafford"
		],
		0,
		"The Sporting Times notice said the body would be cremated and the ashes taken to Australia."
	],
	[
		4,
		"Rugby league",
		"Who captained Great Britain to their last Ashes series win over Australia, in 1970?",
		[
			"Frank Myler",
			"Alex Murphy",
			"Brian Bevan",
			"Ellery Hanley"
		],
		0,
		"Britain have not won an Ashes series since."
	],
	[
		4,
		"Athletics",
		"What was Paula Radcliffe's marathon world record, set in London in 2003?",
		[
			"2:15:25",
			"2:17:18",
			"2:14:04",
			"2:18:47"
		],
		0,
		"It stood for 16 years until Brigid Kosgei's 2:14:04 in Chicago in 2019."
	],
	[
		4,
		"Football",
		"Lily Parr played more than 30 years for which Preston works team?",
		[
			"Dick, Kerr Ladies",
			"Bennetts Ladies",
			"Lyons Ladies",
			"Atalanta Ladies"
		],
		0,
		"She joined in 1920 and played on until 1951."
	],
	[
		4,
		"Golf",
		"Who holed the putt that retained the Ryder Cup for Europe at Medinah in 2012?",
		[
			"Martin Kaymer",
			"Ian Poulter",
			"Justin Rose",
			"Sergio García"
		],
		0,
		"A six-footer on the 18th against Steve Stricker."
	],
	[
		4,
		"Boxing",
		"Who did Barry McGuigan beat to win the WBA featherweight title in 1985?",
		[
			"Eusebio Pedroza",
			"Steve Cruz",
			"Danilo Cabrera",
			"Juan Laporte"
		],
		0,
		"At Loftus Road in front of about 25,000."
	],
	[
		4,
		"Cycling",
		"Who set the UCI Hour Record of 56.792km in October 2022?",
		[
			"Filippo Ganna",
			"Dan Bigham",
			"Bradley Wiggins",
			"Victor Campenaerts"
		],
		0,
		"Bigham had set 55.548km in August 2022; Ganna, his teammate, beat it two months later."
	],
	[
		3,
		"Football",
		"Which club did Brian Clough lead to the First Division title in 1971-72, before Nottingham Forest?",
		[
			"Derby County",
			"Leeds United",
			"Hartlepools United",
			"Brighton"
		],
		0,
		"Derby won the league by a point while the players were on holiday in Majorca."
	],
	[
		3,
		"Cricket",
		"Who took 800 Test wickets, the most by any bowler?",
		[
			"Muttiah Muralitharan",
			"Shane Warne",
			"James Anderson",
			"Anil Kumble"
		],
		0,
		"He took his 800th with his final ball in Test cricket, in 2010."
	],
	[
		3,
		"Tennis",
		"Who was the first Black player to win a Grand Slam singles title, at the 1956 French Championships?",
		[
			"Althea Gibson",
			"Arthur Ashe",
			"Yannick Noah",
			"Venus Williams"
		],
		0,
		"She won Wimbledon and the US Championships in 1957 and 1958."
	],
	[
		3,
		"Formula 1",
		"Who won the 2008 world title in the final corners of the last lap in Brazil?",
		[
			"Lewis Hamilton",
			"Felipe Massa",
			"Kimi Räikkönen",
			"Fernando Alonso"
		],
		0,
		"He passed Timo Glock for fifth place, enough to beat Massa by a point."
	],
	[
		3,
		"Athletics",
		"Who won the women's heptathlon at the 2016 Olympics, beating Jessica Ennis-Hill?",
		[
			"Nafissatou Thiam",
			"Katarina Johnson-Thompson",
			"Brianne Theisen-Eaton",
			"Carolina Klüft"
		],
		0,
		"Thiam won again in 2020 and 2024."
	],
	[
		3,
		"Rugby union",
		"Which country did Japan beat 34-32 at the 2015 World Cup in Brighton?",
		[
			"South Africa",
			"Scotland",
			"Ireland",
			"Samoa"
		],
		0,
		"Karne Hesketh scored the winning try after Japan turned down a kickable penalty for the draw."
	],
	[
		3,
		"Football",
		"Who scored a hat-trick in the 2015 Women's World Cup final, all within 16 minutes?",
		[
			"Carli Lloyd",
			"Abby Wambach",
			"Alex Morgan",
			"Megan Rapinoe"
		],
		0,
		"Including one from the halfway line, as the USA beat Japan 5-2."
	],
	[
		3,
		"Cricket",
		"Which team were bowled out for 36 in a Test in Adelaide in 2020?",
		[
			"India",
			"England",
			"Pakistan",
			"West Indies"
		],
		0,
		"They won the series anyway, 2-1."
	],
	[
		3,
		"Golf",
		"Who won the 1997 Masters by 12 shots, aged 21?",
		[
			"Tiger Woods",
			"Ernie Els",
			"Justin Leonard",
			"Tom Kite"
		],
		0,
		"A record winning margin at Augusta, and the youngest Masters champion at the time."
	],
	[
		3,
		"Boxing",
		"Who knocked out Mike Tyson in Tokyo in 1990?",
		[
			"Buster Douglas",
			"Evander Holyfield",
			"Michael Spinks",
			"Larry Holmes"
		],
		0,
		"Douglas was a 42-1 outsider."
	],
	[
		3,
		"Football",
		"Which club won the European Cup in 1982, beating Bayern Munich in Rotterdam?",
		[
			"Aston Villa",
			"Liverpool",
			"Nottingham Forest",
			"Hamburg"
		],
		0,
		"Peter Withe scored; reserve keeper Nigel Spink came on after nine minutes."
	],
	[
		3,
		"Athletics",
		"Who won Olympic gold in the 200m and 400m in 1996, in his golden shoes?",
		[
			"Michael Johnson",
			"Frankie Fredericks",
			"Ato Boldon",
			"Donovan Bailey"
		],
		0,
		"His 19.32 in the 200m stood as the world record until 2008."
	],
	[
		3,
		"Tennis",
		"Who beat Serena Williams in the 2015 US Open semi-final, ending her bid for a Calendar Grand Slam?",
		[
			"Roberta Vinci",
			"Flavia Pennetta",
			"Simona Halep",
			"Venus Williams"
		],
		0,
		"Vinci then lost the final to Flavia Pennetta."
	],
	[
		3,
		"Cycling",
		"Which British rider won the Giro d'Italia in 2018?",
		[
			"Chris Froome",
			"Simon Yates",
			"Tao Geoghegan Hart",
			"Geraint Thomas"
		],
		0,
		"After a solo attack of 80km on stage 19. Tao Geoghegan Hart won it in 2020."
	],
	[
		3,
		"Rugby league",
		"Which club won the first Super League title, in 1996?",
		[
			"St Helens",
			"Wigan",
			"Bradford Bulls",
			"Leeds Rhinos"
		],
		0,
		"Bradford won the next one, in 1997."
	],
	[
		3,
		"Football",
		"Who is Arsenal's record goalscorer?",
		[
			"Thierry Henry",
			"Ian Wright",
			"Cliff Bastin",
			"Robin van Persie"
		],
		0,
		"Henry scored 228 goals for Arsenal across his two spells."
	],
	[
		3,
		"Cricket",
		"Who scored the first triple century by a woman in Test cricket?",
		[
			"Nobody has; the record is 242",
			"Kiran Baluch",
			"Karen Rolton",
			"Ellyse Perry"
		],
		0,
		"Kiran Baluch made 242 for Pakistan in 2004, the women's Test record. Nobody has made 300."
	],
	[
		3,
		"Netball",
		"Which two positions are allowed to score goals in netball?",
		[
			"Goal Shooter and Goal Attack",
			"Goal Shooter and Wing Attack",
			"Goal Attack and Centre",
			"Goal Shooter only"
		],
		0,
		"Shots can only be taken from inside the goal circle."
	],
	[
		3,
		"Football",
		"Which club won the 1978-79 Women's FA Cup?",
		[
			"Southampton",
			"Doncaster Belles",
			"Fodens",
			"Arsenal"
		],
		0,
		"Southampton won seven of the first ten Women's FA Cups, from 1971."
	],
	[
		3,
		"Snooker",
		"Who won the 1986 World Championship as a 150-1 outsider?",
		[
			"Joe Johnson",
			"Dennis Taylor",
			"Terry Griffiths",
			"Cliff Thorburn"
		],
		0,
		"He beat Steve Davis 18-12 in the final."
	],
	[
		3,
		"Athletics",
		"Who set the men's high jump world record of 2.45m, which has stood since 1993?",
		[
			"Javier Sotomayor",
			"Patrik Sjöberg",
			"Dick Fosbury",
			"Mutaz Barshim"
		],
		0,
		"He set it in Salamanca, Spain."
	],
	[
		3,
		"Formula 1",
		"Which two drivers each won 13 races in a season, the record before 2022?",
		[
			"Michael Schumacher and Sebastian Vettel",
			"Ayrton Senna and Alain Prost",
			"Lewis Hamilton and Nico Rosberg",
			"Nigel Mansell and Mika Häkkinen"
		],
		0,
		"Schumacher in 2004 and Vettel in 2013. Verstappen won 15 in 2022 and 19 in 2023."
	],
	[
		3,
		"Football",
		"Which country won the women's football gold at the 2020 Tokyo Olympics?",
		[
			"Canada",
			"Sweden",
			"USA",
			"Brazil"
		],
		0,
		"They beat Sweden on penalties in the final."
	],
	[
		3,
		"Golf",
		"Who won the 2019 Masters, his first major for 11 years?",
		[
			"Tiger Woods",
			"Brooks Koepka",
			"Francesco Molinari",
			"Dustin Johnson"
		],
		0,
		"It was his fifth Masters and 15th major."
	],
	[
		3,
		"Cricket",
		"Which England bowler took 7 for 12 as the West Indies were bowled out for 47 in Kingston in 2004?",
		[
			"Steve Harmison",
			"Andrew Flintoff",
			"Matthew Hoggard",
			"Simon Jones"
		],
		0,
		"At the time, the West Indies' lowest Test total."
	],
	[
		3,
		"Football",
		"Who was the manager when Wales reached the Euro 2016 semi-finals?",
		[
			"Chris Coleman",
			"Gary Speed",
			"Ryan Giggs",
			"Rob Page"
		],
		0,
		"Wales beat Belgium 3-1 in the quarter-final in Lille."
	],
	[
		3,
		"Tennis",
		"Who won the 1980 Wimbledon men's final after the famous 18-16 fourth-set tie-break?",
		[
			"Björn Borg",
			"John McEnroe",
			"Jimmy Connors",
			"Ivan Lendl"
		],
		0,
		"McEnroe won the tie-break but Borg won the fifth set 8-6, for his fifth title in a row."
	],
	[
		3,
		"Athletics",
		"What was Cathy Freeman's winning time in the 400m final at Sydney 2000?",
		[
			"49.11",
			"48.63",
			"49.48",
			"50.02"
		],
		0,
		"She had lit the Olympic cauldron at the opening ceremony."
	],
	[
		3,
		"Rugby union",
		"Who coached England to the 2003 World Cup?",
		[
			"Clive Woodward",
			"Jack Rowell",
			"Andy Robinson",
			"Martin Johnson"
		],
		0,
		"Martin Johnson was the captain."
	],
	[
		3,
		"Football",
		"Which club did Megan Rapinoe play for in the NWSL for most of her career?",
		[
			"Seattle Reign / OL Reign",
			"Portland Thorns",
			"Chicago Red Stars",
			"North Carolina Courage"
		],
		0,
		"She played for the Seattle club from 2013 until she retired in 2023."
	],
	[
		4,
		"Football",
		"Who scored for Wimbledon in the 1988 FA Cup final, a 1-0 win over Liverpool?",
		[
			"Lawrie Sanchez",
			"Vinnie Jones",
			"John Fashanu",
			"Dennis Wise"
		],
		0,
		"Dave Beasant became the first goalkeeper to save a penalty in an FA Cup final, from John Aldridge."
	],
	[
		4,
		"Cricket",
		"Ian Botham scored a century and took how many wickets in the 1980 Golden Jubilee Test against India in Bombay?",
		[
			"13",
			"10",
			"11",
			"12"
		],
		0,
		"114 runs and 13 for 106 in the match."
	],
	[
		4,
		"Athletics",
		"Who was the first woman to break 11 seconds for 100m (hand-timed), in 1973?",
		[
			"Renate Stecher",
			"Marlies Göhr",
			"Irena Szewińska",
			"Wyomia Tyus"
		],
		0,
		"Stecher ran 10.9 in Ostrava. Göhr ran the first electronically timed sub-11, in 1977."
	],
	[
		4,
		"Tennis",
		"Who won the 2004 Wimbledon ladies' title aged 17?",
		[
			"Maria Sharapova",
			"Svetlana Kuznetsova",
			"Lindsay Davenport",
			"Amélie Mauresmo"
		],
		0,
		"She beat Serena Williams in the final."
	],
	[
		4,
		"Formula 1",
		"In which year did a woman last start a Formula 1 World Championship race?",
		[
			"1976",
			"1958",
			"1980",
			"1992"
		],
		0,
		"Lella Lombardi started the 1976 Austrian Grand Prix. Giovanna Amati failed to qualify in 1992."
	],
	[
		4,
		"Cricket",
		"Who took the first hat-trick in women's Test cricket, in 1958, in a match where she also scored a century?",
		[
			"Betty Wilson",
			"Mary Duggan",
			"Myrtle Maclagan",
			"Enid Bakewell"
		],
		0,
		"Betty Wilson of Australia, against England at St Kilda."
	],
	[
		4,
		"Squash",
		"Who won the women's British Open squash title 16 years in a row, from 1962 to 1977?",
		[
			"Heather McKay",
			"Susan Devoy",
			"Janet Morgan",
			"Sarah Fitz-Gerald"
		],
		0,
		"The Australian is said to have lost only two matches in her entire career."
	],
	[
		4,
		"Athletics",
		"Who won the women's Olympic marathon in 1984, the first ever held?",
		[
			"Joan Benoit",
			"Grete Waitz",
			"Rosa Mota",
			"Ingrid Kristiansen"
		],
		0,
		"Grete Waitz was second and Rosa Mota third."
	],
	[
		4,
		"Football",
		"Which club won the first FA Cup, in 1872?",
		[
			"Wanderers",
			"Royal Engineers",
			"Old Etonians",
			"Queen's Park"
		],
		0,
		"Wanderers beat Royal Engineers 1-0 at the Kennington Oval."
	],
	[
		4,
		"Cricket",
		"Who took the first hat-trick in men's T20 international cricket, at the 2007 World T20?",
		[
			"Brett Lee",
			"Lasith Malinga",
			"Shoaib Akhtar",
			"Stuart Broad"
		],
		0,
		"Against Bangladesh in Cape Town."
	],
	[
		4,
		"Tennis",
		"Who won the first Open-era Wimbledon ladies' title, in 1968?",
		[
			"Billie Jean King",
			"Margaret Court",
			"Ann Jones",
			"Virginia Wade"
		],
		0,
		"King beat Judy Tegart in the final."
	],
	[
		2,
		"Formula 1",
		"Which British driver won the 1992 world title with Williams?",
		[
			"Nigel Mansell",
			"Damon Hill",
			"Johnny Herbert",
			"Martin Brundle"
		],
		0,
		"He won the first five races and nine in total."
	],
	[
		4,
		"Golf",
		"Who won the women's Open at St Andrews in 2007, the first women's professional event on the Old Course?",
		[
			"Lorena Ochoa",
			"Annika Sörenstam",
			"Karrie Webb",
			"Se Ri Pak"
		],
		0,
		"She won by four shots."
	],
	[
		4,
		"Football",
		"Who scored England's goal in the 1990 World Cup semi-final against West Germany?",
		[
			"Gary Lineker",
			"David Platt",
			"Paul Gascoigne",
			"Chris Waddle"
		],
		0,
		"Lineker equalised ten minutes from time; England lost on penalties."
	],
	[
		4,
		"Cricket",
		"Who scored the first century in women's ODI cricket at a World Cup, in 1973?",
		[
			"Lynne Thomas",
			"Enid Bakewell",
			"Rachael Heyhoe Flint",
			"Peggy Antonio"
		],
		0,
		"Lynne Thomas made 134 not out against an International XI at Hove in England's opening match, sharing an opening stand of 246 with Enid Bakewell."
	],
	[
		4,
		"Athletics",
		"Who won the men's Olympic 1500m in 1980 and 1984?",
		[
			"Sebastian Coe",
			"Steve Ovett",
			"Steve Cram",
			"Said Aouita"
		],
		0,
		"He is the only man to win the Olympic 1500m twice."
	],
	[
		4,
		"Rugby league",
		"Who scored a record 796 tries in his career, mostly for Warrington?",
		[
			"Brian Bevan",
			"Billy Boston",
			"Martin Offiah",
			"Ellery Hanley"
		],
		0,
		"An Australian winger who played in England from 1946 to 1964."
	],
	[
		4,
		"Football",
		"Which club won the First Division in 1977-78, their first season after promotion?",
		[
			"Nottingham Forest",
			"Ipswich Town",
			"Derby County",
			"Aston Villa"
		],
		0,
		"Brian Clough's Forest finished seven points clear of Liverpool."
	],
	[
		4,
		"Netball",
		"Which country won the first Netball World Championship, in 1963?",
		[
			"Australia",
			"New Zealand",
			"England",
			"Trinidad and Tobago"
		],
		0,
		"Held at Eastbourne."
	],
	[
		4,
		"Cycling",
		"Who won the 2022 Tour de France Femmes, the first edition of the modern race?",
		[
			"Annemiek van Vleuten",
			"Demi Vollering",
			"Marianne Vos",
			"Elisa Longo Borghini"
		],
		0,
		"Demi Vollering won the 2023 edition."
	],
	[
		4,
		"Tennis",
		"How many consecutive matches did Martina Navratilova win in 1984, the Open-era record?",
		[
			"74",
			"56",
			"68",
			"81"
		],
		0,
		"Helena Suková ended the run at the Australian Open."
	],
	[
		4,
		"Athletics",
		"Which country won the first women's Olympic 4x400m relay, in 1972?",
		[
			"East Germany",
			"West Germany",
			"USA",
			"Soviet Union"
		],
		0,
		"The event was added at Munich 1972."
	],
	[
		4,
		"Football",
		"Who was the first player to be sent off in an FA Cup final?",
		[
			"Kevin Moran",
			"Pat Van Den Hauwe",
			"Jose Antonio Reyes",
			"Pablo Zabaleta"
		],
		0,
		"Manchester United's Kevin Moran, against Everton in 1985. United still won 1-0."
	],
	[
		4,
		"Cricket",
		"In which year was the first official women's Test played?",
		[
			"1934",
			"1926",
			"1946",
			"1952"
		],
		0,
		"England played Australia at Brisbane in December 1934."
	],
	[
		4,
		"Snooker",
		"Who was the first player to make a maximum 147 at the Crucible?",
		[
			"Cliff Thorburn",
			"Steve Davis",
			"Jimmy White",
			"Kirk Stevens"
		],
		0,
		"In 1983, against Terry Griffiths."
	],
	[
		4,
		"Rugby union",
		"Who is the record points scorer in men's Test rugby?",
		[
			"Dan Carter",
			"Jonny Wilkinson",
			"Owen Farrell",
			"Neil Jenkins"
		],
		0,
		"Carter scored 1,598 points for New Zealand."
	]
];
// src/data/bank2a.js
var BANK2A = [
	[
		1,
		"Football",
		"How many players does each team have on the pitch at the start of a football match?",
		[
			"11",
			"10",
			"12",
			"9"
		],
		0,
		"Eleven a side, including the goalkeeper."
	],
	[
		1,
		"Football",
		"Which country hosted the 2014 men's World Cup?",
		[
			"Brazil",
			"Germany",
			"South Africa",
			"Russia"
		],
		0,
		"Brazil hosted it; Germany won, beating Argentina 1-0 in the final at the Maracanã."
	],
	[
		1,
		"Football",
		"Which club plays home games at Anfield?",
		[
			"Liverpool",
			"Everton",
			"Leeds United",
			"Newcastle United"
		],
		0,
		"Liverpool have played at Anfield since 1892. Everton played there before them."
	],
	[
		1,
		"Football",
		"Which country won the 2023 Women's World Cup?",
		[
			"Spain",
			"England",
			"Sweden",
			"USA"
		],
		0,
		"Spain beat England 1-0 in the final in Sydney, Olga Carmona scoring."
	],
	[
		1,
		"Football",
		"Which national team are known as the Lionesses?",
		[
			"England women",
			"Scotland women",
			"Wales women",
			"Australia women"
		],
		0,
		"The England women's team. Australia's women are the Matildas."
	],
	[
		1,
		"Football",
		"What colour card does a referee show to send a player off?",
		[
			"Red",
			"Yellow",
			"Blue",
			"White"
		],
		0,
		"Red for a sending off, yellow for a caution. Two yellows make a red."
	],
	[
		1,
		"Football",
		"Which national women's team are nicknamed the Matildas?",
		[
			"Australia",
			"New Zealand",
			"Canada",
			"Japan"
		],
		0,
		"The name comes from the song Waltzing Matilda."
	],
	[
		1,
		"Football",
		"Who scored a hat-trick for England in the 1966 World Cup final?",
		[
			"Geoff Hurst",
			"Bobby Charlton",
			"Roger Hunt",
			"Martin Peters"
		],
		0,
		"Hurst was the only man to score a hat-trick in a World Cup final until Kylian Mbappé matched him in 2022."
	],
	[
		1,
		"Football",
		"Which club is known as the Gunners?",
		[
			"Arsenal",
			"West Ham United",
			"Chelsea",
			"Charlton Athletic"
		],
		0,
		"The name comes from the club's founding by workers at the Royal Arsenal in Woolwich in 1886."
	],
	[
		1,
		"Football",
		"In which city do both Celtic and Rangers play?",
		[
			"Glasgow",
			"Edinburgh",
			"Aberdeen",
			"Dundee"
		],
		0,
		"The Old Firm derby is played in Glasgow."
	],
	[
		1,
		"Football",
		"Which country did Lionel Messi captain to the 2022 World Cup?",
		[
			"Argentina",
			"Spain",
			"Uruguay",
			"Brazil"
		],
		0,
		"Argentina beat France on penalties after a 3-3 draw in the final."
	],
	[
		1,
		"Football",
		"Which goalkeeper saved a penalty for England in the 2023 Women's World Cup final?",
		[
			"Mary Earps",
			"Hannah Hampton",
			"Ellie Roebuck",
			"Karen Bardsley"
		],
		0,
		"Earps saved Jennifer Hermoso's penalty. England still lost 1-0."
	],
	[
		1,
		"Football",
		"Which club play at St James' Park?",
		[
			"Newcastle United",
			"Exeter City",
			"Sunderland",
			"Middlesbrough"
		],
		0,
		"Newcastle's St James' Park; Exeter City's ground is St James Park, without the apostrophe."
	],
	[
		2,
		"Football",
		"Which club won the first Premier League title in 1992-93?",
		[
			"Manchester United",
			"Blackburn Rovers",
			"Aston Villa",
			"Norwich City"
		],
		0,
		"United finished ten points clear of Aston Villa, their first title since 1967."
	],
	[
		2,
		"Football",
		"Which club went the whole 2003-04 Premier League season unbeaten?",
		[
			"Arsenal",
			"Chelsea",
			"Manchester United",
			"Liverpool"
		],
		0,
		"The Invincibles: 26 wins and 12 draws."
	],
	[
		2,
		"Football",
		"Who managed Leicester City to the 2015-16 Premier League title?",
		[
			"Claudio Ranieri",
			"Nigel Pearson",
			"Brendan Rodgers",
			"Craig Shakespeare"
		],
		0,
		"Leicester had been 5,000-1 outsiders at the start of the season."
	],
	[
		2,
		"Football",
		"Which country has won the most men's World Cups?",
		[
			"Brazil",
			"Germany",
			"Italy",
			"Argentina"
		],
		0,
		"Brazil have won five: 1958, 1962, 1970, 1994 and 2002."
	],
	[
		2,
		"Football",
		"Which country has won the most Women's World Cups?",
		[
			"USA",
			"Germany",
			"Norway",
			"Japan"
		],
		0,
		"The USA have won four: 1991, 1999, 2015 and 2019."
	],
	[
		2,
		"Football",
		"Who scored England's extra-time winner in the Euro 2022 final?",
		[
			"Chloe Kelly",
			"Ella Toone",
			"Alessia Russo",
			"Beth Mead"
		],
		0,
		"Kelly scored in the 110th minute at Wembley against Germany."
	],
	[
		2,
		"Football",
		"Who scored a hat-trick in the 2015 Women's World Cup final, including one from the halfway line?",
		[
			"Carli Lloyd",
			"Abby Wambach",
			"Alex Morgan",
			"Megan Rapinoe"
		],
		0,
		"Lloyd scored three in the first 16 minutes against Japan in Vancouver."
	],
	[
		2,
		"Football",
		"Which club did Alex Ferguson manage immediately before Manchester United?",
		[
			"Aberdeen",
			"Celtic",
			"Rangers",
			"Hibernian"
		],
		0,
		"He won the European Cup Winners' Cup with Aberdeen in 1983."
	],
	[
		2,
		"Football",
		"Which club has won the most European Cups and Champions Leagues?",
		[
			"Real Madrid",
			"AC Milan",
			"Bayern Munich",
			"Liverpool"
		],
		0,
		"Real Madrid have won it 15 times, the latest in 2024."
	],
	[
		2,
		"Football",
		"Which Welsh player won the Champions League five times with Real Madrid?",
		[
			"Gareth Bale",
			"Aaron Ramsey",
			"Ryan Giggs",
			"Joe Allen"
		],
		0,
		"Bale scored an overhead kick in the 2018 final against Liverpool."
	],
	[
		2,
		"Football",
		"Which club won the first Women's Super League title in 2011?",
		[
			"Arsenal",
			"Liverpool",
			"Chelsea",
			"Birmingham City"
		],
		0,
		"Arsenal won the first two WSL titles, in 2011 and 2012."
	],
	[
		2,
		"Football",
		"Which Norwegian striker won the first women's Ballon d'Or in 2018?",
		[
			"Ada Hegerberg",
			"Caroline Graham Hansen",
			"Maren Mjelde",
			"Guro Reiten"
		],
		0,
		"She was playing for Lyon at the time."
	],
	[
		2,
		"Football",
		"Who scored the \"Hand of God\" goal against England in 1986?",
		[
			"Diego Maradona",
			"Jorge Valdano",
			"Jorge Burruchaga",
			"Mario Kempes"
		],
		0,
		"Four minutes later he scored a second, dribbling past half the England team."
	],
	[
		2,
		"Football",
		"Which country won Euro 2016?",
		[
			"Portugal",
			"France",
			"Wales",
			"Germany"
		],
		0,
		"Portugal beat hosts France 1-0 after extra time, Éder scoring. Ronaldo went off injured early."
	],
	[
		2,
		"Football",
		"Which goalkeeper is the only one to win the Ballon d'Or?",
		[
			"Lev Yashin",
			"Gianluigi Buffon",
			"Manuel Neuer",
			"Iker Casillas"
		],
		0,
		"Yashin won it in 1963 with Dynamo Moscow."
	],
	[
		2,
		"Football",
		"Which club built Hampden Park, Scotland's national stadium?",
		[
			"Queen's Park",
			"Celtic",
			"Rangers",
			"Partick Thistle"
		],
		0,
		"Queen's Park opened it in 1903 and sold it to the Scottish FA in 2020. They now play next door at Lesser Hampden."
	],
	[
		2,
		"Football",
		"Which manager led Chelsea women to seven WSL titles before leaving for the USA in 2024?",
		[
			"Emma Hayes",
			"Sarina Wiegman",
			"Casey Stoney",
			"Hope Powell"
		],
		0,
		"Hayes became head coach of the USA and won Olympic gold in Paris weeks later."
	],
	[
		2,
		"Football",
		"Who was the first England women's player to win 100 caps?",
		[
			"Gillian Coultard",
			"Fara Williams",
			"Kelly Smith",
			"Casey Stoney"
		],
		0,
		"Coultard reached 100 caps in 1997. Fara Williams went on to set the record of 172."
	],
	[
		2,
		"Football",
		"In what year did the FA ban women's football from its members' grounds?",
		[
			"1921",
			"1914",
			"1930",
			"1945"
		],
		0,
		"The ban lasted 50 years, until 1971. Dick, Kerr Ladies had been drawing crowds of over 50,000."
	],
	[
		2,
		"Football",
		"In the 2005 Champions League final in Istanbul, what was the score at half-time?",
		[
			"AC Milan 3-0 Liverpool",
			"AC Milan 2-0 Liverpool",
			"AC Milan 1-0 Liverpool",
			"Liverpool 1-1 AC Milan"
		],
		0,
		"Milan led 3-0 at the break in Istanbul. Liverpool scored three in six minutes and won on penalties."
	],
	[
		3,
		"Football",
		"Who is the Premier League's all-time top scorer?",
		[
			"Alan Shearer",
			"Harry Kane",
			"Wayne Rooney",
			"Andy Cole"
		],
		0,
		"Shearer scored 260 Premier League goals for Blackburn and Newcastle."
	],
	[
		3,
		"Football",
		"Which club were the first English winners of the European Cup, in 1968?",
		[
			"Manchester United",
			"Liverpool",
			"Leeds United",
			"Tottenham Hotspur"
		],
		0,
		"Celtic were the first British winners a year earlier, in 1967."
	],
	[
		3,
		"Football",
		"Celtic's 1967 European Cup winners were known as the Lisbon Lions. How far from Celtic Park were all 11 born?",
		[
			"Within 30 miles",
			"Within 10 miles",
			"Within 3 miles",
			"All in Glasgow"
		],
		0,
		"All eleven were born within 30 miles of Celtic Park."
	],
	[
		3,
		"Football",
		"Which Scottish club won the European Cup Winners' Cup in 1972?",
		[
			"Rangers",
			"Aberdeen",
			"Celtic",
			"Dundee United"
		],
		0,
		"Rangers beat Dynamo Moscow 3-2 in Barcelona. Aberdeen won it in 1983."
	],
	[
		3,
		"Football",
		"Who managed Nottingham Forest to two European Cups?",
		[
			"Brian Clough",
			"Peter Taylor",
			"Frank Clark",
			"Dave Mackay"
		],
		0,
		"Forest won it in 1979 and 1980, having been promoted from the Second Division in 1977."
	],
	[
		3,
		"Football",
		"Which country did Just Fontaine play for when he scored 13 goals at one World Cup?",
		[
			"France",
			"Belgium",
			"Switzerland",
			"Morocco"
		],
		0,
		"He scored 13 at the 1958 World Cup in Sweden, still the record for one tournament."
	],
	[
		3,
		"Football",
		"Who is the top scorer in men's World Cup history?",
		[
			"Kylian Mbappé",
			"Lionel Messi",
			"Miroslav Klose",
			"Ronaldo Nazário"
		],
		0,
		"Mbappé took his total to 22 at the 2026 World Cup, one more than Lionel Messi and six more than Miroslav Klose's old record of 16."
	],
	[
		3,
		"Football",
		"Who is the top scorer in Women's World Cup history?",
		[
			"Marta",
			"Birgit Prinz",
			"Abby Wambach",
			"Christine Sinclair"
		],
		0,
		"Marta has scored 17 Women's World Cup goals for Brazil."
	],
	[
		3,
		"Football",
		"Christine Sinclair holds the record for international goals by any player, man or woman. Which country did she play for?",
		[
			"Canada",
			"USA",
			"Scotland",
			"New Zealand"
		],
		0,
		"She scored 190 goals for Canada."
	],
	[
		3,
		"Football",
		"Which country did Sarina Wiegman coach to the Euro 2017 title?",
		[
			"Netherlands",
			"England",
			"Germany",
			"Denmark"
		],
		0,
		"She won Euro 2017 with the Netherlands, then Euro 2022 and Euro 2025 with England."
	],
	[
		3,
		"Football",
		"Which club were the first to win the English league and cup Double in the 20th century?",
		[
			"Tottenham Hotspur",
			"Arsenal",
			"Manchester United",
			"Liverpool"
		],
		0,
		"Spurs did it in 1960-61 under Bill Nicholson."
	],
	[
		3,
		"Football",
		"Which club has won the FA Cup the most times?",
		[
			"Arsenal",
			"Manchester United",
			"Chelsea",
			"Tottenham Hotspur"
		],
		0,
		"Arsenal have won it 14 times."
	],
	[
		3,
		"Football",
		"Which English club won the UEFA Women's Cup, the forerunner of the Women's Champions League, in 2007?",
		[
			"Arsenal",
			"Everton",
			"Charlton Athletic",
			"Doncaster Belles"
		],
		0,
		"Arsenal beat Umeå over two legs. They won the quadruple that season."
	],
	[
		3,
		"Football",
		"Which French club won the Women's Champions League five times in a row, from 2016 to 2020?",
		[
			"Lyon",
			"Paris Saint-Germain",
			"Montpellier",
			"Juvisy"
		],
		0,
		"Lyon have won it eight times in all."
	],
	[
		3,
		"Football",
		"Which team did Lily Parr play for?",
		[
			"Dick, Kerr Ladies",
			"Preston North End",
			"Blackburn Rovers Ladies",
			"Doncaster Belles"
		],
		0,
		"Parr scored over 900 goals and was the first woman inducted into the National Football Museum Hall of Fame."
	],
	[
		3,
		"Football",
		"Which manager won the Premier League with Blackburn Rovers in 1995?",
		[
			"Kenny Dalglish",
			"Ray Harford",
			"Graeme Souness",
			"Roy Hodgson"
		],
		0,
		"Dalglish, funded by Jack Walker. Alan Shearer scored 34 league goals that season."
	],
	[
		3,
		"Football",
		"Which player scored the Premier League title-winning goal for Manchester City against QPR in 2012?",
		[
			"Sergio Agüero",
			"Edin Džeko",
			"Mario Balotelli",
			"David Silva"
		],
		0,
		"Agüero scored in the 94th minute to win the title on goal difference."
	],
	[
		3,
		"Football",
		"Which club won the Champions League in 2012, their first European Cup?",
		[
			"Chelsea",
			"Manchester City",
			"Bayern Munich",
			"Inter Milan"
		],
		0,
		"Chelsea beat Bayern on penalties in Munich."
	],
	[
		3,
		"Football",
		"Who managed Greece to the Euro 2004 title?",
		[
			"Otto Rehhagel",
			"Fernando Santos",
			"Guus Hiddink",
			"Ottmar Hitzfeld"
		],
		0,
		"Greece beat hosts Portugal in both the opening game and the final."
	],
	[
		3,
		"Football",
		"Who scored the winner in the 2019 Champions League final for Liverpool?",
		[
			"Divock Origi",
			"Mohamed Salah",
			"Sadio Mané",
			"Virgil van Dijk"
		],
		0,
		"Salah scored a penalty in the second minute; Origi made it 2-0 against Tottenham in Madrid."
	],
	[
		4,
		"Football",
		"Who scored the first goal in a men's World Cup?",
		[
			"Lucien Laurent",
			"Bert Patenaude",
			"Guillermo Stábile",
			"Héctor Castro"
		],
		0,
		"Laurent scored for France against Mexico on 13 July 1930."
	],
	[
		4,
		"Football",
		"Which club won the first FA Cup, in 1872?",
		[
			"Wanderers",
			"Royal Engineers",
			"Old Etonians",
			"Oxford University"
		],
		0,
		"Wanderers beat Royal Engineers 1-0 at the Kennington Oval."
	],
	[
		4,
		"Football",
		"Which club were the first winners of the Football League, in 1888-89?",
		[
			"Preston North End",
			"Aston Villa",
			"Everton",
			"Blackburn Rovers"
		],
		0,
		"Preston did the Double without losing a game: the original Invincibles."
	],
	[
		4,
		"Football",
		"Which team ended Celtic's run of nine Scottish titles in a row in 1975?",
		[
			"Rangers",
			"Aberdeen",
			"Hibernian",
			"Dundee United"
		],
		0,
		"Rangers won the last old First Division title. Rangers then matched the nine-in-a-row record in 1997."
	],
	[
		4,
		"Football",
		"How many goals did Dixie Dean score in the 1927-28 First Division season?",
		[
			"60",
			"52",
			"49",
			"64"
		],
		0,
		"Dean scored 60 league goals for Everton, still the English top-flight record."
	],
	[
		4,
		"Football",
		"Who scored the first goal in an FA Cup final at Wembley, in 1923?",
		[
			"David Jack",
			"Jack Smith",
			"Ted Vizard",
			"Billy Meredith"
		],
		0,
		"David Jack scored for Bolton against West Ham in the \"White Horse Final\". Bolton won 2-0."
	],
	[
		4,
		"Football",
		"Which country won the first Women's World Cup in 1991?",
		[
			"USA",
			"Norway",
			"Germany",
			"China"
		],
		0,
		"The USA beat Norway 2-1 in Guangzhou, Michelle Akers scoring both goals."
	],
	[
		4,
		"Football",
		"Which club won the first Women's Champions League final under that name, in 2010?",
		[
			"Turbine Potsdam",
			"Lyon",
			"Wolfsburg",
			"Arsenal"
		],
		0,
		"Potsdam beat Lyon on penalties in Getafe."
	],
	[
		4,
		"Football",
		"Which country won the women's Olympic football tournament at Paris 2024?",
		[
			"USA",
			"Brazil",
			"Spain",
			"Canada"
		],
		0,
		"The USA beat Brazil 1-0 at the Parc des Princes, Mallory Swanson scoring."
	],
	[
		4,
		"Football",
		"Who won the men's Ballon d'Or in 1968?",
		[
			"George Best",
			"Bobby Charlton",
			"Gerd Müller",
			"Eusébio"
		],
		0,
		"Best was 22 and had just won the European Cup with Manchester United."
	],
	[
		4,
		"Football",
		"Which club won the Scottish Premiership in 2020-21 to stop Celtic winning ten in a row?",
		[
			"Rangers",
			"Aberdeen",
			"Hearts",
			"Hibernian"
		],
		0,
		"Rangers, managed by Steven Gerrard, went unbeaten in the league."
	],
	[
		4,
		"Football",
		"Who scored the winning goal for Wimbledon in the 1988 FA Cup final?",
		[
			"Lawrie Sanchez",
			"John Fashanu",
			"Dennis Wise",
			"Vinnie Jones"
		],
		0,
		"Wimbledon beat Liverpool 1-0. Dave Beasant also saved a penalty, the first in an FA Cup final at Wembley."
	],
	[
		4,
		"Football",
		"Which Brazilian scored in every round of the 1970 World Cup?",
		[
			"Jairzinho",
			"Pelé",
			"Rivellino",
			"Tostão"
		],
		0,
		"Jairzinho scored in all six games, including the final against Italy."
	],
	[
		4,
		"Football",
		"Which country did Pia Sundhage play for?",
		[
			"Sweden",
			"Norway",
			"Denmark",
			"USA"
		],
		0,
		"Sundhage played for Sweden, then coached the USA to Olympic golds in 2008 and 2012."
	],
	[
		4,
		"Football",
		"Who was England women's first full-time professional head coach, appointed in 1998?",
		[
			"Hope Powell",
			"Ted Copeland",
			"Mark Sampson",
			"Phil Neville"
		],
		0,
		"Powell was also the first woman and first black manager of an England team."
	]
];
// src/data/bank2b.js
var BANK2B = [
	[
		1,
		"Cricket",
		"How many balls are in a standard over?",
		[
			"Six",
			"Five",
			"Eight",
			"Ten"
		],
		0,
		"Six legal deliveries. Australia used eight-ball overs at home for much of the 20th century."
	],
	[
		1,
		"Cricket",
		"What is the trophy contested by England and Australia in Test cricket?",
		[
			"The Ashes",
			"The Wisden Trophy",
			"The Basil D'Oliveira Trophy",
			"The Frank Worrell Trophy"
		],
		0,
		"The Ashes, named after a mock obituary for English cricket in 1882."
	],
	[
		1,
		"Cricket",
		"How many runs is a hit that clears the boundary without bouncing?",
		[
			"Six",
			"Four",
			"Five",
			"Eight"
		],
		0,
		"A six. If it bounces first, it's a four."
	],
	[
		1,
		"Cricket",
		"Which country won the first men's T20 World Cup in 2007?",
		[
			"India",
			"Pakistan",
			"Australia",
			"Sri Lanka"
		],
		0,
		"India beat Pakistan by five runs in Johannesburg."
	],
	[
		1,
		"Cricket",
		"Who captained England's men to the 2019 World Cup?",
		[
			"Eoin Morgan",
			"Joe Root",
			"Jos Buttler",
			"Ben Stokes"
		],
		0,
		"Morgan led the side from the 2015 low point to the title at Lord's."
	],
	[
		1,
		"Cricket",
		"What does lbw stand for?",
		[
			"Leg before wicket",
			"Long ball wide",
			"Left behind wicket",
			"Lost ball, walk"
		],
		0,
		"Out lbw if the ball would have hit the stumps but hit your pad first, within the rules."
	],
	[
		1,
		"Cricket",
		"Which country's women have won the most Cricket World Cups?",
		[
			"Australia",
			"England",
			"New Zealand",
			"India"
		],
		0,
		"Australia have won the 50-over Women's World Cup seven times."
	],
	[
		2,
		"Cricket",
		"Who was the first batter to score 200 in a men's one-day international?",
		[
			"Sachin Tendulkar",
			"Virender Sehwag",
			"Rohit Sharma",
			"Chris Gayle"
		],
		0,
		"Tendulkar made 200 not out against South Africa in 2010. Belinda Clark had made 229 not out in a women's ODI in 1997."
	],
	[
		2,
		"Cricket",
		"Who made 229 not out in 1997, the first double hundred in any one-day international?",
		[
			"Belinda Clark",
			"Charlotte Edwards",
			"Debbie Hockley",
			"Karen Rolton"
		],
		0,
		"Clark did it for Australia against Denmark in Mumbai, 13 years before any man."
	],
	[
		2,
		"Cricket",
		"How many Test wickets did Shane Warne take?",
		[
			"708",
			"800",
			"619",
			"563"
		],
		0,
		"Warne took 708. Muttiah Muralitharan holds the record with 800."
	],
	[
		2,
		"Cricket",
		"Which England bowler has taken the most Test wickets?",
		[
			"James Anderson",
			"Stuart Broad",
			"Ian Botham",
			"Fred Trueman"
		],
		0,
		"Anderson finished with 704, the most by any fast bowler."
	],
	[
		2,
		"Cricket",
		"Which county has won the most County Championships?",
		[
			"Yorkshire",
			"Surrey",
			"Middlesex",
			"Lancashire"
		],
		0,
		"Yorkshire have won 33, one of them shared."
	],
	[
		2,
		"Cricket",
		"Who hit six sixes in an over in a first-class match in 1968?",
		[
			"Garfield Sobers",
			"Ravi Shastri",
			"Viv Richards",
			"Clive Lloyd"
		],
		0,
		"Sobers did it for Nottinghamshire against Glamorgan at Swansea, off Malcolm Nash."
	],
	[
		2,
		"Cricket",
		"Which team won the first Women's T20 World Cup in 2009?",
		[
			"England",
			"Australia",
			"New Zealand",
			"West Indies"
		],
		0,
		"England beat New Zealand at Lord's, the same summer they also held the 50-over title and the Ashes."
	],
	[
		2,
		"Cricket",
		"Which Indian captain led his side to the 1983 World Cup?",
		[
			"Kapil Dev",
			"Sunil Gavaskar",
			"Mohinder Amarnath",
			"Ravi Shastri"
		],
		0,
		"India beat West Indies, the two-time holders, at Lord's."
	],
	[
		2,
		"Cricket",
		"What did Ben Stokes score not out at Headingley in 2019 to win the Test by one wicket?",
		[
			"135",
			"115",
			"84",
			"158"
		],
		0,
		"England chased 359 with Jack Leach scoring one not out at the other end."
	],
	[
		3,
		"Cricket",
		"Who scored 400 not out, the highest individual Test score?",
		[
			"Brian Lara",
			"Matthew Hayden",
			"Mahela Jayawardene",
			"Don Bradman"
		],
		0,
		"Lara made it against England in Antigua in 2004, ten years after his 375."
	],
	[
		3,
		"Cricket",
		"Who holds the record for the highest score in women's Test cricket, 242?",
		[
			"Kiran Baloch",
			"Annabel Sutherland",
			"Mithali Raj",
			"Karen Rolton"
		],
		0,
		"Baloch made 242 for Pakistan against West Indies in Karachi in 2004."
	],
	[
		3,
		"Cricket",
		"Who has taken the most wickets in women's one-day internationals?",
		[
			"Jhulan Goswami",
			"Cathryn Fitzpatrick",
			"Shabnim Ismail",
			"Anisa Mohammed"
		],
		0,
		"Goswami took 255 ODI wickets for India between 2002 and 2022."
	],
	[
		3,
		"Cricket",
		"Which team won the first men's World Test Championship final in 2021?",
		[
			"New Zealand",
			"India",
			"Australia",
			"England"
		],
		0,
		"New Zealand beat India in Southampton."
	],
	[
		3,
		"Cricket",
		"Who took ten wickets in a Test innings against Pakistan in 1999?",
		[
			"Anil Kumble",
			"Harbhajan Singh",
			"Javagal Srinath",
			"Venkatesh Prasad"
		],
		0,
		"Kumble took 10 for 74 in Delhi. Jim Laker (1956) and Ajaz Patel (2021) are the others."
	],
	[
		3,
		"Cricket",
		"Which batter has the highest Test batting average among those with 20 innings or more?",
		[
			"Don Bradman",
			"Adam Voges",
			"Steve Smith",
			"Graeme Pollock"
		],
		0,
		"Bradman averaged 99.94. He needed four runs in his final innings for 100 and was out for a duck."
	],
	[
		3,
		"Cricket",
		"Who were the first winners of The Hundred women's competition in 2021?",
		[
			"Oval Invincibles",
			"Southern Brave",
			"Northern Superchargers",
			"London Spirit"
		],
		0,
		"Oval Invincibles beat Southern Brave at Lord's and won it again in 2022."
	],
	[
		3,
		"Cricket",
		"Which England bowler took 6 for 46 against India in the 2017 Women's World Cup final?",
		[
			"Anya Shrubsole",
			"Katherine Brunt",
			"Alex Hartley",
			"Jenny Gunn"
		],
		0,
		"India lost their last seven wickets for 28 at Lord's, and Shrubsole took five of them."
	],
	[
		4,
		"Cricket",
		"In which year was the first Test match played?",
		[
			"1877",
			"1882",
			"1868",
			"1899"
		],
		0,
		"Australia beat England by 45 runs at Melbourne in March 1877."
	],
	[
		4,
		"Cricket",
		"Which ground hosted the first women's Test match, in 1934?",
		[
			"Brisbane Exhibition Ground",
			"Lord's",
			"The Oval",
			"Sydney Cricket Ground"
		],
		0,
		"England beat Australia by nine wickets in Brisbane in December 1934."
	],
	[
		4,
		"Cricket",
		"Who captained England to the 1973 Women's World Cup, two years before the first men's tournament?",
		[
			"Rachael Heyhoe Flint",
			"Enid Bakewell",
			"Lynne Thomas",
			"Mary Pilling"
		],
		0,
		"The tournament was funded by Sir Jack Hayward. England won it."
	],
	[
		4,
		"Cricket",
		"Which bowler took a hat-trick in both innings of the same Test, in 1912?",
		[
			"Jimmy Matthews",
			"Sydney Barnes",
			"Hugh Trumble",
			"Monty Noble"
		],
		0,
		"Australia's Jimmy Matthews did it against South Africa at Old Trafford."
	],
	[
		1,
		"Rugby union",
		"How many points is a try worth in rugby union?",
		[
			"5",
			"4",
			"3",
			"6"
		],
		0,
		"Five since 1992. It was four before that."
	],
	[
		1,
		"Rugby union",
		"How many players are on the pitch for each team in rugby union?",
		[
			"15",
			"13",
			"11",
			"7"
		],
		0,
		"Fifteen a side. Rugby league has 13 and sevens has 7."
	],
	[
		1,
		"Rugby union",
		"Which country won the first men's Rugby World Cup in 1987?",
		[
			"New Zealand",
			"Australia",
			"France",
			"South Africa"
		],
		0,
		"New Zealand beat France 29-9 in Auckland."
	],
	[
		1,
		"Rugby union",
		"Who kicked the drop goal that won England the 2003 Rugby World Cup?",
		[
			"Jonny Wilkinson",
			"Paul Grayson",
			"Mike Catt",
			"Matt Dawson"
		],
		0,
		"With his weaker right foot, in the last minute of extra time in Sydney."
	],
	[
		1,
		"Rugby union",
		"Which country are known as the Springboks?",
		[
			"South Africa",
			"Australia",
			"New Zealand",
			"Argentina"
		],
		0,
		"Argentina are the Pumas and Australia the Wallabies."
	],
	[
		1,
		"Rugby union",
		"Which country won the 2025 Women's Rugby World Cup on home soil?",
		[
			"England",
			"New Zealand",
			"Canada",
			"France"
		],
		0,
		"England beat Canada 33-13 at Twickenham."
	],
	[
		2,
		"Rugby union",
		"Which country has won the most men's Rugby World Cups?",
		[
			"South Africa",
			"New Zealand",
			"Australia",
			"England"
		],
		0,
		"South Africa have four: 1995, 2007, 2019 and 2023. New Zealand have three."
	],
	[
		2,
		"Rugby union",
		"Which country has won the most Women's Rugby World Cups?",
		[
			"New Zealand",
			"England",
			"USA",
			"Canada"
		],
		0,
		"New Zealand's Black Ferns have won six."
	],
	[
		2,
		"Rugby union",
		"What is the trophy contested by England and Scotland?",
		[
			"The Calcutta Cup",
			"The Millennium Trophy",
			"The Centenary Quaich",
			"The Auld Alliance Trophy"
		],
		0,
		"Made from melted-down rupees from the Calcutta Football Club, first played for in 1879."
	],
	[
		2,
		"Rugby union",
		"How many points is a drop goal worth?",
		[
			"3",
			"2",
			"4",
			"1"
		],
		0,
		"Three, the same as a penalty kick at goal."
	],
	[
		2,
		"Rugby union",
		"Which country joined the Five Nations in 2000 to make it the Six Nations?",
		[
			"Italy",
			"Georgia",
			"Argentina",
			"Romania"
		],
		0,
		"Italy beat Scotland in their first game."
	],
	[
		2,
		"Rugby union",
		"Who was South Africa's first black Test captain?",
		[
			"Siya Kolisi",
			"Bryan Habana",
			"Tendai Mtawarira",
			"Chester Williams"
		],
		0,
		"Kolisi became captain in 2018 and lifted the World Cup in 2019 and 2023."
	],
	[
		2,
		"Rugby union",
		"Who was England head coach when they won the 2003 World Cup?",
		[
			"Clive Woodward",
			"Eddie Jones",
			"Martin Johnson",
			"Andy Robinson"
		],
		0,
		"Martin Johnson was the captain."
	],
	[
		3,
		"Rugby union",
		"Who scored 15 Rugby World Cup tries, the joint record?",
		[
			"Jonah Lomu and Bryan Habana",
			"Doug Howlett and Drew Mitchell",
			"David Campese and Rory Underwood",
			"Shane Williams and Vincent Clerc"
		],
		0,
		"Lomu scored 15 in two tournaments; Habana equalled him in 2015."
	],
	[
		3,
		"Rugby union",
		"Which team won the first Women's Six Nations title under that name in 2002?",
		[
			"France",
			"England",
			"Scotland",
			"Ireland"
		],
		0,
		"France won the Grand Slam. England won the next year."
	],
	[
		3,
		"Rugby union",
		"Which side beat the All Blacks at the 2007 World Cup quarter-final in Cardiff?",
		[
			"France",
			"England",
			"Australia",
			"South Africa"
		],
		0,
		"France won 20-18."
	],
	[
		3,
		"Rugby union",
		"Which country won the men's rugby sevens gold at the first Olympic tournament in 2016?",
		[
			"Fiji",
			"New Zealand",
			"Great Britain",
			"South Africa"
		],
		0,
		"Fiji's first Olympic medal of any colour. Australia won the women's gold."
	],
	[
		3,
		"Rugby union",
		"Who captained the British and Irish Lions to the 1997 series win in South Africa?",
		[
			"Martin Johnson",
			"Lawrence Dallaglio",
			"Jeremy Guscott",
			"Keith Wood"
		],
		0,
		"Ian McGeechan was the coach."
	],
	[
		4,
		"Rugby union",
		"Which country won the first Women's Rugby World Cup in 1991?",
		[
			"USA",
			"England",
			"New Zealand",
			"France"
		],
		0,
		"The USA beat England 19-6 in Cardiff."
	],
	[
		4,
		"Rugby union",
		"Which country did Japan famously beat at the 2015 World Cup in Brighton?",
		[
			"South Africa",
			"Scotland",
			"Samoa",
			"USA"
		],
		0,
		"Japan won 34-32 with a try in the last minute."
	],
	[
		4,
		"Rugby union",
		"Who holds the record for the most Test caps in men's rugby union?",
		[
			"Alun Wyn Jones",
			"Sam Whitelock",
			"Sergio Parisse",
			"Richie McCaw"
		],
		0,
		"Jones won 158 caps for Wales and 12 for the Lions, 170 in all."
	],
	[
		1,
		"Rugby league",
		"How many players does each team have on the field in rugby league?",
		[
			"13",
			"15",
			"12",
			"11"
		],
		0,
		"Thirteen a side."
	],
	[
		1,
		"Rugby league",
		"How many points is a try worth in rugby league?",
		[
			"4",
			"5",
			"3",
			"6"
		],
		0,
		"Four points, with two for a conversion."
	],
	[
		1,
		"Rugby league",
		"In which year did rugby league split from rugby union?",
		[
			"1895",
			"1871",
			"1905",
			"1923"
		],
		0,
		"Twenty-two clubs met at the George Hotel in Huddersfield in August 1895."
	],
	[
		2,
		"Rugby league",
		"How many tackles does a team get before handing over possession?",
		[
			"Six",
			"Four",
			"Five",
			"Eight"
		],
		0,
		"The six-tackle rule came in in 1972, replacing four tackles."
	],
	[
		2,
		"Rugby league",
		"Where was the Challenge Cup final played for most of its history?",
		[
			"Wembley",
			"Old Trafford",
			"Twickenham",
			"Headingley"
		],
		0,
		"Wembley from 1929, apart from wartime and rebuilding years."
	],
	[
		2,
		"Rugby league",
		"Which country has won the most men's Rugby League World Cups?",
		[
			"Australia",
			"New Zealand",
			"England",
			"Great Britain"
		],
		0,
		"Australia have won 13 of the 17 tournaments, the latest in 2026."
	],
	[
		3,
		"Rugby league",
		"Who won the 2021 Women's Rugby League World Cup, played in 2022?",
		[
			"Australia",
			"New Zealand",
			"England",
			"Papua New Guinea"
		],
		0,
		"Australia beat New Zealand 54-4 at Old Trafford."
	],
	[
		3,
		"Rugby league",
		"What is the annual series between New South Wales and Queensland called?",
		[
			"State of Origin",
			"The Ashes",
			"The Four Nations",
			"The Interstate Cup"
		],
		0,
		"First played under State of Origin rules in 1980."
	],
	[
		3,
		"Rugby league",
		"Which club won the first Super League title in 1996?",
		[
			"St Helens",
			"Wigan Warriors",
			"Bradford Bulls",
			"Leeds Rhinos"
		],
		0,
		"St Helens also won the Challenge Cup that year."
	],
	[
		3,
		"Rugby league",
		"Which club won eight Challenge Cups in a row between 1988 and 1995?",
		[
			"Wigan",
			"Widnes",
			"St Helens",
			"Leeds"
		],
		0,
		"Wigan won 43 cup ties in a row in that run."
	],
	[
		1,
		"Tennis",
		"On what surface is Wimbledon played?",
		[
			"Grass",
			"Clay",
			"Hard court",
			"Carpet"
		],
		0,
		"Grass. The French Open is on clay; the Australian and US Opens are on hard courts."
	],
	[
		1,
		"Tennis",
		"What is a score of zero called in tennis?",
		[
			"Love",
			"Nil",
			"Duck",
			"Zip"
		],
		0,
		"Love. One theory is that it comes from the French for egg, l'oeuf."
	],
	[
		1,
		"Tennis",
		"Who won the 2021 US Open as a qualifier?",
		[
			"Emma Raducanu",
			"Leylah Fernandez",
			"Iga Świątek",
			"Naomi Osaka"
		],
		0,
		"Raducanu won ten matches without dropping a set, the first qualifier to win a Grand Slam."
	],
	[
		1,
		"Tennis",
		"Who won Wimbledon in 2013, the first British man to do so since 1936?",
		[
			"Andy Murray",
			"Tim Henman",
			"Greg Rusedski",
			"Cameron Norrie"
		],
		0,
		"Fred Perry was the last before him. Murray won again in 2016."
	],
	[
		1,
		"Tennis",
		"Which Grand Slam is played at Roland Garros?",
		[
			"The French Open",
			"The Australian Open",
			"The US Open",
			"Wimbledon"
		],
		0,
		"Named after a First World War pilot."
	],
	[
		2,
		"Tennis",
		"Who was the last British woman to win the Wimbledon singles title, in 1977?",
		[
			"Virginia Wade",
			"Sue Barker",
			"Ann Jones",
			"Jo Durie"
		],
		0,
		"Wade won in the Queen's silver jubilee year. No British woman has won since."
	],
	[
		2,
		"Tennis",
		"Which player won the most Wimbledon women's singles titles?",
		[
			"Martina Navratilova",
			"Serena Williams",
			"Steffi Graf",
			"Helen Wills Moody"
		],
		0,
		"Navratilova won nine, six of them in a row from 1982 to 1987."
	],
	[
		2,
		"Tennis",
		"Who won the calendar Grand Slam in 1988 and Olympic gold too?",
		[
			"Steffi Graf",
			"Martina Navratilova",
			"Monica Seles",
			"Chris Evert"
		],
		0,
		"The Golden Slam. No one else has done it in singles in the same year."
	],
	[
		2,
		"Tennis",
		"What is the men's international team competition in tennis?",
		[
			"The Davis Cup",
			"The Ryder Cup",
			"The Fed Cup",
			"The Hopman Cup"
		],
		0,
		"The women's equivalent is now the Billie Jean King Cup."
	],
	[
		2,
		"Tennis",
		"Who won the \"Battle of the Sexes\" against Bobby Riggs in 1973?",
		[
			"Billie Jean King",
			"Margaret Court",
			"Chris Evert",
			"Evonne Goolagong"
		],
		0,
		"King won in straight sets in front of a TV audience of about 90 million. Court had lost to Riggs earlier that year."
	],
	[
		2,
		"Tennis",
		"How many games must you usually win to take a set?",
		[
			"Six, by two clear",
			"Five",
			"Seven",
			"Ten"
		],
		0,
		"Six games with a two-game lead, or a tie-break at 6-6."
	],
	[
		3,
		"Tennis",
		"Which pair won 109 women's doubles matches in a row between 1983 and 1985?",
		[
			"Martina Navratilova and Pam Shriver",
			"Venus and Serena Williams",
			"Gigi Fernández and Natasha Zvereva",
			"Louise Brough and Margaret duPont"
		],
		0,
		"Navratilova and Shriver also won a calendar Grand Slam in doubles in 1984."
	],
	[
		3,
		"Tennis",
		"Which man won the longest match in tennis history, at Wimbledon in 2010?",
		[
			"John Isner",
			"Nicolas Mahut",
			"Kevin Anderson",
			"Ivo Karlović"
		],
		0,
		"Isner beat Mahut 70-68 in the fifth set over three days. It lasted 11 hours and 5 minutes."
	],
	[
		3,
		"Tennis",
		"Who won the first Open-era Wimbledon men's singles title, in 1968?",
		[
			"Rod Laver",
			"Ken Rosewall",
			"John Newcombe",
			"Arthur Ashe"
		],
		0,
		"Laver won it again in 1969, the year of his second calendar Grand Slam."
	],
	[
		3,
		"Tennis",
		"Who was the first black player to win a Grand Slam singles title?",
		[
			"Althea Gibson",
			"Arthur Ashe",
			"Yannick Noah",
			"Venus Williams"
		],
		0,
		"Gibson won the French Championships in 1956, then Wimbledon and the US title in 1957 and 1958."
	],
	[
		4,
		"Tennis",
		"Who won the first Wimbledon ladies' singles title, in 1884?",
		[
			"Maud Watson",
			"Lottie Dod",
			"Blanche Bingley",
			"Lilian Watson"
		],
		0,
		"Maud Watson beat her sister Lilian in the final."
	],
	[
		4,
		"Tennis",
		"Which player won Wimbledon in 1987 and celebrated by climbing into the players' box?",
		[
			"Pat Cash",
			"Stefan Edberg",
			"Ivan Lendl",
			"Boris Becker"
		],
		0,
		"Cash beat Lendl in straight sets and started a tradition."
	],
	[
		1,
		"Golf",
		"How many holes are played in a standard round of golf?",
		[
			"18",
			"9",
			"12",
			"24"
		],
		0,
		"Eighteen, a number fixed by the Old Course at St Andrews in 1764."
	],
	[
		1,
		"Golf",
		"What is one shot under par on a hole called?",
		[
			"A birdie",
			"An eagle",
			"A bogey",
			"An albatross"
		],
		0,
		"Two under is an eagle and three under an albatross. One over is a bogey."
	],
	[
		1,
		"Golf",
		"Which tournament is played every year at Augusta National?",
		[
			"The Masters",
			"The Open",
			"The US Open",
			"The PGA Championship"
		],
		0,
		"The winner gets a green jacket."
	],
	[
		1,
		"Golf",
		"What is the team competition between Europe and the USA in men's golf?",
		[
			"The Ryder Cup",
			"The Solheim Cup",
			"The Walker Cup",
			"The Presidents Cup"
		],
		0,
		"The women's equivalent is the Solheim Cup."
	],
	[
		2,
		"Golf",
		"Who has won the most men's major championships?",
		[
			"Jack Nicklaus",
			"Tiger Woods",
			"Walter Hagen",
			"Ben Hogan"
		],
		0,
		"Nicklaus won 18. Woods has 15."
	],
	[
		2,
		"Golf",
		"Which course is known as \"the home of golf\"?",
		[
			"St Andrews",
			"Muirfield",
			"Carnoustie",
			"Royal Troon"
		],
		0,
		"The Old Course at St Andrews."
	],
	[
		2,
		"Golf",
		"Which country won the first Solheim Cup in 1990?",
		[
			"USA",
			"Europe",
			"Sweden",
			"Great Britain"
		],
		0,
		"The USA won it at Lake Nona in Florida."
	],
	[
		2,
		"Golf",
		"Who won the 2011 US Open by eight shots at the age of 22?",
		[
			"Rory McIlroy",
			"Graeme McDowell",
			"Martin Kaymer",
			"Luke Donald"
		],
		0,
		"McIlroy set a US Open record total of 16 under par at Congressional."
	],
	[
		2,
		"Golf",
		"Which Swedish golfer won ten women's majors?",
		[
			"Annika Sörenstam",
			"Liselotte Neumann",
			"Helen Alfredsson",
			"Pernilla Lindberg"
		],
		0,
		"Sörenstam also shot the first 59 on the LPGA Tour, in 2001."
	],
	[
		3,
		"Golf",
		"Who won the Masters in 1997 by 12 shots, aged 21?",
		[
			"Tiger Woods",
			"Ernie Els",
			"Phil Mickelson",
			"Justin Leonard"
		],
		0,
		"Woods set the then-record total of 18 under par."
	],
	[
		3,
		"Golf",
		"Which golfer has won the most women's majors?",
		[
			"Patty Berg",
			"Mickey Wright",
			"Louise Suggs",
			"Annika Sörenstam"
		],
		0,
		"Berg won 15 women's majors between 1937 and 1958."
	],
	[
		3,
		"Golf",
		"Who won The Open in 1999 after Jean van de Velde's collapse on the 72nd hole?",
		[
			"Paul Lawrie",
			"Justin Leonard",
			"Jean van de Velde",
			"Craig Parry"
		],
		0,
		"Lawrie came from ten shots back in the final round and won the play-off at Carnoustie."
	],
	[
		3,
		"Golf",
		"Which European captain led the \"Miracle at Medinah\" comeback in 2012?",
		[
			"José María Olazábal",
			"Colin Montgomerie",
			"Darren Clarke",
			"Paul McGinley"
		],
		0,
		"Europe came from 10-6 down on the final day to win 14½-13½."
	],
	[
		4,
		"Golf",
		"Who was the first European to win the Masters, in 1980?",
		[
			"Seve Ballesteros",
			"Bernhard Langer",
			"Sandy Lyle",
			"Nick Faldo"
		],
		0,
		"Ballesteros was 23. Langer won in 1985 and Lyle in 1988."
	],
	[
		4,
		"Golf",
		"Who won the first Open Championship, in 1860?",
		[
			"Willie Park Sr",
			"Old Tom Morris",
			"Young Tom Morris",
			"Andrew Strath"
		],
		0,
		"Played over three rounds of Prestwick's 12 holes."
	]
];
// src/data/bank2c.js
var BANK2C = [
	[
		1,
		"Athletics",
		"Who holds the men's 100 metres world record?",
		[
			"Usain Bolt",
			"Yohan Blake",
			"Tyson Gay",
			"Asafa Powell"
		],
		0,
		"Bolt ran 9.58 seconds in Berlin in 2009."
	],
	[
		1,
		"Athletics",
		"How long is a marathon?",
		[
			"26.2 miles",
			"24 miles",
			"25 miles",
			"30 miles"
		],
		0,
		"42.195 kilometres, a distance fixed after the 1908 London Olympics."
	],
	[
		1,
		"Athletics",
		"Who won heptathlon gold for Great Britain at London 2012?",
		[
			"Jessica Ennis-Hill",
			"Katarina Johnson-Thompson",
			"Denise Lewis",
			"Kelly Sotherton"
		],
		0,
		"On Super Saturday, the same evening Greg Rutherford and Mo Farah won."
	],
	[
		1,
		"Athletics",
		"Which event involves a hammer, a discus, a shot and a javelin?",
		[
			"Throwing events",
			"Combined events",
			"Jumps",
			"Hurdles"
		],
		0,
		"All four are throwing events."
	],
	[
		2,
		"Athletics",
		"Who won the 5,000m and 10,000m double at both the 2012 and 2016 Olympics?",
		[
			"Mo Farah",
			"Kenenisa Bekele",
			"Haile Gebrselassie",
			"Joshua Cheptegei"
		],
		0,
		"Only Lasse Virén had done the double at two Olympics before him, in 1972 and 1976."
	],
	[
		2,
		"Athletics",
		"Who set the women's marathon world record of 2:15:25 in London in 2003?",
		[
			"Paula Radcliffe",
			"Mary Keitany",
			"Brigid Kosgei",
			"Tegla Loroupe"
		],
		0,
		"The record stood for 16 years, until Brigid Kosgei ran 2:14:04 in Chicago in 2019."
	],
	[
		2,
		"Athletics",
		"Who won 800m and 1500m gold at the 2004 Athens Olympics?",
		[
			"Kelly Holmes",
			"Paula Radcliffe",
			"Jolanda Čeplak",
			"Maria Mutola"
		],
		0,
		"Holmes was 34 and became Dame Kelly the following year."
	],
	[
		2,
		"Athletics",
		"Which British man won triple jump gold at the Sydney 2000 Olympics?",
		[
			"Jonathan Edwards",
			"Phillips Idowu",
			"Larry Achike",
			"Keith Connor"
		],
		0,
		"Edwards also holds the world record, 18.29 metres, set in 1995."
	],
	[
		2,
		"Athletics",
		"In which city did Roger Bannister run the first sub-four-minute mile?",
		[
			"Oxford",
			"London",
			"Cambridge",
			"Birmingham"
		],
		0,
		"At the Iffley Road track on 6 May 1954, in 3:59.4."
	],
	[
		3,
		"Athletics",
		"Who won four gold medals at the 1936 Berlin Olympics?",
		[
			"Jesse Owens",
			"Ralph Metcalfe",
			"Glenn Morris",
			"Archie Williams"
		],
		0,
		"The 100m, 200m, long jump and 4x100m relay."
	],
	[
		3,
		"Athletics",
		"Which woman won four gold medals at the 1948 London Olympics?",
		[
			"Fanny Blankers-Koen",
			"Micheline Ostermeyer",
			"Dorothy Manley",
			"Shirley Strickland"
		],
		0,
		"She was a 30-year-old mother of two, nicknamed \"the Flying Housewife\"."
	],
	[
		3,
		"Athletics",
		"Who set the women's 100m world record of 10.49 seconds in 1988?",
		[
			"Florence Griffith Joyner",
			"Marion Jones",
			"Evelyn Ashford",
			"Merlene Ottey"
		],
		0,
		"The record has stood since July 1988."
	],
	[
		3,
		"Athletics",
		"Who won Olympic 400m hurdles gold in 1992 in a world record time?",
		[
			"Kevin Young",
			"Edwin Moses",
			"Kriss Akabusi",
			"Danny Harris"
		],
		0,
		"Young ran 46.78 in Barcelona, the first man under 47 seconds."
	],
	[
		3,
		"Athletics",
		"Who won heptathlon world gold in 2019 and 2023 for Great Britain?",
		[
			"Katarina Johnson-Thompson",
			"Jessica Ennis-Hill",
			"Morgan Lake",
			"Niamh Emerson"
		],
		0,
		"Johnson-Thompson set a British record of 6,981 points in Doha in 2019."
	],
	[
		4,
		"Athletics",
		"Who was the first woman to run 100m in under 11 seconds with electronic timing?",
		[
			"Marlies Göhr (then Oelsner)",
			"Wyomia Tyus",
			"Renate Stecher",
			"Irena Szewińska"
		],
		0,
		"She ran 10.88 in Dresden in 1977."
	],
	[
		4,
		"Athletics",
		"In which year did women's athletics first feature at the Olympics?",
		[
			"1928",
			"1900",
			"1912",
			"1936"
		],
		0,
		"Amsterdam 1928 had five women's athletics events."
	],
	[
		4,
		"Athletics",
		"Who won the first women's Olympic marathon, in 1984?",
		[
			"Joan Benoit",
			"Grete Waitz",
			"Rosa Mota",
			"Ingrid Kristiansen"
		],
		0,
		"Benoit won in Los Angeles, with Waitz second."
	],
	[
		1,
		"Formula 1",
		"How many F1 world titles did Lewis Hamilton win with Mercedes?",
		[
			"Six",
			"Five",
			"Seven",
			"Four"
		],
		0,
		"Six with Mercedes plus one with McLaren in 2008: seven in all."
	],
	[
		1,
		"Formula 1",
		"Which team does the \"Prancing Horse\" badge belong to?",
		[
			"Ferrari",
			"Lamborghini",
			"Maserati",
			"Porsche"
		],
		0,
		"Ferrari have raced in every F1 season since 1950."
	],
	[
		1,
		"Formula 1",
		"What does a chequered flag mean?",
		[
			"The end of the race",
			"Danger ahead",
			"Pit lane open",
			"Slow down"
		],
		0,
		"The first car to take the chequered flag wins."
	],
	[
		2,
		"Formula 1",
		"Who won the first F1 world championship in 1950?",
		[
			"Giuseppe Farina",
			"Juan Manuel Fangio",
			"Alberto Ascari",
			"Luigi Fagioli"
		],
		0,
		"Farina won the first championship race, at Silverstone."
	],
	[
		2,
		"Formula 1",
		"How many world titles did Michael Schumacher win?",
		[
			"Seven",
			"Six",
			"Five",
			"Eight"
		],
		0,
		"Two with Benetton and five in a row with Ferrari, 2000 to 2004."
	],
	[
		2,
		"Formula 1",
		"Who was F1's first British world champion?",
		[
			"Mike Hawthorn",
			"Stirling Moss",
			"Graham Hill",
			"Jim Clark"
		],
		0,
		"Hawthorn won in 1958 by one point. Moss never won the title."
	],
	[
		2,
		"Formula 1",
		"Which circuit hosts the Monaco Grand Prix?",
		[
			"Circuit de Monaco, on the streets of Monte Carlo",
			"Paul Ricard",
			"Monza",
			"Imola"
		],
		0,
		"It has been on the calendar almost every year since 1955."
	],
	[
		3,
		"Formula 1",
		"Who is the only driver to win the world title after his death?",
		[
			"Jochen Rindt",
			"Gilles Villeneuve",
			"Ronnie Peterson",
			"Ayrton Senna"
		],
		0,
		"Rindt was killed at Monza in 1970 and no one passed his points total."
	],
	[
		3,
		"Formula 1",
		"Who was the last woman to start a Formula 1 Grand Prix?",
		[
			"Lella Lombardi",
			"Maria Teresa de Filippis",
			"Desiré Wilson",
			"Giovanna Amati"
		],
		0,
		"Lombardi started 12 races in 1975 and 1976 and is the only woman to score points. Amati failed to qualify in 1992."
	],
	[
		3,
		"Formula 1",
		"Who won the 2009 world title with Brawn GP?",
		[
			"Jenson Button",
			"Rubens Barrichello",
			"Sebastian Vettel",
			"Mark Webber"
		],
		0,
		"Brawn won the constructors' title in its only season."
	],
	[
		4,
		"Formula 1",
		"Who was the first woman to start a Formula 1 world championship race?",
		[
			"Maria Teresa de Filippis",
			"Lella Lombardi",
			"Divina Galica",
			"Desiré Wilson"
		],
		0,
		"De Filippis raced in 1958 and finished tenth in Belgium."
	],
	[
		4,
		"Formula 1",
		"Which team won the first constructors' championship, in 1958?",
		[
			"Vanwall",
			"Ferrari",
			"Cooper",
			"BRM"
		],
		0,
		"Vanwall, a British team, with Moss and Brooks driving."
	],
	[
		1,
		"American football",
		"How many points is a touchdown worth?",
		[
			"6",
			"7",
			"3",
			"5"
		],
		0,
		"Six, then a kick for one more or a play for two."
	],
	[
		1,
		"American football",
		"What is the NFL's championship game called?",
		[
			"The Super Bowl",
			"The World Series",
			"The Stanley Cup",
			"The Rose Bowl"
		],
		0,
		"First played in January 1967."
	],
	[
		2,
		"American football",
		"Which quarterback has won the most Super Bowls?",
		[
			"Tom Brady",
			"Joe Montana",
			"Terry Bradshaw",
			"Patrick Mahomes"
		],
		0,
		"Brady won seven: six with New England and one with Tampa Bay."
	],
	[
		2,
		"American football",
		"Which team completed the NFL's only perfect season, including the Super Bowl?",
		[
			"Miami Dolphins, 1972",
			"New England Patriots, 2007",
			"Chicago Bears, 1985",
			"San Francisco 49ers, 1984"
		],
		0,
		"The Dolphins went 17-0. The 2007 Patriots won 18 then lost the Super Bowl."
	],
	[
		3,
		"American football",
		"Who won the first Super Bowl, in 1967?",
		[
			"Green Bay Packers",
			"Kansas City Chiefs",
			"New York Jets",
			"Baltimore Colts"
		],
		0,
		"They beat Kansas City 35-10. The trophy is named after their coach, Vince Lombardi."
	],
	[
		3,
		"American football",
		"Which NFL team has played games in London most often?",
		[
			"Jacksonville Jaguars",
			"Miami Dolphins",
			"New York Jets",
			"Chicago Bears"
		],
		0,
		"The Jaguars have played a home game in London most seasons since 2013."
	],
	[
		1,
		"Basketball",
		"How many points is a shot from beyond the arc worth?",
		[
			"3",
			"2",
			"4",
			"1"
		],
		0,
		"The NBA brought in the three-point line in 1979."
	],
	[
		2,
		"Basketball",
		"Who scored 100 points in an NBA game in 1962?",
		[
			"Wilt Chamberlain",
			"Bill Russell",
			"Elgin Baylor",
			"Jerry West"
		],
		0,
		"For Philadelphia against the New York Knicks in Hershey, Pennsylvania."
	],
	[
		2,
		"Basketball",
		"How many NBA titles did Michael Jordan win?",
		[
			"Six",
			"Five",
			"Four",
			"Seven"
		],
		0,
		"All with Chicago, in two three-peats: 1991-93 and 1996-98."
	],
	[
		3,
		"Basketball",
		"Who is the NBA's all-time leading scorer?",
		[
			"LeBron James",
			"Kareem Abdul-Jabbar",
			"Karl Malone",
			"Kobe Bryant"
		],
		0,
		"James passed Abdul-Jabbar in February 2023."
	],
	[
		3,
		"Basketball",
		"Which country won women's basketball gold at every Olympics from 1996 to 2024?",
		[
			"USA",
			"Australia",
			"Russia",
			"Spain"
		],
		0,
		"Eight Olympic golds in a row."
	],
	[
		3,
		"Ice hockey",
		"Who holds the NHL record for career goals?",
		[
			"Alex Ovechkin",
			"Wayne Gretzky",
			"Gordie Howe",
			"Jaromír Jágr"
		],
		0,
		"Ovechkin passed Gretzky's 894 in April 2025."
	],
	[
		2,
		"Baseball",
		"How many strikes make an out in baseball?",
		[
			"Three",
			"Four",
			"Two",
			"Five"
		],
		0,
		"Three strikes and you're out. Four balls is a walk."
	],
	[
		1,
		"Boxing",
		"Which boxer was known as \"The Greatest\"?",
		[
			"Muhammad Ali",
			"Joe Frazier",
			"George Foreman",
			"Sugar Ray Leonard"
		],
		0,
		"Ali won the world heavyweight title three times."
	],
	[
		2,
		"Boxing",
		"Where did the \"Rumble in the Jungle\" take place in 1974?",
		[
			"Kinshasa, Zaire",
			"Lagos, Nigeria",
			"Accra, Ghana",
			"Manila, Philippines"
		],
		0,
		"Ali beat George Foreman in the eighth round. The \"Thrilla in Manila\" was against Frazier in 1975."
	],
	[
		2,
		"Boxing",
		"Who was the first British woman to win Olympic boxing gold?",
		[
			"Nicola Adams",
			"Lauren Price",
			"Natasha Jonas",
			"Katie Taylor"
		],
		0,
		"Adams won flyweight gold at London 2012, the first Olympics with women's boxing, and again in 2016."
	],
	[
		3,
		"Boxing",
		"Who became the first boxer in the four-belt era to be undisputed champion in two weight classes?",
		[
			"Claressa Shields",
			"Katie Taylor",
			"Oleksandr Usyk",
			"Terence Crawford"
		],
		0,
		"Shields was undisputed at middleweight in 2019 and light middleweight in 2021."
	],
	[
		3,
		"Boxing",
		"Who was the youngest heavyweight champion in history?",
		[
			"Mike Tyson",
			"Floyd Patterson",
			"Muhammad Ali",
			"Riddick Bowe"
		],
		0,
		"Tyson was 20 when he beat Trevor Berbick in 1986."
	],
	[
		4,
		"Boxing",
		"Who won Olympic lightweight gold for Ireland in 2012 and later became undisputed professional champion?",
		[
			"Katie Taylor",
			"Kellie Harrington",
			"Michael Conlan",
			"Paddy Barnes"
		],
		0,
		"Taylor beat Amanda Serrano at Madison Square Garden in 2022 in the first women's fight to headline there."
	],
	[
		1,
		"Snooker",
		"What is the maximum break in snooker?",
		[
			"147",
			"180",
			"140",
			"100"
		],
		0,
		"15 reds with 15 blacks, then all the colours."
	],
	[
		1,
		"Snooker",
		"Where is the World Snooker Championship played?",
		[
			"The Crucible, Sheffield",
			"Alexandra Palace, London",
			"The Barbican, York",
			"Wembley Arena"
		],
		0,
		"Every year since 1977."
	],
	[
		2,
		"Snooker",
		"Who won seven world titles in the 1990s?",
		[
			"Stephen Hendry",
			"Steve Davis",
			"John Parrott",
			"Jimmy White"
		],
		0,
		"Hendry won in 1990 and every year from 1992 to 1996, then again in 1999. Jimmy White lost six finals, four of them to Hendry."
	],
	[
		2,
		"Snooker",
		"Who won the 1985 World final on the last black against Steve Davis?",
		[
			"Dennis Taylor",
			"Cliff Thorburn",
			"Alex Higgins",
			"Jimmy White"
		],
		0,
		"It finished at 12.23am, watched by 18.5 million on BBC Two."
	],
	[
		3,
		"Snooker",
		"Who made the first televised 147, in 1982?",
		[
			"Steve Davis",
			"Cliff Thorburn",
			"Kirk Stevens",
			"Jimmy White"
		],
		0,
		"At the Lada Classic in Oldham. Thorburn made the first at the Crucible in 1983."
	],
	[
		4,
		"Snooker",
		"Who won the first World Snooker Championship, in 1927?",
		[
			"Joe Davis",
			"Fred Davis",
			"Tom Dennis",
			"Horace Lindrum"
		],
		0,
		"Joe Davis won every world title from 1927 to 1946. His prize was £6 10s."
	],
	[
		1,
		"Darts",
		"What score do players start from in a standard game of darts?",
		[
			"501",
			"301",
			"1001",
			"500"
		],
		0,
		"Down to zero, finishing on a double."
	],
	[
		2,
		"Darts",
		"What is the highest score possible with three darts?",
		[
			"180",
			"170",
			"150",
			"200"
		],
		0,
		"Three treble 20s."
	],
	[
		2,
		"Darts",
		"How many world titles did Phil Taylor win?",
		[
			"16",
			"14",
			"12",
			"10"
		],
		0,
		"Two BDO and 14 PDC world titles."
	],
	[
		3,
		"Darts",
		"What is the highest finish possible with three darts?",
		[
			"170",
			"180",
			"167",
			"160"
		],
		0,
		"Treble 20, treble 20, bullseye: \"the big fish\"."
	],
	[
		3,
		"Darts",
		"Who became the first woman to beat a man at the PDC World Championship in 2019?",
		[
			"Fallon Sherrock",
			"Lisa Ashton",
			"Deta Hedman",
			"Beau Greaves"
		],
		0,
		"She beat Ted Evetts, then Mensur Suljović, reaching the third round."
	],
	[
		1,
		"Cycling",
		"What colour jersey does the leader of the Tour de France wear?",
		[
			"Yellow",
			"Pink",
			"Red",
			"Green"
		],
		0,
		"Pink is the Giro d'Italia leader. Green is the Tour's points jersey."
	],
	[
		2,
		"Cycling",
		"Who was the first British rider to win the Tour de France?",
		[
			"Bradley Wiggins",
			"Chris Froome",
			"Geraint Thomas",
			"Mark Cavendish"
		],
		0,
		"Wiggins won in 2012, then won Olympic time trial gold ten days later."
	],
	[
		2,
		"Cycling",
		"Who won Olympic road race gold for Great Britain in Beijing 2008?",
		[
			"Nicole Cooke",
			"Emma Pooley",
			"Lizzie Deignan",
			"Victoria Pendleton"
		],
		0,
		"Cooke also won the world road title that year."
	],
	[
		3,
		"Cycling",
		"Who has won the most Tour de France stages?",
		[
			"Mark Cavendish",
			"Eddy Merckx",
			"Bernard Hinault",
			"André Leducq"
		],
		0,
		"Cavendish won his 35th stage in 2024, passing Merckx's 34."
	],
	[
		3,
		"Cycling",
		"Which British cyclist has won the most Olympic gold medals?",
		[
			"Jason Kenny",
			"Chris Hoy",
			"Laura Kenny",
			"Bradley Wiggins"
		],
		0,
		"Kenny won seven. Laura Kenny won five, the most by a British woman."
	],
	[
		2,
		"Swimming",
		"Who has won the most Olympic gold medals?",
		[
			"Michael Phelps",
			"Larisa Latynina",
			"Mark Spitz",
			"Carl Lewis"
		],
		0,
		"Phelps won 23 golds and 28 medals in all."
	],
	[
		3,
		"Swimming",
		"Who won Olympic 100m breaststroke gold for Great Britain in 2016 and 2020?",
		[
			"Adam Peaty",
			"Duncan Goodhew",
			"Ross Murdoch",
			"James Wilby"
		],
		0,
		"Peaty was the first man under 57 seconds and 58 seconds."
	],
	[
		3,
		"Swimming",
		"Who won 800m freestyle gold at four Olympics in a row, from 2012 to 2024?",
		[
			"Katie Ledecky",
			"Rebecca Adlington",
			"Ariarne Titmus",
			"Janet Evans"
		],
		0,
		"Michael Phelps, in the 200m individual medley, is the only other swimmer to win the same individual event at four Olympics."
	],
	[
		2,
		"Netball",
		"How many players does each netball team have on court?",
		[
			"Seven",
			"Six",
			"Five",
			"Eight"
		],
		0,
		"Seven, each with a position bib."
	],
	[
		2,
		"Netball",
		"Which country won the 2019 Netball World Cup in Liverpool?",
		[
			"New Zealand",
			"Australia",
			"England",
			"Jamaica"
		],
		0,
		"New Zealand beat Australia 52-51 in the final."
	],
	[
		3,
		"Netball",
		"How long can a player hold the ball in netball?",
		[
			"Three seconds",
			"Five seconds",
			"Two seconds",
			"Four seconds"
		],
		0,
		"Three seconds, then they must pass or shoot."
	],
	[
		3,
		"Netball",
		"Who scored the winning goal for England against Australia in the 2018 Commonwealth Games final?",
		[
			"Helen Housby",
			"Jo Harten",
			"Serena Guthrie",
			"Geva Mentor"
		],
		0,
		"Housby scored with the last shot on the Gold Coast. England won 52-51."
	],
	[
		2,
		"Horse racing",
		"Which race is run at Aintree every April?",
		[
			"The Grand National",
			"The Derby",
			"The Cheltenham Gold Cup",
			"The St Leger"
		],
		0,
		"Over about four and a quarter miles and 30 fences."
	],
	[
		3,
		"Horse racing",
		"Who was the first female jockey to win the Grand National, in 2021?",
		[
			"Rachael Blackmore",
			"Katie Walsh",
			"Bryony Frost",
			"Hollie Doyle"
		],
		0,
		"On Minella Times. She also won the Cheltenham Gold Cup in 2022."
	],
	[
		3,
		"Horse racing",
		"Which horse won the Grand National three times in the 1970s?",
		[
			"Red Rum",
			"L'Escargot",
			"Crisp",
			"Rag Trade"
		],
		0,
		"1973, 1974 and 1977, and second in 1975 and 1976."
	],
	[
		2,
		"Hockey",
		"Which country won women's hockey gold at the 2016 Rio Olympics?",
		[
			"Great Britain",
			"Netherlands",
			"Argentina",
			"Australia"
		],
		0,
		"They beat the Netherlands on penalties, Hollie Webb scoring the winner."
	],
	[
		3,
		"Gymnastics",
		"Who was the first gymnast to score a perfect 10 at the Olympics?",
		[
			"Nadia Comăneci",
			"Olga Korbut",
			"Nellie Kim",
			"Ludmilla Tourischeva"
		],
		0,
		"Comăneci was 14, at Montreal in 1976. The scoreboard showed 1.00."
	],
	[
		3,
		"Gymnastics",
		"Who won Britain's first Olympic gold in gymnastics?",
		[
			"Max Whitlock",
			"Louis Smith",
			"Beth Tweddle",
			"Nile Wilson"
		],
		0,
		"Whitlock won floor and pommel horse on the same day in Rio, 2016."
	],
	[
		2,
		"Olympics",
		"Where were the first modern Olympic Games held?",
		[
			"Athens",
			"Paris",
			"London",
			"Olympia"
		],
		0,
		"Athens, 1896."
	],
	[
		3,
		"Olympics",
		"Which city became the first to host the Summer Olympics three times, in 2012?",
		[
			"London",
			"Paris",
			"Los Angeles",
			"Athens"
		],
		0,
		"London hosted in 1908, 1948 and 2012. Paris joined it in 2024."
	],
	[
		2,
		"Football",
		"Then and Now: how many points did a win earn in English league football before 1981?",
		[
			"Two",
			"Three",
			"One",
			"Four"
		],
		0,
		"England switched to three points for a win in 1981-82, the first major league to do so."
	],
	[
		2,
		"Football",
		"Then and Now: when were substitutes first allowed in the Football League?",
		[
			"1965",
			"1946",
			"1958",
			"1972"
		],
		0,
		"Keith Peacock of Charlton was the first, in August 1965. One per team, and at first only for injury."
	],
	[
		3,
		"Cricket",
		"Then and Now: what colour ball is used in day-night Test cricket?",
		[
			"Pink",
			"White",
			"Red",
			"Orange"
		],
		0,
		"Pink, first used in a Test at Adelaide in 2015."
	],
	[
		3,
		"Tennis",
		"Then and Now: in which year did Wimbledon first give equal prize money to men and women?",
		[
			"2007",
			"1973",
			"1996",
			"2012"
		],
		0,
		"The US Open had done it in 1973. Venus Williams campaigned for it."
	],
	[
		3,
		"Football",
		"Then and Now: when was the back-pass rule introduced, stopping keepers picking up deliberate back passes?",
		[
			"1992",
			"1982",
			"2000",
			"1975"
		],
		0,
		"After a negative 1990 World Cup. It started with the 1992-93 season."
	],
	[
		3,
		"Rugby union",
		"Then and Now: when did rugby union go professional?",
		[
			"1995",
			"1987",
			"2000",
			"1979"
		],
		0,
		"The IRB declared the game open in August 1995, weeks after the World Cup."
	],
	[
		4,
		"Football",
		"Then and Now: what did the FA lift in 1971?",
		[
			"Its ban on women's football at members' grounds",
			"Its ban on Sunday football",
			"Its ban on shirt sponsors",
			"Its ban on foreign players"
		],
		0,
		"The ban had stood since 1921."
	],
	[
		4,
		"Cricket",
		"Then and Now: when was the first one-day international played?",
		[
			"1971",
			"1963",
			"1975",
			"1968"
		],
		0,
		"Australia v England at Melbourne in January 1971, after rain washed out a Test."
	]
];
// src/data/bank2d.js
var BANK2D = [
	[
		1,
		"Football",
		"Which club does the Premier League's \"Merseyside derby\" feature alongside Liverpool?",
		[
			"Everton",
			"Tranmere Rovers",
			"Wigan Athletic",
			"Manchester United"
		],
		0,
		"Played since 1894."
	],
	[
		1,
		"Football",
		"Which country hosted the 2022 men's World Cup?",
		[
			"Qatar",
			"Russia",
			"Saudi Arabia",
			"United Arab Emirates"
		],
		0,
		"The first held in November and December."
	],
	[
		1,
		"Football",
		"Which country won the 2025 Women's Euros?",
		[
			"England",
			"Spain",
			"Germany",
			"France"
		],
		0,
		"England beat Spain on penalties in Basel to retain the title."
	],
	[
		2,
		"Football",
		"Who captained England to the Euro 2022 and Euro 2025 finals?",
		[
			"Leah Williamson",
			"Millie Bright",
			"Steph Houghton",
			"Lucy Bronze"
		],
		0,
		"Williamson missed the 2023 World Cup injured; Millie Bright led the side there."
	],
	[
		2,
		"Football",
		"Which club did Johan Cruyff manage to their first European Cup, in 1992?",
		[
			"Barcelona",
			"Ajax",
			"Feyenoord",
			"PSV"
		],
		0,
		"Ronald Koeman scored the winner against Sampdoria at Wembley."
	],
	[
		2,
		"Football",
		"Who scored a record five goals in nine minutes for Bayern Munich in 2015?",
		[
			"Robert Lewandowski",
			"Thomas Müller",
			"Arjen Robben",
			"Mario Götze"
		],
		0,
		"Against Wolfsburg, after coming on at half-time."
	],
	[
		2,
		"Football",
		"Which team won the first Women's FA Cup final, in 1971?",
		[
			"Southampton",
			"Doncaster Belles",
			"Arsenal",
			"Fodens"
		],
		0,
		"Southampton won eight of the first 11 finals."
	],
	[
		3,
		"Football",
		"Who was the first woman to referee a men's World Cup match?",
		[
			"Stéphanie Frappart",
			"Bibiana Steinhaus",
			"Kateryna Monzul",
			"Salima Mukansanga"
		],
		0,
		"Frappart refereed Costa Rica v Germany at the 2022 World Cup."
	],
	[
		3,
		"Football",
		"Which club won the Premier League with a record 100 points in 2017-18?",
		[
			"Manchester City",
			"Liverpool",
			"Chelsea",
			"Manchester United"
		],
		0,
		"Pep Guardiola's side also scored 106 goals."
	],
	[
		3,
		"Football",
		"Which club were the first from outside England to win the FA Cup, in 1927?",
		[
			"Cardiff City",
			"Swansea Town",
			"Queen's Park",
			"Newport County"
		],
		0,
		"Cardiff beat Arsenal 1-0 at Wembley. Queen's Park had reached two finals in the 1880s."
	],
	[
		3,
		"Football",
		"Who scored the golden goal that won Euro 1996 for Germany?",
		[
			"Oliver Bierhoff",
			"Jürgen Klinsmann",
			"Andreas Möller",
			"Stefan Kuntz"
		],
		0,
		"The first major tournament final settled by a golden goal, against the Czech Republic at Wembley."
	],
	[
		3,
		"Football",
		"Which Brazilian won the Ballon d'Or in 2007?",
		[
			"Kaká",
			"Ronaldinho",
			"Ronaldo Nazário",
			"Rivaldo"
		],
		0,
		"The last winner before Messi and Ronaldo shared the next ten."
	],
	[
		4,
		"Football",
		"Which club won the English league title the season after being promoted, in 1977-78?",
		[
			"Nottingham Forest",
			"Ipswich Town",
			"Derby County",
			"Aston Villa"
		],
		0,
		"Brian Clough's Forest then won the European Cup twice."
	],
	[
		4,
		"Football",
		"Which club won the first Scottish League title, shared in 1890-91?",
		[
			"Dumbarton and Rangers",
			"Celtic and Hearts",
			"Queen's Park and Rangers",
			"Hibernian and Celtic"
		],
		0,
		"They finished level on points and drew a play-off, so the title was shared."
	],
	[
		2,
		"Cricket",
		"Who captained Australia's women to five world titles and retired from international cricket in 2023?",
		[
			"Meg Lanning",
			"Alyssa Healy",
			"Ellyse Perry",
			"Beth Mooney"
		],
		0,
		"As captain she won four T20 World Cups and the 2022 50-over World Cup."
	],
	[
		2,
		"Cricket",
		"Which team won the 2025 Women's Cricket World Cup?",
		[
			"India",
			"Australia",
			"South Africa",
			"England"
		],
		0,
		"India beat South Africa in the final in Navi Mumbai, their first world title."
	],
	[
		2,
		"Cricket",
		"Who scored the fastest Test hundred, from 54 balls?",
		[
			"Brendon McCullum",
			"Viv Richards",
			"Misbah-ul-Haq",
			"Adam Gilchrist"
		],
		0,
		"Against Australia in Christchurch in 2016, in his final Test."
	],
	[
		3,
		"Cricket",
		"Which England batter made 364 against Australia at The Oval in 1938?",
		[
			"Len Hutton",
			"Wally Hammond",
			"Denis Compton",
			"Herbert Sutcliffe"
		],
		0,
		"It stood as the Test record for nearly 20 years."
	],
	[
		3,
		"Cricket",
		"Who took 19 wickets in the Old Trafford Test of 1956?",
		[
			"Jim Laker",
			"Tony Lock",
			"Fred Trueman",
			"Brian Statham"
		],
		0,
		"9 for 37 and 10 for 53. Tony Lock took the other wicket."
	],
	[
		4,
		"Cricket",
		"Who was the first player to score 10,000 Test runs?",
		[
			"Sunil Gavaskar",
			"Allan Border",
			"Geoff Boycott",
			"Viv Richards"
		],
		0,
		"Gavaskar reached it in 1987 against Pakistan in Ahmedabad."
	],
	[
		4,
		"Cricket",
		"Who took the first hat-trick in women's Test cricket?",
		[
			"Betty Wilson",
			"Myrtle Maclagan",
			"Mary Duggan",
			"Rachael Heyhoe Flint"
		],
		0,
		"Australia's Betty Wilson, against England at St Kilda in 1958. In the same match she also scored a hundred."
	],
	[
		2,
		"Tennis",
		"Who won Wimbledon in 2023, beating Novak Djokovic in five sets?",
		[
			"Carlos Alcaraz",
			"Jannik Sinner",
			"Daniil Medvedev",
			"Matteo Berrettini"
		],
		0,
		"Alcaraz was 20. He beat Djokovic again in the 2024 final."
	],
	[
		2,
		"Tennis",
		"Which player won the women's singles at Wimbledon in 2023 as an unseeded player?",
		[
			"Markéta Vondroušová",
			"Ons Jabeur",
			"Elena Rybakina",
			"Iga Świątek"
		],
		0,
		"The first unseeded woman to win Wimbledon in the Open era."
	],
	[
		3,
		"Tennis",
		"Who is the only man to win the calendar Grand Slam twice?",
		[
			"Rod Laver",
			"Don Budge",
			"Roy Emerson",
			"Novak Djokovic"
		],
		0,
		"In 1962 as an amateur and in 1969 as a professional."
	],
	[
		3,
		"Tennis",
		"Who won the first US Open women's title of the Open era, in 1968?",
		[
			"Virginia Wade",
			"Billie Jean King",
			"Ann Jones",
			"Margaret Court"
		],
		0,
		"Wade beat Billie Jean King in the final."
	],
	[
		4,
		"Tennis",
		"Who was the first British man to win a Grand Slam singles title after Fred Perry?",
		[
			"Andy Murray",
			"Tim Henman",
			"Greg Rusedski",
			"John Lloyd"
		],
		0,
		"Murray won the 2012 US Open, 76 years after Perry's last in 1936."
	],
	[
		2,
		"Golf",
		"Who won the first women's major played at St Andrews, the 2007 Women's British Open?",
		[
			"Lorena Ochoa",
			"Annika Sörenstam",
			"Karrie Webb",
			"Laura Davies"
		],
		0,
		"Ochoa also became world number one that year."
	],
	[
		2,
		"Golf",
		"Which English golfer won the 1987, 1990 and 1992 Open Championships?",
		[
			"Nick Faldo",
			"Lee Westwood",
			"Ian Woosnam",
			"Sandy Lyle"
		],
		0,
		"Faldo also won three Masters."
	],
	[
		3,
		"Golf",
		"Who was the first player from Northern Ireland to win the US Open, in 2010?",
		[
			"Graeme McDowell",
			"Rory McIlroy",
			"Darren Clarke",
			"Fred Daly"
		],
		0,
		"McDowell won at Pebble Beach, a year before McIlroy won at Congressional."
	],
	[
		3,
		"Golf",
		"Which Englishwoman won the 1987 US Women's Open?",
		[
			"Laura Davies",
			"Alison Nicholas",
			"Trish Johnson",
			"Georgia Hall"
		],
		0,
		"Davies won four majors in all."
	],
	[
		4,
		"Golf",
		"Who won the 1999 Ryder Cup-clinching putt for the USA at Brookline?",
		[
			"Justin Leonard",
			"Ben Crenshaw",
			"Tiger Woods",
			"David Duval"
		],
		0,
		"A 45-foot putt on the 17th against José María Olazábal."
	],
	[
		2,
		"Formula 1",
		"Which team has won the most constructors' championships?",
		[
			"Ferrari",
			"McLaren",
			"Williams",
			"Mercedes"
		],
		0,
		"Ferrari have won 16."
	],
	[
		3,
		"Formula 1",
		"Which driver won the 1976 title by one point after Niki Lauda withdrew from the final race?",
		[
			"James Hunt",
			"Jody Scheckter",
			"Mario Andretti",
			"Clay Regazzoni"
		],
		0,
		"Lauda had returned six weeks after a near-fatal crash at the Nürburgring."
	],
	[
		3,
		"Formula 1",
		"Which British driver won the world title in 1992 with Williams?",
		[
			"Nigel Mansell",
			"Damon Hill",
			"David Coulthard",
			"Johnny Herbert"
		],
		0,
		"Mansell won nine of 16 races."
	],
	[
		4,
		"Formula 1",
		"Which driver won the 1950 British Grand Prix, the first world championship race?",
		[
			"Giuseppe Farina",
			"Luigi Fagioli",
			"Reg Parnell",
			"Juan Manuel Fangio"
		],
		0,
		"At Silverstone on 13 May 1950, with the King and Queen watching."
	],
	[
		2,
		"Athletics",
		"Which British woman won 400m gold at the Beijing 2008 Olympics?",
		[
			"Christine Ohuruogu",
			"Kelly Holmes",
			"Sally Gunnell",
			"Nicola Sanders"
		],
		0,
		"Ohuruogu also won world titles in 2007 and 2013."
	],
	[
		3,
		"Athletics",
		"Who won 400m hurdles gold for Britain at the 1992 Olympics, with a world title and world record to follow?",
		[
			"Sally Gunnell",
			"Tessa Sanderson",
			"Liz McColgan",
			"Kelly Holmes"
		],
		0,
		"Gunnell won world gold in a world record 52.74 in Stuttgart in 1993."
	],
	[
		3,
		"Athletics",
		"Which Kenyan ran the first marathon under two hours, in an unofficial race in 2019?",
		[
			"Eliud Kipchoge",
			"Kelvin Kiptum",
			"Geoffrey Mutai",
			"Dennis Kimetto"
		],
		0,
		"He ran 1:59:40 in Vienna with rotating pacemakers, so it does not count as a record."
	],
	[
		4,
		"Athletics",
		"Who won Britain's first Olympic gold in women's athletics?",
		[
			"Mary Rand",
			"Ann Packer",
			"Dorothy Hyman",
			"Mary Peters"
		],
		0,
		"Rand won the long jump in Tokyo in 1964, in a world record. Ann Packer won the 800m days later."
	],
	[
		3,
		"Rugby union",
		"Who is England's record points scorer in men's Tests?",
		[
			"Owen Farrell",
			"Jonny Wilkinson",
			"Paul Grayson",
			"Rob Andrew"
		],
		0,
		"Farrell passed Wilkinson's 1,179 points for England in 2023."
	],
	[
		3,
		"Rugby union",
		"Which country won the 2024 Olympic women's rugby sevens gold?",
		[
			"New Zealand",
			"Canada",
			"USA",
			"Australia"
		],
		0,
		"New Zealand beat Canada in Paris to retain the title."
	],
	[
		2,
		"Cycling",
		"Which race is known as the \"Hell of the North\"?",
		[
			"Paris-Roubaix",
			"Tour of Flanders",
			"Milan-San Remo",
			"Liège-Bastogne-Liège"
		],
		0,
		"For its cobbled sectors. A women's race was added in 2021, won by Lizzie Deignan."
	],
	[
		3,
		"Cycling",
		"Who won the first women's Paris-Roubaix, in 2021?",
		[
			"Lizzie Deignan",
			"Marianne Vos",
			"Annemiek van Vleuten",
			"Lotte Kopecky"
		],
		0,
		"She attacked with more than 80km to go."
	],
	[
		2,
		"Swimming",
		"Who won 400m freestyle gold for Britain in Beijing 2008 as well as the 800m?",
		[
			"Rebecca Adlington",
			"Jo Jackson",
			"Keri-anne Payne",
			"Fran Halsall"
		],
		0,
		"Adlington's 800m win came in a world record."
	],
	[
		2,
		"Snooker",
		"Who won his first world title in 2025, the first from China to do so?",
		[
			"Zhao Xintong",
			"Ding Junhui",
			"Yan Bingtao",
			"Si Jiahui"
		],
		0,
		"Zhao, an amateur at the time, beat Mark Williams 18-12 in the final."
	],
	[
		3,
		"Darts",
		"Who won the PDC World Championship in 2025, aged 17?",
		[
			"Luke Littler",
			"Luke Humphries",
			"Michael van Gerwen",
			"Gerwyn Price"
		],
		0,
		"The youngest world champion in darts history."
	],
	[
		3,
		"Netball",
		"Which country has won the most Netball World Cups?",
		[
			"Australia",
			"New Zealand",
			"Trinidad and Tobago",
			"England"
		],
		0,
		"Australia have won it 12 times."
	],
	[
		3,
		"Horse racing",
		"Which horse won the Cheltenham Gold Cup three times in a row from 1964?",
		[
			"Arkle",
			"Golden Miller",
			"Best Mate",
			"Mill House"
		],
		0,
		"Arkle won in 1964, 1965 and 1966. Golden Miller won five in a row in the 1930s."
	],
	[
		4,
		"Horse racing",
		"Who was the first woman to ride in the Grand National, in 1977?",
		[
			"Charlotte Brew",
			"Geraldine Rees",
			"Rosemary Henderson",
			"Katie Walsh"
		],
		0,
		"Brew rode Barony Fort. Geraldine Rees was the first woman to finish, in 1982."
	],
	[
		2,
		"Basketball",
		"Which WNBA team did Caitlin Clark join as the first pick in 2024?",
		[
			"Indiana Fever",
			"Las Vegas Aces",
			"Chicago Sky",
			"Seattle Storm"
		],
		0,
		"She was named Rookie of the Year."
	]
];
// src/data/bank2e.js
var BANK2E = [
	[
		1,
		"Football",
		"Which club did Arsène Wenger manage for 22 years?",
		[
			"Arsenal",
			"Monaco",
			"Nagoya Grampus Eight",
			"Strasbourg"
		],
		0,
		"Wenger arrived in 1996 from Nagoya Grampus Eight in Japan and won three league titles and seven FA Cups."
	],
	[
		1,
		"Football",
		"Who scored the late equaliser and the winner for Manchester United in the 1999 Champions League final?",
		[
			"Teddy Sheringham, then Ole Gunnar Solskjær",
			"Dwight Yorke, then Andy Cole",
			"Ole Gunnar Solskjær, then Teddy Sheringham",
			"David Beckham, then Ryan Giggs"
		],
		0,
		"Both came in stoppage time against Bayern Munich in Barcelona, after United had trailed since the 6th minute."
	],
	[
		1,
		"Football",
		"Which England striker won the Golden Boot at the 2018 World Cup?",
		[
			"Harry Kane",
			"Raheem Sterling",
			"Jamie Vardy",
			"Marcus Rashford"
		],
		0,
		"Kane scored six, the most by an England player at a World Cup since Gary Lineker's six in 1986."
	],
	[
		1,
		"Football",
		"Which Lioness scored the opening goal of Euro 2022, against Austria at Old Trafford?",
		[
			"Beth Mead",
			"Ellen White",
			"Georgia Stanway",
			"Alessia Russo"
		],
		0,
		"Mead went on to win the Golden Boot and Player of the Tournament."
	],
	[
		1,
		"Football",
		"Alessia Russo's back-heel goal at Euro 2022 came against which team?",
		[
			"Sweden, in the semi-final",
			"Germany, in the final",
			"Spain, in the quarter-final",
			"Norway, in the group stage"
		],
		0,
		"The cheeky finish at Bramall Lane made it 3-0 in a 4-0 win."
	],
	[
		1,
		"Football",
		"Which Scottish club were nicknamed the Lisbon Lions after 1967?",
		[
			"Celtic",
			"Rangers",
			"Aberdeen",
			"Hearts"
		],
		0,
		"They were the first British club to win the European Cup, beating Inter Milan 2-1."
	],
	[
		1,
		"Football",
		"Which manager won the treble with Manchester City in 2022-23?",
		[
			"Pep Guardiola",
			"Roberto Mancini",
			"Manuel Pellegrini",
			"Mikel Arteta"
		],
		0,
		"Premier League, FA Cup and Champions League, the club's first European Cup."
	],
	[
		1,
		"Football",
		"Which club won six Women's Super League titles in a row from 2019-20 to 2024-25?",
		[
			"Chelsea",
			"Arsenal",
			"Manchester City",
			"Manchester United"
		],
		0,
		"Under Emma Hayes, then Sonia Bompastor, Chelsea dominated the WSL in the 2020s."
	],
	[
		1,
		"Cricket",
		"Which England all-rounder hit 135 not out to win the Headingley Ashes Test in 2019?",
		[
			"Ben Stokes",
			"Chris Woakes",
			"Moeen Ali",
			"Jonny Bairstow"
		],
		0,
		"England needed 73 when the ninth wicket fell. Jack Leach made one not out at the other end."
	],
	[
		1,
		"Cricket",
		"Which county did Joe Root and Jonny Bairstow come through at?",
		[
			"Yorkshire",
			"Lancashire",
			"Durham",
			"Nottinghamshire"
		],
		0,
		"Both were born in Yorkshire, and Bairstow's father David kept wicket for the county."
	],
	[
		1,
		"Cricket",
		"Which competition did England and Wales launch in 2021 with eight city-based teams, for men and women?",
		[
			"The Hundred",
			"The T20 Blast",
			"The Big Bash",
			"The County Cup"
		],
		0,
		"Each innings is 100 balls, bowled in sets of five or ten."
	],
	[
		1,
		"Cricket",
		"Which Australian leg-spinner bowled the \"Ball of the Century\" to Mike Gatting in 1993?",
		[
			"Shane Warne",
			"Stuart MacGill",
			"Richie Benaud",
			"Nathan Lyon"
		],
		0,
		"It was Warne's first ball in an Ashes Test, at Old Trafford."
	],
	[
		1,
		"Rugby union",
		"Which country did England beat in the 2003 Rugby World Cup final?",
		[
			"Australia",
			"New Zealand",
			"France",
			"South Africa"
		],
		0,
		"20-17 after extra time in Sydney, settled by Jonny Wilkinson's drop goal."
	],
	[
		1,
		"Rugby union",
		"England's women's team are known as what?",
		[
			"The Red Roses",
			"The Lionesses",
			"The Roses",
			"The Three Lions"
		],
		0,
		"They won the 2025 World Cup at home, beating Canada at Twickenham."
	],
	[
		1,
		"Rugby union",
		"Which side are nicknamed the All Blacks?",
		[
			"New Zealand",
			"Fiji",
			"Australia",
			"Argentina"
		],
		0,
		"The women's team are the Black Ferns, the most successful side in women's World Cup history."
	],
	[
		1,
		"Rugby union",
		"The British and Irish Lions tour every four years. Which three countries do they visit in rotation?",
		[
			"Australia, New Zealand and South Africa",
			"Australia, Argentina and Japan",
			"New Zealand, Fiji and Samoa",
			"South Africa, Argentina and the USA"
		],
		0,
		"The 2025 tour went to Australia; the Lions won the series 2-1."
	],
	[
		1,
		"Tennis",
		"Which British woman won the 2021 US Open as a qualifier?",
		[
			"Emma Raducanu",
			"Johanna Konta",
			"Heather Watson",
			"Katie Boulter"
		],
		0,
		"She won ten matches without dropping a set, a first for any qualifier at a Grand Slam."
	],
	[
		1,
		"Tennis",
		"Which player won a record 14 French Open titles?",
		[
			"Rafael Nadal",
			"Novak Djokovic",
			"Björn Borg",
			"Roger Federer"
		],
		0,
		"Nadal lost only four of his 116 matches at Roland Garros."
	],
	[
		1,
		"Tennis",
		"Which sisters won 14 Grand Slam doubles titles together?",
		[
			"Venus and Serena Williams",
			"Karolína and Kristýna Plíšková",
			"Katerina and Manuela Maleeva",
			"Chanda and Ruben Rubin"
		],
		0,
		"They never lost a Grand Slam doubles final as a pair, 14 out of 14."
	],
	[
		1,
		"Golf",
		"Who won the Masters in 2019, his first major in 11 years?",
		[
			"Tiger Woods",
			"Phil Mickelson",
			"Rory McIlroy",
			"Brooks Koepka"
		],
		0,
		"It was his fifth green jacket and 15th major, after back surgery that nearly ended his career."
	],
	[
		1,
		"Golf",
		"Which Northern Irish golfer completed the career Grand Slam by winning the 2025 Masters?",
		[
			"Rory McIlroy",
			"Graeme McDowell",
			"Darren Clarke",
			"Shane Lowry"
		],
		0,
		"He won in a play-off against Justin Rose, eleven years after his previous major."
	],
	[
		1,
		"Athletics",
		"Which British athlete won Olympic gold in the 800m and 1500m at Athens 2004?",
		[
			"Kelly Holmes",
			"Paula Radcliffe",
			"Jessica Ennis-Hill",
			"Denise Lewis"
		],
		0,
		"She was 34 and had battled injury for most of her career."
	],
	[
		1,
		"Athletics",
		"Usain Bolt won how many Olympic 100m titles?",
		[
			"Three",
			"Two",
			"Four",
			"One"
		],
		0,
		"2008, 2012 and 2016. He also won the 200m at all three Games."
	],
	[
		1,
		"Formula 1",
		"Which British driver won seven world championships?",
		[
			"Lewis Hamilton",
			"Jackie Stewart",
			"Nigel Mansell",
			"Jenson Button"
		],
		0,
		"One with McLaren in 2008 and six with Mercedes, level with Michael Schumacher."
	],
	[
		1,
		"Formula 1",
		"The British Grand Prix is held at which circuit?",
		[
			"Silverstone",
			"Brands Hatch",
			"Donington Park",
			"Goodwood"
		],
		0,
		"Silverstone hosted the first ever world championship race, in May 1950."
	],
	[
		1,
		"Snooker",
		"Which player is known as \"The Rocket\"?",
		[
			"Ronnie O'Sullivan",
			"Judd Trump",
			"John Higgins",
			"Mark Selby"
		],
		0,
		"He made the fastest maximum 147 in competition, in 5 minutes 8 seconds at the 1997 World Championship."
	],
	[
		1,
		"Darts",
		"Which teenager reached the PDC World Championship final in 2024 at 16?",
		[
			"Luke Littler",
			"Luke Humphries",
			"Josh Rock",
			"Gian van Veen"
		],
		0,
		"Littler lost that final to Luke Humphries, then won the title a year later."
	],
	[
		1,
		"Darts",
		"Which venue hosts the PDC World Darts Championship?",
		[
			"Alexandra Palace",
			"The O2",
			"Lakeside",
			"Wembley Arena"
		],
		0,
		"\"Ally Pally\" has hosted it since 2008. The Lakeside in Frimley Green was the BDO home."
	],
	[
		1,
		"Boxing",
		"Which British heavyweight beat Wladimir Klitschko in 2015 to win the world titles?",
		[
			"Tyson Fury",
			"Anthony Joshua",
			"David Haye",
			"Dereck Chisora"
		],
		0,
		"Fury won on points in Düsseldorf. Joshua beat Klitschko at Wembley two years later."
	],
	[
		1,
		"Cycling",
		"Who became the first British winner of the Tour de France, in 2012?",
		[
			"Bradley Wiggins",
			"Chris Froome",
			"Mark Cavendish",
			"Geraint Thomas"
		],
		0,
		"Ten days later he won Olympic time-trial gold in London."
	],
	[
		1,
		"Netball",
		"Which country beat Australia on the last shot to win Commonwealth gold in 2018?",
		[
			"England",
			"New Zealand",
			"Jamaica",
			"South Africa"
		],
		0,
		"Helen Housby scored with the final shot on the Gold Coast to win 52-51."
	],
	[
		1,
		"Horse racing",
		"Which jockey became the first woman to win the Grand National, in 2021?",
		[
			"Rachael Blackmore",
			"Katie Walsh",
			"Bryony Frost",
			"Hollie Doyle"
		],
		0,
		"She rode Minella Times, and won the Cheltenham Gold Cup a year later."
	],
	[
		1,
		"Swimming",
		"Which British swimmer won 100m breaststroke gold at both Rio 2016 and Tokyo 2020?",
		[
			"Adam Peaty",
			"Duncan Scott",
			"Tom Dean",
			"Ross Murdoch"
		],
		0,
		"Peaty was the first man to swim the event in under 57 seconds."
	],
	[
		1,
		"American football",
		"Which NFL team play home games at Arrowhead Stadium?",
		[
			"Kansas City Chiefs",
			"Dallas Cowboys",
			"Green Bay Packers",
			"Denver Broncos"
		],
		0,
		"Arrowhead is one of the loudest stadiums in sport; fans set a world record for crowd noise there in 2014."
	],
	[
		1,
		"Basketball",
		"Which NBA team won six titles with Michael Jordan?",
		[
			"Chicago Bulls",
			"Los Angeles Lakers",
			"Boston Celtics",
			"Detroit Pistons"
		],
		0,
		"Two three-in-a-rows: 1991-93 and 1996-98."
	],
	[
		1,
		"Rugby league",
		"Which stadium hosts the Super League Grand Final?",
		[
			"Old Trafford",
			"Wembley",
			"Headingley",
			"Anfield"
		],
		0,
		"The Challenge Cup final is the one at Wembley."
	],
	[
		1,
		"Golf",
		"Europe came from 10-6 down on the final day to win the 2012 Ryder Cup. What is that comeback known as?",
		[
			"The Miracle at Medinah",
			"The Battle of Brookline",
			"The Belfry 2002",
			"Celtic Manor 2010"
		],
		0,
		"Ian Poulter's five birdies in a row on the Saturday evening started the comeback."
	],
	[
		1,
		"Cricket",
		"Which ground is known as \"the Home of Cricket\"?",
		[
			"Lord's",
			"The Oval",
			"Old Trafford",
			"Edgbaston"
		],
		0,
		"Lord's is owned by MCC, which still writes the Laws of Cricket."
	]
];
// src/data/bank2f.js
var BANK2F = [
	[
		1,
		"Football",
		"Who scored the stoppage-time goal against QPR that won Manchester City the 2011-12 Premier League?",
		[
			"Sergio Agüero",
			"Edin Džeko",
			"Mario Balotelli",
			"Carlos Tevez"
		],
		0,
		"It came at 93:20 on the final day, 13 May 2012. City won on goal difference from United."
	],
	[
		1,
		"Football",
		"Which England player missed the decisive penalty in the Euro 96 semi-final shoot-out against Germany?",
		[
			"Gareth Southgate",
			"Stuart Pearce",
			"Paul Ince",
			"Teddy Sheringham"
		],
		0,
		"Andreas Möller scored next to send Germany to the final at Wembley."
	],
	[
		1,
		"Football",
		"Which manager won the Champions League and the Premier League with Liverpool?",
		[
			"Jürgen Klopp",
			"Rafael Benítez",
			"Brendan Rodgers",
			"Arne Slot"
		],
		0,
		"The Champions League came in 2019 and the league title in 2019-20, Liverpool's first for 30 years."
	],
	[
		1,
		"Football",
		"Who scored the only goal of the 2023 Women's World Cup final, for Spain against England?",
		[
			"Olga Carmona",
			"Aitana Bonmatí",
			"Alexia Putellas",
			"Salma Paralluelo"
		],
		0,
		"The left-back scored in the first half in Sydney."
	],
	[
		1,
		"Football",
		"Which country knocked England out of Euro 2016 in the last 16?",
		[
			"Iceland",
			"Wales",
			"Portugal",
			"Slovakia"
		],
		0,
		"Iceland won 2-1 in Nice, and Roy Hodgson resigned that night."
	],
	[
		1,
		"Football",
		"Which Scottish club won the domestic treble in 2022-23 under Ange Postecoglou?",
		[
			"Celtic",
			"Rangers",
			"Hearts",
			"Aberdeen"
		],
		0,
		"Postecoglou left for Tottenham straight afterwards."
	],
	[
		1,
		"Football",
		"Which club won the 2024-25 Premier League in Arne Slot's first season?",
		[
			"Liverpool",
			"Arsenal",
			"Manchester City",
			"Chelsea"
		],
		0,
		"It equalled Manchester United's record of 20 English titles."
	],
	[
		1,
		"Football",
		"Which club beat Barcelona to win the 2024-25 Women's Champions League?",
		[
			"Arsenal",
			"Chelsea",
			"Lyon",
			"Wolfsburg"
		],
		0,
		"Stina Blackstenius scored the only goal of the final in Lisbon."
	],
	[
		1,
		"Football",
		"Which England goalkeeper was named FIFA's Best women's goalkeeper in 2022 and 2023?",
		[
			"Mary Earps",
			"Hannah Hampton",
			"Ellie Roebuck",
			"Karen Bardsley"
		],
		0,
		"In 2023 she also won BBC Sports Personality of the Year."
	],
	[
		1,
		"Cricket",
		"Who captained England to the 2022 men's T20 World Cup?",
		[
			"Jos Buttler",
			"Eoin Morgan",
			"Ben Stokes",
			"Moeen Ali"
		],
		0,
		"England beat Pakistan in the final at the MCG. Stokes hit the winning runs."
	],
	[
		1,
		"Cricket",
		"Which England bowler retired in 2024 with 704 Test wickets?",
		[
			"James Anderson",
			"Stuart Broad",
			"Chris Woakes",
			"Graeme Swann"
		],
		0,
		"No fast bowler has taken more Test wickets."
	],
	[
		1,
		"Cricket",
		"Which country beat India in the final of the 2023 men's Cricket World Cup in Ahmedabad?",
		[
			"Australia",
			"England",
			"New Zealand",
			"South Africa"
		],
		0,
		"Travis Head made 137 to silence a crowd of around 90,000."
	],
	[
		1,
		"Cricket",
		"Who captained England's women to the 2017 World Cup?",
		[
			"Heather Knight",
			"Charlotte Edwards",
			"Nat Sciver-Brunt",
			"Tammy Beaumont"
		],
		0,
		"England beat India by nine runs in the final at Lord's."
	],
	[
		1,
		"Rugby union",
		"Who captained England to the 2003 Rugby World Cup?",
		[
			"Martin Johnson",
			"Lawrence Dallaglio",
			"Jonny Wilkinson",
			"Will Greenwood"
		],
		0,
		"The Leicester lock is still England's only men's World Cup-winning captain."
	],
	[
		1,
		"Rugby union",
		"By what score did South Africa beat New Zealand in the 2023 Rugby World Cup final?",
		[
			"12-11",
			"15-12",
			"18-16",
			"9-6"
		],
		0,
		"Handré Pollard kicked all of South Africa's points in Paris."
	],
	[
		1,
		"Rugby union",
		"England's women beat which country in the 2025 World Cup final at Twickenham?",
		[
			"Canada",
			"New Zealand",
			"France",
			"Ireland"
		],
		0,
		"England won 33-13 in front of a record crowd for a women's rugby match."
	],
	[
		1,
		"Tennis",
		"Who did Andy Murray beat in the 2013 Wimbledon final?",
		[
			"Novak Djokovic",
			"Roger Federer",
			"Rafael Nadal",
			"Milos Raonic"
		],
		0,
		"Straight sets, on 7 July 2013."
	],
	[
		1,
		"Tennis",
		"Who beat Novak Djokovic in the 2023 and 2024 Wimbledon men's finals?",
		[
			"Carlos Alcaraz",
			"Jannik Sinner",
			"Daniil Medvedev",
			"Alexander Zverev"
		],
		0,
		"The 2024 final was in straight sets."
	],
	[
		1,
		"Tennis",
		"Who won the 2025 Wimbledon women's title, beating Amanda Anisimova 6-0 6-0?",
		[
			"Iga Świątek",
			"Aryna Sabalenka",
			"Coco Gauff",
			"Elena Rybakina"
		],
		0,
		"It was the first 6-0 6-0 women's final at Wimbledon since 1911."
	],
	[
		1,
		"Tennis",
		"How many Grand Slam singles titles did Novak Djokovic win up to the end of 2024?",
		[
			"24",
			"22",
			"20",
			"26"
		],
		0,
		"The record for a man."
	],
	[
		1,
		"Golf",
		"Which Englishman won the 2013 US Open at Merion?",
		[
			"Justin Rose",
			"Luke Donald",
			"Lee Westwood",
			"Paul Casey"
		],
		0,
		"He was the first English winner of the US Open since Tony Jacklin in 1970."
	],
	[
		1,
		"Golf",
		"Which American won the Masters in 2022 and 2024?",
		[
			"Scottie Scheffler",
			"Jordan Spieth",
			"Patrick Reed",
			"Dustin Johnson"
		],
		0,
		"Rory McIlroy won the next one, in 2025, to complete the career Grand Slam."
	],
	[
		1,
		"Golf",
		"Who captained Europe to victory at the 2025 Ryder Cup at Bethpage Black?",
		[
			"Luke Donald",
			"Padraig Harrington",
			"Thomas Bjørn",
			"Henrik Stenson"
		],
		0,
		"Donald also captained Europe's win in Rome in 2023."
	],
	[
		1,
		"Athletics",
		"Which British athlete won the women's 800m at the Paris 2024 Olympics?",
		[
			"Keely Hodgkinson",
			"Laura Muir",
			"Jemma Reekie",
			"Georgia Bell"
		],
		0,
		"She had won silver in Tokyo three years earlier."
	],
	[
		1,
		"Athletics",
		"Who ran the first sub-two-hour marathon, in an unofficial event in Vienna in 2019?",
		[
			"Eliud Kipchoge",
			"Kenenisa Bekele",
			"Kelvin Kiptum",
			"Mo Farah"
		],
		0,
		"His time was 1:59:40. Pacers and other aids meant it could not count as a record."
	],
	[
		1,
		"Athletics",
		"Who won the women's 100m at the Paris 2024 Olympics?",
		[
			"Julien Alfred",
			"Sha'Carri Richardson",
			"Shelly-Ann Fraser-Pryce",
			"Melissa Jefferson"
		],
		0,
		"It was the first Olympic medal of any colour for St Lucia."
	],
	[
		1,
		"Formula 1",
		"Which driver won four world titles in a row from 2021 to 2024?",
		[
			"Max Verstappen",
			"Lewis Hamilton",
			"Charles Leclerc",
			"Sebastian Vettel"
		],
		0,
		"Vettel had also won four in a row, from 2010 to 2013."
	],
	[
		1,
		"Formula 1",
		"Which British driver won the 2009 world title with Brawn?",
		[
			"Jenson Button",
			"Lewis Hamilton",
			"Damon Hill",
			"David Coulthard"
		],
		0,
		"Brawn lasted one season before Mercedes bought the team."
	],
	[
		1,
		"Formula 1",
		"Who won the 2025 Formula 1 drivers' title?",
		[
			"Lando Norris",
			"Max Verstappen",
			"Oscar Piastri",
			"George Russell"
		],
		0,
		"He sealed it at the final race in Abu Dhabi."
	],
	[
		1,
		"Snooker",
		"Which Belgian won the 2023 World Championship, beating Mark Selby?",
		[
			"Luca Brecel",
			"Mark Allen",
			"Ding Junhui",
			"Kyren Wilson"
		],
		0,
		"He was the first world champion from mainland Europe."
	],
	[
		1,
		"Darts",
		"Who won the PDC World Championship in January 2025 at the age of 17?",
		[
			"Luke Littler",
			"Luke Humphries",
			"Michael van Gerwen",
			"Gerwyn Price"
		],
		0,
		"He beat Michael van Gerwen 7-3 in the final."
	],
	[
		1,
		"Darts",
		"Which Dutch player is nicknamed Mighty Mike?",
		[
			"Michael van Gerwen",
			"Raymond van Barneveld",
			"Danny Noppert",
			"Dirk van Duijvenbode"
		],
		0,
		"He won his first world title in 2014."
	],
	[
		1,
		"Boxing",
		"Who did Anthony Joshua beat at Wembley in April 2017 in front of 90,000 fans?",
		[
			"Wladimir Klitschko",
			"Tyson Fury",
			"Joseph Parker",
			"Dillian Whyte"
		],
		0,
		"Joshua won in the 11th round after being knocked down himself."
	],
	[
		1,
		"Cycling",
		"Which Welsh rider won the 2018 Tour de France?",
		[
			"Geraint Thomas",
			"Luke Rowe",
			"Nicole Cooke",
			"Mark Cavendish"
		],
		0,
		"He was the third British winner, after Bradley Wiggins and Chris Froome."
	],
	[
		1,
		"Cycling",
		"Which British cyclist has won the most Olympic gold medals?",
		[
			"Jason Kenny",
			"Chris Hoy",
			"Laura Kenny",
			"Bradley Wiggins"
		],
		0,
		"Jason Kenny won seven. Chris Hoy won six."
	],
	[
		1,
		"Swimming",
		"Which French swimmer won four individual gold medals at the Paris 2024 Olympics?",
		[
			"Léon Marchand",
			"Florent Manaudou",
			"Maxime Grousset",
			"Yannick Agnel"
		],
		0,
		"Two of them, the 200m butterfly and 200m breaststroke, came on the same evening."
	],
	[
		1,
		"Horse racing",
		"Which horse won the Grand National in 2018 and 2019?",
		[
			"Tiger Roll",
			"Many Clouds",
			"Minella Times",
			"Corach Rambler"
		],
		0,
		"The first back-to-back winner since Red Rum in 1973 and 1974."
	],
	[
		1,
		"Netball",
		"Which country won the 2023 Netball World Cup in Cape Town?",
		[
			"Australia",
			"Jamaica",
			"England",
			"New Zealand"
		],
		0,
		"They beat England 61-45 in the final. Jamaica won bronze."
	],
	[
		1,
		"American football",
		"Which team won Super Bowl LIX in February 2025?",
		[
			"Philadelphia Eagles",
			"Kansas City Chiefs",
			"San Francisco 49ers",
			"Buffalo Bills"
		],
		0,
		"They beat the Chiefs 40-22 in New Orleans."
	],
	[
		1,
		"Basketball",
		"Who is the NBA's all-time leading points scorer?",
		[
			"LeBron James",
			"Kareem Abdul-Jabbar",
			"Michael Jordan",
			"Kobe Bryant"
		],
		0,
		"He passed Kareem Abdul-Jabbar's total in February 2023."
	],
	[
		1,
		"Olympics",
		"Which city will host the 2028 Summer Olympics?",
		[
			"Los Angeles",
			"Brisbane",
			"Paris",
			"Madrid"
		],
		0,
		"It will be LA's third Games, after 1932 and 1984."
	],
	[
		1,
		"Rugby league",
		"Which club won the 2024 Super League Grand Final, beating Hull KR?",
		[
			"Wigan Warriors",
			"Leeds Rhinos",
			"St Helens",
			"Warrington Wolves"
		],
		0,
		"Wigan won 9-2 at Old Trafford."
	]
];
// src/data/bank2g.js
var BANK2G = [
	[
		3,
		"Football",
		"Who scored Arsenal's second goal at Anfield in May 1989 to win the title in the final minute?",
		[
			"Michael Thomas",
			"Alan Smith",
			"Paul Merson",
			"David Rocastle"
		],
		0,
		"Arsenal needed to win by two. Thomas scored in stoppage time to win 2-0 and take the title on goals scored."
	],
	[
		3,
		"Football",
		"Whose penalty did Jerzy Dudek save to win the 2005 Champions League final shoot-out for Liverpool?",
		[
			"Andriy Shevchenko",
			"Andrea Pirlo",
			"Kaká",
			"Jon Dahl Tomasson"
		],
		0,
		"Liverpool came back from 3-0 down in Istanbul. Dudek also saved from Pirlo, and Serginho missed."
	],
	[
		3,
		"Football",
		"Which country did Greece beat in the Euro 2004 final?",
		[
			"Portugal",
			"Czech Republic",
			"France",
			"Netherlands"
		],
		0,
		"Angelos Charisteas headed the only goal in Lisbon, against the hosts."
	],
	[
		3,
		"Football",
		"Which club won the first Women's Super League title, in 2011?",
		[
			"Arsenal",
			"Birmingham City",
			"Everton",
			"Chelsea"
		],
		0,
		"Arsenal won the inaugural WSL season, played in the summer of 2011."
	],
	[
		3,
		"Football",
		"Who scored both of AC Milan's goals against Liverpool in the 2007 Champions League final?",
		[
			"Filippo Inzaghi",
			"Kaká",
			"Andrea Pirlo",
			"Clarence Seedorf"
		],
		0,
		"Milan won 2-1 in Athens, two years after losing to Liverpool in Istanbul."
	],
	[
		3,
		"Football",
		"Which Scottish club reached the 2003 UEFA Cup final in Seville?",
		[
			"Celtic",
			"Rangers",
			"Aberdeen",
			"Hearts"
		],
		0,
		"Celtic lost 3-2 to José Mourinho's Porto after extra time."
	],
	[
		3,
		"Football",
		"Who captained England when they won Euro 2022?",
		[
			"Leah Williamson",
			"Millie Bright",
			"Steph Houghton",
			"Lucy Bronze"
		],
		0,
		"Williamson lifted the trophy at Wembley after the 2-1 win over Germany."
	],
	[
		3,
		"Football",
		"Who won the first women's Ballon d'Or, in 2018?",
		[
			"Ada Hegerberg",
			"Pernille Harder",
			"Dzsenifer Marozsán",
			"Sam Kerr"
		],
		0,
		"The Norwegian striker was playing for Lyon."
	],
	[
		3,
		"Football",
		"Which club won the first Women's FA Cup, in 1971?",
		[
			"Southampton",
			"Fodens",
			"Doncaster Belles",
			"Arsenal"
		],
		0,
		"The first final, then called the Mitre Challenge Trophy, was played in 1971."
	],
	[
		3,
		"Football",
		"Who scored the winner for Manchester City in the 2023 Champions League final?",
		[
			"Rodri",
			"Kevin De Bruyne",
			"Erling Haaland",
			"Bernardo Silva"
		],
		0,
		"City beat Inter 1-0 in Istanbul to complete the treble."
	],
	[
		3,
		"Football",
		"Which club beat Barcelona in the 2025 Women's Champions League final?",
		[
			"Arsenal",
			"Chelsea",
			"Lyon",
			"Wolfsburg"
		],
		0,
		"Arsenal won 1-0 in Lisbon, their first European title since 2007."
	],
	[
		3,
		"Football",
		"Who won the Golden Ball at the 2023 Women's World Cup?",
		[
			"Aitana Bonmatí",
			"Linda Caicedo",
			"Hinata Miyazawa",
			"Salma Paralluelo"
		],
		0,
		"Bonmatí was named best player as Spain won the tournament."
	],
	[
		3,
		"Cricket",
		"Who scored the fastest Test century, off 54 balls, in 2016?",
		[
			"Brendon McCullum",
			"Viv Richards",
			"Misbah-ul-Haq",
			"Adam Gilchrist"
		],
		0,
		"McCullum did it against Australia in his final Test, at Christchurch."
	],
	[
		3,
		"Cricket",
		"Which bowler did Yuvraj Singh hit for six sixes in an over at the 2007 World T20?",
		[
			"Stuart Broad",
			"Andrew Flintoff",
			"James Anderson",
			"Dimitri Mascarenhas"
		],
		0,
		"It happened in Durban. Broad went on to take more than 600 Test wickets."
	],
	[
		3,
		"Cricket",
		"Who batted with Ben Stokes for the last wicket as England won the 2019 Headingley Test?",
		[
			"Jack Leach",
			"Stuart Broad",
			"Jofra Archer",
			"James Anderson"
		],
		0,
		"They added 76, Leach scoring 1 not out, as Stokes made 135 not out."
	],
	[
		3,
		"Cricket",
		"Who captained England to the 2017 Women's World Cup?",
		[
			"Heather Knight",
			"Charlotte Edwards",
			"Anya Shrubsole",
			"Sarah Taylor"
		],
		0,
		"England beat India by nine runs in the final at Lord's."
	],
	[
		3,
		"Cricket",
		"Which team did England beat in the 2010 World T20 final?",
		[
			"Australia",
			"Sri Lanka",
			"Pakistan",
			"New Zealand"
		],
		0,
		"It was England's first global trophy in men's cricket, won in Barbados."
	],
	[
		3,
		"Cricket",
		"Who holds the record for the highest score in women's ODIs, 232 not out?",
		[
			"Amelia Kerr",
			"Belinda Clark",
			"Smriti Mandhana",
			"Meg Lanning"
		],
		0,
		"Kerr made it against Ireland in Dublin in 2018, aged 17."
	],
	[
		3,
		"Cricket",
		"Who took 8 for 15 as Australia were bowled out for 60 at Trent Bridge in 2015?",
		[
			"Stuart Broad",
			"James Anderson",
			"Mark Wood",
			"Steven Finn"
		],
		0,
		"Australia were all out before lunch on the first day."
	],
	[
		3,
		"Cricket",
		"Who scored a century in the 2023 men's World Cup final in Ahmedabad?",
		[
			"Travis Head",
			"Marnus Labuschagne",
			"Virat Kohli",
			"KL Rahul"
		],
		0,
		"Head made 137 as Australia beat India to win a sixth title."
	],
	[
		3,
		"Tennis",
		"Who did Emma Raducanu beat in the 2021 US Open final?",
		[
			"Leylah Fernandez",
			"Maria Sakkari",
			"Belinda Bencic",
			"Aryna Sabalenka"
		],
		0,
		"Raducanu won ten matches from qualifying without dropping a set."
	],
	[
		3,
		"Tennis",
		"Who was the last British woman before Emma Raducanu to win a Grand Slam singles title?",
		[
			"Virginia Wade",
			"Sue Barker",
			"Jo Durie",
			"Ann Jones"
		],
		0,
		"Wade won Wimbledon in 1977."
	],
	[
		3,
		"Tennis",
		"Who won Wimbledon in 2001 as a wildcard?",
		[
			"Goran Ivanišević",
			"Pat Rafter",
			"Tim Henman",
			"Andre Agassi"
		],
		0,
		"Ranked 125th, he beat Rafter in a Monday final."
	],
	[
		3,
		"Tennis",
		"Who has won the most French Open women's singles titles?",
		[
			"Chris Evert",
			"Steffi Graf",
			"Justine Henin",
			"Monica Seles"
		],
		0,
		"Evert won seven between 1974 and 1986."
	],
	[
		3,
		"Tennis",
		"Who did Roger Federer beat in the 2009 French Open final?",
		[
			"Robin Söderling",
			"Juan Martín del Potro",
			"Rafael Nadal",
			"Andy Murray"
		],
		0,
		"Söderling had beaten Nadal earlier in the tournament."
	],
	[
		3,
		"Tennis",
		"Who won the 2023 Wimbledon ladies' title as an unseeded player?",
		[
			"Markéta Vondroušová",
			"Ons Jabeur",
			"Elena Rybakina",
			"Barbora Krejčíková"
		],
		0,
		"She was the first unseeded woman to win the title in the Open era."
	],
	[
		3,
		"Golf",
		"Who won the 2011 Open at Royal St George's, aged 42?",
		[
			"Darren Clarke",
			"Phil Mickelson",
			"Dustin Johnson",
			"Thomas Bjørn"
		],
		0,
		"It was his first major."
	],
	[
		3,
		"Golf",
		"Who won the 2013 US Open at Merion, his first major?",
		[
			"Justin Rose",
			"Phil Mickelson",
			"Jason Day",
			"Adam Scott"
		],
		0,
		"Rose was the first Englishman to win the US Open since Tony Jacklin in 1970."
	],
	[
		3,
		"Golf",
		"Which Englishwoman won the 2018 Women's British Open at Royal Lytham?",
		[
			"Georgia Hall",
			"Charley Hull",
			"Laura Davies",
			"Bronte Law"
		],
		0,
		"It was her first major."
	],
	[
		3,
		"Golf",
		"Who won the women's golf gold at the 2016 Olympics?",
		[
			"Inbee Park",
			"Lydia Ko",
			"Shanshan Feng",
			"Ariya Jutanugarn"
		],
		0,
		"Golf was back at the Olympics for the first time since 1904."
	],
	[
		3,
		"Golf",
		"Who won the 2017 Masters at his 74th attempt at a major?",
		[
			"Sergio García",
			"Justin Rose",
			"Danny Willett",
			"Jordan Spieth"
		],
		0,
		"García beat Rose in a play-off at Augusta."
	],
	[
		3,
		"Golf",
		"Who captained Europe to win the 2023 Ryder Cup in Rome?",
		[
			"Luke Donald",
			"Henrik Stenson",
			"Padraig Harrington",
			"Thomas Bjørn"
		],
		0,
		"Donald replaced Stenson as captain in 2022."
	],
	[
		3,
		"Formula 1",
		"Which team did Fernando Alonso win his world titles with, in 2005 and 2006?",
		[
			"Renault",
			"McLaren",
			"Ferrari",
			"Minardi"
		],
		0,
		"He ended Michael Schumacher's run of five titles in a row."
	],
	[
		3,
		"Formula 1",
		"Who was Lewis Hamilton's team-mate in his debut season, 2007?",
		[
			"Fernando Alonso",
			"Heikki Kovalainen",
			"Jenson Button",
			"Pedro de la Rosa"
		],
		0,
		"They tied on points, one behind champion Kimi Räikkönen."
	],
	[
		3,
		"Formula 1",
		"At which circuit did Ayrton Senna die in 1994?",
		[
			"Imola",
			"Monza",
			"Monaco",
			"Interlagos"
		],
		0,
		"He crashed at Tamburello during the San Marino Grand Prix."
	],
	[
		3,
		"Formula 1",
		"Who won the 1997 world title after Michael Schumacher was thrown out of the championship?",
		[
			"Jacques Villeneuve",
			"Mika Häkkinen",
			"Heinz-Harald Frentzen",
			"David Coulthard"
		],
		0,
		"Schumacher was disqualified for turning into Villeneuve at Jerez."
	],
	[
		3,
		"Athletics",
		"Who won women's 10,000m gold at the 2016 Olympics in a world record?",
		[
			"Almaz Ayana",
			"Tirunesh Dibaba",
			"Vivian Cheruiyot",
			"Sifan Hassan"
		],
		0,
		"The Ethiopian took 14 seconds off the old record."
	],
	[
		3,
		"Athletics",
		"Who broke the women's 400m hurdles world record to win the Tokyo Olympic final?",
		[
			"Sydney McLaughlin",
			"Dalilah Muhammad",
			"Femke Bol",
			"Shamier Little"
		],
		0,
		"She ran 51.46."
	],
	[
		3,
		"Athletics",
		"Who won Olympic 400m gold for Britain in 2008?",
		[
			"Christine Ohuruogu",
			"Nicola Sanders",
			"Sanya Richards",
			"Shericka Williams"
		],
		0,
		"She came from behind in Beijing."
	],
	[
		3,
		"Athletics",
		"Who won Olympic triple jump gold for Britain in 2000?",
		[
			"Jonathan Edwards",
			"Phillips Idowu",
			"Ashia Hansen",
			"Larry Achike"
		],
		0,
		"Edwards had set the world record of 18.29m in 1995."
	],
	[
		3,
		"Athletics",
		"Which Ugandan won the men's marathon at the 2012 Olympics?",
		[
			"Stephen Kiprotich",
			"Wilson Kipsang",
			"Abel Kirui",
			"Joshua Cheptegei"
		],
		0,
		"He beat the Kenyan favourites in London."
	],
	[
		3,
		"Athletics",
		"Who won the women's 100m at the 2024 Paris Olympics?",
		[
			"Julien Alfred",
			"Sha'Carri Richardson",
			"Shericka Jackson",
			"Melissa Jefferson"
		],
		0,
		"It was Saint Lucia's first Olympic medal."
	],
	[
		3,
		"Rugby union",
		"Who scored South Africa's two tries in the 2019 World Cup final?",
		[
			"Makazole Mapimpi and Cheslin Kolbe",
			"Cheslin Kolbe and Faf de Klerk",
			"Makazole Mapimpi and Damian de Allende",
			"Siya Kolisi and Pieter-Steph du Toit"
		],
		0,
		"South Africa beat England 32-12 in Yokohama."
	],
	[
		3,
		"Rugby union",
		"Which country did England beat in the 2025 Women's Rugby World Cup final?",
		[
			"Canada",
			"New Zealand",
			"France",
			"USA"
		],
		0,
		"England won 33-13 at Twickenham in front of 81,885."
	],
	[
		3,
		"Rugby union",
		"Who captained Wales to the 2019 Grand Slam?",
		[
			"Alun Wyn Jones",
			"Sam Warburton",
			"Ken Owens",
			"Dan Biggar"
		],
		0,
		"Wales beat Ireland in Cardiff to finish it."
	],
	[
		3,
		"Rugby union",
		"Who kicked the long drop goal that beat France in Paris in 2018, on the way to Ireland's Grand Slam?",
		[
			"Johnny Sexton",
			"Conor Murray",
			"Joey Carbery",
			"Ronan O'Gara"
		],
		0,
		"It came after 41 phases, in the final minute."
	],
	[
		3,
		"Rugby league",
		"Who beat Hull KR in the 2024 Super League Grand Final?",
		[
			"Wigan Warriors",
			"St Helens",
			"Leigh Leopards",
			"Warrington Wolves"
		],
		0,
		"Wigan won 9-2 at Old Trafford to complete a quadruple."
	],
	[
		3,
		"Rugby league",
		"What was the score as Australia beat England in the 2017 Rugby League World Cup final?",
		[
			"6-0",
			"12-6",
			"18-4",
			"22-8"
		],
		0,
		"Boyd Cordner scored the only try in Brisbane."
	],
	[
		3,
		"Snooker",
		"Who won the 2005 World Championship as a 150-1 qualifier?",
		[
			"Shaun Murphy",
			"Matthew Stevens",
			"Ronnie O'Sullivan",
			"Graeme Dott"
		],
		0,
		"He beat Matthew Stevens in the final."
	],
	[
		3,
		"Snooker",
		"Who won the 2023 World Championship, the first winner from mainland Europe?",
		[
			"Luca Brecel",
			"Judd Trump",
			"Mark Selby",
			"Kyren Wilson"
		],
		0,
		"The Belgian beat Mark Selby 18-15."
	],
	[
		3,
		"Darts",
		"Who won the first PDC World Championship, in 1994?",
		[
			"Dennis Priestley",
			"Phil Taylor",
			"John Part",
			"Rod Harrington"
		],
		0,
		"Priestley beat Phil Taylor in the final."
	],
	[
		3,
		"Darts",
		"Who won the 2024 PDC World Championship?",
		[
			"Luke Humphries",
			"Luke Littler",
			"Michael Smith",
			"Gerwyn Price"
		],
		0,
		"He beat 16-year-old Luke Littler 7-4 in the final."
	],
	[
		3,
		"Cycling",
		"Which British rider won the 2020 Giro d'Italia?",
		[
			"Tao Geoghegan Hart",
			"Chris Froome",
			"Simon Yates",
			"Geraint Thomas"
		],
		0,
		"He took the pink jersey only on the final day."
	],
	[
		3,
		"Cycling",
		"Which Dutch rider won the 2023 Tour de France Femmes?",
		[
			"Demi Vollering",
			"Annemiek van Vleuten",
			"Marianne Vos",
			"Lorena Wiebes"
		],
		0,
		"She took the lead on the Tourmalet."
	],
	[
		3,
		"Swimming",
		"Which Briton won 400m and 800m freestyle golds at Beijing 2008?",
		[
			"Rebecca Adlington",
			"Jo Jackson",
			"Keri-Anne Payne",
			"Ellen Gandy"
		],
		0,
		"Her 800m time broke Janet Evans's 19-year-old world record."
	],
	[
		3,
		"Swimming",
		"Who won Olympic 200m freestyle gold for Britain at Tokyo 2020?",
		[
			"Tom Dean",
			"Duncan Scott",
			"James Guy",
			"Matt Richards"
		],
		0,
		"Scott took silver, the first British one-two in an Olympic pool since 1908."
	],
	[
		3,
		"Boxing",
		"Who beat Anthony Joshua at Madison Square Garden in 2019?",
		[
			"Andy Ruiz Jr",
			"Oleksandr Usyk",
			"Wladimir Klitschko",
			"Joseph Parker"
		],
		0,
		"Ruiz stopped him in the seventh round. Joshua won the rematch."
	],
	[
		3,
		"Boxing",
		"Which Briton won the first women's Olympic boxing gold, in 2012?",
		[
			"Nicola Adams",
			"Natasha Jonas",
			"Savannah Marshall",
			"Lauren Price"
		],
		0,
		"She won the flyweight title in London and defended it in 2016."
	],
	[
		3,
		"Boxing",
		"Which Welsh boxer won Olympic middleweight gold at Tokyo 2020?",
		[
			"Lauren Price",
			"Rosie Eccles",
			"Natasha Jonas",
			"Savannah Marshall"
		],
		0,
		"She had also played football for Wales."
	],
	[
		3,
		"Netball",
		"Which country won the 2023 Netball World Cup in Cape Town?",
		[
			"Australia",
			"England",
			"New Zealand",
			"Jamaica"
		],
		0,
		"Australia beat England 61-45 in the final."
	],
	[
		3,
		"Netball",
		"Which city hosted the 2019 Netball World Cup?",
		[
			"Liverpool",
			"Sydney",
			"Cape Town",
			"Auckland"
		],
		0,
		"New Zealand beat Australia 52-51 in the final."
	],
	[
		3,
		"Horse racing",
		"Which horse won the Grand National in 2018 and 2019?",
		[
			"Tiger Roll",
			"Many Clouds",
			"Corach Rambler",
			"Noble Yeats"
		],
		0,
		"He was the first back-to-back winner since Red Rum."
	],
	[
		3,
		"Horse racing",
		"Which jockey rode Frankel in all 14 of his races?",
		[
			"Tom Queally",
			"Frankie Dettori",
			"Ryan Moore",
			"William Buick"
		],
		0,
		"Frankel was never beaten."
	],
	[
		3,
		"Gymnastics",
		"Who won the women's Olympic all-around at Tokyo 2020 after Simone Biles withdrew?",
		[
			"Sunisa Lee",
			"Rebeca Andrade",
			"Angelina Melnikova",
			"Vladislava Urazova"
		],
		0,
		"Andrade took silver."
	],
	[
		3,
		"Basketball",
		"Which team did Kobe Bryant score 81 points against in 2006?",
		[
			"Toronto Raptors",
			"Phoenix Suns",
			"Sacramento Kings",
			"Dallas Mavericks"
		],
		0,
		"It is the second-highest score in an NBA game, after Wilt Chamberlain's 100."
	],
	[
		3,
		"American football",
		"Which team had the only perfect NFL season including the Super Bowl, in 1972?",
		[
			"Miami Dolphins",
			"Pittsburgh Steelers",
			"New England Patriots",
			"Dallas Cowboys"
		],
		0,
		"They went 17-0. The 2007 Patriots lost the Super Bowl."
	],
	[
		4,
		"Football",
		"Who refereed the 1966 World Cup final?",
		[
			"Gottfried Dienst",
			"Tofiq Bahramov",
			"Jack Taylor",
			"Rudolf Kreitlein"
		],
		0,
		"Dienst was Swiss. Bahramov was the linesman who gave Hurst's second goal."
	],
	[
		4,
		"Football",
		"Who scored England's first goal at a World Cup, against Chile in 1950?",
		[
			"Stan Mortensen",
			"Wilf Mannion",
			"Tom Finney",
			"Billy Wright"
		],
		0,
		"England won 2-0 in Rio. Mannion scored the second."
	],
	[
		4,
		"Football",
		"Who scored for the USA when they beat England 1-0 at the 1950 World Cup?",
		[
			"Joe Gaetjens",
			"Walter Bahr",
			"Frank Borghi",
			"John Souza"
		],
		0,
		"The game was played in Belo Horizonte."
	],
	[
		4,
		"Football",
		"Which English club won the last Inter-Cities Fairs Cup final, in 1971?",
		[
			"Leeds United",
			"Arsenal",
			"Newcastle United",
			"Liverpool"
		],
		0,
		"Leeds beat Juventus on away goals. The competition then became the UEFA Cup."
	],
	[
		4,
		"Football",
		"Who was the first Black player to captain England's men?",
		[
			"Paul Ince",
			"Viv Anderson",
			"Sol Campbell",
			"Rio Ferdinand"
		],
		0,
		"He led England against the USA in 1993."
	],
	[
		4,
		"Football",
		"Who was the first Black player to win a full England men's cap, in 1978?",
		[
			"Viv Anderson",
			"Laurie Cunningham",
			"Cyrille Regis",
			"John Barnes"
		],
		0,
		"The Nottingham Forest full-back played against Czechoslovakia at Wembley."
	],
	[
		4,
		"Football",
		"Which goalkeeper played on in the 1956 FA Cup final with a broken neck?",
		[
			"Bert Trautmann",
			"Bert Williams",
			"Frank Swift",
			"Ted Ditchburn"
		],
		0,
		"Manchester City beat Birmingham City 3-1."
	],
	[
		4,
		"Football",
		"Who scored Sunderland's winner against Leeds in the 1973 FA Cup final?",
		[
			"Ian Porterfield",
			"Dennis Tueart",
			"Billy Hughes",
			"Vic Halom"
		],
		0,
		"Second Division Sunderland won 1-0. Jim Montgomery's double save is just as famous."
	],
	[
		4,
		"Football",
		"Who scored Southampton's winner against Manchester United in the 1976 FA Cup final?",
		[
			"Bobby Stokes",
			"Mick Channon",
			"Peter Osgood",
			"Jim McCalliog"
		],
		0,
		"Southampton were in the Second Division."
	],
	[
		4,
		"Football",
		"How was the winner scored in the 1987 FA Cup final, Coventry 3-2 Tottenham?",
		[
			"A Gary Mabbutt own goal",
			"A Keith Houchen header",
			"A Dave Bennett volley",
			"A Cyrille Regis penalty"
		],
		0,
		"It came in extra time. Houchen's diving header was the equaliser."
	],
	[
		4,
		"Football",
		"Which club were the first English winners of a European trophy, in 1963?",
		[
			"Tottenham Hotspur",
			"West Ham United",
			"Leeds United",
			"Manchester United"
		],
		0,
		"Spurs beat Atlético Madrid 5-1 in the Cup Winners' Cup final."
	],
	[
		4,
		"Football",
		"Who won the Golden Boot at the 1974 World Cup?",
		[
			"Grzegorz Lato",
			"Gerd Müller",
			"Johan Neeskens",
			"Andrzej Szarmach"
		],
		0,
		"The Polish winger scored seven."
	],
	[
		4,
		"Football",
		"Which country hosted the first Women's World Cup, in 1991?",
		[
			"China",
			"Sweden",
			"USA",
			"Norway"
		],
		0,
		"The USA beat Norway 2-1 in the final in Guangzhou."
	],
	[
		4,
		"Football",
		"Who scored the winning penalty in the 1999 Women's World Cup final shoot-out?",
		[
			"Brandi Chastain",
			"Mia Hamm",
			"Kristine Lilly",
			"Julie Foudy"
		],
		0,
		"The USA beat China in front of more than 90,000 at the Rose Bowl."
	],
	[
		4,
		"Football",
		"Who won the Golden Boot at the 1966 World Cup with nine goals?",
		[
			"Eusébio",
			"Helmut Haller",
			"Geoff Hurst",
			"Franz Beckenbauer"
		],
		0,
		"He scored four in Portugal's 5-3 win over North Korea."
	],
	[
		4,
		"Football",
		"Who scored the only goal of the 2025 Women's Champions League final?",
		[
			"Stina Blackstenius",
			"Alessia Russo",
			"Mariona Caldentey",
			"Beth Mead"
		],
		0,
		"The Swede came off the bench to beat Barcelona in Lisbon."
	],
	[
		4,
		"Cricket",
		"Who was the first bowler to take 300 Test wickets?",
		[
			"Fred Trueman",
			"Lance Gibbs",
			"Richie Benaud",
			"Brian Statham"
		],
		0,
		"He reached it at The Oval in 1964."
	],
	[
		4,
		"Cricket",
		"Who took 16 wickets on his Test debut at Lord's in 1972?",
		[
			"Bob Massie",
			"Dennis Lillee",
			"Jeff Thomson",
			"Max Walker"
		],
		0,
		"He swung the ball both ways. He played only six Tests."
	],
	[
		4,
		"Cricket",
		"Who scored a century in the first men's World Cup final, in 1975?",
		[
			"Clive Lloyd",
			"Viv Richards",
			"Rohan Kanhai",
			"Alvin Kallicharran"
		],
		0,
		"Lloyd made 102 as West Indies beat Australia at Lord's."
	],
	[
		4,
		"Cricket",
		"Who did Shane Warne bowl with the \"Ball of the Century\" in 1993?",
		[
			"Mike Gatting",
			"Graham Gooch",
			"Robin Smith",
			"Alec Stewart"
		],
		0,
		"It was his first ball in an Ashes Test, at Old Trafford."
	],
	[
		4,
		"Cricket",
		"Who scored 281 at Kolkata in 2001 as India won after following on?",
		[
			"VVS Laxman",
			"Rahul Dravid",
			"Sachin Tendulkar",
			"Sourav Ganguly"
		],
		0,
		"He and Dravid batted through the whole fourth day against Australia."
	],
	[
		4,
		"Cricket",
		"Who took a hat-trick in that 2001 Kolkata Test, the first by an Indian in Tests?",
		[
			"Harbhajan Singh",
			"Anil Kumble",
			"Zaheer Khan",
			"Javagal Srinath"
		],
		0,
		"He took 32 wickets in the three-match series."
	],
	[
		4,
		"Cricket",
		"Who scored the first century in women's Test cricket, in 1935?",
		[
			"Myrtle Maclagan",
			"Betty Snowball",
			"Molly Hide",
			"Peggy Antonio"
		],
		0,
		"She made 119 for England against Australia at Sydney."
	],
	[
		4,
		"Tennis",
		"Who beat Jimmy Connors in the 1975 Wimbledon men's final?",
		[
			"Arthur Ashe",
			"Björn Borg",
			"Ilie Năstase",
			"Ken Rosewall"
		],
		0,
		"Ashe won in four sets."
	],
	[
		4,
		"Tennis",
		"Who won the first Open-era Australian Open women's title, in 1969?",
		[
			"Margaret Court",
			"Billie Jean King",
			"Kerry Melville",
			"Evonne Goolagong"
		],
		0,
		"She beat Billie Jean King in the final."
	],
	[
		4,
		"Tennis",
		"In which year did Martina Navratilova win her ninth Wimbledon singles title?",
		[
			"1990",
			"1987",
			"1989",
			"1994"
		],
		0,
		"She beat Zina Garrison in the final, aged 33."
	],
	[
		4,
		"Tennis",
		"Who won the 2002 Australian Open women's title after saving four match points in the final?",
		[
			"Jennifer Capriati",
			"Martina Hingis",
			"Venus Williams",
			"Kim Clijsters"
		],
		0,
		"She beat Hingis in three sets in the heat of Melbourne."
	],
	[
		4,
		"Golf",
		"Who won the 1989 Open at Royal Troon in a play-off?",
		[
			"Mark Calcavecchia",
			"Greg Norman",
			"Wayne Grady",
			"Nick Faldo"
		],
		0,
		"It was the first four-hole aggregate play-off at The Open."
	],
	[
		4,
		"Golf",
		"Who won the 1985 Open, the first British winner since Tony Jacklin in 1969?",
		[
			"Sandy Lyle",
			"Nick Faldo",
			"Ian Woosnam",
			"Howard Clark"
		],
		0,
		"He won at Royal St George's."
	],
	[
		4,
		"Golf",
		"Who won the 2010 Open at St Andrews by seven shots?",
		[
			"Louis Oosthuizen",
			"Lee Westwood",
			"Paul Casey",
			"Rory McIlroy"
		],
		0,
		"It was his only major."
	],
	[
		4,
		"Golf",
		"Where did Europe win the Solheim Cup for the first time, in 1992?",
		[
			"Dalmahoy",
			"Gleneagles",
			"The Belfry",
			"Loch Lomond"
		],
		0,
		"Europe beat the USA near Edinburgh."
	],
	[
		4,
		"Formula 1",
		"Who won the 1982 world title despite winning only one race?",
		[
			"Keke Rosberg",
			"Didier Pironi",
			"John Watson",
			"Alain Prost"
		],
		0,
		"He won the Swiss Grand Prix, held at Dijon in France."
	],
	[
		4,
		"Formula 1",
		"Who won Mercedes' first Grand Prix after their return as a works team, in China in 2012?",
		[
			"Nico Rosberg",
			"Michael Schumacher",
			"Lewis Hamilton",
			"Valtteri Bottas"
		],
		0,
		"It was also Rosberg's first win."
	],
	[
		4,
		"Formula 1",
		"Who finished runner-up to Mika Häkkinen in 1999 after Michael Schumacher broke his leg?",
		[
			"Eddie Irvine",
			"David Coulthard",
			"Heinz-Harald Frentzen",
			"Rubens Barrichello"
		],
		0,
		"Irvine lost by two points at the last race in Japan."
	],
	[
		4,
		"Formula 1",
		"Who is the only world champion on both two wheels and four?",
		[
			"John Surtees",
			"Graham Hill",
			"Jim Clark",
			"Mike Hailwood"
		],
		0,
		"He won seven motorcycle titles and the 1964 F1 title."
	],
	[
		4,
		"Athletics",
		"Who won 1500m gold at the 1968 Olympics in Mexico City?",
		[
			"Kip Keino",
			"Jim Ryun",
			"Bodo Tümmler",
			"Ben Jipcho"
		],
		0,
		"He beat the world record holder Ryun by 20 metres, despite a gallbladder infection."
	],
	[
		4,
		"Athletics",
		"Who won Olympic heptathlon gold in 1988 and 1992?",
		[
			"Jackie Joyner-Kersee",
			"Sabine John",
			"Anke Behmer",
			"Heike Drechsler"
		],
		0,
		"Her 7,291 points in 1988 is still the world record."
	],
	[
		4,
		"Athletics",
		"Who won Olympic pentathlon gold for Britain in 1972?",
		[
			"Mary Peters",
			"Heide Rosendahl",
			"Burglinde Pollak",
			"Ann Wilson"
		],
		0,
		"She beat the home favourite Rosendahl by ten points in Munich."
	],
	[
		4,
		"Athletics",
		"Who won the 800m at the 1980 Moscow Olympics?",
		[
			"Steve Ovett",
			"Sebastian Coe",
			"Nikolai Kirov",
			"Alberto Juantorena"
		],
		0,
		"Coe, the favourite, took silver, then won the 1500m."
	],
	[
		4,
		"Rugby union",
		"Which country won the first Women's Rugby World Cup, in 1991?",
		[
			"USA",
			"England",
			"New Zealand",
			"France"
		],
		0,
		"The USA beat England 19-6 in Cardiff."
	],
	[
		4,
		"Rugby union",
		"Who captained the 1971 British and Irish Lions to a series win in New Zealand?",
		[
			"John Dawes",
			"Willie John McBride",
			"Gareth Edwards",
			"Barry John"
		],
		0,
		"It remains the Lions' only series win in New Zealand."
	],
	[
		4,
		"Rugby union",
		"Who captained the unbeaten 1974 Lions in South Africa?",
		[
			"Willie John McBride",
			"Fergus Slattery",
			"Ian McGeechan",
			"JPR Williams"
		],
		0,
		"They won three Tests and drew the fourth."
	],
	[
		4,
		"Rugby union",
		"Which country did England beat in the 1991 World Cup semi-final at Murrayfield?",
		[
			"Scotland",
			"France",
			"New Zealand",
			"Wales"
		],
		0,
		"England won 9-6, then lost the final to Australia."
	],
	[
		4,
		"Rugby league",
		"Which country won the first Rugby League World Cup, in 1954?",
		[
			"Great Britain",
			"France",
			"Australia",
			"New Zealand"
		],
		0,
		"It was held in France and was the first world cup in either rugby code."
	],
	[
		4,
		"Snooker",
		"Who did Alex Higgins beat in the 1972 World Championship final?",
		[
			"John Spencer",
			"Ray Reardon",
			"Fred Davis",
			"Rex Williams"
		],
		0,
		"Higgins was 23 and won at his first attempt."
	],
	[
		4,
		"Snooker",
		"Who won the 1979 World Championship as a qualifier?",
		[
			"Terry Griffiths",
			"Dennis Taylor",
			"Cliff Thorburn",
			"John Virgo"
		],
		0,
		"He beat Dennis Taylor in the final."
	],
	[
		4,
		"Darts",
		"Who won the first BDO World Championship, in 1978?",
		[
			"Leighton Rees",
			"John Lowe",
			"Eric Bristow",
			"Alan Evans"
		],
		0,
		"The Welshman beat John Lowe in the final."
	],
	[
		4,
		"Darts",
		"Who hit the first televised nine-dart finish, in 1984?",
		[
			"John Lowe",
			"Eric Bristow",
			"Jocky Wilson",
			"Phil Taylor"
		],
		0,
		"It came at the MFI World Matchplay and won him £102,000."
	],
	[
		4,
		"Cycling",
		"Who won the Tour de France for Ireland in 1987?",
		[
			"Stephen Roche",
			"Sean Kelly",
			"Pedro Delgado",
			"Greg LeMond"
		],
		0,
		"He also won the Giro and the world title that year."
	],
	[
		4,
		"Cycling",
		"By how many seconds did Greg LeMond win the 1989 Tour de France?",
		[
			"8",
			"12",
			"3",
			"20"
		],
		0,
		"He won the final time trial into Paris to beat Laurent Fignon."
	],
	[
		4,
		"Swimming",
		"Which Briton won 100m breaststroke gold at the 1980 Moscow Olympics?",
		[
			"Duncan Goodhew",
			"David Wilkie",
			"Adrian Moorhouse",
			"Nick Gillingham"
		],
		0,
		"Moorhouse won the same event in 1988."
	],
	[
		4,
		"Swimming",
		"Which Briton won 200m breaststroke gold at the 1976 Olympics in a world record?",
		[
			"David Wilkie",
			"Duncan Goodhew",
			"John Hencken",
			"Adrian Moorhouse"
		],
		0,
		"He was the first British man to win Olympic swimming gold since 1908."
	],
	[
		4,
		"Boxing",
		"Who was the first man to beat Muhammad Ali as a professional?",
		[
			"Joe Frazier",
			"Ken Norton",
			"Leon Spinks",
			"Larry Holmes"
		],
		0,
		"Frazier won on points at Madison Square Garden in 1971."
	],
	[
		4,
		"Boxing",
		"Which Briton won Olympic super-heavyweight gold in 2000?",
		[
			"Audley Harrison",
			"Anthony Joshua",
			"David Price",
			"Joe Joyce"
		],
		0,
		"He was Britain's first Olympic boxing champion since 1968."
	],
	[
		4,
		"Horse racing",
		"Which horse won the 1967 Grand National at 100-1 after a pile-up at the 23rd fence?",
		[
			"Foinavon",
			"Aldaniti",
			"Mon Mome",
			"Red Alligator"
		],
		0,
		"The fence is now named after him."
	],
	[
		4,
		"Horse racing",
		"Who rode Aldaniti to win the 1981 Grand National after recovering from cancer?",
		[
			"Bob Champion",
			"John Francome",
			"Peter Scudamore",
			"Richard Dunwoody"
		],
		0,
		"Their story was made into the film Champions."
	],
	[
		4,
		"Netball",
		"Which country won the 1999 Netball World Cup by one goal in the final?",
		[
			"Australia",
			"New Zealand",
			"Jamaica",
			"England"
		],
		0,
		"They beat the hosts New Zealand 42-41 in Christchurch."
	],
	[
		4,
		"Gymnastics",
		"Who won the women's Olympic all-around at Mexico City in 1968?",
		[
			"Věra Čáslavská",
			"Natalia Kuchinskaya",
			"Larisa Petrik",
			"Zinaida Voronina"
		],
		0,
		"The Czechoslovak gymnast won four golds there."
	],
	[
		4,
		"Basketball",
		"Which team won the first BAA title, the forerunner of the NBA, in 1947?",
		[
			"Philadelphia Warriors",
			"Boston Celtics",
			"New York Knicks",
			"Minneapolis Lakers"
		],
		0,
		"They beat the Chicago Stags in the final."
	],
	[
		4,
		"Ice hockey",
		"Which team did the USA beat in the 1980 \"Miracle on Ice\"?",
		[
			"Soviet Union",
			"Canada",
			"Czechoslovakia",
			"Finland"
		],
		0,
		"A team of college players won 4-3 at Lake Placid."
	]
];
// src/data/bank_all.js
var key = (q) => q[2].toLowerCase().replace(/[^a-z]/g, "").slice(0, 40);
var seen = /* @__PURE__ */ new Set();
var JUVENILE = [
	"How many balls are",
	"How many points is a try worth",
	"How many players does a netball",
	"What is the maximum break",
	"What does \"LBW\" stand for",
	"What does lbw stand for",
	"How many players does a rugby league",
	"How many players does each team have",
	"What is the championship game of the NFL",
	"What is the NFL's championship game",
	"How many points is a shot from beyond",
	"How many runs is",
	"In golf, what is a score of one under",
	"What is one shot under par",
	"How many players are on the pitch",
	"What colour card",
	"Which club plays home games at Anfield",
	"Which club is known as the Gunners",
	"In which city do both Celtic",
	"Which club play at St James",
	"Which country are known as the Springboks",
	"On what surface is Wimbledon",
	"What is a score of zero",
	"Which Grand Slam is played at Roland",
	"How many holes",
	"Which event involves a hammer",
	"What does a chequered flag",
	"How many points is a touchdown",
	"What score do players start from",
	"What colour jersey does the leader",
	"The leader of the Tour de France wears",
	"Which club does the Premier League's",
	"Which boxer was known as",
	"Which team does the \"Prancing Horse\"",
	"How many players does each netball",
	"How many strikes"
];
var DROP = [
	...[
		"Who won the Masters in 1997 by 12 shots",
		"Who won The Open in 1999 after Jean van de Velde",
		"Who made the first televised 147, in 1982",
		"Who is the only driver to win the world title after his death",
		"Who won 400m hurdles gold for Britain at the 1992 Olympics",
		"Which country did Japan famously beat",
		"Who scored the winning goal for Wimbledon in the 1988",
		"Who won the first women's Olympic marathon, in 1984",
		"Who won the first Wimbledon ladies' singles title, in 1884",
		"Which club won the English league title the season after being promoted",
		"Who captained England to the 1973 Women's World Cup",
		"Which driver won the 1976 title by one point",
		"Which team did Lily Parr play for",
		"Who took 19 wickets in the Old Trafford Test"
	],
	"Who scored the first triple century by a woman",
	"What is the highest finish possible with three darts",
	"Which city became the first to host the Summer Olympics three times"
];
var TO_KIDS = [
	"On what surface is the French Open",
	"Which golf major is always played at Augusta",
	"In which city is Lord's",
	"Which country won the men's Rugby World Cup in both",
	"Who shares the record of seven F1",
	"How many Olympic gold medals did Michael Phelps",
	"Which Spanish club has won the most European Cups",
	"Serena Williams won how many",
	"Which England player scored a hat-trick in the 1966",
	"Which country won the 2023 Women's World Cup",
	"What trophy is awarded to the NHL",
	"Which tournament is played at Flushing",
	"Lionel Messi won the World Cup with Argentina in which",
	"Which nations compete in the Six Nations",
	"Which country did England beat 4-2",
	"Which country hosted the 2014",
	"Which national team are known as the Lionesses",
	"Who scored a hat-trick for England in the 1966",
	"Which country did Lionel Messi captain",
	"What is the trophy contested by England and Australia in Test",
	"Which tournament is played every year at Augusta",
	"What is the team competition between Europe and the USA",
	"Who holds the men's 100 metres",
	"How long is a marathon",
	"England's women's team are known as",
	"Which side are nicknamed the All Blacks",
	"Which British driver won seven world",
	"The British Grand Prix is held at",
	"Which player is known as \"The Rocket\"",
	"Which ground is known as \"the Home of Cricket\"",
	"Which NBA team won six titles with Michael Jordan",
	"Usain Bolt won how many Olympic 100m",
	"Which country has won the most men's World Cups",
	"Which club has won the most European Cups and Champions",
	"How many points is a drop goal",
	"How many games must you usually win",
	"What is the highest score possible with three darts",
	"Who has won the most Olympic gold medals",
	"Which race is run at Aintree every April",
	"How many world titles did Michael Schumacher",
	"How many NBA titles did Michael Jordan",
	"How many tackles does a team get"
];
var isJuvenile = (q) => DROP.some((j) => q[2].startsWith(j)) || JUVENILE.some((j) => q[2].startsWith(j)) || TO_KIDS.some((j) => q[2].startsWith(j));
var DEMOTE = [
	"Who scored the goal that won the 1999 Champions League final",
	"Who took 800 Test wickets",
	"Who won the 2008 world title in the final corners",
	"Which team were bowled out for 36",
	"Who won the 1997 Masters by 12 shots",
	"Who won the Masters in 1997 by 12 shots",
	"Who knocked out Mike Tyson in Tokyo",
	"Who won the 2019 Masters, his first major",
	"Who is the Premier League's all-time top scorer",
	"Who is the top scorer in men's World Cup history",
	"Who is the top scorer in Women's World Cup history",
	"Christine Sinclair holds the record",
	"Which club has won the FA Cup the most times",
	"Which player scored the Premier League title-winning goal",
	"Which club won the Champions League in 2012",
	"Who scored the winner in the 2019 Champions League final",
	"Who scored 400 not out",
	"What is the annual series between New South Wales",
	"Who won four gold medals at the 1936",
	"Who set the women's 100m world record of 10.49",
	"Who won the 2009 world title with Brawn",
	"Who is the NBA's all-time leading scorer",
	"Which country won women's basketball gold at every",
	"Who holds the NHL record for career goals",
	"Who became the first woman to beat a man at the PDC",
	"Which British cyclist has won the most Olympic gold",
	"Who won Olympic 100m breaststroke gold for Great Britain in 2016",
	"Who won 800m freestyle gold at four Olympics",
	"Who was the first female jockey to win the Grand National",
	"Who was the first gymnast to score a perfect 10",
	"Then and Now: what colour ball",
	"Which club won the Premier League with a record 100 points",
	"Which British driver won the world title in 1992",
	"Which Kenyan ran the first marathon under two hours",
	"Who won the PDC World Championship in 2025, aged 17",
	"Which country has won the most Netball World Cups",
	"Which two positions are allowed to score goals",
	"How long can a player hold the ball in netball",
	"Who managed Nottingham Forest to two European Cups",
	"Who won Olympic gold in the 200m and 400m in 1996",
	"Who coached England to the 2003 World Cup",
	"Which country won the men's rugby sevens gold at the first",
	"Who won Britain's first Olympic gold in gymnastics",
	"Who won heptathlon world gold in 2019 and 2023",
	"Which French club won the Women's Champions League five times",
	"Who is Arsenal's record goalscorer",
	"Which side beat the All Blacks at the 2007"
];
var DEMOTE4 = [
	"Who won the 2004 Wimbledon ladies' title aged 17",
	"Who won the men's Olympic 1500m in 1980 and 1984",
	"Who was the first British man to win a Grand Slam singles title after Fred Perry",
	"Who won the 1976 world title by a single point",
	"Who beat Steve Davis on the final black",
	"Who scored England's goal in the 1990 World Cup semi-final",
	"Who won the 1977 Wimbledon ladies' title",
	"Who was the first European to win the Masters",
	"Which club won the Scottish Premiership in 2020-21",
	"Which team did the USA beat in the 1980",
	"Who was the first man to beat Muhammad Ali",
	"Who holds the record for the most Test caps in men's rugby union",
	"Who is the record points scorer in men's Test rugby",
	"Who won Olympic lightweight gold for Ireland in 2012",
	"Who won the men's Ballon d'Or in 1968",
	"Who scored the try in the 1973 Barbarians",
	"What was the score when Hungary became",
	"Who was the first player to score a double century in a men's ODI",
	"Which country won the women's Olympic football tournament at Paris 2024",
	"Which player won Wimbledon in 1987 and celebrated",
	"Who scored the first ever Premier League goal",
	"Which country won the 2018 Commonwealth Games netball gold",
	"Who did Shane Warne bowl with the",
	"Which goalkeeper played on in the 1956 FA Cup final",
	"Who rode Aldaniti"
];
[
	...BANK,
	...BANK2A,
	...BANK2B,
	...BANK2C,
	...BANK2D,
	...BANK2E,
	...BANK2F,
	...BANK2G
].filter((q) => !isJuvenile(q)).map((q) => q[0] === 3 && DEMOTE.some((d) => q[2].startsWith(d)) ? [2, ...q.slice(1)] : q).map((q) => q[0] === 4 && DEMOTE4.some((d) => q[2].startsWith(d)) ? [3, ...q.slice(1)] : q).filter((q) => {
	const k = key(q);
	if (seen.has(k)) return false;
	seen.add(k);
	return true;
});
var ALL_RAW = [
	...BANK,
	...BANK2A,
	...BANK2B,
	...BANK2C,
	...BANK2D,
	...BANK2E
];
var kseen = /* @__PURE__ */ new Set();
var KIDS_FROM_ADULT = ALL_RAW.filter((q) => TO_KIDS.some((j) => q[2].startsWith(j))).filter((q) => {
	const k = key(q);
	if (kseen.has(k)) return false;
	kseen.add(k);
	return true;
}).map((q) => [
	q[2],
	[q[3][q[4]], ...q[3].filter((_, i) => i !== q[4])],
	0,
	q[5]
]);
// src/pages/kids/9-12.astro
var _9_12_exports = /* @__PURE__ */ __exportAll({
	default: () => $$912,
	file: () => $$file,
	url: () => $$url
});
var $$912 = createComponent(($$result, $$props, $$slots) => {
	const K = KIDS.older;
	const QS = [...K.qs, ...KIDS_FROM_ADULT];
	return renderTemplate`${renderComponent($$result, "Kids", $$Kids, {
		"title": "Junior Brain: sport quiz and challenges for ages 9 to 12 | SportingBrain",
		"description": "Five sport questions a day, amazing facts and challenges to try at home. No ads, no chat, no sign-up.",
		"band": "older"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="kz-hero small"><div><h1>${K.name}</h1><p>Ages ${K.ages}. Five new questions every day.</p></div></section><section class="kz-card" id="kzQuiz" aria-live="polite"></section><section class="kz-cert kz-card" id="kzCert" hidden><h2>Print your certificate</h2><label>Your first name <input id="kzName" maxlength="20" autocomplete="off"></label><div class="cert" id="cert"><div class="cert-in"><img src="../assets/brain.svg" alt="" width="70"><p class="cert-k">SportingBrain ${K.name}</p><p class="cert-t">Certificate of Sporting Brilliance</p><p class="cert-n" id="certName">Your name</p><p class="cert-s" id="certScore"></p><p class="cert-d" id="certDate"></p></div></div><button class="btn gold" onclick="window.print()">Print it</button><p class="small">Your name stays on this device. We never see it.</p></section><h2 class="kz-h">Amazing facts</h2><div class="kz-facts">${K.facts.map((f) => renderTemplate`<div class="kz-card">${f}</div>`)}</div><h2 class="kz-h">Try this at home</h2><div class="kz-try">${K.tryThis.map((t) => renderTemplate`<div class="kz-card"><b>${t[0]}</b><p>${t[1]}</p></div>`)}</div><script id="kzData" type="application/json">${unescapeHTML(JSON.stringify(QS))}<\/script>${renderScript($$result, "/home/claude/sportingbrain/source/src/pages/kids/9-12.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "/home/claude/sportingbrain/source/src/pages/kids/9-12.astro", void 0);
var $$file = "/home/claude/sportingbrain/source/src/pages/kids/9-12.astro";
var $$url = "/kids/9-12.html";
// \0virtual:astro:page:src/pages/kids/9-12@_@astro
var page = () => _9_12_exports;
export { page };
