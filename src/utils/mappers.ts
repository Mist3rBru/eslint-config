import type { EslintGlobals } from '../types.js'
import type { Linter } from 'eslint'

export function reduceByKey<T, TKey extends keyof T>(
  data: T[],
  key: TKey
): T[TKey] {
  return data.reduce(
    (prev, current) => ({ ...prev, ...current[key] }),
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/consistent-type-assertions
    {} as T[TKey]
  )
}

export function updateGlobalValues(
  globals: unknown,
  overwrite?: EslintGlobals[keyof EslintGlobals]
): EslintGlobals {
  return globals
    ? Object.fromEntries(
        Object.entries(globals).map(([key, value]) => [
          key,
          overwrite ?? value ? 'readonly' : 'off',
        ])
      )
    : {}
}

export function extendPluginRules<TPluginName extends string>(
  pluginName: TPluginName,
  plugin: { rules: Linter.RulesRecord },
  overwrite?: Linter.StringSeverity
): Record<`${TPluginName}/${string}`, Linter.RuleEntry> {
  return Object.fromEntries(
    Object.entries(plugin.rules).map(([rule, options]) => [
      rule.startsWith(pluginName) ? rule : `${pluginName}/${rule}`,
      overwrite ?? options,
    ])
  ) as Record<`${TPluginName}/${string}`, Linter.RuleEntry>
}

export function toCamelCase(input: string): string {
  return input.replaceAll(/[_-]+(.)?/g, (_, c: string) =>
    c ? c.toUpperCase() : ''
  )
}
