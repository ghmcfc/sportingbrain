import LOCAL_PHOTOS from './photos.json';
// SportingBrain launch content. Original writing. Facts are long-established and checked.
globalThis.SB_SPORT_COLOURS = {
  "Football":"#1E8E3E","Women's football":"#1E8E3E","Cricket":"#B08D3C","Formula 1":"#D32F2F","Rugby union":"#1F3864",
  "Rugby":"#1F3864","Darts":"#212121","Tennis":"#7CB342","Golf":"#2E7D32","Athletics":"#EF6C00","Olympics":"#1565C0",
  "Snooker":"#00695C","Netball":"#AD1457","Cycling":"#F9A825","Boxing":"#B71C1C","Basketball":"#E65100","Ice hockey":"#0277BD",
  "Badminton":"#6A1B9A","Horse racing":"#5D4037","Swimming":"#0097A7","Unusual":"#8E24AA","Satire":"#455A64","Family":"#F57C00","Women's sport":"#C2185B"
};

globalThis.SB_STORIES = [
  {id:"leicester", sport:"Football", emoji:"🦊", title:"The 5,000-to-1 miracle",
   teaser:"A club tipped for relegation won the Premier League. Nobody saw it coming. Not even the bookies.",
   body:["At the start of the 2015-16 season, Leicester City were 5,000-to-1 to win the Premier League. A year earlier they had been bottom at Christmas and only just escaped relegation.",
         "Under Claudio Ranieri they played fast, fearless counter-attacking football. Jamie Vardy scored in 11 Premier League games in a row, a new record. Riyad Mahrez danced past defenders all season and was named the PFA Players' Player of the Year. N'Golo Kante seemed to be in three places at once.",
         "On 2 May 2016, Tottenham drew 2-2 at Chelsea and Leicester were champions. The players watched it together at Vardy's house.",
         "It is still one of the greatest shocks in the history of sport."],
   quiz:[{q:"What odds were Leicester to win the league at the start of the season?",o:["500-to-1","1,000-to-1","5,000-to-1","10,000-to-1"],a:2},
         {q:"Who scored in 11 Premier League games in a row that season?",o:["Riyad Mahrez","Jamie Vardy","Shinji Okazaki","Wes Morgan"],a:1},
         {q:"Who was Leicester's manager?",o:["Nigel Pearson","Brendan Rodgers","Claudio Ranieri","Craig Shakespeare"],a:2}]},
  {id:"bannister", sport:"Athletics", emoji:"⏱️", title:"The four-minute mile falls",
   teaser:"They said the human body couldn't do it. A junior doctor did it on a windy evening in Oxford.",
   body:["For years, running a mile in under four minutes was thought to be beyond human limits. On 6 May 1954, at the Iffley Road track in Oxford, a junior doctor called Roger Bannister proved everyone wrong.",
         "Paced by his friends Chris Brasher and Chris Chataway, he crossed the line in 3 minutes 59.4 seconds. He had trained around his medical studies, often in his lunch hour.",
         "His record lasted just 46 days. But the barrier was gone for good, and runners all over the world began to believe.",
         "Bannister went on to become a leading neurologist. Impossible, it turns out, is often just 'not yet'."],
   quiz:[{q:"Where did Bannister run the first sub-four-minute mile?",o:["White City","Iffley Road, Oxford","Crystal Palace","Wembley"],a:1},
         {q:"What was his time?",o:["3:58.0","3:59.4","3:59.9","4:00.1"],a:1},
         {q:"What was Bannister's job?",o:["Teacher","Soldier","Junior doctor","Journalist"],a:2}]},
  {id:"switzer", sport:"Athletics", emoji:"🏃‍♀️", title:"The runner they tried to stop",
   teaser:"An official tried to drag her off the course. She finished the race, and changed running for ever.",
   body:["In 1967, Kathrine Switzer entered the Boston Marathon as 'K. V. Switzer' and became the first woman to run it as an officially registered entrant.",
         "A few miles in, an official tried to pull her off the course and tear off her race number. Her boyfriend and her teammates shielded her, and she kept going. She finished.",
         "The photographs went around the world. Switzer spent the years that followed campaigning for women's running.",
         "In 1984, the women's marathon finally became an Olympic event. Sometimes finishing the race changes the race for everyone."],
   quiz:[{q:"Which marathon did Switzer run in 1967?",o:["London","New York","Boston","Chicago"],a:2},
         {q:"How did she enter the race?",o:["As K. V. Switzer","Under her brother's name","As a pacer","She didn't enter"],a:0},
         {q:"When did the women's marathon join the Olympics?",o:["1972","1980","1984","1996"],a:2}]},
  {id:"bolt", sport:"Athletics", emoji:"⚡", title:"9.58: the fastest man ever",
   teaser:"One night in Berlin, Usain Bolt ran a time that still looks like a typing error.",
   body:["On 16 August 2009, at the World Championships in Berlin, Usain Bolt lined up for the 100 metres final.",
         "He crossed the line in 9.58 seconds, smashing his own world record. At top speed he was moving at roughly 27 miles per hour.",
         "Four days later he broke his own 200 metres world record too, running 19.19 seconds.",
         "He went on to win eight Olympic gold medals. More than a decade and a half later, nobody has come close to 9.58."],
   quiz:[{q:"In which city did Bolt run 9.58?",o:["Beijing","London","Berlin","Rome"],a:2},
         {q:"What was his 200m record in the same championships?",o:["19.19","19.30","19.32","19.78"],a:0},
         {q:"How many Olympic golds did Bolt win?",o:["6","8","9","10"],a:1}]},
  {id:"wilkinson", sport:"Rugby union", emoji:"🏉", title:"The drop goal that won the world",
   teaser:"Twenty-six seconds left in extra time. One kick. A whole country holding its breath.",
   body:["On 22 November 2003, England faced hosts Australia in the Rugby World Cup final in Sydney. It went to extra time, tied at 17-17.",
         "With about half a minute left, the ball came back to Jonny Wilkinson. He dropped it onto his weaker right foot and sent it between the posts.",
         "England won 20-17 and became the first team from the northern hemisphere to win the Rugby World Cup.",
         "Ask anyone who watched it where they were. They'll tell you."],
   quiz:[{q:"Where was the 2003 final played?",o:["Brisbane","Sydney","Melbourne","Perth"],a:1},
         {q:"What was the final score?",o:["20-17","17-14","24-20","15-12"],a:0},
         {q:"Which foot did Wilkinson kick the winning drop goal with?",o:["His left","His right"],a:1}]},
  {id:"lionesses", sport:"Women's football", emoji:"🦁", title:"Football came home",
   teaser:"A sold-out Wembley, extra time, and a moment that changed women's football in England.",
   body:["On 31 July 2022, England's Lionesses played Germany in the final of the Women's Euro at Wembley in front of more than 87,000 people.",
         "It was 1-1 after 90 minutes. In extra time, Chloe Kelly bundled the ball home and ran off swinging her shirt above her head.",
         "England won 2-1. It was the first major trophy for an England senior team since 1966.",
         "In 2025 the Lionesses won the Euro again, and the women's game has kept on growing ever since."],
   quiz:[{q:"Who scored England's winner in the 2022 final?",o:["Alessia Russo","Beth Mead","Chloe Kelly","Ella Toone"],a:2},
         {q:"Who did England beat in the final?",o:["Spain","Germany","Sweden","France"],a:1},
         {q:"Where was the final played?",o:["Old Trafford","Wembley","Etihad Stadium","St James' Park"],a:1}]},
  {id:"istanbul", sport:"Football", emoji:"🏆", title:"The miracle of Istanbul",
   teaser:"Three-nil down at half-time in a European Cup final. What happened next is still hard to believe.",
   body:["On 25 May 2005, Liverpool played AC Milan in the Champions League final in Istanbul. By half-time they were 3-0 down and many thought it was over.",
         "In six astonishing minutes after the break, Steven Gerrard, Vladimir Smicer and Xabi Alonso made it 3-3.",
         "It went to penalties. Goalkeeper Jerzy Dudek, dancing on his line, saved from Andriy Shevchenko to win the trophy.",
         "Liverpool fans still simply call it 'Istanbul'. Everyone knows what they mean."],
   quiz:[{q:"What was the half-time score?",o:["2-0","3-0","3-1","4-1"],a:1},
         {q:"Who scored Liverpool's first goal?",o:["Xabi Alonso","Vladimir Smicer","Steven Gerrard","Djibril Cisse"],a:2},
         {q:"Whose penalty did Dudek save to win it?",o:["Andrea Pirlo","Kaka","Andriy Shevchenko","Paolo Maldini"],a:2}]}
];

