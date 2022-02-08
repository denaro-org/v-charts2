module.exports = {
  theme: 'antdocs',
  title: 'v-charts2',
  description: '基于 Vue 的 Echarts5.x 组件',
  host: '127.0.0.1',
  dest: 'publish-pages',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico'
      }
    ]
  ],
  plugins: [
    ['smooth-scroll'],
    ['vue-demo'],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用.',
          buttonText: '刷新'
        }
      }
    ],
    [
      'one-click-copy',
      {
        copySelector: [
          "div[class*='language-'] pre",
          "div[class*='aside-code'] aside"
        ], // String or Array
        copyMessage: '复制成功了, 快去粘贴使用吧 !!!', // default is 'Copy successfully and then paste it for use.'
        duration: 3000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 2, // 将同时提取 h2 和 h3 标题
    logo: '/favicon.ico', // 导航栏的 logo
    backToTop: true, // 置顶按钮
    smoothScroll: true,
    nav: require('./config/nav'), // 顶部导航
    sidebar: require('./config/sidebar'), // 侧边导航
    lastUpdated: 'Last Updated', // 开启 lastUpdated
    repo: 'https://github.com/denaro-org/v-charts2',
    editLinks: false
  }
}
