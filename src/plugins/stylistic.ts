import { definePlugin } from '../utils/define-plugin.js'
import _stylisticPlugin from '@stylistic/eslint-plugin'

// https://eslint.style/guide/getting-started
export const stylisticPlugin = definePlugin({
  name: '@stylistic',
  settings: {},
  // https://eslint.style/packages/default
  rules: {
    ...Object.fromEntries(
      Object.keys(_stylisticPlugin.rules).map(rule => [
        `@stylistic/${rule}`,
        'off',
      ])
    ),

    // https://eslint.style/rules/default/padding-line-between-statements
    '@stylistic/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'interface',
          'type',
          'block',
          'block-like',
          'class',
          'export',
          'for',
          'function',
          'do',
          'iife',
          'continue',
          'return',
          'switch',
          'try',
          'while',
          'throw',
        ],
      },
    ],
  },
  testRules: {},
})
