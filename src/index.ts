import jest from './jest.js'
import react from './react.js'
import node from './node.js'

import { name as packageName, version as packageVersion } from '../package.json'

module.exports = {
  meta: {
    name: packageName,
    version: packageVersion,
  },
  configs: { jest, react, node },
}
