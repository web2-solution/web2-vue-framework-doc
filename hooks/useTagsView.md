# useTagsView（2.1.0+）

탭 페이지 조작 기능을 제공하는 hook입니다.

useTagsView 는 [src/hooks/web/useTagsView.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/store/modules/tagsView.ts) 파일에 위치해 있습니다.

## 사용법

```vue
<script setup lang="tsx">
<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { ElButton } from 'element-plus'
import { useTagsView } from '@/hooks/web/useTagsView'
import { useRouter } from 'vue-router'

const { push } = useRouter()

const { closeAll, closeLeft, closeRight, closeOther, closeCurrent, refreshPage, setTitle } =
  useTagsView()

const closeAllTabs = () => {
  closeAll(() => {
    push('/dashboard/analysis')
  })
}

const closeLeftTabs = () => {
  closeLeft()
}

const closeRightTabs = () => {
  closeRight()
}

const closeOtherTabs = () => {
  closeOther()
}

const refresh = () => {
  refreshPage()
}

const closeCurrentTab = () => {
  closeCurrent(undefined, () => {
    push('/dashboard/analysis')
  })
}

const setTabTitle = () => {
  setTitle(new Date().getTime().toString())
}

const setAnalysisTitle = () => {
  setTitle(`분석 페이지-${new Date().getTime().toString()}`, '/dashboard/analysis')
}
</script>

<template>
  <ContentWrap title="useTagsView">
    <ElButton type="primary" @click="closeAllTabs"> 모든 탭 닫기 </ElButton>
    <ElButton type="primary" @click="closeLeftTabs"> 왼쪽 탭 닫기 </ElButton>
    <ElButton type="primary" @click="closeRightTabs"> 오른쪽 탭 닫기 </ElButton>
    <ElButton type="primary" @click="closeOtherTabs"> 다른 탭 닫기 </ElButton>
    <ElButton type="primary" @click="closeCurrentTab"> 현재 탭 닫기 </ElButton>
    <ElButton type="primary" @click="refresh"> 현재 탭 새로 고침 </ElButton>
    <ElButton type="primary" @click="setTabTitle"> 현재 제목 변경 </ElButton>
    <ElButton type="primary" @click="setAnalysisTitle"> 분석 페이지 제목 변경 </ElButton>
  </ContentWrap>
</template>

</script>

```

### 파라미터 소개

```ts
const { closeAll, closeLeft, closeRight, closeOther, closeCurrent, refreshPage, setTitle } = useTagsView()
```

**closeAll**

`closeAll` 모든 탭을 닫습니다.

**closeLeft**

`closeLeft` 현재 탭의 왼쪽에 있는 모든 탭을 닫습니다.

**closeRight**

`closeRight` 현재 탭의 오른쪽에 있는 모든 탭을 닫습니다.

**closeOther**

`closeOther` 현재 탭을 제외한 모든 탭을 닫습니다.

**closeCurrent**

`closeCurrent` 현재 탭을 닫습니다.

**refreshPage**

`refreshPage` 현재 탭을 새로 고칩니다.

**setTitle**

`setTitle(title: string, path: string)` 특정 탭의 제목을 설정합니다. title은 새로운 제목, path는 전체 경로입니다.