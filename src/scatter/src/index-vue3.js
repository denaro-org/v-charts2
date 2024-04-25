import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { ScatterChart } from 'echarts/charts'

import { scatter } from './main'
import { name, version } from '../package.json'

echartsLib.use([ScatterChart])

const VeScatter = createChartVue3({
  name: 'VeScatter',
  chartHandler: scatter
})

VeScatter.install = app => {
  logCopyRight(name, version)
  app.component(VeScatter.name, VeScatter)
}

export default VeScatter
