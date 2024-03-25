import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue3'

import { wordcloud } from './main'
import { name, version } from '../package.json'
import 'echarts-wordcloud'

const VeWordcloud = createChart({
  name: 'VeWordcloud',
  chartHandler: wordcloud
})

VeWordcloud.install = app => {
  logCopyRight(name, version)
  app.component(VeWordcloud.name, VeWordcloud)
}

export default VeWordcloud
