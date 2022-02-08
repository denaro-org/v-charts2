import { tree } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { TreeChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([TreeChart])

const VeTree = Object.assign({}, createChart, {
  name: 'VeTree',
  data () {
    this.chartHandler = tree
    return {}
  }
})

VeTree.install = (Vue) => {
  logCopyRight(name, version)
  Vue.component(VeTree.name, VeTree)
}

export default VeTree
