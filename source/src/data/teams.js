// Your Colours: the teams people can pick, with their colours (main colour first). Names and colours only: no crests or badges.
// Listed A to Z, not by division, so promotion and relegation never make the list wrong.
import { COUNTIES } from './ireland.js';
const C = { red: '#C8102E', white: '#FFFFFF', black: '#111111', navy: '#13294B', blue: '#1F5AA6', sky: '#6CACE4', claret: '#7A263A', amber: '#F2A900', yellow: '#FFD100', gold: '#C99A2E', green: '#0E6B3A', orange: '#F47B20', maroon: '#7A1E2C', purple: '#5B2C83', cherry: '#A6192E', tangerine: '#F58025', brown: '#5C3A21', grey: '#8A8D8F', pink: '#E8A0BF', primrose: '#F3E37C' };
const t = s => s.split(' ').map(k => C[k]);
const L = rows => rows.map(([n, c]) => [n, t(c)]);
export const SPORTS = [
  ['football', 'Football', 'Your football club'],
  ['rugby', 'Rugby union', 'Your rugby union team'],
  ['league', 'Rugby league', 'Your rugby league club'],
  ['cricket', 'Cricket', 'Your cricket county'],
  ['gaa', 'GAA', 'Your GAA county'],
  ['region', 'Where you are', 'Your nation or region'],
];
export const TEAMS = {
  football: L([
    ['Aberdeen','red white'],['Accrington Stanley','red white'],['AFC Wimbledon','blue yellow'],['Arsenal','red white'],['Aston Villa','claret sky'],['Barnet','amber black'],['Barnsley','red white'],['Barrow','blue white'],['Birmingham City','blue white'],['Blackburn Rovers','blue white'],['Blackpool','tangerine white'],['Bolton Wanderers','white navy'],['Bournemouth','red black'],['Bradford City','claret amber'],['Brentford','red white'],['Brighton and Hove Albion','blue white'],['Bristol City','red white'],['Bristol Rovers','blue white'],['Bromley','white black'],['Burnley','claret sky'],['Burton Albion','yellow black'],
    ['Cambridge United','amber black'],['Cardiff City','blue white'],['Celtic','green white'],['Charlton Athletic','red white'],['Chelsea','blue white'],['Cheltenham Town','red white'],['Chesterfield','blue white'],['Cliftonville','red white'],['Colchester United','blue white'],['Coventry City','sky white'],['Crawley Town','red white'],['Crewe Alexandra','red white'],['Crystal Palace','red blue'],['Derby County','white black'],['Doncaster Rovers','red white'],['Dundee','navy white'],['Dundee United','tangerine black'],['Everton','blue white'],['Exeter City','red white'],['Falkirk','navy white'],['Fleetwood Town','red white'],['Fulham','white black'],
    ['Gillingham','blue white'],['Glentoran','green red black'],['Grimsby Town','black white'],['Harrogate Town','yellow black'],['Heart of Midlothian','maroon white'],['Hibernian','green white'],['Huddersfield Town','blue white'],['Hull City','amber black'],['Ipswich Town','blue white'],['Kilmarnock','blue white'],['Leeds United','white yellow blue'],['Leicester City','blue white'],['Leyton Orient','red white'],['Lincoln City','red white'],['Linfield','blue white'],['Liverpool','red white'],['Livingston','amber black'],['London City Lionesses','purple white'],['Luton Town','orange navy'],
    ['Manchester City','sky white'],['Manchester United','red white black'],['Mansfield Town','amber blue'],['Middlesbrough','red white'],['Millwall','navy white'],['MK Dons','white black'],['Motherwell','claret amber'],['Newcastle United','black white'],['Newport County','amber black'],['Northampton Town','claret white'],['Norwich City','yellow green'],['Nottingham Forest','red white'],['Notts County','black white'],['Oldham Athletic','blue white'],['Oxford United','yellow navy'],['Peterborough United','blue white'],['Plymouth Argyle','green white'],['Port Vale','white black'],['Portsmouth','blue white'],['Preston North End','white navy'],
    ['Queens Park Rangers','blue white'],['Rangers','blue white red'],['Reading','blue white'],['Rotherham United','red white'],['St Mirren','black white'],['Salford City','red white'],['Sheffield United','red white'],['Sheffield Wednesday','blue white'],['Shrewsbury Town','blue amber'],['Southampton','red white'],['Stevenage','red white'],['Stockport County','blue white'],['Stoke City','red white'],['Sunderland','red white'],['Swansea City','white black'],['Swindon Town','red white'],['Tottenham Hotspur','white navy'],['Tranmere Rovers','white blue'],['Walsall','red white'],['Watford','yellow black red'],['West Bromwich Albion','navy white'],['West Ham United','claret sky'],['Wigan Athletic','blue white'],['Wolverhampton Wanderers','amber black'],['Wrexham','red white'],['Wycombe Wanderers','sky navy'],
  ]),
  rugby: L([
    ['Bath','blue white black'],['Bristol Bears','navy white'],['Cardiff Rugby','sky black'],['Connacht','green white'],['Dragons','red black amber'],['Exeter Chiefs','black white'],['Gloucester','cherry white'],['Harlequins','sky pink brown grey'],['Leicester Tigers','green red white'],['Leinster','blue white'],['Munster','red white'],['Newcastle Red Bulls','red navy white'],['Northampton Saints','black green gold'],['Ospreys','black white'],['Sale Sharks','navy blue white'],['Saracens','black red'],['Scarlets','red white'],['Ulster','white red'],
  ]),
  league: L([
    ['Bradford Bulls','red amber black'],['Castleford Tigers','amber black'],['Catalans Dragons','red yellow'],['Huddersfield Giants','claret gold'],['Hull FC','black white'],['Hull KR','red white'],['Leeds Rhinos','blue amber'],['Leigh Leopards','red white'],['London Broncos','black amber'],['St Helens','red white'],['Salford Red Devils','red white'],['Toulouse Olympique','purple white'],['Wakefield Trinity','red white blue'],['Warrington Wolves','primrose blue'],['Wigan Warriors','cherry white'],['York Knights','black amber'],
  ]),
  cricket: L([
    ['Derbyshire','brown amber sky'],['Durham','blue yellow'],['Essex','navy red gold'],['Glamorgan','blue yellow'],['Gloucestershire','navy gold'],['Hampshire','navy gold'],['Kent','white red'],['Lancashire','red navy'],['Leicestershire','green white'],['Middlesex','navy pink'],['Northamptonshire','maroon white'],['Nottinghamshire','green gold'],['Somerset','black maroon'],['Surrey','brown white'],['Sussex','blue gold'],['Warwickshire','navy gold'],['Worcestershire','green black'],['Yorkshire','navy gold'],
  ]),
  region: L([
    ['London','white red'],['South East England','white red'],['South West England','white red'],['East of England','white red'],['West Midlands','white red'],['East Midlands','white red'],['North West England','white red'],['North East England','white red'],['Yorkshire and the Humber','white red'],['Scotland','navy white'],['Wales','red white green'],['Northern Ireland','grey white'],['Ireland','green white orange'],['Somewhere else','grey white'],
  ]),
};
// GAA counties come from the Irish edition, with the colours read from their colours clue.
const GHEX = { 'sky blue': '#6CACE4', navy: '#13294B', saffron: '#F4C430', orange: '#F47B20', primrose: '#F3E37C', maroon: '#7A1E2C', purple: '#5B2C83', amber: '#F2A900', gold: '#E3B341', yellow: '#FFD100', green: '#0E6B3A', red: '#C8102E', blue: '#1F5AA6', black: '#111111', white: '#FFFFFF' };
TEAMS.gaa = COUNTIES.map(c => { let s = c[1][3].toLowerCase(); const out = [];
  for (const k of Object.keys(GHEX)) { let i; while ((i = s.indexOf(k)) > -1) { out.push([i, GHEX[k]]); s = s.slice(0, i) + ' '.repeat(k.length) + s.slice(i + k.length); } }
  return [c[0], out.sort((a, b) => a[0] - b[0]).map(x => x[1])]; });
