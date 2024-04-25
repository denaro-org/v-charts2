# 热力图

## 下载和安装

::: tip
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可
:::

### 下载

::: code-group

```bash [bun]
bun add @v-charts2/heatmap
```

```bash [pnpm]
pnpm add @v-charts2/heatmap
```

```bash [yarn]
yarn add @v-charts2/heatmap
```

```bash [npm]
npm i @v-chart2/heatmap
```

:::

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/heatmap/vue2` 或者 `@v-charts2/heatmap/vue3` 的话, 可能会报错
:::

```javascript
import Vue from 'vue'
import VeHeatmap from '@v-charts2/heatmap' // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeHeatmap)
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

::: code-group

```javascript [Vue 2.x]
import Vue from 'vue'
import VeHeatmap from '@v-charts2/heatmap/vue2' // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import '@v-charts2/heatmap/v-charts.css' // 需要手动引入样式
Vue.use(VeHeatmap)
```

```javascript [Vue 3.x]
import { createApp } from 'vue'
const app = createApp()
import VeHeatmap from '@v-charts2/heatmap/vue3' // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import '@v-charts2/heatmap/v-charts.css' // 需要手动引入样式
app.use(VeHeatmap)
```

:::

## DEMO

### 示例

```vue preview
<template>
  <ve-heatmap :data="chartData" />
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['时间', '地点', '人数'],
        rows: [
          {
            时间: '星期一',
            地点: '北京',
            人数: 1000
          },
          {
            时间: '星期二',
            地点: '上海',
            人数: 400
          },
          {
            时间: '星期三',
            地点: '杭州',
            人数: 800
          },
          {
            时间: '星期二',
            地点: '深圳',
            人数: 200
          },
          {
            时间: '星期三',
            地点: '长春',
            人数: 100
          },
          {
            时间: '星期五',
            地点: '南京',
            人数: 300
          },
          {
            时间: '星期四',
            地点: '江苏',
            人数: 800
          },
          {
            时间: '星期一',
            地点: '北京',
            人数: 700
          },
          {
            时间: '星期三',
            地点: '上海',
            人数: 300
          },
          {
            时间: '星期二',
            地点: '杭州',
            人数: 500
          }
        ]
      }
    }
  }
}
</script>
```

### 配置坐标轴

```vue preview
<template>
  <ve-heatmap :data="chartData" :settings="chartSettings" />
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      xAxisList: [
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
        '星期日'
      ],
      yAxisList: ['北京', '上海', '杭州', '深圳', '长春', '南京', '江苏']
    }
    return {
      chartData: {
        columns: ['时间', '地点', '人数'],
        rows: [
          {
            时间: '星期一',
            地点: '北京',
            人数: 1000
          },
          {
            时间: '星期二',
            地点: '上海',
            人数: 400
          },
          {
            时间: '星期三',
            地点: '杭州',
            人数: 800
          },
          {
            时间: '星期二',
            地点: '深圳',
            人数: 200
          },
          {
            时间: '星期三',
            地点: '长春',
            人数: 100
          },
          {
            时间: '星期五',
            地点: '南京',
            人数: 300
          },
          {
            时间: '星期四',
            地点: '江苏',
            人数: 800
          },
          {
            时间: '星期三',
            地点: '北京',
            人数: 700
          },
          {
            时间: '星期三',
            地点: '上海',
            人数: 300
          },
          {
            时间: '星期二',
            地点: '杭州',
            人数: 500
          }
        ]
      }
    }
  }
}
</script>
```

### 自定义 visualMap

```vue preview
<template>
  <ve-heatmap
    :data="chartData"
    :visual-map="chartVisualMap"
    :grid="chartGrid" />
</template>

<script>
export default {
  data() {
    this.chartGrid = { right: 100 }
    this.chartVisualMap = {
      min: 0,
      max: 1500,
      type: 'piecewise',
      right: 0,
      top: '50%'
    }
    return {
      chartData: {
        columns: ['时间', '地点', '人数'],
        rows: [
          {
            时间: '星期一',
            地点: '北京',
            人数: 1000
          },
          {
            时间: '星期二',
            地点: '上海',
            人数: 400
          },
          {
            时间: '星期三',
            地点: '杭州',
            人数: 800
          },
          {
            时间: '星期二',
            地点: '深圳',
            人数: 200
          },
          {
            时间: '星期三',
            地点: '长春',
            人数: 100
          },
          {
            时间: '星期五',
            地点: '南京',
            人数: 300
          },
          {
            时间: '星期四',
            地点: '江苏',
            人数: 800
          },
          {
            时间: '星期三',
            地点: '北京',
            人数: 700
          },
          {
            时间: '星期三',
            地点: '上海',
            人数: 200
          },
          {
            时间: '星期二',
            地点: '杭州',
            人数: 500
          }
        ]
      }
    }
  }
}
</script>
```

### 地图热力图

