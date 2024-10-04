# 라우팅

프로젝트의 라우팅 구성은 [src/router/index.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/router/index.ts) 파일에 저장되어 있습니다.

현재 프로젝트에서는 프론트엔드 환경에 라우터 데이터를 저장하지 않고 백엔드에서 권한에 따른 데이터를 가져와 이를 토대로 매뉴를 생성하도록 구성되어 있습니다. 

라우터는 메뉴 생성의 핵심이므로, 본 프로젝트에서는 라우터에 대한 다음과 같은 구성을 제공하여 개발자가 맞춤 설정할 수 있도록 했습니다. 해당 설정은 DB의 메뉴 테이블에 저장되어 있어야 합니다. 



## 설정

``` js
/**
* redirect: noredirect        
                              noredirect로 설정하면 해당 라우트는 breadcrumb 내에서 클릭할 수 없습니다.

* name:'router-name'          
                              라우트 이름을 설정하는 것은 필수입니다. 그렇지 않으면 <keep-alive> 및 캐시 기능을 사용할 때 다양한 문제가 발생할 수 있습니다. 
                              파스칼 케이스로 작성하는 것을 권장합니다.

* meta : {
    hidden: true             
                              설정을 true로 하면 해당 라우트는 사이드바에 표시되지 않습니다. (e.g. 404 페이지, 로그인 페이지) 

    alwaysShow: true          
                              하나의 라우트 아래에 선언된 children 라우트가 1개 이상이라면 자동으로 중첩 메뉴로 변환됩니다.
                              하위 라우트가 하나만 있을 경우, 해당 하위 라우트를 사이드바에 루트 라우트로 표시합니다. 
                              만약 하위 라우트의 개수와 관계없이 항상 루트 라우트를 사이드바에 표시하고 싶다면, alwaysShow: true로 설정할 수 있습니다. 
                              이 경우, 이전에 정의된 규칙을 무시하고 루트 라우트를 계속 표시합니다.

    title: 'title'            해당 라우트가 사이드바와 breadcrumb에 표시될 이름을 설정 합니다.

    icon: 'svg-name'          해당 라우트의 아이콘을 설정합니다.

    noCache: true             true로 설정하면 <keep-alive>에 의해 캐시되지 않습니다. 
                              대시보드 등 실시간 데이터를 가져와야 하는 페이지에 사용할 수 있습니다.

    breadcrumb: false         false로 설정하면 breadcrumb에서 표시되지 않습니다.

    affix: true               true로 설정하면 태그 항목에 항상 고정됩니다.

    noTagsView: true          true로 설정하면 태그에서 표시되지 않습니다.

    activeMenu: '/dashboard'  하이라이트된 라우트 경로 표시

    canTo: true               true로 설정하면, hidden이 true로 설정되어 있더라도 여전히 라우트 전환이 가능합니다.

    permission: ['edit','add', 'delete']    해당 라우트의 권한을 설정합니다.
  }
**/
```

### 새로운 설정을 추가하는 방법

본 프로젝트의 라우팅 구성 항목이 현재 개발 작업에 적합하지 않은 경우, 새로운 속성을 직접 추가할 수 있습니다.

::: warning 주의

모든 라우트 항목 구성은 반드시 `meta`에 포함되어야 합니다.

:::

[types/router.d.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/types/router.d.ts) 파일에 해당 타입을 추가한 후, 라우트에 필요한 구성 항목을 추가할 수 있습니다.

```ts
declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    hidden?: boolean
    alwaysShow?: boolean
    title?: string
    icon?: string
    noCache?: boolean
    breadcrumb?: boolean
    affix?: boolean
    activeMenu?: string
    noTagsView?: boolean
    canTo?: boolean
    permission?: string[]

    // 새로운 구성 유형 추가
    ...
  }
}

```

### 다중 라우트

::: warning 주의 사항

- 전체 프로젝트의 모든 라우트 `name`은 중복될 수 없습니다.
- 모든 다단계 라우트는 최종적으로 2단계 라우트로 변환되므로, 자식 라우트를 내장할 수 없습니다.
- layout에 해당하는 경로를 제외하고, 나머지 자식 라우트의 경로는 `/`로 시작하지 않아야 합니다.

:::

### 외부링크

`path`를 이동할 **HTTP 주소**로 설정하면 됩니다.

```ts
{
  path: '/external-link',
  component: Layout,
  meta: {
    name: 'ExternalLink'
  },
  children: [
    {
      path: 'https://github.com/web2-solution/web2-vue-framework-doc',
      meta: { name: 'Link', title: '문서' }
    }
  ]
}
```

## 아이콘

여기서 설정한 `icon` 구성은 **메뉴**에 동기화됩니다. icon 값은 [여기](../components/icon.md)에서 확인할 수 있습니다.

## 다중 탭

다중 탭 페이지는 `keep-alive` 와 `router-view` 를 사용하여 구현되며 `tab`을 전환한 후에도 이전 상태를 유지할 수 있습니다.

### 페이지 캐시를 활성화 하는법

캐시를 활성화하려면 두 가지 조건이 있습니다.

1. 라우터 설정에서 `name`을 지정해야 하며,**중복되지 않아야 합니다.**
2. 라우터에 해당하는 컴포넌트에 `name`을 추가하고, 이 `name`이 라우터 설정의 `name`과 일치해야 합니다.

```ts
{
  path: 'menu2',
  name: 'Menu2',
  component: () => import('@/views/Level/Menu2.vue'),
  meta: {
    title: 'router.menu2'
  }
}

// /@/views/Level/Menu2.vue
<script setup lang="ts">
defineOptions({
  name: 'Menu2'
})
</script>

```

:::warning 주의

keep-alive가 작동하려면: 라우터의 `name` 속성과 해당 페이지의 컴포넌트 `name`을 동일하게 설정해야 합니다.

**include - 문자열 또는 정규 표현식으로, 이름이 일치하는 컴포넌트만 캐시됩니다**
:::

### 특정 페이지를 캐시하지 않도록 하는법

`noCache`를 `true`로 설정하면 캐시를 비활성화할 수 있으며, 또는 컴포넌트에 `name` 속성을 추가하지 않으면 됩니다.

```ts
{
  path: 'workplace',
  component: () => import('@/views/Dashboard/Workplace.vue'),
  name: 'Workplace',
  meta: {
    title: 'router.workplace',
    noCache: true
  }
}
```
