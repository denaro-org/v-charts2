import { bar, histogram } from '@v-charts2/bar/vue2'
import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { funnel } from '@v-charts2/funnel/vue2'
import { line } from '@v-charts2/line/vue2'
import { pie, ring } from '@v-charts2/pie/vue2'
import { radar } from '@v-charts2/radar/vue2'
import { waterfall } from '@v-charts2/waterfall/vue2'

import { name, version } from '../package.json'

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

const VeHotChart = Object.assign({}, createChart, {
  name: 'VeHotChart',
  data () {
    this.chartLib = charts
    this.chartHandler = this.chartLib[this.settings.type]
    return {}
  }
})

VeHotChart.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeHotChart.name, VeHotChart)
}

export default VeHotChart