// On This Day: month-day keyed. Shown if within a week of today.
globalThis.SB_HISTORY = [
  {md:"11-22", y:2003, t:"England beat Australia 20-17 in Sydney to win the Rugby World Cup, thanks to Jonny Wilkinson's extra-time drop goal.", tf:{s:"England won the 2003 Rugby World Cup final in Sydney.", a:true}},
  {md:"11-25", y:1953, t:"Hungary beat England 6-3 at Wembley, England's first home defeat to a team from outside the British Isles.", tf:{s:"England beat Hungary 6-3 at Wembley in 1953.", a:false}},
  {md:"11-30", y:1872, t:"Scotland and England drew 0-0 in Glasgow in the first official international football match.", tf:{s:"The first official international football match ended 0-0.", a:true}},
  {md:"04-19", y:1967, t:"Kathrine Switzer became the first woman to run the Boston Marathon as a registered entrant.", tf:{s:"Kathrine Switzer entered the 1967 Boston Marathon under her full first name.", a:false}},
  {md:"05-02", y:2016, t:"Leicester City were confirmed as Premier League champions after Tottenham drew 2-2 at Chelsea.", tf:{s:"Leicester clinched the 2016 title by winning at Chelsea.", a:false}},
  {md:"05-06", y:1954, t:"Roger Bannister ran the first mile under four minutes, in 3:59.4 at Iffley Road, Oxford.", tf:{s:"Bannister's first sub-four-minute mile was run in Oxford.", a:true}},
  {md:"05-25", y:2005, t:"Liverpool came back from 3-0 down to beat AC Milan on penalties in the Champions League final in Istanbul.", tf:{s:"Liverpool were 3-0 down at half-time in Istanbul.", a:true}},
  {md:"07-30", y:1966, t:"England beat West Germany 4-2 after extra time at Wembley to win the World Cup.", tf:{s:"Geoff Hurst scored a hat-trick in the 1966 World Cup final.", a:true}},
  {md:"07-31", y:2022, t:"England's Lionesses beat Germany 2-1 after extra time at Wembley to win the Women's Euro.", tf:{s:"Beth Mead scored the winner in the Women's Euro 2022 final.", a:false}},
  {md:"08-16", y:2009, t:"Usain Bolt ran the 100 metres in 9.58 seconds in Berlin, still the world record.", tf:{s:"Bolt set his 9.58 world record at the Olympics.", a:false}}
];

globalThis.SB_STATS = [
  {n:"23", t:"Olympic gold medals won by swimmer Michael Phelps. Nobody in history has won more.", s:"Swimming"},
  {n:"16", t:"World titles won by Phil 'The Power' Taylor, the most by any player in darts history.", s:"Darts"},
  {n:"9.58", t:"Seconds. Usain Bolt's 100 metres world record, set in Berlin in 2009.", s:"Athletics"},
  {n:"704", t:"Test wickets taken by James Anderson, more than any other fast bowler in history.", s:"Cricket"},
  {n:"260", t:"Premier League goals scored by Alan Shearer. Still the all-time record.", s:"Football"},
  {n:"18", t:"Golf majors won by Jack Nicklaus, the Golden Bear. The most by any player.", s:"Golf"},
  {n:"15,921", t:"Test runs scored by Sachin Tendulkar, the most in the history of the game.", s:"Cricket"}
];

