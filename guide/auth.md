# 권한

프로젝트에는 두 가지 권한 처리 방식이 통합되어 있습니다:


1. 첫 번째 방법은 프론트엔드가 메뉴를 제어하는 것입니다. 
즉, 서버는 권한이 있는 키만 반환하고, 프론트엔드가 이를 통해 매칭을 수행합니다.
2. 두 번째 방법은 서버에서 반환된 라우팅 데이터 구조를 통해 동적으로 라우팅 테이블을 생성하는 것입니다

현재 프로젝트에서 제공하는 테스트 계정은 다음과 같습니다.

**admin/admin**

## 프론트엔드 권한 제어

**구현 원리:** 프론트엔드에서 라우트 권한을 고정적으로 작성하고, 각 라우트에 대한 권한을 지정합니다. 일반적인 라우트만 초기화하며, 권한이 필요한 라우트는 라우트 테이블에 추가되지 않습니다. 로그인 후 또는 다른 방법으로 해당 라우트 키를 가져온 후, 라우트 테이블을 순회하여 키를 매칭하고, 필터링하여 접근 가능한 라우트 테이블을 생성합니다. 이후 `router.addRoutes`를 통해 라우트 인스턴스에 추가하여 권한 필터링을 구현합니다.

**단점:** 권한이 상대적으로 자유롭지 않습니다. 라우트 테이블의 제어가 프론트엔드에서 이루어지기 때문에, 정렬이나 수정이 필요할 때마다 프론트엔드에서 직접 변경해야 하며, 서버는 단지 권한이 있는 라우트 키만 제공할 뿐입니다.

## 백엔드에서 동적으로 가져오기

**구현 원리：** 인터페이스를 통해 동적으로 라우트 테이블을 생성하고, 일정한 데이터 구조를 따라 반환합니다. 프론트엔드는 이 데이터를 필요에 따라 처리하여 인식 가능한 구조로 변환한 후, `router.addRoutes`를 통해 라우트 인스턴스에 추가하여 권한을 동적으로 생성합니다.

**장점：** 모든 메뉴 제어가 서버의 인터페이스를 통해 이루어지며, 프론트엔드는 오직 렌더링만 담당합니다. 이로 인해 후속 유지 보수 비용이 낮아지며, 추천 되는 방식입니다.

## 구현

1. [src/store/modules/permission.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/store/modules/permission.ts)에서 `generateRoutes()`를 수정하세요.

받아들이는 type 매개변수는 현재 본 프로젝트의 테스트 상황에만 해당됩니다. 

필요 없거나 적합하지 않다면 자유롭게 수정해도 됩니다.

```ts
generateRoutes(
  type: 'server' | 'frontEnd' | 'static',
  routers?: AppCustomRouteRecordRaw[] | string[]
): Promise<unknown> {
  return new Promise<void>((resolve) => {
    let routerMap: AppRouteRecordRaw[] = []
    if (type === 'server') {
      // 백엔드 필터링 메뉴 
      routerMap = generateRoutesByServer(routers as AppCustomRouteRecordRaw[])
    } else if (type === 'frontEnd') {
      // 프론트엔드 필터링 메뉴
      routerMap = generateRoutesByFrontEnd(cloneDeep(asyncRouterMap), routers as string[])
    } else {
      // 정적 라우팅 테이블 직접 읽기
      routerMap = cloneDeep(asyncRouterMap)
    }
    // 동적 라우팅에서 404 페이지는 반드시 마지막에 배치해야 합니다.
    this.addRouters = routerMap.concat([
      {
        path: '/:path(.*)*',
        redirect: '/404',
        name: '404Page',
        meta: {
          hidden: true,
          breadcrumb: false
        }
      }
    ])
    // 메뉴를 렌더링하는 모든 라우트
    this.routers = cloneDeep(constantRouterMap).concat(routerMap)
    resolve()
  })
}
```

### 프론트엔드 컨트롤 구현

2. [src/utils/routerHelper.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/utils/routerHelper.ts) 에서`generateRoutesByFrontEnd ()`를 수정하세요 현재 이 프로젝트의 프론트엔드 권한 제어는`path`가 동일한지 여부를 기준으로 필터링을 시연하고 있습니다. 요구 사항에 맞지 않는 경우, 아래의 판단 로직을 수동으로 변경해야 합니다.

