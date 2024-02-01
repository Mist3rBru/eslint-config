import { type EslintPlugin } from '../utils/types'

export const javascriptPlugin: EslintPlugin<string> = {
  name: '',
  extends: [],
  settings: {},
  rules: {
    'no-void': 'error',
    'prefer-template': 'error',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'no-duplicate-imports': 'error',
  },
  testRules: {
    'no-extra-semi': 'off',
  },
}
