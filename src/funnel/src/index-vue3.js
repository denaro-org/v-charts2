import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { FunnelChart } from 'echarts/charts'

import { funnel } from './main'
import { name, version } from '../package.json'

echartsLib.use([FunnelChart])

const VeFunnel = createChartVue3({
  name: 'VeFunnel',
  chartHandler: funnel
})

VeFunnel.install = app => {
  logCopyRight(name, version)
  app.component(VeFunnel.name, VeFunnel)
}

export default VeFunnel
export { funnel }
