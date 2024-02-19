import { defineConfig } from '../utils/define.js'
import { extendPluginRules } from '../utils/mappers.js'
import { shared } from '../utils/shared.js'
import * as _jestDomPlugin from 'eslint-plugin-jest-dom'

export const jestDomConfig = defineConfig({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
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
  plugins: [
    // https://github.com/testing-library/eslint-plugin-jest-dom?tab=readme-ov-file#readme
    'jest-dom',
  ],

  rules: {
    ...shared.testRules,
    ...extendPluginRules('jest-dom', _jestDomPlugin.configs.all, 'error'),
  },
})
