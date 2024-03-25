# 树图

## 下载和安装

::: tip
当你不想全部导入所有的图表时请执行以下操作, 安装你想要的图表即可
:::

### 下载

```bash
pnpm add @v-charts2/tree
# or
npm install @v-charts2/tree
```

### 安装

当你当前的打包工具为 webpack 时, 推荐你进行以下的安装步骤

::: warning
传统的 webpack4.x 没有 Tree Shaking 的支持, 如果你想引入 `@v-charts2/tree/vue2` 或者 `@v-charts2/tree/vue3` 的话, 可能会报错
:::

```javascript
import Vue from 'vue'
import VeTree from '@v-charts2/tree' // 兼容 vue2.x 和 vue3.x 的支持, 将会自动加载支持 vue2.x 的支持包或者支持 vue3.x 的支持包
Vue.use(VeTree)
```

当你当前的打包工具为 vite 或者 rollup 时, 推荐你进行以下的安装步骤

- Vue 2.x

```javascript
import Vue from 'vue'
import VeTree from '@v-charts2/tree/vue2' // 更好的 Tree Shaking 推荐引入 vue2.x 的专属支持包
import '@v-charts2/tree/v-charts.css' // 需要手动引入样式
Vue.use(VeTree)
```

- Vue 3.x

```javascript
import { createApp } from 'vue'
const app = createApp()
import VeTree from '@v-charts2/tree/vue3' // 更好的 Tree Shaking 推荐引入 vue3.x 的专属支持包
import '@v-charts2/tree/v-charts.css' // 需要手动引入样式
app.use(VeTree)
```

## DEMO

### 示例

::: demo

```vue
<template>
  <ve-tree :data="chartData" />
</template>

<script>
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 多树图

::: demo

```vue
<template>
  <ve-tree :data="chartData" :settings="chartSettings" />
</template>

<script>
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  data() {
    this.chartSettings = {
      seriesMap: {
        tree1: {
          top: '5%',
          left: '7%',
          bottom: '2%',
          right: '60%'
        },
        tree2: {
          top: '20%',
          left: '60%',
          bottom: '22%',
          right: '18%'
        }
      }
    }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          },
          {
            name: 'tree2',
            value: [treeData]
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 径向树图

::: demo

```vue
<template>
  <ve-tree :data="chartData" :settings="chartSettings" />
</template>

<script>
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  data() {
    this.chartSettings = { seriesMap: { tree1: { layout: 'radial' } } }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 纵向树图

::: demo

```vue
<template>
  <ve-tree :data="chartData" :settings="chartSettings" />
</template>

<script>
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  data() {
    this.chartSettings = { seriesMap: { tree1: { orient: 'vertical' } } }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
    }
  }
}
</script>
```

:::

### 自定义提示框内容

::: demo

```vue
<template>
  <ve-tree
    :data="chartData"
    :extend="chartExtend"
    :tooltip-formatter="tooltipFormatter"
    :settings="chartSettings" />
</template>

<script>
const treeData = {
  name: 'f',
  value: 1,
  link: 'https://ele.me',
  children: [
    {
      name: 'a',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  data() {
    this.chartSettings = {}
    this.chartExtend = { tooltip: { alwaysShowContent: true } }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'tree1',
            value: [treeData]
          }
        ]
      }
    }
  },
  methods: {
    tooltipFormatter(v) {
      return [
        `${v.seriesName}: ${v.data.value}`,
        `<a target="_blank" href="${v.data.link}">${v.data.link}</a>`
      ].join('<br>')
    }
  }
}
</script>
```

:::

## settings 配置项

| 配置项    | 简介                   | 类型   | 备注                    |
| --------- | ---------------------- | ------ | ----------------------- |
| dimension | 维度                   | string | 默认columns第一项为维度 |
| metrics   | 指标                   | string | 默认columns第二项为指标 |
| seriesMap | 附加到 series 中的设置 | object | -                       |

> 备注1： 通过 seriesMap, 可以为每一个树设置样式, 具体样式的配置可以参考[文档](https://echarts.apache.org/zh/option.html#series-tree)
