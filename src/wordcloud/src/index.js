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

let VeWordcloud

if (useVueVersion() === 2) {
  VeWordcloud = require('./vue2/v-charts.wordcloud.mjs')
} else {
  VeWordcloud = await import('./vue3/v-charts.wordcloud.mjs')
}

VeWordcloud = VeWordcloud.default || VeWordcloud

export default VeWordcloud
