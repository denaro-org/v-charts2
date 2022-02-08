import { gauge } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { GaugeChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([GaugeChart])

const VeGauge = Object.assign({}, createChart, {
  name: 'VeGauge',
  data () {
    this.chartHandler = gauge
    return {}
  }
})

VeGauge.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeGauge.name, VeGauge)
}

export default VeGauge
