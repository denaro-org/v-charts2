import { gauge } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue3'
import { GaugeChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

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
