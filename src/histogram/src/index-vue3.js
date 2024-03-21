import {
  name, version
} from '../package.json'
import { histogram } from '@v-chartsv2/bar/vue3'
import { createChart } from '@v-chartsv2/core/vue3'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

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
