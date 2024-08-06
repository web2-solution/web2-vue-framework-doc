import{o as t,c as a,b as n,d as s,e,a as o}from"./app.4ba3de9e.js";const p='{"title":"Editor 리치 텍스트 컴포넌트","description":"","frontmatter":{},"headers":[{"level":2,"title":"사용법","slug":"사용법"},{"level":2,"title":"Editor 속성","slug":"editor-속성"},{"level":2,"title":"Editor 이벤트","slug":"editor-이벤트"},{"level":2,"title":"Editor 메소드","slug":"editor-메소드"}],"relativePath":"components/editor.md","lastUpdated":1722835573425}',d={},r=s("h1",{id:"editor-리치-텍스트-컴포넌트"},[s("a",{class:"header-anchor",href:"#editor-리치-텍스트-컴포넌트","aria-hidden":"true"},"#"),e(" Editor 리치 텍스트 컴포넌트")],-1),c=s("p",null,[e("wangeditor를 기반으로 확장。 "),n(" (https://www.wangeditor.com/) ")],-1),l=s("p",null,[e("현재 프로젝트의 "),s("code",null,"editor"),e(" 는 기본적인 패키지일 뿐이며,")],-1),i=s("p",null,[e("개발자는 필요에따라 "),s("code",null,"editorConfig"),e(" 속성을 직접 설정해야 합니다, 예를 들어, 이미지 업로드와 같은 기능을 설정할 수 있습니다。")],-1),u=o('<p>Editor 컴포넌트 <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Editor" target="_blank" rel="noopener noreferrer">src/components/Editor</a></p><h2 id="사용법"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Editor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Editor&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n\n<span class="token keyword">const</span> defaultHtml <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;p&gt;hello &lt;strong&gt;world&lt;/strong&gt;&lt;/p&gt;&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">html<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Editor</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>defaultHtml<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>editorRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="editor-속성"><a class="header-anchor" href="#editor-속성" aria-hidden="true">#</a> Editor 속성</h2><table><thead><tr><th>속성</th><th>설명</th><th>타입</th><th>선택 가능 값</th><th>기본값</th></tr></thead><tbody><tr><td>editorId</td><td>리치 텍스트 컴포넌트 고유 값, 필수 항목</td><td><code>string</code></td><td>-</td><td>wangeEditor-1</td></tr><tr><td>height</td><td>높이</td><td><code>string</code>/<code>number</code></td><td>-</td><td>500px</td></tr><tr><td>editorConfig</td><td>wangeditor 컴포넌트의 모든 설정 항목</td><td><code>IEditorConfig</code></td><td>-</td><td>-</td></tr><tr><td>modelValue</td><td>양방향 바인딩, v-model 지원</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table><h2 id="editor-이벤트"><a class="header-anchor" href="#editor-이벤트" aria-hidden="true">#</a> Editor 이벤트</h2><table><thead><tr><th>함수 명</th><th>설명</th><th>콜백 파라미터</th></tr></thead><tbody><tr><td>change</td><td>내용이 변경될 때 &#39;editor&#39; 인스턴스 반환</td><td>editor: IDomEditor</td></tr></tbody></table><h2 id="editor-메소드"><a class="header-anchor" href="#editor-메소드" aria-hidden="true">#</a> Editor 메소드</h2><table><thead><tr><th>함수 명</th><th>설명</th><th>콜백 파라미터</th></tr></thead><tbody><tr><td>getEditorRef</td><td>editor 인스턴스 가져오기</td><td><code>() =&gt; Promise&lt;IDomEditor&gt;</code></td></tr></tbody></table>',9);d.render=function(s,e,o,p,d,k){return t(),a("div",null,[r,c,l,i,n(" [wangeditor문서](https://www.wangeditor.com/v5/) "),u])};export default d;export{p as __pageData};