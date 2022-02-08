import { candle } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import {
  BarChart, CandlestickChart, LineChart
} from 'echarts/charts'
import {
  DataZoomComponent, VisualMapComponent
} from 'echarts/components'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([LineChart, BarChart, CandlestickChart, DataZoomComponent, VisualMapComponent])

const VeCandle = Object.assign({}, createChart, {
  name: 'VeCandle',
  data () {
    this.chartHandler = candle
    return {}
  }
})

VeCandle.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeCandle.name, VeCandle)
}

export default VeCandle
