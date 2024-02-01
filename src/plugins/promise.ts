import { type EslintPlugin } from '../utils/types'

export const promisePlugin: EslintPlugin<'promise'> = {
  name: 'eslint-plugin-promise',
  settings: {},
  extends: [],
  rules: {
    /**
     * Rules: https://github.com/eslint-community/eslint-plugin-promise/tree/main/docs/rules
     */
    'promise/always-return': ['error', { ignoreLastCallback: true }],
    'promise/avoid-new': 'off',
    'promise/catch-or-return': [
      'error',
      {
        allowThen: false,
        allowFinally: true,
      },
    ],
    'promise/param-names': 'error',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/no-return-wrap': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-multiple-resolved': 'error',
  },
  testRules: {},
}
