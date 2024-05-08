import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

const deps = Object.keys(packageJson.dependencies)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // 忽略打包vue文件
      external(id) {
        return deps.some(k => new RegExp(`^${k}`).test(id))
      }
    }
  }
})
