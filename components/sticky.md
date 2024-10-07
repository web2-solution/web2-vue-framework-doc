# Sticky 컴포넌트

`1.2.4` 추가

Sticky 컴포넌트 

## 사용법

```vue
<script setup lang="ts">
import { Sticky } from '@/components/Sticky'
</script>

<template>
  <Sticky :offset="90">
    <div style="padding: 10px; background-color: lightblue"> Sticky 상단에서부터 90px </div>
  </Sticky>
</template>

```

## Sticky 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| offset | 상단 또는 하단에서의 거리 | `number` | - | 0 |
| zIndex | 요소의 쌓이는 순서 | `number` | - | 999 |
| className | 지정된 클래스 설정 | `string`/`number` | - | - |
| position | 위치 설정 방식, 기본값은 (top)으로, 'top' 또는 'bottom'으로 설정할 수 있습니다. | `string` | top/bottom | top |
