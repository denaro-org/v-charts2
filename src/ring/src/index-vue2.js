import {
  name, version
} from '../package.json'
import { ring } from '@v-chartsv2/pie/vue2'
import { createChart } from '@v-chartsv2/core/vue2'
import { PieChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([PieChart])

const VeRing = Object.assign({}, createChart, {
  name: 'VeRing',
  data () {
    this.chartHandler = ring
    return {}
  }
})

VeRing.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeRing.name, VeRing)
}

export default VeRing
