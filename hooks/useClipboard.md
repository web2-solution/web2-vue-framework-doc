# useClipboard

클립보드 기능을 제공하는 hook입니다.

useClipboard는 [src/hooks/web/useClipboard.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/hooks/web/useClipboard.ts) 파일에 위치해 있습니다.

## 사용법

```vue
<script setup lang="ts">
import { useClipboard } from '@/hooks/web/useClipboard'

const { copy } = useClipboard()

copy('복사내용')
</script>

```

### 파라미터 소개

```ts
const { copy, copied, text, isSupported } = useClipboard()
```

**copy**

`copy` 복사할 내용을 인수로 받아 복사합니다.

**copied**

`copied` 내용이 성공적으로 복사되었는지 여부를 나타냅니다.


**text**

`text` 복사할 내용입니다.

**isSupported**

`isSupported` 브라우저가 복사를 지원하는지 여부를 나타냅니다.
