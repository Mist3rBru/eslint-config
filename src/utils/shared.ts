import { importPlugin } from '../plugins/import'
import { typescriptEslintPlugin } from '../plugins/typescript-eslint'
import { type EslintSettings, type EslintRules } from './types'

const settings: EslintSettings = Object.assign({}, importPlugin.settings)

const rules: EslintRules = {
  ...typescriptEslintPlugin.rules,
  ...importPlugin.rules,

  'no-void': 'error',
  'prefer-template': 'error',
  'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
  'no-duplicate-imports': 'error',

  'unicorn/no-keyword-prefix': 'off',
  'unicorn/consistent-function-scoping': 'warn',
  'unicorn/consistent-destructuring': 'error',
  'unicorn/no-array-callback-reference': 'error',
  'unicorn/prefer-spread': 'error',
  'unicorn/prefer-ternary': 'error',
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/better-regex': 'error',
  'unicorn/error-message': 'error',
  'unicorn/switch-case-braces': ['error', 'avoid'],
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-null': 'off',

  'promise/always-return': ['error', { ignoreLastCallback: true }],

  'no-secrets/no-secrets': 'error',

  'deprecation/deprecation': 'error',
}

const testRules: EslintRules = {
  ...typescriptEslintPlugin.testRules,

  'no-extra-semi': 'off',

  'unicorn/error-message': 'off',

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
