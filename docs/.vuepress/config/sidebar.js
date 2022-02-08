const fs = require('fs')
const path = require('path')

let chartsDocs = fs.readdirSync(path.resolve(__dirname, '../../charts'))
chartsDocs = chartsDocs.filter((item) => item !== 'README.md')
let guideDocs = fs.readdirSync(path.resolve(__dirname, '../../guide'))
guideDocs = guideDocs.filter((item) => item !== 'README.md')

module.exports = [
  {
    title: '更新日志',
    children: [
      '/changelog/CHANGELOG'
    ]
  },
  {
    title: '上手指南',
    children: [
      '/guide/',
      ...guideDocs.map((item) => `guide/${item.replace('.md', '')}`)
    ]
  },

  {
    title: '图表组件',
    children: [
      '/charts/',
      ...chartsDocs.map((item) => `charts/${item.replace('.md', '')}`)
    ]
  }
]
