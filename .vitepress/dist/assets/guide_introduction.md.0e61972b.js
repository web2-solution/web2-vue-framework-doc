import{o as e,c as t,b as r,a as n}from"./app.4ba3de9e.js";const a='{"title":"개요","description":"","frontmatter":{},"headers":[{"level":2,"title":"개요","slug":"개요"},{"level":2,"title":"필요한 기본 지식","slug":"필요한-기본-지식"},{"level":2,"title":"디렉토리 구조","slug":"디렉토리-구조"},{"level":2,"title":"브라우저 지원","slug":"브라우저-지원"},{"level":2,"title":"IDE 추천","slug":"ide-추천"}],"relativePath":"guide/introduction.md","lastUpdated":1722835573436}',o={},s=n('<h2 id="개요"><a class="header-anchor" href="#개요" aria-hidden="true">#</a> 개요</h2><p><a href="https://github.com/web2-solution/web2-vue-framework/tree/demo" target="_blank" rel="noopener noreferrer">vue-element-plus-admin</a>은 element-plus를 기반으로 한 무료 오픈 소스 중간 백엔드 템플릿입니다. 최신 <a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener noreferrer">Vue3</a>，<a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer">Vite</a>，<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">Typescript</a> 등 주류 기술을 사용하여 개발되었습니다. 이 템플릿은 즉시 사용할 수 있는 중간 백엔드 프론트엔드 솔루션을 제공하며, 프로젝트 시작 템플릿으로 사용하거나 학습 및 참고용으로도 활용할 수 있습니다. 최신 기술 동향을 항상 주시하며 가능한 빠르게 업데이트됩니다.</p><p><a href="https://github.com/web2-solution/web2-vue-framework/tree/demo" target="_blank" rel="noopener noreferrer">vue-element-plus-admin</a>의 목적은 백엔드 통합 솔루션을 제공하는 것입니다. 많은 기능이 통합되어 있어 일부는 필요하지 않을 수 있으며, 이로 인해 코드가 다소 중복될 수 있습니다. 만약 프로젝트가 이러한 문제에 신경 쓰지 않는다면, 이 템플릿을 기반으로 직접 추가 개발을 진행할 수 있습니다.</p>',3),i=n('<h2 id="필요한-기본-지식"><a class="header-anchor" href="#필요한-기본-지식" aria-hidden="true">#</a> 필요한 기본 지식</h2><p>본 프로젝트를 다루기 위해서는 일정한 프론트엔드 기초 지식이 필요합니다. Vue의 기초 지식을 숙지해 두면 일반적인 문제를 처리하는 데 도움이 될 것입니다.</p><p>이 프로젝트를 신속하게 익히기 위해서는 문서와 온라인 예제를 대략적으로 살펴보는 것이 좋습니다.</p><p>개발 전에 다음 내용을 학습해 두면 프로젝트 이해에 매우 유용할 것입니다:</p><ul><li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue3</a></li><li><a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">Pinia</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li><li><a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue-router</a></li><li><a href="https://element-plus.org/" target="_blank" rel="noopener noreferrer">Element-plus</a></li><li><a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer">Es6</a></li><li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vitejs</a></li><li><a href="https://unocss.dev/" target="_blank" rel="noopener noreferrer">unocss</a></li><li><a href="https://axios-http.com/" target="_blank" rel="noopener noreferrer">Axios</a></li></ul><h2 id="디렉토리-구조"><a class="header-anchor" href="#디렉토리-구조" aria-hidden="true">#</a> 디렉토리 구조</h2><div class="language-"><pre><code>.\n├── .github # github 워크플로우 관련\n├── .husky # husky 설정\n├── .vscode # vscode 설정\n├── mock # 사용자 정의 mock 데이터 및 설정\n├── public # 정적 자원\n├── src # 프로젝트 코드\n│   ├── api # API 인터페이스 관리\n│   ├── axios # axios 설정\n│   ├── assets # 정적 자원\n│   ├── components # 공용 컴포넌트\n│   ├── constants # 상수 저장\n│   ├── hooks # 자주 사용하는 hooks\n│   ├── layout # 레이아웃 컴포넌트\n│   ├── locales # 언어 파일\n│   ├── plugins # 외부 플러그인\n│   ├── router # 라우터 설정\n│   ├── store # 상태 관리\n│   ├── styles # 전역 스타일\n│   ├── utils # 전역 유틸리티\n│   ├── views # 라우터 페이지\n│   ├── App.vue # 엔트리 Vue 파일\n│   ├── main.ts # 메인 엔트리 파일\n│   └── permission.ts # 라우터 가드\n├── types # 전역 타입\n├── .env.base # 로컬 개발 환경 환경 변수 설정\n├── .env.dev # 개발 환경 배포 환경 변수 설정\n├── .env.gitee # Gitee 전용 환경 변수, 무시 가능\n├── .env.pro # 프로덕션 환경 배포 환경 변수 설정\n├── .env.test # 테스트 환경 배포 환경 변수 설정\n├── .eslintignore # eslint 검사 제외 설정\n├── .eslintrc.js # eslint 설정\n├── .gitignore # git 무시 설정\n├── .prettierignore # prettier 검사 제외 설정\n├── .stylelintignore # stylelint 검사 제외 설정\n├── .versionrc # 자동 버전 번호 및 업데이트 기록 설정\n├── CHANGELOG.md # 업데이트 기록\n├── commitlint.config.js # git commit 규칙 설정\n├── index.html # 엔트리 페이지\n├── package.json\n├── .postcssrc.js # postcss 설정\n├── prettier.config.js # prettier 설정\n├── README.md # 영어 README\n├── README.zh-CN.md # 중국어 README\n├── stylelint.config.js # stylelint 설정\n├── tsconfig.json # typescript 설정\n├── vite.config.ts # vite 설정\n└── uno.config.ts # unocss 설정\n</code></pre></div><h2 id="브라우저-지원"><a class="header-anchor" href="#브라우저-지원" aria-hidden="true">#</a> 브라우저 지원</h2><p><strong>로컬개발</strong>에는<code>Chrome 최신버전</code>브라우저를 사용하는 것이 좋습니다.</p><p>Vue 3는 IE11을 지원하지 않으므로, 본 프로젝트도 IE를 지원하지 않습니다.</p><table><thead><tr><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"></a>IE</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px"></a>Edge</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px"></a>Firefox</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px"></a>Chrome</th><th style="text-align:center;"><a href="http://godban.github.io/browsers-support-badges/" target="_blank" rel="noopener noreferrer"><img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px"></a>Safari</th></tr></thead><tbody><tr><td style="text-align:center;">not support</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td><td style="text-align:center;">last 2 versions</td></tr></tbody></table><h2 id="ide-추천"><a class="header-anchor" href="#ide-추천" aria-hidden="true">#</a> IDE 추천</h2><ul><li><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">VSCode</a></li></ul>',13);o.render=function(n,a,o,l,h,p){return e(),t("div",null,[r(" # 소개 "),r(" ::: warning 주의\n\n- 如果需要 v1 版本的文档，请到 [v1](https://github.com/kailong321200875/vue-element-plus-admin-doc/tree/v1) 分支进行 clone ，目前文档仅支持 v2 版本\n\n::: "),s,r(" ::: warning 주의\n\n- 由于精力有限，[template](https://github.com/kailong321200875/vue-element-plus-admin/tree/template) 分支将不再维护，如果需要精简版，请自行删除不需要的文件及代码。\n\n::: "),r(" 如需要基础模版，请切换到 [mini](https://github.com/kailong321200875/vue-element-plus-admin/tree/mini) 分支，[mini](https://github.com/kailong321200875/vue-element-plus-admin/tree/mini) 只简单集成了一些如：布局、动态菜单等常用布局功能，更适合开发者进行二次开发。 "),i])};export default o;export{a as __pageData};
