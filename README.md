# Song Jae I

Next.js, TypeScript, Tailwind CSS, App Router 기반의 기본 스타터 프로젝트입니다.

## 포함된 기본 설정

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- ESLint
- Vercel 배포 호환

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속하면 됩니다.

## 자주 쓰는 명령어

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## 주요 파일

- app/page.tsx: 첫 화면
- app/layout.tsx: 공통 레이아웃 및 metadata
- app/globals.css: 전역 스타일

## 사진 교체

- public/photos/jai-01.jpg
- public/photos/jai-02.jpg
- public/photos/jai-03.jpg
- public/photos/jai-04.jpg

위 경로에 사진을 넣으면 축하 페이지의 플레이스홀더 대신 실제 사진이 자동으로 표시됩니다.

## Vercel 배포

1. GitHub 저장소에 푸시합니다.
2. Vercel에서 New Project를 선택합니다.
3. 해당 저장소를 Import 합니다.
4. Framework Preset은 Next.js로 자동 인식됩니다.
5. 특별한 환경변수가 없다면 그대로 Deploy 하면 됩니다.

이 프로젝트는 별도 vercel.json 없이도 기본 배포가 가능합니다.
