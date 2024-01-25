import jest from './config/jest.js'
import react from './config/react.js'
import node from './config/node.js'
import vitest from './config/vitest.js'
import jestDom from './config/jest-dom.js'

import { name as packageName, version as packageVersion } from '../package.json'

export = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: { jest, react, node, vitest, 'jest-dom': jestDom },
}
