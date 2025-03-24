# 템플릿 생성

이 문서는 개발자가 `component`와 `view` 파일을 빠르게 생성하거나, 표준화된 Vue3 페이지 템플릿을 활용할 수 있도록 가이드를 제공합니다. 이를 통해 반복 작업을 줄이고, 일관된 코드 작성이 가능합니다.

## WiLS Vue3 Page Template 스니펫

`wils-vue-template` 스니펫은 `CustomGrid`, `Form`, `Search`와 같은 주요 컴포넌트를 포함한 Vue3 페이지 템플릿을 빠르게 생성할 수 있도록 설계되었습니다. 이 스니펫은 프로젝트의 표준 구조를 따르며, 개발자가 반복적인 작업을 줄이고 일관된 코드를 작성할 수 있도록 도와줍니다.

### 사용법

1. **스니펫 활성화**: VSCode에서 `.vue` 파일을 생성한 후, 파일 내에서 `wils-vue-template`을 입력하고 `Tab` 키를 누릅니다.
2. **자동 생성**: 스니펫이 실행되며, 기본적인 Vue3 페이지 템플릿이 자동으로 생성됩니다.

### 생성되는 템플릿

스니펫은 다음과 같은 구조를 포함합니다:
- **`CustomGrid`**: 마스터 및 디테일 그리드 구성
- **`Search`**: 검색 폼 구성
- **`Form`**: 데이터 입력 폼 구성
- **`ContentWrap`**: 페이지 레이아웃
- **다국어 지원**: `useI18n` 훅
- **유효성 검사**: `useValidator` 훅
- **사용자 정보 스토어**: `useUserStore`

### 예시

```vue
<script setup lang="tsx">
import { onMounted, reactive, ref } from 'vue';
import { CustomGrid, GridExpose } from '@/components/CustomGrid';
import { Form, FormSchema } from '@/components/Form';
import { useSearch } from '@/hooks/web/useSearch';
import { ColDef, ColGroupDef, GridOptions } from 'ag-grid-community';
import { useValidator } from '@/hooks/web/useValidator';
import {
  formatToDate, // YYYYMMDD -> MM/DD/YYYY로 포맷팅
  formatToDateTime // YYYYMMDDhhmmss or YYYYMMDDhhmm -> MM/DD/YYYY HH:mm로 포맷팅
} from '@/utils/dateUtil';

/**
 * @description 컴포넌트 Props 정의
 */
defineProps<{ permission: ActionType[]; page: string; route: AppRouteRecordRaw }>();

// 다국어 훅 초기화
const { t } = useI18n();

// 유효성 검사 함수 정의
const { required } = useValidator();

// 사용자 정보 스토어 호출
const userStore = useUserStore();
const { roleId, usrId } = userStore.userInfo!;

// Form과 Search 관련 메서드 등록
const { formRegister, formMethods } = useForm();
const { searchRegister, searchMethods } = useSearch();

/**
 * @description 마스터 및 디테일 그리드 레이블과 기본 키 설정
 */
const MST_GRID_LABEL = 'Master Grid';
const DTL_GRID_LABEL = 'Detail Grid';
const MST_PRIMARY_KEY = 'rno';
const DTL_PRIMARY_KEY = 'rno';

/**
 * @description 각 그리드의 권한 설정
 */
const mstGridPermission: ActionType[] = ['new', 'delete'];
const dtlGridPermission: ActionType[] = ['new', 'delete'];

/**
 * @description CustomGrid(Ag Grid)의 ref 선언
 */
const mstGridRef = ref<GridExpose>();
const dtlGridRef = ref<GridExpose>();

/**
 * @description 그리드 Row 데이터를 ref로 관리
 */
const mstRowData = ref<any[]>([]);
const dtlRowData = ref<any[]>([]);

// 검색 폼 정의
const searchSchema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'label1',
    component: 'Input',
    componentProps: {},
    colProps: { span: 6 },
    formItemProps: {}
  }
]);

// 검색 폼 유효성 검사 규칙
const searchRules = reactive({
  field1: [required()]
});

// 데이터 입력 폼 정의
const formSchema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: 'label1',
    component: 'Input',
    componentProps: {},
    colProps: { span: 6 },
    formItemProps: {}
  }
]);

// 데이터 입력 폼 유효성 검사 규칙
const formRules = reactive({
  field1: [required()]
});

// 마스터 및 디테일 그리드의 열 정의
const mstColDefs = reactive<(ColDef | ColGroupDef)[]>([{ field: 'field1', headerName: 'label1' }]);
const dtlColDefs = reactive<(ColDef | ColGroupDef)[]>([{ field: 'field1', headerName: 'label1' }]);

// 마스터 및 디테일 그리드 옵션 정의
const mstGridConfig = reactive<GridOptions>({});
const dtlGridConfig = reactive<GridOptions>({});

/**
 * @description 데이터 조회 함수
 * @param condition Search Form에서 입력된 검색 조건
 */
const handleSearch = (condition) => {
  // TODO: API 호출 및 데이터 바인딩 로직 추가
};

/**
 * @description 데이터 변경사항 저장 함수
 */
const handleSave = () => {
  const mstChanges = mstGridRef.value?.getChanges() ?? [];
  const dtlChanges = dtlGridRef.value?.getChanges() ?? [];
  // TODO: 변경 사항 처리 로직 추가
};

/**
 * @description 마스터 그리드 데이터를 엑셀로 내보내는 함수
 */
const handleExportExcel = () => {
  mstGridRef.value?.handleExportExcel({
    // TODO: 엑셀 내보내기 설정 추가
  });
};

// 컴포넌트가 마운트될 때 실행
onMounted(() => {
  // TODO: 초기 렌더링 시 작업 정의
});
</script>

<template>
  <ContentWrap :title="t(`router.${page}`)" :route="route">
    <!-- 검색 컴포넌트 -->
    <Search
      :permission="permission"
      :schema="searchSchema"
      :rules="searchRules"
      @register="searchRegister"
      @search="handleSearch"
      @save="handleSave"
      @download-excel="handleExportExcel"
    />
    <!-- 데이터 입력 폼 -->
    <Form
      :schema="formSchema"
      :rules="formRules"
      @register="formRegister"
    />
    <!-- 마스터 그리드 -->
    <CustomGrid
      ref="mstGridRef"
      :label="MST_GRID_LABEL"
      :primary-key="MST_PRIMARY_KEY"
      :col-defs="mstColDefs"
      :row-data="mstRowData"
      :grid-config="mstGridConfig"
      :permission="mstGridPermission"
    />
    <!-- 디테일 그리드 -->
    <CustomGrid
      ref="dtlGridRef"
      :label="DTL_GRID_LABEL"
      :primary-key="DTL_PRIMARY_KEY"
      :col-defs="dtlColDefs"
      :row-data="dtlRowData"
      :grid-config="dtlGridConfig"
      :permission="dtlGridPermission"
    />
  </ContentWrap>
</template>
```

