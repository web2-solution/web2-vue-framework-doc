import{_ as n,f as s,k as a,N as t}from"./plugin-vue_export-helper.e5331ba5.js";const w='{"title":"\uAE30\uBCF8 \uC5B8\uC5B4 \uC124\uC815","description":"","frontmatter":{},"headers":[{"level":2,"title":"\uAE30\uBCF8 \uC5B8\uC5B4 \uC124\uC815","slug":"\uAE30\uBCF8-\uC5B8\uC5B4-\uC124\uC815"},{"level":2,"title":"\uC5B8\uC5B4 \uD30C\uC77C","slug":"\uC5B8\uC5B4-\uD30C\uC77C"},{"level":2,"title":"\uC5B8\uC5B4\uD30C\uC77C\uC744 \uAC00\uC838\uC624\uB294 \uB85C\uC9C1","slug":"\uC5B8\uC5B4\uD30C\uC77C\uC744-\uAC00\uC838\uC624\uB294-\uB85C\uC9C1"},{"level":2,"title":"\uD65C\uC6A9","slug":"\uD65C\uC6A9"},{"level":2,"title":"\uC5B8\uC5B4 \uBCC0\uACBD","slug":"\uC5B8\uC5B4-\uBCC0\uACBD"},{"level":2,"title":"\uC6D0\uACA9 \uC5B8\uC5B4 \uB370\uC774\uD130 \uC77D\uAE30","slug":"\uC6D0\uACA9-\uC5B8\uC5B4-\uB370\uC774\uD130-\uC77D\uAE30"},{"level":3,"title":"useLocale","slug":"uselocale"}],"relativePath":"dep/i18n.md","lastUpdated":1743147353242}',p={},o=t(`<h2 id="\uAE30\uBCF8-\uC5B8\uC5B4-\uC124\uC815"><a class="header-anchor" href="#\uAE30\uBCF8-\uC5B8\uC5B4-\uC124\uC815" aria-hidden="true">#</a> \uAE30\uBCF8 \uC5B8\uC5B4 \uC124\uC815</h2><p><a href="https://github.com/web2-solution/web2-vue-framework/blob/main/src/store/modules/locale.ts" target="_blank" rel="noopener noreferrer">src/store/modules/locale.ts</a> \uD30C\uC77C\uC5D0\uC11C <code>currentLocale</code>\uC744 \uB2E4\uB978 \uC5B8\uC5B4\uB85C \uC124\uC815\uD569\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;pinia&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../index&#39;</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/en&#39;</span>
<span class="token keyword">import</span> ko <span class="token keyword">from</span> <span class="token string">&#39;element-plus/es/locale/lang/ko&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useStorage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useStorage&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LocaleDropdownType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/components/LocaleDropdown&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> getStorage<span class="token punctuation">,</span> setStorage <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useStorage</span><span class="token punctuation">(</span><span class="token string">&#39;localStorage&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> elLocaleMap <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">EN</span><span class="token operator">:</span> en<span class="token punctuation">,</span>
  <span class="token constant">KO</span><span class="token operator">:</span> ko
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">LocaleState</span> <span class="token punctuation">{</span>
  currentLocale<span class="token operator">:</span> LocaleDropdownType
  localeMap<span class="token operator">:</span> LocaleDropdownType<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useLocaleStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">&#39;locales&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> LocaleState <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      currentLocale<span class="token operator">:</span> <span class="token punctuation">{</span>
        lang<span class="token operator">:</span> <span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;KO&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \uB85C\uCEEC\uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uB41C \uAC12\uC774 \uC5C6\uB2E4\uBA74 \uD55C\uAD6D\uC5B4 \uC0AC\uC6A9</span>
        elLocale<span class="token operator">:</span> elLocaleMap<span class="token punctuation">[</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;KO&#39;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// multi-language</span>
      localeMap<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          lang<span class="token operator">:</span> <span class="token string">&#39;KO&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;\uD55C\uAD6D\uC5B4&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          lang<span class="token operator">:</span> <span class="token string">&#39;EN&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  getters<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getCurrentLocale</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>currentLocale<span class="token punctuation">,</span>
    <span class="token function-variable function">getLocaleMap</span><span class="token operator">:</span> <span class="token punctuation">(</span>state<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>localeMap
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  actions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">setCurrentLocale</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>currentLocale <span class="token operator">=</span> locale
      <span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token string">&#39;lang&#39;</span><span class="token punctuation">,</span> locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\uC5B8\uC5B4-\uD30C\uC77C"><a class="header-anchor" href="#\uC5B8\uC5B4-\uD30C\uC77C" aria-hidden="true">#</a> \uC5B8\uC5B4 \uD30C\uC77C</h2><p>\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uC758 \uC5B8\uC5B4\uB294 \uC11C\uBC84\uC5D0\uC11C <code>json</code> \uD30C\uC77C\uC744 \uBC1B\uC740 \uB4A4 \uC774\uB97C \uB85C\uCEEC \uC2A4\uD1A0\uB9AC\uC9C0\uC5D0 \uC800\uC7A5\uD558\uC5EC \uC0AC\uC6A9\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uB9CC\uC57D \uC11C\uBC84\uAC00 \uC544\uB2CC \uD504\uB85C\uC81D\uD2B8 \uB0B4\uBD80\uC5D0\uC11C \uD30C\uC77C\uB85C \uAD00\uB9AC\uD558\uACE0 \uC2F6\uB2E4\uBA74, <a href="https://github.com/web2-solution/web2-vue-framework/tree/main/src/locales" target="_blank" rel="noopener noreferrer">src/locales</a>\uC5D0\uC11C \uAD6C\uCCB4\uC801\uC778 \uC5B8\uC5B4\uB97C \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, <code>src/locales/EN.ts</code> \uD30C\uC77C\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uAD6C\uC131\uB429\uB2C8\uB2E4:</p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  common<span class="token operator">:</span> <span class="token punctuation">{</span>
    inputText<span class="token operator">:</span> <span class="token string">&#39;Please input&#39;</span><span class="token punctuation">,</span>
    selectText<span class="token operator">:</span> <span class="token string">&#39;Please select&#39;</span><span class="token punctuation">,</span>
    setting<span class="token operator">:</span> <span class="token string">&#39;Setting&#39;</span><span class="token punctuation">,</span>
    modiConfirm<span class="token operator">:</span> <span class="token string">&#39;Do you want to confirm the modification?&#39;</span><span class="token punctuation">,</span>
    modiSuccess<span class="token operator">:</span> <span class="token string">&#39;Successfully modified.&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\uC5B8\uC5B4\uD30C\uC77C\uC744-\uAC00\uC838\uC624\uB294-\uB85C\uC9C1"><a class="header-anchor" href="#\uC5B8\uC5B4\uD30C\uC77C\uC744-\uAC00\uC838\uC624\uB294-\uB85C\uC9C1" aria-hidden="true">#</a> \uC5B8\uC5B4\uD30C\uC77C\uC744 \uAC00\uC838\uC624\uB294 \uB85C\uC9C1</h2><p><a href="https://github.com/web2-solution/web2-vue-framework/blob/main/src/plugins/vueI18n/index.ts" target="_blank" rel="noopener noreferrer">src/plugins/vueI18n/index.ts</a>\uD30C\uC77C\uC5D0\uC11C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-i18n&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">setupI18n</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createI18nOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> createI18nOptions <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>I18nOptions<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> localeStore <span class="token operator">=</span> <span class="token function">useLocaleStoreWithOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> locale <span class="token operator">=</span> localeStore<span class="token punctuation">.</span>getCurrentLocale
    <span class="token keyword">const</span> localeMap <span class="token operator">=</span> localeStore<span class="token punctuation">.</span>getLocaleMap
    <span class="token keyword">let</span> defaultLocal <span class="token operator">=</span> <span class="token function">getStorage</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>defaultLocal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getMultiLangList</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        defaultLocal <span class="token operator">=</span> <span class="token function">mergeWith</span><span class="token punctuation">(</span>langModuleFromLocale<span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
        <span class="token function">setStorage</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span> defaultLocal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> message <span class="token operator">=</span> defaultLocal <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">setHtmlPageLang</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>

    localeStore<span class="token punctuation">.</span><span class="token function">setCurrentLocale</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      lang<span class="token operator">:</span> locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span>
      elLocale<span class="token operator">:</span> elLocaleMap<span class="token punctuation">[</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      locale<span class="token operator">:</span> locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span>
      fallbackLocale<span class="token operator">:</span> locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span>
      messages<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">]</span><span class="token operator">:</span> message
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      availableLocales<span class="token operator">:</span> localeMap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">.</span>lang<span class="token punctuation">)</span><span class="token punctuation">,</span>
      sync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      silentTranslationWarn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      missingWarn<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      silentFallbackWarn<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error while creating i18n options:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token keyword">throw</span> error
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\uD65C\uC6A9"><a class="header-anchor" href="#\uD65C\uC6A9" aria-hidden="true">#</a> \uD65C\uC6A9</h2><p>\uD504\uB85C\uC81D\uD2B8\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 useI18n\uC744 \uC0AC\uC6A9\uD558\uC138\uC694. <strong>vue-i18n\uC758 useI18n\uC740 \uC0AC\uC6A9\uD558\uC9C0 \uB9C8\uC138\uC694.</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;common.menu&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\uC5B8\uC5B4-\uBCC0\uACBD"><a class="header-anchor" href="#\uC5B8\uC5B4-\uBCC0\uACBD" aria-hidden="true">#</a> \uC5B8\uC5B4 \uBCC0\uACBD</h2><p>\uC5B8\uC5B4\uB97C \uBCC0\uACBD\uD558\uB824\uBA74 <a href="https://github.com/web2-solution/web2-vue-framework/blob/main/src/hooks/web/useLocale.ts" target="_blank" rel="noopener noreferrer">src/locales/useLocale.ts</a>\uB97C \uC0AC\uC6A9\uD574\uC57C \uD569\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/web/useLocale&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> changeLocale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">changeLocale</span><span class="token punctuation">(</span><span class="token string">&#39;EN&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\uC6D0\uACA9-\uC5B8\uC5B4-\uB370\uC774\uD130-\uC77D\uAE30"><a class="header-anchor" href="#\uC6D0\uACA9-\uC5B8\uC5B4-\uB370\uC774\uD130-\uC77D\uAE30" aria-hidden="true">#</a> \uC6D0\uACA9 \uC5B8\uC5B4 \uB370\uC774\uD130 \uC77D\uAE30</h2><p>\uD604\uC7AC \uD504\uB85C\uC81D\uD2B8\uB294 <code>src/main.ts</code> \uC5D0\uC11C <code>setupI18n</code>\uD568\uC218\uAC00 \uC2E4\uD589\uB41C \uD6C4\uC5D0 \uD654\uBA74\uC744 \uB80C\uB354\uB9C1 \uD569\uB2C8\uB2E4.</p><p>\uB530\uB77C\uC11C <code>setupI18n</code>\uB0B4\uC758 <code>createI18nOptions</code>\uC5D0\uC11C AJAX \uC694\uCCAD\uC744 \uBCF4\uB0B4\uACE0, \uD574\uB2F9 \uB370\uC774\uD130\uB97C i18n \uC778\uC2A4\uD134\uC2A4\uC5D0 \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">const</span> createI18nOptions <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>I18nOptions<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> localeStore <span class="token operator">=</span> <span class="token function">useLocaleStoreWithOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> locale <span class="token operator">=</span> localeStore<span class="token punctuation">.</span>getCurrentLocale
    <span class="token keyword">const</span> localeMap <span class="token operator">=</span> localeStore<span class="token punctuation">.</span>getLocaleMap
    <span class="token keyword">let</span> defaultLocal <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>defaultLocal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getMultiLangList</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        defaultLocal <span class="token operator">=</span> res<span class="token punctuation">.</span>data
        window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      defaultLocal <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>defaultLocal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> message <span class="token operator">=</span> defaultLocal <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token function">setHtmlPageLang</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">)</span>

    localeStore<span class="token punctuation">.</span><span class="token function">setCurrentLocale</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      lang<span class="token operator">:</span> locale<span class="token punctuation">.</span>lang
      <span class="token comment">// elLocale: elLocal</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      locale<span class="token operator">:</span> locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span>
      fallbackLocale<span class="token operator">:</span> locale<span class="token punctuation">.</span>lang<span class="token punctuation">,</span>
      messages<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token punctuation">[</span>locale<span class="token punctuation">.</span>lang<span class="token punctuation">]</span><span class="token operator">:</span> message
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      availableLocales<span class="token operator">:</span> localeMap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v<span class="token punctuation">.</span>lang<span class="token punctuation">)</span><span class="token punctuation">,</span>
      sync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      silentTranslationWarn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      missingWarn<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      silentFallbackWarn<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error while creating i18n options:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
    <span class="token comment">// Handle error or re-throw</span>
    <span class="token keyword">throw</span> error
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="uselocale"><a class="header-anchor" href="#uselocale" aria-hidden="true">#</a> useLocale</h3><p>\uCF54\uB4DC: <a href="https://github.com/web2-solution/web2-vue-framework/blob/main/src/hooks/web/useLocale.ts" target="_blank" rel="noopener noreferrer">src/hooks/web/useLocale/</a></p><p>\uC5B8\uC5B4\uB97C \uC218\uB3D9\uC73C\uB85C \uBCC0\uACBD\uD560 \uB54C <code>uselocale</code> \uD568\uC218\uAC00 \uD638\uCD9C\uB429\uB2C8\uB2E4. <code>uselocale</code> \uD568\uC218\uB3C4 \uBE44\uB3D9\uAE30 \uD568\uC218\uC774\uBBC0\uB85C, \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uC751\uB2F5 \uB370\uC774\uD130\uB97C \uBC18\uD658\uD560 \uB54C\uAE4C\uC9C0 \uAE30\uB2E4\uB9B0 \uD6C4\uC5D0 \uC124\uC815\uD558\uBA74 \uB429\uB2C8\uB2E4.</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useLocale</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Switching the language will change the locale of useI18n</span>
  <span class="token comment">// And submit to configuration modification</span>
  <span class="token keyword">const</span> <span class="token function-variable function">changeLocale</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>locale<span class="token operator">:</span> LocaleType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> globalI18n <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global
      <span class="token keyword">let</span> langModule <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>langModule<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getMultiLangList</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          langModule <span class="token operator">=</span> res<span class="token punctuation">.</span>data
          window<span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
          globalI18n<span class="token punctuation">.</span><span class="token function">setLocaleMessage</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> langModule <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token function">setI18nLanguage</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        langModule <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>langModule<span class="token punctuation">)</span>

        <span class="token function">setI18nLanguage</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error while changing locale:&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span>
      <span class="token comment">// Handle error or re-throw</span>
      <span class="token keyword">throw</span> error
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    changeLocale
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,25),e=[o];function c(l,u,k,r,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{w as __pageData,f as default};
