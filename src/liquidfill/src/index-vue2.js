import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'

import { liquidfill } from './main'
import { name, version } from '../package.json'
import 'echarts-liquidfill'

const VeLiquidfill = Object.assign({}, createChart, {
  name: 'VeLiquidfill',
  data () {
    this.chartHandler = liquidfill
    return {}
  }
})

VeLiquidfill.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeLiquidfill.name, VeLiquidfill)
}

export default VeLiquidfill
