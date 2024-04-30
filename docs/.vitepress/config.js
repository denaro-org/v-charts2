import MarkdownPreview from 'vite-plugin-markdown-preview'

import nav from './config/nav'
import sidebar from './config/sidebar'

export default {
  title: 'v-charts2',
  description: '基于 Vue 的 Echarts5.x 组件',
  outDir: 'publish-pages',
  base: '/v-charts2/',
  lastUpdated: true,
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.ico', // 导航栏的 logo
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/denaro-org/v-charts2' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: ' Copyright © 2022 vxhly pengchengou@gmail.com'
    },
    search: {
      provider: 'local'
    }
  },
  vite: {
    plugins: [MarkdownPreview()],
    build: {
      target: 'esnext'
    }
  }
}
