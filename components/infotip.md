# Infotip 컴포넌트

`Highlight` 컴포넌트를 기반으로 래핑

Infotip 컴포넌트 [src/components/Infotip](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/Infotip)

## 사용법

```vue
<script setup lang="ts">
import { Infotip } from '@/components/Infotip'
</script>

<template>
  <Infotip
    title="Iconify 컴포넌트 사용을 권장합니다."
    :schema="[
      {
        label: 'Iconify 컴포넌트는 기본적으로 모든 아이콘을 포함하고 있어, 원하는 어떤 아이콘이든 검색할 수 있습니다. 또한, 번들링 시에는 사용된 아이콘만 포함되어 패키징됩니다.',
        keys: ['Iconify']
      },
      {
        label: '접속 주소',
        keys: ['접속 주소']
      }
    ]"
  />
</template>

```

## Infotip 속성

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| title | 제목 | `string` | - | - |
| schema | 표시할 데이터 내용 | `string[]`/`TipSchema[]` | - | [] |
| showIndex | 번호 표시 여부 | `boolean` | - | true |
| highlightColor | 하이라이트 색상 | `string` | - | var(--el-color-primary) |

## Infotip 이벤트

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| click | 키워드 클릭 이벤트 | key: string |
