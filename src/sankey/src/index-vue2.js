import { sankey } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { SankeyChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([SankeyChart])

const VeSankey = Object.assign({}, createChart, {
  name: 'VeSankey',
  data () {
    this.chartHandler = sankey
    return {}
  }
})

VeSankey.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeSankey.name, VeSankey)
}

export default VeSankey
