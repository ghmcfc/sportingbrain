// Pick Your XI: themes, formations and positions.
export const THEMES = [
  ['greatest', 'Greatest XI', 'The best of all time. No arguments. (There will be arguments.)'],
  ['duffers', 'Duffers XI', 'The ones who never quite looked the part. Affectionately.'],
  ['daft-names', 'Daft Names XI', 'Picked on name alone. Say them out loud.'],
  ['cult-heroes', 'Cult Heroes XI', 'Not the best. The ones you loved anyway.'],
  ['funniest', 'Funniest XI', 'Characters, wind-up merchants and dressing-room legends.'],
  ['hardest', 'Hardest XI', 'Nobody wants to play against this lot.'],
  ['one-season', 'One-Season Wonders XI', 'Brilliant for one year, then gone.'],
  ['haircuts', 'Worst Haircuts XI', 'Mullets, perms, frosted tips. Be kind.'],
  ['club', 'My Club XI', 'The best XI your club has ever had, any era.'],
  ['womens', 'Women\'s XI', 'The best women ever to play.'],
  ['mixed', 'Mixed XI', 'Best men and women in one side.'],
  ['custom', 'Your own theme', 'Make up the title and pick the side.'],
];
// Football formations: [label, [[x%, y%, role], ...]] from goalkeeper upwards
const GK = [50, 90, 'GK'];
const row = (y, xs, r) => xs.map(x => [x, y, r]);
export const FORMATIONS = {
  '4-4-2': [GK, ...row(71, [14, 38, 62, 86], 'DF'), ...row(47, [14, 38, 62, 86], 'MF'), ...row(22, [36, 64], 'FW')],
  '4-3-3': [GK, ...row(71, [14, 38, 62, 86], 'DF'), ...row(49, [26, 50, 74], 'MF'), ...row(22, [18, 50, 82], 'FW')],
  '4-2-3-1': [GK, ...row(72, [14, 38, 62, 86], 'DF'), ...row(56, [36, 64], 'DM'), ...row(37, [18, 50, 82], 'AM'), [50, 16, 'ST']],
  '3-5-2': [GK, ...row(72, [26, 50, 74], 'DF'), ...row(48, [10, 30, 50, 70, 90], 'MF'), ...row(21, [36, 64], 'FW')],
  '5-3-2': [GK, ...row(70, [8, 28, 50, 72, 92], 'DF'), ...row(46, [26, 50, 74], 'MF'), ...row(21, [36, 64], 'FW')],
  '3-4-3': [GK, ...row(72, [26, 50, 74], 'DF'), ...row(48, [14, 38, 62, 86], 'MF'), ...row(21, [18, 50, 82], 'FW')],
};
export const LISTS = {
  cricket: ['1 Opener', '2 Opener', '3', '4', '5', '6 All-rounder', '7 Wicketkeeper', '8', '9 Bowler', '10 Bowler', '11 Bowler'],
  'rugby-union': ['1 Loosehead prop', '2 Hooker', '3 Tighthead prop', '4 Lock', '5 Lock', '6 Blindside flanker', '7 Openside flanker', '8 Number 8', '9 Scrum-half', '10 Fly-half', '11 Left wing', '12 Inside centre', '13 Outside centre', '14 Right wing', '15 Full-back'],
  'rugby-league': ['1 Full-back', '2 Wing', '3 Centre', '4 Centre', '5 Wing', '6 Stand-off', '7 Scrum-half', '8 Prop', '9 Hooker', '10 Prop', '11 Second row', '12 Second row', '13 Loose forward'],
};
export const SPORTS = [['football', 'Football'], ['cricket', 'Cricket'], ['rugby-union', 'Rugby union'], ['rugby-league', 'Rugby league']];
// Words that can't appear in names, titles or reasons.
export const BLOCK = ['fuck', 'shit', 'cunt', 'wank', 'twat', 'bitch', 'bastard', 'nigg', 'paki', 'retard', 'spastic', 'faggot', 'whore', 'slut', 'rape', 'nazi', 'dick', 'cock', 'piss', 'prick', 'tosser', 'bellend', 'knob'];
