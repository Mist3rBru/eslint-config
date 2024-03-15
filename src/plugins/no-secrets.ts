import { definePlugin } from '../utils/define-plugin.js'
import _noSecretsPlugin from 'eslint-plugin-no-secrets'

// https://github.com/nickdeis/eslint-plugin-no-secrets#readme
export const noSecretsPlugin = definePlugin({
  name: 'no-secrets',
  source: _noSecretsPlugin,
  // https://github.com/nickdeis/eslint-plugin-no-secrets/tree/master/tests/lib/rules
  rules: {
    // https://github.com/nickdeis/eslint-plugin-no-secrets/blob/master/tests/lib/rules/no-secrets.md
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: '^(?:ABCDE|abcde|12345)' },
    ],
  },
  testRules: {
    // Disabled in favor of tests with mocked data
    'no-secrets/no-secrets': 'off',
  },
})
