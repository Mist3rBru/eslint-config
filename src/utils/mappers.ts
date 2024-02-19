import { type Linter } from 'eslint'

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

export function extendPluginRules<TPlugin extends string>(
  pluginName: TPlugin,
  plugin: { rules: Linter.RulesRecord },
  overwrite?: Linter.StringSeverity
): Linter.RulesRecord {
  return Object.fromEntries(
    Object.entries(plugin.rules).map(([rule, options]) => [
      rule.startsWith(pluginName) ? rule : `${pluginName}/${rule}`,
      overwrite ?? options,
    ])
  )
}
