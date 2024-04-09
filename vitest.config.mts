import { defineConfig } from 'vitest/config'

// https://vitest.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/@types/*', 'src/types.ts', 'src/index.ts'],
    },
  },
})
