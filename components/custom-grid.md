# CustomGrid 컴포넌트

CutomGrid 컴포넌트: [src/components/CustomGrid](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/CustomGrid)

## 사용법

<!-- 현재 지원되는 customGrid 컴포넌트는 [온라인 미리보기](http://demo-wils.logis-hub.co.kr/#/demo/griddemo)에서 확인 할 수 있습니다. -->

### 기본 사용법

```vue
<script setup lang="ts">
  import { CustomGrid } from '@/components/CustomGrid';
</script>

<template>
  <CustomGrid
    :label="GRID_LABEL"
    :col-defs="colDefs"
    :row-data="funcList"
    :primary-key="PRIMARY_KEY"
    
  />
</template>
```

### useGrid


## CustomGrid 필수 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| --- | --- | --- | --- | --- |
| colDefs | 그리드 컬럼 정의를 담은 배열 | `Array` | `(ColDef or ColGroupDef)[]` | - |
| rowData | 그리드에 표시될 행 데이터를 담은 배열 | `Array` | - | - |
| primaryKey | 각 행의 고유 식별자로 사용될 필드의 이름 | `string` | - | - |
| label | 각 그리드의 고유 식별자로 사용될 그리드의 라벨 | `string` | - | - |

## CustomGrid 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| --- | --- | --- | --- | --- |
| showLabel | 그리드의 제목 표시 여부 | `string` | - | `true` |
| gridKey | 그리드 컴포넌트 키 | `string` or `number` | - | - |
| excelName | 그리드 데이터 엑셀 추출 시 지정할 파일 이름 | `string` | - | - |
| excelExportConfig | 그리드 데이터 엑셀 추출 시 설정 매개변수 | `Object` | `ExcelExportParamsExtend` | `{}` |
| showIcon | 그리드에 있는 버튼에 아이콘을 표시할 지 여부 | `boolean` | - | `true` |
| permission | 사용자에게 부여된 기능 권한 목록 | `Array as GridButtonType[]` | - | `[]` |
| editableFields | 사용자 편집 가능한 필드 목록 | `string[]` | - | `[]` |
| requireFields | 그리드 행 추가 시, 필수 입력 필드 목록 | `string[]` | - | `[]` |
| defaultColDef | 컬럼 기본값 설정 | `Object as PropType<ColDef>` | - | `{}` |
| rowSelection | 그리드 행 선택 모드를 설정 | `string` | `single` or `multiple` | `single` |
| gridConfig | 그리드 추가 설정 객체 | `Object as GridOptions` | - | `{}` |
| grow | 그리드의 크기를 flex-grow로 조절하는 비율 | `number` | - | `1` |
| initialData | 그리드에 행 추가 시, 초기 데이터를 설정하는 객체 | `Object` | - | `{}` |
| gridStyle | 그리드에 적용될 스타일 객체 | `Object` | `CSSProperties` | `{ width: '100%', height: '70vh' }` |
| customHandlers | 커스텀 핸들러 함수들을 담은 객체 | `Object` | - | `{}` |
| autoSizeStrategy | 그리드 자동 크기 조정 설정 | `Object` | `SizeColumnsToFitGridStrategy` `SizeColumnsToFitProvidedWidthStrategy`  `SizeColumnsToContentStrategy` | `{ type: 'fitGridWidth' }` |
| enableCustomGrid | 그리드 개인화 기능의 허용 여부를 설정합니다 | `boolean` | - | `true` |
