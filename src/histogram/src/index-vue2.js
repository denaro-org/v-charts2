import { histogram } from '@v-charts2/bar/vue2'
import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { BarChart } from 'echarts/charts'

import { name, version } from '../package.json'

echartsLib.use([BarChart])

const VeHistogram = Object.assign({}, createChartVue2, {
  name: 'VeHistogram',
  data() {
    this.chartHandler = histogram
    return {}
  }
})

VeHistogram.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeHistogram.name, VeHistogram)
}

export default VeHistogram