globalThis.SB_SPORTS = [
  {id:"sepak-takraw", name:"Sepak takraw", emoji:"🦶", where:"Southeast Asia, especially Thailand and Malaysia",
   what:"Think volleyball, but you can't use your hands. Two teams of three keep a small woven ball in the air with their feet, knees, chest and head, and send it over a net. The star move is the spike: a player leaps up and kicks the ball over from above head height, often flipping right over as they do it.",
   fact:"The ball is traditionally woven from rattan, a kind of palm.",
   quiz:[{q:"Can sepak takraw players use their hands?",o:["Yes","No"],a:1},{q:"How many players are on a team on court?",o:["2","3","5","6"],a:1},{q:"What is the ball traditionally made of?",o:["Leather","Rubber","Rattan","Cork"],a:2}]},
  {id:"netball", name:"Netball", emoji:"🏐", where:"England, Australia, New Zealand, Jamaica and across the Commonwealth",
   what:"Two teams of seven try to score in a ring with no backboard. You can't run with the ball, and you have just three seconds to pass it. Each player wears a bib showing their position and can only go in certain areas of the court.",
   fact:"Australia won the 2023 Netball World Cup in Cape Town.",
   quiz:[{q:"How many players are on a netball team on court?",o:["5","6","7","9"],a:2},{q:"How long can you hold the ball?",o:["3 seconds","5 seconds","10 seconds","As long as you like"],a:0},{q:"Who won the 2023 Netball World Cup?",o:["England","New Zealand","Jamaica","Australia"],a:3}]},
  {id:"curling", name:"Curling", emoji:"🥌", where:"Scotland, Canada, Sweden, Switzerland and beyond",
   what:"Teams of four slide heavy granite stones down a sheet of ice towards a target called the house. Teammates sweep the ice in front of the stone to make it travel further and straighter. Closest to the centre scores.",
   fact:"Curling began in Scotland, and many of the world's curling stones are made from Scottish granite.",
   quiz:[{q:"Where did curling begin?",o:["Canada","Scotland","Norway","Switzerland"],a:1},{q:"What is the target called?",o:["The bullseye","The house","The circle","The pot"],a:1},{q:"How many players are in a curling team?",o:["3","4","5","6"],a:1}]},
  {id:"kabaddi", name:"Kabaddi", emoji:"🤼", where:"India, Bangladesh, Pakistan, Iran and more",
   what:"A raider crosses into the other team's half, tags as many opponents as possible, and gets back before being tackled, all on a single breath, chanting 'kabaddi, kabaddi' to prove it. Seven players a side are on court.",
   fact:"Kabaddi is thousands of years old and comes from India.",
   quiz:[{q:"Where does kabaddi come from?",o:["Japan","India","Brazil","Egypt"],a:1},{q:"What does the raider chant?",o:["Raid, raid","Kabaddi, kabaddi","Go, go","Run, run"],a:1},{q:"How many players a side are on court?",o:["5","7","9","11"],a:1}]},
  {id:"hurling", name:"Hurling", emoji:"🏑", where:"Ireland",
   what:"Fifteen players a side use a wooden stick called a hurley to strike a small ball called a sliotar. Hit it over the bar for a point or into the net for a goal, worth three. It's one of the fastest field sports in the world.",
   fact:"Hurling has been played in Ireland for thousands of years and is run by the GAA.",
   quiz:[{q:"Which country does hurling come from?",o:["Scotland","Wales","Ireland","Canada"],a:2},{q:"What is the ball called?",o:["A sliotar","A puck","A pill","A conker"],a:0},{q:"How many points is a goal worth?",o:["1","2","3","5"],a:2}]},
  {id:"korfball", name:"Korfball", emoji:"🧺", where:"The Netherlands, Belgium, Taiwan and the UK",
   what:"A mixed sport: each team of eight has four men and four women. You score by throwing the ball through a basket on a tall post. You can't run with the ball, and you can only defend someone of your own sex.",
   fact:"Korf is the Dutch word for basket. The game was invented in the Netherlands in 1902.",
   quiz:[{q:"How many players are in a korfball team?",o:["6","7","8","10"],a:2},{q:"What does 'korf' mean?",o:["Ball","Basket","Post","Team"],a:1},{q:"Where was korfball invented?",o:["Belgium","Germany","The Netherlands","Denmark"],a:2}]},
  {id:"darts", name:"Darts", emoji:"🎯", where:"The UK, the Netherlands and worldwide",
   what:"Players start on 501 and race to zero, throwing three darts a turn. The catch: you have to finish exactly, with a double or the bullseye. The highest checkout is 170 and a perfect leg takes nine darts.",
   fact:"The line you stand behind is called the oche.",
   quiz:[{q:"What score does a standard game start from?",o:["301","401","501","1001"],a:2},{q:"What's the highest checkout?",o:["160","170","180","200"],a:1},{q:"What is the throwing line called?",o:["The mark","The oche","The rail","The toe"],a:1}]}
];

globalThis.SB_HEROES = {
  hero:{name:"Sir Roger Bannister", sport:"Athletics", emoji:"⏱️", story:"bannister", line:"Ran the first mile under four minutes, between hospital shifts."},
  heroine:{name:"Kathrine Switzer", sport:"Athletics", emoji:"🏃‍♀️", story:"switzer", line:"Finished the 1967 Boston Marathon after an official tried to drag her off the course."}
};



// Weekly challenges, run by the challenge page.
globalThis.SB_CHALLENGES = {
  weekly:{title:"The Weekly Brain Challenge", sub:"Week 1: ten questions, football and beyond", colour:"#1E8E3E", qs:[
    {q:"Who is England men's record goalscorer, and joined Bayern Munich in 2023?",o:["Wayne Rooney","Harry Kane","Marcus Rashford","Jamie Vardy"],a:1},
    {q:"Which club has won the most European Cups and Champions Leagues?",o:["AC Milan","Bayern Munich","Real Madrid","Liverpool"],a:2},
    {q:"Who won Euro 2024?",o:["England","France","Spain","Germany"],a:2},
    {q:"Who won the 2022 men's World Cup?",o:["France","Argentina","Brazil","Croatia"],a:1},
    {q:"Which '5,000-to-1' club won the Premier League in 2015-16?",o:["Leicester City","Southampton","West Ham","Burnley"],a:0},
    {q:"What is the name of Manchester United's home ground?",o:["Old Trafford","Villa Park","Maine Road","Goodison Park"],a:0},
    {q:"What does VAR stand for?",o:["Video Action Review","Video Assistant Referee","Visual Assist Replay","Video Analysis Room"],a:1},
    {q:"Which F1 team is known as the Prancing Horse?",o:["McLaren","Red Bull","Ferrari","Williams"],a:2},
    {q:"At which circuit is the British Grand Prix held?",o:["Brands Hatch","Donington","Silverstone","Goodwood"],a:2},
    {q:"Which British driver won the F1 world title in 1992?",o:["Damon Hill","Jenson Button","Nigel Mansell","James Hunt"],a:2}]},
  women:{title:"Women's Sport Weekly", sub:"Ten questions on the women's game", colour:"#C2185B", qs:[
    {q:"Which tournament did England's Lionesses win in 2022 and 2025?",o:["The World Cup","The Women's Euro","The Olympics","The SheBelieves Cup"],a:1},
    {q:"Which country won the 2023 FIFA Women's World Cup?",o:["England","USA","Spain","Sweden"],a:2},
    {q:"Which country won the first Women's World Cup in 1991?",o:["Norway","USA","Germany","China"],a:1},
    {q:"Which country won the 2023 Netball World Cup?",o:["England","Australia","Jamaica","New Zealand"],a:1},
    {q:"Which British player won the 2021 US Open as a qualifier?",o:["Johanna Konta","Heather Watson","Emma Raducanu","Katie Boulter"],a:2},
    {q:"Who won heptathlon gold for Great Britain at London 2012?",o:["Katarina Johnson-Thompson","Jessica Ennis","Denise Lewis","Kelly Holmes"],a:1},
    {q:"Who was the first woman to ride the winner of the Grand National?",o:["Rachael Blackmore","Bryony Frost","Hollie Doyle","Katie Walsh"],a:0},
    {q:"Which club won the first Women's Super League title in 2011?",o:["Chelsea","Arsenal","Everton","Liverpool"],a:1},
    {q:"Which club has won the most Women's Champions League titles?",o:["Barcelona","Wolfsburg","Lyon","Arsenal"],a:2},
    {q:"Which British woman won the Wimbledon singles title in 1977?",o:["Virginia Wade","Sue Barker","Ann Jones","Jo Durie"],a:0}]},
  world:{title:"World Sport Wednesday", sub:"Weird and wonderful sports from around the globe", colour:"#8E24AA", qs:[
    {q:"Which country does hurling come from?",o:["Scotland","Ireland","Wales","Australia"],a:1},
    {q:"Where does kabaddi come from?",o:["India","Thailand","Iran","Japan"],a:0},
    {q:"In which country did sumo wrestling begin?",o:["China","Korea","Japan","Mongolia"],a:2},
    {q:"Korfball was invented in which country?",o:["Belgium","The Netherlands","Denmark","Germany"],a:1},
    {q:"Curling began in which country?",o:["Canada","Scotland","Sweden","Switzerland"],a:1},
    {q:"Which body part can't you use in sepak takraw?",o:["Head","Feet","Hands","Knees"],a:2},
    {q:"Which national rugby team performs the haka?",o:["Fiji","Samoa","New Zealand","Tonga"],a:2},
    {q:"In which city is the Australian Open tennis played?",o:["Sydney","Melbourne","Brisbane","Perth"],a:1},
    {q:"In which sport is the Stanley Cup awarded?",o:["Lacrosse","Ice hockey","Baseball","Curling"],a:1},
    {q:"How many players does a polo team have?",o:["3","4","6","8"],a:1}]},
  family:{title:"The Friday Family Challenge", sub:"Kids' questions and grown-ups' questions. Add up a family score!", colour:"#F57C00", qs:[
    {q:"KIDS: What shape is a football pitch?",o:["Circle","Rectangle","Triangle","Star"],a:1},
    {q:"GROWN-UPS: How many players start a football match on each team?",o:["9","10","11","12"],a:2},
    {q:"KIDS: Which sport uses a racket and a fuzzy yellow ball?",o:["Tennis","Golf","Cricket","Rugby"],a:0},
    {q:"GROWN-UPS: Which Grand Slam tennis tournament is played on clay?",o:["Wimbledon","US Open","French Open","Australian Open"],a:2},
    {q:"KIDS: How many rings are on the Olympic flag?",o:["3","4","5","6"],a:2},
    {q:"GROWN-UPS: Which city hosted the 2012 Olympics?",o:["Paris","London","Beijing","Tokyo"],a:1},
    {q:"KIDS: In which sport do you score a try?",o:["Football","Rugby","Tennis","Swimming"],a:1},
    {q:"GROWN-UPS: How many points is a try worth in rugby union?",o:["3","4","5","7"],a:2},
    {q:"KIDS: In cricket, do you hit a ball or a shuttlecock?",o:["A ball","A shuttlecock"],a:0},
    {q:"GROWN-UPS: How many balls are there in a cricket over?",o:["4","5","6","8"],a:2}]}
};

