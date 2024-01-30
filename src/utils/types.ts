export type EslintRuleLevel = 'off' | 'warn' | 'error'

export type EslintRuleOption = EslintRuleLevel | [EslintRuleLevel, ...unknown[]]

export type EslintRules = Record<string, EslintRuleOption>

export interface EslintConfig {
  parser: '@typescript-eslint/parser'
  parserOptions: {
    ecmaVersion: 'latest'
    sourceType: 'module'
    ecmaFeatures?: {
      jsx?: true
    }
  }
  settings?: {
    jest?: {
      version: number
    }
    react?: {
      version: 'detect'
    }
  }
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