### 확장 방법

스니펫의 기본 템플릿을 확장하려면, `.vscode/template.code-snippets` 파일을 수정하여 새로운 내용을 추가할 수 있습니다. 자세한 내용은 [VSCode Snippets 문서](https://code.visualstudio.com/docs/editor/userdefinedsnippets)를 참조하세요.


## 컴포넌트 생성

개발자가 `component`와 `view` 파일을 빠르게 생성할 수 있도록 본 프로젝트에서는 `plop`를 사용하여 개발자가 통일된 파일 템플릿을 생성할 수 있습니다.

### 실행

```shell
npm run p
```
`component`를 선택한 후, 컴포넌트 이름을 입력하면

 예를 들어 `newCom`과 같이, `src/components` 디렉토리 아래에 해당 컴포넌트가 생성됩니다.

컴포넌트 이름의 첫 글자가 소문자인 경우, 자동으로 대문자로 변환됩니다.

## 뷰 생성

### 실행

```shell
npm run p
```
`view`를 선택한 후, 경로를 입력합니다. 기본값은 `views`이며, 그 다음에 모듈명을 입력하면 예를 들어 `newView`와 같이 `src/${views}` 디렉토리 아래에 해당 뷰 파일이 생성됩니다."

## 확장 방법

추가적인 뷰 템플릿을 확장하려면, 루트 디렉토리의 `plopfile.js` 파일에서 초기 템플릿을 추가한 후, 루트 디렉토리의 `plop` 폴더에 해당 모듈 코드를 추가합니다. 자세한 내용은 `component` 아래의 코드를 참고하세요.

더 많은 `plop` 설정은 [문서](https://plopjs.com/documentation/)를 참조하시면 됩니다.
