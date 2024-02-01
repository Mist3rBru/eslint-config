export type EslintRuleLevel = 'off' | 'warn' | 'error'

export type EslintRuleOption = EslintRuleLevel | [EslintRuleLevel, ...unknown[]]

export type EslintRules<TPluginName extends string = string> = Record<
  `${string extends TPluginName ? string : `${TPluginName}/`}${string}`,
  EslintRuleOption
>

export interface EslintSettings {
  jest?: {
    version: number
  }
  react?: {
    version: 'detect'
  }
  [key: string]: unknown
}

export interface EslintConfig {
  parser: '@typescript-eslint/parser'
  parserOptions: {
    ecmaVersion: 'latest'
    sourceType: 'module'
    ecmaFeatures?: {
      jsx?: true
    }
  }
  settings?: EslintSettings
  env: {
    es2022: true
    browser?: true
    node?: true
    vitest?: true
    jest?: true
    'jest/globals'?: true
  }
  globals?: {
    React?: true
    JSX?: true
  }
  plugins: string[]
  extends: string[]
  rules: EslintRules
  overrides?: {
    files: string[]
    rules: EslintRules
  }[]
}

export type EslintPluginName<TPluginName extends string = string> =
  | `eslint-plugin-${TPluginName}`
  | '@typescript-eslint'
  | ''

export type EslintExtendPlugin = `plugin:${string}`

export interface EslintPlugin<TPluginName extends string> {
  name: EslintPluginName<TPluginName>
  extends: EslintExtendPlugin[]
  settings: EslintSettings
  rules: EslintRules<TPluginName>
  testRules: EslintRules<TPluginName>
}
