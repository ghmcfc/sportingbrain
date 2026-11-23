// Content for the extra games. Rules scenarios follow the current laws of each sport.
export const FOULS = [
  ['Football', 'A defender deliberately kicks the ball back to his goalkeeper, who picks it up inside his own area.', 'Foul', 'Indirect free kick to the other side. A keeper can\'t handle a deliberate kick from a teammate.'],
  ['Football', 'An attacker standing in an offside position receives the ball straight from a throw-in and scores.', 'Fair', 'You can\'t be offside directly from a throw-in, a goal kick or a corner.'],
  ['Football', 'A player takes a long throw-in that flies straight into the opponents\' net without touching anyone.', 'Foul', 'No goal. You can\'t score directly from a throw-in, so it\'s a goal kick.'],
  ['Football', 'A shot hits the referee and deflects straight into the goal.', 'Foul', 'No goal. If the ball touches the referee and goes straight in, play restarts with a dropped ball.'],
  ['Football', 'A goalkeeper holds the ball in his hands for ten seconds before releasing it.', 'Foul', 'Since the 2025-26 season, holding it for more than eight seconds gives the other side a corner.'],
  ['Cricket', 'The ball pitches outside leg stump, hits the batter\'s pad, and would have gone on to hit the stumps.', 'Fair', 'Not out. A batter can\'t be out lbw to a ball that pitched outside leg stump.'],
  ['Cricket', 'A batter is caught at slip off a no-ball.', 'Fair', 'Not out. You can\'t be caught off a no-ball, and the batting side gets an extra.'],
  ['Cricket', 'The ball hits a fielding side\'s helmet lying on the grass behind the wicketkeeper.', 'Foul', 'Five penalty runs are awarded to the batting side.'],
  ['Cricket', 'The bowler runs out the non-striker, who left his crease before the ball was delivered.', 'Fair', 'Out, run out. Since 2022 this has been part of the ordinary run-out law.'],
  ['Rugby union', 'A player fumbles the ball forwards but catches it again before it touches the ground or anyone else.', 'Fair', 'Play on. It\'s only a knock-on if the ball touches the ground or another player before being caught.'],
  ['Rugby union', 'Once a ruck has formed, a defender reaches in and picks the ball up with his hands.', 'Foul', 'Penalty. Players can\'t handle the ball in a ruck.'],
  ['Tennis', 'A serve clips the top of the net and lands in the correct service box.', 'Fair', 'It\'s a let. The server takes that serve again.'],
  ['Tennis', 'A player\'s racket touches the net while the ball is still in play.', 'Foul', 'The player who touched the net loses the point.'],
  ['Tennis', 'The ball lands on the outside edge of the baseline.', 'Fair', 'In. The lines count as part of the court.'],
  ['Snooker', 'A player pots a red, but the cue ball follows it into the pocket.', 'Foul', 'An in-off. The opponent gets at least four points and the red doesn\'t count.'],
  ['Golf', 'On the green, a player accidentally knocks her ball with her putter while lining up.', 'Fair', 'No penalty. Since 2019, accidentally moving your ball on the green is free: just put it back.'],
  ['Netball', 'A defender stands one metre from the shooter\'s landing foot and jumps straight up with arms raised.', 'Fair', 'Legal. Defenders must be at least 0.9m away, and can then jump to defend.'],
  ['Hockey', 'The ball accidentally hits a player\'s foot and his team gains nothing from it.', 'Fair', 'Play on. It\'s only an offence if it\'s deliberate or gives the player\'s team an advantage.'],
];

