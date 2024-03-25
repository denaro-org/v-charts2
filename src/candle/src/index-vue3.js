import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts'
import { DataZoomComponent, VisualMapComponent } from 'echarts/components'

import { candle } from './main'
import { name, version } from '../package.json'

echartsLib.use([
  LineChart,
  BarChart,
  CandlestickChart,
  DataZoomComponent,
  VisualMapComponent
])

const VeCandle = createChart({
  name: 'VeCandle',
  chartHandler: candle
})

VeCandle.install = app => {
  logCopyRight(name, version)
  app.component(VeCandle.name, VeCandle)
}

export default VeCandle
