import { logCopyRight } from '@v-charts2/core/utils'
import { createChart } from '@v-charts2/core/vue2'

import { wordcloud } from './main'
import { name, version } from '../package.json'
import 'echarts-wordcloud'

const VeWordcloud = Object.assign({}, createChart, {
  name: 'VeWordcloud',
  data () {
    this.chartHandler = wordcloud
    return {}
  }
})

VeWordcloud.install = Vue => {
  logCopyRight(name, version)
  Vue.component(VeWordcloud.name, VeWordcloud)
}

export default VeWordcloud
