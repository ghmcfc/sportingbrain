// Pick a Sport (UK): which bank sports make up each ten-question quiz.
import { BOOKS } from './books.js';
// Which Book of the Day sports suit each quiz, for the book card on the result screen.
export const GROUP_BOOKS = { football: ['Football'], tennis: ['Tennis'], cricket: ['Cricket'], olympic: ['Running', 'Cycling', 'Rowing', 'Sport science'], racing: ['Horse racing'], more: ['Baseball', 'American football'], rugby: ['Sport science'], golf: ['Sport science'], f1: ['Sport science'], ring: ['Sport science'] };
export const bookFor = g => { const L = BOOKS.filter(b => (GROUP_BOOKS[g] || []).includes(b[2])); const P = L.length ? L : BOOKS; return P[Math.floor(Math.random() * P.length)]; };
export const SB_GROUPS = [
  ['football', 'Football', 'Men\'s and women\'s, from 1930 to now', ['Football']],
  ['cricket', 'Cricket', 'Tests, World Cups and the Ashes', ['Cricket']],
  ['rugby', 'Rugby', 'Union and league, club and country', ['Rugby union', 'Rugby league']],
  ['tennis', 'Tennis', 'Grand Slams, greats and Wimbledon', ['Tennis']],
  ['golf', 'Golf', 'Majors, Ryder Cups and the Open', ['Golf']],
  ['olympic', 'Athletics and Olympic sports', 'Track, field, pool, gym and bike', ['Athletics', 'Swimming', 'Gymnastics', 'Olympics', 'Cycling']],
  ['f1', 'Formula 1', 'Champions, circuits and records', ['Formula 1']],
  ['ring', 'Boxing, snooker and darts', 'The ring, the table and the oche', ['Boxing', 'Snooker', 'Darts']],
  ['racing', 'Horse racing', 'The National, the Derby, Cheltenham and Royal Ascot', ['Horse racing']],
  ['more', 'Everything else', 'Netball, basketball, NFL, ice hockey and more', ['Netball', 'Basketball', 'American football', 'Ice hockey', 'Squash', 'Hockey']],
];
