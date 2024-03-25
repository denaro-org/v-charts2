# 词云图

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
pnpm add @v-chartsv2/wordcloud
# or
npm install @v-chartsv2/wordcloud
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-chartsv2/wordcloud/vue2` 或者 `@v-chartsv2/wordcloud/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeWordcloud from "@v-chartsv2/wordcloud"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeWordcloud);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeWordcloud from "@v-chartsv2/wordcloud/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-chartsv2/wordcloud/v-charts.css"; // 需要手动引入样式
Vue.use(VeWordcloud);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeWordcloud from "@v-chartsv2/wordcloud/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-chartsv2/wordcloud/v-charts.css"; // 需要手动引入样式
app.use(VeWordcloud);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-wordcloud :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['word', 'count'],
        rows: getRows()
      }
    }
  }
}

function getRows () {
  return [{
    word: 'visualMap',
    count: 22199
  }, {
    word: 'continuous',
    count: 10288
  }, {
    word: 'contoller',
    count: 620
  }, {
    word: 'series',
    count: 274470
  }, {
    word: 'gauge',
    count: 12311
  }, {
    word: 'detail',
    count: 1206
  }, {
    word: 'piecewise',
    count: 4885
  }, {
    word: 'textStyle',
    count: 32294
  }, {
    word: 'markPoint',
    count: 18574
  }, {
    word: 'pie',
    count: 38929
  }, {
    word: 'roseType',
    count: 969
  }, {
    word: 'label',
    count: 37517
  }, {
    word: 'emphasis',
    count: 12053
  }, {
    word: 'yAxis',
    count: 57299
  }, {
    word: 'name',
    count: 15418
  }, {
    word: 'type',
    count: 22905
  }, {
    word: 'gridIndex',
    count: 5146
  }, {
    word: 'normal',
    count: 49487
  }, {
    word: 'itemStyle',
    count: 33837
  }, {
    word: 'min',
    count: 4500
  }, {
    word: 'silent',
    count: 5744
  }, {
    word: 'animation',
    count: 4840
  }, {
    word: 'offsetCenter',
    count: 232
  }, {
    word: 'inverse',
    count: 3706
  }, {
    word: 'borderColor',
    count: 4812
  }, {
    word: 'markLine',
    count: 16578
  }, {
    word: 'line',
    count: 76970
  }, {
    word: 'radiusAxis',
    count: 6704
  }, {
    word: 'radar',
    count: 15964
  }, {
    word: 'data',
    count: 60679
  }, {
    word: 'dataZoom',
    count: 24347
  }, {
    word: 'tooltip',
    count: 43420
  }, {
    word: 'toolbox',
    count: 25222
  }, {
    word: 'geo',
    count: 16904
  }, {
    word: 'parallelAxis',
    count: 4029
  }]
}
</script>
```

:::

### 设置词云图的颜色

::: demo

```vue
<template>
  <ve-wordcloud
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { color: ['#ff0', '#00f', '#f00', '#0ff'] }
    return {
      chartData: {
        columns: ['word', 'count'],
        rows: getRows()
      }
    }
  }
}

function getRows () {
  return [{
    word: 'visualMap',
    count: 22199
  }, {
    word: 'continuous',
    count: 10288
  }, {
    word: 'contoller',
    count: 620
  }, {
    word: 'series',
    count: 274470
  }, {
    word: 'gauge',
    count: 12311
  }, {
    word: 'detail',
    count: 1206
  }, {
    word: 'piecewise',
    count: 4885
  }, {
    word: 'textStyle',
    count: 32294
  }, {
    word: 'markPoint',
    count: 18574
  }, {
    word: 'pie',
    count: 38929
  }, {
    word: 'roseType',
    count: 969
  }, {
    word: 'label',
    count: 37517
  }, {
    word: 'emphasis',
    count: 12053
  }, {
    word: 'yAxis',
    count: 57299
  }, {
    word: 'name',
    count: 15418
  }, {
    word: 'type',
    count: 22905
  }, {
    word: 'gridIndex',
    count: 5146
  }, {
    word: 'normal',
    count: 49487
  }, {
    word: 'itemStyle',
    count: 33837
  }, {
    word: 'min',
    count: 4500
  }, {
    word: 'silent',
    count: 5744
  }, {
    word: 'animation',
    count: 4840
  }, {
    word: 'offsetCenter',
    count: 232
  }, {
    word: 'inverse',
    count: 3706
  }, {
    word: 'borderColor',
    count: 4812
  }, {
    word: 'markLine',
    count: 16578
  }, {
    word: 'line',
    count: 76970
  }, {
    word: 'radiusAxis',
    count: 6704
  }, {
    word: 'radar',
    count: 15964
  }, {
    word: 'data',
    count: 60679
  }, {
    word: 'dataZoom',
    count: 24347
  }, {
    word: 'tooltip',
    count: 43420
  }, {
    word: 'toolbox',
    count: 25222
  }, {
    word: 'geo',
    count: 16904
  }, {
    word: 'parallelAxis',
    count: 4029
  }]
}
</script>
```

:::

### 设置词云图的形状

::: demo

```vue
<template>
  <ve-wordcloud
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = { shape: 'diamond' }
    return {
      chartData: {
        columns: ['word', 'count'],
        rows: getRows()
      }
    }
  }
}

