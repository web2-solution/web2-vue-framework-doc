import{o as n,c as a,a as s}from"./app.4ba3de9e.js";const t='{"title":"Waterfall 격자형 레이아웃 컴포넌트","description":"","frontmatter":{},"headers":[{"level":2,"title":"사용법","slug":"사용법"},{"level":2,"title":"Waterfall 속성","slug":"waterfall-속성"},{"level":2,"title":"Waterfall 이벤트","slug":"waterfall-이벤트"}],"relativePath":"components/waterfall.md","lastUpdated":1722835573431}',p={},o=s('<h1 id="waterfall-격자형-레이아웃-컴포넌트"><a class="header-anchor" href="#waterfall-격자형-레이아웃-컴포넌트" aria-hidden="true">#</a> Waterfall 격자형 레이아웃 컴포넌트</h1><p>격자형 레이아웃 컴포넌트</p><p>Waterfall 컴포넌트 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Waterfall" target="_blank" rel="noopener noreferrer">src/components/Waterfall</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>data 데이터는 반드시 높이 필드를 포함해야 하며, 이는 올바른 위치를 계산하는 데 필요합니다.</p></div><h2 id="사용법"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Waterfall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Waterfall&#39;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> toAnyString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils&#39;</span>\n\n<span class="token keyword">const</span> data <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> list<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 100과 500 사이의 무작위 정수</span>\n    <span class="token keyword">const</span> height <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n    <span class="token keyword">const</span> width <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>\n    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n      Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        width<span class="token punctuation">,</span>\n        height<span class="token punctuation">,</span>\n        id<span class="token operator">:</span> <span class="token function">toAnyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        image_uri<span class="token operator">:</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">unref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">]</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    end<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">loadMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waterfall</span>\n    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\n      src: <span class="token punctuation">&#39;</span>image_uri<span class="token punctuation">&#39;</span>,\n      height: <span class="token punctuation">&#39;</span>height<span class="token punctuation">&#39;</span>\n    }<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">@load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadMore<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="waterfall-속성"><a class="header-anchor" href="#waterfall-속성" aria-hidden="true">#</a> Waterfall 속성<span id="Waterfall"></span></h2><table><thead><tr><th>속성</th><th>설명</th><th>타입</th><th>선택 가능 값</th><th>기본값</th></tr></thead><tbody><tr><td>data</td><td>표시할 데이터</td><td><code>Array</code></td><td>-</td><td>-</td></tr><tr><td>reset</td><td>창 크기 변경 시 레이아웃 재구성 여부</td><td><code>boolean</code></td><td>true/false</td><td>true</td></tr><tr><td>width</td><td>각 항목의 너비</td><td><code>number</code></td><td>-</td><td>200</td></tr><tr><td>gap</td><td>각 항목의 간격</td><td><code>number</code></td><td>-</td><td>20</td></tr><tr><td>loadingText</td><td>로딩 중 텍스트</td><td><code>string</code></td><td>-</td><td>로딩 중...</td></tr><tr><td>loading</td><td>로딩 중 여부</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>end</td><td>로딩 완료 여부</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>endText</td><td>로딩 완료 텍스트 여부</td><td><code>string</code></td><td>-</td><td>더 이상 없습니다</td></tr><tr><td>props</td><td>필드 별칭</td><td><code>object</code></td><td>-</td><td>{ src: &#39;src&#39;, height: &#39;height&#39; }</td></tr></tbody></table><h2 id="waterfall-이벤트"><a class="header-anchor" href="#waterfall-이벤트" aria-hidden="true">#</a> Waterfall 이벤트</h2><table><thead><tr><th>함수 명</th><th>설명</th><th>콜백 파라미터</th></tr></thead><tbody><tr><td>loadMore</td><td>더 많은 데이터 로드 이벤트</td><td>-</td></tr></tbody></table>',10);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};