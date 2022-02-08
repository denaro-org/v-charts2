import {
  pie, ring
} from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue3'
import { PieChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

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
