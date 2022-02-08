import {
  name, version
} from '../package.json'
import { ring } from '@v-charts/pie/vue2'
import { createChart } from '@v-charts/core/vue2'
import { PieChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

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
