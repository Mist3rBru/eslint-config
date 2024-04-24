import type { Linter } from 'eslint'

export type EslintRules<TPluginName extends string = string> = Record<
  `${string extends TPluginName ? string : `${TPluginName}/`}${string}`,
  Linter.RuleEntry
>

export interface EslintRuleMeta {
  meta: {
    deprecated?: boolean
  }
}

export interface EslintSettings {
  jest?: {
    version?: number
  }
  react?: {
    version?: 'detect'
  }
  [k: string]: unknown
}

export interface EslintPlugin<TPluginName extends string = string> {
  name: TPluginName
  settings: EslintSettings
  rules: EslintRules<TPluginName>
  testRules: EslintRules<TPluginName>
}

export interface EslintConfig {
  parser: '@typescript-eslint/parser'
  parserOptions: {
    ecmaVersion: 'latest'
    sourceType: 'module'
    ecmaFeatures?: {
      jsx?: true
    }
    [key: string]: unknown
  }
  settings?: EslintSettings
  env: {
    es2022: true
    browser?: true
    node?: true
    jest?: true
    'jest/globals'?: true
  }
  globals?: {
    React?: true
    JSX?: true
  }
  plugins: string[]
  rules: EslintRules
  overrides?: {
    files: string[]
    rules: EslintRules
  }[]
}
