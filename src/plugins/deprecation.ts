import { type EslintPlugin } from '../types'

// https://github.com/gund/eslint-plugin-deprecation#readme
export const deprecationPlugin: EslintPlugin<'deprecation'> = {
  name: 'eslint-plugin-deprecation',
  settings: {},
  extends: [],
  rules: {
    'deprecation/deprecation': 'error',
  },
  testRules: {},
}
