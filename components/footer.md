# Footer 푸터 컴포넌트

프로젝트 전체에 페이지 정보를 제공하며, 자동으로 적응합니다.

내용의 높이가 부족할 경우, 항상 페이지 하단에 유지되며, 내용이 초과할 경우에는 내용 뒤쪽에 따라 이동합니다.

Footer 컴포넌트 [src/components/Footer](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Footer) 

페이지 정보 수정이 필요할 경우, 컴포넌트 내에서 사용자 정의하여 수정할 수 있습니다.

## 사용법

```vue
<script setup lang="ts">
import { Footer } from '@/components/Footer'
</script>

<template>
  <Footer />
</template>

```
