import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'

export const nodeConfig = defineConfig({
  env: {
    es2022: true,
    node: true,
  },
  plugins: [...sharedPlugins, securityPlugin],
  extendPlugins: 'rules',
  rules: {},
})
