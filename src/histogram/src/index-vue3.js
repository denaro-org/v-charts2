import {
  name, version
} from '../package.json'
import { histogram } from '@v-charts/bar/vue3'
import { createChart } from '@v-charts/core/vue3'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([BarChart])

const VeHistogram = createChart({
  name: 'VeHistogram',
  chartHandler: histogram
})

VeHistogram.install = (app) => {
  logCopyRight(name, version)
  app.component(VeHistogram.name, VeHistogram)
}

export default VeHistogram
