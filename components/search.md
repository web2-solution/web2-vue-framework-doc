# Search 검색 컴포넌트

`Form` 컴포넌트를 기반으로 한 래퍼이며, 축소 및 확장을 지원합니다.

Search 컴포넌트 :  [src/components/Search](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Search) 

::: warning 주의
`Search` 컴포넌트를 사용할 때는 `tsx`를 사용하는 것이 좋습니다.
:::

## 사용법

### 기본 사용법

```vue
<script setup lang="ts">
import { Search } from '@/components/Search'
import { FormSchema } from '@/components/Form'
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
  <Search :schema="schema" />
</template>

```

### useSearch

복잡한 상황에서는 `useSearch`와 함께 사용할 수 있습니다.

```vue
<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Search } from '@/components/Search'
import { reactive, ref, unref } from 'vue'
import { ElButton } from 'element-plus'
import { getDictOneApi } from '@/api/common'
import { FormSchema } from '@/components/Form'
import { useSearch } from '@/hooks/web/useSearch'

const { t } = useI18n()

const { searchRegister, searchMethods } = useSearch()
const { setSchema, setProps, setValues } = searchMethods

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field2',
    label: t('formDemo.select'),
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'option1',
          value: '1'
        },
        {
          label: 'option2',
          value: '2'
        }
      ],
      on: {
        change: (value: string) => {
          console.log(value)
        }
      }
    }
  },
  {
    field: 'field3',
    label: t('formDemo.radio'),
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field5',
    component: 'DatePicker',
    label: t('formDemo.datePicker'),
    componentProps: {
      type: 'date'
    }
  },
  {
    field: 'field6',
    component: 'TimeSelect',
    label: t('formDemo.timeSelect')
  },
  {
    field: 'field8',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field9',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field10',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field11',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field12',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field13',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field14',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field15',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field16',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field17',
    label: t('formDemo.input'),
    component: 'Input'
  },
  {
    field: 'field18',
    label: t('formDemo.input'),
    component: 'Input'
  }
])

const isGrid = ref(false)

const changeGrid = (grid: boolean) => {
  setProps({
    isCol: grid
  })
  // isGrid.value = grid
}

const layout = ref('inline')

const changeLayout = () => {
  layout.value = unref(layout) === 'inline' ? 'bottom' : 'inline'
}

const buttonPosition = ref('left')

const changePosition = (position: string) => {
  layout.value = 'bottom'
  buttonPosition.value = position
}

const getDictOne = async () => {
  const res = await getDictOneApi()
  if (res) {
    setSchema([
      {
        field: 'field2',
        path: 'componentProps.options',
        value: res.data
      }
    ])
  }
}

const handleSearch = (data: any) => {
  console.log(data)
}

const delRadio = () => {
  setSchema([
    {
      field: 'field3',
      path: 'remove',
      value: true
    }
  ])
}

const restoreRadio = () => {
  setSchema([
    {
      field: 'field3',
      path: 'remove',
      value: false
    }
  ])
}

const setValue = () => {
  setValues({
    field1: 'Joy'
  })
}

const searchLoading = ref(false)
const changeSearchLoading = () => {
  searchLoading.value = true
  setTimeout(() => {
    searchLoading.value = false
  }, 2000)
}

const resetLoading = ref(false)
const changeResetLoading = () => {
  resetLoading.value = true
  setTimeout(() => {
    resetLoading.value = false
  }, 2000)
}
</script>

<template>
  <ContentWrap
    :title="`${t('searchDemo.search')} ${t('searchDemo.operate')}`"
    style="margin-bottom: 20px"
  >
    <ElButton @click="changeGrid(true)">{{ t('searchDemo.grid') }}</ElButton>
    <ElButton @click="changeGrid(false)">
      {{ t('searchDemo.restore') }} {{ t('searchDemo.grid') }}
    </ElButton>

    <ElButton @click="changeLayout">
      {{ t('searchDemo.button') }} {{ t('searchDemo.position') }}
    </ElButton>

    <ElButton @click="changePosition('left')">
      {{ t('searchDemo.bottom') }} {{ t('searchDemo.position') }}-{{ t('searchDemo.left') }}
    </ElButton>
    <ElButton @click="changePosition('center')">
      {{ t('searchDemo.bottom') }} {{ t('searchDemo.position') }}-{{ t('searchDemo.center') }}
    </ElButton>
    <ElButton @click="changePosition('right')">
      {{ t('searchDemo.bottom') }} {{ t('searchDemo.position') }}-{{ t('searchDemo.right') }}
    </ElButton>
    <ElButton @click="getDictOne">
      {{ t('formDemo.select') }} {{ t('searchDemo.dynamicOptions') }}
    </ElButton>
    <ElButton @click="delRadio">{{ t('searchDemo.deleteRadio') }}</ElButton>
    <ElButton @click="restoreRadio">{{ t('searchDemo.restoreRadio') }}</ElButton>
    <ElButton @click="setValue">{{ t('formDemo.setValue') }}</ElButton>

    <ElButton @click="changeSearchLoading">
      {{ t('searchDemo.search') }} {{ t('searchDemo.loading') }}
    </ElButton>
    <ElButton @click="changeResetLoading">
      {{ t('searchDemo.reset') }} {{ t('searchDemo.loading') }}
    </ElButton>
  </ContentWrap>

  <ContentWrap :title="t('searchDemo.search')" :message="t('searchDemo.searchDes')">
    <Search
      :schema="schema"
      :is-col="isGrid"
      :layout="layout"
      :button-position="buttonPosition"
      :search-loading="searchLoading"
      :reset-loading="resetLoading"
      show-expand
      expand-field="field6"
      @search="handleSearch"
      @reset="handleSearch"
      @register="searchRegister"
    />
  </ContentWrap>
</template>

```

