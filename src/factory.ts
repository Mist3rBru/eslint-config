import * as configs from './configs/index.js'
import type { Linter } from 'eslint'

type ConfigKey = keyof typeof configs

type ConfigName<TConfigKey = ConfigKey> = TConfigKey extends ConfigKey
  ? TConfigKey extends `${infer TName}Config`
    ? TName
    : never
  : never

export async function config(
  ...params: (ConfigName | Linter.FlatConfig)[]
): Promise<Linter.FlatConfig[]> {
  return Promise.all(
    params.map(async param =>
      typeof param === 'string' ? configs[`${param}Config`]() : param
    )
  )
}
