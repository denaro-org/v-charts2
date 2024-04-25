import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { MapChart } from 'echarts/charts'

import { map } from './main'
import { name, version } from '../package.json'

echartsLib.use([MapChart])

const VeMap = createChartVue3({
  name: 'VeMap',
  chartHandler: map
})

VeMap.install = app => {
  logCopyRight(name, version)
  app.component(VeMap.name, VeMap)
}

export default VeMap
