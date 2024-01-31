import * as plugins from '../plugins'
import {
  type EslintSettings,
  type EslintRules,
  type EslintPluginName,
} from './types'

const sharedPlugins = [
  plugins.javascriptPlugin,
  plugins.typescriptPlugin,
  plugins.importPlugin,
  plugins.unicornPlugin,
]

function reduce<T, TKey extends keyof T>(data: T[], key: TKey): T[TKey] {
  return data.reduce(
    (prev, current) => ({ ...prev, ...current[key] }),
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions
    {} as T[TKey]
  )
}

interface Shared {
  plugins: EslintPluginName[]
  settings: EslintSettings
  rules: EslintRules
  testRules: EslintRules
}

export const shared: Shared = {
  plugins: sharedPlugins
    .map(plugin => plugin.name)
    .filter(Boolean) as EslintPluginName[],
  settings: reduce(sharedPlugins, 'settings'),
  rules: reduce(sharedPlugins, 'rules'),
  testRules: reduce(sharedPlugins, 'testRules'),
}

const rules = {
  'promise/always-return': ['error', { ignoreLastCallback: true }],

  'no-secrets/no-secrets': 'error',

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

  'no-secrets/no-secrets': 'off',
}
