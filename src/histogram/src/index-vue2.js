import {
  name, version
} from '../package.json'
import { histogram } from '@v-charts/bar/vue2'
import { createChart } from '@v-charts/core/vue2'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([BarChart])

const VeHistogram = Object.assign({}, createChart, {
  name: 'VeHistogram',
  data () {
    this.chartHandler = histogram
    return {}
  }
})

VeHistogram.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeHistogram.name, VeHistogram)
}

export default VeHistogram
