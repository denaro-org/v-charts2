---
layout: home

hero:
  name: v-charts2
  text: 基于 Vue 的 Echarts5.x 组件
  image:
    src: /favicon.ico
    alt: v-charts2
  actions:
    - theme: brand
      text: 快速上手 →
      link: /guide/
    - theme: alt
      text: 在 github 上查看
      link: https://github.com/denaro-org/v-charts2
features:
  - title: 统一的数据格式
    details: 使用对前后端都友好的数据格式, 方便生成和修改。
  - title: 简化的配置项
    details: 通过简化的配置项, 可以轻松实现复杂需求。
  - title: 定制简单
    details: 提供多种自定义 Echarts 方式, 可以方便的设置图表配置项。
  - title: 更多的支持
    details: 同时支持 Vue2.x 和 Vue3.x, 全部由你自主选择使用。
  - title: 更好的 Tree Shaking
    details: 只要你的打包器支持 Tree Shaking, 无需任何的配置即可打包出更小的包。
---

## 像数 1, 2, 3 一样容易

### 安装

```bash
pnpm add @v-chart2/chart
# or
npm i @v-chart2/chart
```

::: code-group

```bash [bun]
bun add @v-chart2/chart
```

```bash [pnpm]
pnpm add @v-chart2/chart
```

```bash [yarn]
yarn add @v-chart2/chart
```

```bash [npm]
npm i @v-chart2/chart
```

:::

### 使用

```javascript
import Vue from 'vue'
import VChart from '@v-chart2/chart'
Vue.use(VChart)
```

## 前方高能

::: warning 注意

- 请确保你的 Node.js 版本在 `^12.22.0 || ^14.17.0 || >=16.0.0` 范围内。
- 请确保你的 Vue 版本在 `>2.6.0 || >3.2.25` 范围内。
- 请确保你的 echarts 版本在 `>5.0.0` 范围内。

:::

### 感谢

本组件代码重构于 [v-charts](https://github.com/ElemeFE/v-charts), 感谢 `ElemeFE` 团队的支持。
