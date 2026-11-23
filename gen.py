"""Builds the SportingBrain HTML pages from one shared template."""
import time
PAGES = {
  "index.html": ("home", "SportingBrain: the daily sports hub for every fan", "Daily sports puzzles, quick games, stories, stats and challenges for every fan, every sport and every age. Free."),
  "daily.html": ("daily", "Beat the Brain: today's sports puzzle | SportingBrain", "Five questions across every sport and a cheeky Brain to beat. New every day."),
  "higher-or-lower.html": ("hl", "Higher or Lower: the sports stats game | SportingBrain", "Is the next sports stat higher or lower? Keep going until you get one wrong."),
  "guess-the-player.html": ("gtp", "Guess the Player | SportingBrain", "Three clues. One sporting legend. The fewer clues you need, the more you score."),
  "true-or-false.html": ("tf", "True or False | SportingBrain", "Sporting facts and fibs. Can you tell which is which?"),
  "speed-round.html": ("speed", "Speed Round: 60 seconds | SportingBrain", "Sixty seconds. As many right answers as you can."),
  "the-grid.html": ("grid", "The Grid | SportingBrain", "Sixteen sporting words. Four hidden groups. Find them all."),
  "guess-the-sport.html": ("emoji", "Guess the Sport | SportingBrain", "Name the sport from three emoji clues."),
  "challenge.html": ("challenge", "This week's challenges | SportingBrain", "The Weekly Brain Challenge, Women's Sport Weekly, World Sport Wednesday and the Friday Family Challenge."),
  "read.html": ("read", "Stories | SportingBrain", "True sports stories, heroes and heroines, unusual sports and the Cynical Round-Up."),
  "about.html": ("about", "About and privacy | SportingBrain", "About SportingBrain and how we look after your privacy."),
}
T = """<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta name="theme-color" content="#14254a">
<link rel="icon" href="assets/brain.svg" type="image/svg+xml">
<link rel="stylesheet" href="assets/style.css?v={v}">
</head>
<body>
<header class="top"><div class="wrap">
  <a href="./"><img src="assets/brain.svg" alt="SportingBrain home"></a>
  <a class="logo" href="./">Sporting<span>Brain</span></a>
  <div class="hdr-right">
    <button class="iconbtn" data-share-site aria-label="Share SportingBrain">Share</button>
    <button class="iconbtn" data-dark aria-label="Switch dark mode">🌙</button>
    <a class="iconbtn" href="./#games">Play</a>
  </div>
</div></header>
<div class="datebar"><div class="wrap"><span id="today-date"></span><span>Every fan. Every sport. Every day.</span></div></div>
<main class="wrap" data-page="{page}" id="main"></main>
<footer class="wrap">
  <p>SportingBrain is free, for every fan, every sport and every age. No betting, ever.</p>
  <p><a href="./">Home</a> · <a href="./#who">Who we are</a> · <a href="./#newsletter">Newsletter</a> · <a href="about.html">About and privacy</a> · <a href="#" data-dys>Dyslexia-friendly font</a></p>
</footer>
<script src="assets/data.js?v={v}"></script>
<script src="assets/content.js?v={v}"></script>
<script src="assets/app.js?v={v}"></script>
</body>
</html>
"""
V=time.strftime("%Y%m%d%H%M")
for f,(page,title,desc) in PAGES.items():
    open(f,"w").write(T.format(page=page,title=title,desc=desc,v=V))
print("pages:", len(PAGES))
