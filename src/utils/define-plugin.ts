import type { EslintPlugin } from '../types.js'

export function definePlugin<TPluginName extends string>(
  plugin: EslintPlugin<TPluginName>
): EslintPlugin<TPluginName> {
  return plugin
}
