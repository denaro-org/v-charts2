import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { BarChart } from 'echarts/charts'

import { waterfall } from './main'
import { name, version } from '../package.json'

echartsLib.use([BarChart])

const VeWaterfall = Object.assign({}, createChart, {
  name: 'VeWaterfall',
  data () {
    this.chartHandler = waterfall
    return {}
  }
})

VeWaterfall.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeWaterfall.name, VeWaterfall)
}

export default VeWaterfall
export { waterfall }
