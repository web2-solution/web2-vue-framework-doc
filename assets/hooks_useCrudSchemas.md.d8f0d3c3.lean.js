import{_ as n,f as s,k as a,N as p}from"./plugin-vue_export-helper.e5331ba5.js";const y='{"title":"useCrudSchemas","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":3,"title":"\uD30C\uB77C\uBBF8\uD130 \uC18C\uAC1C","slug":"\uD30C\uB77C\uBBF8\uD130-\uC18C\uAC1C"},{"level":2,"title":"CrudSchema","slug":"crudschema"}],"relativePath":"hooks/useCrudSchemas.md","lastUpdated":1743147353243}',t={},o=p(`__VP_STATIC_START__<h1 id="usecrudschemas"><a class="header-anchor" href="#usecrudschemas" aria-hidden="true">#</a> useCrudSchemas</h1><p><code>Search</code>\u3001<code>Form</code>\u3001<code>Descriptions</code>\u3001<code>Table</code> \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uD544\uC694\uD55C \uB370\uC774\uD130 \uAD6C\uC870\uB97C \uD1B5\uD569 \uC0DD\uC131\uD558\uB294 hook\uC785\uB2C8\uB2E4.</p><p>\uC704 \uB124 \uAC00\uC9C0 \uCEF4\uD3EC\uB10C\uD2B8 \uBAA8\uB450 <code>Schema</code> \uB610\uB294 <code>columns</code> \uD544\uB4DC\uB97C \uD544\uC694\uB85C \uD558\uBA70, \uAC01 \uCEF4\uD3EC\uB10C\uD2B8\uB9C8\uB2E4 \uC774\uB7EC\uD55C \uAD6C\uC870\uB97C \uC791\uC131\uD558\uBA74 \uB9CE\uC740 \uC911\uBCF5 \uCF54\uB4DC\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB530\uB77C\uC11C <code>useCrudSchemas\uB97C</code> \uC81C\uACF5\uD558\uC5EC \uB370\uC774\uD130\uB97C \uD1B5\uD569 \uC0DD\uC131\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>useCrudSchemas\uB294 <a href="https://github.com/web2-solution/web2-vue-framework/blob/main/src/hooks/web/useCrudSchemas.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useCrudSchemas.ts</a> \uD30C\uC77C\uC5D0 \uC704\uCE58\uD574 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\uD2B9\uC815 \uD544\uB4DC\uAC00 \uD544\uC694 \uC5C6\uB294 \uACBD\uC6B0, \uC608\uB97C \uB4E4\uC5B4 <code>formSchema</code>\uC5D0\uC11C <code>field</code>\uAC00 <code>index</code>\uC778 \uD544\uB4DC\uB97C \uC81C\uC678\uD558\uB824\uBA74 <code>form: { hidden: true }</code>\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD544\uD130\uB9C1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C\uB3C4 \uB3D9\uC77C\uD55C \uBC29\uBC95\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><p><code>Search</code>\uB294 <code>Form</code>\uC744 \uAE30\uBC18\uC73C\uB85C 2\uCC28 \uB798\uD551\uC744 \uD558\uC5EC \uB9CC\uB4E4\uC5B4\uC84C\uAE30 \uB54C\uBB38\uC5D0, <code>Search</code>\uAC00 \uC9C0\uC6D0\uD558\uB294 \uB9E4\uAC1C\uBCC0\uC218\uB294 <code>Form</code>\uC5D0\uC11C\uB3C4 \uBAA8\uB450 \uC9C0\uC6D0\uB429\uB2C8\uB2E4.</p><p><code>search</code>\uC640 <code>form</code> \uD544\uB4DC\uB294 <code>dictName</code>\uC744 \uC804\uB2EC\uD558\uC5EC \uC804\uC5ED \uC0AC\uC804 \uB370\uC774\uD130\uB97C \uAC00\uC838\uC624\uAC70\uB098 <code>api</code>\uB97C \uC804\uB2EC\uD558\uC5EC <code>API</code> \uB370\uC774\uD130\uB97C \uAC00\uC838\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4. <code>api</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0, \uB370\uC774\uD130\uB97C \uC9C1\uC811 <code>return</code>\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tsx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> CrudSchema<span class="token punctuation">,</span> useCrudSchemas <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useCrudSchemas&#39;</span>

<span class="token keyword">const</span> crudSchemas <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>CrudSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">colProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;author&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.author&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;display_time&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.displayTime&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;DatePicker&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">componentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;datetime&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">valueFormat</span><span class="token operator">:</span> <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;importance&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.importance&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">formatter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">_</span><span class="token operator">:</span> Recordable<span class="token punctuation">,</span> <span class="token literal-property property">__</span><span class="token operator">:</span> TableColumn<span class="token punctuation">,</span> <span class="token literal-property property">cellValue</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>
        ElTag<span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;danger&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
          cellValue <span class="token operator">===</span> <span class="token number">1</span>
            <span class="token operator">?</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.important&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">:</span> cellValue <span class="token operator">===</span> <span class="token number">2</span>
            <span class="token operator">?</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.good&#39;</span><span class="token punctuation">)</span>
            <span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.commonly&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Select&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">componentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\uC911\uC694&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">3</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\uC591\uD638&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;\uC77C\uBC18&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;pageviews&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.pageviews&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;InputNumber&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;exampleDemo.content&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Editor&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">colProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">span</span><span class="token operator">:</span> <span class="token number">24</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;action&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;260px&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;tableDemo.action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> allSchemas <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCrudSchemas</span><span class="token punctuation">(</span>crudSchemas<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="\uD30C\uB77C\uBBF8\uD130-\uC18C\uAC1C"><a class="header-anchor" href="#\uD30C\uB77C\uBBF8\uD130-\uC18C\uAC1C" aria-hidden="true">#</a> \uD30C\uB77C\uBBF8\uD130 \uC18C\uAC1C</h3><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> allSchemas <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCrudSchemas</span><span class="token punctuation">(</span>crudSchemas<span class="token punctuation">)</span>
</code></pre></div><p><strong>allSchemas</strong></p><p><code>allSchemas</code> \uB294 \uB124 \uAC00\uC9C0 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uD544\uC694\uD55C \uB370\uC774\uD130 \uACB0\uACFC\uB97C \uC800\uC7A5\uD569\uB2C8\uB2E4.</p><p><em><strong>allSchemas.fromSchema</strong></em></p><p><code>Form</code> \uCEF4\uD3EC\uB10C\uD2B8\uC758 <code>Schema</code></p><p><em><strong>allSchemas.searchSchema</strong></em></p><p><code>Search</code> \uCEF4\uD3EC\uB10C\uD2B8\uC758 <code>Schema</code></p><p><em><strong>allSchemas.detailSchema</strong></em></p><p><code>Descriptions</code> \uCEF4\uD3EC\uB10C\uD2B8\uC758 <code>Schema</code></p><p><em><strong>allSchemas.tableColumns</strong></em></p><p><code>Table</code> \uCEF4\uD3EC\uB10C\uD2B8\uC758 <code>columns</code></p><h2 id="crudschema"><a class="header-anchor" href="#crudschema" aria-hidden="true">#</a> CrudSchema</h2><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC635\uC158</th><th>\uAE30\uBCF8 \uAC12</th></tr></thead><tbody><tr><td>search</td><td><code>searchSchema</code>\uB97C \uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9</td><td><code>CrudSearchParams</code></td><td>-</td><td>-</td></tr><tr><td>table</td><td><code>tableColumns</code>\uB97C \uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9</td><td><code>CrudTableParams</code></td><td>-</td><td>-</td></tr><tr><td>form</td><td><code>fromSchema</code>\uB97C \uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9</td><td><code>CrudFormParams</code></td><td>-</td><td>-</td></tr><tr><td>detail</td><td><code>DescriptionsSchema</code>\uB97C \uC124\uC815\uD558\uB294 \uB370 \uC0AC\uC6A9</td><td><code>CrudDescriptionsParams</code></td><td>-</td><td>-</td></tr><tr><td>children</td><td><code>Table</code>\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uACBD\uC6B0, \uC5EC\uB7EC \uD14C\uC774\uBE14 \uD5E4\uB354\uAC00 \uC788\uC744 \uC218 \uC788\uC74C</td><td><code>CrudSchema[]</code></td><td>-</td><td>-</td></tr></tbody></table>__VP_STATIC_END__`,23),e=[o];function c(r,l,u,k,i,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{y as __pageData,h as default};
