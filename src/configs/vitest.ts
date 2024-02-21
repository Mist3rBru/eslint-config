import { vitestPlugin } from '../plugins/vitest.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'

export const vitestConfig = defineConfig({
  env: {
    es2022: true,
    node: true,
    vitest: true,
  },
  plugins: [...sharedPlugins, vitestPlugin],
  extendPlugins: 'testRules',
  rules: {},
})
