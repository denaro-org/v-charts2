import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'

import { amap } from './main'
import { name, version } from '../package.json'
import 'echarts-amap'

const VeAmap = Object.assign({}, createChart, {
  name: 'VeAmap',
  data () {
    this.chartHandler = amap
    return {}
  }
})

VeAmap.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeAmap.name, VeAmap)
}

export default VeAmap
