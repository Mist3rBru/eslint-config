import { jestPlugin } from '../plugins/jest.js'
import { securityPlugin } from '../plugins/security.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import { GLOB_TESTS } from '../utils/globs.js'

export const jestConfig = defineConfig({
  files: GLOB_TESTS,
  plugins: [...sharedPlugins, securityPlugin, jestPlugin] as const,
  extendPlugins: 'testRules',
  rules: {},
})
