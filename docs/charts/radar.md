# 雷达图

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
yarn add @v-charts2/radar
# or
npm install @v-charts2/radar
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/radar/vue2` 或者 `@v-charts2/radar/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeRadar from "@v-charts2/radar"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeRadar);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeRadar from "@v-charts2/radar/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts2/radar/v-charts.css"; // 需要手动引入样式
Vue.use(VeRadar);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeRadar from "@v-charts2/radar/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts2/radar/v-charts.css"; // 需要手动引入样式
app.use(VeRadar);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-radar :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32
          },
          {
            日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26
          },
          {
            日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76
          },
          {
            日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49
          },
          {
            日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323
          },
          {
            日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置显示的指标维度

::: demo

```vue
<template>
  <ve-radar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      metrics: ['访问用户', '下单用户', '下单率'],
      dataType: { 下单率: 'percent' }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32
          },
          {
            日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26
          },
          {
            日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76
          },
          {
            日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49
          },
          {
            日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323
          },
          {
            日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 修改指标名称

::: demo

```vue
<template>
  <ve-radar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      labelMap: {
        日期: 'date',
        访问用户: 'PV',
        下单用户: 'Order',
        下单率: 'orderRate'
      }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32
          },
          {
            日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26
          },
          {
            日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76
          },
          {
            日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49
          },
          {
            日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323
          },
          {
            日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

## settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | string | 默认columns第一项为维度 |
| metrics | 指标 | array | 默认columns第二项起为指标 |
| dataType | 数据类型 | object | 可选值: KMB, normal, percent |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 图形上的文本标签 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-radar.label) |
| itemStyle | 折线拐点标志的样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-radar.itemStyle) |
| lineStyle | 线条样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-radar.lineStyle) |
| areaStyle | 区域填充样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-radar.areaStyle)  |

> 备注：dataType中直接设置对应维度的数据类型, 例如示例的`{ '占比': 'percent' }`, 即将占比数据设置为百分比类型
