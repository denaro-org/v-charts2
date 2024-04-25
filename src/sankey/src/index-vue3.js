import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { SankeyChart } from 'echarts/charts'

import { sankey } from './main'
import { name, version } from '../package.json'

echartsLib.use([SankeyChart])

const VeSankey = createChartVue3({
  name: 'VeSankey',
  chartHandler: sankey
})

VeSankey.install = app => {
  logCopyRight(name, version)
  app.component(VeSankey.name, VeSankey)
}

export default VeSankey
