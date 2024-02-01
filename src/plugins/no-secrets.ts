import { type EslintPlugin } from '../utils/types'

export const noSecretsPlugin: EslintPlugin<'no-secrets'> = {
  name: 'eslint-plugin-no-secrets',
  settings: {},
  extends: [],
  rules: {
    'no-secrets/no-secrets': [
      'error',
      { ignoreContent: '^(?:ABCDE|abcde|12345)' },
    ],
  },
  testRules: {
    'no-secrets/no-secrets': 'off',
  },
}
