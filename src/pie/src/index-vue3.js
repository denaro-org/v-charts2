import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { PieChart } from 'echarts/charts'

import { pie, ring } from './main'
import { name, version } from '../package.json'

echartsLib.use([PieChart])

const VePie = createChart({
  name: 'VePie',
  chartHandler: pie
})

VePie.install = app => {
  logCopyRight(name, version)
  app.component(VePie.name, VePie)
}

export default VePie
export { pie, ring }
