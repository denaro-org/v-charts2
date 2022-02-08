import { funnel } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue3'
import { FunnelChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([FunnelChart])

const VeFunnel = createChart({
  name: 'VeFunnel',
  chartHandler: funnel
})

VeFunnel.install = (app) => {
  logCopyRight(name, version)
  app.component(VeFunnel.name, VeFunnel)
}

export default VeFunnel
export { funnel }
