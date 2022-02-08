import { sankey } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue3'
import { SankeyChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([SankeyChart])

const VeSankey = createChart({
  name: 'VeSankey',
  chartHandler: sankey
})

VeSankey.install = (app) => {
  logCopyRight(name, version)
  app.component(VeSankey.name, VeSankey)
}

export default VeSankey
