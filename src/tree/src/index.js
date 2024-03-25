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

let VeTree

if (useVueVersion() === 2) {
  VeTree = require('./vue2/v-charts.tree.mjs')
} else {
  VeTree = require('./vue3/v-charts.tree.mjs')
}

VeTree = VeTree.default

export default VeTree
