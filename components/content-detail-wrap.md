# ContentDetailWrap 상세 내용 래핑 컴포넌트

`1.2.4` 추가

상세 정보를 표시하는데 사용되며，뒤로가기 버튼이 포함되어 있습니다.

ContentDetailWrap 컴포넌트 : [src/components/ContentDetailWrap](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/ContentDetailWrap) 

## 사용법

```vue
<script setup lang="tsx">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
</script>

<template>
  <ContentDetailWrap title="상세정보" @back="push('/example/example-page')">
    Details
  </ContentDetailWrap>
</template>

```

## ContentDetailWrap 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| title | 제목 | `string` | - | - |

## ContentDetailWrap 이벤트

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| back | 뒤로가기 이벤트 | - |

## ContentDetailWrap 슬롯

| 슬롯 명 | 설명 | 하위 태그 |
| ---- | ---- | ---- |
| - | 기본 표시 내용 | - |
| title | 사용자 정의 제목 | - |
| right | 사용자 정의 내용(오른쪽) | - |
