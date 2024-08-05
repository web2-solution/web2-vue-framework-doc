import{o as e,c as s,a as d}from"./app.4ba3de9e.js";const a='{"title":"플러그인","description":"","frontmatter":{},"headers":[{"level":2,"title":"windiCss를 unocss로 교체","slug":"windicss를-unocss로-교체"},{"level":2,"title":"레이아웃","slug":"레이아웃"},{"level":2,"title":"typescript 타입","slug":"typescript-타입"},{"level":2,"title":"컴포넌트","slug":"컴포넌트"},{"level":2,"title":"온라인 예제","slug":"온라인-예제"},{"level":2,"title":"v1에서 v2로 업그레이드하는 방법","slug":"v1에서-v2로-업그레이드하는-방법"}],"relativePath":"guide/version.md","lastUpdated":1722835573437}',c={},i=d('<h1 id="플러그인"><a class="header-anchor" href="#플러그인" aria-hidden="true">#</a> 플러그인</h1><h2 id="windicss를-unocss로-교체"><a class="header-anchor" href="#windicss를-unocss로-교체" aria-hidden="true">#</a> windiCss를 unocss로 교체</h2><p>WindiCss가 더 이상 유지되지 않기 때문에 Unocss로 교체되었습니다. 두 가지는 사용법에서 대부분 일치하지만, 특정 부분에서 차이가 있을 수 있습니다. v1 버전에서 Unocss로 업그레이드하려면 수정 작업이 필요할 수 있습니다.</p><p>따라서 v1에서는 WindiCss를 계속 사용하는 것이 좋습니다.</p><h2 id="레이아웃"><a class="header-anchor" href="#레이아웃" aria-hidden="true">#</a> 레이아웃</h2><p>v2 버전은 여전히 네 가지 레이아웃 스타일을 유지하고 있지만, 세부적인 부분에서 v1보다 더 나은 제어를 제공합니다. 주로 테두리 겹침의 최적화에서 그 차이를 보입니다.</p><h2 id="typescript-타입"><a class="header-anchor" href="#typescript-타입" aria-hidden="true">#</a> typescript 타입</h2><p>v2 버전은 TypeScript5로 업그레이드되었습니다. 사용법에는 큰 차이가 없지만, 프로젝트 내 일부 타입 규칙이 변경되어 코드가 더 표준화되었습니다.</p><h2 id="컴포넌트"><a class="header-anchor" href="#컴포넌트" aria-hidden="true">#</a> 컴포넌트</h2><p>v2 버전의 주요 업데이트는 컴포넌트의 개선입니다.</p><p>주요 변경 사항은 <code>Form</code>, <code>Table</code>, <code>Search</code>,<code>Descriptions</code> 컴포넌트의 리팩토링입니다.</p><p>v1 버전에서는 이 네 가지 컴포넌트가 사용에 있어서 여러 가지 부족함이 있었고, 유연성이나 확장성이 부족하다는 지적이 있었습니다.</p><p>따라서 v2 버전에서는 이 네 가지 컴포넌트의 <code>schema</code>가 모두 <code>tsx</code> 방식으로 작성되었으며, 커스터마이징이 많은 경우 <code>tsx</code>가 <code>template</code>보다 더 유리합니다.</p><p>또한, 이 네 가지 컴포넌트는 중첩 바인딩을 지원합니다. 예를 들어 Form 컴포넌트의 데이터 바인딩은 v1 버전에서는 한 층의 중첩만 지원했지만, v2 버전에서는 <code>xxx.xxx</code>와 같은 바인딩 방식도 지원합니다.</p><p>사용법이 간단한 경우에도 <code>template</code>을 사용할 수 있지만, 향후 확장성을 고려하여 <code>tsx</code> 사용을 권장합니다.</p><h2 id="온라인-예제"><a class="header-anchor" href="#온라인-예제" aria-hidden="true">#</a> 온라인 예제</h2><p>v2 버전은 온라인 예제를 더욱 풍부하게 제공합니다. 현재 <code>권한 관리</code>와 같은 예제가 포함되어 있으며, 향후에도 다양한 예제를 지속적으로 업데이트하여 사용자들이 더 빠르게 이해하고 사용할 수 있도록 할 예정입니다.</p><h2 id="v1에서-v2로-업그레이드하는-방법"><a class="header-anchor" href="#v1에서-v2로-업그레이드하는-방법" aria-hidden="true">#</a> v1에서 v2로 업그레이드하는 방법</h2><div class="warning custom-block"><p class="custom-block-title">주의</p><p>v1 버전이 이미 프로젝트에 적용되었거나 사용된 지 오래된 경우, v1 버전을 계속 사용하는 것이 좋습니다. 처음 사용하는 경우에는 v2 버전을 직접 사용할 수 있습니다.</p><p>두 버전 간의 호환성 문제로 인해 업그레이드는 권장되지 않습니다.</p></div>',19);c.render=function(d,a,c,r,t,o){return e(),s("div",null,[i])};export default c;export{a as __pageData};