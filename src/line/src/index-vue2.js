import { line } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { LineChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([LineChart])

const VeLine = Object.assign({}, createChart, {
  name: 'VeLine',
  data () {
    this.chartHandler = line
    return {}
  }
})

VeLine.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeLine.name, VeLine)
}

export default VeLine
export { line }
