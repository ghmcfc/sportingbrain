// Amazon UK affiliate tag and the gift guide. Links go to Amazon search results, so they never point at a product that has gone.
// Never on Kids Zone pages. Never betting.
export const AMZ_TAG = 'gmh710f-21';
export const amz = q => `https://www.amazon.co.uk/s?k=${encodeURIComponent(q).replace(/%20/g, '+')}&tag=${AMZ_TAG}`;
export const GIFTS = [
  { id: 'darts', title: 'For the darts fan', items: [
    ['Winmau Blade 6 dartboard', 'Winmau Blade 6 dartboard', 'A bristle board from one of the biggest names in darts. Built for years of practice at home.'],
    ['Dartboard cabinet', 'dartboard cabinet', 'Protects the wall and makes the board look smart when the doors are shut.'],
    ['Tungsten darts', 'tungsten darts set', 'Slimmer and heavier than brass darts, so they group more tightly. A real step up from pub arrows.'],
    ['Oche mat', 'darts oche mat', 'Marks the throwing line at the right distance and saves the carpet.'],
  ]},
  { id: 'football', title: 'For the football fan', items: [
    ['Subbuteo', 'Subbuteo', 'The flick-to-kick table football game that has been played since the 1940s.'],
    ['Pop-up goals', 'pop up football goals garden', 'Two goals that fold flat. Ideal for the garden or the park.'],
    ['Size 5 football', 'size 5 football', 'Full-size match ball for adults and over-12s.'],
    ['Table football', 'table football', 'A proper bar-style table for the games room.'],
  ]},
  { id: 'cricket', title: 'For the cricket fan', items: [
    ['Wisden Cricketers\' Almanack', 'Wisden Cricketers Almanack 2026', 'The yellow "Bible of cricket", published every year since 1864.'],
    ['Kwik Cricket set', 'Kwik Cricket set', 'Plastic bat, ball and stumps for the garden or the beach.'],
    ['Garden cricket set', 'garden cricket set wooden', 'A wooden bat and stumps for summer back-garden Tests.'],
  ]},
  { id: 'rugby-tennis-golf', title: 'Rugby, tennis and golf', items: [
    ['Gilbert rugby ball', 'Gilbert rugby ball', 'A name rugby players know well. Pick the size for the player.'],
    ['Swingball', 'Swingball', 'The garden tennis game on a pole. Good for all ages.'],
    ['Tennis balls', 'tennis balls tube', 'A fresh tube makes all the difference to a knock-about.'],
    ['Putting mat', 'golf putting mat', 'Practise your putting indoors through the winter.'],
  ]},
  { id: 'books', title: 'Sports books worth reading', items: [
    ['Inverting the Pyramid, by Jonathan Wilson', 'Inverting the Pyramid Jonathan Wilson', 'The history of football tactics, told brilliantly.'],
    ['Open, by Andre Agassi', 'Open Andre Agassi', 'An honest sports memoir, even for people who don\'t follow tennis.'],
    ['The Numbers Game, by Chris Anderson and David Sally', 'The Numbers Game Chris Anderson David Sally', 'What football data really tells us.'],
    ['Moneyball, by Michael Lewis', 'Moneyball Michael Lewis', 'How a baseball team used numbers to beat richer rivals.'],
    ['Fever Pitch, by Nick Hornby', 'Fever Pitch Nick Hornby', 'What it feels like to follow a team for life.'],
    ['Brilliant Orange, by David Winner', 'Brilliant Orange David Winner', 'Dutch football, and the way the Dutch think about space.'],
    ['The Mixer, by Michael Cox', 'The Mixer Michael Cox', 'How Premier League tactics changed from 1992.'],
    ['Bounce, by Matthew Syed', 'Bounce Matthew Syed', 'Talent, practice and what really makes a champion.'],
  ]},
  { id: 'family', title: 'For the whole family', items: [
    ['Mini snooker table', 'mini snooker table', 'A table-top snooker set for the kitchen table.'],
    ['Sports day set', 'sports day race set egg and spoon sack race', 'Sacks, eggs and spoons for our Sports Day at Home games.'],
    ['Cones and bibs', 'training cones and bibs', 'Mark out pitches and pick teams in the park.'],
    ['Panini sticker album', 'Panini sticker album', 'The swapping, the doubles and the one you can never find.'],
  ]},
];

