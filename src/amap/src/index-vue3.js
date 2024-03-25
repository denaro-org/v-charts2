import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'

import { amap } from './main'
import { name, version } from '../package.json'
import 'echarts-amap'

const VeAmap = createChart({
  name: 'VeAmap',
  chartHandler: amap
})

VeAmap.install = app => {
  logCopyRight(name, version)
  app.component(VeAmap.name, VeAmap)
}

export default VeAmap
