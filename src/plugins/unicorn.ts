import { type EslintRules } from '../utils/types'

const rules: EslintRules = {
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
}

const testRules: EslintRules = {
  'unicorn/error-message': 'off',
}

export const unicornPlugin = { rules, testRules }
