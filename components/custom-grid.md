# CustomGrid 컴포넌트

`CustomGrid`는 `ag-grid`를 기반으로 확장된 고급 데이터 테이블 컴포넌트입니다. 동적 데이터 관리, 엑셀 내보내기/가져오기, 권한 기반 버튼 렌더링, 사용자 정의 설정 등 다양한 기능을 제공합니다.

CustomGrid 컴포넌트: [src/components/CustomGrid](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/CustomGrid)

## 주요 기능

1. **동적 데이터 관리**: `rowData`와 `colDefs`를 통해 데이터를 동적으로 렌더링할 수 있습니다.
2. **엑셀 내보내기 및 가져오기**: 데이터를 엑셀 파일로 내보내거나 가져올 수 있습니다.
3. **권한 기반 버튼 렌더링**: `permission` 속성을 통해 사용자 권한에 따라 버튼을 렌더링할 수 있습니다.
4. **행 추가 및 삭제**: `editableFields`와 `requireFields`를 사용하여 행 데이터를 추가하거나 삭제할 수 있습니다.
5. **개인화 기능**: `enableCustomGrid`를 통해 사용자별로 그리드 설정을 저장하고 복원할 수 있습니다.
6. **상태 기반 스타일링**: 특정 상태(추가, 수정, 비어있음 등)에 따라 셀 스타일을 동적으로 변경할 수 있습니다.
7. **트랜잭션 관리**: `mutateRow`와 `transaction`을 통해 행 추가, 삭제, 수정 등의 트랜잭션을 관리할 수 있습니다.
8. **그리드 API 노출**: `gridApi`를 통해 그리드의 다양한 기능을 외부에서 제어할 수 있습니다.
9.  **자동 크기 조정**: `autoSizeStrategy`를 통해 컬럼 크기를 자동으로 조정할 수 있습니다.

## 사용법

