# Search 검색 컴포넌트
`Search` 컴포넌트는 `Form` 컴포넌트와 `ActionButton` 컴포넌트를 래핑하여, 검색 및 초기화와 같은 작업 버튼을 간편하게 구성할 수 있도록 설계되었습니다. 이 컴포넌트는 폼 레이아웃과 데이터를 관리하며 축소(Collapse) 및 확장(Expand) 기능 또한 사용할 수 있습니다.

Search 컴포넌트: [src/components/Search](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Search)

::: warning 주의
`Search` 컴포넌트를 사용할 때는 `tsx`를 사용하는 것을 권장합니다.
:::

## 사용법

### 기본 사용법

```vue
<script setup lang="tsx">
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

`useSearch`는 `Search` 컴포넌트를 더 간편하게 관리하고, 복잡한 폼 동작을 처리하기 위해 제공되는 헬퍼 훅입니다. 이를 사용하면 `ref`와 `expose`를 직접 사용하는 대신, 등록 및 메서드 호출을 간소화할 수 있습니다.

#### 언제 `useSearch`를 사용해야 하나요?

- **권장**: 폼의 구조를 동적으로 변경하거나, 폼 데이터를 자주 조작해야 하는 경우.
- **지양**: `ref`와 `expose`를 직접 사용하는 대신, `useSearch` 또는 `model` prop을 사용하는 것이 더 간결하고 유지보수에 유리합니다.

#### `useSearch` 사용 예시

```vue
<script setup lang="tsx">
import { useSearch } from '@/hooks/web/useSearch';
import { Search } from '@/components/Search';
import { reactive } from 'vue';

const { searchRegister, searchMethods } = useSearch();
const { setValues, setSchema, getFormData } = searchMethods;

const schema = reactive([
  { field: 'field1', label: 'Input', component: 'Input' },
  { field: 'field2', label: 'Select', component: 'Select', componentProps: { options: [{ label: 'Option 1', value: '1' }] } }
]);

const handleSearch = async () => {
  const data = await getFormData();
  console.log('폼 데이터:', data);
};

const updateSchema = () => {
  setSchema([{ field: 'field1', path: 'label', value: 'Updated Label' }]);
};

const setFormValues = () => {
  setValues({ field1: 'New Value' });
};
</script>

<template>
  <Search :schema="schema" @register="searchRegister" />
  <button @click="handleSearch">폼 데이터 가져오기</button>
  <button @click="updateSchema">폼 구조 업데이트</button>
  <button @click="setFormValues">폼 값 설정</button>
</template>
```

### `model` Prop 사용하기

`model` prop을 사용하면 `Search` 컴포넌트의 초기 데이터와 동기화된 상태를 유지할 수 있습니다. `useSearch`를 사용하지 않아도 간단한 폼 데이터 관리가 가능합니다.

```vue
<script setup lang="tsx">
import { Search } from '@/components/Search';
import { reactive } from 'vue';

const model = reactive({
  field1: 'Initial Value',
  field2: '1'
});

const schema = [
  { field: 'field1', label: 'Input', component: 'Input' },
  { field: 'field2', label: 'Select', component: 'Select', componentProps: { options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }] } }
];

const handleSearch = (data: any) => {
  console.log('검색 데이터:', data);
};
</script>

<template>
  <Search :schema="schema" :model="model" @search="handleSearch" />
</template>
```

#### `useSearch`와 `model` Prop 비교

| 기능                     | `useSearch` 사용 시                          | `model` Prop 사용 시                     |
|--------------------------|---------------------------------------------|-----------------------------------------|
| **동적 폼 구조 변경**     | 가능 (`setSchema` 메서드 사용)              | 불가능                                  |
| **초기 데이터 설정**      | 가능 (`setValues` 메서드 사용)              | 가능 (`model`로 직접 설정)              |
| **데이터 동기화**         | 메서드 호출 필요                           | 양방향 바인딩으로 자동 동기화           |
| **권장 사용 시점**        | 복잡한 폼 동작 및 동적 구조 변경이 필요한 경우 | 단순한 데이터 초기화 및 동기화가 필요한 경우 |
