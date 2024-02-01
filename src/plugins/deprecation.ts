import { type EslintPlugin } from '../types.js'

// https://github.com/gund/eslint-plugin-deprecation#readme
export const deprecationPlugin: EslintPlugin<'deprecation'> = {
  name: 'deprecation',
  settings: {},
  extends: [],
  rules: {
    'deprecation/deprecation': 'error',
  },
  testRules: {},
}
