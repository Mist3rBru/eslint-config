import { definePlugin } from '../utils/define.js'

// https://github.com/nickdeis/eslint-plugin-no-secrets#readme
export const noSecretsPlugin = definePlugin({
  name: 'no-secrets',
  settings: {},
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
