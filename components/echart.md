# Echart 차트 컴포넌트

`echarts` 를 캡슐화，창 크기 조절。

Echart 컴포넌트 :  [src/components/Echart](https://github.com/web2-solution/web2-vue-framework/tree/demo/src/components/Echart)

## 사용법

해당 `options`, `height` 만 전달하면 차트를 표시할 수 있습니다。

```vue
<template>
  <Echart :options="pieOptions" :height="300" />
</template>
```

## Echart 속성
<!-- [자세히 보기](https://echarts.apache.org/zh/option.html#title) -->
| 속성 | 설명 | 타입 | 옵션 | 기본값 |
| ---- | ---- | ---- | ---- | ---- |
| options | echart 설정 항목 | `EChartsOption` | - | [] |
| width | 차트 너비 | `string`/`number` | - | - |
| height | 차트 높이 | `string`/`number` | - | 500 |
