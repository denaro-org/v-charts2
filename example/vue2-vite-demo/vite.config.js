import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import commonjs from 'vite-plugin-commonjs'
import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin(), commonjs()],
  build: {
    rollupOptions: {
      // 忽略打包vue文件
      external(id) {
        return deps.some(k => new RegExp(`^${k}`).test(id))
      }
    }
  }
})
