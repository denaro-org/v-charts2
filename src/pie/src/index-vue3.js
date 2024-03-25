import {
  pie, ring
} from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import { PieChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([PieChart])

const VePie = createChart({
  name: 'VePie',
  chartHandler: pie
})

VePie.install = (app) => {
  logCopyRight(name, version)
  app.component(VePie.name, VePie)
}

export default VePie
export {
  pie, ring
}
