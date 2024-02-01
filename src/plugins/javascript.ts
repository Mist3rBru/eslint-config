import { type EslintPlugin } from '../types'

export const javascriptPlugin: EslintPlugin<string> = {
  name: '',
  extends: [],
  settings: {},
  // https://eslint.org/docs/latest/rules/
  rules: {
    // https://eslint.org/docs/latest/rules/no-void
    'no-void': 'error',

    // https://eslint.org/docs/latest/rules/prefer-template
    'prefer-template': 'error',

    // https://eslint.org/docs/latest/rules/prefer-regex-literals
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],

    // https://eslint.org/docs/latest/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',
  },
  testRules: {
    // Deprecated and conflicts with jest.Mock infer
    'no-extra-semi': 'off',
  },
}
