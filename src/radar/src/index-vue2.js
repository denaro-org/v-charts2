import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { RadarChart } from 'echarts/charts'

import { radar } from './main'
import { name, version } from '../package.json'

echartsLib.use([RadarChart])

const VeRadar = Object.assign({}, createChartVue2, {
  name: 'VeRadar',
  data() {
    this.chartHandler = radar
    return {}
  }
})

VeRadar.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeRadar.name, VeRadar)
}

export default VeRadar
export { radar }
