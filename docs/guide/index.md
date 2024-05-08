# 介绍

在使用 echarts 生成图表时,经常需要做繁琐的数据类型转化、修改复杂的配置项,v-charts 的出现正是为了解决这个痛点。基于 Vue2.0、Vue3.0（你可以自由选择使用） 和 echarts 封装的 v-charts 图表组件,只需要统一提供一种对前后端都友好的数据格式设置简单的配置项,便可轻松生成常见的图表。

## 下载与安装

### 全部引入

- 下载

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

- 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/chart/vue2` 或者 `@v-charts2/chart/vue3` 的话, 可能会报错
:::

```javascript
import Vue from 'vue'
import VeChart from '@v-charts2/chart' // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeChart)
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

::: code-group

```javascript [Vue 2.x]
import Vue from 'vue'
import VeChart from '@v-charts2/chart/vue2' // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import '@v-charts2/chart/v-charts.css' // 需要手动引入样式
Vue.use(VeChart)
```

```javascript [Vue 3.x]
import { createApp } from 'vue'
const app = createApp()
import VeChart from '@v-charts2/chart/vue3' // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import '@v-charts2/chart/v-charts.css' // 需要手动引入样式
app.use(VeChart)
```

:::

### 按需引入

::: tip

查阅每一个组件的说明

:::

## 特别说明

::: warning
在使用 vue2、vue3 兼容导入时因本地的 vue 版本与本库 lib 包版本会有所冲突，所以需要在构建时将其进行排除处理，下方提供 vite 构建工具的排除方案。
:::

::: code-group

```js [vue2]
import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import commonjs from 'vite-plugin-commonjs'
import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), commonjs()],
  build: {
    minify: 'esbuild',
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      // 忽略打包vue文件
      external(id) {
        return deps.some(k => new RegExp(`^${k}`).test(id))
      }
    }
  }
})
```

```js [vue3]
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: 'esbuild',
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      // 忽略打包vue文件
      external(id) {
        return deps.some(k => new RegExp(`^${k}`).test(id))
      }
    }
  }
})
```

:::

### 最佳导入方案

::: tip
应该以当前的 vue 版本为准，例如需要导入 bar 组件，vue2 的导入语句即是 `import VeBar from '@v-charts2/bar/vue2'`, vue3 的导入语句即是 `import VeBar from '@v-charts2/bar/vue3'`
:::

## 图表组件

::: tip

请查阅 [图表预览](/charts/)

:::