// Guess the Player: three clues, four options.
globalThis.SB_PLAYERS = [
  {a:"Harry Kane", c:["Came through Tottenham's academy","Joined Bayern Munich in 2023","England men's record goalscorer"], o:["Harry Kane","Wayne Rooney","Jamie Vardy","Marcus Rashford"]},
  {a:"Serena Williams", c:["American tennis legend","Won Wimbledon seven times","23 Grand Slam singles titles"], o:["Venus Williams","Serena Williams","Steffi Graf","Maria Sharapova"]},
  {a:"Usain Bolt", c:["Jamaican sprinter","Won eight Olympic gold medals","Ran 9.58 in Berlin in 2009"], o:["Yohan Blake","Usain Bolt","Asafa Powell","Justin Gatlin"]},
  {a:"Phil Taylor", c:["From Stoke-on-Trent","Nicknamed The Power","Won 16 darts world titles"], o:["Phil Taylor","Eric Bristow","Michael van Gerwen","Raymond van Barneveld"]},
  {a:"Jessica Ennis-Hill", c:["From Sheffield","Became a Dame in 2017","Heptathlon gold at London 2012"], o:["Denise Lewis","Jessica Ennis-Hill","Kelly Holmes","Katarina Johnson-Thompson"]},
  {a:"Lewis Hamilton", c:["Moved to Ferrari in 2025","First driver to win 100 F1 races","Seven F1 world titles"], o:["Jenson Button","Lewis Hamilton","Nigel Mansell","Damon Hill"]},
  {a:"Michael Phelps", c:["American swimmer","Won eight golds at Beijing 2008","23 Olympic gold medals"], o:["Ryan Lochte","Mark Spitz","Michael Phelps","Ian Thorpe"]},
  {a:"Sachin Tendulkar", c:["Indian batter","Nicknamed the Little Master","Scored more Test runs than anyone in history"], o:["Virat Kohli","Sachin Tendulkar","Rahul Dravid","Sunil Gavaskar"]},
  {a:"Rachael Blackmore", c:["Irish jockey","Won the Grand National on Minella Times","First woman to ride the Grand National winner"], o:["Katie Walsh","Rachael Blackmore","Bryony Frost","Nina Carberry"]},
  {a:"Muhammad Ali", c:["Born Cassius Clay","Olympic gold medallist in 1960","Called himself The Greatest"], o:["Joe Frazier","George Foreman","Muhammad Ali","Sugar Ray Leonard"]},
  {a:"Jack Nicklaus", c:["American golfer","Nicknamed the Golden Bear","Won a record 18 majors"], o:["Arnold Palmer","Jack Nicklaus","Gary Player","Tom Watson"]},
  {a:"Erling Haaland", c:["Norwegian striker","His father also played in the Premier League","Scored 36 goals in his first Premier League season"], o:["Erling Haaland","Martin Odegaard","Alexander Sorloth","Ole Gunnar Solskjaer"]}
];

globalThis.SB_TF = [
  ["A marathon is 26.2 miles long.",true],["Snooker's maximum break is 147.",true],["The Olympic flag has six rings.",false],
  ["In golf, an albatross is three under par on a hole.",true],["A try in rugby union is worth 3 points.",false],["The bullseye in darts is worth 50.",true],
  ["Wimbledon is played on clay.",false],["A cricket wicket has three stumps.",true],["Sepak takraw players can use their hands.",false],
  ["Ice hockey teams have six players on the ice, including the goalie.",true],["The Tour de France leader wears a green jersey.",false],
  ["England's men won the World Cup in 1966.",true],["Spain won the 2023 Women's World Cup.",true],["Netball teams have nine players on court.",false],
  ["A basketball shot from beyond the arc is worth three points.",true],["Curling began in Scotland.",true],["Hurling comes from Wales.",false],
  ["Phil Taylor won 16 darts world titles.",true],["Usain Bolt's 100m world record is 9.68 seconds.",false],["A standard round of golf has 18 holes.",true],
  ["A korfball team has four men and four women.",true],["The Ashes trophy is a large silver cup.",false],["Jack Nicklaus won 18 golf majors.",true],
  ["The Grand National is run at Cheltenham.",false],["Brazil have won five men's World Cups.",true],["A netball player can run with the ball.",false]
];

// The Grid: find four groups of four.
globalThis.SB_GRIDS = [
  {groups:[
    {n:"Golf scores", w:["Birdie","Eagle","Bogey","Albatross"]},
    {n:"Ways to be out in cricket", w:["Bowled","Caught","Stumped","LBW"]},
    {n:"Snooker colours", w:["Pink","Blue","Brown","Black"]},
    {n:"Tennis terms", w:["Love","Deuce","Ace","Let"]}]},
  {groups:[
    {n:"F1 circuits", w:["Silverstone","Monza","Spa","Suzuka"]},
    {n:"Darts words", w:["Oche","Bull","Treble","Double"]},
    {n:"Rugby positions", w:["Hooker","Prop","Lock","Fly-half"]},
    {n:"Netball positions", w:["Goal Shooter","Wing Attack","Centre","Goal Keeper"]}]},
  {groups:[
    {n:"Football club nicknames", w:["Toffees","Gunners","Magpies","Saints"]},
    {n:"Summer Olympic host cities", w:["London","Paris","Tokyo","Beijing"]},
    {n:"Golf majors", w:["The Masters","US Open","The Open","PGA Championship"]},
    {n:"Tennis Grand Slam venues", w:["Wimbledon","Roland Garros","Flushing Meadows","Melbourne Park"]}]}
];

