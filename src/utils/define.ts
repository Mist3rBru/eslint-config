import { type EslintConfig, type EslintPlugin } from '../types.js'

export function definePlugin<TPluginName extends string>(
  plugin: EslintPlugin<TPluginName>
): EslintPlugin<TPluginName> {
  return plugin
}

export function defineConfig(config: EslintConfig): EslintConfig {
  return config
}
