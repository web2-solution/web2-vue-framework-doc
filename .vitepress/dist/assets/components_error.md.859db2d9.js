import{o as a,c as t,a as n}from"./app.4ba3de9e.js";const s='{"title":"Error 기본 컴포넌트","description":"","frontmatter":{},"headers":[{"level":2,"title":"사용법","slug":"사용법"},{"level":2,"title":"Error 속성","slug":"error-속성"},{"level":2,"title":"Error 이벤트","slug":"error-이벤트"},{"level":2,"title":"새로운 유형을 확장하는 방법","slug":"새로운-유형을-확장하는-방법"}],"relativePath":"components/error.md","lastUpdated":1722835573425}',e={},r=n('<h1 id="error-기본-컴포넌트"><a class="header-anchor" href="#error-기본-컴포넌트" aria-hidden="true">#</a> Error 기본 컴포넌트</h1><p><code>404</code>,<code>403</code>,<code>500</code> 등 다양한 오류 페이지와 같은 컴포넌트에 사용됩니다。</p><p>Error 컴포넌트 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Error" target="_blank" rel="noopener noreferrer">src/components/Error</a></p><h2 id="사용법"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Error <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Error&#39;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Error</span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="error-속성"><a class="header-anchor" href="#error-속성" aria-hidden="true">#</a> Error 속성</h2><table><thead><tr><th>속성</th><th>설명</th><th>타입</th><th>선택 가능 값</th><th>기본값</th></tr></thead><tbody><tr><td>type</td><td>대체 화면 유형을 설정</td><td><code>string</code></td><td>-</td><td>404</td></tr></tbody></table><h2 id="error-이벤트"><a class="header-anchor" href="#error-이벤트" aria-hidden="true">#</a> Error 이벤트</h2><table><thead><tr><th>함수 명</th><th>설명</th><th>콜백 파라미터</th></tr></thead><tbody><tr><td>errorClick</td><td>버튼 클릭 후의 콜백</td><td>-</td></tr></tbody></table><h2 id="새로운-유형을-확장하는-방법"><a class="header-anchor" href="#새로운-유형을-확장하는-방법" aria-hidden="true">#</a> 새로운 유형을 확장하는 방법</h2><p>현재는 <code>404</code>, <code>403</code>, <code>500</code>의 세 가지 유형만 제공됩니다. 만약 실제 요구에 맞지 않는 경우, 직접 확장할 수 있습니다.</p><p><a href="https://github.com/web2-solution/web2-vue-framework/blob/demo/src/components/Error/src/Error.vue" target="_blank" rel="noopener noreferrer">src/components/Error/src/Error.vue</a> 파일의 <code>errorMap</code> 객체에서 해당 유형을 확장하면 됩니다。</p>',12);e.render=function(n,s,e,o,p,c){return a(),t("div",null,[r])};export default e;export{s as __pageData};
