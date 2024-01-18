import plugin from '../src/index.js'
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('exports', () => {
  it('should export plugin meta data', async () => {
    expect(plugin.meta.name).toMatchInlineSnapshot('"eslint-plugin-mist3rbru"')
    expect(plugin.meta.version).toMatch(/^\d+\.\d+\.\d+$/)
  })

  it('should export plugin configs', async () => {
    const configKeys = Object.keys(plugin.configs)

    const files = await readdir(resolve('src'))
    const ignoreList = new Set(['index.ts', 'shared.ts'])
    const expectedKeys = files
      .filter(f => !ignoreList.has(f))
      .map(f => f.replace(/\.ts/, ''))

    expect.assertions(expectedKeys.length)

    for (const key of expectedKeys) {
      expect(configKeys).toContain(key)
    }
  })

  it('should export min required keys', async () => {
    const configKeys = Object.keys(plugin.configs)

    expect.assertions(configKeys.length * 5)

    for (const key of configKeys) {
      const config = plugin.configs[key as keyof typeof plugin.configs]
      expect(config.parser).toBeDefined()
      expect(config.parserOptions).toBeDefined()
      expect(config.plugins.length).toBeGreaterThanOrEqual(1)
      expect(config.extends.length).toBeGreaterThanOrEqual(1)
      expect(config.rules).toBeDefined()
    }
  })
})
