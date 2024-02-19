import * as plugins from '../plugins/index.js'
import { type EslintRules, type EslintSettings } from '../types.js'
import { reduceByKey } from './mappers.js'

export const sharedPlugins = [
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
  settings: EslintSettings
  rules: EslintRules
  testRules: EslintRules
}

export const shared: Shared = {
  plugins: sharedPlugins.map(plugin => plugin.name).filter(Boolean),
  settings: reduceByKey(sharedPlugins, 'settings'),
  rules: reduceByKey(sharedPlugins, 'rules'),
  testRules: reduceByKey(
    [...sharedPlugins, plugins.securityPlugin],
    'testRules'
  ),
}
