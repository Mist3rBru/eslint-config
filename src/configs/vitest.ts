import { securityPlugin } from '../plugins/security.js'
import { vitestPlugin } from '../plugins/vitest.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import { GLOB_TESTS } from '../utils/globs.js'

export const vitestConfig = defineConfig({
  files: GLOB_TESTS,
  plugins: [...sharedPlugins, securityPlugin, vitestPlugin],
  extendPlugins: 'testRules',
  rules: {},
})
