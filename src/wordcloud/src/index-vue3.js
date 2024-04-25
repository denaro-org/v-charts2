import { logCopyRight } from '@v-charts2/core/utils'
import { createChartVue3 } from '@v-charts2/core/vue3'

import { wordcloud } from './main'
import { name, version } from '../package.json'
import 'echarts-wordcloud'

const VeWordcloud = createChartVue3({
  name: 'VeWordcloud',
  chartHandler: wordcloud
})

VeWordcloud.install = app => {
  logCopyRight(name, version)
  app.component(VeWordcloud.name, VeWordcloud)
}

export default VeWordcloud
