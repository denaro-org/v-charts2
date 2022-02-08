# 高德地图

为了使在echarts上更简单的使用高德地图, v-charts封装了一个高德地图的‘壳子’, 在settings中添加关于图表的配置（key,amap）, 在组件上直接设置 series, tooltip 等, 便可生成以高德地图为坐标系的 Echarts 图表。

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
yarn add @v-charts/amap
# or
npm install @v-charts/amap
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts/amap/vue2` 或者 `@v-charts/amap/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeAmap from "@v-charts/amap"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeAmap);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeAmap from "@v-charts/amap/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts/amap/v-charts.css"; // 需要手动引入样式
Vue.use(VeAmap);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeAmap from "@v-charts/amap/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts/amap/v-charts.css"; // 需要手动引入样式
app.use(VeAmap);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-amap
    :settings="chartSettings"
    :series="chartSeries"
    :tooltip="chartTooltip"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      key: '4b5f2cf2cba25200cc6b68c398468899',
      v: '1.4.3',
      amap: {
        resizeEnable: true,
        center: [120.14322240845, 30.236064370321],
        zoom: 10
      }
    }
    this.chartTooltip = { show: true }
    return {
      chartSeries: [
        {
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: [
            [120, 30, 1] // 经度, 维度, value, ...
          ]
        }
      ]
    }
  }
}
</script>
```

:::

## settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| key | 高德地图 access_key | string | 可[由此](https://console.amap.com/dev/key/app)获取 |
| v | 高德地图版本 | string | 默认1.4.3(高德) |
| amap | 高德地图配置项 | object | 参考高德地图文档配置 |
| useOuterMap | 使用全局的地图依赖 | boolean | - |
