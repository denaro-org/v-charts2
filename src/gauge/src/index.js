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

let VeGauge

if (useVueVersion() === 2) {
  VeGauge = require('./vue2/v-charts.gauge.es.js')
} else {
  VeGauge = require('./vue3/v-charts.gauge.es.js')
}

VeGauge = VeGauge.default

export default VeGauge
