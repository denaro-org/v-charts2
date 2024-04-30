import { resolve } from 'path'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'vite'
import Banner from 'vite-plugin-banner'

import pkg from './package.json'

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      Banner(
        `/* eslint-disable */\n/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: vxhly <pengchengou@gmail.com>\n */`
      ),
      copy({
        targets: [
          {
            src: '../core/src/style',
            dest: 'lib'
          },
          {
            src: './src/index.js',
            dest: 'lib'
          }
        ],
        verbose: true
      })
    ],
    build: {
      outDir: `lib/${mode === 'vue3' ? 'vue3' : 'vue2'}`,
      lib: {
        emptyOutDir: true,
        formats: ['es', 'umd', 'iife'],
        entry: resolve(
          __dirname,
          `src/index-${mode === 'vue3' ? 'vue3' : 'vue2'}.js`
        ),
        name: '@v-charts2/chart',
        fileName: 'v-charts.chart'
      },
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true
        }
      },
      minify: 'terser',
      manifest: false,
      // 构建后是否生成 source map 文件
      sourcemap: false,
      rollupOptions: {
        external: [
          'vue',
          'echarts/core',
          'echarts/components',
          'echarts/features',
          'echarts/renderers',
          'echarts/charts',
          'numerify',
          'utils-lite',
          'echarts-amap',
          'echarts-liquidfill',
          'echarts-wordcloud',
          'echarts-extension-amap',
          '@v-charts2/core/vue3',
          '@v-charts2/core/vue2'
        ],
        output: {
          exports: 'named',
          extend: true,
          inlineDynamicImports: true,
          assetFileNames: 'v-charts.[ext]',
          globals: {
            vue: 'Vue',
            'echarts/core': 'echartsLib',
            'echarts/components': 'echarts/components',
            'echarts/features': 'echarts/features',
            'echarts/renderers': 'echarts/renderers',
            'echarts/charts': 'echarts/charts',
            numerify: 'numerify',
            'utils-lite': 'utilsLite',
            'echarts-amap': 'echarts-amap',
            'echarts-liquidfill': 'echarts-liquidfill',
            'echarts-wordcloud': 'echarts-wordcloud',
            'echarts-extension-amap': 'echarts-extension-amap',
            '@v-charts2/core/vue3': 'vCore3',
            '@v-charts2/core/vue2': 'vCore2'
          }
        }
      }
    }
  })
}
