# VideoPlayer 비디오 플레이어 컴포넌트（2.5.0+）

xgplayer를 기반으로 한 비디오 플레이어의 재구성

VideoPlayer 컴포넌트 : [src/components/VideoPlayer](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/VideoPlayer)


## 사용법


```vue
<script lang="ts" setup>
import { VideoPlayer } from '@/components/VideoPlayer'
</script>

<template>
  <VideoPlayer
    url="//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4"
    poster="//lf3-static.bytednsdoc.com/obj/eden-cn/nupenuvpxnuvo/xgplayer_doc/poster.jpg"
  />
</template>

```

## VideoPlayer 속성<span id="VideoPlayer"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| url | 비디오 url 주소 | `string` | - | - |
| poster | 비디오 커버 이미지 | `string` | - | - |
