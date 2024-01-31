import { type EslintRules } from '../utils/types'

const rules: EslintRules = {
  'no-void': 'error',
  'prefer-template': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'no-duplicate-imports': 'error',
}

const testRules: EslintRules = {
  'no-extra-semi': 'off',
}

export const javascriptEslintPlugin = { rules, testRules }
