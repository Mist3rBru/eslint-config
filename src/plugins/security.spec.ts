import { securityPlugin as sut } from '../plugins/security.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _securityPlugin from 'eslint-plugin-security'

const securityPluginRules = Object.keys(_securityPlugin.rules!)

describe('security', () => {
  it('should config security plugin rules', () => {
    expect.assertions(securityPluginRules.length)

    for (const rule of securityPluginRules) {
      expect(sut.rules).toHaveProperty(`security/${rule}`, 'warn')
    }
  })

  it('should disabled all for tests', () => {
    expect.assertions(securityPluginRules.length)

    for (const rule of securityPluginRules) {
      expect(sut.testRules).toHaveProperty(`security/${rule}`, 'off')
    }
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/security.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'security\//.test(line))
      .map(line => line.replace(/^\s*'security\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