function getRows () {
  return [{
    word: 'visualMap',
    count: 22199
  }, {
    word: 'continuous',
    count: 10288
  }, {
    word: 'contoller',
    count: 620
  }, {
    word: 'series',
    count: 274470
  }, {
    word: 'gauge',
    count: 12311
  }, {
    word: 'detail',
    count: 1206
  }, {
    word: 'piecewise',
    count: 4885
  }, {
    word: 'textStyle',
    count: 32294
  }, {
    word: 'markPoint',
    count: 18574
  }, {
    word: 'pie',
    count: 38929
  }, {
    word: 'roseType',
    count: 969
  }, {
    word: 'label',
    count: 37517
  }, {
    word: 'emphasis',
    count: 12053
  }, {
    word: 'yAxis',
    count: 57299
  }, {
    word: 'name',
    count: 15418
  }, {
    word: 'type',
    count: 22905
  }, {
    word: 'gridIndex',
    count: 5146
  }, {
    word: 'normal',
    count: 49487
  }, {
    word: 'itemStyle',
    count: 33837
  }, {
    word: 'min',
    count: 4500
  }, {
    word: 'silent',
    count: 5744
  }, {
    word: 'animation',
    count: 4840
  }, {
    word: 'offsetCenter',
    count: 232
  }, {
    word: 'inverse',
    count: 3706
  }, {
    word: 'borderColor',
    count: 4812
  }, {
    word: 'markLine',
    count: 16578
  }, {
    word: 'line',
    count: 76970
  }, {
    word: 'radiusAxis',
    count: 6704
  }, {
    word: 'radar',
    count: 15964
  }, {
    word: 'data',
    count: 60679
  }, {
    word: 'dataZoom',
    count: 24347
  }, {
    word: 'tooltip',
    count: 43420
  }, {
    word: 'toolbox',
    count: 25222
  }, {
    word: 'geo',
    count: 16904
  }, {
    word: 'parallelAxis',
    count: 4029
  }]
}
</script>
```

:::

### 设置词云图的字体大小范围

::: demo

```vue
<template>
  <ve-wordcloud
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      sizeMin: 30,
      sizeMax: 60
    }
    return {
      chartData: {
        columns: ['word', 'count'],
        rows: getRows()
      }
    }
  }
}

function getRows () {
  return [{
    word: 'visualMap',
    count: 22199
  }, {
    word: 'continuous',
    count: 10288
  }, {
    word: 'contoller',
    count: 620
  }, {
    word: 'series',
    count: 274470
  }, {
    word: 'gauge',
    count: 12311
  }, {
    word: 'detail',
    count: 1206
  }, {
    word: 'piecewise',
    count: 4885
  }, {
    word: 'textStyle',
    count: 32294
  }, {
    word: 'markPoint',
    count: 18574
  }, {
    word: 'pie',
    count: 38929
  }, {
    word: 'roseType',
    count: 969
  }, {
    word: 'label',
    count: 37517
  }, {
    word: 'emphasis',
    count: 12053
  }, {
    word: 'yAxis',
    count: 57299
  }, {
    word: 'name',
    count: 15418
  }, {
    word: 'type',
    count: 22905
  }, {
    word: 'gridIndex',
    count: 5146
  }, {
    word: 'normal',
    count: 49487
  }, {
    word: 'itemStyle',
    count: 33837
  }, {
    word: 'min',
    count: 4500
  }, {
    word: 'silent',
    count: 5744
  }, {
    word: 'animation',
    count: 4840
  }, {
    word: 'offsetCenter',
    count: 232
  }, {
    word: 'inverse',
    count: 3706
  }, {
    word: 'borderColor',
    count: 4812
  }, {
    word: 'markLine',
    count: 16578
  }, {
    word: 'line',
    count: 76970
  }, {
    word: 'radiusAxis',
    count: 6704
  }, {
    word: 'radar',
    count: 15964
  }, {
    word: 'data',
    count: 60679
  }, {
    word: 'dataZoom',
    count: 24347
  }, {
    word: 'tooltip',
    count: 43420
  }, {
    word: 'toolbox',
    count: 25222
  }, {
    word: 'geo',
    count: 16904
  }, {
    word: 'parallelAxis',
    count: 4029
  }]
}
</script>
```

:::

## settings 配置项
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | String | 默认 `columns[0]` |
| metrics | 指标 | String | 默认 `columns[1]` |
| sizeMin | 最小字体大小 | Number | 默认为 `12` |
| sizeMax | 最大字体大小 | Number | 默认为 `60` |
| shape | 词云图的形状 | String | 默认为 `circle`, 可选值见备注 |
| color | 词云图字体颜色 | Array[String], String, Function | 默认为 `"rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"` |

> 备注1: shape 可选值有cardioid、 diamond、triangle-forward、triangle、pentagon、star等。如果最终的形状不是理想的形状（都为矩形）, 可能是画布高度或者宽度不够以及数据过多导致的。可通过设置画布或容器的width或height, 通过extend设置series的drawOutOfBound尝试解决。

> 备注2: 详细配置详见[echarts-wordcloud文档](https://github.com/ecomfe/echarts-wordcloud)。更多个性化配置可以结合wordcloud文档在extend的series配置项中设置。
