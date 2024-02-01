import { type EslintPlugin } from '../utils/types'

export const deprecationPlugin: EslintPlugin<'deprecation'> = {
  name: 'eslint-plugin-deprecation',
  settings: {},
  extends: [],
  rules: {
    'deprecation/deprecation': 'error',
  },
  testRules: {},
}
