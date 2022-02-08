import { funnel } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { FunnelChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([FunnelChart])

const VeFunnel = Object.assign({}, createChart, {
  name: 'VeFunnel',
  data () {
    this.chartHandler = funnel
    return {}
  }
})

VeFunnel.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeFunnel.name, VeFunnel)
}

export default VeFunnel
export { funnel }
