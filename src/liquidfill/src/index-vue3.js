import { liquidfill } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import { logCopyRight } from '@v-chartsv2/core/utils'
import 'echarts-liquidfill'

const VeLiquidfill = createChart({
  name: 'VeLiquidfill',
  chartHandler: liquidfill
})

VeLiquidfill.install = (app) => {
  logCopyRight(name, version)
  app.component(VeLiquidfill.name, VeLiquidfill)
}

export default VeLiquidfill
