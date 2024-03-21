# 瀑布图

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
pnpm add @v-chartsv2/waterfall
# or
npm install @v-chartsv2/waterfall
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-chartsv2/waterfall/vue2` 或者 `@v-chartsv2/waterfall/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeWaterfall from "@v-chartsv2/waterfall"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeWaterfall);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeWaterfall from "@v-chartsv2/waterfall/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-chartsv2/waterfall/v-charts.css"; // 需要手动引入样式
Vue.use(VeWaterfall);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeWaterfall from "@v-chartsv2/waterfall/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-chartsv2/waterfall/v-charts.css"; // 需要手动引入样式
app.use(VeWaterfall);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-waterfall :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['活动', '时间'],
        rows: [
          {
            活动: '吃饭', 时间: 4
          },
          {
            活动: '睡觉', 时间: 10
          },
          {
            活动: '打豆豆', 时间: 5
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
  <ve-waterfall
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: '活动',
      metrics: '时间'
    }
    return {
      chartData: {
        columns: ['活动', '时间'],
        rows: [
          {
            活动: '吃饭', 时间: 4
          },
          {
            活动: '睡觉', 时间: 10
          },
          {
            活动: '打豆豆', 时间: 5
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
  <ve-waterfall
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
        columns: ['活动', '时间'],
        rows: [
          {
            活动: '吃饭', 时间: 0.1
          },
          {
            活动: '睡觉', 时间: 0.2
          },
          {
            活动: '打豆豆', 时间: 0.3
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
  <ve-waterfall
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { labelMap: { 时间: 'time' } }
    return {
      chartData: {
        columns: ['活动', '时间'],
        rows: [
          {
            活动: '吃饭', 时间: 0.1
          },
          {
            活动: '睡觉', 时间: 0.2
          },
          {
            活动: '打豆豆', 时间: 0.3
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置 总计、剩余 的名称

::: demo

```vue
<template>
  <ve-waterfall
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      totalNum: 24,
      totalName: '总时间',
      remainName: '剩余时间'
    }
    return {
      chartData: {
        columns: ['活动', '时间'],
        rows: [
          {
            活动: '吃饭', 时间: 4
          },
          {
            活动: '睡觉', 时间: 10
          },
          {
            活动: '打豆豆', 时间: 5
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
| totalNum | 总量 | number | 默认瀑布图总量为所有数据的和 |
| totalName | 总量的显示文案 | string | 默认显示总计 |
| remainName | 剩余的显示文案 | string | 默认显示其他 |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
