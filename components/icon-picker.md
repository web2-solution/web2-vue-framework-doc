# IconPicker 아이콘 선택 컴포넌트

Iconify 아이콘을 선택하는데 사용됩니다.

IconPicker 컴포넌트 [src/components/IconPicker](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/IconPicker) 

::: tip

현재는 Ant Design Icons, Element Plus, TDesign Icons 세 가지 오픈 소스 프로젝트의 아이콘만 통합되어 있습니다.

:::

## 사용법


```vue
<script lang="ts" setup>
import { IconPicker } from '@/components/IconPicker'

const currentIcon = ref('tdesign:book-open')
</script>

<template>
  <IconPicker v-model="currentIcon" />
</template>

```

## 다른 오픈 소스 프로젝트의 아이콘을 추가하는 방법

`pnpm run icon`을 실행한 후, 원하는 아이콘 세트를 선택할 수 있습니다.

그 후, [IconPicker.vue](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/components/IconPicker/src/IconPicker.vue) 에서 해당 아이콘을 가져와 `icons`에 추가하면 됩니다.

## Icon 속성<span id="Icon"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| modelValue | 선택된 항목의 바인딩 값, v-model 지원 | `string` | - | - |
