# Dialog 팝업 컴포넌트

`element-plus`의 `Dialog` 을 확장.

Dialog 컴포넌트 [src/components/Dialog](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Dialog) 

## 사용법

```vue
<script setup lang="ts">
import { Dialog } from '@/components/Dialog'
import { ElButton } from 'element-plus'
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<template>
  <ElButton type="primary" @click="dialogVisible = !dialogVisible">
    open
  </ElButton>
  <Dialog v-model="dialogVisible" title="dialog">
    <div v-for="v in 10000" :key="v">{{ v }}</div>
    <template #footer>
      <el-button @click="dialogVisible = false">close</el-button>
    </template>
  </Dialog>
</template>

```

## Dialog 속성

다음 매개변수 이외에 `element-plus`의 `Dialog`가 지원하는 모든 속성을 지원합니다. 

[자세히 보기](https://element-plus.org/zh-CN/component/dialog.html#%E5%B1%9E%E6%80%A7)

| 속성 | 설명 | 类型 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| modelValue | 팝업 표시 여부，v-model지원 | `boolean` | - | false |
| fullscreen | 전체화면 버튼 표시 여부 | `boolean` | - | true |
| title | 팝업 제목 | `string` | - | Dialog |
| maxHeight | 팝업 최대 높이 | `string`/`number` | - | 500px |

## Dialog 슬롯

| 슬롯 이름 | 설명 | 하위 태그 |
| ---- | ---- | ---- |
| - | 팝업 내용 | - |
| title | 팝업 제목 내용  | - |
| footer | 팝업 하단 내용 | - |
