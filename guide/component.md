# 컴포넌트 등록 방법
Vue 프로젝트에서 컴포넌트를 등록하는 방법에는 두 가지가 있습니다
 - 필요에 따라 가져오기 (`import`)
 - 전역 등록

## 필요에 따라 가져오기 (Import on demand)

현재 프로젝트는 페이지에서 필요한 컴포넌트를 임포트하는 방식으로 구성되어 있습니다.

```vue
<script setup lang="ts">
import { ElBacktop } from 'element-plus' // 페이지에서 사용할 컴포넌트 가져오기
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls, variables } = useDesign()

const prefixCls = getPrefixCls('backtop')
</script>

<template>
  <ElBacktop
    :class="`${prefixCls}-backtop`"
    :target="`.${variables.namespace}-layout-content-scrollbar .${variables.elNamespace}-scrollbar__wrap`"
  />
</template>

```

### tsx 파일 등록

**주의:** tsx 파일은 전역 컴포넌트로 등록할 수 없습니다. 따라서 tsx로 작성된 모든 컴포넌트는 수동으로 가져와야 합니다.

## 전역 등록

필요한 컴포넌트를 매번 가져오는 것이 번거롭다면, 전역 등록 방식을 사용할 수 있습니다. 이 방식은 자주 사용하는 컴포넌트를 한 번만 등록해두고, import 구문없이 어디서든 사용할 수 있게 해줍니다.

이 경우,[src/components/index.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/components/index.ts)파일에 등록할 컴포넌트를 추가하면 됩니다.

현재 `Icon`, `Permission`, `BaseButton` 컴포넌트가 전역으로 등록되어 있습니다.

```ts
import type { App } from 'vue'
import { Icon } from './Icon'
import { Permission } from './Permission'
import { BaseButton } from './Button'

export const setupGlobCom = (app: App<Element>): void => {
  app.component('Icon', Icon)
  app.component('Permission', Permission)
  app.component('BaseButton', BaseButton)
}
```

만약 `element-plus`의 컴포넌트를 전역 등록해야 한다면, [src/plugins/elementPlus/index.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/plugins/elementPlus/index.ts) 파일에 등록할 컴포넌트를 추가하세요.

현재 `element-plus` 에서는 `ElLoading` 과 `ElScrollbar`만 전역 등록되어 있습니다.

```
import type { App } from 'vue'

// ElScrollbar는 페이지 및 컴포넌트 내 스크롤 기능에 자주 사용되므로, 
// 전역 등록이 필수로 요구됩니다. 그렇지 않으면 드롭다운 등의 스타일이 올바르게 적용되지 않을 수 있습니다.
import { ElLoading, ElScrollbar } from 'element-plus'

const plugins = [ElLoading]

const components = [ElScrollbar]

export const setupElementPlus = (app: App) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })

  components.forEach((component) => {
    app.component(component.name, component)
  })
}

```
