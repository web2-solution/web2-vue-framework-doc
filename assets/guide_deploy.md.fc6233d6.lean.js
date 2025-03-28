import{_ as e,f as n,k as s,N as a}from"./plugin-vue_export-helper.e5331ba5.js";const m='{"title":"\uBE4C\uB4DC & \uBC30\uD3EC","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uBE4C\uB4DC","slug":"\uBE4C\uB4DC"},{"level":3,"title":"\uBBF8\uB9AC\uBCF4\uAE30","slug":"\uBBF8\uB9AC\uBCF4\uAE30"},{"level":2,"title":"\uBC30\uD3EC","slug":"\uBC30\uD3EC"}],"relativePath":"guide/deploy.md","lastUpdated":1743147353242}',t={},p=a(`__VP_STATIC_START__<h1 id="\uBE4C\uB4DC-\uBC30\uD3EC"><a class="header-anchor" href="#\uBE4C\uB4DC-\uBC30\uD3EC" aria-hidden="true">#</a> \uBE4C\uB4DC &amp; \uBC30\uD3EC</h1><h2 id="\uBE4C\uB4DC"><a class="header-anchor" href="#\uBE4C\uB4DC" aria-hidden="true">#</a> \uBE4C\uB4DC</h2><p>\uD504\uB85C\uC81D\uD2B8 \uAC1C\uBC1C\uC774 \uC644\uB8CC\uB41C \uD6C4, \uB2E4\uC74C \uBA85\uB839\uC5B4\uB97C \uC2E4\uD589\uD558\uC5EC \uBE4C\uB4DC\uB97C \uC218\uD589\uD569\uB2C8\uB2E4.</p><ul><li>\uAC1C\uBC1C \uD658\uACBD pnpm run build:dev ===&gt; dist-dev</li><li>\uD14C\uC2A4\uD2B8 \uD658\uACBD pnpm run build:test ===&gt; dist-test</li><li>\uD504\uB85C\uB355\uC158 \uD658\uACBD pnpm run build:pro ===&gt; dist-pro</li></ul><p>\uBE4C\uB4DC\uAC00 \uC131\uACF5\uC801\uC73C\uB85C \uC644\uB8CC\uB418\uBA74, \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0 dist-* \uD3F4\uB354\uAC00 \uC0DD\uC131\uB418\uBA70, \uADF8 \uC548\uC5D0 \uBE4C\uB4DC\uB41C \uD30C\uC77C\uB4E4\uC774 \uD3EC\uD568\uB429\uB2C8\uB2E4.</p><h3 id="\uBBF8\uB9AC\uBCF4\uAE30"><a class="header-anchor" href="#\uBBF8\uB9AC\uBCF4\uAE30" aria-hidden="true">#</a> \uBBF8\uB9AC\uBCF4\uAE30</h3><p>\uBC30\uD3EC\uD558\uAE30 \uC804\uC5D0 \uB85C\uCEEC\uC5D0\uC11C \uBBF8\uB9AC\uBCF4\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><strong>\uBE4C\uB4DC\uB41C HTML \uD30C\uC77C\uC744 \uC9C1\uC811 \uC5F4\uBA74 \uC548 \uB429\uB2C8\uB2E4.</strong></p><p>\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uBA85\uB839\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBE4C\uB4DC\uB41C \uACB0\uACFC\uBB3C\uC744 \uBBF8\uB9AC\uBCF4\uAE30\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-bash"><pre><code><span class="token comment"># \uBA3C\uC800 \uBE4C\uB4DC\uD55C \uD6C4 \uBBF8\uB9AC\uBCF4\uAE30</span>

<span class="token comment"># \uAC1C\uBC1C \uD658\uACBD \uBBF8\uB9AC\uBCF4\uAE30</span>
<span class="token function">pnpm</span> run serve:dev

<span class="token comment"># \uD14C\uC2A4\uD2B8 \uD658\uACBD \uBBF8\uB9AC\uBCF4\uAE30</span>
<span class="token function">pnpm</span> run serve:test

<span class="token comment"># \uD504\uB85C\uB355\uC158 \uD658\uACBD \uBBF8\uB9AC\uBCF4\uAE30</span>
<span class="token function">pnpm</span> run serve:pro
</code></pre></div><h2 id="\uBC30\uD3EC"><a class="header-anchor" href="#\uBC30\uD3EC" aria-hidden="true">#</a> \uBC30\uD3EC</h2><p>\uAC04\uB2E8\uD55C \uBC30\uD3EC\uB294 \uCD5C\uC885\uC801\uC73C\uB85C \uC0DD\uC131\uB41C \uC815\uC801 \uD30C\uC77C, \uC989 dist-* \uD3F4\uB354 \uB0B4\uC758 \uC815\uC801 \uD30C\uC77C\uC744 CDN \uB610\uB294 \uC815\uC801 \uC11C\uBC84\uC5D0 \uBC30\uD3EC\uD558\uB294 \uAC83\uC73C\uB85C \uCDA9\uBD84\uD569\uB2C8\uB2E4.</p><p><strong>\uBC30\uD3EC \uC911 \uB9AC\uC18C\uC2A4 \uACBD\uB85C\uAC00 \uC798\uBABB \uC9C0\uC815\uB41C \uACBD\uC6B0, \uD574\uB2F9 <code>.env.xxx</code> \uD30C\uC77C\uC744 \uC218\uC815\uD574 \uBB38\uC81C\uB97C \uD574\uACB0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</strong></p><div class="language-bash"><pre><code><span class="token comment"># \uD504\uB85C\uC81D\uD2B8 \uACBD\uB85C\uC5D0 \uB9DE\uAC8C \uC124\uC815\uC744 \uBCC0\uACBD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</span>
VITE_BASE_PATH <span class="token operator">=</span> /dist-dev
</code></pre></div>__VP_STATIC_END__`,14),r=[p];function o(d,l,c,i,h,u){return s(),n("div",null,r)}var v=e(t,[["render",o]]);export{m as __pageData,v as default};
