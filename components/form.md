# Form 폼 컴포넌트

`element-plus`의 `Form` 컴포넌트를 래핑하여 구현되었습니다. `element-plus`의 모든 폼 컴포넌트를 지원하며, 추가적인 기능도 확장하였습니다.

Form 컴포넌트: [src/components/Form](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Form)

::: warning Form 컴포넌트 사용 시, tsx 사용을 권장합니다.
:::

## 주요 기능

1. **동적 폼 생성**: `schema` 속성을 통해 폼 레이아웃과 컴포넌트를 동적으로 생성.
2. **유연한 레이아웃**: `isCol` 속성을 사용하여 그리드 레이아웃 활성화.
3. **폼 데이터 관리**: `model` 속성을 통해 폼 데이터를 양방향으로 바인딩.
4. **커스터마이징 가능**: `componentMap.ts`를 통해 사용자 정의 컴포넌트 추가 가능.
5. **슬롯 지원**: 각 컴포넌트는 `slots` 객체를 통해 사용자 정의 콘텐츠 삽입 가능.

## 사용법

### 기본 사용법

```vue
<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive } from 'vue'

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'input',
    component: 'Input'
  }
])
</script>

<template>
  <Form :schema="schema" />
</template>
```

### useForm

복잡한 상황에서는 `useForm`과 함께 사용하는 것이 좋습니다.

```vue
<script setup lang="tsx">
import { Form, FormSchema } from '@/components/Form'
import { reactive } from 'vue'
import { useForm } from '@/hooks/web/useForm'

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'input',
    component: 'Input'
  }
])

const { formRegister } = useForm()
</script>

<template>
  <Form :schema="schema" @register="formRegister" />
</template>
```

## Form 속성

| 속성 | 설명 | 타입 | 기본값 |
| ---- | ---- | ---- | ---- |
| schema | Form의 레이아웃 구조 배열 | `FormSchema` | `[]` |
| isCol | 격자 레이아웃 필요 여부 | `boolean` | `true` |
| model | 폼 데이터 객체 | `Recordable` | `{}` |
| autoSetPlaceholder | placeholder 자동설정 여부 | `boolean` | `true` |
| isCustom | 콘텐츠 커스터마이징 여부 | `boolean` | `false` |
| labelWidth | 폼 label 너비 | `string`/`number` | `auto` |

## Schema

| 속성 | 설명 | 타입 | 기본값 |
| ---- | ---- | ---- | ---- |
| field | 필드 이름 (고유 값) | `string` | - |
| label | 제목 | `string` | - |
| componentProps | 컴포넌트의 추가 속성 | `any` | - |
| formItemProps | `FormItem`의 추가 속성 | `FormItemProps` | - |
| component | 렌더링 될 컴포넌트 | `ComponentName` | - |
| value | 초기 값 | `any` | - |
| hidden | 항목 숨김 여부 | `boolean` | `false` |
| remove | 항목 제거 여부 | `boolean` | `false` |

## SelectComponentProps

| 속성          | 설명                                                                 | 타입                     | 기본값 |
| ------------- | -------------------------------------------------------------------- | ------------------------ | ------ |
| `options`     | 선택 가능한 옵션 배열                                                | `SelectOption[]`         | `[]`   |
| `hasAllOption`| "전체" 옵션 추가 여부                                               | `boolean`                | `false`|
| `optionStyle` | 옵션 스타일 (e.g., `brackets`, `separator`, `valueOnly`)             | `'brackets' \| 'separator' \| 'valueOnly' \| undefined` | `undefined` |
| `optionApi`   | 옵션 데이터를 비동기로 로드하는 함수                                 | `() => Promise<SelectOption[]>` | `undefined` |

### 옵션 스타일 예제

```tsx
<script setup lang="tsx">
import { reactive } from 'vue'
import { FormSchema } from '@/components/Form'

const schema = reactive<FormSchema[]>([
  {
    field: 'selectField',
    label: 'Select with Option Style',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      hasAllOption: true,
      optionStyle: 'brackets'
    }
  }
])
</script>

<template>
  <Form :schema="schema" />
</template>
```

### 옵션 비동기 로드 예제

`optionApi`를 사용하여 옵션 데이터를 비동기로 로드할 수 있습니다. 

```tsx
<script setup lang="tsx">
import { reactive } from 'vue'
import { FormSchema } from '@/components/Form'
import { getDictOneApi } from '@/api/common'

const schema = reactive<FormSchema[]>([
  {
    field: 'selectField',
    label: 'Select with Async Options',
    component: 'Select',
    componentProps: {
      options: []
    },
    optionApi: async () => {
      const res = await getDictOneApi()
      return res.data.map(({ codeCd, codeNm }) => ({
        value: codeCd,
        label: codeNm
      }))
    }
  }
])
</script>

<template>
  <Form :schema="schema" />
</template>
```

### DefaultForm 예제

```vue
<script setup lang="tsx">
import { reactive } from 'vue'
import { FormSchema } from '@/components/Form'

const schema = reactive<FormSchema[]>([
  {
    field: 'selectField',
    label: 'Select with Custom Slot',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
      ],
      slots: {
        optionDefault: (option) => (
          <div>
            <span>{option.label}</span>
            <span style="float: right; color: gray;">{option.value}</span>
          </div>
        )
      }
    }
  }
])
</script>

<template>
  <Form :schema="schema" />
</template>
```

## FormItemProps

| 속성 | 설명 | 타입 | 기본값 |
| ---- | ---- | ---- | ---- |
| slots | FormItem의 슬롯 | `Object` | - |
| style | Form 항목의 스타일 | `CSSProperties` | - |

## Form 메소드

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setValues | 폼 값을 설정 | (data: Recordable) => void |
| setProps | 폼 속성을 설정 | (props: Recordable) => void |
| delSchema | 폼 구조를 삭제 | (field: string) => void |
| addSchema | 폼 구조를 추가 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 폼 구조를 편집 | (schemaProps: FormSetPropsType[]) => void |
| getComponentExpose | 폼 자식 컴포넌트의 인스턴스를 가져오는 데 사용 | (field: string) => any |
| getFormItemExpose | FormItem 컴포넌트의 인스턴스를 가져오는 데 사용 | `(field: string) => Promise<typeof FormItem>` |

## 폼 자식 컴포넌트 추가 방법

1. `ComponentName`에 새 컴포넌트 이름 추가.
2. `componentMap` 객체에 새 컴포넌트 등록.
3. 사용자 정의 컴포넌트의 타입을 `componentProps`에 추가.