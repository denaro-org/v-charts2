import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'

import { liquidfill } from './main'
import { name, version } from '../package.json'
import 'echarts-liquidfill'

const VeLiquidfill = createChart({
  name: 'VeLiquidfill',
  chartHandler: liquidfill
})

VeLiquidfill.install = app => {
  logCopyRight(name, version)
  app.component(VeLiquidfill.name, VeLiquidfill)
}

export default VeLiquidfill
