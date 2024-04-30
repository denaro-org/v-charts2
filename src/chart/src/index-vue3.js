// import VeAmap from '@v-charts2/amap/vue3'
import VeBar from '@v-charts2/bar/vue3'
import VeCandle from '@v-charts2/candle/vue3'
import { logCopyRight } from '@v-charts2/core/utils'
import VeFunnel from '@v-charts2/funnel/vue3'
import VeGauge from '@v-charts2/gauge/vue3'
import VeHeatmap from '@v-charts2/heatmap/vue3'
import VeHistogram from '@v-charts2/histogram/vue3'
import VeLine from '@v-charts2/line/vue3'
import VeLiquidfill from '@v-charts2/liquidfill/vue3'
import VeMap from '@v-charts2/map/vue3'
import VePie from '@v-charts2/pie/vue3'
import VeRadar from '@v-charts2/radar/vue3'
import VeRing from '@v-charts2/ring/vue3'
import VeSankey from '@v-charts2/sankey/vue3'
import VeScatter from '@v-charts2/scatter/vue3'
import VeTree from '@v-charts2/tree/vue3'
import VeWaterfall from '@v-charts2/waterfall/vue3'
import VeWordcloud from '@v-charts2/wordcloud/vue3'

import { name, version } from '../package.json'

const charts = [
  VeLine,
  VeBar,
  VeHistogram,
  VePie,
  VeRing,
  VeCandle,
  VeFunnel,
  // VeAmap,
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

function install(Vue) {
  logCopyRight(name, version)
  charts.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
  version,
  name,
  charts
}
