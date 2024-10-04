# Lint

## 소개

::: tip lint 사용을 권장하는 이유

코딩 규칙을 준수하는 것은 프로젝트의 품질 유지에 매우 중요합니다. 코드 스타일 검사를 통해 일관성을 보장하면 다음과 같은 이점이 있습니다:

- 버그 감소
- 개발 효율성 향상
- 코드 가독성 증가

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
# 아래 명령어를 실행하면, 수정 가능한 부분은 자동으로 수정되고, 나머지는 수동으로 수정해야 합니다.
pnpm run lint:eslint
```

### 설정 항목

프로젝트의 eslint 설정은 루트 디렉토리의 **.eslintrc.js** 파일에 위치해 있으며, 팀의 요구에 맞게 코드 규칙을 수정할 수 있습니다.

## CommitLint

팀 내에서 각자의 git 커밋 정보가 서로 다르고, 다양한 스타일로 메시지가 작성되면 규칙을 일관되게 유지하기 어렵습니다. 따라서 팀 내의 Git 커밋 메시지 규격화를 위해 CommitLint를 사용합니다. 이를 통해 다양한 스타일의 커밋 메시지를 통일하여 코드 품질을 보장할 수 있습니다.


### 설정

commit-lint의 설정은 프로젝트 루트 디렉토리의 **commitlint.config.js** 파일에 위치해 있습니다.

### Git 커밋 규칙

- feat: 새로운 기능
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 스타일 변경(실행에는 영향을 미치지 않음)
- refactor: 리팩토링(기능 추가나 버그 수정이 아님)
- perf: 성능 향상
- test: 테스트 추가
- build: 빌드 관련 수정
- ci: CI 관련 수정
- chore: 기타 수정
- revert: 이전 버전으로 롤백
- workflow: 워크플로 개선
- mod: 불확실한 카테고리의 수정
- wip: 작업 진행 중
- types: 타입 관련 수정

### 종료 방법

`.husky/commit-msg` 파일 내에서 아래 코드를 주석 처리하면 됩니다.

```bash
# npx --no-install commitlint --edit "$1"
```

### 예시

```bash

git commit -m 'feat: add new component'

```

## Stylelint

stylelint 프로젝트 내부의 css 스타일을 검증하는데 사용됩니다. 에디터의 자동 수정 기능을 추가하면 프로젝트 내부의 css 스타일을 수월하게 통일할 수 있습니다.

### 설정

stylelint 설정은 루트 디렉토리의 **stylelint.config.js** 파일에 위치해 있습니다.

### Editor 연동

VSCode를 사용하고 있다면, 아래 플러그인을 설치하면 파일을 저장할 때 자동으로 css스타일을 포맷팅할 수 있습니다.

**플러그인**

[StyleLint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## Prettier

Prettier는 프로젝트의 코드 스타일을 통일하여 일관된 인덴트, 따옴표 스타일, 쉼표 사용 등을 유지하는 도구입니다.

### 설정

prettier 설정 파일은 프로젝트 루트 디렉토리의 **prettier.config.js** 파일에 위치해 있습니다.

### Editor 연동

VSCode를 사용하는 경우, Prettier 플러그인을 설치하여 파일 저장 시 자동으로 JavaScript 코드를 포맷할 수 있습니다.

**플러그인**

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Git Hook

Git Hook은 코드 제출 시 코드 스타일을 검사하는 기능을 제공합니다. 검사를 통과하지 못한 경우, 제출이 중단되고 수정이 필요합니다.

### husky

일반적으로 Lint 검사는 커밋한 코드 뿐만 아니라 전체 코드에 대해 수행됩니다. 만약 자신이 커밋한 코드만 검토하고 싶다면 husky를 사용할 수 있습니다.

가장 좋은 방법은 로컬에서 Lint 검사를 실행하는 것이며, 보통 Husky나 pre-commit을 사용해 커밋 전에 검사를 수행합니다. 

해당 프로젝트의 .husky 폴더 내에 관련 Git hooks가 정의되어 있습니다.

### 특정 검사를 건너뛰는 방법

```bash
# --no-verify를 추가하면 git hook 검사를 건너뛸 수 있습니다 (--no-verify의 축약형은 -n입니다).
git commit -m "xxx" --no-verify
```

### lint-staged

커밋 파일의 스타일 문제를 자동으로 수정하는 데 사용됩니다.

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
