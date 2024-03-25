import { gauge } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import { GaugeChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([GaugeChart])

const VeGauge = createChart({
  name: 'VeGauge',
  chartHandler: gauge
})

VeGauge.install = (app) => {
  logCopyRight(name, version)
  app.component(VeGauge.name, VeGauge)
}

export default VeGauge
