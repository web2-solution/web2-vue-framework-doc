# IAgree 컴포넌트

동의 약관 옵션에 사용됩니다.

IAgree 컴포넌트 [src/components/IAgree](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/IAgree) 

## 사용법

```vue
<template>
  <IAgree
    :link="[
      {
        text: '웹투게더',
        url: 'http://www.web2gether.co.kr/'
      }
    ]"
    text="웹투게더"
  />
</template>

```

## Avatars 속성<span id="Avatars"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| text | 텍스트 | `string` | - | - |
| link | 링크가 필요한 하이라이트 데이터 [자세히 보기](#link) | `LinkItem[]` | - | - |

### link<span id="link"></span>

| 속성 | 설명 | 타입 | 선택 가능 값 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| url | url주소，필수항목 X | `string` | - | - |
| text | 하이라이트 텍스트 | `string` | - | - |
| onClick | 클릭했을 대 이벤트, 필수항목 X | `() => void` | - | - |
