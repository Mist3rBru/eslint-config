import { sharedTestRules } from '../shared.js'
import { type EslintConfig } from '../types.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  extends: [],
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
    'jest/expect-expect': 'error',
    'jest/max-expects': ['warn', { max: 10 }],
    'jest/max-nested-describe': ['warn', { max: 3 }],
    'jest/no-alias-methods': 'error',
    'jest/no-commented-out-tests': 'warn',
    'jest/no-conditional-expect': 'error',
    'jest/no-conditional-in-test': 'warn',
    'jest/no-confusing-set-timeout': 'error',
    'jest/no-deprecated-functions': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-done-callback': 'warn',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-export': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': 'off',
    'jest/no-identical-title': 'error',
    'jest/no-if': 'off',
    'jest/no-interpolation-in-snapshots': 'error',
    'jest/no-jasmine-globals': 'error',
    'jest/no-large-snapshots': ['warn', { maxSize: 12, inlineMaxSize: 6 }],
    'jest/no-mocks-import': 'error',
    'jest/no-restricted-jest-methods': 'off',
    'jest/no-restricted-matchers': 'off',
    'jest/no-standalone-expect': 'error',
    'jest/no-test-prefixes': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/no-untyped-mock-factory': 'off',
    'jest/prefer-called-with': 'error',
    'jest/prefer-comparison-matcher': 'error',
    'jest/prefer-each': 'off',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-snapshot-hint': ['error', 'multi'],
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/prefer-to-be': 'error',
    'jest/prefer-to-contain': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/prefer-todo': 'error',
    'jest/require-hook': [
      'error',
      {
        allowedFunctionCalls: [],
      },
    ],
    'jest/require-to-throw-message': 'warn',
    'jest/require-top-level-describe': [
      'error',
      {
        maxNumberOfTopLevelDescribes: 1,
      },
    ],
    'jest/unbound-method': 'error',
    '@typescript-eslint/unbound-method': 'off',
    'jest/valid-describe-callback': 'error',
    'jest/valid-expect-in-promise': 'error',
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
