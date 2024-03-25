import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { ring } from '@v-charts2/pie/vue3'
import { PieChart } from 'echarts/charts'

import { name, version } from '../package.json'

echartsLib.use([PieChart])

const VeRing = createChart({
  name: 'VeRing',
  chartHandler: ring
})

VeRing.install = app => {
  logCopyRight(name, version)
  app.component(VeRing.name, VeRing)
}

export default VeRing
