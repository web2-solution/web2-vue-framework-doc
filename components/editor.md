# Editor 리치 텍스트 컴포넌트

wangeditor를 기반으로 확장.

<!-- (https://www.wangeditor.com/) -->

현재 프로젝트의 `editor` 는 기본적인 패키지일 뿐이며,

개발자는 필요에따라 `editorConfig` 속성을 직접 설정해야 합니다, 예를 들어, 이미지 업로드와 같은 기능을 설정할 수 있습니다。

<!-- [wangeditor문서](https://www.wangeditor.com/v5/) -->

Editor 컴포넌트 [src/components/Editor](https://github.com/web2-solution/web2-vue-framework/tree/main/src/components/Editor)

## 사용법

```vue
<script setup lang="ts">
  import { Editor } from '@/components/Editor';
  import { ref } from 'vue';

  const defaultHtml = ref('<p>hello <strong>world</strong></p>');

  const change = (html: string) => {
    console.log(html);
  };
</script>

<template>
  <Editor v-model="defaultHtml" ref="editorRef" @change="change" />
</template>
```

## Editor 속성

| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| --- | --- | --- | --- | --- |
| editorId | 리치 텍스트 컴포넌트 고유 값, 필수 항목 | `string` | - | wangeEditor-1 |
| height | 높이 | `string`/`number` | - | 500px |
| editorConfig | wangeditor 컴포넌트의 모든 설정 항목 | `IEditorConfig` | - | - |
| modelValue | 양방향 바인딩, v-model 지원 | `string` | - | - |

## Editor 이벤트

| 함수 명 | 설명                                    | 콜백 파라미터      |
| ------- | --------------------------------------- | ------------------ |
| change  | 내용이 변경될 때 'editor' 인스턴스 반환 | editor: IDomEditor |

## Editor 메소드

| 함수 명      | 설명                     | 콜백 파라미터               |
| ------------ | ------------------------ | --------------------------- |
| getEditorRef | editor 인스턴스 가져오기 | `() => Promise<IDomEditor>` |
