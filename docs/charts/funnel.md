# 漏斗图

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
yarn add @v-charts/funnel
# or
npm install @v-charts/funnel
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts/funnel/vue2` 或者 `@v-charts/funnel/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeFunnel from "@v-charts/funnel"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeFunnel);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeFunnel from "@v-charts/funnel/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts/funnel/v-charts.css"; // 需要手动引入样式
Vue.use(VeFunnel);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeFunnel from "@v-charts/funnel/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts/funnel/v-charts.css"; // 需要手动引入样式
app.use(VeFunnel);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-funnel :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          {
            状态: '展示', 数值: 900
          },
          {
            状态: '访问', 数值: 600
          },
          {
            状态: '点击', 数值: 300
          },
          {
            状态: '订单', 数值: 100
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
  <ve-funnel
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: '状态1',
      metrics: '数值'
    }
    return {
      chartData: {
        columns: ['状态', '状态1', '数值'],
        rows: [
          {
            状态: '展示', 状态1: '展示1', 数值: 900
          },
          {
            状态: '访问', 状态1: '访问1', 数值: 600
          },
          {
            状态: '点击', 状态1: '点击1', 数值: 300
          },
          {
            状态: '订单', 状态1: '订单1', 数值: 100
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 自动按照数值排序并过滤0值

::: demo

```vue
<template>
  <ve-funnel
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      useDefaultOrder: true,
      filterZero: true
    }
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          {
            状态: '展示', 数值: 900
          },
          {
            状态: '访问', 数值: 100
          },
          {
            状态: '零', 数值: 0
          },
          {
            状态: '点击', 数值: 300
          },
          {
            状态: '订单', 数值: 200
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 定制顺序漏斗图

::: demo

```vue
<template>
  <ve-funnel
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { sequence: ['订单', '点击', '访问', '展示'] }
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          {
            状态: '展示', 数值: 900
          },
          {
            状态: '访问', 数值: 600
          },
          {
            状态: '点击', 数值: 300
          },
          {
            状态: '订单', 数值: 100
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 指定数据类型漏斗图

::: demo

```vue
<template>
  <ve-funnel
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { dataType: 'percent' }
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          {
            状态: '展示', 数值: 0.9
          },
          {
            状态: '访问', 数值: 0.6
          },
          {
            状态: '点击', 数值: 0.3
          },
          {
            状态: '订单', 数值: 0.1
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 修改legend别名漏斗图

::: demo

```vue
<template>
  <ve-funnel
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { legendName: { 订单: '订单 total:1000' } }
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          {
            状态: '展示', 数值: 0.9
          },
          {
            状态: '访问', 数值: 0.6
          },
          {
            状态: '点击', 数值: 0.3
          },
          {
            状态: '订单', 数值: 0.1
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 金字塔

::: demo

```vue
<template>
  <ve-funnel
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { ascending: true }
    return {
      chartData: {
        columns: ['状态', '数值'],
        rows: [
          {
            状态: '展示', 数值: 900
          },
          {
            状态: '访问', 数值: 600
          },
          {
            状态: '点击', 数值: 300
          },
          {
            状态: '订单', 数值: 100
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
| metrics | 指标 | string | 默认columns第二项为指标 |
| dataType | 数据类型 | string | 可选值: KMB, normal, percent |
| sequence | 数据显示顺序 | array | 默认按照数据大小顺序 |
| ascending | 是否显示为金字塔 | boolean | 默认为false |
| useDefaultOrder | 是否自动按照数值大小排序 | boolean | 默认为false |
| filterZero | 是否过滤指标为0的数据 | boolean | 默认为false |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| label | 设置文本标签样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.label) |
| labelLine | 设置标签的视觉引导线样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.labelLine) |
| itemStyle | 设置图形样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-funnel.itemStyle) |

