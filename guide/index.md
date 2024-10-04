# 시작

본 문서에서는 프로젝트를 처음부터 실행하고 시작하는 방법을 안내합니다.

## 환경 준비

로컬 환경에서는 [Pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 및 [Git](https://git-scm.com/)을 설치해야 합니다.

::: warning 주의

- Node.js 버전 요구 사항은 14.x 이상이며, 16.x 이상의 버전을 권장합니다.

:::

## 툴 설정

만약 사용하는 IDE가 [vscode](https://code.visualstudio.com/)라면, 개발 효율성과 코드 포맷팅을 향상시키기 위해 다음 도구를 설치할 수 있습니다.

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 아이콘 플러그인
- [unocss](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - unocss 팁 플러그인
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 플러그인
- [Volar](https://gitee.com/link?target=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Djohnsoncodehk.volar) - vue 개발 필수 도구
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 스크립트 코드 검사
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 코드 포맷팅
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 포맷팅
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 파일 관리

## 코드 가져오기

::: warning 주의

코드를 저장하는 디렉토리 및 모든 상위 디렉토리에는 중국어, 한국어, 일본어 문자나 공백이 없어야 합니다. 그렇지 않으면 패키지를 설치한 후 시작 시 오류가 발생할 수 있습니다.

:::

### GitHub에서 코드 가져오기

```bash
# clone code
git clone https://github.com/web2-solution/web2-vue-framework/tree/demo.git

```

## 설치

### Node.js 설치

로컬 환경에 [Node.js](https://nodejs.org/en/)가 설치되어 있지 않다면， `18.x` 이상 설치를 권장합니다.

**확인**

```bash
# npm이 성공적으로 설치되었는지 확인
npm -v

# node가 성공적으로 설치되었는지 확인
node -v
```

여러 버전의 `node`를 동시에 사용해야 하는 경우， [Nvm](https://github.com/nvm-sh/nvm) 또는 다른 Node.js 버전 관리 도구를 사용할 수 있습니다.

### 패키지 설치

#### Pnpm 설치

[Pnpm](https://pnpm.io/)을 사용하여 패키지를 설치하는 것을 권장합니다. (다른 패키지 관리자로 설치할 수 없는 경우에는 별도로 처리해야 합니다.)

`Pnpm`이 설치되어 있지 않은 경우, 아래 명령어를 사용하여 전역으로 설치할 수 있습니다.

```bash
# pnpm 전역 설치
npm i -g pnpm

# 확인
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
pnpm run dev
```

## npm script

```bash
"scripts": {
  # 패키지 설치
  "i": "pnpm install",
  # 로컬 개발 환경 실행
  "dev": "vite --mode base",
  # typeScript 검사
  "ts:check": "vue-tsc --noEmit",
  # 프로덕션 환경으로 빌드
  "build:pro": "vite build --mode pro",
  # 개발 환경으로 빌드
  "build:dev": "npm run ts:check && vite build --mode dev",
  # 테스트 환경으로 빌드
  "build:test": "npm run ts:check && vite build --mode test",
  # 프로덕션 환경으로 빌드된 프로젝트 패키지 로컬 미리보기
  "serve:pro": "vite preview --mode pro",
  # 개발 환경으로 빌드된 프로젝트 패키지 로컬 미리보기
  "serve:dev": "vite preview --mode dev",
  # 테스트 환경으로 빌드된 프로젝트 패키지 로컬 미리보기
  "serve:test": "vite preview --mode test",
  # 업데이트 가능한 의존성 검사
  "npm:check": "npx npm-check-updates",
  # node_modules 삭제
  "clean": "npx rimraf node_modules",
  # 캐시 삭제
  "clean:cache": "npx rimraf node_modules/.cache",
  # eslint 검사
  "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
  # eslint 포맷팅
  "lint:format": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,vue,html,md}\"",
  # stylelint 포맷팅
  "lint:style": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  "postinstall": "husky install",
  # 모듈 생성
  "p": "plop"
},
```
