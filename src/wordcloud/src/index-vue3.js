import { wordcloud } from './main'
import {
  name, version
} from '../package.json'
import { createChart } from '@v-charts2/core/vue3'
import { logCopyRight } from '@v-charts2/core/utils'
import 'echarts-wordcloud'

const VeWordcloud = createChart({
  name: 'VeWordcloud',
  chartHandler: wordcloud
})

VeWordcloud.install = (app) => {
  logCopyRight(name, version)
  app.component(VeWordcloud.name, VeWordcloud)
}

export default VeWordcloud
