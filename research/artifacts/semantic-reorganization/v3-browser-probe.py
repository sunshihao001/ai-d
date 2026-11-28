# Reproduction logic used in V3. Pass the representative fixture or the full generated page.
# Results must be labelled by actual input. This saved wrapper omits the unused HTTP server.
import sys,json
from pathlib import Path
from playwright.sync_api import sync_playwright
p=Path(sys.argv[1]).resolve(); tests=[]
def check(name,condition):
 tests.append({'name':name,'pass':bool(condition)})
 if not condition:raise AssertionError(name)
with sync_playwright() as w:
 b=w.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox']);version=b.version
 c=b.new_context(viewport={'width':393,'height':873},is_mobile=True,has_touch=True,permissions=['clipboard-read','clipboard-write']);page=c.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)));page.set_content(p.read_text())
 check('phone viewport no horizontal overflow',page.evaluate('document.documentElement.scrollWidth<=innerWidth+1'))
 check('initial cards',page.locator('.claim:visible').count()==page.locator('.claim').count())
 page.locator('#cq').fill('历史证据');check('Chinese search',page.locator('#claim-K-TIME').is_visible())
 page.locator('#cq').fill('zzzz_no_match_829');check('empty result',page.locator('.claim:visible').count()==0 and '没有匹配' in page.locator('#claimCount').inner_text());page.locator('#cq').fill('')
 page.locator('#domain').select_option('验证与进化');check('domain filter',page.locator('#claim-K-TIME').is_visible() and not page.locator('#claim-K-GOAL').is_visible());page.locator('#domain').select_option('')
 page.locator('#reviewState').select_option('pending');check('review state filter',page.locator('#claim-K-LEARN').is_visible() and not page.locator('#claim-K-GOAL').is_visible())
 page.locator('#goal .jump').first.click();check('hidden target revealed',page.locator('#claim-K-GOAL').is_visible() and page.locator('#reviewState').input_value()=='')
 page.locator('#knowledge details').first.locator('summary').click();page.locator('.route[data-route="P5"]').click();check('P5 route sets filter and method',page.locator('#question').input_value()=='P5' and 'Fowler' in page.locator('#routeDetail').inner_text())
 page.evaluate('Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:async t=>{window.__copied=t},readText:async()=>window.__copied}})');page.locator('#copyRoute').click();page.wait_for_function('document.getElementById("copyStatus").textContent.includes("已复制")');check('clipboard success branch with test double', 'P5' in page.evaluate('navigator.clipboard.readText()'))
 page.locator('#question').select_option('');page.locator('#claim-K-GOAL .copy-claim').click();page.wait_for_function('document.getElementById("request").value.includes("K-GOAL")');check('claim copy includes condition, scope, source',all(x in page.locator('#request').input_value() for x in ['K-GOAL','source_reviewed','AGENTS.md','实际HEAD']))
 page.locator('#aq').fill('agents.md');check('case insensitive asset search',page.locator('.asset:visible').count()>=1 and page.locator('.asset:visible').count()<page.locator('.asset').count());page.locator('#aq').fill('zzzz_no_match_829');check('asset empty result',page.locator('.asset:visible').count()==0);page.locator('#aq').fill('')
 check('source link version anchored',page.locator('#claim-K-GOAL details a').first.get_attribute('href').endswith('AGENTS.md#L1'))
 check('no page errors',not errors)
 page.evaluate('Object.defineProperty(navigator,"clipboard",{configurable:true,value:{writeText:()=>Promise.reject(new Error("test denied"))}})');page.locator('#copy').click();page.wait_for_function('document.getElementById("copyStatus").textContent.includes("手动复制")');check('clipboard failure fallback',page.locator('#request').evaluate('(x)=>document.activeElement===x&&x.selectionEnd>x.selectionStart'))
 c.close();desk=b.new_page(viewport={'width':1280,'height':900});desk.set_content(p.read_text());desk.keyboard.press('Tab');check('keyboard focus skip link',desk.locator('.skip').evaluate('(x)=>document.activeElement===x'));check('desktop no horizontal overflow',desk.evaluate('document.documentElement.scrollWidth<=innerWidth+1'));b.close()
print(json.dumps({'chromium':version,'input':str(p),'scope':'set_content; clipboard doubles; actual input only','tests':tests},ensure_ascii=False))
