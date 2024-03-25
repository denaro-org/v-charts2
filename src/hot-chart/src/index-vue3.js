import {
  name, version
} from '../package.json'
import { line } from '@v-chartsv2/line/vue3'
import {
  bar, histogram
} from '@v-chartsv2/bar/vue3'
import {
  pie, ring
} from '@v-chartsv2/pie/vue3'
import { funnel } from '@v-chartsv2/funnel/vue3'
import { radar } from '@v-chartsv2/radar/vue3'
import { waterfall } from '@v-chartsv2/waterfall/vue3'
import { createChart } from '@v-chartsv2/core/vue3'
import { logCopyRight } from '@v-chartsv2/core/utils'

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
