import { type EslintConfig } from '../src/types.js'
import { toCamelCase } from '../src/utils/mappers.js'
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import _prettierConfig from 'eslint-config-prettier'

void (async (): Promise<void> => {
  const configsPath = resolve('src/configs')
  const files = await readdir(configsPath)
  const configFiles = files.filter(file => !file.endsWith('.spec.ts'))

  for (const configFile of configFiles) {
    const configModule = (await import(
      resolve(configsPath, configFile)
    )) as Record<string, EslintConfig>
    const configName = toCamelCase(configFile.replace('.ts', ''))
    const config = configModule[`${configName}Config`]

    const rules = Object.keys(config.rules)
    const rulesWithoutPrettier = rules.filter(
      rule => !_prettierConfig.rules[rule]
    )

    process.stdout.write(`${configName}: ${rulesWithoutPrettier.length}\n`)
  }
})()
