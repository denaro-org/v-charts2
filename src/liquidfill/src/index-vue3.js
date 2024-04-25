import { logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'

import { liquidfill } from './main'
import { name, version } from '../package.json'
import 'echarts-liquidfill'

const VeLiquidfill = createChartVue3({
  name: 'VeLiquidfill',
  chartHandler: liquidfill
})

VeLiquidfill.install = app => {
  logCopyRight(name, version)
  app.component(VeLiquidfill.name, VeLiquidfill)
}

export default VeLiquidfill
