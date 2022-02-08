# 仪表盘

## 下载和安装

::: tip 
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可 
:::

### 下载

```bash
yarn add @v-charts/gauge
# or
npm install @v-charts/gauge
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts/gauge/vue2` 或者 `@v-charts/gauge/vue3` 的话, 可能会报错
:::

```javascript
import Vue from "vue";
import VeGauge from "@v-charts/gauge"; // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeGauge);
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from "vue";
import VeGauge from "@v-charts/gauge/vue2"; // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import "@v-charts/gauge/v-charts.css"; // 需要手动引入样式
Vue.use(VeGauge);
```

- Vue 3.x

```javascript
import { createApp } from "vue";
const app = createApp();
import VeGauge from "@v-charts/gauge/vue3"; // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import "@v-charts/gauge/v-charts.css"; // 需要手动引入样式
app.use(VeGauge);
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-gauge :data="chartData" />
</template>

<script>
export default {
  data () {
    return {
      chartData: {
        columns: ['type', 'a', 'b', 'value'],
        rows: [
          {
            type: '速度', value: 80, a: 1, b: 2
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 指标维度配置

::: demo

```vue
<template>
  <ve-gauge
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dimension: 'type',
      metrics: 'value'
    }
    return {
      chartData: {
        columns: ['a', 'b', 'type', 'value'],
        rows: [
          {
            type: '速度', value: 80, a: 1, b: 2
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
  <ve-gauge
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dataType: { 占比: 'percent' },
      seriesMap: {
        占比: {
          min: 0,
          max: 1
        }
      }
    }
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [
          {
            type: '占比', value: 0.8
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置指标别名与单位

::: demo

```vue
<template>
  <ve-gauge
    :data="chartData"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      labelMap: { speed: '速度' },
      dataName: { speed: 'km/h' }
    }
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [
          {
            type: 'speed', value: 60
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 设置多表盘及修改样式

::: demo

```vue
<template>
  <ve-gauge
    :data="chartData"
    background-color="#000"
    :settings="chartSettings"
  />
</template>

<script>
export default {
  data () {
    this.chartSettings = {
      dataName: {
        速度: 'km/h',
        转速: 'x1000 r/min',
        油表: 'gas'
      },
      seriesMap: {
        速度: {
          min: 0,
          max: 220,
          splitNumber: 11,
          radius: '50%',
          axisLine: {
            lineStyle: {
              color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
              width: 3,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          },
          axisTick: {
            length: 15,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 25,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            fontWeight: 'bolder',
            fontSize: 20,
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          },
          detail: {
            backgroundColor: 'rgba(30,144,255,0.8)',
            borderWidth: 1,
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            offsetCenter: [0, '50%'],
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        转速: {
          center: ['10%', '55%'],
          radius: '25%',
          min: 0,
          max: 7,
          endAngle: 45,
          splitNumber: 7,
          axisLine: {
            lineStyle: {
              color: [[0.29, 'lime'], [0.86, '#1e90ff'], [1, '#ff4500']],
              width: 2,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          splitLine: {
            length: 20,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            width: 5,
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: {
            offsetCenter: [0, '-30%'],
            fontWeight: 'bolder',
            fontStyle: 'italic',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10
          },
          detail: {
            borderColor: '#fff',
            shadowColor: '#fff',
            shadowBlur: 5,
            width: 80,
            height: 30,
            offsetCenter: [25, '20%'],
            fontWeight: 'bolder',
            color: '#fff'
          }
        },
        油表: {
          center: ['84%', '50%'],
          radius: '30%',
          min: 0,
          max: 2,
          startAngle: 135,
          endAngle: 45,
          splitNumber: 2,
          axisLine: {
            lineStyle: {
              color: [[0.2, 'lime'], [0.8, '#1e90ff'], [1, '#ff4500']],
              width: 2,
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisTick: {
            length: 12,
            lineStyle: {
              color: 'auto',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          axisLabel: {
            fontWeight: 'bolder',
            color: '#fff',
            shadowColor: '#fff',
            shadowBlur: 10,
            formatter: function (v) {
              switch (v + '') {
              case '0': return 'E'
              case '1': return 'Gas'
              case '2': return 'F'
              }
            }
          },
          splitLine: {
            length: 15,
            lineStyle: {
              width: 3,
              color: '#fff',
              shadowColor: '#fff',
              shadowBlur: 10
            }
          },
          pointer: {
            width: 2,
            shadowColor: '#fff',
            shadowBlur: 5
          },
          title: { show: false },
          detail: { show: false }
        }
      }
    }
    return {
      chartData: {
        columns: ['type', 'value'],
        rows: [
          {
            type: '速度', value: 60
          },
          {
            type: '转速', value: 80
          },
          {
            type: '油表', value: 6000
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
| dimension | 维度 | string | 默认 columns[0] |
| metrics | 指标 | string | 默认 columns[1] |
| dataType | 数据类型 | object | - |
| digit | 设置数据类型为percent时保留的位数 | number | 默认为2 |
| labelMap | 设置指标的别名 | object | - |
| seriesMap | 附加到 series 中的设置 | object | - |
| dataName | 表盘上显示的单位 | object | - |

> 备注1： 通过 seriesMap, 可以为每一个仪表设置样式, 具体样式的配置可以参考[文档](https://echarts.apache.org/zh/option.html#series-gauge)
