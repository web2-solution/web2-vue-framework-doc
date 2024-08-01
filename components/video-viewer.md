# VideoViewer 이미지 미리보기 컴포넌트（2.5.0+）


`VideoPlayer` 컴포넌트를 함수형으로 변환하여, 함수를 통해 컴포넌트를 쉽게 생성할 수 있도록 합니다.

<!-- VideoViewer 컴포넌트 : [src/components/VideoViewer](https://github.com/kailong321200875/vue-element-plus-admin/tree/master/src/components/VideoViewer) 内 (404)-->

## 사용법

```vue
<script setup lang="ts">
import { createVideoViewer } from '@/components/VideoPlayer'

const open = () => {
  createVideoViewer({
    url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
    poster: '//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg'
  })
}
</script>

<template>
  <ElButton type="primary" @click="open">预览</ElButton>
</template>

```

## VideoViewer

### 파라미터

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| url | 비디오 url 주소 | `string` | - | - |
| poster | 비디오 커버 이미지 | `string` | - | - |
