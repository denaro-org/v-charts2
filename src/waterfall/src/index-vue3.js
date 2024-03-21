import { waterfall } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([BarChart])

const VeWaterfall = createChart({
  name: 'VeWaterfall',
  chartHandler: waterfall
})

VeWaterfall.install = (app) => {
  logCopyRight(name, version)
  app.component(VeWaterfall.name, VeWaterfall)
}

export default VeWaterfall
export { waterfall }
