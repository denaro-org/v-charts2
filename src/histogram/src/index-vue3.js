import { histogram } from '@v-charts2/bar/vue3'
import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { BarChart } from 'echarts/charts'

import { name, version } from '../package.json'

echartsLib.use([BarChart])

const VeHistogram = createChart({
  name: 'VeHistogram',
  chartHandler: histogram
})

VeHistogram.install = app => {
  logCopyRight(name, version)
  app.component(VeHistogram.name, VeHistogram)
}

export default VeHistogram
