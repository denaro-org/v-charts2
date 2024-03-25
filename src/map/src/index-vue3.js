import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { MapChart } from 'echarts/charts'

import { map } from './main'
import { name, version } from '../package.json'

echartsLib.use([MapChart])

const VeMap = createChart({
  name: 'VeMap',
  chartHandler: map
})

VeMap.install = app => {
  logCopyRight(name, version)
  app.component(VeMap.name, VeMap)
}

export default VeMap
