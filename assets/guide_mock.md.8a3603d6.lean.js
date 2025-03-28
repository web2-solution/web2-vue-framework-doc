import{_ as s,f as n,k as a,N as t}from"./plugin-vue_export-helper.e5331ba5.js";const g='{"title":"\uB370\uC774\uD130 Mock \uC124\uC815","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uAC1C\uBC1C\uD658\uACBD","slug":"\uAC1C\uBC1C\uD658\uACBD"},{"level":3,"title":"CORS \uC124\uC815","slug":"cors-\uC124\uC815"},{"level":2,"title":"API \uC694\uCCAD","slug":"api-\uC694\uCCAD"},{"level":2,"title":"axios \uC124\uC815","slug":"axios-\uC124\uC815"},{"level":3,"title":"\uC804\uC5ED axios \uC124\uC815 \uC124\uBA85","slug":"\uC804\uC5ED-axios-\uC124\uC815-\uC124\uBA85"},{"level":2,"title":"Mock \uC11C\uBE44\uC2A4","slug":"mock-\uC11C\uBE44\uC2A4"},{"level":3,"title":"\uB85C\uCEEC Mock","slug":"\uB85C\uCEEC-mock"}],"relativePath":"guide/mock.md","lastUpdated":1743147353242}',p={},o=t(`__VP_STATIC_START__<h1 id="\uB370\uC774\uD130-mock-\uC124\uC815"><a class="header-anchor" href="#\uB370\uC774\uD130-mock-\uC124\uC815" aria-hidden="true">#</a> \uB370\uC774\uD130 Mock \uC124\uC815</h1><h2 id="\uAC1C\uBC1C\uD658\uACBD"><a class="header-anchor" href="#\uAC1C\uBC1C\uD658\uACBD" aria-hidden="true">#</a> \uAC1C\uBC1C\uD658\uACBD</h2><p>\uD504\uB860\uD2B8\uC5D4\uB4DC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uACFC \uBC31\uC5D4\uB4DC API \uC11C\uBC84\uAC00 \uB3D9\uC77C\uD55C \uD638\uC2A4\uD2B8\uC5D0\uC11C \uC2E4\uD589\uB418\uC9C0 \uC54A\uB294 \uACBD\uC6B0, \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C API \uC694\uCCAD\uC744 API \uC11C\uBC84\uB85C \uD504\uB85D\uC2DC\uD574\uC57C \uD569\uB2C8\uB2E4. \uAC19\uC740 \uD638\uC2A4\uD2B8\uC5D0\uC11C \uC2E4\uD589\uB418\uB294 \uACBD\uC6B0, \uAD6C\uCCB4\uC801\uC778 API \uC8FC\uC18C\uB85C \uC9C1\uC811 \uC694\uCCAD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h3 id="cors-\uC124\uC815"><a class="header-anchor" href="#cors-\uC124\uC815" aria-hidden="true">#</a> CORS \uC124\uC815</h3><p><code>vite.config.ts</code> \uAD6C\uC131 \uD30C\uC77C\uC5D0\uC11C \uC11C\uBC84\uC758 \uD504\uB85D\uC2DC \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uC5EC API \uC694\uCCAD\uC744 \uD504\uB85D\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-ts"><pre><code>server<span class="token operator">:</span> <span class="token punctuation">{</span>
      port<span class="token operator">:</span> <span class="token number">4000</span><span class="token punctuation">,</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:8000&#39;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/v1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&#39;http://127.0.0.1:11000&#39;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>\uC778\uD130\uD398\uC774\uC2A4 \uC811\uB450\uC5B4\uB97C \uC124\uC815\uD558\uB824\uBA74, \uD574\uB2F9 <code>env</code> \uD30C\uC77C\uC5D0\uC11C <code>VITE_API_BASE_PATH</code>\uC758 \uAC12\uC744 \uC218\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="tip custom-block"><p class="custom-block-title">\uC8FC\uC758</p><p>\uC774 \uC124\uC815\uC740 \uB85C\uCEEC \uAC1C\uBC1C \uD658\uACBD\uC5D0\uC11C\uB9CC \uC801\uC6A9\uB429\uB2C8\uB2E4. \uBE0C\uB77C\uC6B0\uC800 \uCF58\uC194\uC758 \uB124\uD2B8\uC6CC\uD06C(Network) \uD0ED\uC5D0\uC11C \uC694\uCCAD\uC774 <code>http://localhost:4000/api/xxx</code>\uB85C \uD45C\uC2DC\uB418\uB294\uB370, \uC774\uB294 \uD504\uB85D\uC2DC \uC124\uC815\uC774 \uB85C\uCEEC \uC694\uCCAD\uC758 URL\uC744 \uBCC0\uACBD\uD558\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.</p></div><h2 id="api-\uC694\uCCAD"><a class="header-anchor" href="#api-\uC694\uCCAD" aria-hidden="true">#</a> API \uC694\uCCAD</h2><p>\uBCF8 \uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C\uB294 <code>Mock</code>\uC744 \uC0AC\uC6A9\uD558\uC5EC API\uB97C \uC2DC\uBBAC\uB808\uC774\uC158\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>API\uB294 <a href="https://github.com/web2-solution/web2-vue-framework/tree/main/src/api" target="_blank" rel="noopener noreferrer">src/api/</a> \uB514\uB809\uD1A0\uB9AC \uC544\uB798\uC5D0 \uD1B5\uD569 \uAD00\uB9AC\uB429\uB2C8\uB2E4.</p><p>\uB9AC\uC2A4\uD2B8 \uC870\uD68C API\uB97C \uC608\uB85C \uB4E4\uC5B4 \uC124\uBA85\uD558\uACA0\uC2B5\uB2C8\uB2E4:</p><p><strong>src/api/</strong> \uD3F4\uB354\uC5D0 \uC0C8\uB85C\uC6B4 \uBAA8\uB4C8 \uD30C\uC77C\uC744 \uC0DD\uC131\uD560 \uB54C, \uB9E4\uAC1C\uBCC0\uC218\uC640 \uBC18\uD658\uAC12\uC758 \uD0C0\uC785\uC744 \uC815\uC758\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uB370\uC774\uD130 \uAC80\uC99D\uC744 \uC6A9\uC774\uD558\uAC8C \uD558\uACE0, \uD5A5\uD6C4 \uC720\uC9C0\uBCF4\uC218\uB97C \uAC04\uD3B8\uD558\uAC8C \uD569\uB2C8\uB2E4.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\uD0C0\uC785 \uC815\uC758 \uD30C\uC77C\uC744 \uBD84\uB9AC\uD558\uC5EC \uD1B5\uD569 \uAD00\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD504\uB85C\uC81D\uD2B8\uB97C \uCC38\uC870\uD558\uC138\uC694.</p></div><div class="language-ts"><pre><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;@/axios&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TableData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTableListApi</span> <span class="token operator">=</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&#39;/example/list&#39;</span><span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getTreeTableListApi</span> <span class="token operator">=</span> <span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&#39;/example/treeList&#39;</span><span class="token punctuation">,</span> params <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> saveTableApi <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>TableData<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IResponse<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&#39;/example/save&#39;</span><span class="token punctuation">,</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getTableDetApi <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IResponse<span class="token operator">&lt;</span>TableData<span class="token operator">&gt;&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&#39;/example/detail&#39;</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> delTableListApi <span class="token operator">=</span> <span class="token punctuation">(</span>ids<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IResponse<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&#39;/example/delete&#39;</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token punctuation">{</span> ids <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="axios-\uC124\uC815"><a class="header-anchor" href="#axios-\uC124\uC815" aria-hidden="true">#</a> axios \uC124\uC815</h2><p><strong>axios</strong> \uD328\uD0A4\uC9C0\uB294 <a href="https://github.com/web2-solution/web2-vue-framework/tree/main/src/axios" target="_blank" rel="noopener noreferrer">src/axios</a> \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC800\uC7A5\uB429\uB2C8\uB2E4.</p><h3 id="\uC804\uC5ED-axios-\uC124\uC815-\uC124\uBA85"><a class="header-anchor" href="#\uC804\uC5ED-axios-\uC124\uC815-\uC124\uBA85" aria-hidden="true">#</a> \uC804\uC5ED axios \uC124\uC815 \uC124\uBA85</h3><p>axios\uC758 \uC804\uC5ED \uC124\uC815\uC740 <a href="https://github.com/web2-solution/web2-vue-framework/tree/main/src/constants" target="_blank" rel="noopener noreferrer">src/constants</a> \uB514\uB809\uD1A0\uB9AC\uC5D0 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="tip custom-block"><p class="custom-block-title">\uC8FC\uC758</p><p>\uBCC0\uACBD \uD6C4\uC5D0\uB294 \uBAA8\uB4E0 \uC694\uCCAD\uC5D0 \uC601\uD5A5\uC744 \uBBF8\uCE69\uB2C8\uB2E4.</p></div><div class="language-ts"><pre><code><span class="token comment">/**
 * \uC694\uCCAD \uC131\uACF5 \uC0C1\uD0DC \uCF54\uB4DC
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SUCCESS_CODE</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">/**
 * \uC694\uCCAD contentType
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">CONTENT_TYPE</span> <span class="token operator">=</span> <span class="token string">&#39;application/json&#39;</span>

<span class="token comment">/**
 * \uC694\uCCAD \uD0C0\uC784\uC544\uC6C3 \uC2DC\uAC04
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">REQUEST_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">60000</span>
</code></pre></div><h2 id="mock-\uC11C\uBE44\uC2A4"><a class="header-anchor" href="#mock-\uC11C\uBE44\uC2A4" aria-hidden="true">#</a> Mock \uC11C\uBE44\uC2A4</h2><p>Mock \uB370\uC774\uD130\uB294 \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C \uACFC\uC815\uC5D0\uC11C \uD544\uC218\uC801\uC778 \uC694\uC18C\uC774\uBA70, \uD504\uB860\uD2B8\uC5D4\uB4DC\uC640 \uBC31\uC5D4\uB4DC \uAC1C\uBC1C\uC744 \uBD84\uB9AC\uD558\uB294 \uD575\uC2EC \uAE30\uC220\uC785\uB2C8\uB2E4. \uC11C\uBC84 \uCE21\uACFC \uBBF8\uB9AC \uC57D\uC815\uD55C \uC778\uD130\uD398\uC774\uC2A4\uB97C \uD1B5\uD574 \uC694\uCCAD \uB370\uC774\uD130 \uBC0F \uB85C\uC9C1\uC744 \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uC5EC, \uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790\uAC00 \uB3C5\uB9BD\uC801\uC73C\uB85C \uC791\uC5C5\uD560 \uC218 \uC788\uAC8C \uD558\uACE0, \uC11C\uBC84 \uCE21 \uAC1C\uBC1C \uACFC\uC815\uC5D0 \uC758\uD574 \uBCD1\uBAA9\uB418\uC9C0 \uC54A\uB3C4\uB85D \uD569\uB2C8\uB2E4.</p><p>\uBCF8 \uD504\uB85C\uC81D\uD2B8\uB294 vite-mock-plugin\uC744 \uC0AC\uC6A9\uD558\uC5EC Mock \uB370\uC774\uD130 \uCC98\uB9AC\uB97C \uC9C4\uD589\uD569\uB2C8\uB2E4. <strong>\uD504\uB85C\uC81D\uD2B8 \uB0B4 Mock \uC11C\uBE44\uC2A4\uB294 \uB85C\uCEEC\uACFC \uC628\uB77C\uC778\uC73C\uB85C \uB098\uB269\uB2C8\uB2E4.</strong></p><h3 id="\uB85C\uCEEC-mock"><a class="header-anchor" href="#\uB85C\uCEEC-mock" aria-hidden="true">#</a> \uB85C\uCEEC Mock</h3><p>\uB85C\uCEEC Mock\uC740 Node.js \uBBF8\uB4E4\uC6E8\uC5B4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD30C\uB77C\uBBF8\uD130\uB97C \uAC00\uB85C\uCC55\uB2C8\uB2E4. (mock.js\uB97C \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294 \uC774\uC720\uB294 \uB85C\uCEEC \uAC1C\uBC1C \uC911 \uC694\uCCAD \uB9E4\uAC1C\uBCC0\uC218\uC640 \uC751\uB2F5 \uACB0\uACFC\uB97C \uD655\uC778\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC785\uB2C8\uB2E4.)</p><h4 id="mock-\uC778\uD130\uD398\uC774\uC2A4-\uCD94\uAC00-\uBC29\uBC95"><a class="header-anchor" href="#mock-\uC778\uD130\uD398\uC774\uC2A4-\uCD94\uAC00-\uBC29\uBC95" aria-hidden="true">#</a> Mock \uC778\uD130\uD398\uC774\uC2A4 \uCD94\uAC00 \uBC29\uBC95</h4><p>Mock \uB370\uC774\uD130\uB97C \uCD94\uAC00\uD558\uB824\uBA74, \uB8E8\uD2B8 \uB514\uB809\uD1A0\uB9AC\uC5D0\uC11C mock \uD30C\uC77C\uC744 \uCC3E\uC544 \uD574\uB2F9 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uCD94\uAC00\uD558\uACE0, \uC774\uB97C \uAC00\uB85C\uCC44\uC11C Mock \uB370\uC774\uD130\uB97C \uC2DC\uBBAC\uB808\uC774\uC158\uD558\uB3C4\uB85D \uAD6C\uD604\uD569\uB2C8\uB2E4. \uC774\uB97C \uC704\uD574 mock \uD3F4\uB354 \uB0B4\uC5D0 \uC0C8 \uD30C\uC77C\uC744 \uC0DD\uC131\uD569\uB2C8\uB2E4.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\uD30C\uC77C\uC744 \uC0C8\uB85C \uCD94\uAC00\uD558\uBA74 \uC790\uB3D9\uC73C\uB85C \uC5C5\uB370\uC774\uD2B8\uB418\uBA70, \uC218\uB3D9\uC73C\uB85C \uAC1C\uBC1C \uC11C\uBC84\uB97C \uC7AC\uC2DC\uC791\uD560 \uD544\uC694\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. \uCF54\uB4DC \uCF58\uC194\uC5D0\uC11C \uB85C\uADF8 \uC815\uBCF4\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC73C\uBA70, mock \uD3F4\uB354 \uB0B4\uC758 \uD30C\uC77C\uC740 \uC790\uB3D9\uC73C\uB85C \uB4F1\uB85D\uB429\uB2C8\uB2E4.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>mock \uAC12\uC740 <a href="http://mockjs.com/" target="_blank" rel="noopener noreferrer">mock.js</a>\uC758 \uBB38\uBC95\uC744 \uC9C1\uC811 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><h4 id="\uC778\uD130\uD398\uC774\uC2A4\uAC00-\uC900\uBE44\uB418\uBA74-mock\uC744-\uC5B4\uB5BB\uAC8C-\uC81C\uAC70\uD558\uB098\uC694"><a class="header-anchor" href="#\uC778\uD130\uD398\uC774\uC2A4\uAC00-\uC900\uBE44\uB418\uBA74-mock\uC744-\uC5B4\uB5BB\uAC8C-\uC81C\uAC70\uD558\uB098\uC694" aria-hidden="true">#</a> \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uC900\uBE44\uB418\uBA74, Mock\uC744 \uC5B4\uB5BB\uAC8C \uC81C\uAC70\uD558\uB098\uC694?</h4><p>\uD574\uB2F9 <code>env</code> \uD30C\uC77C\uC5D0\uC11C <code>VITE_USE_MOCK</code>\uC744 <code>false</code>\uB85C \uC124\uC815\uD558\uBA74 Mock\uC744 \uBE44\uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC644\uC804\uD788 \uC81C\uAC70\uD558\uB824\uBA74, <code>vite.config.ts</code>\uC5D0\uC11C <code>viteMockServe</code>\uC640 \uAD00\uB828\uB41C \uCF54\uB4DC\uB97C \uC0AD\uC81C\uD574\uC57C \uD569\uB2C8\uB2E4.</p>__VP_STATIC_END__`,32),e=[o];function c(r,l,k,i,u,d){return a(),n("div",null,e)}var m=s(p,[["render",c]]);export{g as __pageData,m as default};
