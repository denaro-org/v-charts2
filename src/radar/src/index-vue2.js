import { radar } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { RadarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([RadarChart])

const VeRadar = Object.assign({}, createChart, {
  name: 'VeRadar',
  data () {
    this.chartHandler = radar
    return {}
  }
})

VeRadar.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeRadar.name, VeRadar)
}

export default VeRadar
export { radar }
