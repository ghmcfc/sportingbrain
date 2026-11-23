# SportingBrain benchmarks

What we measure each feature against, where we match it, and where we still fall short. Updated 23 November 2026. Only checked facts about other products go here; anything unverified is marked "to check".

| SportingBrain feature | Best-in-class comparison | Where we match | Where we fall short (to do) |
|---|---|---|---|
| Connections: Sport | Connections: Sports Edition (The Athletic and NYT Games, launched 9 February 2025): 16 sports terms, four groups of four, four mistakes, new puzzle at midnight, timer | Same core rules; daily puzzle; colour-graded difficulty; share grid; practice puzzles; UK sport and women's sport, which theirs is not built around | Only 8 puzzles, so it repeats after 8 days. Needs one new puzzle a week from the weekly editor task. No timer yet |
| Who Am I? | Sporcle "Who am I" style clue quizzes (to check) | Five clues hardest first, points 5 to 1, free-text guess with accent-proof matching | 15 players. Needs a weekly addition and a near-miss hint ("close, check the spelling") |
| Ground Guesser | GeoGuessr-style zoom guessing (to check) | Real photos, zoom-out steps, four options | 9 venues. Needs more grounds, including women's and non-league venues, once photos are cleared |
| Daily hook and streaks | Wordle (share grid, one puzzle a day) | One shared daily challenge, streaks, share text, challenge-a-mate links | No accounts, so streaks live on one device only (by design: no data collection) |
| Pick Your XI | Fan team-pickers on sports sites (to check) | Any player, themes, formations, share image, friends rate it | Moderation is a word filter only |
| Guides | BBC Sport "Get Inspired" guides (to check) | 23 guides with sources, real photos, expert sections | Kids versions are thinner than adult ones |
| Add to home screen | Any installable web app | Manifest, icons, offline page, service worker | No push reminders (would need consent and a server) |
| Speed | Google Lighthouse targets: 90+ performance, 100 accessibility | Static pages, no tracking by default | Scores to be recorded after each release (see below) |

## Lighthouse log

| Date | Page | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|---|
| (filled in after each release) | | | | | |

## Rules

1. Every row names a real product. If we can't verify a claim about it, we write "to check".
2. A feature isn't "done" until its "fall short" column has a plan.
3. Re-check this table every month.

## Design review, 23 November 2026 (every page screenshotted on phone and desktop, light and dark)

| Page | Benchmark | Verdict |
|---|---|---|
| Header and tabs | The Athletic, Guardian | Matches. One bar, five sections, current tab underlined, no extra strips. |
| Front page | Guardian and The Athletic fronts | Matches on structure: one lead, games row, photo-led stories, three-column lower section. Behind on photography of people and action (needs licensed agency photos, which need a budget). |
| Game tiles and Play page | NYT Games hub | Matches. Own icon, colour and played/new state per game. |
| Game pages | NYT Games game pages | Matches. Icon block, title, one line, then the game. |
| Read front | Guardian section fronts | Matches. Lead story with photo, photo cards for Flashback and guides. |
| This Week | Guardian Sport, The Athletic | Matches. Every story has a related, credited photo; "File photo" is labelled. |
| Flashback articles | The Athletic long reads | Matches. Headline and standfirst first, then the real venue photo, numbers, body, timeline. |
| Flashback list, guides list | BBC Sport Get Inspired | Matches. Photo cards; sports without a free photo use house artwork. |
| Watch front | BBC Sport highlights hub | Matches. Replays shown with the actual ground of each final. |
| Sport guides | BBC Sport Get Inspired | Matches. |
| Round-Up | Football365 Mediawatch | Matches. |
| Kids Zone | BBC Newsround, The Week Junior | Matches. Bright, clear, icons per game, no ads. |
| Replay page | ESPNcricinfo | Matches on data; "More replays" list still text only (next pass). |

Rule from now on: a page is not done until it has a verdict here, and "behind" is only allowed where the fix needs something from Gavin (photo budget, accounts).

## Added 23 November 2026 (second pass)

| Page | Benchmark | Verdict |
|---|---|---|
| Sports Grid | Immaculate Grid, Footy Grid | Matches: 3x3, nine guesses, one club per square, share grid, answers shown at the end. Behind on "rarity" scores, which need a server to count everyone's answers. |
| Quick games (Higher or Lower, True or False, Speed Round) | NYT Games, The Higher Lower Game | Matches: game header with icon, big scoreboard numbers, game tiles to "keep playing". |
| Replay pages | ESPNcricinfo | Matches: "More replays" now photo cards of the actual grounds. |
| Photo credits | Guardian picture credits | Matches: every venue photo listed with author, licence and link. |
| Photography of players and action | The Athletic, Guardian | Behind, by choice: no paid agency photos. Free-licence venue photos and house artwork only. |
