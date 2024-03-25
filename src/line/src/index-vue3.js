import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { LineChart } from 'echarts/charts'

import { line } from './main'
import { name, version } from '../package.json'

echartsLib.use([LineChart])

const VeLine = createChart({
  name: 'VeLine',
  chartHandler: line
})

VeLine.install = app => {
  logCopyRight(name, version)
  app.component(VeLine.name, VeLine)
}

export default VeLine
export { line }