// Guess the Sport from emoji clues.
globalThis.SB_EMOJI = [
  {e:"🏹 🎯 🟡", a:"Archery", o:["Darts","Archery","Shooting","Bowls"]},
  {e:"🏒 🧊 🥅", a:"Ice hockey", o:["Curling","Ice hockey","Speed skating","Bandy"]},
  {e:"🐎 🏁 🌿", a:"Horse racing", o:["Polo","Horse racing","Show jumping","Rodeo"]},
  {e:"⛳ 🐦 🏌️", a:"Golf", o:["Golf","Croquet","Cricket","Hockey"]},
  {e:"🥊 🔔 💪", a:"Boxing", o:["Wrestling","Judo","Boxing","Fencing"]},
  {e:"🥌 🧹 🧊", a:"Curling", o:["Ice hockey","Curling","Figure skating","Bobsleigh"]},
  {e:"🦶 🏐 🤸", a:"Sepak takraw", o:["Volleyball","Sepak takraw","Footvolley","Handball"]},
  {e:"🏓 🏓 🔴", a:"Table tennis", o:["Badminton","Squash","Table tennis","Padel"]},
  {e:"🏊 🚴 🏃", a:"Triathlon", o:["Pentathlon","Triathlon","Heptathlon","Biathlon"]},
  {e:"⛷️ 🎿 🔫", a:"Biathlon", o:["Biathlon","Ski jumping","Slalom","Triathlon"]}
];

