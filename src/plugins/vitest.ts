import { definePlugin } from '../utils/define-plugin.js'
import _vitestPlugin from 'eslint-plugin-vitest'

// https://github.com/veritem/eslint-plugin-vitest?tab=readme-ov-file#readme
export const vitestPlugin = definePlugin({
  name: 'vitest',
  source: _vitestPlugin,
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  globals: _vitestPlugin.environments.env.globals,
  rules: {},
  // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules
  testRules: {
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/assertion-type.md
    'vitest/assertion-type': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
    'vitest/consistent-test-filename': [
      'error',
      { pattern: '.*\\.spec\\.[tj]sx?$' },
    ],

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
    'vitest/consistent-test-it': [
      'error',
      {
        fs: 'it',
        withinDescribe: 'it',
      },
    ],

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
    'vitest/expect-expect': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expect.md
    'vitest/max-expect': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
    'vitest/max-expects': ['error', { max: 10 }],

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
    'vitest/max-nested-describe': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
    'vitest/no-alias-methods': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
    'vitest/no-commented-out-tests': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
    'vitest/no-conditional-expect': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
    'vitest/no-conditional-in-test': 'warn',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
    'vitest/no-conditional-tests': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
    'vitest/no-disabled-tests': 'warn',

    // Deprecated https://github.com/veritem/eslint-plugin-vitest/issues/158
    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
    'vitest/no-done-callback': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
    'vitest/no-duplicate-hooks': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
    'vitest/no-focused-tests': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
    'vitest/no-hooks': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
    'vitest/no-identical-title': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
    'vitest/no-import-node-test': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
    'vitest/no-interpolation-in-snapshots': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
    'vitest/no-large-snapshots': 'warn',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
    'vitest/no-mocks-import': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
    'vitest/no-restricted-matchers': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
    'vitest/no-restricted-vi-methods': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
    'vitest/no-standalone-expect': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
    'vitest/no-test-prefixes': 'warn',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
    'vitest/no-test-return-statement': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
    'vitest/prefer-called-with': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
    'vitest/prefer-comparison-matcher': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
    'vitest/prefer-each': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
    'vitest/prefer-equality-matcher': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
    'vitest/prefer-expect-assertions': 'off',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
    'vitest/prefer-expect-resolves': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
    'vitest/prefer-hooks-in-order': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
    'vitest/prefer-hooks-on-top': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
    'vitest/prefer-lowercase-title': [
      'error',
      { ignoreTopLevelDescribe: true },
    ],

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
    'vitest/prefer-mock-promise-shorthand': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
    'vitest/prefer-snapshot-hint': ['error', 'multi'],

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
    'vitest/prefer-spy-on': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
    'vitest/prefer-strict-equal': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
    'vitest/prefer-to-be-falsy': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
    'vitest/prefer-to-be-object': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
    'vitest/prefer-to-be-truthy': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
    'vitest/prefer-to-be': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
    'vitest/prefer-to-contain': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
    'vitest/prefer-to-have-length': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
    'vitest/prefer-todo': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
    'vitest/require-hook': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
    'vitest/require-local-test-context-for-concurrent-snapshots': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
    'vitest/require-to-throw-message': 'warn',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
    'vitest/require-top-level-describe': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/unbound-method.md
    'vitest/unbound-method': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
    'vitest/valid-describe-callback': 'error',

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
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

    // https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
    'vitest/valid-title': [
      'error',
      {
        mustMatch: {
          it: '^should',
        },
      },
    ],
  },
})
