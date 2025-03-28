# InputSearch 입력 검색 컴포넌트

`InputSearch` 컴포넌트는 두 개의 입력 필드와 검색 버튼을 제공하여, 검색 및 입력 데이터를 관리할 수 있도록 설계되었습니다. 첫 번째 입력 필드는 필수이며, 두 번째 입력 필드는 선택적으로 숨기거나 비활성화할 수 있습니다.

InputSearch 컴포넌트: [src/components/InputSearch](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/InputSearch)

## 사용법

### 기본 사용법

```vue
<script setup lang="tsx">
import { InputSearch } from '@/components/InputSearch'
import { ref } from 'vue'

const modelValue = ref(['', ''])
</script>

<template>
  <InputSearch v-model="modelValue" />
</template>
```

### Props

| Prop 이름               | 타입                | 기본값       | 설명                                                                 |
|-------------------------|---------------------|--------------|----------------------------------------------------------------------|
| `modelValue`            | `[string, string]` | `['', '']`   | 두 입력 필드의 값을 관리하는 배열입니다.                              |
| `disabledFirstInput`    | `boolean`          | `false`      | 첫 번째 입력 필드를 비활성화합니다.                                   |
| `disabledSecondInput`   | `boolean`          | `true`       | 두 번째 입력 필드를 비활성화합니다.                                   |
| `hideSecondInput`       | `boolean`          | `false`      | 두 번째 입력 필드를 숨깁니다.                                        |
| `firstInputProps`       | `object`           | `{}`         | 첫 번째 입력 필드에 전달할 추가 속성입니다.                           |
| `secondInputProps`      | `object`           | `{}`         | 두 번째 입력 필드에 전달할 추가 속성입니다.                           |
| `disabledSearchBtn`     | `boolean`          | `false`      | 검색 버튼을 비활성화합니다.                                           |

### Emits

| 이벤트 이름             | 파라미터                          | 설명                                                                 |
|-------------------------|------------------------------------|----------------------------------------------------------------------|
| `update:modelValue`     | `[string, string]`                | 입력값이 변경될 때 발생합니다.                                        |
| `search`               | `string`                          | 검색 버튼 클릭 또는 Enter 키 입력 시 첫 번째 입력 필드 값을 전달합니다. |

### 고급 사용법

#### 두 번째 입력 필드 숨기기

```vue
<script setup lang="tsx">
import { InputSearch } from '@/components/InputSearch'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearch v-model="modelValue" :hideSecondInput="true" />
</template>
```

#### 첫 번째 입력 필드 비활성화

```vue
<script setup lang="tsx">
import { InputSearch } from '@/components/InputSearch'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearch v-model="modelValue" :disabledFirstInput="true" />
</template>
```

#### 검색 버튼 비활성화

```vue
<script setup lang="tsx">
import { InputSearch } from '@/components/InputSearch'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearch v-model="modelValue" :disabledSearchBtn="true" />
</template>
```