// Today in Sporting History: rotates through years for today's date. Written in our own words from checked listings.
Object.assign(globalThis.SB_SPORT_COLOURS, {"American football":"#6D4C41","Canadian football":"#C62828","Surfing":"#0288D1","Baseball":"#283593"});
globalThis.SB_TODAY = [
  {md:"12-08", y:1940, s:"American football", t:"The Chicago Bears beat Washington 73-0 in the NFL Championship Game, still the most one-sided result in NFL history."},
  {md:"12-09", y:1984, s:"American football", t:"Eric Dickerson of the LA Rams runs for 215 yards against Houston to break OJ Simpson's single-season rushing record. He finishes on 2,105 yards, a record that still stands."},
  {md:"12-13", y:1965, s:"Cricket", t:"Doug Walters makes a century on his Test debut for Australia against England at Brisbane. He goes on to 155 the next day."},
  {md:"12-10", y:1983, s:"Tennis", t:"Martina Navratilova wins the Australian Open, the eighth Grand Slam singles title of her career."},
  {md:"12-11", y:1981, s:"Boxing", t:"Muhammad Ali fights for the 61st and last time, losing to Trevor Berbick on a unanimous decision over ten rounds in the Bahamas."},
  {md:"12-12", y:2021, s:"Formula 1", t:"Max Verstappen passes Lewis Hamilton on the last lap of the Abu Dhabi Grand Prix to win his first world title, after a late safety car that is still argued about."},
  {md:"12-13", y:1989, s:"Football", t:"Bryan Robson scores after 38 seconds against Yugoslavia, then the fastest international goal at Wembley. England win 2-1."},
  {md:"12-14", y:1920, s:"Boxing", t:"Jack Dempsey knocks out Bill Brennan in the 12th round at Madison Square Garden to keep the world heavyweight title."},
  {md:"12-15", y:1995, s:"Football", t:"The European Court of Justice rules in favour of Jean-Marc Bosman. Out-of-contract players in the EU can now move for free, and limits on EU players are scrapped."},
  {md:"12-16", y:2007, s:"American football", t:"Brett Favre passes Dan Marino to become the NFL's career leader in passing yards, in his 17th season."},
  {md:"12-17", y:2019, s:"Darts", t:"Fallon Sherrock beats Ted Evetts 3-2 at Alexandra Palace, the first woman to win a match at the PDC World Championship."},
  {md:"12-18", y:2022, s:"Football", t:"Argentina beat France on penalties after a 3-3 draw in the World Cup final in Qatar. Lionel Messi scores twice and Kylian Mbappé scores a hat-trick."},
  {md:"12-19", y:2018, s:"Basketball", t:"The Houston Rockets make 26 three-pointers against Washington, then an NBA record for a single game."},
  {md:"12-20", y:2014, s:"Basketball", t:"Kentucky score the first 24 points against UCLA and lead 41-7 at half-time, the fewest points UCLA had ever scored in a half."},
  {md:"12-21", y:1891, s:"Basketball", t:"James Naismith's students play the first game of basketball at the YMCA Training School in Springfield, Massachusetts, with peach baskets for hoops."},
  {md:"12-21", y:2010, s:"Basketball", t:"The UConn women win their 89th game in a row, passing the 88-game streak set by John Wooden's UCLA men."},
  {md:"12-22", y:1894, s:"Golf", t:"The United States Golf Association is founded to run the game in America."},
  {md:"12-23", y:1972, s:"American football", t:"Franco Harris scoops up a deflected pass and runs in the winning touchdown with seconds left. The Steelers beat the Raiders 13-7: the Immaculate Reception."},
  {md:"12-24", y:1968, s:"Football", t:"George Best is named winner of the Ballon d'Or, months after Manchester United won the European Cup."},
  {md:"12-25", y:1971, s:"American football", t:"Miami beat Kansas City 27-24 in double overtime. At 82 minutes 40 seconds, it is still the longest game in NFL history."},
  {md:"11-22", y:2003, s:"Rugby union", t:"Jonny Wilkinson's extra-time drop goal wins England the Rugby World Cup, 20-17 against Australia in Sydney."},
  {md:"11-23", y:2018, s:"Golf", t:"Phil Mickelson beats Tiger Woods in a winner-takes-all head-to-head match worth $9 million."},
  {md:"11-23", y:2008, s:"Canadian football", t:"The Calgary Stampeders beat the Montreal Alouettes 22-14 to win the Grey Cup."},
  {md:"11-23", y:2002, s:"American football", t:"Penn State's Larry Johnson runs for 279 yards against Michigan State to pass 2,000 yards for the season."},
  {md:"11-23", y:1947, s:"American football", t:"Sammy Baugh throws six touchdown passes as Washington beat the St. Louis Cardinals 45-21."},
  {md:"11-24", y:2024, s:"American football", t:"Saquon Barkley runs for 255 yards, an Eagles club record, in a 37-20 win over the Los Angeles Rams."},
  {md:"11-24", y:2015, s:"Basketball", t:"The Golden State Warriors go 16-0, the best start to a season in NBA history, thrashing the Lakers 111-77."},
  {md:"11-24", y:1996, s:"Golf", t:"Karrie Webb wins the LPGA Tour Championship to become the first player to earn more than $1 million in a season on the women's tour."},
  {md:"11-24", y:1960, s:"Basketball", t:"Wilt Chamberlain grabs 55 rebounds in a single NBA game, a record that still stands."},
  {md:"11-24", y:1934, s:"Canadian football", t:"The Sarnia Imperials beat the Regina Roughriders 20-12 to win their first Grey Cup."},
  {md:"11-25", y:1953, s:"Football", t:"Hungary beat England 6-3 at Wembley, England's first home defeat by a team from outside the British Isles."},
  {md:"11-26", y:2010, s:"American football", t:"Auburn come back from 24 points down to beat Alabama 28-27 in one of the great Iron Bowls."},
  {md:"11-26", y:1999, s:"Ice hockey", t:"Steve Yzerman scores his 600th NHL goal as Detroit beat Edmonton 4-2."},
  {md:"11-26", y:1995, s:"American football", t:"Miami's Dan Marino breaks the NFL record for career touchdown passes."},
  {md:"11-26", y:1949, s:"American football", t:"Boston College beat Holy Cross 76-0, with Al Cannava running for 229 yards."},
  {md:"11-26", y:1917, s:"Ice hockey", t:"The National Hockey League is formed in Montreal."},
  {md:"11-27", y:2014, s:"Surfing", t:"Australia's Stephanie Gilmore wins her sixth women's world surfing title."},
  {md:"11-27", y:2013, s:"Golf", t:"Tiger Woods is named PGA Tour Player of the Year for the 11th time."},
  {md:"11-27", y:1998, s:"American football", t:"Texas running back Ricky Williams becomes the all-time leading rusher in college football's top division, passing Tony Dorsett."},
  {md:"11-27", y:1966, s:"American football", t:"Washington beat the New York Giants 72-41 in the highest-scoring game in NFL history."},
  {md:"11-27", y:1941, s:"Baseball", t:"Joe DiMaggio is named the American League's Most Valuable Player for the second time."},
  {md:"11-28", y:2015, s:"Football", t:"Jamie Vardy scores against Manchester United to make it 11 Premier League games in a row with a goal, a new record."},
  {md:"11-28", y:2015, s:"Boxing", t:"Tyson Fury outpoints Wladimir Klitschko in Dusseldorf to become world heavyweight champion."},
  {md:"11-28", y:2004, s:"American football", t:"Cincinnati beat Cleveland 58-48, one of the highest-scoring games in NFL history."},
  {md:"11-28", y:1981, s:"American football", t:"Alabama's Paul 'Bear' Bryant wins his 315th game, becoming the winningest coach in college football history."},
  {md:"11-28", y:1929, s:"American football", t:"Ernie Nevers scores all 40 of the Chicago Cardinals' points in a 40-6 win over the Bears, an NFL record."},
  {md:"11-29", y:2021, s:"Football", t:"Lionel Messi wins his seventh Ballon d'Or."},
  {md:"11-29", y:1998, s:"American football", t:"Dan Marino becomes the first quarterback in NFL history to throw 400 career touchdown passes."},
  {md:"11-29", y:1987, s:"American football", t:"The New Orleans Saints beat Pittsburgh 20-16 to secure the first winning season in their 20-year history."},
  {md:"11-29", y:1890, s:"American football", t:"Navy beat Army 24-0 at West Point in the very first Army-Navy game."},
  {md:"11-30", y:1991, s:"Women's football", t:"The USA beat Norway 2-1 in China to win the first FIFA Women's World Cup."},
  {md:"11-30", y:1956, s:"Boxing", t:"Floyd Patterson knocks out Archie Moore in Chicago to become world heavyweight champion."},
  {md:"11-30", y:1872, s:"Football", t:"Scotland and England draw 0-0 in Glasgow in the first official international football match."},
  {md:"04-19", y:1967, s:"Athletics", t:"Kathrine Switzer becomes the first woman to run the Boston Marathon as a registered entrant."},
  {md:"05-02", y:2016, s:"Football", t:"Leicester City are crowned Premier League champions after Tottenham draw 2-2 at Chelsea."},
  {md:"05-06", y:1954, s:"Athletics", t:"Roger Bannister runs the first mile under four minutes, 3:59.4 at Iffley Road, Oxford."},
  {md:"05-25", y:2005, s:"Football", t:"Liverpool come back from 3-0 down to beat AC Milan on penalties in the Champions League final in Istanbul."},
  {md:"07-30", y:1966, s:"Football", t:"England beat West Germany 4-2 after extra time at Wembley to win the World Cup."},
  {md:"07-31", y:2022, s:"Women's football", t:"England's Lionesses beat Germany 2-1 after extra time at Wembley to win the Women's Euro."},
  {md:"08-16", y:2009, s:"Athletics", t:"Usain Bolt runs the 100 metres in 9.58 seconds in Berlin, still the world record."},
  {md:"11-25",y:2005,s:"Football",t:"George Best dies aged 59. The Manchester United winger was European Footballer of the Year in 1968, the year United won the European Cup."},
  {md:"12-01",y:2019,s:"Football",t:"Arsenal beat Bristol City 11-1, the biggest scoreline in Women's Super League history."},
  {md:"12-01",y:1924,s:"Ice hockey",t:"The Boston Bruins play their first home game, the NHL's first franchise based in the United States."},
  {md:"12-01",y:1963,s:"Cricket",t:"Arjuna Ranatunga is born. He captained Sri Lanka to the 1996 World Cup."},
  {md:"12-01",y:1968,s:"Squash",t:"Sarah Fitz-Gerald is born. The Australian won five women's world titles."},
  {md:"12-01",y:2024,s:"Snooker",t:"Terry Griffiths dies. The Welshman won the 1979 world title at his first attempt, as a qualifier."},
  {md:"12-02",y:1948,s:"Football",t:"Antonín Panenka is born. His chipped penalty won Czechoslovakia the Euro 1976 final, and every chipped penalty since has carried his name."},
  {md:"12-02",y:1973,s:"Tennis",t:"Monica Seles is born. She won eight Grand Slam singles titles before she turned 20."},
  {md:"12-02",y:2004,s:"Figure skating",t:"Ilia Malinin is born. In 2022 he became the first skater to land a quadruple Axel in competition."},
  {md:"12-02",y:2014,s:"Ice hockey",t:"Jean Béliveau dies. He won the Stanley Cup ten times as a player with the Montreal Canadiens."},
  {md:"12-03",y:1950,s:"Athletics",t:"Alberto Juantorena is born. At the 1976 Olympics the Cuban won both the 400m and 800m, a double nobody had managed before."},
  {md:"12-03",y:1965,s:"Figure skating",t:"Katarina Witt is born. She won Olympic gold in 1984 and 1988."},
  {md:"12-03",y:1979,s:"Hockey",t:"Dhyan Chand dies. The Indian forward won Olympic gold in 1928, 1932 and 1936, and India's national sports day is held on his birthday."},
  {md:"12-03",y:1953,s:"Skiing",t:"Franz Klammer is born. His wild downhill run at Innsbruck in 1976 won Olympic gold in front of a home crowd."},
  {md:"12-04",y:1909,s:"Canadian football",t:"The first Grey Cup is played. University of Toronto beat Parkdale Canoe Club 26-6."},
  {md:"12-04",y:1909,s:"Ice hockey",t:"The Montreal Canadiens are founded. They have won the Stanley Cup more times than any other club."},
  {md:"12-04",y:1963,s:"Athletics",t:"Sergey Bubka is born. He broke the pole vault world record 35 times, indoors and out."},
  {md:"12-04",y:1960,s:"Athletics",t:"Glynis Nunn is born. The Australian won the first Olympic heptathlon, in Los Angeles in 1984."},
  {md:"12-04",y:2011,s:"Football",t:"Sócrates dies. Brazil's captain at the 1982 World Cup was also a qualified doctor."},
  {md:"12-05",y:1921,s:"Football",t:"The FA bans women's football from its members' grounds, calling the game \"quite unsuitable for females\". The ban lasts 50 years."},
  {md:"12-05",y:2017,s:"Olympics",t:"The IOC bans Russia from the 2018 Winter Olympics over state-backed doping at the 2014 Sochi Games. Clean Russian athletes compete as neutrals."},
  {md:"12-05",y:1975,s:"Snooker",t:"Ronnie O'Sullivan is born. Seven world titles, and the fastest 147 ever made: five minutes and eight seconds, in 1997."},
  {md:"12-05",y:1971,s:"Athletics",t:"Ashia Hansen is born. She won the world indoor triple jump title for Britain in 1999 and 2003."},
  {md:"12-05",y:1988,s:"Cycling",t:"Joanna Rowsell is born. She won Olympic team pursuit gold for Britain in 2012 and 2016."},
  {md:"12-05",y:2020,s:"Golf",t:"Peter Alliss dies. He played in eight Ryder Cups before becoming the voice of golf on the BBC."},
  {md:"12-06",y:1956,s:"Water polo",t:"Hungary play the USSR at the Melbourne Olympics weeks after the Soviet invasion of Hungary. It becomes known as the \"Blood in the Water\" match. Hungary win 4-0 and go on to take gold."},
  {md:"12-06",y:1977,s:"Cricket",t:"Andrew Flintoff is born. The 2005 Ashes made him a national hero."},
  {md:"12-06",y:1982,s:"Formula 1",t:"Susie Wolff is born. In 2014 she became the first woman in 22 years to take part in a Formula 1 race weekend, in practice at Silverstone."},
  {md:"12-06",y:1994,s:"Basketball",t:"Giannis Antetokounmpo is born. He led Milwaukee to the 2021 NBA title, scoring 50 in the deciding game."},
  {md:"12-06",y:1997,s:"Basketball",t:"Sabrina Ionescu is born. She is the first player in NCAA history, men or women, with 2,000 points, 1,000 assists and 1,000 rebounds."},
  {md:"12-07",y:1936,s:"Cricket",t:"Jack Fingleton becomes the first batter to score centuries in four consecutive Test innings."},
  {md:"12-07",y:1963,s:"American football",t:"Instant replay is used on television for the first time, during the Army-Navy game."},
  {md:"12-07",y:2025,s:"Formula 1",t:"Lando Norris wins his first world title with McLaren, at the season finale in Abu Dhabi."},
  {md:"12-07",y:1994,s:"Figure skating",t:"Yuzuru Hanyu is born. He won Olympic gold in 2014 and 2018, the first man to retain the title in 66 years."},
  {md:"12-07",y:1997,s:"Football",t:"Billy Bremner dies. He captained Don Revie's Leeds to two league titles."},
  {md:"11-23",y:2014,s:"Formula 1",t:"Lewis Hamilton wins the Abu Dhabi Grand Prix to clinch his second world title, his first with Mercedes."},
  {md:"11-23",y:1976,s:"Freediving",t:"Jacques Mayol becomes the first person to reach 100 metres underwater on a single breath."},
  {md:"11-23",y:2006,s:"Boxing",t:"Willie Pep dies. The featherweight, nicknamed Will o' the Wisp for his defence, won 229 of his 241 professional fights."}
];
globalThis.SB_NEWSLETTER_FORM = "ArB4Z0";

