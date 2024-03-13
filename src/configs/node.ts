import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import { GLOB_TS } from '../utils/globs.js'
import _prettierConfig from 'eslint-config-prettier'

export const nodeConfig = defineConfig({
  files: [GLOB_TS],
  plugins: [...sharedPlugins, securityPlugin],
  extendPlugins: 'rules',
  rules: _prettierConfig.rules,
})
