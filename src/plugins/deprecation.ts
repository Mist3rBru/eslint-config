import { definePlugin } from '../utils/define-plugin.js'

// https://github.com/gund/eslint-plugin-deprecation#readme
export const deprecationPlugin = definePlugin({
  name: 'deprecation',
  settings: {},
  rules: {
    // https://github.com/gund/eslint-plugin-deprecation/blob/master/src/rules/deprecation.md
    'deprecation/deprecation': 'error',
  },
  testRules: {},
})