// Hero and Heroine of the Week: tied to that week's anniversaries or news. 'from'/'to' are month-day ranges.
globalThis.SB_HEROES_WEEKS = [
  {from:"11-23", to:"11-29",
   hero:{name:"Jamie Vardy", sport:"Football", emoji:"🦊", story:"vardy", line:"This week in 2015 he scored in an 11th Premier League game in a row. A record, from a striker who was playing non-league football a few years before."},
   heroine:{name:"Stephanie Gilmore", sport:"Surfing", emoji:"🏄‍♀️", story:"gilmore", line:"This week in 2014 she won her sixth world surfing title. She went on to win eight, a record for a woman."}}
];
globalThis.SB_STORIES.push(
  {id:"vardy", sport:"Football", emoji:"🦊", title:"From the factory floor to the record books",
   teaser:"Non-league, a factory job, and then the Premier League scoring record. This week is his anniversary.",
   body:["Jamie Vardy's route to the top was anything but normal. He played non-league football for Stocksbridge Park Steels while working in a factory, then moved on to Halifax and Fleetwood.",
         "In 2012 Leicester City paid around £1 million for him, a record fee for a non-league player at the time.",
         "On 28 November 2015 he scored against Manchester United. It was his 11th Premier League game in a row with a goal, beating Ruud van Nistelrooy's record of ten.",
         "Five months later, Leicester were champions. Never let anyone tell you it's too late."],
   quiz:[{q:"Which non-league club did Vardy play for while working in a factory?",o:["Stocksbridge Park Steels","Fleetwood Town","Halifax Town","Kidderminster"],a:0},
         {q:"Whose record of ten games in a row did he beat?",o:["Alan Shearer","Ruud van Nistelrooy","Thierry Henry","Daniel Sturridge"],a:1},
         {q:"Against which club did he score in his 11th game in a row?",o:["Liverpool","Chelsea","Manchester United","Arsenal"],a:2}]},
  {id:"gilmore", sport:"Surfing", emoji:"🏄‍♀️", title:"The queen of the waves",
   teaser:"A world title in her first year on tour, then seven more. This week marks her sixth.",
   body:["Stephanie Gilmore burst onto the women's world surfing tour from Australia and won the world title in her very first season, 2007.",
         "She kept on winning. On 27 November 2014 she clinched her sixth world title.",
         "In 2022 she won her eighth, the most ever by a woman in the history of the world championship.",
         "Smooth, stylish and almost impossible to beat, she's often called the queen of women's surfing."],
   quiz:[{q:"Which country is Stephanie Gilmore from?",o:["USA","Brazil","Australia","South Africa"],a:2},
         {q:"In which year did she win her first world title?",o:["2005","2007","2010","2014"],a:1},
         {q:"How many world titles has she won?",o:["5","6","7","8"],a:3}]}
);

