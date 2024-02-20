import { definePlugin } from '../utils/define.js'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const equivalents = [
  'block-spacing',
  'camelcase',
  'class-methods-use-this',
  'comma-spacing',
  'dot-notation',
  'default-param-last',
  'brace-style',
  'func-call-spacing',
  'indent',
  'init-declarations',
  'key-spacing',
  'keyword-spacing',
  'lines-between-class-members',
  'max-params',
  'no-array-constructor',
  'no-dupe-class-members',
  'no-empty-function',
  'no-extra-parens',
  'no-implied-eval',
  'no-invalid-this',
  'no-loop-func',
  'no-loss-of-precision',
  'no-magic-numbers',
  'no-redeclare',
  'no-restricted-imports',
  'no-shadow',
  'no-throw-literal',
  'no-multiple-empty-lines',
  'no-return-await',
  'no-undef',
  'no-unused-vars',
  'no-unused-expressions',
  'no-use-before-define',
  'no-useless-constructor',
  'object-curly-spacing',
  'prefer-destructuring',
  'quotes',
  'semi',
  'space-before-blocks',
  'space-before-function-paren',
  'space-infix-ops',
] as const

export const javascriptPlugin = definePlugin<string>({
  name: '',
  settings: {},
  // https://eslint.org/docs/latest/rules/
  rules: {
    // https://eslint.org/docs/latest/rules/no-void
    'no-void': ['error', { allowAsStatement: true }],

    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',

    // https://eslint.org/docs/latest/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',
  },
  testRules: {
    // Deprecated and conflicts with jest.Mock infer
    // https://eslint.org/docs/latest/rules/no-extra-semi
    'no-extra-semi': 'off',
  },
})
