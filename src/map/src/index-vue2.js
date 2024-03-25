import { echartsLib, logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'
import { MapChart } from 'echarts/charts'

import { map } from './main'
import { name, version } from '../package.json'

echartsLib.use([MapChart])

const VeMap = Object.assign({}, createChart, {
  name: 'VeMap',
  data () {
    this.chartHandler = map
    return {}
  }
})

VeMap.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeMap.name, VeMap)
}

export default VeMap
