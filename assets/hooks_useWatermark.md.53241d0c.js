import{_ as a,f as n,k as s,N as t}from"./plugin-vue_export-helper.e5331ba5.js";const h='{"title":"useWatermark","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":3,"title":"\uD30C\uB77C\uBBF8\uD130 \uC124\uBA85","slug":"\uD30C\uB77C\uBBF8\uD130-\uC124\uBA85"}],"relativePath":"hooks/useWatermark.md","lastUpdated":1728362138529}',e={},p=t(`<h1 id="usewatermark"><a class="header-anchor" href="#usewatermark" aria-hidden="true">#</a> useWatermark</h1><p>\uC694\uC18C\uC5D0 \uC6CC\uD130\uB9C8\uD06C\uB97C \uC124\uC815\uD569\uB2C8\uB2E4</p><p>useWatermark \uC740 <a href="https://github.com/web2-solution/web2-vue-framework/blob/demo/src/hooks/web/useWatermark.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useWatermark.ts</a> \uD30C\uC77C\uC5D0 \uC704\uCE58\uD574 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useWatermark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useWatermark&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> setWatermark<span class="token punctuation">,</span> clear <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">setWatermark</span><span class="token punctuation">(</span><span class="token string">&#39;WiLS&#39;</span><span class="token punctuation">)</span>

<span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="\uD30C\uB77C\uBBF8\uD130-\uC124\uBA85"><a class="header-anchor" href="#\uD30C\uB77C\uBBF8\uD130-\uC124\uBA85" aria-hidden="true">#</a> \uD30C\uB77C\uBBF8\uD130 \uC124\uBA85</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> setWatermark<span class="token punctuation">,</span> clear <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>setWatermark</strong></p><p><code>setWatermark</code>\uB294 \uC6CC\uD130\uB9C8\uD06C \uBB38\uAD6C\uB97C \uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9\uB418\uBA70, <code>string</code> \uD0C0\uC785\uC758 \uB9E4\uAC1C\uBCC0\uC218\uB97C \uBC1B\uC2B5\uB2C8\uB2E4.</p><p><strong>clear</strong></p><p><code>clear</code>\uB294 \uC6CC\uD130\uB9C8\uD06C\uB97C \uC81C\uAC70\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4.</p>`,11),o=[p];function c(r,u,l,k,i,d){return s(),n("div",null,o)}var _=a(e,[["render",c]]);export{h as __pageData,_ as default};