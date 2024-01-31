import jest from './configs/jest.js'
import react from './configs/react.js'
import node from './configs/node.js'
import vitest from './configs/vitest.js'
import jestDom from './configs/jest-dom.js'

import { name as packageName, version as packageVersion } from '../package.json'

export = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: { jest, react, node, vitest, 'jest-dom': jestDom },
}
