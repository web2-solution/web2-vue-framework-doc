# 스타일

## 소개

주로 프로젝트에서 스타일 파일을 사용하는 방법과 계획하는 방법에 대해 소개합니다.

기본적으로 `less` 를 전처리 언어로 사용합니다. 사용하기 전 또는 의문이 있을경우 [Less](http://lesscss.org/)의 관련 특성을 학습하는 것이 좋습니다.

프로젝트에서 사용하는 공통 스타일은 모두 [src/style/](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/styles)폴더에 저장되어 있습니다.

```bash
.
├── index.less # 진입점
├── theme.less # 테마 관련
├── var.css  # css 변수
└── variables.module.less # less 변수

```

::: tip 전역 주입

variables.module.less 파일은 모든 파일에 전역으로 주입되므로, 페이지 내에서 직접 변수를 사용할 수 있으며, 별도로 import할 필요가 없습니다.

var.css 는 루트 요소에 주입되므로, 모든 곳에서 사용할 수 있습니다.

:::

## unocss

프로젝트에서는  [unocss](https://github.com/unocss/unocss#readme)를 사용하고 있으며, 자세한 사용 방법은 문서를 참조하세요.
<!-- 
사용하지 않은 사람들은 다소 불편하게 느낄 수 있지만, 개인적으로는 매우 유용하게 느껴집니다. 많은 불필요한 번거로움을 줄여주었습니다. -->

문법은 다음과 같습니다.

```html
<div class="relative w-full h-full px-4"></div>
```
