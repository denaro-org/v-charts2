import {
  name, version
} from '../package.json'
import { histogram } from '@v-chartsv2/bar/vue2'
import { createChart } from '@v-chartsv2/core/vue2'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

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
