# 环图

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
pnpm add @v-charts2/ring
# or
npm install @v-charts2/ring
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/ring/vue2` 或者 `@v-charts2/ring/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeRing from "@v-charts2/ring"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeRing);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeRing from "@v-charts2/ring/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts2/ring/v-charts.css"; // 需要手动引入样式
Vue.use(VeRing);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeRing from "@v-charts2/ring/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts2/ring/v-charts.css"; // 需要手动引入样式
app.use(VeRing);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-ring :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393
          },
          {
            日期: '1/2', 访问用户: 3530
          },
          {
            日期: '1/3', 访问用户: 2923
          },
          {
            日期: '1/4', 访问用户: 1723
          },
          {
            日期: '1/5', 访问用户: 3792
          },
          {
            日期: '1/6', 访问用户: 4593
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置指标维度

::: demo

```vue
<template>
  <ve-ring
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: '日期',
      metrics: '访问用户'
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393
          },
          {
            日期: '1/2', 访问用户: 3530
          },
          {
            日期: '1/3', 访问用户: 2923
          },
          {
            日期: '1/4', 访问用户: 1723
          },
          {
            日期: '1/5', 访问用户: 3792
          },
          {
            日期: '1/6', 访问用户: 4593
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 玫瑰图

::: demo

```vue
<template>
  <ve-ring
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { roseType: 'radius' }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393
          },
          {
            日期: '1/2', 访问用户: 3530
          },
          {
            日期: '1/3', 访问用户: 2923
          },
          {
            日期: '1/4', 访问用户: 1723
          },
          {
            日期: '1/5', 访问用户: 3792
          },
          {
            日期: '1/6', 访问用户: 4593
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 限制显示条数环图

::: demo

```vue
<template>
  <ve-ring
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { limitShowNum: 3 }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393
          },
          {
            日期: '1/2', 访问用户: 3530
          },
          {
            日期: '1/3', 访问用户: 2923
          },
          {
            日期: '1/4', 访问用户: 1723
          },
          {
            日期: '1/5', 访问用户: 3792
          },
          {
            日期: '1/6', 访问用户: 4593
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置数据类型

::: demo

```vue
<template>
  <ve-ring
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { dataType: 'KMB' }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393
          },
          {
            日期: '1/2', 访问用户: 3530
          },
          {
            日期: '1/3', 访问用户: 2923
          },
          {
            日期: '1/4', 访问用户: 1723
          },
          {
            日期: '1/5', 访问用户: 3792
          },
          {
            日期: '1/6', 访问用户: 4593
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置环图半径

::: demo

```vue
<template>
  <ve-ring
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      radius: [10, 100],
      offsetY: 250
    }
    return {
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393
          },
          {
            日期: '1/2', 访问用户: 3530
          },
          {
            日期: '1/3', 访问用户: 2923
          },
          {
            日期: '1/4', 访问用户: 1723
          },
          {
            日期: '1/5', 访问用户: 3792
          },
          {
            日期: '1/6', 访问用户: 4593
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
| legendLimit | legend显示数量限制 | number | legend数量过多会导致环图样式错误, 限制legend最大值并且当超过此值时, 隐藏legend可以解决这个问题 |
| selectedMode | 	选中模式 | string | 可选值：single, multiple, 默认为false |
| hoverAnimation | 是否开启 hover 在扇区上的放大动画效果 | boolean | 默认值为true |
| radius | 环图外半径与内半径 | array | - |
| offsetY | 	纵向偏移量 | number | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| roseType | 显示为南丁格尔玫瑰图 | string | 默认不展示为南丁格尔玫瑰图, 可设置为`'radius', 'area'` |
| label | 环图图形上的文本标签 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-pie.label) |
| labelLine | 标签的视觉引导线样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-pie.labelLine) |
| itemStyle | 图形样式 | object | 内容参考[文档](https://echarts.apache.org/zh/option.html#series-pie.itemStyle)  |
| limitShowNum | 设置超过此数字时使用‘其他’代替 | number | 此时数据会按照由大到小顺序显示 |
