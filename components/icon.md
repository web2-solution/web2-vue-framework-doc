# Icon 아이콘 컴포넌트

프로젝트 내 컴포넌트 표시를 위해 사용되며, 기본적으로 모든 아이콘 라이브러리를 지원합니다 (필요에 따라 로드되며, 사용된 아이콘만 패키징됨). 로컬 SVG와 Iconify 아이콘 사용을 지원합니다.

Icon 컴포넌트 : [src/components/Icon](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Icon)

::: tip

Iconify에서 원하는 모든 아이콘을 검색하고 사용할 수 있습니다. 이 아이콘이 `element-plus` 아이콘 라이브러리 포함여부와는 상관없이 사용할 수 있습니다.

:::

## 사용법

### 기본 사용법

`svg-icon:`로 시작하는 경우, 로컬에서 해당 `SVG` 아이콘을 찾고, 그렇지 않으면 `Iconify` 아이콘을 로드합니다.

```vue
<template>
  <!-- 로컬 svg -->
  <Icon icon="svg-icon:peoples" />

  <!-- Iconify에서 불러오기 -->
  <Icon icon="ep:aim" />
</template>
```

### useIcon

다른 컴포넌트, 예를 들어 `ElButton`에 `icon` 속성을 전달해야 하는 경우, `useIcon`을 사용할 수 있습니다.

```vue
<script setup lang="ts">
  import { useIcon } from '@/hooks/web/useIcon';
  import { ElButton } from 'element-plus';

  const icon = useIcon({ icon: 'svg-icon:save' });
</script>

<template>
  <ElButton :icon="icon"> button </ElButton>
</template>
```

#### 파라미터 소개

```ts
const icon = useIcon(props);
```

**props**

## Icon 속성<span id="Icon"></span>

| 속성       | 설명        | 타입     | 옵션 | 기본값 |
| ---------- | ----------- | -------- | ------------ | ------ |
| icon       | 아이콘 이름 | `string` | -            | -      |
| color      | 아이콘 색상 | `string` | -            | -      |
| size       | 아이콘 크기 | `number` | -            | 16     |
| hoverColor | hover 색상  | `string` | -            | -      |
