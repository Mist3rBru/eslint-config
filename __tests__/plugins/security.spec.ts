import {
  securityPluginRules,
  securityPlugin as sut,
} from '#/plugins/security.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('security', () => {
  it('should warn all', async () => {
    expect.assertions(securityPluginRules.length)

    for (const rule of securityPluginRules) {
      expect(sut.rules).toHaveProperty(rule, 'warn')
    }
  })

  it('should disabled all for tests', async () => {
    expect.assertions(securityPluginRules.length)

    for (const rule of securityPluginRules) {
      expect(sut.testRules).toHaveProperty(rule, 'off')
    }
  })

  it("should include rule's reference link", async () => {
    const expectedReferencedRules = securityPluginRules.map(rule =>
      rule.replace('security/', '')
    )
    const file = await readFile(resolve('src/plugins/security.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
