import { jestDomPlugin } from '../plugins/jest-dom.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'
import { GLOB_TESTS } from '../utils/globs.js'

export const jestDomConfig = defineConfig({
  files: GLOB_TESTS,
  plugins: [...sharedPlugins, jestDomPlugin],
  extendPlugins: 'testRules',
  rules: {},
})
