import{_ as s,f as a,q as t,N as n,k as p}from"./plugin-vue_export-helper.e5331ba5.js";const m='{"title":"Search \uAC80\uC0C9 \uCEF4\uD3EC\uB10C\uD2B8","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uC0AC\uC6A9\uBC95","slug":"\uC0AC\uC6A9\uBC95"},{"level":3,"title":"\uAE30\uBCF8 \uC0AC\uC6A9\uBC95","slug":"\uAE30\uBCF8-\uC0AC\uC6A9\uBC95"},{"level":3,"title":"useSearch","slug":"usesearch"},{"level":2,"title":"Search \uC18D\uC131","slug":"search-\uC18D\uC131"},{"level":2,"title":"Search \uC774\uBCA4\uD2B8","slug":"search-\uC774\uBCA4\uD2B8"},{"level":2,"title":"Search \uBA54\uC18C\uB4DC","slug":"search-\uBA54\uC18C\uB4DC"}],"relativePath":"components/search.md","lastUpdated":1723014140914}',o={},e=n('<h1 id="search-\uAC80\uC0C9-\uCEF4\uD3EC\uB10C\uD2B8"><a class="header-anchor" href="#search-\uAC80\uC0C9-\uCEF4\uD3EC\uB10C\uD2B8" aria-hidden="true">#</a> Search \uAC80\uC0C9 \uCEF4\uD3EC\uB10C\uD2B8</h1><p><code>Form</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAE30\uBC18\uC73C\uB85C \uD55C \uB798\uD37C\uC774\uBA70, \uCD95\uC18C \uBC0F \uD655\uC7A5\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4.</p><p>Search \uCEF4\uD3EC\uB10C\uD2B8 : <a href="https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Search" target="_blank" rel="noopener noreferrer">src/components/Search</a></p><div class="warning custom-block"><p class="custom-block-title">\uC8FC\uC758</p><p><code>Search</code> \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB294 <code>tsx</code>\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.</p></div><h2 id="\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h2><h3 id="\uAE30\uBCF8-\uC0AC\uC6A9\uBC95"><a class="header-anchor" href="#\uAE30\uBCF8-\uC0AC\uC6A9\uBC95" aria-hidden="true">#</a> \uAE30\uBCF8 \uC0AC\uC6A9\uBC95</h3>',6),c=n(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Search&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="usesearch"><a class="header-anchor" href="#usesearch" aria-hidden="true">#</a> useSearch</h3><p>\uBCF5\uC7A1\uD55C \uC0C1\uD669\uC5D0\uC11C\uB294 <code>useSearch</code>\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ContentWrap <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/ContentWrap&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useI18n&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Search&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDictOneApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/api/common&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormSchema <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/Form&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSearch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useSearch&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> searchRegister<span class="token punctuation">,</span> searchMethods <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> setSchema<span class="token punctuation">,</span> setProps<span class="token punctuation">,</span> setValues <span class="token punctuation">}</span> <span class="token operator">=</span> searchMethods

<span class="token keyword">const</span> schema <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>FormSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field2&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.select&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Select&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">componentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;option1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;option2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field3&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.radio&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;RadioGroup&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">componentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;option-1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;option-2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field5&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;DatePicker&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.datePicker&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">componentProps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field6&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;TimeSelect&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.timeSelect&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field8&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field9&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field10&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field11&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field12&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field13&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field14&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field15&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field16&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field17&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field18&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;formDemo.input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token string">&#39;Input&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> isGrid <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeGrid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">grid</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">isCol</span><span class="token operator">:</span> grid
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// isGrid.value = grid</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> layout <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;inline&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changeLayout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  layout<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>layout<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;inline&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;inline&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> buttonPosition <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;left&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">position</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  layout<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;bottom&#39;</span>
  buttonPosition<span class="token punctuation">.</span>value <span class="token operator">=</span> position
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">getDictOne</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getDictOneApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setSchema</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;componentProps.options&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> res<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleSearch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">data</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">delRadio</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setSchema</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;remove&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">restoreRadio</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setSchema</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;field3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;remove&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">setValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setValues</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">field1</span><span class="token operator">:</span> <span class="token string">&#39;Joy&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> searchLoading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeSearchLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  searchLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    searchLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> resetLoading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">changeResetLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  resetLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    resetLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentWrap</span>
    <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`\${t(&#39;searchDemo.search&#39;)} \${t(&#39;searchDemo.operate&#39;)}\`<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeGrid(true)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ t(&#39;searchDemo.grid&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeGrid(false)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.restore&#39;) }} {{ t(&#39;searchDemo.grid&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeLayout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.button&#39;) }} {{ t(&#39;searchDemo.position&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changePosition(&#39;left&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.bottom&#39;) }} {{ t(&#39;searchDemo.position&#39;) }}-{{ t(&#39;searchDemo.left&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changePosition(&#39;center&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.bottom&#39;) }} {{ t(&#39;searchDemo.position&#39;) }}-{{ t(&#39;searchDemo.center&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changePosition(&#39;right&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.bottom&#39;) }} {{ t(&#39;searchDemo.position&#39;) }}-{{ t(&#39;searchDemo.right&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getDictOne<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;formDemo.select&#39;) }} {{ t(&#39;searchDemo.dynamicOptions&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>delRadio<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ t(&#39;searchDemo.deleteRadio&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>restoreRadio<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ t(&#39;searchDemo.restoreRadio&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ t(&#39;formDemo.setValue&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeSearchLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.search&#39;) }} {{ t(&#39;searchDemo.loading&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ElButton</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeResetLoading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      {{ t(&#39;searchDemo.reset&#39;) }} {{ t(&#39;searchDemo.loading&#39;) }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ElButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentWrap</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentWrap</span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(&#39;searchDemo.search&#39;)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>t(&#39;searchDemo.searchDes&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span>
      <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:is-col</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isGrid<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>layout<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:button-position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>buttonPosition<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:search-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchLoading<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:reset-loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>resetLoading<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">show-expand</span>
      <span class="token attr-name">expand-field</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>field6<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSearch<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@reset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSearch<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchRegister<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentWrap</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h4 id="\uD30C\uB77C\uBBF8\uD130-\uC815\uC758"><a class="header-anchor" href="#\uD30C\uB77C\uBBF8\uD130-\uC815\uC758" aria-hidden="true">#</a> \uD30C\uB77C\uBBF8\uD130 \uC815\uC758</h4><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> searchRegister<span class="token punctuation">,</span> searchMethods <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSearch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>register</strong></p><p><code>searchRegister</code>\uB294 <code>useSearch</code>\uB97C \uB4F1\uB85D\uD558\uB294 \uB370 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. <code>useSearch</code>\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 <code>api</code>\uB97C \uC0AC\uC6A9\uD558\uB824\uBA74 <code>searchRegister</code>\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uC758 <code>onRegister</code>\uC5D0 \uC804\uB2EC\uD574\uC57C \uD569\uB2C8\uB2E4.</p><p><strong>formMethods</strong></p><table><thead><tr><th>\uD568\uC218\uBA85</th><th>\uC124\uBA85</th><th>\uCF5C\uBC31 \uD30C\uB77C\uBBF8\uD130</th></tr></thead><tbody><tr><td>setValues</td><td>\uD3FC \uAC12\uC744 \uC124\uC815</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>\uD3FC \uC18D\uC131\uC744 \uC124\uC815</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>\uD3FC \uAD6C\uC870\uB97C \uC0AD\uC81C</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>\uD3FC \uAD6C\uC870\uB97C \uCD94\uAC00</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>\uD3FC \uAD6C\uC870\uB97C \uD3B8\uC9D1</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getFormData</td><td>\uD3FC \uB370\uC774\uD130\uB97C \uAC00\uC838\uC634</td><td><code>&lt;T = Recordable&gt;() =&gt; Promise&lt;T&gt;</code></td></tr></tbody></table><h2 id="search-\uC18D\uC131"><a class="header-anchor" href="#search-\uC18D\uC131" aria-hidden="true">#</a> Search \uC18D\uC131</h2><table><thead><tr><th>\uC18D\uC131</th><th>\uC124\uBA85</th><th>\uD0C0\uC785</th><th>\uC120\uD0DD \uAC00\uB2A5 \uAC12</th><th>\uAE30\uBCF8\uAC12</th></tr></thead><tbody><tr><td>schema</td><td>Search\uC758 \uB808\uC774\uC544\uC6C3 \uAD6C\uC870 \uBC30\uC5F4\uC744 \uC0DD\uC131 <a href="#Schema">\uC790\uC138\uD788 \uBCF4\uAE30</a></td><td><code>FormSchema</code></td><td>-</td><td>[]</td></tr><tr><td>isCol</td><td>\uACA9\uC790 \uB808\uC774\uC544\uC6C3 \uD544\uC694 \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>labelWidth</td><td>\uD3FC label \uB108\uBE44</td><td><code>string</code>/<code>number</code></td><td>-</td><td>auto</td></tr><tr><td>layout</td><td>\uC791\uC5C5 \uBC84\uD2BC \uC2A4\uD0C0\uC77C \uBC0F \uC704\uCE58</td><td><code>string</code></td><td>inline/bottom</td><td>inline</td></tr><tr><td>buttonPosition</td><td>\uBC84\uD2BC \uC815\uB82C \uBC29\uC2DD</td><td><code>string</code></td><td>left/center/right</td><td>center</td></tr><tr><td>showSearch</td><td>\uAC80\uC0C9 \uBC84\uD2BC \uD45C\uC2DC \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>showReset</td><td>\uC7AC\uC124\uC815 \uBC84\uD2BC \uD45C\uC2DC \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>expand</td><td>\uD655\uC7A5/\uCD95\uC18C \uBC84\uD2BC \uD45C\uC2DC \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>expandField</td><td>\uD655\uC7A5/\uCD95\uC18C \uACBD\uACC4 \uD544\uB4DC</td><td><code>string</code></td><td>-</td><td>-</td></tr><tr><td>inline</td><td>inline \uC124\uC815 \uC5EC\uBD80</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>removeNoValueItem</td><td>\uC790\uB3D9 \uBE48\uAC12 \uC81C\uAC70\uC124\uC815</td><td><code>boolean</code></td><td>-</td><td>true</td></tr><tr><td>model</td><td>\uCD08\uAE30\uD654 \uB370\uC774\uD130</td><td><code>object</code></td><td>-</td><td>-</td></tr><tr><td>searchLoading</td><td>\uAC80\uC0C9 \uBC84\uD2BC \uB85C\uB529 \uC0C1\uD0DC</td><td><code>boolean</code></td><td>-</td><td>false</td></tr><tr><td>resetLoading</td><td>\uC7AC\uC124\uC815 \uBC84\uD2BC \uB85C\uB529 \uC0C1\uD0DC</td><td><code>boolean</code></td><td>-</td><td>false</td></tr></tbody></table><h2 id="search-\uC774\uBCA4\uD2B8"><a class="header-anchor" href="#search-\uC774\uBCA4\uD2B8" aria-hidden="true">#</a> Search \uC774\uBCA4\uD2B8</h2><table><thead><tr><th>\uD568\uC218 \uBA85</th><th>\uC124\uBA85</th><th>\uCF5C\uBC31 \uD30C\uB77C\uBBF8\uD130</th></tr></thead><tbody><tr><td>search</td><td>\uC870\uD68C \uD6C4 \uCF5C\uBC31</td><td>data: Recordable</td></tr><tr><td>reset</td><td>\uB9AC\uC14B \uD6C4 \uCF5C\uBC31</td><td>data: Recordable</td></tr></tbody></table><h2 id="search-\uBA54\uC18C\uB4DC"><a class="header-anchor" href="#search-\uBA54\uC18C\uB4DC" aria-hidden="true">#</a> Search \uBA54\uC18C\uB4DC</h2><table><thead><tr><th>\uD568\uC218 \uBA85</th><th>\uC124\uBA85</th><th>\uCF5C\uBC31 \uD30C\uB77C\uBBF8\uD130</th></tr></thead><tbody><tr><td>setValues</td><td>\uD3FC\uC758 \uAC12 \uC124\uC815</td><td>(data: Recordable) =&gt; void</td></tr><tr><td>setProps</td><td>\uD3FC\uC758 \uC18D\uC131 \uC124\uC815</td><td>(props: Recordable) =&gt; void</td></tr><tr><td>delSchema</td><td>\uD3FC\uC758 \uAD6C\uC870 \uC0AD\uC81C</td><td>(field: string) =&gt; void</td></tr><tr><td>addSchema</td><td>\uD3FC\uC758 \uAD6C\uC870 \uCD94\uAC00</td><td>(formSchema: FormSchema, index?: number) =&gt; void</td></tr><tr><td>setSchema</td><td>\uD3FC\uC758 \uAD6C\uC870 \uD3B8\uC9D1</td><td>(schemaProps: FormSetPropsType[]) =&gt; void</td></tr><tr><td>getElFormExpose</td><td>Form \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uC778\uC2A4\uD134\uC2A4\uB97C \uAC00\uC838\uC624\uB294 \uB370 \uC0AC\uC6A9</td><td><code>() =&gt; Promise&lt;typeof ElForm&gt;</code></td></tr></tbody></table>`,16);function l(r,u,k,i,d,g){return p(),a("div",null,[e,t(" \uC880 \uB354 \uBCF5\uC7A1\uD55C \uC608\uC2DC\uB294 [\uC628\uB77C\uC778 \uBBF8\uB9AC\uBCF4\uAE30](https://element-plus-admin.cn/#/components/search)\uC5D0\uC11C \uD655\uC778 \uD558\uC138\uC694. "),c])}var y=s(o,[["render",l]]);export{m as __pageData,y as default};
