import{o as n,c as a,a as s}from"./app.4ba3de9e.js";const t='{"title":"IconPicker 아이콘 선택 컴포넌트","description":"","frontmatter":{},"headers":[{"level":2,"title":"사용법","slug":"사용법"},{"level":2,"title":"다른 오픈 소스 프로젝트의 아이콘을 추가하는 방법","slug":"다른-오픈-소스-프로젝트의-아이콘을-추가하는-방법"},{"level":2,"title":"Icon 속성","slug":"icon-속성"}],"relativePath":"components/icon-picker.md","lastUpdated":1722835573427}',e={},o=s('<h1 id="iconpicker-아이콘-선택-컴포넌트"><a class="header-anchor" href="#iconpicker-아이콘-선택-컴포넌트" aria-hidden="true">#</a> IconPicker 아이콘 선택 컴포넌트</h1><p>Iconify 아이콘을 선택하는데 사용됩니다.</p><p>IconPicker 컴포넌트 <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/IconPicker" target="_blank" rel="noopener noreferrer">src/components/IconPicker</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>현재는 Ant Design Icons, Element Plus, TDesign Icons 세 가지 오픈 소스 프로젝트의 아이콘만 통합되어 있습니다.</p></div><h2 id="사용법"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> IconPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/IconPicker&#39;</span>\n\n<span class="token keyword">const</span> currentIcon <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;tdesign:book-open&#39;</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconPicker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentIcon<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="다른-오픈-소스-프로젝트의-아이콘을-추가하는-방법"><a class="header-anchor" href="#다른-오픈-소스-프로젝트의-아이콘을-추가하는-방법" aria-hidden="true">#</a> 다른 오픈 소스 프로젝트의 아이콘을 추가하는 방법</h2><p><code>pnpm run icon</code>을 실행한 후, 원하는 아이콘 세트를 선택할 수 있습니다.</p><p>그 후, <a href="https://github.com/web2-solution/web2-vue-framework/blob/demo/src/components/IconPicker/src/IconPicker.vue" target="_blank" rel="noopener noreferrer">IconPicker.vue</a> 에서 해당 아이콘을 가져와 <code>icons</code>에 추가하면 됩니다.</p><h2 id="icon-속성"><a class="header-anchor" href="#icon-속성" aria-hidden="true">#</a> Icon 속성<span id="Icon"></span></h2><table><thead><tr><th>속성</th><th>설명</th><th>타입</th><th>선택 가능 값</th><th>기본값</th></tr></thead><tbody><tr><td>modelValue</td><td>선택된 항목의 바인딩 값, v-model 지원</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>',11);e.render=function(s,t,e,p,c,r){return n(),a("div",null,[o])};export default e;export{t as __pageData};