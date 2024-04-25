import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { ring } from '@v-charts2/pie/vue2'
import { PieChart } from 'echarts/charts'

import { name, version } from '../package.json'

echartsLib.use([PieChart])

const VeRing = Object.assign({}, createChartVue2, {
  name: 'VeRing',
  data() {
    this.chartHandler = ring
    return {}
  }
})

VeRing.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeRing.name, VeRing)
}

export default VeRing
