import {
  name, version
} from '../package.json'
import { ring } from '@v-charts/pie/vue3'
import { createChart } from '@v-charts/core/vue3'
import { PieChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([PieChart])

const VeRing = createChart({
  name: 'VeRing',
  chartHandler: ring
})

VeRing.install = (app) => {
  logCopyRight(name, version)
  app.component(VeRing.name, VeRing)
}

export default VeRing
