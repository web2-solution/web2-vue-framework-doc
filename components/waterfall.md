# Waterfall 격자형 레이아웃 컴포넌트

격자형 레이아웃 컴포넌트

Waterfall 컴포넌트 : [src/components/Waterfall](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Waterfall) 

::: tip

data 데이터는 반드시 높이 필드를 포함해야 하며, 이는 올바른 위치를 계산하는 데 필요합니다.

:::

## 사용법

```vue
<script lang="tsx" setup>
import { Waterfall } from '@/components/Waterfall'
import Mock from 'mockjs'
import { ref, unref } from 'vue'
import { toAnyString } from '@/utils'

const data = ref<any>([])

const getList = () => {
  const list: any = []
  for (let i = 0; i < 20; i++) {
    // 100과 500 사이의 무작위 정수
    const height = Mock.Random.integer(100, 500)
    const width = Mock.Random.integer(100, 500)
    list.push(
      Mock.mock({
        width,
        height,
        id: toAnyString(),
        image_uri: Mock.Random.image(`${width}x${height}`)
      })
    )
  }
  data.value = [...unref(data), ...list]
  if (unref(data).length >= 60) {
    end.value = true
  }
}
getList()

const loading = ref(false)

const end = ref(false)

const loadMore = () => {
  loading.value = true
  setTimeout(() => {
    getList()
    loading.value = false
  }, 1000)
}
</script>

<template>
  <Waterfall
    :data="data"
    :loading="loading"
    :end="end"
    :props="{
      src: 'image_uri',
      height: 'height'
    }"
    @load-more="loadMore"
  />
</template>

```

## Waterfall 속성


| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| data | 표시할 데이터 | `Array` | - | - |
| reset | 창 크기 변경 시 레이아웃 재구성 여부| `boolean` | true/false | true |
| width | 각 항목의 너비 | `number` | - | 200 |
| gap | 각 항목의 간격 | `number` | - | 20 |
| loadingText | 로딩 중 텍스트 | `string` | - | 로딩 중... |
| loading | 로딩 중 여부 | `boolean` | - | false |
| end | 로딩 완료 여부 | `boolean` | - | false |
| endText | 로딩 완료 텍스트 여부 | `string` | - | 더 이상 없습니다 |
| props | 필드 별칭 | `object` | - | `{ src: 'src', height: 'height' }` |

## Waterfall 이벤트

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| loadMore | 더 많은 데이터 로드 이벤트 | - |