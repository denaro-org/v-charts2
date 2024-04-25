import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { LineChart } from 'echarts/charts'

import { line } from './main'
import { name, version } from '../package.json'

echartsLib.use([LineChart])

const VeLine = Object.assign({}, createChartVue2, {
  name: 'VeLine',
  data() {
    this.chartHandler = line
    return {}
  }
})

VeLine.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeLine.name, VeLine)
}

export default VeLine
export { line }
