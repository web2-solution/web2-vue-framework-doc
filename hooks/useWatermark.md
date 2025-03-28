# useWatermark

요소에 워터마크를 설정합니다

useWatermark 은 [src/hooks/web/useWatermark.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/hooks/web/useWatermark.ts) 파일에 위치해 있습니다.

## 사용법

```vue
<script setup lang="tsx">
import { useWatermark } from '@/hooks/web/useWatermark'
import { onBeforeUnmount } from 'vue'

const { setWatermark, clear } = useWatermark()

const { t } = useI18n()

setWatermark('WiLS')

onBeforeUnmount(() => {
  clear()
})
</script>

```

### 파라미터 설명

```ts
const { setWatermark, clear } = useWatermark()
```

**setWatermark**

`setWatermark`는 워터마크 문구를 설정하는 데 사용되며, `string` 타입의 매개변수를 받습니다.

**clear**

`clear`는 워터마크를 제거하는 데 사용됩니다.