export const PERSONALITY = {
  qs: [
    ['It\'s Saturday morning. You\'re…', [['Out early, miles before breakfast', 'cycling'], ['With the same mates as every week', 'football'], ['Planning every detail of the day', 'cricket'], ['Doing something nobody else has heard of', 'curling']]],
    ['Under pressure, you…', [['Get calmer and more precise', 'darts'], ['Get louder and lift everyone', 'rugby-union'], ['Out-think the other person', 'tennis'], ['Just keep going, longer than anyone', 'athletics']]],
    ['Your idea of a perfect afternoon is…', [['Four hours that could go either way', 'cricket'], ['Ninety minutes of chaos', 'football'], ['A long walk, scoring as you go', 'golf'], ['Anything indoors with a cup of tea', 'snooker']]],
    ['In a group, you\'re the one who…', [['Organises everyone', 'netball'], ['Does the hard work nobody notices', 'rugby-union'], ['Goes it alone', 'tennis'], ['Keeps score', 'darts']]],
    ['Pick a superpower', [['Never get tired', 'cycling'], ['Perfect aim', 'darts'], ['Speed', 'athletics'], ['Reading minds', 'snooker']]],
    ['Your friends would say you\'re…', [['Competitive. Very.', 'squash'], ['Patient', 'golf'], ['Brave', 'rugby-union'], ['A team player', 'netball']]],
  ],
  results: {
    football: 'You\'re a football person: social, emotional, happiest in a crowd and with an opinion on everything.',
    cricket: 'You\'re cricket: patient, tactical, and you think a draw can be thrilling. You might be right.',
    'rugby-union': 'You\'re rugby union: you do the hard yards, back your mates and enjoy a proper contest.',
    tennis: 'You\'re tennis: independent, sharp and at your best when it\'s one against one.',
    golf: 'You\'re golf: calm, honest with yourself, and you know the real opponent is in your own head.',
    darts: 'You\'re darts: ice-cool when it matters and quick with the maths.',
    snooker: 'You\'re snooker: you think three moves ahead and never rush.',
    athletics: 'You\'re athletics: simple, pure and relentless. You against the clock.',
    cycling: 'You\'re cycling: you go further than anyone else would, and you love the long way round.',
    netball: 'You\'re netball: organised, quick-thinking and the glue in any team.',
    squash: 'You\'re squash: fiercely competitive and fitter than everyone thinks.',
    curling: 'You\'re curling: strategic, a bit unusual, and secretly brilliant at it.',
  },
};

export const BINGO = ['Pundit says "massive game"', 'VAR check', 'Manager\'s arms folded', 'Someone mentions the bounce', '"Proper striker\'s finish"', 'A player down for treatment', 'Ball hits the woodwork', 'Yellow card for dissent', 'Fans sing the manager\'s name', 'Commentator mentions the weather', 'Goal ruled out', '"Game of two halves"', 'Substitution before half-time', 'A penalty appeal waved away', 'Keeper takes ages over a goal kick', 'A dive (allegedly)', '"He\'ll want that back"', 'Stoppage time is five minutes or more', 'Camera finds a famous fan', 'Goal in the first ten minutes', '"Clinical"', 'Corner cleared to the halfway line', 'Mention of last season', 'A long-range shot from 30 yards', 'Manager shouting from the technical area', 'Free kick wall moves early', 'Someone says "momentum"', 'Three changes at once', 'Ref plays an advantage', 'Last-minute chance'];

