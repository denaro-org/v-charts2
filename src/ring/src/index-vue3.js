import {
  name, version
} from '../package.json'
import { ring } from '@v-chartsv2/pie/vue3'
import { createChart } from '@v-chartsv2/core/vue3'
import { PieChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

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
