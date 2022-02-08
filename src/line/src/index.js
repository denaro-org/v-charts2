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

let VeLine

if (useVueVersion() === 2) {
  VeLine = require('./vue2/v-charts.line.es.js')
} else {
  VeLine = require('./vue3/v-charts.line.es.js')
}

VeLine = VeLine.default

export default VeLine
