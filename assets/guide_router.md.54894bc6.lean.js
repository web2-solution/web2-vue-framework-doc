import{_ as n,f as s,k as a,N as t}from"./plugin-vue_export-helper.e5331ba5.js";const h='{"title":"\uB77C\uC6B0\uD130","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC124\uC815","slug":"\uC124\uC815"},{"level":3,"title":"\uC0C8\uB85C\uC6B4 \uC124\uC815\uC744 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95","slug":"\uC0C8\uB85C\uC6B4-\uC124\uC815\uC744-\uCD94\uAC00\uD558\uB294-\uBC29\uBC95"},{"level":3,"title":"\uB2E4\uC911 \uB77C\uC6B0\uD2B8","slug":"\uB2E4\uC911-\uB77C\uC6B0\uD2B8"},{"level":3,"title":"\uC678\uBD80\uB9C1\uD06C","slug":"\uC678\uBD80\uB9C1\uD06C"},{"level":2,"title":"\uC544\uC774\uCF58","slug":"\uC544\uC774\uCF58"},{"level":2,"title":"\uB2E4\uC911 \uD0ED","slug":"\uB2E4\uC911-\uD0ED"},{"level":3,"title":"\uD398\uC774\uC9C0 \uCE90\uC2DC\uB97C \uD65C\uC131\uD654 \uD558\uB294\uBC95","slug":"\uD398\uC774\uC9C0-\uCE90\uC2DC\uB97C-\uD65C\uC131\uD654-\uD558\uB294\uBC95"},{"level":3,"title":"\uD2B9\uC815 \uD398\uC774\uC9C0\uB97C \uCE90\uC2DC\uD558\uC9C0 \uC54A\uB3C4\uB85D \uD558\uB294\uBC95","slug":"\uD2B9\uC815-\uD398\uC774\uC9C0\uB97C-\uCE90\uC2DC\uD558\uC9C0-\uC54A\uB3C4\uB85D-\uD558\uB294\uBC95"},{"level":2,"title":"\uAE30\uBCF8 \uB9AC\uB2E4\uC774\uB809\uC158 \uC8FC\uC18C","slug":"\uAE30\uBCF8-\uB9AC\uB2E4\uC774\uB809\uC158-\uC8FC\uC18C"}],"relativePath":"guide/router.md","lastUpdated":1723014140914}',p={},o=t(`__VP_STATIC_START__<h1 id="\uB77C\uC6B0\uD130"><a class="header-anchor" href="#\uB77C\uC6B0\uD130" aria-hidden="true">#</a> \uB77C\uC6B0\uD130</h1><p>\uD504\uB85C\uC81D\uD2B8\uC758 \uB77C\uC6B0\uD130 \uAD6C\uC131\uC740 <a href="https://github.com/web2-solution/web2-vue-framework/blob/demo/src/router/index.ts" target="_blank" rel="noopener noreferrer">src/router/index.ts</a> \uD30C\uC77C\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uD3B8\uB9AC\uD55C \uC77D\uAE30\uC640 \uAC80\uC0C9\uC744 \uC704\uD574 \uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uB77C\uC6B0\uD130\uB97C \uBD84\uB9AC\uD558\uC9C0 \uC54A\uACE0 \uD558\uB098\uC758 \uD30C\uC77C\uC5D0 \uD1B5\uD569\uD558\uC5EC \uC791\uC131\uD588\uC2B5\uB2C8\uB2E4. \uD544\uC694\uC5D0 \uB530\uB77C \uBD84\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB77C\uC6B0\uD130\uB294 \uBA54\uB274 \uC0DD\uC131\uC758 \uD575\uC2EC\uC774\uBBC0\uB85C, \uBCF8 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uB77C\uC6B0\uD130\uC5D0 \uB300\uD55C \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC131\uC744 \uC81C\uACF5\uD558\uC5EC \uAC1C\uBC1C\uC790\uAC00 \uB9DE\uCDA4 \uC124\uC815\uD560 \uC218 \uC788\uB3C4\uB85D \uD588\uC2B5\uB2C8\uB2E4.</p><h2 id="\uC124\uC815"><a class="header-anchor" href="#\uC124\uC815" aria-hidden="true">#</a> \uC124\uC815</h2><div class="language-js"><pre><code><span class="token comment">/**
* redirect: noredirect        
  noredirect\uB85C \uC124\uC815\uD558\uBA74 \uD574\uB2F9 \uB77C\uC6B0\uD2B8\uB294 breadcrumb \uB0B4\uC5D0\uC11C \uD074\uB9AD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.

* name:&#39;router-name&#39;          
  \uB77C\uC6B0\uD2B8 \uC774\uB984\uC744 \uC124\uC815\uD558\uB294 \uAC83\uC740 \uD544\uC218\uC785\uB2C8\uB2E4. \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 &lt;keep-alive&gt;\uB97C \uC0AC\uC6A9\uD560 \uB54C \uB2E4\uC591\uD55C \uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.

* meta : {
      hidden: true             
     \uC124\uC815\uC744 true\uB85C \uD558\uBA74 \uD574\uB2F9 \uB77C\uC6B0\uD2B8\uB294 \uC0AC\uC774\uB4DC\uBC14\uC5D0 \uB354 \uC774\uC0C1 \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. 
     \uC608\uB97C \uB4E4\uC5B4, 404 \uD398\uC774\uC9C0\uB098 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0 \uB4F1 (\uAE30\uBCF8\uAC12 : false)

    alwaysShow: true          
    \uD558\uB098\uC758 \uB77C\uC6B0\uD2B8 \uC544\uB798\uC5D0 \uC120\uC5B8\uB41C children \uB77C\uC6B0\uD2B8\uAC00 1\uAC1C\uB97C \uCD08\uACFC\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uC911\uCCA9\uB41C \uBAA8\uB4DC\uB85C \uBCC0\uD658\uB429\uB2C8\uB2E4.
    \uD558\uC704 \uB77C\uC6B0\uD2B8\uAC00 \uD558\uB098\uB9CC \uC788\uC744 \uACBD\uC6B0, \uD574\uB2F9 \uD558\uC704 \uB77C\uC6B0\uD2B8\uB97C \uC0AC\uC774\uB4DC\uBC14\uC5D0 \uB8E8\uD2B8 \uB77C\uC6B0\uD2B8\uB85C \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uB9CC\uC57D \uD558\uC704 \uB77C\uC6B0\uD2B8\uC758 \uAC1C\uC218\uC640 \uAD00\uACC4\uC5C6\uC774 \uD56D\uC0C1 \uB8E8\uD2B8 \uB77C\uC6B0\uD2B8\uB97C \uC0AC\uC774\uB4DC\uBC14\uC5D0 \uD45C\uC2DC\uD558\uACE0 \uC2F6\uB2E4\uBA74, alwaysShow: true\uB85C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uACBD\uC6B0, \uC774\uC804\uC5D0 \uC815\uC758\uB41C \uADDC\uCE59\uC744 \uBB34\uC2DC\uD558\uACE0 \uB8E8\uD2B8 \uB77C\uC6B0\uD2B8\uB97C \uACC4\uC18D \uD45C\uC2DC\uD569\uB2C8\uB2E4 (\uAE30\uBCF8\uAC12 : false).

    title: &#39;title&#39;            \uD574\uB2F9 \uB77C\uC6B0\uD2B8\uAC00 \uC0AC\uC774\uB4DC\uBC14\uC640 breadcrumb\uC5D0 \uD45C\uC2DC\uB420 \uC774\uB984\uC744 \uC124\uC815 \uD569\uB2C8\uB2E4.

    icon: &#39;svg-name&#39;          \uD574\uB2F9 \uB77C\uC6B0\uD2B8\uC758 \uC544\uC774\uCF58\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.

    noCache: true             true\uB85C \uC124\uC815\uD558\uBA74 &lt;keep-alive&gt;\uC5D0 \uC758\uD574 \uCE90\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. (\uAE30\uBCF8\uAC12 : false)

    breadcrumb: false         false\uB85C \uC124\uC815\uD558\uBA74 breadcrumb\uC5D0\uC11C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.(\uAE30\uBCF8\uAC12 : true)

    affix: true               true\uB85C \uC124\uC815\uD558\uBA74 \uD0DC\uADF8 \uD56D\uBAA9\uC5D0\uC11C \uD56D\uC0C1 \uACE0\uC815\uB429\uB2C8\uB2E4 (\uAE30\uBCF8\uAC12 : false).

    noTagsView: true          true\uB85C \uC124\uC815\uD558\uBA74 \uD0DC\uADF8\uC5D0\uC11C \uD45C\uC2DC\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4 (\uAE30\uBCF8\uAC12 : false).

    activeMenu: &#39;/dashboard&#39;  \uD558\uC774\uB77C\uC774\uD2B8\uB41C \uB77C\uC6B0\uD2B8 \uACBD\uB85C \uD45C\uC2DC

    canTo: true               true\uB85C \uC124\uC815\uD558\uBA74, hidden\uC774 true\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uB354\uB77C\uB3C4 \uC5EC\uC804\uD788 \uB77C\uC6B0\uD2B8 \uC804\uD658\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4 (\uAE30\uBCF8\uAC12 : false).

    permission: [&#39;edit&#39;,&#39;add&#39;, &#39;delete&#39;]    \uD574\uB2F9 \uB77C\uC6B0\uD2B8\uC758 \uAD8C\uD55C\uC744 \uC124\uC815\uD569\uB2C8\uB2E4.
  }
**/</span>
</code></pre></div><h3 id="\uC0C8\uB85C\uC6B4-\uC124\uC815\uC744-\uCD94\uAC00\uD558\uB294-\uBC29\uBC95"><a class="header-anchor" href="#\uC0C8\uB85C\uC6B4-\uC124\uC815\uC744-\uCD94\uAC00\uD558\uB294-\uBC29\uBC95" aria-hidden="true">#</a> \uC0C8\uB85C\uC6B4 \uC124\uC815\uC744 \uCD94\uAC00\uD558\uB294 \uBC29\uBC95</h3><p>\uBCF8 \uD504\uB85C\uC81D\uD2B8\uC758 \uB77C\uC6B0\uD2B8 \uAD6C\uC131 \uD56D\uBAA9\uC774 \uD604\uC7AC \uAC1C\uBC1C \uC791\uC5C5\uC5D0 \uC801\uD569\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uC0C8\uB85C\uC6B4 \uC18D\uC131\uC744 \uC9C1\uC811 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="warning custom-block"><p class="custom-block-title">\uC8FC\uC758</p><p>\uBAA8\uB4E0 \uB77C\uC6B0\uD2B8 \uD56D\uBAA9 \uAD6C\uC131\uC740 \uBC18\uB4DC\uC2DC <code>meta</code>\uC5D0 \uD3EC\uD568\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p></div><p><a href="https://github.com/web2-solution/web2-vue-framework/blob/demo/types/router.d.ts" target="_blank" rel="noopener noreferrer">types/router.d.ts</a> \uD30C\uC77C\uC5D0 \uD574\uB2F9 \uD0C0\uC785\uC744 \uCD94\uAC00\uD55C \uD6C4, \uB77C\uC6B0\uD2B8\uC5D0 \uD544\uC694\uD55C \uAD6C\uC131 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">symbol</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
    hidden<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    alwaysShow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    noCache<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    breadcrumb<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    affix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    activeMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
    noTagsView<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    canTo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    permission<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token comment">// \uC0C8\uB85C\uC6B4 \uAD6C\uC131 \uC720\uD615 \uCD94\uAC00</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\uB2E4\uC911-\uB77C\uC6B0\uD2B8"><a class="header-anchor" href="#\uB2E4\uC911-\uB77C\uC6B0\uD2B8" aria-hidden="true">#</a> \uB2E4\uC911 \uB77C\uC6B0\uD2B8</h3><div class="warning custom-block"><p class="custom-block-title">\uC8FC\uC758 \uC0AC\uD56D</p><ul><li>\uC804\uCCB4 \uD504\uB85C\uC81D\uD2B8\uC758 \uBAA8\uB4E0 \uB77C\uC6B0\uD2B8 <code>name</code>\uC740 \uC911\uBCF5\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li><li>\uBAA8\uB4E0 \uB2E4\uB2E8\uACC4 \uB77C\uC6B0\uD2B8\uB294 \uCD5C\uC885\uC801\uC73C\uB85C 2\uB2E8\uACC4 \uB77C\uC6B0\uD2B8\uB85C \uBCC0\uD658\uB418\uBBC0\uB85C, \uC790\uC2DD \uB77C\uC6B0\uD2B8\uB97C \uB0B4\uC7A5\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.</li><li>layout\uC5D0 \uD574\uB2F9\uD558\uB294 \uACBD\uB85C\uB97C \uC81C\uC678\uD558\uACE0, \uB098\uBA38\uC9C0 \uC790\uC2DD \uB77C\uC6B0\uD2B8\uC758 \uACBD\uB85C\uB294 <code>/</code>\uB85C \uC2DC\uC791\uD558\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4.</li></ul></div><p><strong>\uC608\uC2DC</strong></p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/level&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Level&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.level&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">&#39;carbon:skill-level-advanced&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Menu1&#39;</span><span class="token punctuation">,</span>
      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu1&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;menu1-1&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;Menu11&#39;</span><span class="token punctuation">,</span>
          component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu11&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            alwaysShow<span class="token operator">:</span> <span class="token boolean">true</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              path<span class="token operator">:</span> <span class="token string">&#39;menu1-1-1&#39;</span><span class="token punctuation">,</span>
              name<span class="token operator">:</span> <span class="token string">&#39;Menu111&#39;</span><span class="token punctuation">,</span>
              <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu111.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              meta<span class="token operator">:</span> <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu111&#39;</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          path<span class="token operator">:</span> <span class="token string">&#39;menu1-2&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;Menu12&#39;</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu12.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu12&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;menu2&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&#39;Menu2Demo&#39;</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu2.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu2&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\uC678\uBD80\uB9C1\uD06C"><a class="header-anchor" href="#\uC678\uBD80\uB9C1\uD06C" aria-hidden="true">#</a> \uC678\uBD80\uB9C1\uD06C</h3><p><code>path</code>\uB97C \uC774\uB3D9\uD560 <strong>HTTP \uC8FC\uC18C</strong>\uB85C \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/external-link&#39;</span><span class="token punctuation">,</span>
  component<span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;ExternalLink&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;https://github.com/web2-solution/web2-vue-framework-doc&#39;</span><span class="token punctuation">,</span>
      meta<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Link&#39;</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;\uBB38\uC11C&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\uC544\uC774\uCF58"><a class="header-anchor" href="#\uC544\uC774\uCF58" aria-hidden="true">#</a> \uC544\uC774\uCF58</h2><p>\uC5EC\uAE30\uC11C \uC124\uC815\uD55C <code>icon</code> \uAD6C\uC131\uC740 <strong>\uBA54\uB274</strong>\uC5D0 \uB3D9\uAE30\uD654\uB429\uB2C8\uB2E4. icon \uAC12\uC740 <a href="./../components/icon.html">\uC5EC\uAE30</a>\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\uB2E4\uC911-\uD0ED"><a class="header-anchor" href="#\uB2E4\uC911-\uD0ED" aria-hidden="true">#</a> \uB2E4\uC911 \uD0ED</h2><p>\uB2E4\uC911 \uD0ED \uD398\uC774\uC9C0\uB294 <code>keep-alive</code> \uC640 <code>router-view</code> \uB97C \uC0AC\uC6A9\uD558\uC5EC \uAD6C\uD604\uB418\uBA70 <code>tab</code>\uC744 \uC804\uD658\uD55C \uD6C4\uC5D0\uB3C4 \uC774\uC804 \uC0C1\uD0DC\uB97C \uC720\uC9C0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="\uD398\uC774\uC9C0-\uCE90\uC2DC\uB97C-\uD65C\uC131\uD654-\uD558\uB294\uBC95"><a class="header-anchor" href="#\uD398\uC774\uC9C0-\uCE90\uC2DC\uB97C-\uD65C\uC131\uD654-\uD558\uB294\uBC95" aria-hidden="true">#</a> \uD398\uC774\uC9C0 \uCE90\uC2DC\uB97C \uD65C\uC131\uD654 \uD558\uB294\uBC95</h3><p>\uCE90\uC2DC\uB97C \uD65C\uC131\uD654\uD558\uB824\uBA74 \uB450 \uAC00\uC9C0 \uC870\uAC74\uC774 \uC788\uC2B5\uB2C8\uB2E4.</p><ol><li>\uB77C\uC6B0\uD130 \uC124\uC815\uC5D0\uC11C <code>name</code>\uC744 \uC9C0\uC815\uD574\uC57C \uD558\uBA70,<strong>\uC911\uBCF5\uB418\uC9C0 \uC54A\uC544\uC57C \uD569\uB2C8\uB2E4.</strong></li><li>\uB77C\uC6B0\uD130\uC5D0 \uD574\uB2F9\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 <code>name</code>\uC744 \uCD94\uAC00\uD558\uACE0, \uC774 <code>name</code>\uC774 \uB77C\uC6B0\uD130 \uC124\uC815\uC758 <code>name</code>\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4.</li></ol><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;menu2&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Menu2&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Level/Menu2.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.menu2&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// /@/views/Level/Menu2.vue</span>
<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&quot;ts&quot;</span><span class="token operator">&gt;</span>
<span class="token function">defineOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Menu2&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\uC8FC\uC758</p><p>keep-alive\uAC00 \uC791\uB3D9\uD558\uB824\uBA74: \uB77C\uC6B0\uD130\uC758 <code>name</code> \uC18D\uC131\uACFC \uD574\uB2F9 \uD398\uC774\uC9C0\uC758 \uCEF4\uD3EC\uB10C\uD2B8 <code>name</code>\uC744 \uB3D9\uC77C\uD558\uAC8C \uC124\uC815\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p><strong>include - \uBB38\uC790\uC5F4 \uB610\uB294 \uC815\uADDC \uD45C\uD604\uC2DD\uC73C\uB85C, \uC774\uB984\uC774 \uC77C\uCE58\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB9CC \uCE90\uC2DC\uB429\uB2C8\uB2E4</strong></p></div><h3 id="\uD2B9\uC815-\uD398\uC774\uC9C0\uB97C-\uCE90\uC2DC\uD558\uC9C0-\uC54A\uB3C4\uB85D-\uD558\uB294\uBC95"><a class="header-anchor" href="#\uD2B9\uC815-\uD398\uC774\uC9C0\uB97C-\uCE90\uC2DC\uD558\uC9C0-\uC54A\uB3C4\uB85D-\uD558\uB294\uBC95" aria-hidden="true">#</a> \uD2B9\uC815 \uD398\uC774\uC9C0\uB97C \uCE90\uC2DC\uD558\uC9C0 \uC54A\uB3C4\uB85D \uD558\uB294\uBC95</h3><p><code>noCache</code>\uB97C <code>true</code>\uB85C \uC124\uC815\uD558\uBA74 \uCE90\uC2DC\uB97C \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC73C\uBA70, \uB610\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 <code>name</code> \uC18D\uC131\uC744 \uCD94\uAC00\uD558\uC9C0 \uC54A\uC73C\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token string">&#39;workplace&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Dashboard/Workplace.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Workplace&#39;</span><span class="token punctuation">,</span>
  meta<span class="token operator">:</span> <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;router.workplace&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    noCache<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\uAE30\uBCF8-\uB9AC\uB2E4\uC774\uB809\uC158-\uC8FC\uC18C"><a class="header-anchor" href="#\uAE30\uBCF8-\uB9AC\uB2E4\uC774\uB809\uC158-\uC8FC\uC18C" aria-hidden="true">#</a> \uAE30\uBCF8 \uB9AC\uB2E4\uC774\uB809\uC158 \uC8FC\uC18C</h2><p>\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 \uB85C\uADF8\uC778 \uD6C4 \uAE30\uBCF8\uC801\uC73C\uB85C \uD604\uC7AC \uAC00\uC7A5 \uBA3C\uC800 \uCC3E\uC744 \uC218 \uC788\uB294 \uB77C\uC6B0\uD130 \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.</p><p>\uCD94\uD6C4\uC5D0\uB294 \uC774\uB97C \uC124\uC815 \uD56D\uBAA9\uC73C\uB85C \uC81C\uACF5\uD560 \uACC4\uD68D\uC785\uB2C8\uB2E4.</p>__VP_STATIC_END__`,33),e=[o];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{h as __pageData,g as default};
