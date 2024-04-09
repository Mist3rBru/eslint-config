import { definePlugin } from '../utils/define-plugin.js'
import * as _deprecationPlugin from 'eslint-plugin-deprecation'

// https://github.com/gund/eslint-plugin-deprecation#readme
export const deprecationPlugin = definePlugin({
  name: 'deprecation',
  source: _deprecationPlugin,
  rules: {
    // https://github.com/gund/eslint-plugin-deprecation/blob/master/src/rules/deprecation.md
    'deprecation/deprecation': 'error',
  },
  testRules: {},
})
