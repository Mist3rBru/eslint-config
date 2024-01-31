import { shared } from '../utils/shared.js'
import { type EslintConfig } from '../utils/types.js'

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
    ...shared.testRules,

    /**
     * Rules: https://github.com/jest-community/eslint-plugin-jest/tree/main/docs/rules
     */
    'jest/consistent-test-it': [
      'error',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
    'jest/max-expects': ['warn', { max: 10 }],
    'jest/max-nested-describe': ['warn', { max: 3 }],
    'jest/no-conditional-in-test': 'warn',
    'jest/no-done-callback': 'warn',
    'jest/no-hooks': 'off',
    'jest/no-untyped-mock-factory': 'off',
    'jest/prefer-each': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/require-hook': ['error', { allowedFunctionCalls: [] }],
    'jest/require-to-throw-message': 'warn',
    'jest/require-top-level-describe': [
      'error',
      { maxNumberOfTopLevelDescribes: 1 },
    ],
    'jest/unbound-method': 'error',
    '@typescript-eslint/unbound-method': 'off',
    'jest/valid-expect': [
      'error',
      {
        alwaysAwait: true,
        asyncMatchers: ['toResolve', 'toReject'],
        minArgs: 1,
        maxArgs: 2,
      },
    ],
    'jest/valid-title': [
      'error',
      {
        mustMatch: {
          it: '^should',
        },
      },
    ],
  },
} satisfies EslintConfig
