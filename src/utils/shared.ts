import * as plugins from '../plugins'
import { type EslintSettings, type EslintRules } from './types'

const sharedPlugins = [
  plugins.javascriptPlugin,
  plugins.typescriptPlugin,
  plugins.importPlugin,
  plugins.promisePlugin,
  plugins.unicornPlugin,
  plugins.securityPlugin,
  plugins.noSecretsPlugin,
]

function reduce<T, TKey extends keyof T>(data: T[], key: TKey): T[TKey] {
  return data.reduce(
    (prev, current) => ({ ...prev, ...current[key] }),
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions
    {} as T[TKey]
  )
}

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
  settings: reduce(sharedPlugins, 'settings'),
  rules: reduce(sharedPlugins, 'rules'),
  testRules: reduce(sharedPlugins, 'testRules'),
}
