import { histogram } from '@v-charts2/bar/vue3'
import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { BarChart } from 'echarts/charts'

import { name, version } from '../package.json'

echartsLib.use([BarChart])

const VeHistogram = createChartVue3({
  name: 'VeHistogram',
  chartHandler: histogram
})

VeHistogram.install = app => {
  logCopyRight(name, version)
  app.component(VeHistogram.name, VeHistogram)
}

export default VeHistogram
