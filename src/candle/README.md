<p align="center">
<img src="https://raw.githubusercontent.com/denaro-org/v-charts2/main/docs/.vuepress/public/favicon.ico" alt="mark text" width="100" height="100">
</p>

<h3 align="center">@v-charts2/candle</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/@v-charts2/candle" target="_blank"><img alt="npm version" src="https://img.shields.io/npm/v/@v-charts2/candle"></a>
  <a href="https://packagephobia.com/result?p=@v-charts2/candle" target="_blank"><img alt="install size" src="https://packagephobia.now.sh/badge?p=@v-charts2/candle"></a>
  <a href="https://github.com/denaro-org/v-charts2/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/denaro-org/v-charts2"></a>
  <a href="https://github.com/denaro-org/v-charts2/issues" target="_blank"><img alt="GitHub issues" src="https://img.shields.io/github/issues/denaro-org/v-charts2"></a>
  <br />
  <a href="https://www.jsdelivr.com/package/npm/@v-charts2/candle" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/@v-charts2/candle/badge"></a>
  <a href="https://www.npmjs.com/package/@v-charts2/candle" target="_blank"><img alt="npm" src="https://img.shields.io/node/v/@v-charts2/candle"></a>
  <a href="https://github.com/denaro-org/v-charts2/blob/main/LICENSE" target="_blank"><img alt="NPM" src="https://img.shields.io/npm/l/@v-charts2/candle"></a>
</p>

> :tada: K线图

### 下载

```bash
pnpm add @v-charts2/candle
# or
npm install @v-charts2/candle
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

> 传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/candle/vue2` 或者 `@v-charts2/candle/vue3` 的话, 可能会报错

```javascript
import Vue from 'vue'
import VeCandle from '@v-charts2/candle' // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeCandle)
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from 'vue'
import VeCandle from '@v-charts2/candle/vue2' // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import '@v-charts2/candle/v-charts.css' // 需要手动引入样式
Vue.use(VeCandle)
```

- Vue 3.x

```javascript
import { createApp } from 'vue'
const app = createApp()
import VeCandle from '@v-charts2/candle/vue3' // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import '@v-charts2/candle/v-charts.css' // 需要手动引入样式
app.use(VeCandle)
```
