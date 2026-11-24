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
