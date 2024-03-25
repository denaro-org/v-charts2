import * as Vue from 'vue'
import './style/v-charts.css'

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

let VeWaterfall

if (useVueVersion() === 2) {
  VeWaterfall = require('./vue2/v-charts.waterfall.mjs')
} else {
  VeWaterfall = require('./vue3/v-charts.waterfall.mjs')
}

VeWaterfall = VeWaterfall.default

export default VeWaterfall
