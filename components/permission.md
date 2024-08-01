# Permission 권한 컴포넌트

세분화된 권한 수준의 버튼 컴포넌트

Permission 컴포넌트 [src/components/Permission](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Permission)

## 온라인 예제

[온라인 예제](https://element-plus-admin.cn/#/authorization/test)

## 사용법

프로젝트의 세분화된 권한은 라우터 테이블에 포함되어 있으므로, 현재 라우터의 `meta.permission`에 전달된 권한 값이 포함되어 있는지 여부를 확인합니다. 포함되어 있다면 해당 권한에 따라 표시됩니다

권한 구현이 요구사항과 일치하지않을 경우, 직접 수정할 수 있습니다.

### 기본 사용법

```vue
<template>
  <Permission permission="add">
    <ElButton type="primary"> Add </ElButton>
  </Permission>
</template>

```

### 형식

권한 제어는 명령어 형태로도 제공되며, 전역적으로 등록되어 있어서 모든 컴포넌트에서 v-hasPermi를 사용할 수 있습니다.

```vue
<ElButton v-hasPermi="'add'" type="primary"> Add </ElButton>

```

### 함수 형태

위의 두 가지 방법 외에도 함수 형태로 제어할 수 있습니다.

``` ts
import { hasPermi } from '@/components/Permission'

```

```vue
<ElButton v-if="hasPermi('add')" type="primary"> Add </ElButton>

```

## Permission 속성<span id="Permission"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| permission | 권한 값 | `string` | - | - |
