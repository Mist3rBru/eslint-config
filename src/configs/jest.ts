import { jestPlugin } from '../plugins/jest.js'
import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'

export const jestConfig = defineConfig({
  env: {
    es2022: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  plugins: [...sharedPlugins, securityPlugin, jestPlugin],
  extendPlugins: 'testRules',
  rules: {},
})
