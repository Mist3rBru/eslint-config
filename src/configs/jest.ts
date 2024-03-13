import { jestPlugin } from '../plugins/jest.js'
import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'

export const jestConfig = defineConfig({
  plugins: [...sharedPlugins, securityPlugin, jestPlugin] as const,
  extendPlugins: 'testRules',
  rules: {},
})
