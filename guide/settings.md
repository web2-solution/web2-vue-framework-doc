# 프로젝트 설정 항목

본 문서에서는 개발자가 요구 사항에 맞게 설정할 수 있도록 몇 가지 일반적인 프로젝트 설정을 소개합니다.

## 환경 변수 설정

프로젝트의 환경 변수 설정은 프로젝트 루트 디렉토리에 위치해 있으며, 여기서는 네 가지 환경 변수를 주로 설정합니다:
- [로컬 개발 환경](https://github.com/web2-solution/web2-vue-framework/blob/demo/.env.base)
- [개발 환경](https://github.com/web2-solution/web2-vue-framework/blob/demo/.env.dev)
- [테스트 환경](https://github.com/web2-solution/web2-vue-framework/blob/demo/.env.test)
- [생산 환경](https://github.com/web2-solution/web2-vue-framework/blob/demo/.env.pro)

개발 및 디버깅 중에는 `.env.base` 파일의 데이터를 읽습니다. 다른 환경에서도 마찬가지로, 빌드 명령에 따라 다른 환경 변수를 읽습니다.

여러 환경 변수가 있는 이유

예를 들어, `생산 환경`을 살펴보면, `pnpm run build:pro` 명령을 실행할 때 출력되는 패키지는 온라인 환경에서 사용됩니다. 따라서 코드가 압축되어야 하며, 코드에서 `console.log`와 `debugger`를 제거하여 빌드 후 코드의 깔끔함과 보이지 않음을 보장해야 합니다. 다른 환경에서는 `console.log`와 `debugger`를 유지하여 디버깅을 용이하게 하고 문제를 빠르게 찾을 수 있도록 해야 합니다.

따라서 환경 변수의 역할은 각기 다른 환경에서 다른 동작을 하도록 하는 것입니다.

::: tip 

- `VITE_`로 시작하는 변수만 프로젝트에 포함됩니다. 이러한 변수는 프로젝트 코드에서 다음과 같이 접근할 수 있습니다:

```js
console.log(import.meta.env.VITE_APP_TITLE)
```

:::

### 설정 항목 설명

### .env.base

로컬 개발 환경 적용

```bash
# 환경
NODE_ENV = development

# 인터페이스 접두사
VITE_API_BASEPATH = base

# 빌드 경로
VITE_BASE_PATH = /

# 제목
VITE_APP_TITLE = ElementAdmin
```

### .env.dev

개발 환경 적용

```bash
# 환경
NODE_ENV = production

# 인터페이스 접두사
VITE_API_BASEPATH = dev

# 빌드 경로
VITE_BASE_PATH = /dist-dev/

# debugger 삭제 여부
VITE_DROP_DEBUGGER = false

# console.log 삭제 여부
VITE_DROP_CONSOLE = false

# sourcemap 삭제 여부
VITE_SOURCEMAP = true

# 출력 경로
VITE_OUT_DIR = dist-dev

# 제목
VITE_APP_TITLE = ElementAdmin

```

### .env.test

테스트 환경 적용

```bash
# 환경
NODE_ENV = production

# 인터페이스 접두사
VITE_API_BASEPATH = test

# 빌드 경로
VITE_BASE_PATH = /dist-test/

# debugger 삭제 여부
VITE_DROP_DEBUGGER = false

# console.log 삭제 여부
VITE_DROP_CONSOLE = false

# sourcemap 생성 여부
VITE_SOURCEMAP = true

# 출력 경로
VITE_OUT_DIR = dist-test

```

### .env.pro

생산 환경 적용

```bash
# 환경
NODE_ENV = production

# 인터페이스 접두사
VITE_API_BASEPATH = pro

# 빌드 경로
VITE_BASE_PATH = /

# debugger 삭제 여부
VITE_DROP_DEBUGGER = true

# console.log 삭제 여부
VITE_DROP_CONSOLE = true

# sourcemap 생성 여부
VITE_SOURCEMAP = false

# 출력 경로
VITE_OUT_DIR = dist-pro

# 제목
VITE_APP_TITLE = ElementAdmin

```

## 프로젝트 및 테마 설정

::: tip 

프로젝트 설정 파일은 프로젝트 내에서 표시되는 콘텐츠, 레이아웃, 테마 색상 등의 효과를 구성하는 데 사용됩니다.

:::

### 설정 파일 경로

[src/store/modules/app.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/store/modules/app.ts)

### 설명

수정 후, 전역 상태 관리에 추가되어 다른 곳에서 쉽게 사용할 수 있습니다.

```js
export const appModules: AppState = {
  sizeMap: ['default', 'large', 'small'],
  mobile: false, // 이동 단말 여부
  title: import.meta.env.VITE_APP_TITLE as string, // 제목
  pageLoading: false, // 라우팅 전환 시 로딩

  breadcrumb: true, // 브레드크럼 표시
  breadcrumbIcon: true, // 브레드크럼 아이콘 표시
  collapse: false, // 메뉴 접기
  hamburger: true, // 메뉴 접기 아이콘 표시
  screenfull: true, // 전체 화면 아이콘 표시
  size: true, // 크기 아이콘 표시
  locale: true, // 다국어 아이콘 표시
  tagsView: true, // 태그 페이지 표시
  logo: true, // 로고 표시
  fixedHeader: true, // 헤더 고정
  footer: true, // 페이지 하단 표시
  greyMode: false, // 회색 모드 활성화 여부, 특별한 추모일에 사용

  layout: wsCache.get('layout') || 'classic', // 레이아웃 설정
  isDark: wsCache.get('isDark') || false, // 다크 모드 여부
  currentSize: wsCache.get('default') || 'default', // 컴포넌트 크기
  theme: wsCache.get('theme') || {
    // 테마 색상
    elColorPrimary: '#409eff',
    // 좌측 메뉴 테두리 색상
    leftMenuBorderColor: 'inherit',
    // 좌측 메뉴 배경 색상
    leftMenuBgColor: '#001529',
    // 좌측 메뉴 밝은 배경 색상
    leftMenuBgLightColor: '#0f2438',
    // 좌측 메뉴 선택 배경 색상
    leftMenuBgActiveColor: 'var(--el-color-primary)',
    // 좌측 메뉴 접힌 상태의 선택 배경 색상
    leftMenuCollapseBgActiveColor: 'var(--el-color-primary)',
    // 좌측 메뉴 글자 색상
    leftMenuTextColor: '#bfcbd9',
    // 좌측 메뉴 선택 글자 색상
    leftMenuTextActiveColor: '#fff',
    // 로고 글자 색상
    logoTitleTextColor: '#fff',
    // 로고 테두리 색상
    logoBorderColor: 'inherit',
    // 상단 헤더 배경 색상
    topHeaderBgColor: '#fff',
    // 상단 헤더 글자 색상
    topHeaderTextColor: 'inherit',
    // 상단 헤더 호버 색상
    topHeaderHoverColor: '#f6f6f6',
    // 상단 툴 테두리 색상
    topToolBorderColor: '#eee'
  }
}
```

### 새 속성 추가하기

새로운 전역 구성 속성을 추가하려면, [src/store/modules/app.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/store/modules/app.ts)파일의 AppState에서 해당 타입을 추가하고, appModules 객체에 새 속성의 기본값을 부여해야 합니다.

## 다국어 설정

다국어 정보를 구성하는 데 사용됩니다

[src/store/modules/locale.ts](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/store/modules/locale.ts) 파일에서 구성

```ts
import { useCache } from '@/hooks/web/useCache'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const { wsCache } = useCache()

export const elLocaleMap = {
  'zh-CN': zhCn,
  en: en
}
export interface LocaleState {
  currentLocale: LocaleDropdownType
  localeMap: LocaleDropdownType[]
}

export const localeModules: LocaleState = {
  currentLocale: {
    lang: wsCache.get('lang') || 'zh-CN',
    elLocale: elLocaleMap[wsCache.get('lang') || 'zh-CN']
  },
  // 다국어
  localeMap: [
    {
      lang: 'zh-CN',
      name: '简体中文'//간체 중국어
    },
    {
      lang: 'en',
      name: 'English'
    }
  ]
}

```

## 스타일 구성

### css 접두사 설정

컴포넌트 및 `element-plus` 컴포넌트의 `class` 접두사 수정에 사용됩니다.

현재 `element-plus`의 컴포넌트가 모두 동적 접두사를 채택하지 않으므로, 현재는 `el` 접두사를 사용하고 있습니다.。

- [src/styles/variables.module.less](https://github.com/web2-solution/web2-vue-framework/blob/demo/src/styles/variables.module.less) 파일에서 구성

```less
// 네임스페이스
@namespace: v;
// el 네임스페이스
@elNamespace: el;

// 변수 내보내기
:export {
  namespace: @namespace;
  elNamespace: @elNamespace;
}

```

### 접두사 사용

**CSS 내에서**

```vue
<style lang="less" scoped>
  /* namespace가 이미 전역적으로 주입되었으므로 추가로 import할 필요 없음 */
  @prefix-cls: ~'@{namespace}-app';

  .@{prefix-cls} {
    width: 100%;
  }
</style>
```

**Vue / TypeScript 내에서**

```ts
import { useDesign } from '/@/hooks/web/useDesign'

const { prefixCls } = useDesign('app')

// prefixCls => v-app
```
