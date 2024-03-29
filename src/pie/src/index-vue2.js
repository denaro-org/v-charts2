import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { PieChart } from 'echarts/charts'

import { pie, ring } from './main'
import { name, version } from '../package.json'

echartsLib.use([PieChart])

const VePie = Object.assign({}, createChart, {
  name: 'VePie',
  data () {
    this.chartHandler = pie
    return {}
  }
})

VePie.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VePie.name, VePie)
}

export default VePie
export { pie, ring }
