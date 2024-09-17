import packageJson from '../package.json'
import plugin from './index.js'
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import _prettierConfig from 'eslint-config-prettier'

describe('exports', () => {
  it('should export plugin meta data', () => {
    expect(plugin.meta.name).toMatchInlineSnapshot('"eslint-plugin-mist3rbru"')
    expect(plugin.meta.version).toMatch(/^\d+\.\d+\.\d+$/)
  })

  it('should export plugin configs', async () => {
    const configKeys = Object.keys(plugin.configs)

    const configFiles = await readdir(path.resolve('src/configs'))
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

  it('should include dependency plugins', () => {
    const dependencyList = Object.keys(packageJson.dependencies)
    const configKeys = Object.keys(plugin.configs)

    for (const configKey of configKeys) {
      const config = plugin.configs[configKey as keyof typeof plugin.configs]

      for (const pluginName of config.plugins.filter(p => !p.startsWith('@'))) {
        expect(dependencyList).toContain(`eslint-plugin-${pluginName}`)
      }
    }
  })

  it('should not have style rules', () => {
    const styleRules = Object.keys(_prettierConfig.rules).filter(
      rule => !['curly', 'jsx-quotes'].includes(rule)
    )
    const configKeys = Object.keys(plugin.configs)

    for (const styleRule of styleRules) {
      for (const configKey of configKeys) {
        const config = plugin.configs[configKey as keyof typeof plugin.configs]
        const ruleValue = config.rules[styleRule]

        expect(
          !ruleValue || ruleValue === 'off',
          `${configKey} -> ${styleRule}: ${JSON.stringify(ruleValue)}`
        ).toBeTruthy()
      }
    }
  })
})