// Gift picks matched to each page. Every item: [name, Amazon search, why]. Searches, not product IDs, so links never die.
export const PICKS = {
  quiz: [
    ['Sports quiz books', 'sports quiz book', 'Thousands of questions for car journeys, Christmas Day and quiz nights.'],
    ['Pub quiz buzzers', 'quiz buzzer set', 'Proper game-show buzzers so you know who hit first.'],
    ['Guinness World Records', 'Guinness World Records book', 'The yearly book of records, with a big sport section.'],
  ],
  pubquiz: [
    ['Quiz buzzers', 'quiz buzzer set', 'Run your quiz night like a TV show.'],
    ['Mini whiteboards and pens', 'mini whiteboards for quiz', 'Teams write answers and hold them up. No paper to collect.'],
    ['Sports quiz books', 'sports quiz book', 'More rounds when ours run out.'],
  ],
  football: [
    ['Subbuteo', 'Subbuteo', 'The flick-to-kick table football game played since the 1940s.'],
    ['Football tactics board', 'football tactics board magnetic', 'Magnetic board to pick your team and plan the shape.'],
    ['Football annuals and books', 'football book', 'Histories, biographies and stats for the fan who knows it all.'],
  ],
  grounds: [
    ['Football ground guides', 'football grounds guide book', 'Books for groundhoppers on every stadium in the country.'],
    ['Stadium jigsaw puzzles', 'football stadium jigsaw', 'Iconic grounds as 1000-piece puzzles.'],
    ['Football stadium prints', 'football stadium print', 'Line drawings and prints of famous grounds for the wall.'],
  ],
  players: [
    ['Football autobiographies', 'football autobiography', 'The life stories of the players behind the clues.'],
    ['Panini sticker album', 'Panini sticker album', 'The swapping, the doubles and the one you can never find.'],
    ['Football trivia books', 'football trivia book', 'For the fan who got every clue today.'],
  ],
  referee: [
    ['Referee kit', 'referee whistle cards set', 'Whistle, cards and notebook. Settle the argument yourself.'],
    ['The Laws of the Game explained', 'football laws of the game book', 'Books that explain the rules properly, offside included.'],
    ['Pop-up goals', 'pop up football goals garden', 'Two goals that fold flat. Ideal for the garden or the park.'],
  ],
  cricket: [
    ["Wisden Cricketers' Almanack", 'Wisden Cricketers Almanack', 'The yellow "Bible of cricket", published every year since 1864.'],
    ['Kwik Cricket set', 'Kwik Cricket set', 'Plastic bat, ball and stumps for the garden or the beach.'],
    ['Cricket books', 'cricket book', 'Histories and memoirs from the greatest game ever invented.'],
  ],
  darts: [
    ['Winmau Blade 6 dartboard', 'Winmau Blade 6 dartboard', 'A bristle board from one of the biggest names in darts.'],
    ['Tungsten darts', 'tungsten darts set', 'Slimmer and heavier than brass, so they group tighter.'],
    ['Dartboard cabinet', 'dartboard cabinet', 'Protects the wall and looks smart when shut.'],
  ],
  allsports: [
    ['Swingball', 'Swingball', 'The garden tennis game on a pole. Good for all ages.'],
    ['Table football', 'table football', 'A proper bar-style table for the games room.'],
    ['Mini snooker table', 'mini snooker table', 'A table-top snooker set for the kitchen table.'],
  ],
  family: [
    ['Sports day set', 'sports day race set egg and spoon sack race', 'Sacks, eggs and spoons for our Sports Day at Home.'],
    ['Cones and bibs', 'training cones and bibs', 'Mark out pitches and pick teams in the park.'],
    ['Swingball', 'Swingball', 'The garden tennis game on a pole. Good for all ages.'],
  ],
  books: [
    ['Inverting the Pyramid, by Jonathan Wilson', 'Inverting the Pyramid Jonathan Wilson', 'The history of football tactics, told brilliantly.'],
    ['Open, by Andre Agassi', 'Open Andre Agassi', "An honest sports memoir, even if you don't follow tennis."],
    ['Bounce, by Matthew Syed', 'Bounce Matthew Syed', 'Talent, practice and what really makes a champion.'],
  ],
  stats: [
    ['The Numbers Game', 'The Numbers Game Chris Anderson David Sally', 'What football data really tells us.'],
    ['Moneyball, by Michael Lewis', 'Moneyball Michael Lewis', 'How a baseball team used numbers to beat richer rivals.'],
    ['Football stats books', 'football statistics book', 'Records and numbers for settling arguments.'],
  ],
  advent: [
    ['Football advent calendars', 'football advent calendar', 'A door a day until Christmas for the football fan.'],
    ['Sports quiz books', 'sports quiz book', 'Questions for the Christmas table.'],
    ['Subbuteo', 'Subbuteo', 'The Boxing Day tournament, sorted.'],
  ],
};
// Page slug to picks. Pages not listed get no box (settings, about, newsletter and so on).
export const PAGE_PICKS = {
  '': 'quiz', index: 'quiz', daily: 'quiz', challenge: 'quiz', 'weekly-expert': 'quiz', 'speed-round': 'quiz', 'true-or-false': 'quiz', countdown: 'quiz', connections: 'quiz', 'which-sport': 'allsports', 'guess-the-sport': 'allsports', bingo: 'quiz', passport: 'allsports', play: 'quiz',
  'pub-quiz': 'pubquiz',
  'sports-grid': 'football', 'the-grid': 'football', 'pick-your-xi': 'football', 'call-it-football': 'football', 'legends-xi': 'football',
  'ground-guesser': 'grounds', 'who-am-i': 'players', 'guess-the-player': 'players', 'name-them-all': 'players',
  'is-it-a-foul': 'referee', 'call-it': 'cricket',
  'higher-or-lower': 'stats', 'stat-attack': 'stats', 'stats-detective': 'stats',
  'sports-day': 'family', advent: 'advent',
  read: 'books', flashback: 'books', stories: 'books', 'on-this-day': 'books', 'this-week': 'books', 'round-up': 'books', rewind: 'books', archive: 'books', sports: 'allsports', watch: 'books', replays: 'books', laughs: 'books',
};
export const picksFor = path => {
  const slug = path.replace(/^\//, '').replace(/\.html$/, '').replace(/\/index$/, '');
  if (/darts/.test(slug)) return PICKS.darts;
  if (/^(flashback|sports)\//.test(slug)) return /cricket/.test(slug) ? PICKS.cricket : /darts/.test(slug) ? PICKS.darts : /football/.test(slug) ? PICKS.football : PICKS.books;
  const k = PAGE_PICKS[slug]; return k ? PICKS[k] : null;
};
