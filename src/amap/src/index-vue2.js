import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue2 } from '@v-charts2/core/vue2'
import { EffectScatterChart, ScatterChart } from 'echarts/charts'
import { TooltipComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import { install as AMapComponent } from 'echarts-extension-amap/export'

import { amap } from './main'
import { name, version } from '../package.json'

import 'echarts-extension-amap'

echartsLib.use([
  CanvasRenderer,
  TooltipComponent,
  AMapComponent,
  ScatterChart,
  EffectScatterChart
])

const VeAmap = Object.assign({}, createChartVue2, {
  name: 'VeAmap',
  data() {
    this.chartHandler = amap
    return {}
  }
})

VeAmap.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeAmap.name, VeAmap)
}

export default VeAmap
