// The gift guide. [name, Amazon search, best for, why, tags]. Searches, not product IDs, so links never break.
// Tags drive the filter chips. No prices: Amazon shows the live price.
export const CATS = [
  ['all', 'Everything'], ['football', 'Football'], ['cricket', 'Cricket'], ['darts', 'Darts and snooker'],
  ['quiz', 'Quiz lovers'], ['books', 'Books'], ['garden', 'Garden and park'], ['stocking', 'Stocking fillers'],
];
export const TOP = [
  ['Winmau Blade 6 dartboard', 'Winmau Blade 6 dartboard', 'the darts fan', "A proper bristle board, the kind used in pubs and leagues. If they've only ever thrown at a cheap paper board, this is the gift they'll use every week.", 'darts', 'dartboard'],
  ['Subbuteo', 'Subbuteo', 'Boxing Day', 'Flick-to-kick table football, played since the 1940s. Still the best way to settle a family argument about who is better at football.', 'football', 'pitch'],
  ["Wisden Cricketers' Almanack", 'Wisden Cricketers Almanack', 'the cricket obsessive', 'The yellow almanack published every year since 1864. A whole season of scores, records and essays in one book.', 'cricket', 'book'],
  ['Quiz buzzers', 'quiz buzzer set', 'hosting Christmas', 'Game-show buzzers with lights and sounds, so nobody can argue about who answered first. Pair them with our free Pub and Club Quiz.', 'quiz', 'buzzer'],
  ['Inverting the Pyramid', 'Inverting the Pyramid Jonathan Wilson', 'the tactics nerd', "Jonathan Wilson's history of football tactics. The book that made a generation of fans talk about formations.", 'books', 'book'],
];
export const SECTIONS = [
  { id: 'football', title: 'For the football fan', icon: 'ball', items: [
    ['Football tactics board', 'football tactics board magnetic', 'armchair managers', 'Magnetic pieces and a pitch to draw on. For picking teams and arguing about the back four.', 'football'],
    ['Table football', 'table football', 'games rooms', 'A bar-style table with rods and spinning players. Fast, loud and good for all ages.', 'football'],
    ['Pop-up goals', 'pop up football goals garden', 'kids and the park', 'Two goals that spring open and fold flat into a bag.', 'football garden'],
    ['Size 5 football', 'size 5 football', 'everyone', 'A full-size match ball for adults and over-12s.', 'football garden'],
    ['Football ground guide books', 'football grounds guide book', 'groundhoppers', 'Every stadium in the leagues, with how to get there and what it is like inside.', 'football books'],
    ['Football stadium jigsaws', 'football stadium jigsaw', 'quiet afternoons', 'Famous grounds as 1000-piece puzzles.', 'football'],
    ['Referee kit', 'referee whistle cards set', 'the one who knows the rules', 'Whistle, cards and notebook for park games and five-a-side.', 'football stocking'],
  ]},
  { id: 'cricket', title: 'For the cricket fan', icon: 'bat', items: [
    ['Kwik Cricket set', 'Kwik Cricket set', 'garden Tests', 'Plastic bat, ball and stumps. Safe for gardens, beaches and windows.', 'cricket garden'],
    ['Wooden garden cricket set', 'garden cricket set wooden', 'summer barbecues', 'A wooden bat and stumps for back-garden cricket.', 'cricket garden'],
    ['Cricket books', 'cricket book', 'long winter evenings', 'Histories and memoirs to fill the gap until the new season.', 'cricket books'],
    ['Cricket ball', 'cricket ball leather', 'the player', 'A leather ball for nets practice.', 'cricket stocking'],
  ]},
  { id: 'darts', title: 'For darts and snooker fans', icon: 'board', items: [
    ['Dartboard cabinet', 'dartboard cabinet', 'a smart home setup', 'Holds the board, keeps score on a board inside the doors and protects the wallpaper.', 'darts'],
    ['Tungsten darts', 'tungsten darts set', 'improving players', 'Slimmer and heavier than brass darts, so they group more tightly.', 'darts'],
    ['Oche mat', 'darts oche mat', 'home practice', 'Marks the throwing line at the correct distance and saves the carpet.', 'darts'],
    ['Darts flights and stems', 'darts flights stems set', 'stocking filler', "Spares they'll always need. Cheap and genuinely useful.", 'darts stocking'],
    ['Mini snooker table', 'mini snooker table', 'the kitchen table', 'A table-top snooker set with balls, cues and triangle.', 'darts'],
  ]},
  { id: 'quiz', title: 'For quiz lovers', icon: 'buzzer', items: [
    ['Sports quiz books', 'sports quiz book', 'car journeys', 'Thousands of questions, from easy to impossible.', 'quiz books stocking'],
    ['Mini whiteboards and pens', 'mini whiteboards for quiz', 'quiz nights', 'Teams write answers and hold them up. No paper to collect or mark.', 'quiz'],
    ['Guinness World Records', 'Guinness World Records book', 'record nerds', 'The yearly book of records, with a big sport section.', 'quiz books'],
    ['Trivial Pursuit', 'Trivial Pursuit', 'family night', 'The classic general knowledge board game, sport included.', 'quiz'],
  ]},
  { id: 'books', title: 'Sports books worth reading', icon: 'book', items: [
    ['Open, by Andre Agassi', 'Open Andre Agassi', 'anyone, sport fan or not', 'One of the most honest sports memoirs ever written.', 'books'],
    ['The Numbers Game', 'The Numbers Game Chris Anderson David Sally', 'the stats fan', 'What football data really tells us, and what it does not.', 'books football'],
    ['Moneyball, by Michael Lewis', 'Moneyball Michael Lewis', 'business-minded fans', 'How a baseball team used numbers to beat richer rivals.', 'books'],
    ['Fever Pitch, by Nick Hornby', 'Fever Pitch Nick Hornby', 'lifelong supporters', 'What it feels like to follow a team for life.', 'books football'],
    ['Brilliant Orange, by David Winner', 'Brilliant Orange David Winner', 'football thinkers', 'Dutch football, and the way the Dutch think about space.', 'books football'],
    ['The Mixer, by Michael Cox', 'The Mixer Michael Cox', 'Premier League fans', 'How Premier League tactics changed from 1992.', 'books football'],
    ['Bounce, by Matthew Syed', 'Bounce Matthew Syed', 'parents of young players', 'Talent, practice and what really makes a champion.', 'books'],
  ]},
  { id: 'garden', title: 'For the garden and the park', icon: 'grass', items: [
    ['Swingball', 'Swingball', 'all ages', 'Garden tennis on a pole. Easy to set up, hard to put down.', 'garden'],
    ['Sports day set', 'sports day race set egg and spoon sack race', 'family parties', 'Sacks, eggs and spoons. Use it with our free Sports Day at Home.', 'garden'],
    ['Cones and bibs', 'training cones and bibs', 'organised kickabouts', 'Mark out pitches and pick teams in seconds.', 'garden football'],
    ['Putting mat', 'golf putting mat', 'golfers in winter', 'Practise putting indoors until the clocks go forward.', 'garden'],
    ['Gilbert rugby ball', 'Gilbert rugby ball', 'rugby families', 'A name rugby players know. Pick the size for the player.', 'garden'],
  ]},
  { id: 'stocking', title: 'Stocking fillers', icon: 'gift', items: [
    ['Panini sticker album and packs', 'Panini sticker album', 'collectors', 'The swapping, the doubles and the one you can never find.', 'stocking football'],
    ['Tennis balls', 'tennis balls tube', 'anyone with a racket', 'A fresh tube makes all the difference.', 'stocking garden'],
    ['Football advent calendar', 'football advent calendar', 'before the big day', 'A door a day until Christmas.', 'stocking football'],
    ['Golf balls', 'golf balls pack', 'the golfer', 'They lose them, you replace them.', 'stocking'],
  ]},
];
