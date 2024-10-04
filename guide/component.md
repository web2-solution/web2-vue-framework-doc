# 컴포넌트 등록

## 필요에 따라 가져오기 (Import on demand)

현재 프로젝트의 컴포넌트 등록 방식은 필요에 따라 등록되는 방식입니다. 즉, 필요한 페이지에서만 컴포넌트를 가져옵니다.

```vue
<script setup lang="ts">
import { ElBacktop } from 'element-plus'
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

**tsx 파일 내에서는 전역 등록된 컴포넌트를 사용할 수 없습니다**，컴포넌트를 수동으로 가져와서 사용해야 합니다.

## 전역 등록

필요에 따라 가져오는 방식이 번거롭게 느껴진다면, 전역 등록을 사용할 수 있습니다. 

이 경우,[src/components/index.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/components/index.ts)파일에 등록할 컴포넌트를 추가하면 됩니다.

현재 `Icon`, `Permission`, `BaseButton`, `AgGridVue` 컴포넌트가 전역으로 등록되어 있습니다.

```ts
import type { App } from 'vue'
import { Icon } from './Icon'
import { Permission } from './Permission'
import { BaseButton } from './Button'
import { AgGridVue } from 'ag-grid-vue3' // AG Grid Component

export const setupGlobCom = (app: App<Element>): void => {
  app.component('Icon', Icon)
  app.component('Permission', Permission)
  app.component('BaseButton', BaseButton)
  app.component('AgGridVue', AgGridVue)
}
```

만약 `element-plus`의 컴포넌트를 전역 등록해야 한다면, [src/plugins/elementPlus/index.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/plugins/elementPlus/index.ts) 파일에 등록할 컴포넌트를 추가하세요.

현재 `element-plus` 에서는 `ElLoading` 과 `ElScrollbar`만 전역 등록되어 있습니다.

```
import type { App } from 'vue'

// ElScrollbar의 경우, 페이지 및 컴포넌트 스크롤에 사용되기 때문에 전역적으로 등록해야 합니다. 
// 그렇지 않으면 드롭다운 항목의 스타일이 제대로 적용되지 않을 수 있습니다.
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