export const LEGENDS = {
  football: { name: 'Football', slots: [['Goalkeeper', 'gk', 1], ['Defenders', 'def', 4], ['Midfielders', 'mid', 3], ['Forwards', 'fwd', 3]],
    pools: { gk: ['Lev Yashin', 'Gianluigi Buffon', 'Gordon Banks', 'Manuel Neuer', 'Peter Schmeichel', 'Nadine Angerer', 'Hope Solo', 'Mary Earps', 'Iker Casillas'],
      def: ['Franz Beckenbauer', 'Paolo Maldini', 'Franco Baresi', 'Cafu', 'Roberto Carlos', 'Bobby Moore', 'Sergio Ramos', 'Virgil van Dijk', 'Lucy Bronze', 'Wendie Renard', 'Christie Pearce', 'Leah Williamson', 'Irene Paredes', 'Carles Puyol'],
      mid: ['Zinedine Zidane', 'Xavi', 'Andrés Iniesta', 'Andrea Pirlo', 'Luka Modrić', 'Steven Gerrard', 'Roy Keane', 'Alexia Putellas', 'Aitana Bonmatí', 'Kristine Lilly', 'Dzsenifer Marozsán', 'Michelle Akers', 'Kevin De Bruyne'],
      fwd: ['Pelé', 'Diego Maradona', 'Lionel Messi', 'Cristiano Ronaldo', 'Ronaldo Nazário', 'Johan Cruyff', 'Thierry Henry', 'Marta', 'Mia Hamm', 'Abby Wambach', 'Birgit Prinz', 'Sam Kerr', 'Alex Morgan', 'Alan Shearer'] } },
  cricket: { name: 'Cricket', slots: [['Openers', 'open', 2], ['Middle order', 'mid', 3], ['All-rounder', 'ar', 1], ['Wicketkeeper', 'wk', 1], ['Bowlers', 'bowl', 4]],
    pools: { open: ['Jack Hobbs', 'Sunil Gavaskar', 'Alastair Cook', 'Matthew Hayden', 'Belinda Clark', 'Charlotte Edwards', 'Smriti Mandhana', 'Virender Sehwag'],
      mid: ['Don Bradman', 'Sachin Tendulkar', 'Brian Lara', 'Viv Richards', 'Joe Root', 'Meg Lanning', 'Mithali Raj', 'Steve Smith', 'Virat Kohli', 'Enid Bakewell'],
      ar: ['Garfield Sobers', 'Jacques Kallis', 'Imran Khan', 'Ian Botham', 'Ellyse Perry', 'Stafanie Taylor', 'Nat Sciver-Brunt', 'Andrew Flintoff'],
      wk: ['Adam Gilchrist', 'Kumar Sangakkara', 'MS Dhoni', 'Alan Knott', 'Alyssa Healy', 'Sarah Taylor'],
      bowl: ['Shane Warne', 'Muttiah Muralitharan', 'Malcolm Marshall', 'Glenn McGrath', 'James Anderson', 'Wasim Akram', 'Jhulan Goswami', 'Katherine Brunt', 'Anya Shrubsole', 'Sophie Ecclestone', 'Curtly Ambrose', 'Dale Steyn'] } },
};

// Stat Attack: Grand Slam singles titles by tournament. Totals add up to each player's Grand Slam singles total.
export const STAT_DECK = {
  name: 'Grand Slam legends', cats: [['slams', 'Grand Slam titles'], ['ao', 'Australian Opens'], ['fo', 'French Opens'], ['wim', 'Wimbledons'], ['us', 'US Opens']],
  cards: [
    ['Margaret Court', 24, 11, 5, 3, 5], ['Novak Djokovic', 24, 10, 3, 7, 4], ['Serena Williams', 23, 7, 3, 7, 6], ['Steffi Graf', 22, 4, 6, 7, 5],
    ['Rafael Nadal', 22, 2, 14, 2, 4], ['Roger Federer', 20, 6, 1, 8, 5], ['Martina Navratilova', 18, 3, 2, 9, 4], ['Chris Evert', 18, 2, 7, 3, 6],
    ['Pete Sampras', 14, 2, 0, 7, 5], ['Billie Jean King', 12, 1, 1, 6, 4], ['Björn Borg', 11, 0, 6, 5, 0], ['Rod Laver', 11, 3, 2, 4, 2],
    ['Monica Seles', 9, 4, 3, 0, 2], ['Andre Agassi', 8, 4, 1, 1, 2],
  ],
};

