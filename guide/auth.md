
# 권한

프로젝트에는 백엔드를 통한 권한 처리 방식을 사용합니다. 즉, 서버에서 반환된 라우팅 데이터 구조를 통해 동적으로 라우팅 테이블을 생성합니다.

## 백엔드에서 동적으로 가져오기

**구현 원리：** 인터페이스를 통해 동적으로 라우트 테이블을 생성하고, 일정한 데이터 구조를 따라 반환합니다. 프론트엔드는 이 데이터를 필요에 따라 처리하여 인식 가능한 구조로 변환한 후, `router.addRoutes`를 통해 라우트 인스턴스에 추가하여 권한을 동적으로 생성합니다.

**장점：** 모든 메뉴 및 권한 제어는 서버 인터페이스를 통해 관리되며, 프론트엔드는 전달받은 데이터를 렌더링하는 데 집중합니다. 이처럼 책임이 명확히 분리된 구조는 유지 보수 부담을 줄이는 데 효과적이며, 권한 관리 방식으로 적합합니다.

## 구현

1. [src/store/modules/permission.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/store/modules/permission.ts)에서 `generateRoutes()`를 수정할 수 있습니다.

```ts
generateRoutes(
  type: 'server' | 'frontEnd' | 'static',
  routers?: AppCustomRouteRecordRaw[] | string[]
): Promise<unknown> {
  return new Promise<void>((resolve) => {
    let routerMap: AppRouteRecordRaw[] = []
    if (type === 'server') {
      routerMap = generateRoutesByServer(routers as AppCustomRouteRecordRaw[])
    } else if (type === 'frontEnd') {
      routerMap = generateRoutesByFrontEnd(cloneDeep(asyncRouterMap), routers as string[])
    } else {
      routerMap = cloneDeep(asyncRouterMap)
    }
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
    this.routers = cloneDeep(constantRouterMap).concat(routerMap)
    resolve()
  })
}
```

2. [src/utils/routerHelper.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/utils/routerHelper.ts)에서 `generateRoutesByServer()`를 수정할 수 있습니다.

```ts
export const generateRoutesByServer = (routes: AppCustomRouteRecordRaw[]): AppRouteRecordRaw[] => {
  const res: AppRouteRecordRaw[] = []
  for (const route of routes) {
    const data: AppRouteRecordRaw = {
      path: route.path,
      name: route.name,
      redirect: route.redirect,
      meta: route.meta,
    }
    if (route.component) {
      const comModule =
        modules[`../${route.component}.vue`] || modules[`../${route.component}.tsx`]
      const component = route.component as string
      if (!comModule && !component.includes('#')) {
        console.error(`${route.component}.vue 파일 또는 ${route.component}.tsx 파일을 찾을 수 없습니다. 파일을 생성해 주세요.`
        );
      } else {
        // 라우트 파일을 동적으로 로드할 수 있으며, 상황에 따라 맞춤 로직을 적용할 수 있습니다
        data.component =
          component === '#' ? Layout : component.includes('##') ? getParentLayout() : comModule;
      }
    }
    if (route.children) {
      data.children = generateRoutesByServer(route.children)
    }
    res.push(data as AppRouteRecordRaw)
  }
  return res
}
```

3. [src/views/Login/components/LoginForm.vue](https://github.com/web2-solution/web2-vue-framework/blob/main/src/views/Login/components/LoginForm.vue)에서 `getRole()`을 수정할 수 있습니다.

```ts
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
    await permissionStore.generateRoutes(
      appStore.getServerDynamicRouter ? 'server' : 'frontEnd',
      routers
    )
    permissionStore.getAddRouters.forEach((route) => {
      addRoute(route as RouteRecordRaw)
    })
    permissionStore.setIsAddRouters(true)
    push({ path: redirect.value || permissionStore.addRouters[0].path })
  }
}
```

4. 새로고침 시 동적 라우트 유지

사용자가 페이지를 새로고침하면 브라우저 메모리에 저장된 상태는 초기화됩니다. 이로 인해 로그인 상태나 라우팅 정보가 사라질 수 있으므로, 이를 방지하기 위해 `roleRouters` 정보를 로컬 스토리지에 캐싱해두고 다시 불러오는 방식으로 동적 라우트를 복원합니다.

[src/permission.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/permission.ts)에서는 아래와 같이 `userStore.getUserInfo`가 없을 경우, `permissionStore.getRouters`의 상태와 `NO_REDIRECT_WHITE_LIST`를 통해 예외 처리를 수행하며, 나머지 경우에는 `login?redirect=${to.path}`으로 유도합니다.

라우트 복원은 로그인 성공 이후 `permissionStore.generateRoutes(...)` 호출 시 다시 수행되며, 캐싱된 `roleRouters`를 불러와 활용합니다.

```ts
if (userStore.getUserInfo) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (permissionStore.getIsAddRouters) {
        next()
        return
      }

      // Developers can modify it according to the actual situation
      const roleRouters = userStore.getRoleRouters || []

      // Whether to use dynamic routing
      if (appStore.getDynamicRouter) {
        appStore.serverDynamicRouter
          ? await permissionStore.generateRoutes('server', roleRouters as AppCustomRouteRecordRaw[])
          : await permissionStore.generateRoutes('frontEnd', roleRouters as string[])
      } else {
        await permissionStore.generateRoutes('static')
      }

      permissionStore.getAddRouters.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw) // Dynamic adding accessable routing table
      })
      const redirectPath = from.query.redirect || to.path
      const redirect = decodeURIComponent(redirectPath as string)
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
      permissionStore.setIsAddRouters(true)
      next(nextData)
    }
  } else {
    if (to.path === '/' && permissionStore.getRouters.length) {
      next()
    }

    if (NO_REDIRECT_WHITE_LIST.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // Otherwise, all redirect to the login page
    }
  }
```

## 정적 라우트 (권한을 사용하지 않는 경우)

동적 라우트가 필요하지 않은 경우, `src/config/app.ts`에서 `dynamicRouter`를 `false`로 설정하면 프로젝트 내의 정적 라우트 테이블만을 사용할 수 있습니다.
