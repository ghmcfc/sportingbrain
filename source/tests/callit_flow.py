"""Call It cricket + football: no spoilers before play-out, play-out ticks calls, results page with next game/home."""
from playwright.sync_api import sync_playwright
B = 'http://localhost:8811/sportingbrain/'
with sync_playwright() as p:
    br = p.chromium.launch(); pg = br.new_page(viewport={'width': 390, 'height': 844}); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(B + 'call-it.html?practice=1'); pg.wait_for_selector('.ci-opt')
    pg.click('.ci-opt[data-q="0"][data-o="1"]'); pg.click('.ci-opt[data-q="1"][data-o="1"]'); pg.click('#ciLock')
    pg.wait_for_timeout(1500)
    print('spoiler classes during play:', len(pg.query_selector_all('.ci-opt.right, .ci-opt.wrong')), '| result hidden:', pg.is_hidden('#ciResult'))
    print('live:', pg.inner_text('#ciPlay')[:200].replace('\n', ' | '))
    pg.screenshot(path='/tmp/ci_play.png')
    pg.click('#ciSkip'); pg.wait_for_selector('#ciResult:not([hidden]) .end-nav', timeout=5000)
    print('result:', pg.inner_text('#ciResult')[:300].replace('\n', ' | '))
    pg.screenshot(path='/tmp/ci_res.png', full_page=True)
    pg.goto(B + 'call-it-football.html'); pg.wait_for_selector('#practice'); pg.click('#practice'); pg.wait_for_timeout(300)
    pg.click('.fc-o[data-q="next"] button >> nth=0'); pg.click('.fc-o[data-q="more"] button >> nth=1'); pg.click('#fcLock'); pg.wait_for_timeout(1200)
    print('fc live:', pg.inner_text('#fcLive')[:160].replace('\n', ' | '), '| marked early:', len(pg.query_selector_all('.fc-o button.ok')))
    pg.click('#fcSkip'); pg.wait_for_selector('#fcRes .end-nav', timeout=5000); print('fc result:', pg.inner_text('#fcRes')[:250].replace('\n', ' | '))
    pg.screenshot(path='/tmp/fc_res.png', full_page=True)
    for g, sel in [('true-or-false.html', '#t'), ('kids/9-12.html', None)]:
        pg.goto(B + g); pg.wait_for_timeout(500)
        if sel:
            for _ in range(10): pg.click(sel); pg.wait_for_timeout(50)
        else:
            for _ in range(5):
                pg.click('#kzQuiz button[data-k] >> nth=0'); pg.click('#kzQuiz .btn.gold')
        print(g, 'end-nav:', pg.inner_text('.end-nav') if pg.query_selector('.end-nav') else None)
    print('errors', errs); br.close()
