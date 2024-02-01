import { shared } from '../utils/shared'
import { type EslintConfig } from '../utils/types'

export const jestDomConfig: EslintConfig = {
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
  plugins: ['jest-dom'],
  extends: ['plugin:jest-dom/all'],
  rules: shared.testRules,
}
