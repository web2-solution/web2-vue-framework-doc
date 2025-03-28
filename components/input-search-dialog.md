# InputSearchDialog 입력 검색 다이얼로그 컴포넌트

`InputSearchDialog` 컴포넌트는 `InputSearch`와 `Dialog`를 결합하여, 입력 필드와 검색 다이얼로그를 함께 사용할 수 있도록 설계되었습니다. 이 컴포넌트는 검색과 관련된 입력 데이터를 관리하며, 다이얼로그를 통해 추가적인 사용자 인터페이스를 제공합니다.

InputSearchDialog 컴포넌트: [src/components/InputSearchDialog](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/InputSearchDialog)

## 사용법

### 기본 사용법

```vue
<script setup lang="tsx">
import { InputSearchDialog } from '@/components/InputSearchDialog'
import { ref } from 'vue'

const modelValue = ref(['', ''])
</script>

<template>
  <InputSearchDialog v-model="modelValue" />
</template>
```

### Props

| Prop 이름               | 타입                | 기본값       | 설명                                                                 |
|-------------------------|---------------------|--------------|----------------------------------------------------------------------|
| `modelValue`            | `[any, any]`       | `['', '']`   | 두 입력 필드의 값을 관리하는 배열입니다.                              |
| `disabledFirstInput`    | `boolean`          | `false`      | 첫 번째 입력 필드를 비활성화합니다.                                   |
| `disabledSecondInput`   | `boolean`          | `true`       | 두 번째 입력 필드를 비활성화합니다.                                   |
| `hideSecondInput`       | `boolean`          | `false`      | 두 번째 입력 필드를 숨깁니다.                                        |
| `firstInputProps`       | `object`           | `{}`         | 첫 번째 입력 필드에 전달할 추가 속성입니다.                           |
| `secondInputProps`      | `object`           | `{}`         | 두 번째 입력 필드에 전달할 추가 속성입니다.                           |
| `disabledSearchBtn`     | `boolean`          | `false`      | 검색 버튼을 비활성화합니다.                                           |
| `dialogProps`           | `object`           | `{}`         | 다이얼로그 컴포넌트에 전달할 추가 속성입니다.                         |
| `slots`                 | `object`           | `{}`         | 다이얼로그 내부에 렌더링할 슬롯을 정의합니다.                         |

### Emits

| 이벤트 이름             | 파라미터                          | 설명                                                                 |
|-------------------------|------------------------------------|----------------------------------------------------------------------|
| `update:modelValue`     | `[any, any]`                      | 입력값이 변경될 때 발생합니다.                                        |
| `search`               | `any`                             | 검색 버튼 클릭 또는 Enter 키 입력 시 첫 번째 입력 필드 값을 전달합니다. |

### 고급 사용법

#### 두 번째 입력 필드 숨기기

```vue
<script setup lang="tsx">
import { InputSearchDialog } from '@/components/InputSearchDialog'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearchDialog v-model="modelValue" :hideSecondInput="true" />
</template>
```

#### 다이얼로그 속성 전달

```vue
<script setup lang="tsx">
import { InputSearchDialog } from '@/components/InputSearchDialog'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
const dialogProps = { title: 'Custom Dialog Title' }
</script>

<template>
  <InputSearchDialog v-model="modelValue" :dialogProps="dialogProps" />
</template>
```

#### 검색 버튼 비활성화

```vue
<script setup lang="tsx">
import { InputSearchDialog } from '@/components/InputSearchDialog'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearchDialog v-model="modelValue" :disabledSearchBtn="true" />
</template>
```

#### 슬롯을 활용한 다이얼로그 내용 커스터마이징

```vue
<script setup lang="tsx">
import { InputSearchDialog } from '@/components/InputSearchDialog'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearchDialog v-model="modelValue">
    <div>
      <h3>커스텀 다이얼로그 내용</h3>
      <p>여기에 원하는 내용을 추가할 수 있습니다.</p>
    </div>
  </InputSearchDialog>
</template>
```

::: tip 참고
`<template #default>`를 명시적으로 지정하지 않아도, 기본 슬롯으로 다이얼로그 내용을 렌더링할 수 있습니다.
:::

#### JSX를 활용한 다이얼로그 내용 커스터마이징

```tsx
<script setup lang="tsx">
import { InputSearchDialog } from '@/components/InputSearchDialog'
import { ref } from 'vue'

const modelValue = ref(['KR', 'Korea'])
</script>

<template>
  <InputSearchDialog v-model="modelValue" v-slots={{
    default: () => (
      <div>
        <h3>커스텀 다이얼로그 내용 (JSX)</h3>
        <p>JSX를 사용하여 다이얼로그 내용을 정의할 수 있습니다.</p>
      </div>
    )
  }} />
</template>
```

::: tip 참고
JSX를 사용하면 Vue의 `v-slots` 속성을 활용하여 다이얼로그의 기본 슬롯을 정의할 수 있습니다.
:::
