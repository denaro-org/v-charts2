import pkg from './package.json'
import { defineConfig } from 'vite'
import Banner from 'vite-plugin-banner'
import copy from 'rollup-plugin-copy'
import { resolve } from 'path'

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      Banner(
        `/* eslint-disable */\n/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: vxhly <pengchengou@gmail.com>\n */`
      ),
      copy({
        targets: [
          {
            src: '../core/src/style', dest: 'lib'
          },
          {
            src: 'src/index.js', dest: 'lib'
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
        entry: resolve(__dirname, `src/index-${mode === 'vue3' ? 'vue3' : 'vue2'}.js`),
        name: '@v-chartsv2/histogram',
        fileName: 'v-charts.histogram'
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
      sourcemap: false,
      rollupOptions: {
        external: [
          // 'vue',
          'echarts/core',
          'echarts/components',
          'echarts/features',
          'echarts/renderers',
          'echarts/charts',
          'numerify',
          'utils-lite'
        ],
        output: {
          exports: 'named',
          extend: true,
          inlineDynamicImports: true,
          assetFileNames: 'v-charts.[ext]',
          globals: {
            // vue: 'Vue',
            'echarts/core': 'echartsLib',
            'echarts/components': 'echarts/components',
            'echarts/features': 'echarts/features',
            'echarts/renderers': 'echarts/renderers',
            'echarts/charts': 'echarts/charts',
            numerify: 'numerify',
            'utils-lite': 'utilsLite'
          }
        }
      }
    }
  })
}
