import { type EslintRuleLevel } from '../types'

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

export function mapRules<
  TRules extends string,
  TRuleLevel extends EslintRuleLevel,
>(rules: TRules[], option: TRuleLevel): Record<TRules, TRuleLevel> {
  return Object.fromEntries(rules.map(rule => [rule, option])) as Record<
    TRules,
    TRuleLevel
  >
}
