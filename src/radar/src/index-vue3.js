import { radar } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-chartsv2/core/vue3'
import { RadarChart } from 'echarts/charts'
import {
  echartsLib, logCopyRight
} from '@v-chartsv2/core/utils'

echartsLib.use([RadarChart])

const VeRadar = createChart({
  name: 'VeRadar',
  chartHandler: radar
})

VeRadar.install = (app) => {
  logCopyRight(name, version)
  app.component(VeRadar.name, VeRadar)
}

export default VeRadar
export { radar }
