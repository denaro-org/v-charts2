import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'
import { EffectScatterChart, ScatterChart } from 'echarts/charts'
import {
  BrushComponent,
  DataZoomComponent,
  GeoComponent,
  GraphicComponent,
  TimelineComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components'
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
  EffectScatterChart,
  DataZoomComponent,
  VisualMapComponent,
  ToolboxComponent,
  BrushComponent,
  GeoComponent,
  TimelineComponent,
  GraphicComponent
])

const VeAmap = createChartVue3({
  name: 'VeAmap',
  chartHandler: amap
})

VeAmap.install = app => {
  logCopyRight(name, version)
  app.component(VeAmap.name, VeAmap)
}

export default VeAmap
