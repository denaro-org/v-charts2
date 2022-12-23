import * as Vue from 'vue'
import '@v-charts2/core/v-charts.css'

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

let VeCandle

if (useVueVersion() === 2) {
  VeCandle = require('./vue2/v-charts.candle.mjs')
} else {
  VeCandle = require('./vue3/v-charts.candle.mjs')
}

VeCandle = VeCandle.default

export default VeCandle
