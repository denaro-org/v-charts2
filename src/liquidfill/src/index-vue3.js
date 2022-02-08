import { liquidfill } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue3'
import { logCopyRight } from '@v-charts/core/utils'
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
