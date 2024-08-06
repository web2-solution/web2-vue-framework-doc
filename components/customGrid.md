# CustomGrid 컴포넌트

CutomGrid 컴포넌트: [src/components/CustomGrid](https://github.com/web2-solution/web2-vue-framework/tree/dev/src/components/CustomGrid)

## 사용법

현재 지원되는 customGrid 컴포넌트는 [온라인 미리보기](http://demo-wils.logis-hub.co.kr/#/demo/griddemo)에서 확인 할 수 있습니다.

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
    @mutate="
      (transaction) => {
        funcTransaction = transaction;
      }
    "
  />
</template>
```

### useGrid

복잡한 상황에서는 `useForm`과 함께 사용하는 것이 좋습니다.

좀 더 자세한 내용을 보고 싶다면 [자세히 보기](https://github.com/web2-solution/web2-vue-framework/blob/dev/src/hooks/web/useGrid.ts)를 참조 해주세요.

## CustomGrid 속성

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| --- | --- | --- | --- | --- |
| colDefs | 그리드의 컬럼 정의를 담은 배열 | `Array` | - | [] |
| rowData | 그리드에 표시될 행 데이터를 담은 배열 | `Array` | - | [] |
| primaryKey | 각 행의 고유 식별자로 사용될 필드의 이름 | `String` | - | {} |
| label | 각 그리드의 고유 식별자로 사용될 그리드의 제목 | `String` | - | true |
| showLabel | 그리드의 제목을 표시할지 여부 | `boolean` | - | true |
| showIcon | 그리드에 있는 버튼에 아이콘을 표시할 지 여부 | `boolean` | - | false |
| permission | 사용자에게 부여된 기능 권한 목록 | `Array` | - | [] |
| editableFields | 사용자가 편집할 수 있는 필드 목록 | `Array` | - | [] |
| requireFields | 리드에서 행 추가 시, 필수로 입력되어야하는 필드 목록 | `Array` | - | [] |
| defaultColDef | 컬럼에 대한 기본 설정 | `Object` | - | {} |
| rowSelection | 그리드에서 행 선택 모드를 설정 | `String` | - | 'single' |
| gridConfig | 그리드에 대한 추가 설정 객체 | `Object` | - | {} |
| grow | 그리드의 크기를 flex-grow로 조절하는 비율 | `Number` | - | 1 |
| initialData | 그리드에 행 추가 시, 초기 데이터를 설정하는 객체 | `Object` | - | {} |
| gridStyle | 그리드에 적용될 스타일 객체 | `Object` | - | {width: '100%', height: '500px'} |
| customHandlers | 커스텀 핸들러 함수들을 담은 객체 | `Object` | - | {} |
| autoSizeStrategy | 그리드 자동 크기 조정을 설정 | `Object` | - | {} |
