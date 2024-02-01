import { type EslintPlugin } from '../utils/types'

export const unicornPlugin: EslintPlugin<'unicorn'> = {
  name: 'eslint-plugin-unicorn',
  settings: {},
  extends: ['plugin:unicorn/all'],
  rules: {
    'unicorn/no-keyword-prefix': 'off',
    'unicorn/consistent-function-scoping': 'warn',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/better-regex': 'error',
    'unicorn/error-message': 'error',
    'unicorn/switch-case-braces': ['error', 'avoid'],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-null': 'off',
  },
  testRules: {
    'unicorn/error-message': 'off',
  },
}
