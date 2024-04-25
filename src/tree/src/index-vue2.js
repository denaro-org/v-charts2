import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { TreeChart } from 'echarts/charts'

import { tree } from './main'
import { name, version } from '../package.json'

echartsLib.use([TreeChart])

const VeTree = Object.assign({}, createChartVue2, {
  name: 'VeTree',
  data() {
    this.chartHandler = tree
    return {}
  }
})

VeTree.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeTree.name, VeTree)
}

export default VeTree
