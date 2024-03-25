import VeAmap from '@v-charts2/amap/vue2'
import VeBar from '@v-charts2/bar/vue2'
import VeCandle from '@v-charts2/candle/vue2'
import { logCopyRight } from '@v-charts2/core/utils'
import VeFunnel from '@v-charts2/funnel/vue2'
import VeGauge from '@v-charts2/gauge/vue2'
import VeHeatmap from '@v-charts2/heatmap/vue2'
import VeHistogram from '@v-charts2/histogram/vue2'
import VeLine from '@v-charts2/line/vue2'
import VeLiquidfill from '@v-charts2/liquidfill/vue2'
import VeMap from '@v-charts2/map/vue2'
import VePie from '@v-charts2/pie/vue2'
import VeRadar from '@v-charts2/radar/vue2'
import VeRing from '@v-charts2/ring/vue2'
import VeSankey from '@v-charts2/sankey/vue2'
import VeScatter from '@v-charts2/scatter/vue2'
import VeTree from '@v-charts2/tree/vue2'
import VeWaterfall from '@v-charts2/waterfall/vue2'
import VeWordcloud from '@v-charts2/wordcloud/vue2'

import { name, version } from '../package.json'

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
