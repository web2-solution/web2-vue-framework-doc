# Highlight 하이라이트 컴포넌트

Highlight 컴포넌트 : [src/components/Highlight](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Highlight) 

## 사용법

이 컴포넌트는 순수 텍스트만 받을 수 있습니다.

```vue
<script setup lang="ts">
import { Highlight } from '@/components/Highlight'
</script>

<template>
  <Highlight :keys="['10년 전', '현재']">
    나무를 심기에 가장 좋은 때는 10년 전이었고, 그 다음이 지금이다.
  </Highlight>
</template>

```

## Highlight 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| tag | 패키징 라벨 | `string` | - | span |
| keys | 하이라이트 키워드 | `string[]` | - | [] |
| color | 하이라이트 색상 | `string` | - | var(--el-color-primary) |

## Highlight 이벤트

| 함수명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| click | 키워드 클릭 이벤트 | key: string |
