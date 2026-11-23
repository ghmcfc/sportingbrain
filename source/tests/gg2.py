from playwright.sync_api import sync_playwright
B = 'http://localhost:8811/sportingbrain/'
with sync_playwright() as p:
    br = p.chromium.launch(); pg = br.new_page(viewport={'width': 390, 'height': 844}); errs = []
    pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto(B + 'ground-guesser.html'); pg.wait_for_selector('#ggG')
    print(pg.inner_text('.pg-head p')[-80:])
    pg.screenshot(path='/tmp/gg1.png')
    pg.fill('#ggG', 'wrong place'); pg.click('#ggF .btn.gold'); pg.click('#ggClue'); pg.click('#ggClue'); pg.wait_for_timeout(300)
    pg.screenshot(path='/tmp/gg2.png', full_page=True)
    print('clues:', pg.inner_text('.gg-clues') if pg.query_selector('.gg-clues') else None)
    pg.click('#ggClue'); pg.click('#ggClue'); pg.wait_for_selector('#ggNext'); print('answer:', pg.inner_text('.wa-ans'), pg.inner_text('.photo-credit')[:90])
    for _ in range(4):
        pg.click('#ggNext'); pg.wait_for_selector('#ggClue'); [pg.click('#ggClue') for _ in range(5)]
    pg.click('#ggNext'); pg.wait_for_timeout(300); print('summary:', pg.inner_text('#gg')[:200].replace('\n', ' | '))
    pg.click('[data-mode="collection"]'); pg.wait_for_timeout(200); print('coll:', pg.inner_text('#gg')[:120].replace('\n', ' | '))
    pg.goto(B + 'name-them-all.html'); pg.click('.nt-today .btn'); pg.fill('#ntI', 'brazil'); pg.wait_for_timeout(100); pg.fill('#ntI', 'germany'); print('nt:', pg.inner_text('#ntN'))
    pg.click('#ntGive'); pg.wait_for_timeout(200); print('nt end:', pg.inner_text('.pg-score'))
    pg.screenshot(path='/tmp/nt.png', full_page=True)
    pg.goto(B); pg.screenshot(path='/tmp/home_tabs.png'); print('errors', errs); br.close()
