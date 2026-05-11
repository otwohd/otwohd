# 오투HD 홈페이지 수정 검증 메모

로컬 개발 서버 `http://localhost:3001/`에서 메인 페이지와 사업 상세 페이지를 확인했다. 메인 페이지는 `Business Growth Group`, `Sales Infrastructure Group`, `Data Driven Operation`, `Strategy & Execution`을 상단 히어로와 원칙 카드로 노출하며, 긴 원페이지 설명 대신 `Business`, `Process`, `Insight`, `Contact`로 이동 가능한 허브 구조로 표시된다.

`/business/data-operation` 상세 페이지는 정상 렌더링되며, `데이터 운영` 제목, `자체 DB와 실행 데이터를 연결` 부제, 상세 설명, 키워드 칩, `Connected Process` 카드, `파트너십 문의하기` CTA가 표시된다. 상단 내비게이션은 `Main / About / Business / Process / Insight / Contact`로 정리되어 있으며, `/business` 상세 경로에서 Business 항목이 활성화된다.

검증 명령은 `pnpm build`와 `pnpm check` 모두 성공했다.

## 공개 URL 배포 확인

`pnpm deploy:pages` 실행 후 `gh-pages` 브랜치에는 최신 번들 `assets/index-BEv3AQly.js`와 CSS `assets/index-B0yaTlGh.css`가 배포되었다. `curl`로 공개 URL의 HTML을 확인했을 때도 최신 자산이 참조되며, 번들 내부에는 `Business Growth Group`과 `비즈니스는 광고만으로 성장하지 않습니다` 문구가 포함되어 있다. 브라우저 세션에서는 한동안 이전 번들 `assets/index-DBx0nfOk.js`가 남아 보이는 캐시 현상이 확인되었으나, `index.html` 직접 접근 시 최신 내비게이션(`Main / About / Business / Process / Insight / Contact`)과 최신 UI가 로드되는 것을 확인했다.


## 2026-05-08 HERO 브랜드 무드 재설계 검증

사용자 추가 요청에 따라 메인 HERO를 설명형 랜딩페이지에서 브랜드 선언형 첫 화면으로 재설계했다. 로컬 프로덕션 빌드(`pnpm build`)가 정상 완료됐으며, 개발 서버 `http://localhost:3002/?check=hero-korean-first`에서 시각 검증을 진행했다.

검증 결과, 상단 내비게이션은 `메인 · 소개 · 사업분야 · 운영구조 · 인사이트 · 문의하기`로 한국어 우선 구조가 반영됐다. HERO 헤드라인은 `비즈니스는 / 광고만으로 / 성장하지 / 않습니다.` 형태의 강한 선언형 타이포그래피로 표시되며, 보조 카피는 `운영과 실행이 연결될 때, 성장은 구조가 됩니다. 우리는 광고를 운영하지 않습니다. 성장 구조를 설계합니다.`로 정리됐다. 기존 기능 설명형 대시보드 비주얼은 제거하고, 중앙 OTWOHD 코어·분석·전략·운영·실행·성장 노드가 연결되는 추상 구조 그래픽과 소프트 글로우·느린 회전 모션으로 대체했다.

SEO 문서 제목도 `오투HD(Otwo Holdings) | 성장 구조를 설계하는 비즈니스 그룹`으로 한국어 중심 표현이 적용됐다. 확인 스크린샷은 `/home/ubuntu/screenshots/localhost_2026-05-08_03-36-32_4785.webp`에 저장됐다.


## 공개 URL 최종 반영 확인

`pnpm deploy:pages`로 `gh-pages` 브랜치에 최신 빌드가 배포됐으며, 원격 `gh-pages` 커밋은 `3802b3f05261bcc422d35e498a6b4a6978146410`이다. 공개 HTML은 최신 자산 `/otwohd/assets/index-TyZspynB.js` 및 `/otwohd/assets/index-C_oyqmIw.css`를 참조하는 것으로 확인했다.