// Countdown Clock: confirmed dates only. [ISO start, event, sport, where, source]
export const COUNTDOWN = [
  ['2026-11-28T15:00:00Z', 'UK Championship', 'Snooker', 'York Barbican, 28 November to 6 December', 'https://en.wikipedia.org/wiki/2026_UK_Championship'],
  ['2026-11-29T15:00:00Z', 'Nations Championship final', 'Rugby union', 'Twickenham', 'https://www.flashscore.com/news/the-2026-nations-championship-explained/p6s8EqVA/'],
  ['2026-12-06T13:00:00Z', 'Abu Dhabi Grand Prix, the F1 finale', 'Formula 1', 'Yas Marina', 'https://racingnews365.com/breaking-kimi-antonelli-smashes-f1-record-as-youngest-world-champion'],
  ['2026-12-11T19:00:00Z', 'PDC World Darts Championship', 'Darts', 'Alexandra Palace, until 3 January', 'https://www.alexandrapalace.com/whats-on/world-darts-championship-2026-2027/'],
  ['2026-12-17T08:00:00Z', 'South Africa v England, first Test', 'Cricket', 'The Wanderers, Johannesburg', 'https://en.wikipedia.org/wiki/English_cricket_team_in_South_Africa_in_2026%E2%80%9327'],
  ['2027-02-05T20:10:00Z', 'Six Nations: Ireland v England', 'Rugby union', 'Aviva Stadium, Dublin', 'https://www.skysports.com/rugby-union/news/12040/13517225/six-nations-2027-ireland-vs-england-starts-mens-tournament-with-england-vs-scotland-on-final-weekend'],
  ['2027-03-11T00:00:00Z', '150th anniversary Test, Australia v England', 'Cricket', 'Melbourne Cricket Ground', 'https://skysports.com/cricket/news/12040/13566231/england-cricket-schedule-2027-men-and-women-fixtures-including-the-ashes-150th-anniversary-test-against-australia-world-cup-champions-trophy'],
  ['2027-04-08T12:00:00Z', 'The Masters', 'Golf', 'Augusta National, 8 to 11 April', 'https://www.pgatour.com/tournaments/2027/masters-tournament/R2027014/overview'],
  ['2027-06-24T22:00:00Z', 'Women\'s World Cup', 'Football', 'Brazil, final at the Maracanã on 25 July', 'https://www.flashscore.com/news/soccer-world-cup-women-rio-s-iconic-maracana-stadium-to-host-2027-opener-and-final/bTeyYS3U/'],
  ['2027-10-01T10:45:00Z', 'Men\'s Rugby World Cup', 'Rugby union', 'Australia, final in Sydney on 13 November', 'https://experiences.rugbyworldcup.com/rwc2027/faq/tournament/'],
  ['2027-10-02T08:00:00Z', 'Men\'s Cricket World Cup', 'Cricket', 'South Africa, Zimbabwe and Namibia, final on 21 November', 'https://www.icc-cricket.com/tournaments/cricketworldcup/news/fixture-schedule-announced-for-icc-men-s-cricket-world-cup-2027'],
];

export const SPORTS_DAY = [
  ['Egg and spoon race', 'Use a potato or a ball instead of an egg. Ten big steps there and back.'],
  ['Sock basketball', 'Roll up socks and throw them into a laundry basket from three distances. 1, 2 and 3 points.'],
  ['Long jump on the grass', 'Jump from a line with both feet together. Measure with shoes, heel to toe.'],
  ['Keepy-uppy', 'Best of three tries. Under-8s can let it bounce once between touches.'],
  ['Balance challenge', 'Stand on one leg with eyes shut. Longest time wins.'],
  ['Obstacle course', 'Cushions to step on, a chair to go round, a towel to crawl under. Time each run.'],
  ['Target throw', 'Throw a soft ball at a cardboard box from five big steps. Five tries each.'],
  ['Relay', 'Teams pass a rolled-up sock as the baton. Run to the tree and back.'],
];

export const THIRTY_DAYS = ['10 keepy-uppies', 'Walk 2,000 steps', '20 star jumps', 'Balance on one leg for 30 seconds each side', 'Learn one new rule from a sport guide', '15 squats', 'Skip or hop for one minute', 'Throw and catch 30 times', 'Plank for 20 seconds', 'Run to a lamp post and back three times', 'Watch a sport you\'ve never watched', '25 star jumps', '12 lunges each leg', 'Play Beat the Brain on a new level', 'Kick a ball against a wall 50 times', 'Walk 3,000 steps', 'Balance a ball on your head for 10 seconds', '30 seconds of high knees', 'Plank for 30 seconds', 'Learn the rules of a sport you don\'t know', '20 squats', 'Skip for two minutes', 'Try a Call It', 'Sprint 20 metres five times', '30 star jumps', 'Walk 4,000 steps', 'Plank for 40 seconds', 'Teach someone a sport rule', '25 squats', 'Sports Day at Home with the family'];
