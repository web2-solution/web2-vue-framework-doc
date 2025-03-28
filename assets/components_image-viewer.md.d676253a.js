import{_ as t,f as a,k as n,N as s}from"./plugin-vue_export-helper.e5331ba5.js";const h='{"title":"ImageViewer \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30 \uCEF4\uD3EC\uB10C\uD2B8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":2,"title":"createImageViewer","slug":"createimageviewer"},{"level":3,"title":"\uD30C\uB77C \uBBF8\uD130","slug":"\uD30C\uB77C-\uBBF8\uD130"}],"relativePath":"components/image-viewer.md","lastUpdated":1743147353241}',e={},p=s(`<h1 id="imageviewer-\uC774\uBBF8\uC9C0-\uBBF8\uB9AC\uBCF4\uAE30-\uCEF4\uD3EC\uB10C\uD2B8"><a class="header-anchor" href="#imageviewer-\uC774\uBBF8\uC9C0-\uBBF8\uB9AC\uBCF4\uAE30-\uCEF4\uD3EC\uB10C\uD2B8" aria-hidden="true">#</a> ImageViewer \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30 \uCEF4\uD3EC\uB10C\uD2B8</h1><p><code>element-plus</code>\uC758 <code>ImageViewer</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD568\uC218\uD615\uC73C\uB85C \uBCC0\uD658\uD558\uC5EC, \uD568\uC218\uB97C \uD1B5\uD574 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC27D\uAC8C \uC0DD\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.</p><p>ImageViewer \uCEF4\uD3EC\uB10C\uD2B8 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/ImageViewer" target="_blank" rel="noopener noreferrer">src/components/ImageViewer</a></p><h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> createImageViewer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ImageViewer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">createImageViewer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">urlList</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;https://test.jpg&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;https://test2.jpg&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;https://test3.jpg&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;https://test4.jpg&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;https://test5.jpg&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\uBBF8\uB9AC \uBCF4\uAE30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="createimageviewer"><a class="header-anchor" href="#createimageviewer" aria-hidden="true">#</a> createImageViewer</h2><h3 id="\uD30C\uB77C-\uBBF8\uD130"><a class="header-anchor" href="#\uD30C\uB77C-\uBBF8\uD130" aria-hidden="true">#</a> \uD30C\uB77C \uBBF8\uD130</h3><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC635\uC158</th><th>\uAE30\uBCF8\uAC12</th></tr></thead><tbody><tr><td>urlList</td><td>\uC0AC\uC9C4 \uBAA9\uB85D</td><td><code>string[]</code></td><td>-</td><td>-</td></tr><tr><td>zIndex</td><td>\uC694\uC18C \uB808\uBCA8</td><td><code>number</code></td><td>-</td><td>-</td></tr><tr><td>initialIndex</td><td>\uAE30\uBCF8\uC801\uC73C\uB85C \uBA87 \uBC88\uC9F8 \uC774\uBBF8\uC9C0\uB97C \uD45C\uC2DC\uD560\uC9C0 \uC124\uC815</td><td><code>number</code></td><td>-</td><td>1</td></tr><tr><td>infinite</td><td>\uBC18\uBCF5 \uC804\uD658\uC774 \uAC00\uB2A5\uD55C\uC9C0 \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>hideOnClickModal</td><td>\uD074\uB9AD\uD560 \uB54C \uB2EB\uD788\uB294\uC9C0 \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>appendToBody</td><td>body\uC5D0 \uCD94\uAC00\uD560\uC9C0 \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>show</td><td>\uBBF8\uB9AC\uBCF4\uAE30 \uD45C\uC2DC \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>false</td></tr></tbody></table>`,8),o=[p];function c(l,r,d,i,u,k){return n(),a("div",null,o)}var m=t(e,[["render",c]]);export{h as __pageData,m as default};
