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

let VeBar

if (useVueVersion() === 2) {
  VeBar = require('./vue2/v-charts.bar.mjs')
} else {
  VeBar = require('./vue3/v-charts.bar.mjs')
}

VeBar = VeBar.default

export default VeBar
