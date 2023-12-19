import jest from './jest.js'
import react from './react.js'
import node from './node.js'
import vitest from './vitest.js'

import { name as packageName, version as packageVersion } from '../package.json'

export = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: { jest, react, node, vitest },
}
