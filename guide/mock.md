# 데이터mock&설정

## 개발환경

프론트엔드 애플리케이션과 백엔드 API 서버가 동일한 호스트에서 실행되지 않는 경우, 개발 환경에서 API 요청을 API 서버로 프록시해야 합니다.

같은 호스트에서 실행되는 경우, 구체적인 API 주소로 직접 요청할 수 있습니다.

### CORS 설정

`vite.config.ts` 구성 파일에서 서버의 프록시 기능을 제공하여 API 요청을 프록시를 설정할 수 있습니다.

```ts
server: {
  proxy: {
    "/api":{
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
    }
  },
},
```

인터페이스 접두어를 설정하려면, 해당 `env` 파일에서 `VITE_API_BASE_PATH`의 값을 수정할 수 있습니다.

::: tip 주의

이 설정은 로컬 개발 환경에서만 적용됩니다.

브라우저 콘솔의 네트워크(Network) 탭에서 요청이 `http://localhost:3000/api/xxx`로 표시되는데, 이는 프록시 설정이 로컬 요청의 URL을 변경하지 않기 때문입니다.

:::

## API 요청

본 프로젝트에서는 모든 API 데이터가 `Mock`을 사용하여 시뮬레이션됩니다.

API는 [src/api/](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/api) 디렉토리 아래에 통합 관리됩니다.

리스트 조회 API를 예로 들어 설명하겠습니다:

**src/api/** 폴더 내에 모듈 파일을 새로 만들 때, 매개변수와 반환값의 타입을 정의하는 것이 좋습니다. 이렇게 하면 검증이 용이해집니다. 비록 번거로울 수 있지만, 이후에 필드를 유지보수하는 데 매우 편리합니다.

::: tip 

타입 정의 파일을 분리하여 통합 관리할 수 있습니다. 자세한 내용은 프로젝트를 참조하세요.

:::

```ts
import request from '@/axios'
import type { TableData } from './types'

export const getTableListApi = (params: any) => {
  return request.get({ url: '/example/list', params })
}

export const getTreeTableListApi = (params: any) => {
  return request.get({ url: '/example/treeList', params })
}

export const saveTableApi = (data: Partial<TableData>): Promise<IResponse> => {
  return request.post({ url: '/example/save', data })
}

export const getTableDetApi = (id: string): Promise<IResponse<TableData>> => {
  return request.get({ url: '/example/detail', params: { id } })
}

export const delTableListApi = (ids: string[] | number[]): Promise<IResponse> => {
  return request.post({ url: '/example/delete', data: { ids } })
}

```

## axios 설정

**axios** 패키징은 [src/axios](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/axios) 디렉토리에 저장됩니다.

### 전역 axios 설정 설명

axios의 전역 설정은 [src/constants](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/constants) 디렉토리에 있습니다.

::: tip 주의

변경 후에는 모든 요청에 영향을 미칩니다.

:::

```ts
/**
 * 요청 성공 상태 코드
 */
export const SUCCESS_CODE = 0

/**
 * 요청 contentType
 */
export const CONTENT_TYPE = 'application/json'

/**
 * 요청 타임아웃 시간
 */
export const REQUEST_TIMEOUT = 60000
```

## Mock 서비스

Mock 데이터는 프론트엔드 개발 과정에서 필수적인 요소이며, 프론트엔드와 백엔드 개발을 분리하는 핵심 링크입니다. 서버 측과 미리 약정한 인터페이스를 통해 요청 데이터 및 로직을 시뮬레이션함으로써, 프론트엔드 개발자가 독립적으로 작업할 수 있게 하며, 서버 측 개발 과정에 의해 차단되지 않도록 합니다.

본 프로젝트는 vite-mock-plugin을 사용하여 Mock 데이터 처리를 진행합니다. **프로젝트 내 Mock 서비스는 로컬과 온라인으로 나뉩니다**

### 로컬 Mock

로컬 Mock은 Node.js 미들웨어를 사용하여 파라미터를 가로채며, mock.js를 사용하지 않는 이유는 로컬 개발 중에 요청 매개변수와 응답 결과를 확인할 수 없기 때문입니다.

#### Mock 인터페이스 추가 방법

Mock 데이터를 추가하려면, 루트 디렉토리에서 mock 파일을 찾아 해당 인터페이스를 추가하고, 이를 가로채서 Mock 데이터를 시뮬레이션하면 됩니다.

mock 폴더 내에 새 파일을 생성하세요.

::: tip

파일을 새로 추가하면 자동으로 업데이트되며, 수동으로 재시작할 필요가 없습니다. 코드 콘솔에서 로그 정보를 확인할 수 있으며, mock 폴더 내의 파일은 자동으로 등록됩니다

:::

::: tip

mock 값은 [mock.js](http://mockjs.com/)의 문법을 직접 사용할 수 있습니다.

:::

#### 인터페이스가 준비되면, Mock을 어떻게 제거하나요?

해당 `env` 파일에서 `VITE_USE_MOCK` 을 `false`로 설정하면 Mock을 비활성화할 수 있습니다.완전히 제거하려면,`vite.config.ts`에서 `viteMockServe`와 관련된 코드를 삭제할 수 있습니다.


### 온라인 mock

이 프로젝트는 시연용 프로젝트이기 때문에, 온라인 환경에서도 Mock 데이터를 사용합니다. 그래서 패키징 후에도 Mock 데이터가 통합되어 있습니다. 일반적으로는 운영 환경에서는 실제 인터페이스를 사용하는 것이 일반적입니다.

이 프로젝트의 온라인 Mock은 [mock.js](http://mockjs.com/)를 사용하여 Mock 데이터를 시뮬레이션합니다.
