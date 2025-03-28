# 프로젝트 설정 항목

본 문서에서는 개발자가 프로젝트 요구 사항에 맞게 환경을 설정할 수 있도록 몇 가지 일반적인 설정을 안내합니다.

## 환경 변수 설정

프로젝트의 환경 변수는 프로젝트 루트 디렉토리에 위치하며, 주로 네 가지 환경 변수를 설정합니다:
- [로컬 개발 환경](https://github.com/web2-solution/web2-vue-framework/blob/main/.env.base)
- [개발 환경](https://github.com/web2-solution/web2-vue-framework/blob/main/.env.dev)
- [테스트 환경](https://github.com/web2-solution/web2-vue-framework/blob/main/.env.test)
- [프로덕션 환경](https://github.com/web2-solution/web2-vue-framework/blob/main/.env.pro)

개발 및 디버깅 중에는 `.env.base` 파일의 변수를 사용하며, 빌드 명령에 따라 각 환경에 맞는 변수를 사용하게 됩니다.

### 여러 환경 변수를 사용하는 이유

예를 들어 `프로덕션 환경`에서는 `pnpm run build:pro` 명령을 실행할 때 출력된 패키지가 실제 온라인 환경에서 사용됩니다. 이 때문에 코드가 압축되고, `console.log`와 `debugger`가 제거되어 깔끔한 코드로 배포되어야 합니다. 반면 다른 환경에서는 `console.log`와 `debugger`가 유지되어 디버깅이 쉽게 이뤄질 수 있어야 합니다.

따라서 각 환경에서 다른 동작을 하도록 하기 위해 환경 변수를 구분해 사용합니다.

::: tip
- `VITE_`로 시작하는 변수만 프로젝트에 포함됩니다. 이러한 변수는 프로젝트 코드에서 아래와 같이 접근할 수 있습니다:

```js
console.log(import.meta.env.VITE_APP_TITLE)
```
:::

### 환경 변수 설정 파일

#### .env.base (로컬 개발 환경)

```bash
# 환경 설정
NODE_ENV = development

# API 접두사
VITE_API_BASEPATH = base

# 빌드 경로
VITE_BASE_PATH = /

# 애플리케이션 제목
VITE_APP_TITLE = WiLS
```

#### .env.dev (개발 환경)

```bash
# 환경 설정
NODE_ENV = production

# API 접두사
VITE_API_BASEPATH = dev

# 빌드 경로
VITE_BASE_PATH = /dist-dev/

# debugger 유지 여부
VITE_DROP_DEBUGGER = false

# console.log 유지 여부
VITE_DROP_CONSOLE = false

# sourcemap 생성 여부
VITE_SOURCEMAP = true

# 출력 경로
VITE_OUT_DIR = dist-dev

# 애플리케이션 제목
VITE_APP_TITLE = WiLS
```

#### .env.test (테스트 환경)

```bash
# 환경 설정
NODE_ENV = production

# API 접두사
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

#### .env.pro (프로덕션 환경)

```bash
# 환경 설정
NODE_ENV = production

# API 접두사
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

# 애플리케이션 제목
VITE_APP_TITLE = WiLS
```

## 프로젝트 및 테마 설정

프로젝트 설정 파일은 프로젝트 내 콘텐츠, 레이아웃, 테마 색상 등을 구성하는 데 사용됩니다.

### 설정 파일 경로

[src/store/modules/app.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/store/modules/app.ts)

### 설정 항목 설명

해당 설정은 수정 후 전역 상태 관리에 추가되어 프로젝트 전반에서 쉽게 사용할 수 있습니다.

```js
export const appModules: AppState = {
  sizeMap: ['default', 'large', 'small'], // 컴포넌트의 사용 가능한 크기
  mobile: false, // 애플리케이션이 모바일 장치에서 실행되고 있는지 여부
  title: import.meta.env.VITE_APP_TITLE, // 애플리케이션 제목
  pageLoading: false, // 라우트 전환 중 로딩 상태 표시 여부
  breadcrumb: true, // 브레드크럼 내비게이션 활성화 여부
  breadcrumbIcon: false, // 브레드크럼에 아이콘 표시 여부
  collapse: false, // 메뉴를 접을 수 있는지 여부
  uniqueOpened: true, // 한 번에 하나의 하위 메뉴만 확장되도록 설정
  hamburger: true, // 햄버거 메뉴 아이콘 표시 여부
  screenfull: true, // 전체 화면 모드 아이콘 활성화 여부
  size: true, // 크기 선택 아이콘 표시 여부
  locale: true, // 다국어 지원 아이콘 활성화 여부
  tagsView: true, // 페이지 북마크 기능 활성화 여부
  tagsViewIcon: true, // 태그 뷰에 아이콘 표시 여부
  logo: true, // 애플리케이션 로고 표시 여부
  fixedHeader: true, // 페이지 상단에 헤더 고정
  footer: false, // 푸터 표시 여부
  greyMode: false, // 그레이 모드 활성화 여부
  dynamicRouter: true, // 동적 라우팅 활성화 여부
  serverDynamicRouter: true, // 동적 라우트를 위한 서버 사이드 렌더링 활성화 여부
  fixedMenu: false, // cutMenu 레이아웃에서 메뉴 고정
  layout: 'classic', // 레이아웃 스타일 지정
  isDark: false, // 다크 모드 활성화 여부
  currentSize: 'small', // 현재 컴포넌트 크기 설정

  theme: {
    // 테마의 기본 색상
    elColorPrimary: '#409eff',
    // 왼쪽 메뉴의 테두리 색상
    leftMenuBorderColor: 'inherit',
    // 왼쪽 메뉴의 배경 색상
    leftMenuBgColor: '#001529',
    // 왼쪽 메뉴의 밝은 배경 색상
    leftMenuBgLightColor: '#0f2438',
    // 활성화된 왼쪽 메뉴 항목의 배경 색상
    leftMenuBgActiveColor: 'var(--el-color-primary)',
    // 접힌 상태에서 활성화된 왼쪽 메뉴 항목의 배경 색상
    leftMenuCollapseBgActiveColor: 'var(--el-color-primary)',
    // 왼쪽 메뉴 항목의 글꼴 색상
    leftMenuTextColor: '#bfcbd9',
    // 활성화된 왼쪽 메뉴 항목의 글꼴 색상
    leftMenuTextActiveColor: '#fff',
    // 로고 제목의 글꼴 색상
    logoTitleTextColor: '#fff',
    // 로고의 테두리 색상
    logoBorderColor: 'inherit',
    // 상단 헤더의 배경 색상
    topHeaderBgColor: '#fff',
    // 상단 헤더의 글꼴 색상
    topHeaderTextColor: 'inherit',
    // 상단 헤더의 호버 색상
    topHeaderHoverColor: '#f6f6f6',
    // 상단 도구 영역의 테두리 색상
    topToolBorderColor: '#eee'
  }
}
```

### 새 속성 추가하기

새로운 전역 구성 속성을 추가하려면 [src/store/modules/app.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/store/modules/app.ts) 파일에서 AppState 타입에 해당 속성을 추가하고, appModules 객체에 기본값을 설정해주면 됩니다.

## 다국어 설정

다국어 관련 설정은 아래 파일에서 관리됩니다:
[src/store/modules/locale.ts](https://github.com/web2-solution/web2-vue-framework/blob/main/src/store/modules/locale.ts)

```ts
import { defineStore } from 'pinia'
import { store } from '../index'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import ko from 'element-plus/es/locale/lang/ko'
import { useStorage } from '@/hooks/web/useStorage'
import { LocaleDropdownType } from '@/components/LocaleDropdown'

const { getStorage, setStorage } = useStorage('localStorage')

const elLocaleMap = {
  'zh-CN': zhCn,
  EN: en,
  KO: ko
}
interface LocaleState {
  currentLocale: LocaleDropdownType
  localeMap: LocaleDropdownType[]
}

export const useLocaleStore = defineStore('locales', {
  state: (): LocaleState => {
    return {
      currentLocale: {
        lang: getStorage('lang') || 'KO',
        elLocale: elLocaleMap[getStorage('lang') || 'KO']
      },
      localeMap: [
        {
          lang: 'KO',
          name: '한국어'
        },
        {
          lang: 'EN',
          name: 'English'
        }
      ]
    }
  },
  ...
```

## 스타일 구성

### CSS 접두사 설정

컴포넌트 및 `element-plus`의 클래스 접두사를 수정할 때 사용됩니다.

- [src/styles/variables.module.less](https://github.com/web2-solution/web2-vue-framework/blob/main/src/styles/variables.module.less)

```less
// 네임스페이스
@namespace: v;
@elNamespace: el;

// 변수 내보내기
:export {
  namespace: @namespace;
  elNamespace: @elNamespace;
}
```

### 접두사 사용 방법

**CSS 내에서**

```vue
<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app'; // v-app

  .@{prefix-cls} {
    width: 100%;
  }
</style>
```

**Vue/TypeScript 내에서**

```ts
import { useDesign } from '/@/hooks/web/useDesign'

const { prefixCls } = useDesign('app')

// prefixCls => v-app
```