// @ts-check
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch');

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/web2-vue-framework-doc/',
  title: 'web2-vue-framework',
  lang: 'ko-KO',
  description: 'Vue 3, Element Plus, TypeScript, Vite 기반 통합 솔루션',
  head: createHead(),
  // plugins: [docsearchPlugin({})],
  themeConfig: {
    logo: '/logo.png',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '이 페이지에 대한 수정 제안',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'web2gether' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'web2-vue-framework, vitejs, vite, element-plus, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'web2-vue-framework-doc' }],
    ['link', { rel: 'icon', href: 'favicon.ico' }],
  ];
}

/**
 * //@type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '가이드',
      link: '/guide/',
      items: [
        {
          text: '소개',
          link: '/guide/introduction',
        },
        {
          text: '심화',
          link: '/dep/i18n',
        },
      ],
    },
    {
      text: '컴포넌트',
      link: '/components/',
      items: [
        {
          text: '소개',
          link: '/components/introduction',
        },
        {
          text: '전역 컴포넌트',
          link: '/components/icon',
        },
        {
          text: '기능 컴포넌트',
          link: '/components/form',
        },
        {
          text: '함수형 컴포넌트',
          link: '/components/image-viewer',
        },
      ],
    },
    {
      text: '자주 사용하는 Hooks',
      link: '/hooks/useWatermark',
    },
    {
      text: '자주 묻는 질문',
      link: '/guide/fqa',
    },
    {
      text: '관련 링크',
      items: [
        {
          text: 'WiLS 데모 사이트',
          link: 'http://demo-wils.logis-hub.co.kr/',
        },
      ],
    },
  ];
}

function createSidebar() {
  return {
    '/hooks/': [
      {
        text: 'useWatermark',
        link: '/hooks/useWatermark',
      },
      {
        text: 'useCrudSchemas',
        link: '/hooks/useCrudSchemas',
      },
      {
        text: 'useTagsView（2.1.0+）',
        link: '/hooks/useTagsView',
      },
      {
        text: 'useStorage（2.1.0+）',
        link: '/hooks/useStorage',
      },
      {
        text: 'useClipboard（2.4.0+）',
        link: '/hooks/useClipboard',
      },
      {
        text: 'useNetwork（2.4.0+）',
        link: '/hooks/useNetwork',
      },
    ],
    '/components/': [
      {
        text: '컴포넌트',
        children: [
          {
            text: '서문',
            link: '/components/introduction',
          },
        ],
      },
      {
        text: '전역 컴포넌트',
        children: [
          {
            text: 'Icon 아이콘 컴포넌트',
            link: '/components/icon',
          },
          {
            text: 'Permission 권한 컴포넌트（2.1.0+）',
            link: '/components/permission',
          },
          {
            text: 'BaseButton 버튼 컴포넌트（2.5.1+）',
            link: '/components/button',
          },
        ],
      },
      {
        text: '기능 컴포넌트',
        children: [
          {
            text: 'Form 폼 컴포넌트',
            link: '/components/form',
          },
          {
            text: 'CustomGrid 컴포넌트',
            link: '/components/custom-grid',
          },
          {
            text: 'Table 테이블 컴포넌트',
            link: '/components/table',
          },
          {
            text: 'Editor 리치 텍스트 컴포넌트',
            link: '/components/editor',
          },
          {
            text: 'Search 조회 컴포넌트',
            link: '/components/search',
          },
          {
            text: 'Descriptions 설명 컴포넌트',
            link: '/components/descriptions',
          },
          {
            text: 'Dialog 팝업 컴포넌트',
            link: '/components/dialog',
          },
          {
            text: 'Echart 차트 컴포넌트',
            link: '/components/echart',
          },
          {
            text: 'CountTo 숫자 애니메이션 컴포넌트',
            link: '/components/count-to',
          },
          {
            text: 'Qrcode 컴포넌트',
            link: '/components/qrcode',
          },
          {
            text: 'Highlight 컴포넌트',
            link: '/components/highlight',
          },
          {
            text: 'Infotip 컴포넌트',
            link: '/components/infotip',
          },
          {
            text: 'Error 기본 컴포넌트',
            link: '/components/error',
          },
          {
            text: 'ContentDetailWrap 상세 패키지 컴포넌트',
            link: '/components/content-detail-wrap',
          },
          {
            text: 'InputPassword 컴포넌트',
            link: '/components/input-password',
          },
          {
            text: 'Footer 컴포넌트',
            link: '/components/footer',
          },
          {
            text: 'JsonEditor JSON 편집기 컴포넌트（2.2.0+）',
            link: '/components/json-editor',
          },
          {
            text: '아이콘 선택 컴포넌트（2.3.0+）',
            link: '/components/icon-picker',
          },
          {
            text: '워터폴 컴포넌트（2.4.0+）',
            link: '/components/waterfall',
          },
          {
            text: '프로필 사진 목록 컴포넌트（2.7.0+）',
            link: '/components/avatars',
          },
          {
            text: 'IAgree 컴포넌트（2.7.0+）',
            link: '/components/i-agree',
          },
        ],
      },
      {
        text: '함수형 컴포넌트',
        children: [
          {
            text: 'ImageViewer 이미지 미리보기 컴포넌트',
            link: '/components/image-viewer',
          },
          {
            text: 'VideoViewer 컴포넌트（2.5.0+）',
            link: '/components/video-viewer',
          },
        ],
      },
    ],
    '/': [
      {
        text: '가이드',
        children: [
          {
            text: '소개',
            link: '/guide/introduction',
          },
          {
            text: '시작',
            link: '/guide/',
          },
          {
            text: '프로젝트 설정',
            link: '/guide/settings',
          },
          {
            text: '라우팅',
            link: '/guide/router',
          },
          {
            text: '권한',
            link: '/guide/auth',
          },
          {
            text: 'Mock & 통합 테스트',
            link: '/guide/mock',
          },
          {
            text: '컴포넌트 등록',
            link: '/guide/component',
          },
          {
            text: '스타일',
            link: '/guide/design',
          },
          {
            text: '빌드 & 배포',
            link: '/guide/deploy',
          },
        ],
      },
      {
        text: '심화',
        children: [
          {
            text: '국제화',
            link: '/dep/i18n',
          },
          {
            text: '프로젝트 규범',
            link: '/dep/lint',
          },
          {
            text: '다크 테마',
            link: '/dep/dark',
          },
          {
            text: '템플릿 생성',
            link: '/dep/create-module',
          },
        ],
      },
      {
        text: '자주 묻는 질문',
        children: [
          {
            text: '서문',
            link: '/guide/fqa',
          },
        ],
      },
    ],
  };
}
