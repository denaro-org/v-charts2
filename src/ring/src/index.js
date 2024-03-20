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

let VeRing

if (useVueVersion() === 2) {
  VeRing = require('./vue2/v-charts.ring.mjs')
} else {
  VeRing = require('./vue3/v-charts.ring.mjs')
}

VeRing = VeRing.default

export default VeRing