```vue preview
<template>
  <ve-heatmap :data="chartData" :settings="chartSettings" />
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      position: 'china',
      type: 'map',
      geo: {
        itemStyle: {
          areaColor: '#323c48',
          borderColor: '#111'
        },
        emphasis: {
          itemStyle: { areaColor: '#2a333d' },
          label: { show: false }
        }
      }
    }
    return {
      chartData: {
        columns: ['lat', 'lng', '人数'],
        rows: [
          {
            lat: 115.892151,
            lng: 28.676493,
            人数: 1000
          },
          {
            lat: 117.000923,
            lng: 36.675807,
            人数: 400
          },
          {
            lat: 113.665412,
            lng: 34.757975,
            人数: 800
          },
          {
            lat: 114.298572,
            lng: 30.584355,
            人数: 200
          },
          {
            lat: 112.982279,
            lng: 28.19409,
            人数: 100
          },
          {
            lat: 113.280637,
            lng: 23.125178,
            人数: 300
          },
          {
            lat: 110.33119,
            lng: 20.031971,
            人数: 800
          },
          {
            lat: 104.065735,
            lng: 30.659462,
            人数: 700
          },
          {
            lat: 108.948024,
            lng: 34.263161,
            人数: 300
          },
          {
            lat: 103.823557,
            lng: 36.058039,
            人数: 500
          }
        ]
      }
    }
  }
}
</script>
```

### 百度地图热力图

```vue preview
<template>
  <ve-heatmap :data="chartData" :settings="chartSettings" />
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      key: 'oBvDtR6nzWtVchkY4cLHtnah1VVZQKRK',
      bmap: {
        center: [120.14322240845, 30.236064370321],
        zoom: 14,
        roam: true
      },
      type: 'bmap'
    }
    return {
      chartData: {
        columns: ['lat', 'lng'],
        rows: [
          {
            lat: 120.14322240845,
            lng: 30.236064370321
          },
          {
            lat: 120.14301682797,
            lng: 30.236035316745
          },
          {
            lat: 120.14138577045,
            lng: 30.236113748704
          },
          {
            lat: 120.1400398833,
            lng: 30.235973050702
          },
          {
            lat: 120.13893453465,
            lng: 30.23517220446
          },
          {
            lat: 120.1382899739,
            lng: 30.234062922977
          },
          {
            lat: 120.13265960629,
            lng: 30.231641351722
          },
          {
            lat: 120.13170681763,
            lng: 30.229925745619
          },
          {
            lat: 120.13119614803,
            lng: 30.228996846637
          },
          {
            lat: 120.13023980134,
            lng: 30.228226570416
          }
        ]
      }
    }
  }
}
</script>
```

## settings 配置项

| 配置项                | 简介                                 | 类型     | 备注                                                                                                                                      |
| --------------------- | ------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| type                  | 热力图的类型                         | string   | 可选值：`cartesian`(默认值, 直角坐标系), `map`(地图), `bmap`(百度地图)                                                                    |
| xAxisList             | x 轴数据                             | array    | 默认取数据中的数据中的第一维度的数据                                                                                                      |
| yAxisList             | y 轴数据                             | array    | 默认取数据中的数据中的第二维度的数据                                                                                                      |
| dimension             | 维度                                 | array    | 默认为 [columns[0], columns[1]]                                                                                                           |
| metrics               | 指标                                 | string   | 默认为 columns[2]                                                                                                                         |
| dataType              | 数据类型                             | string   | 可选值: KMB, normal, percent                                                                                                              |
| min                   | visualMap 中的最小值                 | number   | 默认取指标中最小的数据                                                                                                                    |
| max                   | visualMap 中的最大值                 | number   | 默认取指标中最大的数据                                                                                                                    |
| digit                 | 设置数据类型为percent时保留的位数    | number   | 默认为2                                                                                                                                   |
| key                   | 百度地图 access_key                  | string   | 可[由此](https://echarts.apache.org/zh/apiconsole/key)获取                                                                                |
| bmap                  | 百度地图配置项                       | object   | 参考[文档](https://github.com/ecomfe/echarts/tree/master/extension/bmap#使用)配置                                                         |
| geo                   | 地图配置项                           | object   | 参考[文档](http://echarts.baidu.com/option.html#geo)                                                                                      |
| position              | 地图类型                             | string   | 默认为 `'china'`                                                                                                                          |
| positionJsonLink      | 地图数据源                           | string   | -                                                                                                                                         |
| beforeRegisterMap     | 地图数据注册前执行的函数             | Function | 参数为地图数据, 需返回地图数据                                                                                                            |
| beforeRegisterMapOnce | 地图数据注册前执行的函数(仅执行一次) | Function | 参数为地图数据, 需返回地图数据                                                                                                            |
| specialAreas          | 地图中的位置配置                     | object   | 将地图中的部分区域缩放到合适的位置, 可以使得整个地图的显示更加好看, 用法参考[文档](http://echarts.baidu.com/api.html#echarts.registerMap) |
| mapURLProfix          | 位置请求的 URL 前缀                  | string   | 默认为 `https://unpkg.com/echarts@3.6.2/map/json/`                                                                                        |
| pointSize             | 点大小                               | number   | 默认为 10                                                                                                                                 |
| blurSize              | 模糊大小                             | number   | 默认为 5                                                                                                                                  |
| heatColor             | visualMap 中的最大值颜色区间         | array    | -                                                                                                                                         |
| yAxisName             | y 轴名称                             | string   | -                                                                                                                                         |
| xAxisName             | x 轴名称                             | string   | -                                                                                                                                         |

> 备注：当不指定指标时, 指标的值默认为1。
