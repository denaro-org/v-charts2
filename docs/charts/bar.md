# 条形图

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
yarn add @v-charts2/bar
# or
npm install @v-charts2/bar
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/bar/vue2` 或者 `@v-charts2/bar/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeBar from "@v-charts2/bar"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeBar);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeBar from "@v-charts2/bar/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts2/bar/v-charts.css"; // 需要手动引入样式
Vue.use(VeBar);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeBar from "@v-charts2/bar/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts2/bar/v-charts.css"; // 需要手动引入样式
app.use(VeBar);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-bar :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1',
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: '1/2',
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: '1/3',
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: '1/4',
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: '1/5',
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: '1/6',
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 指定指标维度

::: demo

```vue
<template>
  <ve-bar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: ['日期'],
      metrics: ['访问用户']
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1',
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: '1/2',
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: '1/3',
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: '1/4',
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: '1/5',
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: '1/6',
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 排序条形图

::: demo

```vue
<template>
  <ve-bar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      metrics: ['访问用户'],
      dataOrder: {
        label: '访问用户',
        order: 'desc'
      }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1',
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: '1/2',
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: '1/3',
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: '1/4',
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: '1/5',
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: '1/6',
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 条形轴配置双 y 轴

::: demo

```vue
<template>
  <ve-bar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      xAxisType: ['KMB', 'KMB'],
      xAxisName: ['下单用户', '访问用户'],
      axisSite: { top: ['访问用户'] }
    }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户'],
        rows: [
          {
            日期: '1/1',
            访问用户: 1393,
            下单用户: 1093
          },
          {
            日期: '1/2',
            访问用户: 3530,
            下单用户: 3230
          },
          {
            日期: '1/3',
            访问用户: 2923,
            下单用户: 2623
          },
          {
            日期: '1/4',
            访问用户: 1723,
            下单用户: 1423
          },
          {
            日期: '1/5',
            访问用户: 3792,
            下单用户: 3492
          },
          {
            日期: '1/6',
            访问用户: 4593,
            下单用户: 4293
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置 legend 别名

::: demo

```vue
<template>
  <ve-bar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      labelMap: {
        PV: '访问用户',
        Order: '下单用户'
      },
      legendName: { 访问用户: '访问用户 total: 10000' }
    }
    return {
      chartData: {
        columns: ['date', 'PV', 'Order', 'OrderRate'],
        rows: [
          {
            date: '1/1',
            PV: 1393,
            Order: 1093,
            OrderRate: 0.32
          },
          {
            date: '1/2',
            PV: 3530,
            Order: 3230,
            OrderRate: 0.26
          },
          {
            date: '1/3',
            PV: 2923,
            Order: 2623,
            OrderRate: 0.76
          },
          {
            date: '1/4',
            PV: 1723,
            Order: 1423,
            OrderRate: 0.49
          },
          {
            date: '1/5',
            PV: 3792,
            Order: 3492,
            OrderRate: 0.323
          },
          {
            date: '1/6',
            PV: 4593,
            Order: 4293,
            OrderRate: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 堆叠条形图

::: demo

```vue
<template>
  <ve-bar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { stack: { xxx: ['访问用户', '下单用户'] } }
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1',
            访问用户: 1393,
            下单用户: 1093,
            下单率: 0.32
          },
          {
            日期: '1/2',
            访问用户: 3530,
            下单用户: 3230,
            下单率: 0.26
          },
          {
            日期: '1/3',
            访问用户: 2923,
            下单用户: 2623,
            下单率: 0.76
          },
          {
            日期: '1/4',
            访问用户: 1723,
            下单用户: 1423,
            下单率: 0.49
          },
          {
            日期: '1/5',
            访问用户: 3792,
            下单用户: 3492,
            下单率: 0.323
          },
          {
            日期: '1/6',
            访问用户: 4593,
            下单用户: 4293,
            下单率: 0.78
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置纵轴为连续的数值轴

::: demo

```vue
<template>
  <ve-bar
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { yAxisType: 'value' }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: 1,
            访问用户: 1393
          },
          {
            日期: 2,
            访问用户: 3530
          },
          {
            日期: 5,
            访问用户: 2923
          },
          {
            日期: 10,
            访问用户: 1723
          },
          {
            日期: 15,
            访问用户: 3792
          },
          {
            日期: 36,
            访问用户: 4593
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
| dimension | 维度 | array | 默认 columns 第一项为维度 |
| metrics | 指标 | array | 默认 columns 第二项起为指标 |
| xAxisType | 上下坐标轴数据类型 | array | 可选值: KMB, normal, percent |
| xAxisName | 上下坐标轴标题 | array | - |
| axisSite | 指标所在的轴 | object | 默认不在 top 轴的指标都在 bottom 轴 |
| stack | 堆叠选项 | object | - |
| digit | 设置数据类型为 percent 时保留的位数 | number | 默认为 2 |
| dataOrder | 设置数据排序方式 | boolean, object | 默认为 false |
| scale | 是否是脱离 0 值比例 | array | 默认为[false, false], 表示上下两个轴都不会脱离 0 值比例。设置成 true 后坐标刻度不会强制包含零刻度 |
| min | 上下坐标轴最小值 | array | - |
| max | 上下坐标轴最大值 | array | - |
| labelMap | 设置指标的别名, 同时作用于提示框和图例 | object | - |
| legendName | 设置图表上方图例的别名 | object | - |
| label | 设置图形上的文本标签 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-bar.label) |
| itemStyle | 图形样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-bar.itemStyle) |
| yAxisType | 纵轴的类型 | string | 可选值'category', 'value', 默认为'category' |
| opacity | 透明度 | number | - |

> 备注 1. axisSite 可以设置 top 和 bottom, 例如示例所示 `axisSite: { top: ['占比'] }` 即将占比的数据置于上轴上。

> 备注 2. stack 用于将两数据堆叠起来, 例如实例中所示`stack: { '销售额': ['销售额-1季度', '销售额-2季度'] }` 即将'销售额-1 季度', '销售额-2 季度'相应的数据堆叠在一起。

> 备注 3. dataOrder 用于设置数据的排序方式, 用于更加清晰的展示数据的升降。例如： `{ label: '成本', order: 'asc }` 表示数据按照成本指标升序展示, 降序为`desc`。

> 备注 4. min 和 max 的值可以直接设置为数字, 例如：`[100, 300]`；也可以设置为`['dataMin', 'dataMin']`, `['dataMax', 'dataMax']`, 此时表示使用该坐标轴上的最小值或最大值为最小或最大刻度。

> 备注 5. 为了优化连续的数值型横轴显示多指标的时候样式, 在此情况下默认设置 opacity 为 0.5。
