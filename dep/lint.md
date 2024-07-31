# Lint

## 소개

::: tip lint를 사용하는 장점

기본적인 엔지니어링 소양을 갖춘 개발자라면 코드 규칙에 신경을 쓰게 됩니다. 코드 스타일 검사（Code Linting，줄여서 Lint）는 코드 규칙의 일관성을 보장하는 중요한 수단입니다.

적절한 코드 규칙을 따르는 것의 장점ㅈ

- 버그 오류율이 줄어듭니다.
- 효율적인 개발이 가능합니다.
- 가독성이 높아집니다.

:::

프로젝트에는 다음과 같은 코드 검증 방식이 통합되어 있습니다.

1. eslint: 코드 형식 규칙 검증에 사용됩니다.
2. commitlint: git 커밋 메시지 규칙 검증에 사용됩니다.
3. stylelint: css/less 규칙 검증에 사용됩니다.
4. prettier: 코드 포맷팅에 사용됩니다.

::: warning 주의

lint는 필수는 아니지만 매우 유용합니다. 프로젝트가 커지거나 참여 인원이 많아지면 다양한 코드 스타일이 나타나게 되며, 이는 이후 유지보수에 문제를 일으킬 수 있습니다.

:::

## ESLint

ESLint는 코드 규칙과 오류 검사를 위한 도구로, 팀의 규칙에 맞게 설정하여  사용할 수 있습니다.

### 코드를 수동으로 검토

```bash
# 아래 명령어를 실행하면, 수정 가능한 부분은 자동으로 수정되고, 수정할 수 없는 부분은 수동으로 수정해야 합니다.
pnpm run lint:eslint
```

### 설정 항목

프로젝트의 eslint 설정은 루트 디렉토리의 **.eslintrc.js** 파일에 위치해 있으며, 팀의 요규에 맞게 코드 규칙을 수정할 수 있습니다.

## CommitLint

팀 내에서 각자의 git 커밋 정보가 서로 다르고, 다양한 스타일로 작성되면 규칙을 일관되게 유지하기 어렵습니다. 이를 규칙화하려면 git 훅 매커니즘을 사용해 셀 스크립트를 작성할 수 있습니다. 또한 JavaScript에는 이 템플릿을 구현할 수 있는 commitlint가 있습니다(git 커밋 메시지 규칙 검증 도구)

### 설정

commit-lint의 설정은 프로젝트 루트 디렉토리의 **commitlint.config.js** 파일에 위치해 있습니다.

### Git 커밋 규칙

- `feat` 새로운 기능
- `fix` 버그 수정
- `docs` 문서
- `style` 포맷 및 스타일(코드 실행에 영향을 미치지 않는 변경)
- `refactor` 리팩토링(새 기능 추가나 버그 수정이 아닌 코드 변경)
- `perf` 성능 향상 관련 변경
- `test` 테스트 추가
- `build` 빌드 관련 변경(프로젝트 빌드나 의존성 변경)
- `ci` 지속적 통합 변경
- `chore` 빌드 프로세스나 도구 변경
- `revert` 이전 버전으로 되돌리기
- `workflow` 워크플로우 개선
- `mod` 분류가 불확실한 변경
- `wip` 개발중
- `types` 타입 관련 변경

### 종료 방법

`.husky/commit-msg`파일 내에서 아래 코드를 주석 처리하면 됩니다.

```bash
# npx --no-install commitlint --edit "$1"
```

### 예시

```bash

git commit -m 'feat: add new component'

```

## Stylelint

stylelint 프로젝트 내부의 css 스타일을 검증하는데 사용됩니다. 에디터의 자동 수정 기능을 추가하면 프로젝트 내부의 css 스타일을 잘 통일할 수 있습니다.

### 설정

stylelint 설정은 루트 디렉토리의 **stylelint.config.js** 파일에 위치해 있습니다.

### Editor 연동

VSCode를 사용하고 있다면, 아래 플러그인을 설치하면 파일을 저장할 때 자동으로 css스타일을 포맷팅할 수 있습니다.

**플러그인**

[StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Prettier

prettier는 프로젝트의 코드 스타일을 통일하는 데 사용할 수 있습니다. 일관된 들여쓰기, 단일 및 이중 인용부호, 끝의 쉼표 등 다양한 스타일을 통일할 수 있습니다.

### 설정

prettier 설정 파일은 프로젝트 루트 디렉토리의 **prettier.config.js** 파일에 위치해 있습니다.

### Editor 연동

VSCode 편집기를 사용하고 있다면, 아래 플러그인을 설치하면 파일을 저장할 때 자동으로 JS 포맷을 적용할 수 있습니다.

**플러그인**

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Git Hook

git hook은 일반적으로 다양한 lint 도구와 함께 사용되어 git 커밋 시 코드 스타일 검사를 수행합니다. 검사가 통과하지 않으면 커밋이 진행되지 않으며, 개발자는 수정 후 다시 커밋을 시도해야 합니다.

### husky

문제 중 하나는 검사가 전체 코드에 대해 수행된다는 것입니다. 그러나 우리는 자신이 제출한 코드만 검토하고 싶습니다. 이럴 때는 husky를 사용할 수 있습니다.

가장 효과적인 해결책은 Lint 검사를 로컬에서 수행하는 것입니다. 일반적인 방법은 husky 또는 pre-commit을 사용하여 로컬에서 커밋하기 전에 Lint 검사를 수행하는 것입니다.

프로젝트는 `.husky` 폴더 내에 적절한 hooks를 정의하고 있습니다.

### 특정 검사를 건너뛰는 방법

```bash
# --no-verify를 추가하면 git hook 검사를 건너뛸 수 있습니다 (--no-verify의 축약형은 -n입니다).
git commit -m "xxx" --no-verify
```

### lint-staged

커밋 파일의 스타일 문제를 자동으로 수저하는 데 사용됩니다.

**lint-staged** 설정은 프로젝트의 `.husky` 디렉토리 내에 있는 **lintstagedrc.js** 파일에 위치해 있습니다.

```js
module.exports = {
  // 지정된 형식의 파일에 대해 커밋할 때 해당 수정 명령을 실행합니다.
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write', 'git add .'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write', 'git add .'],
  '*.md': ['prettier --write'],
};
```
