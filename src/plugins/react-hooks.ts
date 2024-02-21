import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _reactHooksPlugin from 'eslint-plugin-react-hooks'

// https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#readme
export const reactHooksPlugin = definePlugin({
  name: 'react-hooks',
  settings: {},
  rules: extendPluginRules(
    'react-hooks',
    _reactHooksPlugin.configs.recommended
  ),
  testRules: {},
})
