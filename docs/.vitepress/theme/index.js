import VeAmap from '@v-charts2/amap/vue3'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  async enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      if (typeof window !== 'undefined') window.global = window
      app.use(VeAmap)

      // const chart = await import('@v-charts2/chart')

      // app.use(chart.default)

      // const hotChart = await import('@v-charts2/hot-chart')

      // app.use(hotChart.default)
    }
  }
}
