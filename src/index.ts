import { jestConfig } from './configs/jest.js'
import { reactConfig } from './configs/react.js'
import { nodeConfig } from './configs/node.js'
import { vitestConfig } from './configs/vitest.js'
import { jestDomConfig } from './configs/jest-dom.js'

import { name as packageName, version as packageVersion } from '../package.json'

export = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: {
    jest: jestConfig,
    react: reactConfig,
    node: nodeConfig,
    vitest: vitestConfig,
    'jest-dom': jestDomConfig,
  },
}
