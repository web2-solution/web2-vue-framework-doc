# InputPassword 비밀번호 입력

`element-plus`의 `Input` 컴포넌트를 래핑합니다.

InputPassword 컴포넌트 : [src/components/InputPassword](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/InputPassword) 

## 사용법

```vue
<script setup lang="ts">
import { InputPassword } from '@/components/InputPassword'
import { ref } from 'vue'

const password = ref('')
</script>

<template>
  <InputPassword v-model="password" strength />
</template>

```

## InputPassword 속성

다음 매개변수 이외에 `element-plus`의  `Input` 컴포넌트의 모든 속성을 지원 합니다，[자세히 보기](https://element-plus.org/zh-CN/component/input.html#autocomplete-%E5%B1%9E%E6%80%A7)

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| strength | 비밀번호 강도 검사 표시여부 | `boolean` | - | false |
| modelValue | 선택된 항목 바인딩 값, v-model 지원 | `string` | - | - |
