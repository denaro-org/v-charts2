import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { GaugeChart } from 'echarts/charts'

import { gauge } from './main'
import { name, version } from '../package.json'

echartsLib.use([GaugeChart])

const VeGauge = createChart({
  name: 'VeGauge',
  chartHandler: gauge
})

VeGauge.install = app => {
  logCopyRight(name, version)
  app.component(VeGauge.name, VeGauge)
}

export default VeGauge
