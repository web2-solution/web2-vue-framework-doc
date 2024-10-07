<!-- # 소개 -->

## 개요

[web2-vue-framework](https://github.com/web2-solution/web2-vue-framework/tree/demo)은 element-plus를 기반으로 한 템플릿입니다. 최신 [Vue3](https://github.com/vuejs/vue-next)，[Vite](https://github.com/vitejs/vite)，[Typescript](https://www.typescriptlang.org/) 등 주류 프론트엔드 기술을 사용하여 개발되었습니다. 

## 필요한 기본 지식

본 프로젝트를 원활하게 다루기 위해서는 일정한 프론트엔드 기초 지식이 필요합니다. **Vue.js**를 포함한 여러 도구와 개념에 대한 기초를 익혀두면 프로젝트 진행 시 발생하는 문제를 해결하는 데 도움이 됩니다.

### 권장 학습 내용

1. **HTML/CSS**:
   - HTML의 기본 구조와 CSS를 사용한 스타일링 방법
   - Flexbox 및 Grid 레이아웃에 대한 이해
   - 반응형 웹 디자인 및 미디어 쿼리 사용법

2. **JavaScript**:
   - ES6 이상의 자바스크립트 문법 (화살표 함수, 템플릿 리터럴, 비구조화 할당 등)
   - 비동기 프로그래밍 (Promise, async/await)
   - 모듈 시스템과 import/export 사용법

3. **Vue.js**:
   - Vue 인스턴스와 기본 구조
   - Vue 컴포넌트의 작성 및 컴포넌트 간의 통신 (Props, Events)
   - Vue의 반응형 데이터 바인딩과 라이프사이클 훅
   - Vue Router와 상태 관리(Pinia) 기본 개념
   - Vue CLI를 사용한 프로젝트 생성 및 설정

4. **패키지 관리 및 빌드 도구**:
   - npm 또는 pnpm과 같은 패키지 관리 도구 사용법
   - Vite와 같은 빌드 도구의 기본 설정 및 명령어 이해

5. **Version Control (Git)**:
   - Git의 기본적인 명령어 및 브랜치 관리 방법
   - GitHub와 같은 원격 저장소 사용법

6. **API 통신**:
   - Axios 또는 Fetch API를 사용한 HTTP 요청 처리
   - RESTful API의 기본 개념과 데이터 처리

위의 주제들을 미리 학습해두면 프로젝트 작업에 빠르게 적응하고 효율적으로 개발을 진행할 수 있습니다.

또한 이 프로젝트를 신속하게 이해하고 익히기 위해서 아래 문서와 온라인 예제를 참고할 수 있습니다. 개발 전에 다음 항목을 학습해두면 프로젝트 코드를 이해하는 데 매우 유용합니다:

- [Vue 3](https://v3.vuejs.org/) - 최신 Vue.js 버전으로, Vue의 반응형 데이터 시스템 및 컴포넌트 기반 개발 방식 학습
- [Pinia](https://pinia.vuejs.org/) - Vuex의 대안으로 간편하고 직관적인 상태 관리 도구
- [TypeScript](https://www.typescriptlang.org/) - 정적 타입 지원을 통해 대규모 애플리케이션에서 더 안전한 코드를 작성할 수 있음
- [Vue Router](https://next.router.vuejs.org/) - Vue.js에서 페이지 간의 라우팅을 관리하는 도구
- [Element Plus](https://element-plus.org/) - Vue 3를 위한 UI 라이브러리로, 다양한 UI 컴포넌트를 제공
- [ES6](https://es6.ruanyifeng.com/) - 최신 자바스크립트 문법 및 기능에 대한 이해 (화살표 함수, 비구조화 할당, 템플릿 리터럴 등)
- [Vite.js](https://vitejs.dev/) - 빠르고 가벼운 빌드 도구로, 프로젝트의 성능을 최적화할 수 있음
- [unocss](https://unocss.dev/) - 유틸리티-퍼스트 CSS 프레임워크로, 빠르고 유연한 스타일링을 지원
- [Axios](https://axios-http.com/) - HTTP 클라이언트 라이브러리로, API 통신을 쉽게 구현 가능

## 디렉토리 구조

```
.
├── .github # github 워크플로우 관련
├── .husky # husky 설정
├── .vscode # vscode 설정
├── mock # 사용자 정의 mock 데이터 및 설정
├── public # 정적 자원
├── src # 프로젝트 코드
│   ├── api # API 인터페이스 관리
│   ├── axios # axios 설정
│   ├── assets # 정적 자원
│   ├── components # 공용 컴포넌트
│   ├── constants # 상수 저장
│   ├── hooks # 자주 사용하는 hooks
│   ├── layout # 레이아웃 컴포넌트
│   ├── locales # 언어 파일
│   ├── plugins # 외부 플러그인
│   ├── router # 라우터 설정
│   ├── store # 상태 관리
│   ├── styles # 전역 스타일
│   ├── utils # 전역 유틸리티
│   ├── views # 라우터 페이지
│   ├── App.vue # 엔트리 Vue 파일
│   ├── main.ts # 메인 엔트리 파일
│   └── permission.ts # 라우터 가드
├── types # 전역 타입
├── .env.base # 로컬 개발 환경 환경 변수 설정
├── .env.dev # 개발 환경 배포 환경 변수 설정
├── .env.gitee # Gitee 전용 환경 변수, 무시 가능
├── .env.pro # 프로덕션 환경 배포 환경 변수 설정
├── .env.test # 테스트 환경 배포 환경 변수 설정
├── .eslintignore # eslint 검사 제외 설정
├── .eslintrc.js # eslint 설정
├── .gitignore # git 무시 설정
├── .prettierignore # prettier 검사 제외 설정
├── .stylelintignore # stylelint 검사 제외 설정
├── .versionrc # 자동 버전 번호 및 업데이트 기록 설정
├── CHANGELOG.md # 업데이트 기록
├── commitlint.config.js # git commit 규칙 설정
├── index.html # 엔트리 페이지
├── package.json
├── .postcssrc.js # postcss 설정
├── prettier.config.js # prettier 설정
├── README.md # 영어 README
├── README.zh-CN.md # 중국어 README
├── stylelint.config.js # stylelint 설정
├── tsconfig.json # typescript 설정
├── vite.config.ts # vite 설정
└── uno.config.ts # unocss 설정
```

## 브라우저 지원

**로컬 개발**에는 `Chrome 최신버전` 브라우저를 사용하는 것을 권장합니다.

Vue3는 IE11을 지원하지 않으므로, 본 프로젝트도 IE를 지원하지 않습니다.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## IDE 추천

- [VSCode](https://code.visualstudio.com/)
