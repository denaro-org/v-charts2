# 桑基图

## 下载和安装

::: tip
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可
:::

### 下载

::: code-group

```bash [bun]
bun add @v-charts2/sankey
```

```bash [pnpm]
pnpm add @v-charts2/sankey
```

```bash [yarn]
yarn add @v-charts2/sankey
```

```bash [npm]
npm i @v-chart2/sankey
```

:::

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/sankey/vue2` 或者 `@v-charts2/sankey/vue3` 的话, 可能会报错
:::

```javascript
import Vue from 'vue'
import VeSankey from '@v-charts2/sankey' // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeSankey)
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

::: code-group

```javascript [Vue 2.x]
import Vue from 'vue'
import VeSankey from '@v-charts2/sankey/vue2' // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import '@v-charts2/sankey/v-charts.css' // 需要手动引入样式
Vue.use(VeSankey)
```

```javascript [Vue 3.x]
import { createApp } from 'vue'
const app = createApp()
import VeSankey from '@v-charts2/sankey/vue3' // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import '@v-charts2/sankey/v-charts.css' // 需要手动引入样式
app.use(VeSankey)
```

:::

## DEMO

### 示例

```vue preview
<template>
  <ve-sankey :data="chartData" :settings="chartSettings" />
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      links: [
        {
          source: '首页',
          target: '列表页a',
          value: 0.5
        },
        {
          source: '首页',
          target: '列表页b',
          value: 0.5
        },
        {
          source: '列表页a',
          target: '内容页a-1',
          value: 0.1
        },
        {
          source: '列表页a',
          target: '内容页a-2',
          value: 0.4
        },
        {
          source: '列表页b',
          target: '内容页b-1',
          value: 0.2
        },
        {
          source: '列表页b',
          target: '内容页b-2',
          value: 0.3
        }
      ]
    }
    return {
      chartData: {
        columns: ['页面', '访问量'],
        rows: [
          {
            页面: '首页',
            访问量: 100000
          },
          {
            页面: '列表页a',
            访问量: 20000
          },
          {
            页面: '列表页b',
            访问量: 80000
          },
          {
            页面: '内容页a-1',
            访问量: 10000
          },
          {
            页面: '内容页a-2',
            访问量: 10000
          },
          {
            页面: '内容页b-1',
            访问量: 60000
          },
          {
            页面: '内容页b-2',
            访问量: 20000
          }
        ]
      }
    }
  }
}
</script>
```

### 设置数据类型

```vue preview
<template>
  <ve-sankey :data="chartData" :settings="chartSettings" />
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      links: [
        {
          source: '首页',
          target: '列表页a',
          value: 0.5
        },
        {
          source: '首页',
          target: '列表页b',
          value: 0.5
        },
        {
          source: '列表页a',
          target: '内容页a-1',
          value: 0.1
        },
        {
          source: '列表页a',
          target: '内容页a-2',
          value: 0.4
        },
        {
          source: '列表页b',
          target: '内容页b-1',
          value: 0.2
        },
        {
          source: '列表页b',
          target: '内容页b-2',
          value: 0.3
        }
      ],
      dataType: ['KMB', 'percent']
    }
    return {
      chartData: {
        columns: ['页面', '访问量'],
        rows: [
          {
            页面: '首页',
            访问量: 100000
          },
          {
            页面: '列表页a',
            访问量: 20000
          },
          {
            页面: '列表页b',
            访问量: 80000
          },
          {
            页面: '内容页a-1',
            访问量: 10000
          },
          {
            页面: '内容页a-2',
            访问量: 10000
          },
          {
            页面: '内容页b-1',
            访问量: 60000
          },
          {
            页面: '内容页b-2',
            访问量: 20000
          }
        ]
      }
    }
  }
}
</script>
```

## settings 配置项

| 配置项    | 简介                              | 类型   | 备注                                                                                       |
| --------- | --------------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| dimension | 维度                              | string | 默认columns第一项为维度                                                                    |
| metrics   | 指标                              | string | 默认columns第二项为指标                                                                    |
| dataType  | 数据类型                          | array  | 数组的第一项为item的数据类型, <br>第二项为line的数据类型, <br>可选值: KMB, normal, percent |
| links     | 节点间的关系数据                  | array  | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-sankey.links)              |
| digit     | 设置数据类型为percent时保留的位数 | number | 默认为2                                                                                    |
| label     | 每个矩形节点中文本标签的样式      | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-sankey.label)              |
| itemStyle | 节点矩形的样式                    | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-sankey.itemStyle)          |
| lineStyle | 桑基图边的样式                    | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-sankey.lineStyle)          |
