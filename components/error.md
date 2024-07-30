# Error 기본 컴포넌트

`404`,`403`,`500` 등 다양한 오류 페이지와 같은 컴포넌트에 사용됩니다。

Error 컴포넌트 : [src/components/Error](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/Error) 

## 사용법

```vue
<script setup lang="ts">
import { Error } from '@/components/Error'
</script>

<template>
  <Error />
</template>

```

## Error 속성

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| type | 대체 화면 유형을 설정 | `string` | - | 404 |

## Error 이벤트

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| errorClick | 버튼 클릭 후의 콜백 | - |

## 새로운 유형을 확장하는 방법

현재는 `404`, `403`, `500`의 세 가지 유형만 제공됩니다. 만약 실제 요구에 맞지 않는 경우, 직접 확장할 수 있습니다.

[src/components/Error/src/Error.vue](https://github.com/web2-solution/web2-vue-framework/blob/dev/src/components/Error/src/Error.vue) 파일의 `errorMap` 객체에서 해당 유형을 확장하면 됩니다。
