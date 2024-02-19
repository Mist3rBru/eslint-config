import packageJson from '../package.json'
import plugin from './index.js'
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

function toCamelCase(input: string): string {
  return input.replaceAll(/[_-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))
}

describe('exports', () => {
  it('should export plugin meta data', async () => {
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

  it('should export min required keys', async () => {
    const configKeys = Object.keys(plugin.configs)

    expect.assertions(configKeys.length * 4)

    for (const key of configKeys) {
      const config = plugin.configs[key as keyof typeof plugin.configs]
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
      const configModule = await import(
        resolve('src/configs', `${configKey}.ts`)
      )
      const config = configModule[`${toCamelCase(configKey)}Config`] as {
        plugins: string[]
      }

      for (const pluginName of config.plugins.filter(p => !p.startsWith('@'))) {
        expect(dependencyList).toContain(`eslint-plugin-${pluginName}`)
      }
    }
  })
})