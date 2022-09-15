import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@components', replacement: `${process.cwd()}/src/components` }
    ]
  }
})
