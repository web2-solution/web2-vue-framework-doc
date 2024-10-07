# ImageViewer 이미지 미리보기 컴포넌트

`element-plus`의 `ImageViewer` 컴포넌트를 함수형으로 변환하여, 함수를 통해 컴포넌트를 쉽게 생성할 수 있도록 합니다.

ImageViewer 컴포넌트 : [src/components/ImageViewer](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/ImageViewer)

## 사용법

```vue
<script setup lang="ts">
import { createImageViewer } from '@/components/ImageViewer'
import { ElButton } from 'element-plus'

const open = () => {
  createImageViewer({
    urlList: [
      'https://test.jpg',
      'https://test2.jpg',
      'https://test3.jpg',
      'https://test4.jpg',
      'https://test5.jpg',
    ]
  })
}
</script>

<template>
  <ElButton type="primary" @click="open">미리 보기</ElButton>
</template>

```

## createImageViewer

### 파라 미터

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| urlList | 사진 목록 | `string[]` | - | - |
| zIndex | 요소 레벨 | `number` | - | - |
| initialIndex | 기본적으로 몇 번째 이미지를 표시할지 설정 | `number` | - | 1 |
| infinite | 반복 전환이 가능한지 여부 | `boolean` | - | true |
| hideOnClickModal | 클릭할 때 닫히는지 여부 | `boolean` | - | false |
| appendToBody | body에 추가할지 여부 | `boolean` | - | false |
| show | 미리보기 표시 여부 | `boolean` | - | false |
