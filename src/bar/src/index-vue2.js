import {
  bar, histogram
} from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts2/core/vue2'
import { BarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts2/core/utils'

echartsLib.use([BarChart])

const VeBar = Object.assign({}, createChart, {
  name: 'VeBar',
  data () {
    this.chartHandler = bar
    return {}
  }
})

VeBar.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeBar.name, VeBar)
}

export default VeBar
export {
  bar, histogram
}
