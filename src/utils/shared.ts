import * as plugins from '../plugins/index.js'
import { reduceByKey } from './mappers.js'
import { type EslintSettings, type EslintRules } from '../types.js'

const sharedPlugins = [
  plugins.javascriptPlugin,
  plugins.typescriptPlugin,
  plugins.importPlugin,
  plugins.promisePlugin,
  plugins.unicornPlugin,
  plugins.noSecretsPlugin,
  plugins.deprecationPlugin,
]

interface Shared {
  plugins: string[]
  extends: string[]
  settings: EslintSettings
  rules: EslintRules
  testRules: EslintRules
}

export const shared: Shared = {
  plugins: sharedPlugins.map(plugin => plugin.name).filter(Boolean),
  extends: sharedPlugins.flatMap(plugin => plugin.extends),
  settings: reduceByKey(sharedPlugins, 'settings'),
  rules: reduceByKey(sharedPlugins, 'rules'),

  testRules: reduceByKey(
    [...sharedPlugins, plugins.securityPlugin],
    'testRules'
  ),
}
