import{o as n,c as s,a}from"./app.4ba3de9e.js";const t='{"title":"JsonEditor JSON 편집기 컴포넌트（2.2.0+）","description":"","frontmatter":{},"headers":[{"level":2,"title":"사용법","slug":"사용법"},{"level":2,"title":"JsonEditor 속성","slug":"jsoneditor-속성"},{"level":2,"title":"Editor 이벤트","slug":"editor-이벤트"}],"relativePath":"components/json-editor.md","lastUpdated":1722835573429}',p={},o=a('<h1 id="jsoneditor-json-편집기-컴포넌트（2-2-0-）"><a class="header-anchor" href="#jsoneditor-json-편집기-컴포넌트（2-2-0-）" aria-hidden="true">#</a> JsonEditor JSON 편집기 컴포넌트（2.2.0+）</h1><p><a href="https://leezng.github.io/vue-json-pretty/" target="_blank" rel="noopener noreferrer">vue-json-pretty</a>를 기반으로 래핑되었습니다.</p><p><a href="https://github.com/leezng/vue-json-pretty" target="_blank" rel="noopener noreferrer">vue-json-pretty문서</a></p><p>JsonEditor 컴포넌트 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/JsonEditor" target="_blank" rel="noopener noreferrer">src/components/JsonEditor</a></p><h2 id="사용법"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ContentWrap&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> JsonEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/JsonEditor&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useI18n&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  title<span class="token operator">:</span> <span class="token string">&#39;제목&#39;</span><span class="token punctuation">,</span>\n  content<span class="token operator">:</span> <span class="token string">&#39;내용&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token function">watch</span><span class="token punctuation">(</span>\n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> defaultData<span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n  <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    deep<span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  defaultData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token string">&#39;비동기 제목&#39;</span><span class="token punctuation">,</span>\n    content<span class="token operator">:</span> <span class="token string">&#39;비동기 내용&#39;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentWrap</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(<span class="token punctuation">&#39;</span>richText.jsonEditor<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(<span class="token punctuation">&#39;</span>richText.jsonEditorDes<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JsonEditor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentWrap</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="jsoneditor-속성"><a class="header-anchor" href="#jsoneditor-속성" aria-hidden="true">#</a> JsonEditor 속성</h2><p><a href="https://github.com/leezng/vue-json-pretty" target="_blank" rel="noopener noreferrer">vue-json-pretty 문서</a></p><h2 id="editor-이벤트"><a class="header-anchor" href="#editor-이벤트" aria-hidden="true">#</a> Editor 이벤트</h2><p><a href="https://github.com/leezng/vue-json-pretty" target="_blank" rel="noopener noreferrer">vue-json-pretty 문서</a></p>',10);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
