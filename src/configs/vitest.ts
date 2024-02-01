import { shared } from '../utils/shared.js'
import { type EslintConfig } from '../utils/types.js'

export const vitestConfig: EslintConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  env: {
    es2022: true,
    node: true,
    vitest: true,
  },
  plugins: ['vitest'],
  extends: [],
  rules: {
    ...shared.testRules,

    /**
     * Rules: https://github.com/veritem/eslint-plugin-vitest/tree/main/docs/rules
     */
    'vitest/assertion-type': 'error',
    'vitest/consistent-test-filename': [
      'error',
      { pattern: '.*\\.spec\\.[tj]sx?$' },
    ],
    'vitest/consistent-test-it': [
      'error',
      {
        fs: 'it',
        withinDescribe: 'it',
      },
    ],
    'vitest/expect-expect': 'error',
    'vitest/max-expect': 'off',
    'vitest/max-expects': ['error', { max: 10 }],
    'vitest/max-nested-describe': 'error',
    'vitest/no-alias-methods': 'error',
    'vitest/no-commented-out-tests': 'error',
    'vitest/no-conditional-expect': 'error',
    'vitest/no-conditional-in-test': 'warn',
    'vitest/no-conditional-tests': 'error',
    'vitest/no-disabled-tests': 'warn',
    // Deprecated: https://github.com/veritem/eslint-plugin-vitest/issues/158
    'vitest/no-done-callback': 'off',
    'vitest/no-duplicate-hooks': 'error',
    'vitest/no-focused-tests': 'error',
    'vitest/no-hooks': 'off',
    'vitest/no-identical-title': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/no-interpolation-in-snapshots': 'error',
    'vitest/no-large-snapshots': 'warn',
    'vitest/no-mocks-import': 'error',
    'vitest/no-restricted-matchers': 'off',
    'vitest/no-restricted-vi-methods': 'off',
    'vitest/no-standalone-expect': 'error',
    'vitest/no-test-prefixes': 'warn',
    'vitest/no-test-return-statement': 'error',
    'vitest/prefer-called-with': 'error',
    'vitest/prefer-comparison-matcher': 'error',
    'vitest/prefer-each': 'off',
    'vitest/prefer-equality-matcher': 'error',
    'vitest/prefer-expect-assertions': 'off',
    'vitest/prefer-expect-resolves': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    'vitest/prefer-lowercase-title': [
      'error',
      { ignoreTopLevelDescribe: true },
    ],
    'vitest/prefer-mock-promise-shorthand': 'error',
    'vitest/prefer-snapshot-hint': ['error', 'multi'],
    'vitest/prefer-spy-on': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be-falsy': 'error',
    'vitest/Update prefer-to-be-falsy': 'error',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-be-truthy': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-contain': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-todo': 'error',
    'vitest/require-hook': 'error',
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
    'vitest/require-to-throw-message': 'warn',
    'vitest/require-top-level-describe': 'error',
    'vitest/unbound-method': 'error',
    '@typescript-eslint/unbound-method': 'off',
    'vitest/valid-describe-callback': 'error',
    'vitest/valid-expect': [
      'error',
      {
        alwaysAwait: true,
        asyncMatchers: [
          'toResolve',
          'toReject',
          'toBeResolved',
          'toBeRejected',
        ],
        minArgs: 1,
        maxArgs: 2,
      },
    ],
    'vitest/valid-title': [
      'error',
      {
        mustMatch: {
          it: '^should',
        },
      },
    ],
  },
}