```ts
// 프론트엔드 라우트 생성 제어
export const generateRoutesByFrontEnd  = (
  routes: AppRouteRecordRaw[],
  keys: string[],
  basePath = '/'
): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = [];

  for (const route of routes) {
    const meta = route.meta as RouteMeta;
    // skip some route
    if (meta.hidden && !meta.showMainRoute) {
      continue;
    }

    let data: Nullable<AppRouteRecordRaw> = null;

    let onlyOneChild: Nullable<string> = null;
    if (route.children && route.children.length === 1 && !meta.alwaysShow) {
      onlyOneChild = (
        isUrl(route.children[0].path)
          ? route.children[0].path
          : pathResolve(pathResolve(basePath, route.path), route.children[0].path)
      ) as string;
    }

    // 개발자가 상황에 따라 확장할 수 있습니다.
    for (const item of keys) {
      // 경로를 통해 매칭
      if (isUrl(item) && (onlyOneChild === item || route.path === item)) {
        data = Object.assign({}, route);
      } else {
        const routePath = pathResolve(basePath, onlyOneChild || route.path);
        if (routePath === item || meta.followRoute === item) {
          data = Object.assign({}, route);
        }
      }
    }

    // recursive child routes
    if (route.children && data) {
      data.children = generateRoutesByFrontEnd (route.children, keys, pathResolve(basePath, data.path));
    }
    if (data) {
      res.push(data as AppRouteRecordRaw);
    }
  }
  return res;
};
```

### 백엔드에서 동적으로 가져오기

3. [src/utils/routerHelper.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/utils/routerHelper.ts) 에서 `generateRoutesByServer ()` 를 수정하세요

```ts
// 백엔드에서 라우트 생성 제어
export const generateRoutesByServer  = (routes: AppCustomRouteRecordRaw[]): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = [];

  for (const route of routes) {
    const data: AppRouteRecordRaw = {
      path: route.path,
      name: route.name,
      redirect: route.redirect,
      meta: route.meta,
    };
    if (route.component) {
      const comModule =
        modules[`../${route.component}.vue`] || modules[`../${route.component}.tsx`];
      const component = route.component as string;
      if (!comModule && !component.includes('#')) {
        console.error(`${route.component}.vue 파일 또는 ${route.component}.tsx 파일을 찾을 수 없습니다. 파일을 생성해 주세요.`
        );
      } else {
        // 라우트 파일을 동적으로 로드할 수 있으며, 상황에 따라 맞춤 로직을 적용할 수 있습니다
        data.component =
          component === '#' ? Layout : component.includes('##') ? getParentLayout() : comModule;
      }
    }
    // recursive child routes
    if (route.children) {
      data.children = generateRoutesByServer (route.children);
    }
    res.push(data as AppRouteRecordRaw);
  }
  return res;
};
```

### 공통 부분 수정

4. [src/views/Login/components/LoginForm.vue](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/views/Login/components/LoginForm.vue)에서 `getRole()` 을 수정하세요.

개발자가 필요에 따라 직접 코드를 수정해야 합니다.

```ts
// 권한 정보 조회
const getRole = async () => {
  const formData = await getFormData<UserType>()
  const params = {
    roleName: formData.username
  }
  const res =
    appStore.getDynamicRouter && appStore.getServerDynamicRouter
      ? await getAdminRoleApi(params)
      : await getTestRoleApi(params)
  if (res) {
    const routers = res.data || []
    setStorage('roleRouters', routers)
    appStore.getDynamicRouter && appStore.getServerDynamicRouter
      ? await permissionStore.generateRoutes('server', routers).catch(() => {})
      : await permissionStore.generateRoutes('frontEnd', routers).catch(() => {})

    permissionStore.getAddRouters.forEach((route) => {
      addRoute(route as RouteRecordRaw) // 동적으로 접근 가능한 라우팅 테이블 추가
    })
    permissionStore.setIsAddRouters(true)
    push({ path: redirect.value || permissionStore.addRouters[0].path })
  }
};
```

5. [src/permission.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/permission.ts)에서, 다음과 같은 상황을 고려하여 수동 새로고침을 감안하여 캐시된 동적 메뉴를 다시 렌더링 해야 합니다.

```ts
// 개발자가 상황에 따라 수정할 수 있습니다.
const roleRouters = getStorage('roleRouters') || []

// 동적 라우트 사용 여부
if (appStore.getDynamicRouter) {
  appStore.serverDynamicRouter
    ? await permissionStore.generateRoutes('server', roleRouters as AppCustomRouteRecordRaw[])
    : await permissionStore.generateRoutes('frontEnd', roleRouters as string[])
  } else {
  await permissionStore.generateRoutes('static')
}

permissionStore.getAddRouters.forEach((route) => {
  router.addRoute(route as unknown as RouteRecordRaw) // 동적으로 접근 가능한 라우트 테이블 추가
})
const redirectPath = from.query.redirect || to.path
const redirect = decodeURIComponent(redirectPath as string)
const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
permissionStore.setIsAddRouters(true)
next(nextData)
```

## 정적라우트 (권한 없음)

"때때로 동적 라우트가 필요하지 않을 수 있습니다. 이 경우, `src/config/app.ts`에서 `dynamicRouter`를 `false`로 설정하면, 

프로젝트 내의 정적 라우트 테이블만을 사용할 수 있습니다.

내부 로직에서 정적 라우트 부분은 이미 처리되었으므로, 나머지 부분에 대해서는 신경 쓸 필요가 없습니다.
