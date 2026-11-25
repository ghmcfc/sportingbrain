"""Smoke tests: every page loads without script errors and has content, on computer and phone sizes.
Run after `npx astro build`: python3 tests/smoke.py"""
import shutil, subprocess, sys, time, os
from playwright.sync_api import sync_playwright
ROOT='/tmp/sb-serve'; shutil.rmtree(ROOT, ignore_errors=True); shutil.copytree('dist', ROOT)
srv=subprocess.Popen([sys.executable,'-m','http.server','8799'],cwd=ROOT,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL); time.sleep(1)
B='http://localhost:8799/'
pages=['','daily.html','higher-or-lower.html','guess-the-player.html','true-or-false.html','speed-round.html','the-grid.html','guess-the-sport.html','challenge.html?c=weekly','stories.html','sports.html','round-up.html','about.html']
pages+=['flashback.html','replays.html','call-it.html','call-it.html?practice=1','on-this-day.html','on-this-day.html?d=12-05','newsletter.html','this-week.html','kids.html','kids/6-8.html','kids/9-12.html','kids/parents.html','daily.html?level=4','sports/cricket.html','sports/netball.html']+['flashback/'+f for f in os.listdir('dist/flashback')]+['replays/'+f for f in os.listdir('dist/replays')]+['f1/'+f for f in sorted(os.listdir('dist/f1'))[-3:]]
pages+=['colours.html','ireland.html','ireland/brain.html','ireland/county.html','ireland/legends.html','ireland/brain.html?practice=1']
pages+=['sports-grid.html','name-them-all.html','read.html','watch.html','offline.html','connections.html','who-am-i.html','ground-guesser.html','settings.html','credits.html','laughs.html','replays/cwc-2011-final.html','replays/wwc-2025-final.html','replays/t20wc-2016-final.html','call-it-football.html','play.html','pub-quiz.html','weekly-expert.html','is-it-a-foul.html','stat-attack.html','stats-detective.html','pick-your-xi.html','rewind.html','which-sport.html','bingo.html','countdown.html','advent.html','archive.html','passport.html','sports-day.html','kids/kit.html','kids/academy.html','daily.html?day=1']
pages+=['stories/'+f[:-5] +'.html' for f in os.listdir('dist/stories')] if os.path.isdir('dist/stories') else []
fail=0
with sync_playwright() as p:
    b=p.chromium.launch()
    for vp in ({'width':1440,'height':900},{'width':390,'height':844}):
        pg=b.new_page(viewport=vp); errs=[]; pg.on('pageerror',lambda e:errs.append(str(e)))
        pg.route('**/tally.so/**', lambda r: r.abort())
        for u in pages:
            pg.goto(B+u); pg.wait_for_timeout(200)
            if len(pg.inner_text('#main'))<60: print('FAIL thin page', vp['width'], u); fail+=1
        if errs: print('FAIL script errors', vp['width'], errs); fail+=1
    b.close()
srv.terminate(); print('PASS' if not fail else f'{fail} failures'); sys.exit(1 if fail else 0)
