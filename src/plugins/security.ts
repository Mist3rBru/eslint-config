import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _securityPlugin from 'eslint-plugin-security'

// https://github.com/eslint-community/eslint-plugin-security#readme
export const securityPlugin = definePlugin({
  name: 'security',
  settings: {},
  // https://github.com/eslint-community/eslint-plugin-security/tree/main/rules
  rules: extendPluginRules(
    'security',
    _securityPlugin.configs.recommended,
    'warn'
  ),
  testRules: extendPluginRules(
    'security',
    _securityPlugin.configs.recommended,
    'off'
  ),
})
