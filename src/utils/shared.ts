import { importPlugin } from '../plugins/import'
import { javascriptPlugin } from '../plugins/javascript'
import { typescriptPlugin } from '../plugins/typescript'
import { unicornPlugin } from '../plugins/unicorn'
import { type EslintSettings, type EslintRules } from './types'

const settings: EslintSettings = Object.assign({}, importPlugin.settings)

const rules: EslintRules = {
  ...javascriptPlugin.rules,
  ...typescriptPlugin.rules,
  ...importPlugin.rules,
  ...unicornPlugin.rules,

  'promise/always-return': ['error', { ignoreLastCallback: true }],

  'no-secrets/no-secrets': 'error',

  'deprecation/deprecation': 'error',
}

const testRules: EslintRules = {
  ...javascriptPlugin.testRules,
  ...typescriptPlugin.testRules,
  ...unicornPlugin.testRules,

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

export const shared = { settings, rules, testRules }
