import {
  name, version
} from '../package.json'
import { line } from '@v-charts/line/vue2'
import {
  bar, histogram
} from '@v-charts/bar/vue2'
import {
  pie, ring
} from '@v-charts/pie/vue2'
import { funnel } from '@v-charts/funnel/vue2'
import { radar } from '@v-charts/radar/vue2'
import { waterfall } from '@v-charts/waterfall/vue2'
import { createChart } from '@v-charts/core/vue2'
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

const VeHotChart = Object.assign({}, createChart, {
  name: 'VeHotChart',
  data () {
    this.chartLib = charts
    this.chartHandler = this.chartLib[this.settings.type]
    return {}
  }
})

VeHotChart.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeHotChart.name, VeHotChart)
}

export default VeHotChart
