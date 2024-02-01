import { type EslintPlugin } from '../types'

// https://github.com/nickdeis/eslint-plugin-no-secrets#readme
export const noSecretsPlugin: EslintPlugin<'no-secrets'> = {
  name: 'eslint-plugin-no-secrets',
  settings: {},
  extends: [],
  // https://github.com/nickdeis/eslint-plugin-no-secrets/tree/master/tests/lib/rules
  rules: {
    // https://github.com/nickdeis/eslint-plugin-no-secrets/blob/master/tests/lib/rules/no-secrets.js
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: '^(?:ABCDE|abcde|12345)' },
    ],
  },
  testRules: {
    // Disabled in favor of tests with mocked data
    'no-secrets/no-secrets': 'off',
  },
}
