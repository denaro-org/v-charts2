import {
  name, version
} from '../package.json'
import { line } from '@v-charts/line/vue3'
import {
  bar, histogram
} from '@v-charts/bar/vue3'
import {
  pie, ring
} from '@v-charts/pie/vue3'
import { funnel } from '@v-charts/funnel/vue3'
import { radar } from '@v-charts/radar/vue3'
import { waterfall } from '@v-charts/waterfall/vue3'
import { createChart } from '@v-charts/core/vue3'
import { logCopyRight } from '@v-charts/core/utils'

const charts = {
  bar,
  histogram,
  line,
  pie,
  ring,
  funnel,
  radar,
  waterfall
}

const VeHotChart = createChart({
  name: 'VeHotChart',
  chartLib: charts
})

VeHotChart.install = (app) => {
  logCopyRight(name, version)
  app.component(VeHotChart.name, VeHotChart)
}

export default VeHotChart
