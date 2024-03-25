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

let VeAmap

if (useVueVersion() === 2) {
  VeAmap = require('./vue2/v-charts.amap.mjs')
} else {
  VeAmap = require('./vue3/v-charts.amap.mjs')
}

VeAmap = VeAmap.default

export default VeAmap
