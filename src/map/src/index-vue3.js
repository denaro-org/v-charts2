import { map } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts/core/vue2'
import { MapChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-charts/core/utils'

echartsLib.use([MapChart])

const VeMap = createChart({
  name: 'VeMap',
  chartHandler: map
})

VeMap.install = (app) => {
  logCopyRight(name, version)
  app.component(VeMap.name, VeMap)
}

export default VeMap
