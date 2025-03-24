# 시작

이 문서에서는 프로젝트를 처음부터 설정하고 실행하는 방법을 안내합니다.

## 환경 준비

로컬 환경에서는 [Pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 및 [Git](https://git-scm.com/)을 설치해야 합니다.

::: warning 주의

- Node.js는 14.x 이상의 버전이 필요하며, 16.x 이상의 버전을 권장합니다.

:::

## 툴 설정

만약 Visual Studio Code를 사용 중이라면, 개발 효율성과 코드 포맷팅을 위해 다음 플러그인 설치를 권장합니다:

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 아이콘 플러그인
- [unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 팁 플러그인
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 플러그인
- [Vue - Official](https://marketplace.cursorapi.com/items?itemName=Vue.volar) - vue 개발 필수 도구
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 스크립트 코드 검사
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 코드 포맷팅
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 포맷팅
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 파일 관리

## 코드 가져오기

::: warning 주의

코드를 저장하는 디렉터리 및 모든 상위 디렉터리 이름에 한국어, 중국어, 일본어와 같은 비영어 문자가 포함되거나 공백이 있으면 패키지를 설치하거나 프로젝트를 실행할 때 오류가 발생할 수 있습니다.

:::

### GitHub에서 코드 가져오기

```bash
# clone code
git clone https://github.com/web2-solution/web2-vue-framework.git
```

## 설치

### Node.js 설치

로컬 환경에 [Node.js](https://nodejs.org/en/)가 설치되어 있지 않다면 `18.x` 이상의 버전을 권장합니다.

**확인**

```bash
# npm이 성공적으로 설치되었는지 확인
npm -v

# node가 성공적으로 설치되었는지 확인
node -v
```

여러 버전의 `node`를 동시에 사용해야 하는 경우， [Nvm](https://github.com/nvm-sh/nvm)과 같은 Node.js 버전 관리 도구를 사용할 수 있습니다.

### 패키지 설치

#### Pnpm 설치

[Pnpm](https://pnpm.io/)을 사용하여 패키지를 설치하는 것을 권장합니다. (다른 패키지 관리자로 설치할 수 없는 경우에는 별도로 처리해야 합니다.)

`Pnpm`이 설치되어 있지 않은 경우, 아래 명령어를 사용하여 전역으로 설치할 수 있습니다.

```bash
# pnpm 전역 설치
npm i -g pnpm

# pnppm이 성공적으로 설치되었는지 확인
pnpm -v
```

#### 패키지 설치

프로젝트 루트 디렉토리에서 명령 창을 열고 실행한 후, 설치가 완료될 때까지 기다리면 됩니다.

```bash
# 패키지 설치
pnpm i
```

:::

패키지 설치가 완료된 후, 다음 명령어를 실행하여 프로젝트를 시작할 수 있습니다:：

```bash
# 로컬에서 프론트엔드 개발 서버 실행
pnpm run dev
```

## npm script

```bash
"scripts": {
  # 패키지 설치
  "i": "pnpm install",
  # 로컬 개발 환경 실행
  "dev": "pnpm vite --mode base",
  # TypeScript 타입 검사
  "ts:check": "pnpm vue-tsc --noEmit --skipLibCheck",

  # 프로덕션 환경으로 빌드
  "build:pro": "pnpm vite build --mode pro",
  # Gitee 배포용 빌드
  "build:gitee": "pnpm vite build --mode gitee",
  # 개발 환경으로 빌드
  "build:dev": "pnpm vite build --mode dev",
  # 테스트 환경으로 빌드
  "build:test": "pnpm vite build --mode test",

  # 프로덕션 환경으로 빌드된 프로젝트 미리보기
  "serve:pro": "pnpm vite preview --mode pro",
  # 개발 환경으로 빌드된 프로젝트 미리보기
  "serve:dev": "pnpm vite preview --mode dev",
  # 테스트 환경으로 빌드된 프로젝트 미리보기
  "serve:test": "pnpm vite preview --mode test",

  # WiLS 기술 문서 개발 서버 실행
  "docs:dev": "vitepress dev docs",
  # WiLS 기술 문서 정적 파일 빌드
  "docs:build": "vitepress build docs",
  # WiLS 기술 문서 빌드 결과 미리보기
  "docs:preview": "vitepress preview docs",

  # 업데이트 가능한 의존성 검사 및 갱신
  "npm:check": "pnpx npm-check-updates -u",
  # node_modules 삭제
  "clean": "pnpx rimraf node_modules",
  # 캐시 삭제
  "clean:cache": "pnpx rimraf node_modules/.cache",

  # eslint 검사 및 자동 수정
  "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
  # prettier 포맷팅
  "lint:format": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,vue,html,md}\"",
  # stylelint 포맷팅
  "lint:style": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  # 커밋 전 린트 검사
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  
  # husky 설치
  "prepare": "husky install",
  # 모듈 생성
  "p": "plop",
  # 아이콘 자동 생성 스크립트
  "icon": "esno ./scripts/icon.ts"
}
```
