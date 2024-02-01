import * as plugins from '../plugins'
import { type EslintSettings, type EslintRules } from './types'

const sharedPlugins = [
  plugins.javascriptPlugin,
  plugins.typescriptPlugin,
  plugins.importPlugin,
  plugins.promisePlugin,
  plugins.unicornPlugin,
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

const rules = {
  'deprecation/deprecation': 'error',
}

const testRules = {
  'security/detect-buffer-noassert': 'off',
  'security/detect-child-process': 'off',
  'security/detect-disable-mustache-escape': 'off',
  'security/detect-eval-with-expression': 'off',
  'security/detect-new-buffer': 'off',
  'security/detect-no-csrf-before-method-override': 'off',
  'security/detect-non-literal-fs-filename': 'off',
  'security/detect-non-literal-regexp': 'off',
  'security/detect-non-literal-require': 'off',
  'security/detect-object-injection': 'off',
  'security/detect-possible-timing-attacks': 'off',
  'security/detect-pseudoRandomBytes': 'off',
  'security/detect-unsafe-regex': 'off',
  'security/detect-bidi-characters': 'off',
}
