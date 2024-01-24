import { sharedTestRules } from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  extends: ['plugin:jest/all'],
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
  rules: {
    ...sharedTestRules,

    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-expect-assertions': 'off',
    'jest/require-to-throw-message': 'off',
    'jest/no-untyped-mock-factory': 'off',
    'jest/prefer-each': 'off',
    'jest/no-hooks': 'off',
    'jest/max-expects': ['warn', { max: 10 }],
    'jest/no-disabled-tests': 'warn',

    'jest/unbound-method': 'error',
    '@typescript-eslint/unbound-method': 'off',
  },
}
