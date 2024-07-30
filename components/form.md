# Form 폼 컴포넌트

`element-plus`의 `Form` 컴포넌트를 래핑하여, `element-plus`의 모든 폼 컴포넌트를 지원하며, 추가적인 기능도 확장하였습니다.

Form 컴포넌트: [src/components/Form](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/Form)

::: warning Form 컴포넌트 사용 시, tsx를 사용하는 것이 권장됩니다.
:::

## 사용법

현재 지원되는 폼 컴포넌트는 [온라인 미리보기](https://element-plus-admin.cn/#/components/form/default-form)에서 확인할 수 있습니다.

### 기본 사용법

```vue
<script setup lang="ts">
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

좀 더 복잡한 예제를 보고 싶다면，[온라인 미리보기](https://element-plus-admin.cn/#/components/form/use-form)를 참조 해주세요.

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

#### 파라미터 정의

```ts
const { formRegister, formMethods } = useForm()
```

**register**

`formRegister`는 `useForm`을 등록하는 데 사용됩니다.

 `useForm`에서 제공하는 `api`를 사용하려면, 반드시 `formRegister`를 컴포넌트의 `onRegister`에 전달해야 합니다.

**formMethods**

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setValues | 폼의 값을 설정 | (data: Recordable) => void |
| setProps | 폼 속성을 설정 | (props: Recordable) => void |
| delSchema | 폼 구조를 삭제 | (field: string) => void |
| addSchema | 폼 구조를 추가 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 폼 구조를 편집 | (schemaProps: FormSetPropsType[]) => void |
| getFormData | 폼 데이터를 가져오는 함수 | `<T = Recordable>() => Promise<T>` |
| getComponentExpose | 폼 컴포넌트의 인스턴스를 가져오는 함수, ex-ElInput | (field: string) => any |
| getFormItemExpose | formItem 컴포넌트 인스턴스를 가져오는 함수 | `(field: string) => Promise<ComponentRef<typeof ElFormItem>>` |
| getElFormExpose | elForm 컴포넌트 인스턴스를 가져오는 함수 | `(field: string) => Promise<ComponentRef<typeof ElForm>>` |
| getFormExpose | 커스터마이징된 Form 컴포넌트 인스턴스를 가져오는 함수 | `() => Promise<ComponentRef<typeof Form>>` |

## Form 속성<span id="Form"></span>

 
다음 매개변수 이외에, element-plus의 Form의 모든 속성을 지원합니다.  
[온라인 미리보기](https://element-plus.org/zh-CN/component/form.html#form-%E5%B1%9E%E6%80%A7)

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| schema | Form의 레이아웃 구조 배열을 생성 [자세한 내용](#Schema) | `FormSchema` | - | [] |
| isCol | 격자 레이아웃 필요 여부 | `boolean` | - | true |
| model | 폼 데이터 객체 | `Recordable` | - | {} |
| autoSetPlaceholder | placeholder 자동설정 여부 | `boolean` | - | true |
| isCustom | 콘텐츠 커스터마이징 여부 | `boolean` | - | false |
| labelWidth | 폼 label 너비 | `string`/`number` | - | auto |

### Schema<span id="Schema"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| field | 필드 이름, 고유 값(필수 항목) | `string` | - | - |
| label | 제목 | `string` | - | - |
| colProps | element-plus 의 col 컴포넌트 속성 | `ColProps` | - | - |
| componentProps | form 컴포넌트의 하위 속성 [자세한 내용](#ComponentProps) | `any` | - | - |
| formItemProps | element-plus의 form-item 컴포넌트 속성 [자세한 내용](#FormItemProps) | `FormItemProps` | - | - |
| component | 렌더링 될 폼 하위 컴포넌트 | `ComponentName` | - | - |
| value | 폼 하위 컴포넌트의 초기 값 | `any` | - | - |
| hidden | 폼 하위 컴포넌트 숨김 여부 | `boolean` | - | - |
| remove | 폼 하위 컴포넌트 숨김 여부，`true`로 설정하면 값과 함께 삭제되며 v-if와 유사합니다. | `boolean` | - | - |
| optionApi | option 함수 호출 | `() => Promise<any>` | - | - |

### ComponentProps<span id="ComponentProps"></span>

componentProps 종류： `InputComponentProps` `AutocompleteComponentProps` `InputNumberComponentProps` `SelectComponentProps` `SelectV2ComponentProps` `CascaderComponentProps` `SwitchComponentProps` `RateComponentProps` `ColorPickerComponentProps` `TransferComponentProps` `RadioGroupComponentProps` `RadioButtonComponentProps` `DividerComponentProps` `DatePickerComponentProps` `DateTimePickerComponentProps` `TimePickerComponentProps` `InputPasswordComponentProps` `TreeSelectComponentProps` `UploadComponentProps` `any`


기본적으로 각 폼 컴포넌트는 `slots` 슬롯 객체를 가지고 있으며,

 이를 통해 슬롯을 사용자가 정의할 수 있습니다.  

예시

 InputComponentProps 

```ts
slots?: {
  prefix?: (...args: any[]) => JSX.Element | null
  suffix?: (...args: any[]) => JSX.Element | null
  prepend?: (...args: any[]) => JSX.Element | null
  append?: (...args: any[]) => JSX.Element | null
}
```

컴포넌트의 이벤트를 처리해야 하는 경우, 예를 들어 change 이벤트와 같은 경우, 
 
 각 ComponentProps에는 기본적으로 이벤트를 수신하기 위한 on 객체가 있습니다.  
 
 예시
 
  InputComponentProps 

```ts
on?: {
  blur?: (event: FocusEvent) => void
  focus?: (event: FocusEvent) => void
  change?: (value: string | number) => void
  clear?: () => void
  input?: (value: string | number) => void
}

```

### FormItemProps<span id="FormItemProps"></span>

다음 속성 외에도, `element-plus`의 `FormItem`에서 지원하는 모든 속성을 지원합니다.

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| slots | FormItem의 슬롯 | `Object` | - | - |
| style | Form 항목의 스타일 | `CSSProperties` | - | - |

## Form 메소드

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setValues | 폼 값을 설정 | (data: Recordable) => void |
| setProps | 폼 속성을 설정 | (props: Recordable) => void |
| delSchema | 폼 구조를 삭제 | (field: string) => void |
| addSchema | 폼 구조를 추가 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 폼 구조를 편집 | (schemaProps: FormSetPropsType[]) => void |
| getComponentExpose | 폼 자식 컴포넌트의 인스턴스를 가져오는 데 사용, 예를들어 ElInput 인스턴스 | (field: string) => any |
| getFormItemExpose | FormItem 컴포넌트의 인스턴스를 가져오는 데 사용 | `() => Promise<typeof FormItem>` |


## 폼 자식 컴포넌트를 추가하는 방법

프로젝트에 내장된 폼 컴포넌트가 요구 사항을 충족하지 않을 때, 직접 자신의 컴포넌트를 추가할 수 있습니다.

1. [src/components/Form/src/types/index.ts](https://github.com/web2-solution/web2-vue-framework/blob/dev/src/components/Form/src/types/index.ts) 에서 `ComponentName` 컴포넌트 이름을 추가 할 수 있습니다.
2.  [src/components/Form/src/helper/componentMap.ts](https://github.com/web2-solution/web2-vue-framework/blob/dev/src/components/Form/src/helper/componentMap.ts) 에서 `componentMap` 객체에 키-값을 추가 하세요.
3. 더 나은 타입 힌트를 원하시면, 사용자 정의 컴포넌트의 타입을  `componentProps`에도 추가 하세요.