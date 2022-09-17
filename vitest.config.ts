import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: [
      { find: '@components', replacement: `${process.cwd()}/src/components` },
      { find: '@mocks', replacement: `${process.cwd()}/src/mocks` }
    ]
  }
})
