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

let VeHeatmap

if (useVueVersion() === 2) {
  VeHeatmap = require('./vue2/v-charts.heatmap.mjs')
} else {
  VeHeatmap = require('./vue3/v-charts.heatmap.mjs')
}

VeHeatmap = VeHeatmap.default

export default VeHeatmap
