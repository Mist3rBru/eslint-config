import type { ESLint, Linter } from 'eslint'

export type EslintRules<TPluginName extends string = string> = Record<
  `${string extends TPluginName ? string : '' extends TPluginName ? string : `${TPluginName}/`}${string}`,
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
  source: ESLint.Plugin
  settings?: EslintSettings
  globals?: Record<string, unknown>
  rules: EslintRules<TPluginName>
  testRules: EslintRules<TPluginName>
}

export interface EslintConfig<TPluginName extends string = string>
  extends Linter.FlatConfig {
  languageOptions: {
    sourceType: 'module'
    ecmaVersion: 'latest'
    globals: NonNullable<ESLint.Environment['globals']>
    parser: Linter.FlatConfigParserModule
    parserOptions: {
      sourceType: 'module'
      ecmaVersion: 'latest'
      project: './tsconfig.json'
      ecmaFeatures?: {
        jsx?: boolean
      }
    }
  }
  settings: EslintSettings
  plugins: Record<TPluginName, ESLint.Plugin>
  rules: EslintRules<TPluginName>
}
