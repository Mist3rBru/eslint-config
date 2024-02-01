import * as plugins from '../plugins'
import { reduceByKey } from './mappers'
import { type EslintSettings, type EslintRules } from '../types'

const sharedPlugins = [
  plugins.javascriptPlugin,
  plugins.typescriptPlugin,
  plugins.importPlugin,
  plugins.promisePlugin,
  plugins.unicornPlugin,
  plugins.securityPlugin,
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
  plugins: sharedPlugins
    .map(plugin => plugin.name.replace('eslint-plugin-', ''))
    .filter(Boolean),
  extends: sharedPlugins.flatMap(plugin => plugin.extends),
  settings: reduceByKey(sharedPlugins, 'settings'),
  rules: reduceByKey(sharedPlugins, 'rules'),
  testRules: reduceByKey(sharedPlugins, 'testRules'),
}
