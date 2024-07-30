# Descriptions 컴포넌트 설명

::: warning v2.5.3 이후, Descriptions 컴포넌트는 더 이상 `element-plus`의 `Descriptions`를 기반으로 한 확장을 제공하지 않습니다. 따라서 일부 속성을 사용할 수 없을 수 있습니다. 구체적인 수정이나 변경은 직접 진행하시거나, 이슈를 제기하실 수 있습니다.
:::

~~`element-plus` 의 `Descriptions` 의 컴포넌트를 확장。~~

Descriptions 컴포넌트 : [src/components/Descriptions](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/Descriptions) 

::: warning Descriptions 컴포넌트를 사용하려면 **tsx**를 사용하는 것이 좋습니다.
:::

## 사용법

더 복잡한 예시, [온라인 미리보기](https://element-plus-admin.cn/#/components/descriptions)

```vue
<script setup lang="tsx">
import { Descriptions, DescriptionsSchema } from '@/components/Descriptions'
import { reactive } from 'vue'

const data = reactive({
  username: 'chenkl',
  nickName: '꿈은 꽃이 지듯',
  age: 26,
  phone: '13655971xxxx',
  email: '502431556@qq.com',
  addr: 'Seoul',
  sex: '남',
  certy: '3505831994xxxxxxxx'
})

const schema = reactive<DescriptionsSchema[]>([
  {
    field: 'username',
    label: 'username'
  },
  {
    field: 'nickName',
    label: 'nickName'
  },
  {
    field: 'phone',
    label: 'phone'
  },
  {
    field: 'email',
    label: 'email'
  },
  {
    field: 'addr',
    label: 'addr',
    span: 24
  }
])
</script>

<template>
  <Descriptions
    title="descriptions"
    message="message"
    :data="data"
    :schema="schema"
  />
</template>

```

## Descriptions 속성

다음 매개변수 이외에, `element-plus`의 `Descriptions`에서 지원하는 모든 속성을 지원합니다. 

 [자세히 보기](https://element-plus.org/zh-CN/component/descriptions.html#descriptions-%E5%B1%9E%E6%80%A7)

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| title | 제목 | `string` | - | - |
| message | 알림 | `string` | - | - |
| collapse | 확장 버튼 표시여부 | `boolean` | - | true |
| schema | 레이아웃 구조 데이터，[참조](#Schema) | `DescriptionsSchema[]` | - | [] |
| data | 데이터 | `Recordable` | - | {} |

### Schema<span id="Schema"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| span | 그리드 비율 | `number` | - | - |
| field | 필드 이름, 고유 값, (data에서의 속성 이름과 일치해야 합니다.) | `string` | - | - |
| label | 제목 | `string` | - | - |
| width | 목록 너비 | `string`/`number` | - | - |
| minWidth | 목록 최소 너비 | `string`/`number` | - | - |
| align | 정렬 방식 | `string` | left/center/right | left |
| labelAlign | 제목 정렬 방식 | `string` | left/center/right | left |
| className | 사용자 지정 클래스 이름 | `string` | - | - |
| labelClassName | 사용자 지정 제목 클래스 이름 | `string` | - | - |
| slots | 슬롯 | `object` | - | - |
