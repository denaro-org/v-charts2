import { heatmap } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts2/core/vue2'
import {
  HeatmapChart, MapChart
} from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts2/core/utils'
import { VisualMapComponent } from 'echarts/components'
import 'echarts/extension/bmap/bmap'

echartsLib.use([HeatmapChart, MapChart, VisualMapComponent])

const VeHeatmap = Object.assign({}, createChart, {
  name: 'VeHeatmap',
  data () {
    this.chartHandler = heatmap
    return {}
  }
})

VeHeatmap.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeHeatmap.name, VeHeatmap)
}

export default VeHeatmap
