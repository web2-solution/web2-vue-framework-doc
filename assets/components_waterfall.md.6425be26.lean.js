import{_ as n,f as a,k as s,N as t}from"./plugin-vue_export-helper.e5331ba5.js";const h='{"title":"Waterfall \uACA9\uC790\uD615 \uB808\uC774\uC544\uC6C3 \uCEF4\uD3EC\uB10C\uD2B8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":2,"title":"Waterfall \uC18D\uC131","slug":"waterfall-\uC18D\uC131"},{"level":2,"title":"Waterfall \uC774\uBCA4\uD2B8","slug":"waterfall-\uC774\uBCA4\uD2B8"}],"relativePath":"components/waterfall.md","lastUpdated":1728362138527}',p={},o=t(`__VP_STATIC_START__<h1 id="waterfall-\uACA9\uC790\uD615-\uB808\uC774\uC544\uC6C3-\uCEF4\uD3EC\uB10C\uD2B8"><a class="header-anchor" href="#waterfall-\uACA9\uC790\uD615-\uB808\uC774\uC544\uC6C3-\uCEF4\uD3EC\uB10C\uD2B8" aria-hidden="true">#</a> Waterfall \uACA9\uC790\uD615 \uB808\uC774\uC544\uC6C3 \uCEF4\uD3EC\uB10C\uD2B8</h1><p>\uACA9\uC790\uD615 \uB808\uC774\uC544\uC6C3 \uCEF4\uD3EC\uB10C\uD2B8</p><p>Waterfall \uCEF4\uD3EC\uB10C\uD2B8 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Waterfall" target="_blank" rel="noopener noreferrer">src/components/Waterfall</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>data \uB370\uC774\uD130\uB294 \uBC18\uB4DC\uC2DC \uB192\uC774 \uD544\uB4DC\uB97C \uD3EC\uD568\uD574\uC57C \uD558\uBA70, \uC774\uB294 \uC62C\uBC14\uB978 \uC704\uCE58\uB97C \uACC4\uC0B0\uD558\uB294 \uB370 \uD544\uC694\uD569\uB2C8\uB2E4.</p></div><h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Waterfall <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Waterfall&#39;</span>
<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toAnyString <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils&#39;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> ref<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">getList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">list</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 100\uACFC 500 \uC0AC\uC774\uC758 \uBB34\uC791\uC704 \uC815\uC218</span>
    <span class="token keyword">const</span> height <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> width <span class="token operator">=</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">integer</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
      Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        width<span class="token punctuation">,</span>
        height<span class="token punctuation">,</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">toAnyString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">image_uri</span><span class="token operator">:</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>width<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  data<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">unref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span>list<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">unref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    end<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> end <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">loadMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waterfall</span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:props</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      src: &#39;image_uri&#39;,
      height: &#39;height&#39;
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loadMore<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="waterfall-\uC18D\uC131"><a class="header-anchor" href="#waterfall-\uC18D\uC131" aria-hidden="true">#</a> Waterfall \uC18D\uC131<span id="Waterfall"></span></h2><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC635\uC158</th><th>\uAE30\uBCF8\uAC12</th></tr></thead><tbody><tr><td>data</td><td>\uD45C\uC2DC\uD560 \uB370\uC774\uD130</td><td><code>Array</code></td><td>-</td><td>-</td></tr><tr><td>reset</td><td>\uCC3D \uD06C\uAE30 \uBCC0\uACBD \uC2DC \uB808\uC774\uC544\uC6C3 \uC7AC\uAD6C\uC131 \uC5EC\uBD80</td><td><code>boolean</code></td><td>true/false</td><td>true</td></tr><tr><td>width</td><td>\uAC01 \uD56D\uBAA9\uC758 \uB108\uBE44</td><td><code>number</code></td><td>-</td><td>200</td></tr><tr><td>gap</td><td>\uAC01 \uD56D\uBAA9\uC758 \uAC04\uACA9</td><td><code>number</code></td><td>-</td><td>20</td></tr><tr><td>loadingText</td><td>\uB85C\uB529 \uC911 \uD14D\uC2A4\uD2B8</td><td><code>string</code></td><td>-</td><td>\uB85C\uB529 \uC911...</td></tr><tr><td>loading</td><td>\uB85C\uB529 \uC911 \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>end</td><td>\uB85C\uB529 \uC644\uB8CC \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>endText</td><td>\uB85C\uB529 \uC644\uB8CC \uD14D\uC2A4\uD2B8 \uC5EC\uBD80</td><td><code>string</code></td><td>-</td><td>\uB354 \uC774\uC0C1 \uC5C6\uC2B5\uB2C8\uB2E4</td></tr><tr><td>props</td><td>\uD544\uB4DC \uBCC4\uCE6D</td><td><code>object</code></td><td>-</td><td>{ src: &#39;src&#39;, height: &#39;height&#39; }</td></tr></tbody></table><h2 id="waterfall-\uC774\uBCA4\uD2B8"><a class="header-anchor" href="#waterfall-\uC774\uBCA4\uD2B8" aria-hidden="true">#</a> Waterfall \uC774\uBCA4\uD2B8</h2><table><thead><tr><th>\uD568\uC218 \uBA85</th><th>\uC124\uBA85</th><th>\uCF5C\uBC31 \uD30C\uB77C\uBBF8\uD130</th></tr></thead><tbody><tr><td>loadMore</td><td>\uB354 \uB9CE\uC740 \uB370\uC774\uD130 \uB85C\uB4DC \uC774\uBCA4\uD2B8</td><td>-</td></tr></tbody></table>__VP_STATIC_END__`,10),e=[o];function c(l,u,r,k,i,d){return s(),a("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};