import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { HeatmapChart, MapChart } from 'echarts/charts'
import { VisualMapComponent } from 'echarts/components'

import { heatmap } from './main'
import { name, version } from '../package.json'
import 'echarts/extension/bmap/bmap'

echartsLib.use([HeatmapChart, MapChart, VisualMapComponent])

const VeHeatmap = Object.assign({}, createChartVue2, {
  name: 'VeHeatmap',
  data() {
    this.chartHandler = heatmap
    return {}
  }
})

VeHeatmap.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeHeatmap.name, VeHeatmap)
}

export default VeHeatmap
