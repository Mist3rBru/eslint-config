import { shared } from '../utils/shared'
import { type EslintConfig } from '../utils/types'

export const jestDomConfig: EslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest-dom'],
  extends: ['plugin:jest-dom/all'],
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
  rules: shared.testRules,
}
