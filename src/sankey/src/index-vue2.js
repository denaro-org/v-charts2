import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { SankeyChart } from 'echarts/charts'

import { sankey } from './main'
import { name, version } from '../package.json'

echartsLib.use([SankeyChart])

const VeSankey = Object.assign({}, createChartVue2, {
  name: 'VeSankey',
  data() {
    this.chartHandler = sankey
    return {}
  }
})

VeSankey.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeSankey.name, VeSankey)
}

export default VeSankey
