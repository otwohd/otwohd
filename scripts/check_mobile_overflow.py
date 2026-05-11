import json
import subprocess
import time
import urllib.request
from pathlib import Path

try:
    import websocket
except ImportError as exc:
    raise SystemExit('missing websocket-client') from exc

URL = 'http://localhost:3005/business/data'
PORT = 9333
OUT = Path('/home/ubuntu/mobile_overlap_checks/final6/overflow_report.json')

chrome = subprocess.Popen([
    'chromium', '--headless', '--no-sandbox', '--disable-gpu', '--remote-allow-origins=*',
    f'--remote-debugging-port={PORT}', '--window-size=390,1200', 'about:blank'
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    deadline = time.time() + 10
    tabs = None
    while time.time() < deadline:
        try:
            with urllib.request.urlopen(f'http://127.0.0.1:{PORT}/json', timeout=1) as r:
                tabs = json.loads(r.read().decode())
            if tabs:
                break
        except Exception:
            time.sleep(0.2)
    if not tabs:
        raise SystemExit('no devtools tab')
    ws_url = tabs[0]['webSocketDebuggerUrl']
    ws = websocket.create_connection(ws_url, timeout=5)
    counter = 0
    def call(method, params=None):
        nonlocal_counter = None
        global counter
        counter += 1
        ws.send(json.dumps({'id': counter, 'method': method, 'params': params or {}}))
        while True:
            msg = json.loads(ws.recv())
            if msg.get('id') == counter:
                return msg
    call('Page.enable')
    call('Runtime.enable')
    call('Emulation.setDeviceMetricsOverride', {
        'width': 390, 'height': 1200, 'deviceScaleFactor': 1, 'mobile': True
    })
    call('Page.navigate', {'url': URL})
    time.sleep(2.5)
    expression = r'''
(() => {
  const vw = document.documentElement.clientWidth;
  const sw = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  const items = [];
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    if (r.right > vw + 1 || r.left < -1) {
      const cls = typeof el.className === 'string' ? el.className : '';
      items.push({
        tag: el.tagName.toLowerCase(),
        className: cls.slice(0, 220),
        text: (el.innerText || el.textContent || '').replace(/\s+/g,' ').trim().slice(0, 120),
        left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width)
      });
    }
  }
  return {vw, sw, overflowCount: items.length, items: items.slice(0, 80)};
})()
'''
    result = call('Runtime.evaluate', {'expression': expression, 'returnByValue': True, 'awaitPromise': True})
    OUT.write_text(json.dumps(result.get('result', {}).get('result', {}).get('value'), ensure_ascii=False, indent=2))
    print(OUT)
finally:
    try:
        chrome.terminate()
        chrome.wait(timeout=3)
    except Exception:
        chrome.kill()
