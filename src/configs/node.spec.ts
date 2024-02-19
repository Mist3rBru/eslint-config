import { securityPlugin } from '../plugins/security.js'
import { shared } from '../utils/shared.js'
import { nodeConfig as sut } from './node.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _prettierConfig from 'eslint-config-prettier'

describe('node', () => {
  it('should include shared settings', () => {
    for (const setting of Object.keys(shared.settings)) {
      expect(sut.settings).toHaveProperty(setting)
    }
  })

  it('should include shared plugins', () => {
    for (const plugin of shared.plugins) {
      expect(sut.plugins).toContain(plugin)
    }
  })

  it('should extend shared rules', () => {
    const sharedRules = Object.keys(shared.rules)

    expect.assertions(sharedRules.length)

    for (const rule of sharedRules) {
      expect(sut.rules).toHaveProperty(rule)
    }
  })

  it('should config node environment', () => {
    expect(sut.env.node).toBe(true)
  })

  it('should config security plugin', () => {
    const securityRules = Object.entries(securityPlugin.rules)

    expect.assertions(securityRules.length + 1)
    expect(sut.plugins).toContain(securityPlugin.name)

    for (const [rule, value] of securityRules) {
      expect(sut.rules).toHaveProperty(rule, value)
    }
  })

  it('should extend prettier config', () => {
    for (const [rule, options] of Object.entries(_prettierConfig.rules!)) {
      expect(sut.rules).toHaveProperty(rule, options)
    }
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(resolve('src/configs/node.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'@typescript-eslint/.test(line))
      .map(line => line.replace(/^\s*'@typescript-eslint\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://typescript-eslint.io/rules/${rule}`
      )
    }
  })
})
