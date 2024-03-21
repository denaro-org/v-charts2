import {
  bar, histogram
} from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([BarChart])

const VeBar = createChart({
  name: 'VeBar',
  chartHandler: bar
})

VeBar.install = (app) => {
  logCopyRight(name, version)
  app.component(VeBar.name, VeBar)
}

export default VeBar
export {
  bar, histogram
}
