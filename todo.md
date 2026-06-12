# 작업 항목

- [x] GitHub `otwohd/otwohd` 레포지토리에서 최신 원격 커밋을 확인한다.
- [x] 로컬 레포지토리 `/home/ubuntu/otwohd`를 최신 상태로 동기화한다.
- [x] 활성 웹 프로젝트 `/home/ubuntu/otwohd-site`에 최신 소스를 반영한다.
- [x] 타입 검사, 빌드, 개발 서버 상태를 확인한다.
- [x] 접속 가능한 홈페이지 주소와 최신 커밋 정보를 사용자에게 전달한다.

## 관리자 페이지 기능

- [x] DB 스키마 설계 (admin_accounts, insight_posts, popups 테이블)
- [x] DB 마이그레이션 실행 (pnpm db:push)
- [x] 관리자 계정 생성 (admin / admin1234)
- [x] 백엔드 API 구현 (admin 인증, insightAdmin CRUD, popupAdmin CRUD, popup.active)
- [x] 관리자 로그인 페이지 (/admin/login)
- [x] 관리자 대시보드 페이지 (/admin) - 인사이트 게시글 관리, 팝업 관리
- [x] 메인 팝업 컴포넌트 (MainPopup.tsx) - 활성 팝업 표시
- [x] 인사이트 페이지 DB 연동 (정적 데이터 → DB 기반)
- [x] App.tsx 라우팅 추가 (/admin, /admin/login)
- [x] Vitest 테스트 작성 및 통과
