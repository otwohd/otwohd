import base64
import json
import subprocess
import tempfile
import time
import urllib.request
from pathlib import Path

import websocket

CHROME = "/usr/bin/chromium"
URL = "http://127.0.0.1:3006/"
OUT_DIR = Path("/home/ubuntu/mobile_overlap_checks/mobile_sticky_header")
OUT_DIR.mkdir(parents=True, exist_ok=True)


def wait_json(url, timeout=10):
    end = time.time() + timeout
    last = None
    while time.time() < end:
        try:
            with urllib.request.urlopen(url, timeout=1) as response:
                return json.loads(response.read().decode())
        except Exception as exc:
            last = exc
            time.sleep(0.2)
    raise RuntimeError(f"DevTools endpoint not ready: {last}")


def send(ws, method, params=None, seq=[0]):
    seq[0] += 1
    ws.send(json.dumps({"id": seq[0], "method": method, "params": params or {}}))
    while True:
        data = json.loads(ws.recv())
        if data.get("id") == seq[0]:
            if "error" in data:
                raise RuntimeError(data["error"])
            return data.get("result", {})


def screenshot(ws, name):
    result = send(ws, "Page.captureScreenshot", {"format": "png", "fromSurface": True, "captureBeyondViewport": False})
    path = OUT_DIR / name
    path.write_bytes(base64.b64decode(result["data"]))
    return str(path)


def eval_js(ws, expression):
    result = send(ws, "Runtime.evaluate", {"expression": expression, "returnByValue": True, "awaitPromise": True})
    return result.get("result", {}).get("value")


profile = tempfile.mkdtemp(prefix="otwohd-chrome-")
proc = subprocess.Popen([
    CHROME,
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--remote-debugging-port=9333",
    "--remote-allow-origins=*",
    f"--user-data-dir={profile}",
    "--window-size=390,900",
    URL,
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

try:
    targets = wait_json("http://127.0.0.1:9333/json")
    page = next(t for t in targets if t.get("type") == "page")
    ws = websocket.create_connection(page["webSocketDebuggerUrl"], timeout=5)
    send(ws, "Page.enable")
    send(ws, "Runtime.enable")
    send(ws, "Emulation.setDeviceMetricsOverride", {"width": 390, "height": 900, "deviceScaleFactor": 1, "mobile": True})
    send(ws, "Page.navigate", {"url": URL})
    time.sleep(3)

    before = eval_js(ws, """
      (() => {
        const h = document.querySelector('.site-header').getBoundingClientRect();
        return {scrollY: window.scrollY, headerTop: Math.round(h.top), headerBottom: Math.round(h.bottom), innerHeight: window.innerHeight, scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth};
      })()
    """)
    shot_initial = screenshot(ws, "mobile_header_initial.png")

    eval_js(ws, "window.scrollTo(0, 760); new Promise(r => setTimeout(r, 450));")
    after_scroll = eval_js(ws, """
      (() => {
        const h = document.querySelector('.site-header').getBoundingClientRect();
        return {scrollY: window.scrollY, headerTop: Math.round(h.top), headerBottom: Math.round(h.bottom), innerHeight: window.innerHeight, scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth};
      })()
    """)
    shot_scrolled = screenshot(ws, "mobile_header_scrolled.png")

    eval_js(ws, "document.querySelector('.mobile-menu-toggle').click(); new Promise(r => setTimeout(r, 350));")
    menu_state = eval_js(ws, """
      (() => {
        const panel = document.querySelector('.mobile-menu-panel');
        const h = document.querySelector('.site-header').getBoundingClientRect();
        const p = panel ? panel.getBoundingClientRect() : null;
        return {open: !!panel, headerTop: Math.round(h.top), panelTop: p ? Math.round(p.top) : null, panelBottom: p ? Math.round(p.bottom) : null, scrollY: window.scrollY};
      })()
    """)
    shot_menu = screenshot(ws, "mobile_header_menu_open.png")

    findings = {
        "url": URL,
        "screenshots": [shot_initial, shot_scrolled, shot_menu],
        "before": before,
        "after_scroll": after_scroll,
        "menu_state": menu_state,
        "sticky_ok": before["headerTop"] == 0 and after_scroll["headerTop"] == 0,
        "overflow_ok": after_scroll["scrollWidth"] == after_scroll["clientWidth"],
    }
    (OUT_DIR / "findings.json").write_text(json.dumps(findings, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT_DIR / "findings.md").write_text(
        "# 모바일 sticky header 검증\n\n"
        f"초기 헤더 위치: top={before['headerTop']}, bottom={before['headerBottom']}\n\n"
        f"스크롤 후 헤더 위치: scrollY={after_scroll['scrollY']}, top={after_scroll['headerTop']}, bottom={after_scroll['headerBottom']}\n\n"
        f"메뉴 오픈 상태: open={menu_state['open']}, panelTop={menu_state['panelTop']}, panelBottom={menu_state['panelBottom']}\n\n"
        f"가로 오버플로우: scrollWidth={after_scroll['scrollWidth']}, clientWidth={after_scroll['clientWidth']}\n\n"
        f"sticky_ok={findings['sticky_ok']}, overflow_ok={findings['overflow_ok']}\n",
        encoding="utf-8",
    )
    print(json.dumps(findings, ensure_ascii=False, indent=2))
finally:
    try:
        proc.terminate()
        proc.wait(timeout=3)
    except Exception:
        proc.kill()
