from pathlib import Path

path = Path('/home/ubuntu/otwohd_repo_20260507_235735/client/src/pages/Home.tsx')
text = path.read_text()
old = '''            <p className="mt-7 max-w-2xl text-base font-medium leading-8 tracking-[-0.015em] text-slate-600 sm:text-lg">
              {brand.name}는 전략, 영업, 데이터, 운영을 하나의 실행 흐름으로 연결해 현실적인 성장 구조를 설계합니다.
            </p>'''
new = '''            <p className="mt-7 max-w-2xl text-base font-medium leading-8 tracking-[-0.015em] text-slate-600 sm:text-lg">
              <span className="block">OTWOHD는 전략과 영업, 운영과 데이터를</span>
              <span className="block">하나의 실행 구조로 연결합니다.</span>
              <span className="mt-2 block">화면보다 현장을 먼저 보고,</span>
              <span className="block">콘셉트보다 결과가 남는 방식을 설계합니다.</span>
            </p>'''
if old not in text:
    raise SystemExit('target paragraph not found')
path.write_text(text.replace(old, new, 1))