// Stock photos: Pexels (free for commercial use, no attribution required). Equipment and venues only: no famous people, no children, no club badges.
// Real photographs from Wikimedia Commons, used under their free licences with credit (see credits page).
// Venues and kit only: no photos of identifiable athletes.
globalThis.SB_PHOTOS = {
  "Football": ["Wembley_Stadium_interior.jpg", "Jbmg40", "Wembley Stadium, London"],
  "Women's football": ["Wembley_Stadium_interior.jpg", "Jbmg40", "Wembley Stadium, London"],
  "Cricket": ["The_Pavilion_-_Lord's_Cricket_Ground.JPG", "PaddyBriggs", "The Pavilion, Lord's"],
  "Tennis": ["Wimbledon_Centre_Court_(May_15,_2019).jpg", "GATORFAN2525", "Centre Court, Wimbledon"],
  "Rugby union": ["Twickenham_Stadium_-_May_2012.jpg", "Diliff", "Twickenham Stadium"],
  "Rugby league": ["Twickenham_Stadium_-_May_2012.jpg", "Diliff", "Twickenham Stadium"],
  "Rugby": ["Twickenham_Stadium_-_May_2012.jpg", "Diliff", "Twickenham Stadium"],
  "Golf": ["R&A_Clubhouse,_Old_Course,_Swilcan_Burn_bridge.jpg", "Optograph", "The Old Course, St Andrews"],
  "Formula 1": ["Silverstone_2011_starting_grid.jpg", "ToNG!?", "The grid at Silverstone"],
  "Darts": ["Dartboard_with_darts.jpg", "Santeri Viinamäki", "Dartboard"],
  "Snooker": ["Sheffield,_the_Crucible_reflected_-_geograph.org.uk_-_1296354.jpg", "Chris Downer", "The Crucible, Sheffield"],
  "Athletics": ["Running_track,_Linford_Christie_Stadium_-_geograph.org.uk_-_4543964.jpg", "David Hawgood", "Running track, west London"],
  "Cycling": ["Velodrome_parc_tete_d'or_2.jpg", "Jejecam", "Track racing at the Parc de la Tête d'Or velodrome"],
  "Swimming": ["Interior_London_Aquatics_Centre_Aug_2014_05.JPG", "OlafJanssen", "London Aquatics Centre"],
  "Horse racing": ["Lord_Daresbury_Stand,_Aintree.jpg", "Rodhullandemu", "Aintree Racecourse"],
  "Boxing": ["World_Series_Boxing_Ring.JPG", "Glenn Francis (Toglenn)", "A World Series Boxing ring"],
  "Basketball": ["Oracle_Arena_basketball_court_1.JPG", "BrokenSphere", "Oracle Arena, Oakland"],
};
// House artwork for sports without a photo (generated by scripts/make_art.py).
globalThis.SB_ART = {"Netball":"netball","Hockey":"hockey","Squash":"squash","American football":"american-football","Gymnastics":"gymnastics","Kabaddi":"sport","Hurling":"sport","Curling":"sport"};
globalThis.SB_PHOTO = (key, w = 1200) => { const p = globalThis.SB_PHOTOS[key]; if (p && LOCAL_PHOTOS[p[0]]) return `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}photos/${LOCAL_PHOTOS[p[0]]}`; return p ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p[0]).replace(/'/g, '%27')}?width=${w}` : `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}art/${globalThis.SB_ART[key] || 'sport'}.svg`; };
globalThis.SB_CREDIT = (key) => { const p = globalThis.SB_PHOTOS[key]; return p ? { by: p[1], what: p[2], url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(p[0])}` } : null; };

// The Cynical Round-Up: built on this week's real, checked news. Satire is the opinion; the facts are real.
globalThis.SB_ROUNDUP = {
  title:"The Cynical Round-Up",
  edition:"Week ending Sunday 22 November 2026",
  updated:"Written Monday 23 November 2026.",
  headline:"Pochettino's bounce, Rassie's loophole and a championship that finished three weeks ago",
  items:[
    ["The new-manager bounce, Old Trafford edition",
     "Mauricio Pochettino's first game in charge of Manchester United was at Anfield, which is a bit like a new airline pilot's first flight being through a volcano. Leny Yoro was sent off after eight minutes, Szoboszlai curled in the free kick, and by full time it was 4-0. Liverpool, we are told, could have had six or seven. United remain in the relegation zone, where the view is improving only in the sense that they have now seen it from every angle. The bounce did arrive, to be fair. It was the ball, coming back out of United's net."],
    ["Rassie Erasmus finds the one rule he hadn't bent",
     "South Africa's coach spent the week banned for six matches, and the Springboks spent Saturday losing 20-17 in Dublin, their second defeat in a row for the first time since 2022. Robert Baloucoune scored twice and the Aviva went, in the measured words of the Irish Times, to bedlam. The Boks still go through to the final of the brand-new Nations Championship anyway. Even from the naughty step, Rassie has found a loophole. It's called the table."],
    ["Formula 1: the season that ended three weeks ago continues",
     "Kimi Antonelli wrapped up the world title in Mexico City on 1 November, aged 20 years and 68 days, the youngest champion in the sport's history and Italy's first since Alberto Ascari in 1953. Since then F1 has carried on holding races, in the way a pub keeps the lights on after the band's gone home. Max Verstappen won in Las Vegas, Liam Lawson's car sprang a fuel leak, and two more grands prix remain, in Qatar and Abu Dhabi, for anyone who enjoys watching a result that's already in the post."],
    ["Manchester City Women: please hold",
     "City were beaten 3-1 at home by Tottenham on Sunday, the sort of result that makes people say \"it's a long season\" in the voice normally reserved for funerals. Across London, London City Lionesses put six past Crystal Palace, which equals Chelsea's 6-2 against Spurs in October as the highest-scoring game of the WSL season. Two six-goal games before December: somebody check the defensive coaching budgets."],
    ["New Zealand rugby: worse than a wet Tuesday in Hamilton",
     "The All Blacks lost again at the weekend and are now, according to their own national broadcaster, on the brink of their worst year in the professional era. New Zealand's media reacted with the calm and perspective you'd expect, which is to say none. In fairness to them, when you've spent a century being the team everyone else measures themselves against, finishing mid-table in a tournament nobody understood until July is going to sting."]
  ],
  brain:"Three weeks after the title was decided, F1 is still racing, Rassie is reaching finals without being allowed in the building, and United have found a new way to concede four. Same time next week.",
  sources:[
    ["ESPN: Liverpool 4-0 Man Utd, 22 November 2026","https://www.espn.com/soccer/report/_/gameId/401878755"],
    ["FotMob: Liverpool v Man United match events","https://www.fotmob.com/matches/liverpool-vs-manchester-united/2ygkcb"],
    ["Sky Sports: Ireland 20-17 South Africa","https://www.skysports.com/rugby-union/news/13614348/ireland-20-17-south-africa-springboks-downed-as-andy-farrells-side-hold-on-for-big-victory-in-nations-championship"],
    ["Irish Times: Ireland v South Africa as it happened","https://www.irishtimes.com/sport/rugby/2026/11/21/live-ireland-v-south-africa-updates-from-nations-championship-showdown-in-dublin/"],
    ["Al Jazeera: Antonelli becomes F1's youngest world champion","https://www.aljazeera.com/sports/2026/11/2/kimi-antonelli-becomes-formula-ones-youngest-world-champion-in-mexico-city"],
    ["RNZ Sport, 22 November 2026","https://www.rnz.co.nz/news/sport"],
    ["Sky Sports: Man City Women 1-3 Tottenham Women","https://www.skysports.com/football/manchester-city-women-vs-tottenham-hotspur-women/live/575831"],
    ["Wikipedia: 2026-27 Women's Super League","https://en.wikipedia.org/wiki/2026%E2%80%9327_Women%27s_Super_League"]
  ]
};

export const D = globalThis;
