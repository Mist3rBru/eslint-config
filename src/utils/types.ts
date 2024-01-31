export type EslintRuleLevel = 'off' | 'warn' | 'error'

export type EslintRuleOption = EslintRuleLevel | [EslintRuleLevel, ...unknown[]]

export type EslintRules = Record<string, EslintRuleOption>

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

export type EslintPluginName = `eslint-plugin-${string}` | '@typescript-eslint'

export interface EslintPlugin {
  name: EslintPluginName | undefined
  extends: `plugin:${string}`[]
  settings: EslintSettings
  rules: EslintRules
  testRules: EslintRules
}
