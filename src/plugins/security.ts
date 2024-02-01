import { mapRules } from '../utils/mappers.js'
import { type EslintPlugin } from '../types.js'

const securityPluginRules = [
  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-buffer-noassert.md
  'security/detect-buffer-noassert',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-child-process.md
  'security/detect-child-process',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-disable-mustache-escape.md
  'security/detect-disable-mustache-escape',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-eval-with-expression.md
  'security/detect-eval-with-expression',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-new-buffer.md
  'security/detect-new-buffer',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-no-csrf-before-method-override.md
  'security/detect-no-csrf-before-method-override',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-fs-filename.md
  'security/detect-non-literal-fs-filename',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-regexp.md
  'security/detect-non-literal-regexp',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-non-literal-require.md
  'security/detect-non-literal-require',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-object-injection.md
  'security/detect-object-injection',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-possible-timing-attacks.md
  'security/detect-possible-timing-attacks',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-pseudoRandomBytes.md
  'security/detect-pseudoRandomBytes',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-unsafe-regex.md
  'security/detect-unsafe-regex',

  // https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-bidi-characters.md
  'security/detect-bidi-characters',
] satisfies `security/${string}`[]

// https://github.com/eslint-community/eslint-plugin-security#readme
export const securityPlugin: EslintPlugin<'security'> = {
  name: 'security',
  settings: {},
  extends: [],
  // Only warns because it emits a lot of false positives which need triage by a human.
  // https://github.com/eslint-community/eslint-plugin-security/tree/main/rules
  rules: mapRules(securityPluginRules, 'warn'),
  testRules: mapRules(securityPluginRules, 'off'),
}
