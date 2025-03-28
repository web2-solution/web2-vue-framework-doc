import{_ as s,f as t,q as e,g as a,s as n,N as p,k as o}from"./plugin-vue_export-helper.e5331ba5.js";const V='{"title":"VideoViewer \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30 \uCEF4\uD3EC\uB10C\uD2B8\uFF082.5.0+\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":2,"title":"VideoViewer","slug":"videoviewer"},{"level":3,"title":"\uD30C\uB77C\uBBF8\uD130","slug":"\uD30C\uB77C\uBBF8\uD130"}],"relativePath":"components/video-viewer.md","lastUpdated":1743147353241}',c={},l=a("h1",{id:"videoviewer-\uC774\uBBF8\uC9C0-\uBBF8\uB9AC\uBCF4\uAE30-\uCEF4\uD3EC\uB10C\uD2B8\uFF082-5-0-\uFF09"},[a("a",{class:"header-anchor",href:"#videoviewer-\uC774\uBBF8\uC9C0-\uBBF8\uB9AC\uBCF4\uAE30-\uCEF4\uD3EC\uB10C\uD2B8\uFF082-5-0-\uFF09","aria-hidden":"true"},"#"),n(" VideoViewer \uC774\uBBF8\uC9C0 \uBBF8\uB9AC\uBCF4\uAE30 \uCEF4\uD3EC\uB10C\uD2B8\uFF082.5.0+\uFF09")],-1),r=a("p",null,[a("code",null,"VideoPlayer"),n(" \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD568\uC218\uD615\uC73C\uB85C \uBCC0\uD658\uD558\uC5EC, \uD568\uC218\uB97C \uD1B5\uD574 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC27D\uAC8C \uC0DD\uC131\uD560 \uC218 \uC788\uB3C4\uB85D \uD569\uB2C8\uB2E4.")],-1),i=p(`__VP_STATIC_START__<h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> createVideoViewer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/VideoPlayer&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">createVideoViewer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&#39;//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9884\u89C8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h2 id="videoviewer"><a class="header-anchor" href="#videoviewer" aria-hidden="true">#</a> VideoViewer</h2><h3 id="\uD30C\uB77C\uBBF8\uD130"><a class="header-anchor" href="#\uD30C\uB77C\uBBF8\uD130" aria-hidden="true">#</a> \uD30C\uB77C\uBBF8\uD130</h3><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC120\uD0DD \uAC00\uB2A5 \uAC12</th><th>\uAE30\uBCF8\uAC12</th></tr></thead><tbody><tr><td>url</td><td>\uBE44\uB514\uC624 url \uC8FC\uC18C</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>poster</td><td>\uBE44\uB514\uC624 \uCEE4\uBC84 \uC774\uBBF8\uC9C0</td><td><code>string</code></td><td>-</td><td>-</td></tr></tbody></table>__VP_STATIC_END__`,5);function u(d,k,h,g,_,m){return o(),t("div",null,[l,r,e(" VideoViewer \uCEF4\uD3EC\uB10C\uD2B8 : [src/components/VideoViewer](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/VideoViewer) \u5185 (404)"),i])}var f=s(c,[["render",u]]);export{V as __pageData,f as default};
