# Qrcode QR코드 컴포넌트

`qrcode`를 기반으로 한 래핑

Qrcode 컴포넌트 : [src/components/Qrcode](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Qrcode) 

```vue
<script setup lang="tsx">
import { Qrcode } from '@/components/Qrcode'
</script>

<template>
  <Qrcode text="web2-vue-framework" />
</template>

```

## Qrcode 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| tag | QR 코드를 생성할 태그 | `string` | canvas/img | canvas |
| text | QR 코드 내용 | `string`/`Array` | - | - |
| options | qrcode.js 설정 항목 | `QRCodeRenderersOptions` | - | {} |
| width | QR 코드 너비 | `number` | - | 200 |
| logo | QR 코드 logo | `QrcodeLogo`/`string` | - | - |
| disabled | QR 코드만료 여부 | `boolean` | - | false |
| disabledText | QR 코드 만료 안내 메시지 | `string` | - | - |

## Qrcode 이벤트

| 함수 명 | 설명 | 콜백 파라미터 |
| ---- | ---- | ---- |
| done | QR 코드 생성 후의 콜백 | - |
| click | QR 코드 클릭 이벤트 | - |
| disabled-click | QR 코드 만료 후 클릭 이벤트 | - |
