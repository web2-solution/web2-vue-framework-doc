# useNetwork

네트워크 상태를 모니터링하는 hook입니다.

useNetwork는 [src/hooks/web/useNetwork.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/hooks/web/useNetwork.ts)파일에 위치해 있습니다.

## 사용법

```vue
<script setup lang="tsx">
import { useNetwork } from '@/hooks/web/useNetwork'

const { online } = useNetwork()

console.log(online)
</script>

```

### 파라미터 소개

```ts
const { online } = useNetwork()
```

**online**

`online` 네트워크가 연결되어 있는지 여부를 나타냅니다.
