import {
  name, version
} from '../package.json'
import VeLine from '@v-chartsv2/line/vue3'
import VeBar from '@v-chartsv2/bar/vue3'
import VeHistogram from '@v-chartsv2/histogram/vue3'
import VePie from '@v-chartsv2/pie/vue3'
import VeRing from '@v-chartsv2/ring/vue3'
import VeCandle from '@v-chartsv2/candle/vue3'
import VeFunnel from '@v-chartsv2/funnel/vue3'
import VeAmap from '@v-chartsv2/amap/vue3'
import VeGauge from '@v-chartsv2/gauge/vue3'
import VeLiquidfill from '@v-chartsv2/liquidfill/vue3'
import VeWordcloud from '@v-chartsv2/wordcloud/vue3'
import VeWaterfall from '@v-chartsv2/waterfall/vue3'
import VeTree from '@v-chartsv2/tree/vue3'
import VeScatter from '@v-chartsv2/scatter/vue3'
import VeSankey from '@v-chartsv2/sankey/vue3'
import VeRadar from '@v-chartsv2/radar/vue3'
import VeMap from '@v-chartsv2/map/vue3'
import VeHeatmap from '@v-chartsv2/heatmap/vue3'
import { logCopyRight } from '@v-chartsv2/core/utils'

const charts = [
  VeLine,
  VeBar,
  VeHistogram,
  VePie,
  VeRing,
  VeCandle,
  VeFunnel,
  VeAmap,
  VeGauge,
  VeLiquidfill,
  VeWordcloud,
  VeWaterfall,
  VeTree,
  VeScatter,
  VeSankey,
  VeRadar,
  VeMap,
  VeHeatmap
]

function install (Vue) {
  logCopyRight(name, version)
  charts.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install, version, name, charts
}
