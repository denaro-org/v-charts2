import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { GaugeChart } from 'echarts/charts'

import { gauge } from './main'
import { name, version } from '../package.json'

echartsLib.use([GaugeChart])

const VeGauge = Object.assign({}, createChart, {
  name: 'VeGauge',
  data () {
    this.chartHandler = gauge
    return {}
  }
})

VeGauge.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeGauge.name, VeGauge)
}

export default VeGauge
