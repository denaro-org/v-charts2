import * as Vue from 'vue'
import '@v-chartsv2/core/v-charts.css'

const useVueVersion = () => {
  // Make copy to prevent import warning in Vue 2
  const vueObject = { ...Vue }
  let version

  if (vueObject.default) version = 2
  if (vueObject.version && vueObject.version[0] === '3') {
    version = 3
  }

  return version
}

let VeHotChart

if (useVueVersion() === 2) {
  VeHotChart = require('./vue2/v-charts.hot-chart.mjs')
} else {
  VeHotChart = require('./vue3/v-charts.hot-chart.mjs')
}

VeHotChart = VeHotChart.default

export default VeHotChart
