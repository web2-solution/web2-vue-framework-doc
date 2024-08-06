import{o as t,c as a,a as n}from"./app.4ba3de9e.js";const e='{"title":"IAgree 컴포넌트","description":"","frontmatter":{},"headers":[{"level":2,"title":"사용법","slug":"사용법"},{"level":2,"title":"Avatars 속성","slug":"avatars-속성"},{"level":3,"title":"link","slug":"link"}],"relativePath":"components/i-agree.md","lastUpdated":1722835573427}',s={},d=n('<h1 id="iagree-컴포넌트"><a class="header-anchor" href="#iagree-컴포넌트" aria-hidden="true">#</a> IAgree 컴포넌트</h1><p>동의 약관 옵션에 사용됩니다.</p><p>IAgree 컴포넌트 <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/IAgree" target="_blank" rel="noopener noreferrer">src/components/IAgree</a></p><h2 id="사용법"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IAgree</span>\n    <span class="token attr-name">:link</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[\n      {\n        text: <span class="token punctuation">&#39;</span>웹투게더<span class="token punctuation">&#39;</span>,\n        url: <span class="token punctuation">&#39;</span>http://www.web2gether.co.kr/<span class="token punctuation">&#39;</span>\n      }\n    ]<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>웹투게더<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="avatars-속성"><a class="header-anchor" href="#avatars-속성" aria-hidden="true">#</a> Avatars 속성<span id="Avatars"></span></h2><table><thead><tr><th>속성</th><th>설명</th><th>타입</th><th>선택 가능 값</th><th>기본값</th></tr></thead><tbody><tr><td>text</td><td>텍스트</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>link</td><td>링크가 필요한 하이라이트 데이터 <a href="#link">자세히 보기</a></td><td><code>LinkItem[]</code></td><td>-</td><td>-</td></tr></tbody></table><h3 id="link"><a class="header-anchor" href="#link" aria-hidden="true">#</a> link<span id="link"></span></h3><table><thead><tr><th>속성</th><th>설명</th><th>타입</th><th>선택 가능 값</th><th>기본값</th></tr></thead><tbody><tr><td>url</td><td>url주소，필수항목 X</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>text</td><td>하이라이트 텍스트</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>onClick</td><td>클릭했을 대 이벤트, 필수항목 X</td><td><code>() =&gt; void</code></td><td>-</td><td>-</td></tr></tbody></table>',9);s.render=function(n,e,s,p,o,r){return t(),a("div",null,[d])};export default s;export{e as __pageData};
