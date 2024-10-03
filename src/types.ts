import type { ESLint, Linter } from 'eslint'

export interface EslintRuleMeta {
  meta: {
    deprecated?: boolean
  }
}

export interface EslintParserOptions {
  sourceType: 'module'
  ecmaVersion: 'latest'
  project: './tsconfig.json'
  ecmaFeatures?: {
    jsx?: boolean
  }
}

export type EslintRules<TPluginName extends string = string> = Record<
  `${string extends TPluginName ? string : '' extends TPluginName ? string : `${TPluginName}/`}${string}`,
  Linter.RuleEntry
>

export interface EslintSettings {
  jest?: {
    version?: number
  }
  react?: {
    version?: 'detect'
  }
  [k: string]: unknown
}

export type EslintGlobals = Record<string, 'writable' | 'readonly' | 'off'>

export interface EslintPlugin<TPluginName extends string = string> {
  name: TPluginName
  source: ESLint.Plugin
  settings?: EslintSettings
  globals?: EslintGlobals
  rules: EslintRules<TPluginName>
  testRules: EslintRules<TPluginName>
}

export interface EslintConfig<TPluginName extends string = string>
  extends Linter.Config {
  files: string[]
  languageOptions: {
    sourceType: 'module'
    ecmaVersion: 'latest'
    globals: EslintGlobals
    parser: Linter.Parser
    parserOptions: EslintParserOptions
  }
  settings: EslintSettings
  plugins: Record<TPluginName, ESLint.Plugin>
  rules: EslintRules
}
