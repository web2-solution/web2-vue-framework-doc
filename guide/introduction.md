<!-- # 소개 -->

## 개요

[vue-element-plus-admin](https://github.com/web2-solution/web2-vue-framework/tree/demo)은 element-plus를 기반으로 한 템플릿입니다. 최신 [Vue3](https://github.com/vuejs/vue-next)，[Vite](https://github.com/vitejs/vite)，[Typescript](https://www.typescriptlang.org/) 등 주류 기술을 사용하여 개발되었습니다. 이 템플릿은 즉시 사용할 수 있는 중간 백엔드 프론트엔드 솔루션을 제공하며, 프로젝트 시작 템플릿으로 사용하거나 학습 및 참고용으로도 활용할 수 있습니다. 최신 기술 동향을 항상 주시하며 가능한 빠르게 업데이트됩니다.

[vue-element-plus-admin](https://github.com/web2-solution/web2-vue-framework/tree/demo)의 목적은 백엔드 통합 솔루션을 제공하는 것입니다. 많은 기능이 통합되어 있어 일부는 필요하지 않을 수 있으며, 이로 인해 코드가 다소 중복될 수 있습니다. 만약 프로젝트가 이러한 문제에 신경 쓰지 않는다면, 이 템플릿을 기반으로 직접 추가 개발을 진행할 수 있습니다.

## 필요한 기본 지식

본 프로젝트를 다루기 위해서는 일정한 프론트엔드 기초 지식이 필요합니다. Vue의 기초 지식을 숙지해 두면 일반적인 문제를 처리하는 데 도움이 될 것입니다.

이 프로젝트를 신속하게 익히기 위해서는 문서와 온라인 예제를 대략적으로 살펴보는 것이 좋습니다.

개발 전에 다음 내용을 학습해 두면 프로젝트 이해에 매우 유용할 것입니다:

- [Vue3](https://v3.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue-router](https://next.router.vuejs.org/)
- [Element-plus](https://element-plus.org/)
- [Es6](https://es6.ruanyifeng.com/)
- [Vitejs](https://vitejs.dev/)
- [unocss](https://unocss.dev/)
- [Axios](https://axios-http.com/)

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

**로컬개발**에는`Chrome 최신버전`브라우저를 사용하는 것이 좋습니다.

Vue 3는 IE11을 지원하지 않으므로, 본 프로젝트도 IE를 지원하지 않습니다.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## IDE 추천

- [VSCode](https://code.visualstudio.com/)