GitHub Pages 공개 루트 URL `https://otwohd.github.io/otwohd/?fresh=b67f5889-5`에서 최신 화면을 확인했다. 공개 화면에는 한국어 메뉴, `성장 구조를 설계하는 그룹` 배지, 선언형 HERO 헤드라인, 추상 구조 비주얼, 한국어 중심 SEO 제목이 정상 표시됐다. 확인 스크린샷은 `/home/ubuntu/screenshots/otwohd_github_io_2026-05-08_03-39-02_2296.webp`에 저장됐다.


## 2026-05-08 HERO 최종 안정화 수정 검증

요청에 따라 메인 HERO에서 과한 미래형 SaaS 랜딩페이지 느낌을 줄이고, 실제 운영 기반 비즈니스 그룹처럼 보이도록 최종 안정화 수정을 진행했다. 헤드라인은 이전 대비 추가 축소해 압박감을 낮췄고, 줄간격과 문단 폭을 안정화했다. 오른쪽 비주얼은 관리자툴·대시보드 UI가 아닌 추상적 운영 구조 그래픽으로 유지하되, 카드 크기와 글로우, 노드 대비를 낮춰 그래픽이 주인공처럼 보이지 않도록 조정했다.

로컬 검증은 `pnpm build`로 완료했으며, 빌드 산출물은 정상 생성되었다. 브라우저 검증은 `http://localhost:3003/?check=hero-final-balance`에서 수행했고, 메인 내비게이션은 `메인 / 소개 / 사업분야 / 운영구조 / 인사이트 / 문의하기`의 한국어 중심 구조로 표시되었다. HERO 첫 화면은 `비즈니스는 광고만으로 성장하지 않습니다.`라는 선언형 문구, `운영과 실행이 연결될 때, 성장은 구조가 됩니다.`라는 보조 카피, 그리고 절제된 OTWOHD 구조 그래픽으로 확인되었다. 확인 스크린샷은 `/home/ubuntu/screenshots/localhost_2026-05-08_03-53-39_8609.webp`에 저장됐다.


## 2026-05-08 공개 URL 최종 안정화 반영 확인

최종 HERO 안정화 수정 후 `main` 브랜치 커밋 `53c63ce8`을 원격에 푸시했고, `pnpm deploy:pages`로 GitHub Pages 배포 브랜치를 `53a0e280`까지 업데이트했다. 배포 직후 공개 URL의 HTML이 잠시 이전 자산을 참조하는 CDN 지연이 있었으나, 이후 `https://otwohd.github.io/otwohd/?fresh=53c63ce8-afterwait`에서 최신 자산 `assets/index-B1AOgKwu.css`와 `assets/index-Detoztcz.js`가 로드되는 것을 확인했다.

공개 화면에는 한국어 중심 메뉴(`메인 / 소개 / 사업분야 / 운영구조 / 인사이트 / 문의하기`), 축소된 HERO 헤드라인(`비즈니스는 광고만으로 성장하지 않습니다.`), 절제된 보조 카피, 그리고 기능 대시보드가 아닌 추상적 OTWOHD 구조 비주얼이 정상 표시됐다. 확인 스크린샷은 `/home/ubuntu/screenshots/otwohd_github_io_2026-05-08_03-56-17_4463.webp`에 저장됐다.


## 2026-05-10 모바일 겹침 수정 로컬 검증

모바일 뷰포트 390px 기준으로 메인 페이지와 데이터 운영 상세 페이지를 전체 스크린샷으로 확인했다. 메인 페이지는 HERO 하단 CTA와 오른쪽 추상 비주얼 영역 사이에 충분한 세로 흐름이 확보되어 이전처럼 위 콘텐츠가 다음 섹션 위로 겹쳐 보이지 않았다. 상세 페이지 역시 본문 카드와 CTA 영역 사이의 흐름이 유지되며, sticky 요소와 가로 overflow로 인한 시각적 겹침이 재현되지 않았다.

검증 파일:

- `/home/ubuntu/mobile_overlap_checks/fixed/home_mobile_fixed.png`
- `/home/ubuntu/mobile_overlap_checks/fixed/business_mobile_fixed.png`
- `/home/ubuntu/mobile_overlap_checks/fixed/process_mobile_fixed.png`