#### 파라미터 정의

```ts
const { searchRegister, searchMethods } = useSearch()
```

**register**

`searchRegister`는 `useSearch`를 등록하는 데 사용됩니다. `useSearch`에서 제공하는 `api`를 사용하려면 `searchRegister`를 컴포넌트의 `onRegister`에 전달해야 합니다.

**formMethods**

| 함수명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setValues | 폼 값을 설정 | (data: Recordable) => void |
| setProps | 폼 속성을 설정 | (props: Recordable) => void |
| delSchema | 폼 구조를 삭제 | (field: string) => void |
| addSchema | 폼 구조를 추가 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 폼 구조를 편집 | (schemaProps: FormSetPropsType[]) => void |
| getFormData | 폼 데이터를 가져옴 | `<T = Recordable>() => Promise<T>` |

## Search 속성

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| schema | Search의 레이아웃 구조 배열을 생성 [자세히 보기](#Schema) | `FormSchema` | - | [] |
| isCol | 격자 레이아웃 필요 여부 | `boolean` | - | true |
| labelWidth | 폼 label 너비 | `string`/`number` | - | auto |
| layout | 작업 버튼 스타일 및 위치 | `string` | inline/bottom | inline |
| buttonPosition | 버튼 정렬 방식 | `string` | left/center/right | center |
| showSearch | 검색 버튼 표시 여부 | `boolean` | - | true |
| showReset | 재설정 버튼 표시 여부 | `boolean` | - | true |
| expand | 확장/축소 버튼 표시 여부 | `boolean` | - | false |
| expandField | 확장/축소 경계 필드 | `string` | - | - |
| inline | inline 설정 여부 | `boolean` | - | true |
| removeNoValueItem | 자동 빈값 제거설정 | `boolean`| - | true |
| model | 초기화 데이터 | `object` | - | - |
| searchLoading | 검색 버튼 로딩 상태 | `boolean` | - | false |
| resetLoading | 재설정 버튼 로딩 상태 | `boolean` | - | false |

## Search 이벤트

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| search | 조회 후 콜백 | data: Recordable |
| reset | 리셋 후 콜백 | data: Recordable |

## Search 메소드

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setValues | 폼의 값 설정 | (data: Recordable) => void |
| setProps | 폼의 속성 설정 | (props: Recordable) => void |
| delSchema | 폼의 구조 삭제 | (field: string) => void |
| addSchema | 폼의 구조 추가 | (formSchema: FormSchema, index?: number) => void |
| setSchema | 폼의 구조 편집 | (schemaProps: FormSetPropsType[]) => void |
| getElFormExpose |Form 컴포넌트의 인스턴스를 가져오는 데 사용 | `() => Promise<typeof ElForm>` |
