import {
  name, version
} from '../package.json'
import VeLine from '@v-charts/line/vue2'
import VeBar from '@v-charts/bar/vue2'
import VeHistogram from '@v-charts/histogram/vue2'
import VePie from '@v-charts/pie/vue2'
import VeRing from '@v-charts/ring/vue2'
import VeCandle from '@v-charts/candle/vue2'
import VeFunnel from '@v-charts/funnel/vue2'
import VeAmap from '@v-charts/amap/vue2'
import VeGauge from '@v-charts/gauge/vue2'
import VeLiquidfill from '@v-charts/liquidfill/vue2'
import VeWordcloud from '@v-charts/wordcloud/vue2'
import VeWaterfall from '@v-charts/waterfall/vue2'
import VeTree from '@v-charts/tree/vue2'
import VeScatter from '@v-charts/scatter/vue2'
import VeSankey from '@v-charts/sankey/vue2'
import VeRadar from '@v-charts/radar/vue2'
import VeMap from '@v-charts/map/vue2'
import VeHeatmap from '@v-charts/heatmap/vue2'
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
