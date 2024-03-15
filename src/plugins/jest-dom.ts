import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import * as _jestDomPlugin from 'eslint-plugin-jest-dom'

// https://github.com/testing-library/eslint-plugin-jest-dom?tab=readme-ov-file#readme
export const jestDomPlugin = definePlugin({
  name: 'jest-dom',
  source: _jestDomPlugin,
  rules: {},
  // https://github.com/testing-library/eslint-plugin-jest-dom/tree/main/docs/rules
  testRules: extendPluginRules('jest-dom', _jestDomPlugin.configs.all, 'error'),
})
