# Table 테이블 컴포넌트

`element-plus`의 `Table` 컴포넌트를 래핑하여 `columns`와 `data` 매개변수만 전달하면 응답하는 테이블을 렌더링할 수 있습니다.

Table 컴포넌트 : [src/components/Table](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/Table)

::: warning 주의
Table 컴포넌트를 사용할 때는 tsx를 사용하는 것이 좋습니다.
:::

## 사용법

### 기본 사용법
```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { Table, TableColumn } from '@/components/Table'

const columns = reactive<TableColumn[]>([
  {
    field: 'title',
    label: 'title'
  },
  {
    field: 'author',
    label: 'author'
  }
])

const data = reactive([
  {
    title: 'title1',
    author: 'author1'
  },
  {
    title: 'title2',
    author: 'author2'
  },
  {
    title: 'title3',
    author: 'author3'
  }
])
</script>

<template>
  <Table :columns="columns" :data="data" />
</template>

```

### useTable

element-plus의 Table 컴포넌트를 사용할 때 `useTable` 훅을 함께 사용하는 것이 유용합니다. 

복잡한 예제는 [온라인 미리보기](https://element-plus-admin.cn/#/components/table/use-table)를 참조하세요.

```vue
<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Table, TableColumn, TableSlotDefault } from '@/components/Table'
import { getTreeTableListApi } from '@/api/table'
import { reactive, unref } from 'vue'
import { ElTag, ElButton } from 'element-plus'
import { useTable } from '@/hooks/web/useTable'

const { tableRegister, tableState } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTreeTableListApi({
      pageIndex: unref(currentPage),
      pageSize: unref(pageSize)
    })
    return {
      list: res.data.list,
      total: res.data.total
    }
  }
})
const { loading, dataList, total, currentPage, pageSize } = tableState

const { t } = useI18n()

const columns = reactive<TableColumn[]>([
  {
    field: 'selection',
    type: 'selection'
  },
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index'
  },
  {
    field: 'content',
    label: t('tableDemo.header'),
    children: [
      {
        field: 'title',
        label: t('tableDemo.title')
      },
      {
        field: 'author',
        label: t('tableDemo.author')
      },
      {
        field: 'display_time',
        label: t('tableDemo.displayTime')
      },
      {
        field: 'importance',
        label: t('tableDemo.importance'),
        formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
          return (
            <ElTag type={cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'}>
              {cellValue === 1
                ? t('tableDemo.important')
                : cellValue === 2
                ? t('tableDemo.good')
                : t('tableDemo.commonly')}
            </ElTag>
          )
        }
      },
      {
        field: 'pageviews',
        label: t('tableDemo.pageviews')
      }
    ]
  },
  {
    field: 'action',
    label: t('tableDemo.action'),
    slots: {
      default: (data) => {
        return (
          <ElButton type="primary" onClick={() => actionFn(data)}>
            {t('tableDemo.action')}
          </ElButton>
        )
      }
    }
  }
])

const actionFn = (data: TableSlotDefault) => {
  console.log(data)
}
</script>

<template>
  <ContentWrap :title="`${t('router.treeTable')} ${t('tableDemo.example')}`">
    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="columns"
      :data="dataList"
      row-key="id"
      :loading="loading"
      sortable
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>

</script>

<template>
  <Table
    v-model:pageSize="tableObject.pageSize"
    v-model:currentPage="tableObject.currentPage"
    :data="tableObject.tableList"
    :loading="tableObject.loading"
    :pagination="{
      total: tableObject.total
    }"
    @register="register"
  />
</template>

```

#### 파라미터 정의

```ts
const { tableRegister, tableState, tableMethods } = useTable(props: UseTableConfig)
```

**props**

`useTable`을 사용할 때는 `fetchDataApi`를 전달해야 합니다. 커스터마이징을 보장하기 위해, 요청 로직을 `fetchDataApi`에서 직접 구현하고, 결과로 { list: Array, total?: number }를 반환해야 합니다. 이후 페이지네이션이 자동으로 데이터 요청을 처리합니다.

삭제가 필요한 경우, fetchDelApi도 전달해야 하며, 반환 값으로 Boolean을 제공하여 삭제 완료 여부를 판단합니다. 이후 useTable이 자동으로 테이블을 새로 고칩니다.

**tableRegister**

`tableRegister`는 `useTable`을 등록하는 데 사용됩니다. `useTable`이 제공하는 `api`를 사용하려면, 반드시 `tableRegister`를 컴포넌트의 `onRegister`에 전달해야 합니다.

**tableState**

테이블 상태

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| pageSize | 페이지당 표시할 항목 수 | `number` | - | 10 |
| currentPage | 현재 페이지 | `number` | - | 1 |
| total | 총 항목 수 | `number` | - | - |
| dataList | 테이블 데이터 | `any[]` | - | [] |
| loading | 테이블 로딩 중 여부 | `boolean` | - | false |

**tableMethods**

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setProps | 테이블 속성 설정 | (props: Recordable) => void |
| getList | 테이블 데이터 가져오기 | `() => Promise<void>` |
| setColumn | 테이블 헤더 구조 설정 | (columnProps: TableSetProps[]) => void |
| addColumn | 테이블 헤더 구조 추가 | (tableColumn: TableColumn, index?: number) => void |
| delColumn | 테이블 헤더 구조 삭제 | (field: string) => void |
| getElTableExpose |ElTable 인스턴스 가져오기 | `() => Promise<typeof ElTable>` |
| refresh | 테이블 새로고침 | () => void |
| delList | 데이터 삭제 | `(idsLength: number) => Promise<void>` |

## Table 속성

다음 파라미터 이외에, `element-plus` 의 `Table` 컴포넌트가 지원하는 모든 속성도 지원합니다，[자세히 보기](https://element-plus.org/zh-CN/component/table.html#table-attributes)

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| pageSize | 페이지당 표시할 항목 수, v-model을 통한 양방향 바인딩 지원 | `number` | - | 10 |
| currentPage | 현재 페이지, v-model을 통한 양방향 바인딩 지원 | `number` | - | 1 |
| selection | 다중 선택 여부 | `boolean` | - | true |
| showOverflowTooltip | 화면 범위 넘어설 때의 숨김 여부, schema에서의 showOverflowTooltip 설정보다 우선 순위가 낮음  | `boolean` | - | true |
| columns | 테이블 헤더 구조 [자세히 보기](#Columns) | `TableColumn[]` | - | [] |
| expand | 확장 행 표시 여부 | `boolean` | - | false |
| pagination | 페이지네이션 표시 여부, [자세히 보기](#Pagination) | `Pagination`/`undefined` | - | - |
| reserveSelection | type=selection의 열에만 적용됩니다. 유형은 Boolean이며, true로 설정하면 데이터 업데이트 후 이전에 선택된 데이터가 유지 됨(단, row-key를 지정해야 함) | `boolean` | - | false |
| loading | 로딩 상태 | `boolean` | - | false |
| reserveIndex | 인덱스 중첩 여부 | `boolean` | - | false |
| align | 내용 정렬 방식 | `string` | `left`/`center`/`right` | left |
| headerAlign | 헤더 정렬 방식 | `string` | `left`/`center`/`right` | left |
| data | 테이블 데이터 | `Recordable[]` | - | [] |
| showAction | 테이블 조작 표시 여부 | `boolean` | - | false |
| imagePreview | 이미지를 표시해야 하는 필드 | `string[]` | - | - |
| videoPreview | 비디오를 표시해야 하는 필드 | `string[]` | - | - |
| customContent | 콘텐츠 사용자 정의 여부 | `boolean` | - | false |
| cardBodyStyle | 카드 내용 스타일 | `CSSProperties` | - | - |
| cardBodyClass | 카드 내용 클래스 이름 | `string` | - | - |
| cardWrapStyle | 카드 컨테이너 스타일 | `CSSProperties` | - | - |
| cardWrapClass | 카트 컨테이너 클래스 이름 | `string` | - | - |

### Columns<span id="Columns"></span>

다음 속성 이외에, `element-plus`의 `TableColumn` 속성도 지원합니다.

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| field | 고유 값. 올바른 데이터를 표시하려면 data 내의 속성명과 일치해야 합니다. | `string` | - | - |
| label | 헤더 이름 | `string` | - | - |
| hidden | 숨김 여부 | `boolean` | - | - |
| slots | 슬롯 객체 | `object` | - | - |
| children | 하위 항목, 다중 계층 헤더에 사용됩니다 | `TableColumn[]` | - | - |

### Pagination<span id="Pagination"></span>

element-plus의 Pagination에서 지원하는 모든 속성, [자세히 보기](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7)

## Table 함수

| 함수명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| setProps | 테이블 속성 설정 | (props: Recordable) => void |
| setColumn | 헤더 구조 수정 | (columnProps: TableSetPropsType[]) => void |
| addColumn | 헤더 구조 추가 | (tableColumn: TableColumn, index?: number) => void |
| delColumn | 헤더 구조 삭제 | (field: string) => void |
