import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import { GLOB_TS } from '../utils/globs.js'

export const nodeConfig = defineConfig({
  files: [GLOB_TS],
  plugins: [...sharedPlugins, securityPlugin],
  extendPlugins: 'rules',
  rules: {},
})
