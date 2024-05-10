import type { EslintConfig } from '../src/types.js'
import { toCamelCase } from '../src/utils/mappers.js'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

void (async (): Promise<void> => {
  const configsPath = path.resolve('src/configs')
  const files = await readdir(configsPath)
  const configFiles = files.filter(file => !file.endsWith('.spec.ts'))

  for (const configFile of configFiles) {
    const configModule = (await import(
      path.resolve(configsPath, configFile)
    )) as Record<string, EslintConfig>
    const configName = toCamelCase(configFile.replace('.ts', ''))
    const config = configModule[`${configName}Config`]
    const configRules = Object.values(config.rules)
    let activeCounter = 0
    let inactiveCounter = 0

    for (const value of configRules) {
      if (value === 'off') {
        inactiveCounter++
      } else {
        activeCounter++
      }
    }

    process.stdout.write(
      `${configName}: ${configRules.length} | +${activeCounter} | -${inactiveCounter}\n`
    )
  }
})()
