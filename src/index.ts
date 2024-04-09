import { version as packageVersion } from '../package.json'
import { jestDomConfig } from './configs/jest-dom.js'
import { jestConfig } from './configs/jest.js'
import { nextConfig } from './configs/next.js'
import { nodeConfig } from './configs/node.js'
import { reactConfig } from './configs/react.js'
import { vitestConfig } from './configs/vitest.js'

export = {
  meta: {
    name: 'eslint-plugin-mist3rbru',
    version: packageVersion,
  },
  configs: {
    jest: jestConfig,
    react: reactConfig,
    next: nextConfig,
    node: nodeConfig,
    vitest: vitestConfig,
    'jest-dom': jestDomConfig,
  },
}
