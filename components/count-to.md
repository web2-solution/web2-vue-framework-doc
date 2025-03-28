# CountTo 숫자 애니메이션 컴포넌트

`vue-count-to`를 기반으로 개선

CountTo 컴포넌트 : [src/components/CountTo](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/CountTo) 

## 사용법

더 복잡한 예시는 [온라인 미리보기](http://demo-wils.logis-hub.co.kr/#/components/form/default-form)에서 확인할 수 있습니다.

```vue
<script setup lang="tsx">
import { CountTo } from '@/components/CountTo'
</script>

<template>
  <CountTo :start-val="0" :end-val="35225" />
</template>

```

## CountTo 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| startVal | 초기값 | `number` | - | 0 |
| endVal | 최종값 | `number` | - | 2021 |
| duration | 애니메이션 시간 | `number` | - | 3000 |
| autoplay | 자동재생 여부 | `boolean` | - | true |
| decimals | 소수점 자릿수 | `number` | - | 0 |
| decimal | 소수점 자릿수 구분 기호 | `string` | - | . |
| separator | 구분 기호 | `string` | - | , |
| prefix | 접두사 | `string` | - | - |
| suffix | 접미사 | `string` | - | - |
| useEasing | 전환 애니메이션 | `boolean` | - | true |
| easingFn | 사용자 정의 애니메이션 | `(t: number, b: number, c: number, d: number) => number` | - | - |
