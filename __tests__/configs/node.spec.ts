import { nodeConfig as sut } from '#/configs/node.js'
import { securityPlugin } from '#/plugins/security.js'

import { shared } from '#/utils/shared.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

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

  it('should include shared rules', () => {
    const sharedRules = Object.entries(shared.rules)

    expect.assertions(sharedRules.length)

    for (const [rule, value] of sharedRules) {
      expect(sut.rules).toHaveProperty(rule, value)
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

  it('should include prettier as last extended config', () => {
    expect(sut.extends.at(-1)).toBe('prettier')
  })

  it("should include rule's reference link", async () => {
    const sharedRules = Object.keys(shared.rules)
    const expectedReferencedRules = Object.keys(sut.rules)
      .filter(
        rule =>
          rule.startsWith('@typescript-eslint/') && !sharedRules.includes(rule)
      )
      .map(rule => rule.replace('@typescript-eslint/', ''))
    const file = await readFile(resolve('src/configs/node.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://typescript-eslint.io/rules/${rule}`
      )
    }
  })
})
