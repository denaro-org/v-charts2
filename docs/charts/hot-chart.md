# 热门图表切换

为了方便使用一份数据即可生成不同的表格,可以使用 `<ve-hot-chart>` 组件,切换图表类型则只需要改变settings即可。`<ve-hot-chart>` 内嵌图表有（雷达图、漏斗图、条形图、柱状图、折线图、饼图、环图、瀑布图）

## 下载和安装

::: tip
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可
:::

### 下载

```bash
pnpm add @v-charts2/hot-chart
# or
npm install @v-charts2/hot-chart
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/hot-chart/vue2` 或者 `@v-charts2/hot-chart/vue3` 的话, 可能会报错
:::

```javascript
import Vue from 'vue'
import VeHotChart from '@v-charts2/hot-chart' // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeHotChart)
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from 'vue'
import VeHotChart from '@v-charts2/hot-chart/vue2' // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import '@v-charts2/hot-chart/v-charts.css' // 需要手动引入样式
Vue.use(VeHotChart)
```

- Vue 3.x

```javascript
import { createApp } from 'vue'
const app = createApp()
import VeHotChart from '@v-charts2/hot-chart/vue3' // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import '@v-charts2/hot-chart/v-charts.css' // 需要手动引入样式
app.use(VeHotChart)
```

## DEMO

### 示例

::: demo

```vue
<template>
  <div>
    <button @click="changeType">切换图表类型</button>
    <ve-hot-chart :data="chartData" :settings="chartSettings" />
  </div>
</template>

<script>
export default {
  data() {
    this.typeArr = ['line', 'histogram', 'pie']
    this.index = 0
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1月1日',
            访问用户: 1523
          },
          {
            日期: '1月2日',
            访问用户: 1223
          },
          {
            日期: '1月3日',
            访问用户: 2123
          },
          {
            日期: '1月4日',
            访问用户: 4123
          },
          {
            日期: '1月5日',
            访问用户: 3123
          },
          {
            日期: '1月6日',
            访问用户: 7123
          }
        ]
      },
      chartSettings: { type: this.typeArr[this.index] }
    }
  },
  methods: {
    changeType: function () {
      this.index++
      if (this.index >= this.typeArr.length) {
        this.index = 0
      }
      this.chartSettings = { type: this.typeArr[this.index] }
      console.log(this.chartSettings, '1111')
    }
  }
}
</script>
```

:::
