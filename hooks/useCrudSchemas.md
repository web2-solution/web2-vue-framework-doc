# useCrudSchemas
`Search`、`Form`、`Descriptions`、`Table` 컴포넌트에 필요한 데이터 구조를 통합 생성하는 hook입니다.

위 네 가지 컴포넌트 모두 `Schema` 또는 `columns` 필드를 필요로 하며, 각 컴포넌트마다 이러한 구조를 작성하면 많은 중복 코드가 발생할 수 있습니다. 따라서 `useCrudSchemas를` 제공하여 데이터를 통합 생성할 수 있습니다.

useCrudSchemas는 [src/hooks/web/useCrudSchemas.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/hooks/web/useCrudSchemas.ts) 파일에 위치해 있습니다.

## 사용법

::: tip

특정 필드가 필요 없는 경우, 예를 들어 `formSchema`에서 `field`가 `index`인 필드를 제외하려면 `form: { hidden: true }`를 사용하여 필터링할 수 있습니다. 다른 컴포넌트에서도 동일한 방법을 사용할 수 있습니다.

:::

`Search`는 `Form`을 기반으로 2차 래핑을 하여 만들어졌기 때문에, `Search`가 지원하는 매개변수는 `Form`에서도 모두 지원됩니다.

`search`와 `form` 필드는 `dictName`을 전달하여 전역 사전 데이터를 가져오거나 `api`를 전달하여 `API` 데이터를 가져올 수 있습니다. `api`를 사용하는 경우, 데이터를 직접 `return`해야 합니다.

```vue
<script setup lang="ts">
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'index',
    label: t('tableDemo.index'),
    type: 'index',
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    }
  },
  {
    field: 'title',
    label: t('tableDemo.title'),
    search: {
      show: true
    },
    form: {
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'author',
    label: t('tableDemo.author')
  },
  {
    field: 'display_time',
    label: t('tableDemo.displayTime'),
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'datetime',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      }
    }
  },
  {
    field: 'importance',
    label: t('tableDemo.importance'),
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return h(
        ElTag,
        {
          type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
        },
        () =>
          cellValue === 1
            ? t('tableDemo.important')
            : cellValue === 2
            ? t('tableDemo.good')
            : t('tableDemo.commonly')
      )
    },
    form: {
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '중요',
            value: 3
          },
          {
            label: '양호',
            value: 2
          },
          {
            label: '일반',
            value: 1
          }
        ]
      }
    }
  },
  {
    field: 'pageviews',
    label: t('tableDemo.pageviews'),
    form: {
      component: 'InputNumber',
      value: 0
    }
  },
  {
    field: 'content',
    label: t('exampleDemo.content'),
    table: {
      hidden: true
    },
    form: {
      component: 'Editor',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'action',
    width: '260px',
    label: t('tableDemo.action'),
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    }
  }
])

const { allSchemas } = useCrudSchemas(crudSchemas)
</script>

```

### 파라미터 소개

```ts
const { allSchemas } = useCrudSchemas(crudSchemas)
```

**allSchemas**

`allSchemas` 는 네 가지 컴포넌트에 필요한 데이터 결과를 저장합니다.


***allSchemas.fromSchema***

`Form` 컴포넌트의  `Schema`

***allSchemas.searchSchema***

`Search` 컴포넌트의  `Schema`

***allSchemas.detailSchema***

`Descriptions` 컴포넌트의  `Schema`

***allSchemas.tableColumns***

`Table` 컴포넌트의  `columns`

## CrudSchema

| 속성 | 설명 | 타입 | 옵션 | 기본 값 |
| ---- | ---- | ---- | ---- | ---- |
| search | `searchSchema`를 설정하는 데 사용 | `CrudSearchParams` | - | - |
| table | `tableColumns`를 설정하는 데 사용 | `CrudTableParams` | - | - |
| form | `fromSchema`를 설정하는 데 사용 | `CrudFormParams` | - | - |
| detail | `DescriptionsSchema`를 설정하는 데 사용 | `CrudDescriptionsParams` | - | - |
| children | `Table`컴포넌트의 경우, 여러 테이블 헤더가 있을 수 있음 | `CrudSchema[]` | - | - |
