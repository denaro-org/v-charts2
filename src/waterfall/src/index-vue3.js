import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { BarChart } from 'echarts/charts'

import { waterfall } from './main'
import { name, version } from '../package.json'

echartsLib.use([BarChart])

const VeWaterfall = createChart({
  name: 'VeWaterfall',
  chartHandler: waterfall
})

VeWaterfall.install = app => {
  logCopyRight(name, version)
  app.component(VeWaterfall.name, VeWaterfall)
}

export default VeWaterfall
export { waterfall }
