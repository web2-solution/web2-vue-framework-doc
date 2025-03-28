import{_ as a,f as n,k as s,N as t}from"./plugin-vue_export-helper.e5331ba5.js";const g='{"title":"Avatar \uBAA9\uB85D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":2,"title":"Avatars \uC18D\uC131","slug":"avatars-\uC18D\uC131"},{"level":3,"title":"data","slug":"data"}],"relativePath":"components/avatars.md","lastUpdated":1743147353240}',p={},e=t(`<h1 id="avatar-\uBAA9\uB85D"><a class="header-anchor" href="#avatar-\uBAA9\uB85D" aria-hidden="true">#</a> Avatar \uBAA9\uB85D</h1><p>\uC544\uBC14\uD0C0 \uBAA8\uC74C</p><p>Avatars \uCEF4\uD3EC\uB10C\uD2B8 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Avatars" target="_blank" rel="noopener noreferrer">src/components/Avatars</a></p><h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatars <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Avatars&#39;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> ref<span class="token operator">&lt;</span>AvatarItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Lily&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459374?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Amanda&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459375?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Daisy&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459376?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Olivia&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459377?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Tina&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459378?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Kitty&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459323?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Helen&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459324?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Sophia&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459325?v=4&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Wendy&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;https://avatars.githubusercontent.com/u/3459326?v=4&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Avatars</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="avatars-\uC18D\uC131"><a class="header-anchor" href="#avatars-\uC18D\uC131" aria-hidden="true">#</a> Avatars \uC18D\uC131<span id="Avatars"></span></h2><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC635\uC158</th><th>\uAE30\uBCF8\uAC12</th></tr></thead><tbody><tr><td>size</td><td>\uC544\uBC14\uD0C0 \uD06C\uAE30</td><td><code>ComponentSize\u3001number</code></td><td>-</td><td>-</td></tr><tr><td>max</td><td>\uCD5C\uB300 \uD45C\uC2DC \uAC1C\uC218</td><td><code>number</code></td><td>-</td><td>5</td></tr><tr><td>data</td><td>\uC544\uBC14\uD0C0 \uB370\uC774\uD130\uFF0C<a href="#data">\uC790\uC138\uD788\uBCF4\uAE30</a></td><td><code>AvatarItem[]</code></td><td>-</td><td>-</td></tr><tr><td>showTooltip</td><td>\uD234\uD301 \uD45C\uC2DC\uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>true</td></tr></tbody></table><h3 id="data"><a class="header-anchor" href="#data" aria-hidden="true">#</a> data<span id="data"></span></h3><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC635\uC158</th><th>\uAE30\uBCF8\uAC12</th></tr></thead><tbody><tr><td>url</td><td>\uC774\uBBF8\uC9C0 url</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>name</td><td>\uC774\uB984\uFF0C(\uC120\uD0DD\uC801 \uC694\uC18C)</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>`,9),o=[e];function r(c,l,u,i,k,d){return s(),n("div",null,o)}var v=a(p,[["render",r]]);export{g as __pageData,v as default};
