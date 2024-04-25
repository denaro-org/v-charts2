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

let VeMap

if (useVueVersion() === 2) {
  VeMap = require('./vue2/v-charts.map.mjs')
} else {
  VeMap = await import('./vue3/v-charts.map.mjs')
}

VeMap = VeMap.default || VeMap

export default VeMap
