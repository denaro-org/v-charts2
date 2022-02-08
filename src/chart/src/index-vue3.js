import {
  name, version
} from '../package.json'
import VeLine from '@v-charts/line/vue3'
import VeBar from '@v-charts/bar/vue3'
import VeHistogram from '@v-charts/histogram/vue3'
import VePie from '@v-charts/pie/vue3'
import VeRing from '@v-charts/ring/vue3'
import VeCandle from '@v-charts/candle/vue3'
import VeFunnel from '@v-charts/funnel/vue3'
import VeAmap from '@v-charts/amap/vue3'
import VeGauge from '@v-charts/gauge/vue3'
import VeLiquidfill from '@v-charts/liquidfill/vue3'
import VeWordcloud from '@v-charts/wordcloud/vue3'
import VeWaterfall from '@v-charts/waterfall/vue3'
import VeTree from '@v-charts/tree/vue3'
import VeScatter from '@v-charts/scatter/vue3'
import VeSankey from '@v-charts/sankey/vue3'
import VeRadar from '@v-charts/radar/vue3'
import VeMap from '@v-charts/map/vue3'
import VeHeatmap from '@v-charts/heatmap/vue3'
import { logCopyRight } from '@v-charts/core/utils'

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
