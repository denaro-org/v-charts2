import {
  name, version
} from '../package.json'
import VeLine from '@v-chartsv2/line/vue2'
import VeBar from '@v-chartsv2/bar/vue2'
import VeHistogram from '@v-chartsv2/histogram/vue2'
import VePie from '@v-chartsv2/pie/vue2'
import VeRing from '@v-chartsv2/ring/vue2'
import VeCandle from '@v-chartsv2/candle/vue2'
import VeFunnel from '@v-chartsv2/funnel/vue2'
import VeAmap from '@v-chartsv2/amap/vue2'
import VeGauge from '@v-chartsv2/gauge/vue2'
import VeLiquidfill from '@v-chartsv2/liquidfill/vue2'
import VeWordcloud from '@v-chartsv2/wordcloud/vue2'
import VeWaterfall from '@v-chartsv2/waterfall/vue2'
import VeTree from '@v-chartsv2/tree/vue2'
import VeScatter from '@v-chartsv2/scatter/vue2'
import VeSankey from '@v-chartsv2/sankey/vue2'
import VeRadar from '@v-chartsv2/radar/vue2'
import VeMap from '@v-chartsv2/map/vue2'
import VeHeatmap from '@v-chartsv2/heatmap/vue2'
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
