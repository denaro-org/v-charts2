import { line } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue3'
import { LineChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([LineChart])

const VeLine = createChart({
  name: 'VeLine',
  chartHandler: line
})

VeLine.install = (app) => {
  logCopyRight(name, version)
  app.component(VeLine.name, VeLine)
}

export default VeLine
export { line }
