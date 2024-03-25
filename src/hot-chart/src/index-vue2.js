import {
  name, version
} from '../package.json'
import { line } from '@v-chartsv2/line/vue2'
import {
  bar, histogram
} from '@v-chartsv2/bar/vue2'
import {
  pie, ring
} from '@v-chartsv2/pie/vue2'
import { funnel } from '@v-chartsv2/funnel/vue2'
import { radar } from '@v-chartsv2/radar/vue2'
import { waterfall } from '@v-chartsv2/waterfall/vue2'
import { createChart } from '@v-chartsv2/core/vue2'
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
