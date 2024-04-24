import { defineConfig } from 'vitest/config'

// https://vitest.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    bail: 1,
    environment: 'node',
    coverage: {
      include: ['src/**/*.ts'],
      exclude: ['src/@types/*', 'src/types.ts'],
    },
  },
})
