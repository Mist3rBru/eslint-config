import packageJson from '../package.json'
import plugin from './index.js'
import type { EslintConfig } from './types.js'
import { toCamelCase } from './utils/mappers.js'
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('exports', () => {
  it('should export plugin meta data', () => {
    expect(plugin.meta.name).toMatchInlineSnapshot('"eslint-plugin-mist3rbru"')
    expect(plugin.meta.version).toMatch(/^\d+\.\d+\.\d+$/)
  })

  it('should export plugin configs', async () => {
    const configKeys = Object.keys(plugin.configs)

    const configFiles = await readdir(resolve('src/configs'))
    const expectedKeys = configFiles
      .filter(file => !file.endsWith('.spec.ts'))
      .map(file => file.replace(/\.ts/, ''))

    expect.assertions(expectedKeys.length)

    for (const key of expectedKeys) {
      expect(configKeys).toContain(key)
    }
  })

  it('should export min required keys', () => {
    const configKeys = Object.keys(
      plugin.configs
    ) as (keyof typeof plugin.configs)[]

    const expectedAssertions = 4
    expect.assertions(configKeys.length * expectedAssertions)

    for (const key of configKeys) {
      // eslint-disable-next-line @typescript-eslint/prefer-destructuring
      const config = plugin.configs[key]
      expect(config.parser).toBeDefined()
      expect(config.parserOptions).toBeDefined()
      expect(config.plugins.length).toBeGreaterThanOrEqual(1)
      expect(config.rules).toBeDefined()
    }
  })

  it('should include dependency plugins', async () => {
    const dependencyList = Object.keys(packageJson.dependencies)
    const configKeys = Object.keys(plugin.configs)

    for (const configKey of configKeys) {
      const configModule = (await import(
        resolve('src/configs', `${configKey}.ts`)
      )) as Record<string, EslintConfig>
      const config = configModule[`${toCamelCase(configKey)}Config`]

      for (const pluginName of config.plugins.filter(p => !p.startsWith('@'))) {
        expect(dependencyList).toContain(`eslint-plugin-${pluginName}`)
      }
    }
  })
})
