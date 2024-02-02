import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

// https://vitest.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
  },
  resolve: {
    alias: {
      '#': resolve('src'),
    },
  },
})