현재 지원되는 `CustomGrid` 컴포넌트는 [온라인 미리보기](http://demo-wils.logis-hub.co.kr/#/demo/griddemo)에서 확인할 수 있습니다.

### 기본 사용법

```vue
<script setup lang="ts">
import { CustomGrid } from '@/components/CustomGrid';

const colDefs = [
  { field: 'id', headerName: 'ID', sortable: true },
  { field: 'name', headerName: 'Name', editable: true },
  { field: 'age', headerName: 'Age', filter: true },
];

const rowData = [
  { id: 1, name: 'John Doe', age: 30 },
  { id: 2, name: 'Jane Smith', age: 25 },
];

const GRID_LABEL = '사용자 목록';
const PRIMARY_KEY = 'id';
</script>

<template>
  <CustomGrid
    :label="GRID_LABEL"
    :col-defs="colDefs"
    :row-data="rowData"
    :primary-key="PRIMARY_KEY"
  />
</template>
```

## CustomGrid 필수 속성

| 속성              | 설명                                                                 | 타입                                    | 옵션                        | 기본값 |
|-------------------|----------------------------------------------------------------------|---------------------------------------|-----------------------------|--------|
| `colDefs`         | 그리드 컬럼 정의를 담은 배열                                         | `(ColDef | ColGroupDef)[]`            | -                           | -      |
| `rowData`         | 그리드에 표시될 행 데이터를 담은 배열                                | `Array`                               | -                           | -      |
| `primaryKey`      | 각 행의 고유 식별자로 사용될 필드의 이름                             | `string`                              | -                           | -      |
| `label`           | 각 그리드의 고유 식별자로 사용될 그리드의 라벨                      | `string`                              | -                           | -      |


## CustomGrid 속성

| 속성                  | 설명                                                                                     | 타입                                    | 옵션                        | 기본값 |
|-----------------------|------------------------------------------------------------------------------------------|---------------------------------------|-----------------------------|--------|
| `gridKey`             | 그리드 컴포넌트 키                                                                      | `string` or `number`                  | -                           | -      |
| `excelName`           | 엑셀 추출 시 지정할 파일 이름                                                            | `string`                              | -                           | -      |
| `excelExportConfig`   | 엑셀 추출 시 설정 매개변수                                                              | `ExcelExportParamsExtend`             | -                           | `{}`   |
| `showLabel`           | 그리드의 제목 표시 여부                                                                 | `boolean`                             | -                           | `true` |
| `showIcon`            | 버튼에 아이콘 표시 여부                                                                 | `boolean`                             | -                           | `true` |
| `permission`          | 사용자에게 부여된 기능 권한 목록                                                        | `Array<ActionType>`                   | -                           | `[]`   |
| `enablePermissionCheck` | 권한 기반 버튼 렌더링을 활성화하거나 비활성화합니다. true로 설정 시, `permission` 배열과 서버에서 제공된 `meta.permission` 데이터를 비교하여 버튼 렌더링 여부를 결정합니다. | `boolean`                             | -                           | `true` |
| `editableFields`      | 편집 가능한 필드 목록                                                                   | `string[]`                            | -                           | `[]`   |
| `requireFields`       | 필수 입력 필드 목록                                                                     | `string[]`                            | -                           | `[]`   |
| `defaultColDef`       | 컬럼 기본값 설정                                                                        | `ColDef`                              | -                           | `{}`   |
| `rowSelection`        | 행 선택 모드 설정                                                                       | `'single'` or `'multiple'`            | -                           | `single` |
| `gridConfig`          | 그리드 추가 설정 객체                                                                  | `GridOptions`                         | -                           | `{}`   |
| `grow`                | 그리드의 크기를 flex-grow로 조절하는 비율                                               | `number`                              | -                           | `1`    |
| `initialData`         | 행 추가 시 초기 데이터를 설정하는 객체                                                  | `Object`                              | -                           | `{}`   |
| `gridStyle`           | 그리드에 적용될 스타일 객체                                                            | `CSSProperties`                       | -                           | `{ width: '100%', height: '100%' }` |
| `customHandlers`      | 커스텀 핸들러 함수들을 담은 객체                                                        | `Object`                              | -                           | `{}`   |
| `autoSizeStrategy`    | 컬럼 크기 자동 조정 전략                                                                | `SizeColumnsToContentStrategy` 등     | -                           | `{ type: 'fitGridWidth' }` |
| `enableCustomGrid`    | 그리드 개인화 기능 허용 여부                                                           | `boolean`                             | -                           | `true` |
| `statusPanels`        | 상태바에 들어갈 패널 설정                                                              | `StatusPanelDef[]`                    | -                           | `[]`   |
| `showTotal`           | 상태바에 total 표시 여부                                                               | `boolean`                             | -                           | `false` |

## Expose 메서드 및 속성

expose 메서드는 Vue 3의 defineExpose를 사용하여 컴포넌트 내부에서 정의된 메서드나 속성을 외부(부모 컴포넌트)로 노출하는 기능입니다. 이를 통해 부모 컴포넌트는 자식 컴포넌트의 내부 메서드나 데이터를 직접 호출하거나 사용할 수 있습니다.

CustomGrid 컴포넌트는 다양한 expose 메서드를 제공하여 부모 컴포넌트가 그리드 데이터를 관리하거나 특정 동작을 수행할 수 있도록 지원합니다.

| 메서드/속성 이름         | 설명                                                                 | 반환값/매개변수                                                                 |
|--------------------------|----------------------------------------------------------------------|--------------------------------------------------------------------------------|
| `gridApi`               | Ag-Grid의 API 객체를 반환합니다.                                     | `GridApi<any>`                                                                |
| `mutateRow`             | 행 추가, 삭제, 변경을 수행합니다.                                    | `(type: RowOperationType, rows: T[], selectRow?: boolean) => RowNodeTransaction<T> \| null \| undefined` |
| `selectRow`             | 특정 위치의 행을 선택합니다.                                         | `(position?: 'first' \| 'last' \| number) => IRowNode \| undefined \| null`   |
| `transaction`           | 현재 트랜잭션 객체를 반환합니다.                                    | `RowNodeTransaction`                                                          |
| `resetTransaction`      | 트랜잭션 데이터를 초기화합니다.                                      | `() => void`                                                                  |
| `getRowData`            | 현재 그리드의 모든 행 데이터를 반환합니다.                           | `<T = any>() => T[]`                                                          |
| `getRowNodes`           | 현재 그리드의 모든 행 노드를 반환합니다.                             | `<T = any>() => IRowNode<T>[]`                                                |
| `getChanges`            | 트랜잭션 데이터를 기반으로 변경된 데이터를 반환합니다.               | `(gridTransaction?: RowNodeTransaction, primaryKey?: string) => any[]`        |
| `handleRemoveRow`       | 선택된 행을 삭제합니다.                                              | `() => void`                                                                  |
| `handleExportExcel`     | 그리드 데이터를 엑셀 파일로 내보냅니다.                              | `(excelExportOptions?: ExcelExportParamsExtend) => void`                      |
| `handleImportExcel`     | 엑셀 파일을 가져와 데이터를 읽습니다.                                | `() => void`                                                                  |
| `getDataAsExcel`        | 그리드 데이터를 엑셀 형식으로 반환합니다.                            | `(excelExportOptions?: ExcelExportParamsExtend) => string \| Blob \| undefined` |
| `resetGridSelection`    | 그리드 선택을 초기화하고 첫 번째 행을 선택합니다.                    | `() => void`                                                                  |

### Expose 사용 예시

아래는 `CustomGrid` 컴포넌트의 expose 메서드와 속성을 사용하는 다양한 예시입니다. 부모 컴포넌트에서 `ref`를 통해 `CustomGrid`의 메서드와 속성에 접근할 수 있습니다.
**`ref` 데이터의 타입을 `GridExpose`로 지정하고 코드를 작성하는 것을 권장합니다.**

#### 1. 엑셀 내보내기
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { CustomGrid, GridExpose } from '@/components/CustomGrid';

const gridRef = ref<GridExpose>();

const handleExport = () => {
  gridRef.value?.handleExportExcel({ sheetTitle: 'Exported Data' });
};
</script>

<template>
  <CustomGrid ref="gridRef" :label="'사용자 목록'" />
  <BaseButton @click="handleExport">엑셀 내보내기</BaseButton>
</template>
```

#### 2. 행 추가
```vue
<script setup lang="ts">
const handleAddRow = () => {
  gridRef.value?.mutateRow('add', [{ id: Date.now(), name: 'New User', age: 0 }]);
};
</script>

<template>
  <BaseButton @click="handleAddRow">행 추가</BaseButton>
</template>
```

#### 3. 변경 사항 확인
```vue
<script setup lang="ts">
const handleGetChanges = () => {
  const changes = gridRef.value?.getChanges();
  console.log('변경 사항:', changes);
};
</script>

<template>
  <BaseButton @click="handleGetChanges">변경 사항 확인</BaseButton>
</template>
```

#### 4. 특정 행 선택
```vue
<script setup lang="ts">
const handleSelectFirstRow = () => {
  gridRef.value?.selectRow('first');
};
</script>

<template>
  <BaseButton @click="handleSelectFirstRow">첫 번째 행 선택</BaseButton>
</template>
```

#### 5. 트랜잭션 초기화
```vue
<script setup lang="ts">
const handleResetTransaction = () => {
  gridRef.value?.resetTransaction();
};
</script>

<template>
  <BaseButton @click="handleResetTransaction">트랜잭션 초기화</BaseButton>
</template>
```

#### 6. 모든 행 데이터 가져오기
```vue
<script setup lang="ts">
const handleGetAllRows = () => {
  const rows = gridRef.value?.getRowData();
  console.log('모든 행 데이터:', rows);
};
</script>

<template>
  <BaseButton @click="handleGetAllRows">모든 행 데이터 가져오기</BaseButton>
</template>
```

#### 7. 선택 초기화 및 첫 번째 행 선택
```vue
<script setup lang="ts">
const handleResetSelection = () => {
  gridRef.value?.resetGridSelection();
};
</script>

<template>
  <BaseButton @click="handleResetSelection">선택 초기화</BaseButton>
</template>
```

#### 8. gridApi 사용
`gridApi`를 사용하여 그리드의 다양한 기능에 직접 접근할 수 있습니다.

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { CustomGrid } from '@/components/CustomGrid';

const gridRef = ref();

const handleRefreshCells = () => {
  gridRef.value?.gridApi.refreshCells(); // 모든 셀을 새로고침
};

const handleDeselectAll = () => {
  gridRef.value?.gridApi.deselectAll(); // 모든 행 선택 해제
};

const handleEnsureVisible = () => {
  gridRef.value?.gridApi.ensureIndexVisible(0); // 첫 번째 행이 보이도록 스크롤
};
</script>

<template>
  <CustomGrid ref="gridRef" :label="'사용자 목록'" />
  <BaseButton @click="handleRefreshCells">셀 새로고침</BaseButton>
  <BaseButton @click="handleDeselectAll">모든 행 선택 해제</BaseButton>
  <BaseButton @click="handleEnsureVisible">첫 번째 행 보기</BaseButton>
</template>
```

## 상태 기반 스타일링

`CustomGrid`는 특정 상태에 따라 셀 스타일을 동적으로 변경할 수 있습니다.

| 상태          | 클래스 이름       | 설명                              |
|---------------|------------------|-----------------------------------|
| 추가된 행      | `added-row`      | 새로 추가된 행                    |
| 수정된 셀      | `updated-cell`   | 수정된 셀                         |
| 비어있는 셀    | `empty-cell`     | 필수 입력 필드가 비어있는 셀      |


## 확장 및 커스터마이징

`CustomGrid`는 다양한 속성과 메서드를 통해 확장 및 커스터마이징이 가능합니다. 예를 들어, `customHandlers`를 사용하여 기본 동작을 재정의하거나, `gridConfig`를 통해 `ag-grid`의 고급 설정을 추가할 수 있습니다.

```vue
<CustomGrid
  :col-defs="colDefs"
  :row-data="rowData"
  :primary-key="PRIMARY_KEY"
  :custom-handlers="{
    handleAddRow: (data) => console.log('Custom Add Row', data),
    handleRemoveRow: () => console.log('Custom Remove Row')
  }"
  :grid-config="{
    treeData: true
  }"
/>
```

