import{o as e,c as a,a as o}from"./app.4ba3de9e.js";const l='{"title":"서문","description":"","frontmatter":{},"headers":[{"level":2,"title":"store의 기본값을 수정했지만 적용되지 않는 문제","slug":"store의-기본값을-수정했지만-적용되지-않는-문제"},{"level":2,"title":"콘솔 라우트 경고 문제","slug":"콘솔-라우트-경고-문제"},{"level":2,"title":"로컬에서 처음 실행할 때 로딩이 느림","slug":"로컬에서-처음-실행할-때-로딩이-느림"},{"level":2,"title":"라우트 전환 시 페이지가 새로고침되는 문제","slug":"라우트-전환-시-페이지가-새로고침되는-문제"},{"level":2,"title":"의존성 설치 문제","slug":"의존성-설치-문제"},{"level":2,"title":"패키지 파일이 너무 큽니다","slug":"패키지-파일이-너무-큽니다"},{"level":2,"title":"배포 후 애플리케이션 실행이 느린 경우","slug":"배포-후-애플리케이션-실행이-느린-경우"},{"level":2,"title":"메뉴 커스터마이징","slug":"메뉴-커스터마이징"},{"level":2,"title":"컴포넌트 사용 문제","slug":"컴포넌트-사용-문제"},{"level":2,"title":"Editor 코드 오류","slug":"editor-코드-오류"},{"level":2,"title":"라우트를 추가한 후, 페이지가 표시되지 않는 문제","slug":"라우트를-추가한-후-페이지가-표시되지-않는-문제"},{"level":2,"title":"새로운 Vue 파일을 추가한 후, 편집기에서 타입 오류가 발생함","slug":"새로운-vue-파일을-추가한-후-편집기에서-타입-오류가-발생함"},{"level":2,"title":"오프라인 아이콘을 활성화하는 방법","slug":"오프라인-아이콘을-활성화하는-방법"}],"relativePath":"guide/fqa.md","lastUpdated":1722835573435}',r={},d=o('<h1 id="서문"><a class="header-anchor" href="#서문" aria-hidden="true">#</a> 서문</h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>몇 가지 일반적인 문제를 나열했습니다. 문제가 있을 경우 먼저 여기에서 찾아보시고 관련 답변이 있는지 확인하세요.</p><p>답변이 없으면 <a href="https://github.com/web2-solution/web2-vue-framework/issues" target="_blank" rel="noopener noreferrer">issue</a> 에서 질문하거나 검색해 보세요.</p></div><ul><li>개발을 진행할 때, 먼저 <a href="https://element-plus-admin-doc.cn/guide/introduction.html" target="_blank" rel="noopener noreferrer">프로젝트 가이드</a>를 주의 깊게 읽어보세요. 전체 문서를 살펴보는 것이 좋습니다.</li><li>프레임워크 외의 문제는 Google에서 검색해 보세요.</li><li>해결이 어렵다면, 커뮤니티에서 질문하고 서로 논의해 보세요.</li><li>문서가 오래되었거나 불명확한 부분이 있으면 issue를 제기하여 점진적으로 개선해 나가세요.</li></ul><h2 id="store의-기본값을-수정했지만-적용되지-않는-문제"><a class="header-anchor" href="#store의-기본값을-수정했지만-적용되지-않는-문제" aria-hidden="true">#</a> store의 기본값을 수정했지만 적용되지 않는 문제</h2><p>프로젝트에서 일부 Store가 기본적으로 지속화(persistent) 되어 있기 때문에, 기본값을 수정했더라도 캐시된 값이 우선적으로 사용됩니다. 따라서 기본값을 수정한 후에는 브라우저의 <code>localStorage</code>를 수동으로 삭제해 주세요. 그러면 기본값이 제대로 적용될 것입니다.</p><h2 id="콘솔-라우트-경고-문제"><a class="header-anchor" href="#콘솔-라우트-경고-문제" aria-hidden="true">#</a> 콘솔 라우트 경고 문제</h2><p>로컬에서 실행한 후 라우트 경고가 나타납니다.</p><div class="language-js"><pre><code><span class="token punctuation">[</span>Vue Router warn<span class="token punctuation">]</span><span class="token operator">:</span> No match found <span class="token keyword">for</span> location <span class="token keyword">with</span> path <span class="token string">&quot;/authorization/menu&quot;</span>\n</code></pre></div><p>이 문제는 신경 쓸 필요 없습니다. 이는 vue-router와 관련된 문제로, 프로젝트를 빌드하여 배포한 후에는 이러한 경고가 나타나지 않으므로, 이 문제는 무시해도 됩니다.</p><h2 id="로컬에서-처음-실행할-때-로딩이-느림"><a class="header-anchor" href="#로컬에서-처음-실행할-때-로딩이-느림" aria-hidden="true">#</a> 로컬에서 처음 실행할 때 로딩이 느림</h2><p>로컬에서 실행할 때는 필요에 따라 여러 리소스를 한 번에 로드하기 때문에 처음에는 비교적 느릴 수 있습니다. 하지만 캐시가 적용된 이후에는 첫 로딩 시간 문제는 해결되어, 비슷한 작업을 반복할 때는 거의 즉시 열리게 됩니다.</p><p>Vite가 어떻게 빠른지에 대해서는 직접 Google에서 검색해 보세요.</p><p>현재 프로젝트에서는 시작 시간을 최적화했습니다. 로컬에서는 기본적으로 모든 <code>element-plus</code> 스타일 파일을 로드하도록 설정하여, 요청하는 리소스의 수를 줄였습니다</p><p>시작 속도는 현재 파일에서 참조하는 리소스의 수에 따라 결정됩니다.</p><h2 id="라우트-전환-시-페이지가-새로고침되는-문제"><a class="header-anchor" href="#라우트-전환-시-페이지가-새로고침되는-문제" aria-hidden="true">#</a> 라우트 전환 시 페이지가 새로고침되는 문제</h2><p>이 문제는 해당 라우트에서 사용한 제3자 모듈이 미리 로드되지 않아서 발생합니다. 이 모듈을 다시 로드해야 하며, 이로 인해 <code>page reload</code>가 발생할 수 있습니다. 이로 인해 개발 중 불편함이 커질 수 있습니다. 따라서 <code>vite.config.ts</code>에서 사전 로드 목록인 <code>optimizeDeps.include</code>를 구성하여 서비스 시작 시 이러한 모듈을 미리 로드하고 패키징하도록 할 수 있습니다</p><h2 id="의존성-설치-문제"><a class="header-anchor" href="#의존성-설치-문제" aria-hidden="true">#</a> 의존성 설치 문제</h2><ul><li>의존성 설치가 되지 않거나 시작 시 오류가 발생하는 경우, 먼저 <code>pnpm-lock</code> 파일과 <code>node_modules</code> 폴더를 삭제한 후 <code>pnpm i</code> 명령어를 다시 실행해 보세요.</li><li>국내 미러를 사용하여 설치를 시도해 보세요.</li><li>프로젝트 경로에 한글, 일본어, 중국어 등의 특수 문자나 공백이 없는지 확인하세요.</li><li>Node.js 버전이 18 이상인지 확인하세요.</li><li>패키지 관리자로 pnpm을 사용하고 있는지 확인하세요.</li></ul><h2 id="패키지-파일이-너무-큽니다"><a class="header-anchor" href="#패키지-파일이-너무-큽니다" aria-hidden="true">#</a> 패키지 파일이 너무 큽니다</h2><p>전체 버전에서는 많은 제3자 모듈을 포함하고 있기 때문에 패키지 파일 크기가 상대적으로 클 수 있습니다. 필요하지 않은 제3자 모듈을 제거하거나, 더 가벼운 버전을 사용하여 개발할 수 있습니다.</p><p>합리적으로 코드 분할을 수행하며, 현재 프로젝트에서는 일부 큰 제3자 모듈에 대해 코드 분할을 적용하였습니다</p><h2 id="배포-후-애플리케이션-실행이-느린-경우"><a class="header-anchor" href="#배포-후-애플리케이션-실행이-느린-경우" aria-hidden="true">#</a> 배포 후 애플리케이션 실행이 느린 경우</h2><ul><li>패키지 파일 크기가 적절한지 확인하세요.</li><li>네트워크가 정상적으로 작동하는지 확인하세요.</li><li>CDN 캐시를 활성화할 수 있습니다.</li><li>HTTP2를 활성화할 수 있습니다.</li><li>Gzip 압축을 활성화할 수 있습니다.</li></ul><h2 id="메뉴-커스터마이징"><a class="header-anchor" href="#메뉴-커스터마이징" aria-hidden="true">#</a> 메뉴 커스터마이징</h2><p>메뉴는 라우트 설정에 따라 생성됩니다. 기존 라우트 설정이 요구사항을 충족하는지 먼저 확인하세요. 만약 충족하지 않는다면, 직접 커스터마이징 할 수 있습니다.<a href="https://element-plus-admin-doc.cn/guide/router.html" target="_blank" rel="noopener noreferrer">라우트 관련 문서</a>를 참고해 보세요.</p><h2 id="컴포넌트-사용-문제"><a class="header-anchor" href="#컴포넌트-사용-문제" aria-hidden="true">#</a> 컴포넌트 사용 문제</h2><p>컴포넌트를 사용할 때 문제가 발생하면, 먼저 해당 온라인 예제를 확인하여 문제와 관련된 코드가 있는지 살펴보세요. 예제는 대체로 <code>95%</code>의 사용 방식을 커버하고 있습니다. 또는 해당 컴포넌트의 문서를 참조하여 문제를 해결할 수 있습니다.</p><h2 id="editor-코드-오류"><a class="header-anchor" href="#editor-코드-오류" aria-hidden="true">#</a> Editor 코드 오류</h2><p>프로젝트에서 대부분 <code>tsx</code>를 사용하므로, 기존의 <code>template</code> 코드 규칙이 적용되지 않을 수 있습니다. 예를 들어, <code>v-if</code> 대신 <code>{조건 ? 참 : 거짓}</code>을 사용하여 표시 여부를 제어해야 합니다. 관련 문서를 참고하세요.</p><p>그리고 <code>tsx</code> 문법을 사용하려면 <code>script</code>에 <code>lang=&quot;tsx&quot;</code>가 선언되어 있는지 확인하세요.</p><h2 id="라우트를-추가한-후-페이지가-표시되지-않는-문제"><a class="header-anchor" href="#라우트를-추가한-후-페이지가-표시되지-않는-문제" aria-hidden="true">#</a> 라우트를 추가한 후, 페이지가 표시되지 않는 문제</h2><p>프로젝트에 직접 정적 라우트를 추가하는 경우, appStore에서 <code>dynamicRouter</code>와 <code>serverDynamicRouter</code>가 <code>false</code>로 설정되어 있는지 확인하고, 브라우저의 <code>localStorage</code>를 수동으로 지우세요.</p><h2 id="새로운-vue-파일을-추가한-후-편집기에서-타입-오류가-발생함"><a class="header-anchor" href="#새로운-vue-파일을-추가한-후-편집기에서-타입-오류가-발생함" aria-hidden="true">#</a> 새로운 Vue 파일을 추가한 후, 편집기에서 타입 오류가 발생함</h2><p>이 문제는 <code>Volar</code> 플러그인과 관련된 문제입니다. 일반적으로 에디터를 재시작하면 해결됩니다.</p><h2 id="오프라인-아이콘을-활성화하는-방법"><a class="header-anchor" href="#오프라인-아이콘을-활성화하는-방법" aria-hidden="true">#</a> 오프라인 아이콘을 활성화하는 방법</h2><p>VITE_USE_ONLINE_ICON=false로 설정하면 일부 버전에서는 설정이 무효화될 수 있습니다. 이는 버그 때문입니다.</p><p>최신 버전의 <code>uno.config.ts</code>와 <code>Icon.vue</code> 코드를 복사하여 사용해 보세요.</p>',37);r.render=function(o,l,r,t,i,s){return e(),a("div",null,[d])};export default r;export{l as __pageData};
