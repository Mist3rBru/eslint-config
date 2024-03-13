import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import _prettierConfig from 'eslint-config-prettier'

export const nodeConfig = defineConfig({
  plugins: [...sharedPlugins, securityPlugin],
  extendPlugins: 'rules',
  rules: _prettierConfig.rules,
})
