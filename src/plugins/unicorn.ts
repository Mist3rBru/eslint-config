import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _unicornPlugin from 'eslint-plugin-unicorn'

// https://github.com/sindresorhus/eslint-plugin-unicorn#readme
export const unicornPlugin = definePlugin({
  name: 'unicorn',
  source: _unicornPlugin,
  // https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
  rules: {
    ...extendPluginRules('unicorn', _unicornPlugin.configs.all),

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-keyword-prefix.md
    'unicorn/no-keyword-prefix': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-function-scoping.md
    'unicorn/consistent-function-scoping': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-destructuring.md
    'unicorn/consistent-destructuring': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-callback-reference.md
    'unicorn/no-array-callback-reference': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
    'unicorn/prefer-spread': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-ternary.md
    'unicorn/prefer-ternary': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md
    'unicorn/prefer-top-level-await': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
    'unicorn/better-regex': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
    'unicorn/error-message': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/switch-case-braces.md
    'unicorn/switch-case-braces': ['error', 'avoid'],

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    'unicorn/no-array-reduce': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    'unicorn/no-null': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/template-indent.md
    'unicorn/template-indent': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/empty-brace-spaces.md
    'unicorn/empty-brace-spaces': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-nested-ternary.md
    'unicorn/no-nested-ternary': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/number-literal-case.md
    'unicorn/number-literal-case': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-empty-array-spread.md
    'unicorn/consistent-empty-array-spread': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-raw.md
    'unicorn/prefer-string-raw': 'off',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-invalid-fetch-options.md
    'unicorn/no-invalid-fetch-options': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-magic-array-flat-depth.md
    'unicorn/no-magic-array-flat-depth': 'warn',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md
    'unicorn/prefer-structured-clone': 'error',

    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-at.md
    'unicorn/prefer-at': 'off',
  },
  testRules: {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/error-message.md
    'unicorn/error-message': 'off',
  },
})
