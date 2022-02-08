# 介绍

在使用 echarts 生成图表时,经常需要做繁琐的数据类型转化、修改复杂的配置项,v-charts 的出现正是为了解决这个痛点。基于 Vue2.0、Vue3.0（你可以自由选择使用） 和 echarts 封装的 v-charts 图表组件,只需要统一提供一种对前后端都友好的数据格式设置简单的配置项,便可轻松生成常见的图表。

## 下载与安装

### 全部引入

- 下载

```bash
npm i @v-charts2/chart
# or
yarn add @v-charts2/chart
```

- 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/chart/vue2` 或者 `@v-charts2/chart/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeChart from "@v-charts2/chart"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeChart);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeChart from "@v-charts2/chart/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts2/chart/v-charts.css"; // 需要手动引入样式
Vue.use(VeChart);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeChart from "@v-charts2/chart/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts2/chart/v-charts.css"; // 需要手动引入样式
app.use(VeChart);
```

### 按需引入

::: tip

查阅每一个组件的说明

:::

## 图表组件

::: tip

请查阅 [图表预览](/charts/)

:::
