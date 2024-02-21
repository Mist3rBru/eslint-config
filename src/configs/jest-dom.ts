import { jestDomPlugin } from '../plugins/jest-dom.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'

export const jestDomConfig = defineConfig({
  env: {
    es2022: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  plugins: [...sharedPlugins, jestDomPlugin],
  extendPlugins: 'testRules',
  rules: {},
})
