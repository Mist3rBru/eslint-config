import { type EslintConfig, type EslintPlugin } from '../types.js'
import { reduceByKey } from './mappers.js'

export interface DefinePartialEslintConfig {
  parserOptions?: Partial<EslintConfig['parserOptions']>
  settings?: EslintConfig['settings']
  env: EslintConfig['env']
  globals?: EslintConfig['globals']
  plugins: EslintPlugin[]
  extendPlugins: 'rules' | 'testRules'
  rules: EslintConfig['rules']
  overrides?: EslintConfig['overrides']
}

export function defineConfig(config: DefinePartialEslintConfig): EslintConfig {
  return {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ...config.parserOptions,
    },
    settings: {
      ...reduceByKey(config.plugins, 'settings'),
      ...config.settings,
    },
    env: config.env,
    globals: config.globals ?? {},
    plugins: config.plugins.map(plugin => plugin.name).filter(Boolean),
    rules: {
      ...reduceByKey(config.plugins, config.extendPlugins),
      ...config.rules,
    },
    overrides: config.overrides ?? [],
  }
}
