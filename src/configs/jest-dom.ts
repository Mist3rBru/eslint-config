import { jestDomPlugin } from '../plugins/jest-dom.js'
import { sharedPlugins } from '../utils/constants.js'
import { defineConfig } from '../utils/define-config.js'

export const jestDomConfig = defineConfig({
  plugins: [...sharedPlugins, jestDomPlugin],
  extendPlugins: 'testRules',
  rules: {},
})
