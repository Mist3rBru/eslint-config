import { type EslintRuleLevel, type EslintPlugin } from '../utils/types'

const securityPluginRules = [
  'security/detect-buffer-noassert',
  'security/detect-child-process',
  'security/detect-disable-mustache-escape',
  'security/detect-eval-with-expression',
  'security/detect-new-buffer',
  'security/detect-no-csrf-before-method-override',
  'security/detect-non-literal-fs-filename',
  'security/detect-non-literal-regexp',
  'security/detect-non-literal-require',
  'security/detect-object-injection',
  'security/detect-possible-timing-attacks',
  'security/detect-pseudoRandomBytes',
  'security/detect-unsafe-regex',
  'security/detect-bidi-characters',
] satisfies `security/${string}`[]

function reduce<TRules extends string, TRuleLevel extends EslintRuleLevel>(
  rules: TRules[],
  option: TRuleLevel
): Record<TRules, TRuleLevel> {
  return Object.fromEntries(rules.map(current => [current, option])) as Record<
    TRules,
    TRuleLevel
  >
}

export const securityPlugin: EslintPlugin<'security'> = {
  name: 'eslint-plugin-security',
  settings: {},
  extends: [],
  rules: reduce(securityPluginRules, 'warn'),
  testRules: reduce(securityPluginRules, 'off'),
}
