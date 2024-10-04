# useStorage（2.1.0+）

localStorage와 sessionStorage를 조작하는데 사용되는 hook입니다.


useStorage는 [src/hooks/web/useStorage.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/hooks/web/useStorage.ts)파일에 위치해 있습니다.

기본적으로 `sessionStorage`를 사용하며, `localStorage`를 사용하려면 `localStorage`를 인수로 전달하면 됩니다. 예: useStorage('localStorage')

비 문자열 타입의 값도 저장하고 검색할 수 있습니다.

## 사용법

```vue
<script setup lang="ts">
import { useStorage } from '@/hooks/web/useStorage'

const { setStorage, getStorage, removeStorage, clear } = useStorage()

setStorage('key', { name: 'Jok' })

getStorage('key')

removeStorage('key')

clear()
</script>

```

### 파라미터 소개

```ts
const { setStorage, getStorage, removeStorage, clear } = useStorage('localStorage')
```

**setStorage**

`setStorage` 데이터를 저장합니다.


**getStorage**

`getStorage` 저장된 특정 데이터를 가져옵니다.

**removeStorage**

`removeStorage` 특정 저장 데이터를 제거합니다.

**clear**

`clear` 모든 캐시 데이터를 제거합니다. 특정 데이터를 제외하려면 excludes를 인수로 전달하여 제외할 수 있습니다. 예: clear(['key'])로 하면 `key`는 제거되지 않습니다.
