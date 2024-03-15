import type { EslintConfig, EslintPlugin } from '../types.js'
import { GLOB_EXCLUDE } from './globs.js'
import { reduceByKey } from './mappers.js'
import type { ESLint, Linter } from 'eslint'
import _tsEslint from 'typescript-eslint'

export interface DefinePartialEslintConfig<
  TPluginName extends string = string,
> {
  files: string[]
  parserOptions?: Partial<EslintConfig['languageOptions']['parserOptions']>
  settings?: EslintConfig['settings']
  globals?: EslintConfig['languageOptions']['globals']
  plugins: EslintPlugin<TPluginName>[]
  extendPlugins: 'rules' | 'testRules'
  rules: EslintConfig['rules']
}

export function defineConfig<TPluginName extends string>(
  config: DefinePartialEslintConfig<TPluginName>
): () => Promise<EslintConfig<TPluginName>> {
  // eslint-disable-next-line @typescript-eslint/require-await
  return async () => ({
    files: config.files,
    ignores: GLOB_EXCLUDE,
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      parser: _tsEslint.parser as Linter.ParserModule,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: './tsconfig.json',
        ...config.parserOptions,
      },
      globals: {
        ...reduceByKey(config.plugins, 'globals'),
        ...config.globals,
      },
    },
    settings: {
      ...reduceByKey(config.plugins, 'settings'),
      ...config.settings,
    },
    plugins: Object.fromEntries(
      config.plugins
        .filter(plugin => !!plugin.name)
        .map(plugin => [plugin.name, plugin.source])
    ) as Record<TPluginName, ESLint.Plugin>,
    rules: {
      ...reduceByKey(config.plugins, config.extendPlugins),
      ...config.rules,
    },
  })
}
