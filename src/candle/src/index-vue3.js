import { candle } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import {
  BarChart, CandlestickChart, LineChart
} from 'echarts/charts'
import {
  DataZoomComponent, VisualMapComponent
} from 'echarts/components'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([LineChart, BarChart, CandlestickChart, DataZoomComponent, VisualMapComponent])

const VeCandle = createChart({
  name: 'VeCandle',
  chartHandler: candle
})

VeCandle.install = (app) => {
  logCopyRight(name, version)
  app.component(VeCandle.name, VeCandle)
}

export default VeCandle
