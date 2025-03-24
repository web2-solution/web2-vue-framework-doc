# Avatar 목록

아바타 모음

Avatars 컴포넌트 : [src/components/Avatars](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Avatars) 

## 사용법


```vue
<script lang="ts" setup>
import { Avatars } from '@/components/Avatars'

const data = ref<AvatarItem[]>([
  {
    name: 'Lily',
    url: 'https://avatars.githubusercontent.com/u/3459374?v=4'
  },
  {
    name: 'Amanda',
    url: 'https://avatars.githubusercontent.com/u/3459375?v=4'
  },
  {
    name: 'Daisy',
    url: 'https://avatars.githubusercontent.com/u/3459376?v=4'
  },
  {
    name: 'Olivia',
    url: 'https://avatars.githubusercontent.com/u/3459377?v=4'
  },
  {
    name: 'Tina',
    url: 'https://avatars.githubusercontent.com/u/3459378?v=4'
  },
  {
    name: 'Kitty',
    url: 'https://avatars.githubusercontent.com/u/3459323?v=4'
  },
  {
    name: 'Helen',
    url: 'https://avatars.githubusercontent.com/u/3459324?v=4'
  },
  {
    name: 'Sophia',
    url: 'https://avatars.githubusercontent.com/u/3459325?v=4'
  },
  {
    name: 'Wendy',
    url: 'https://avatars.githubusercontent.com/u/3459326?v=4'
  }
])
</script>

<template>
  <Avatars :data="data" />
</template>

```

## Avatars 속성<span id="Avatars"></span>

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| size | 아바타 크기 | `ComponentSize、number` | - | - |
| max | 최대 표시 개수 | `number` | - | 5 |
| data | 아바타 데이터，[자세히보기](#data) | `AvatarItem[]` | - | - |
| showTooltip | 툴팁 표시여부 | `boolean` | - | true |

### data<span id="data"></span>

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| url | 이미지 url | `string` | - | - |
| name | 이름，(선택적 요소) | `string` | - | - |
