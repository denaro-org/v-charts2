import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { ScatterChart } from 'echarts/charts'

import { scatter } from './main'
import { name, version } from '../package.json'

echartsLib.use([ScatterChart])

const VeScatter = Object.assign({}, createChart, {
  name: 'VeScatter',
  data () {
    this.chartHandler = scatter
    return {}
  }
})

VeScatter.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeScatter.name, VeScatter)
}

export default VeScatter
