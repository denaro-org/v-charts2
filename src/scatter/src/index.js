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

let VeScatter

if (useVueVersion() === 2) {
  VeScatter = require('./vue2/v-charts.scatter.mjs')
} else {
  VeScatter = require('./vue3/v-charts.scatter.mjs')
}

VeScatter = VeScatter.default

export default VeScatter
