# JsonEditor JSON 편집기 컴포넌트（2.2.0+）

[vue-json-pretty](https://leezng.github.io/vue-json-pretty/)를 기반으로 래핑되었습니다.

[vue-json-pretty문서](https://github.com/leezng/vue-json-pretty)

JsonEditor 컴포넌트 : [src/components/JsonEditor](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/JsonEditor) 

## 사용법

```vue
<script setup lang="ts">
<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { JsonEditor } from '@/components/JsonEditor'
import { useI18n } from '@/hooks/web/useI18n'
import { ref, watch } from 'vue'

const { t } = useI18n()

const defaultData = ref({
  title: '제목',
  content: '내용'
})

watch(
  () => defaultData.value,
  (val) => {
    console.log(val)
  },
  {
    deep: true
  }
)

setTimeout(() => {
  defaultData.value = {
    title: '비동기 제목',
    content: '비동기 내용'
  }
}, 4000)
</script>

<template>
  <ContentWrap :title="t('richText.jsonEditor')" :message="t('richText.jsonEditorDes')">
    <JsonEditor v-model="defaultData" />
  </ContentWrap>
</template>

```

## JsonEditor 속성

[vue-json-pretty 문서](https://github.com/leezng/vue-json-pretty)

## Editor 이벤트

[vue-json-pretty 문서](https://github.com/leezng/vue-json-pretty)
