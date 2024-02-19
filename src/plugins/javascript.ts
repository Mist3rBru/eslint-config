import { definePlugin } from '../utils/define.js'

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
