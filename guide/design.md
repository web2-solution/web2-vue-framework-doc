# 스타일

## 소개

주로 프로젝트에서 스타일 파일을 사용하는 방법과 계획하는 방법에 대해 소개합니다.

기본적으로 `less` 를 전처리 언어로 사용합니다. 사용하기 전 [Less](http://lesscss.org/)의 관련 특성을 학습하는 것이 좋습니다.

프로젝트에서 사용하는 공통 스타일은 모두 [src/style/](https://github.com/web2-solution/web2-vue-framework/tree/main/src/styles)폴더에 저장되어 있습니다.

```bash
.
├── common.css # Element Plus CSS 및 공통 스타일 정의
├── index.less # 진입점
├── theme.less # 테마 관련
├── var.css  # css 변수
└── variables.module.less # less 변수

```

::: tip 전역 주입

variables.module.less 파일은 모든 파일에 전역으로 주입되므로, 페이지 내에서 직접 변수를 사용할 수 있으며, 별도로 import할 필요가 없습니다.

var.css 는 루트 요소에 주입되므로, 프로젝트 내 모든 곳에서 사용할 수 있습니다.

:::

## unocss

프로젝트에서는 [unocss](https://github.com/unocss/unocss#readme)를 사용하고 있습니다. `unocss`는 `Tailwind CSS`와 유사한 유틸리티-퍼스트 CSS 프레임워크로, 필요에 따라 클래스를 동적으로 생성하여 스타일을 적용할 수 있습니다. 자세한 사용 방법은 공식 문서를 참조하세요.

문법은 다음과 같습니다.

```html
<div class="relative w-full h-full px-4"></div>
```
