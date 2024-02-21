import { noSecretsPlugin as sut } from '../plugins/no-secrets.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _noSecretsPlugin from 'eslint-plugin-no-secrets'

describe('no-secrets', () => {
  it('should config no-secrets plugin rules', () => {
    const noSecretsPluginRules = Object.keys(_noSecretsPlugin.rules!)

    for (const rule of noSecretsPluginRules) {
      expect(sut.rules).toHaveProperty(`no-secrets/${rule}`)
    }
  })

  it('should disable rules for test environment', () => {
    const testRules: string[] = ['no-secrets/no-secrets']

    expect.assertions(testRules.length + 1)

    for (const rule of testRules) {
      expect(sut.testRules).toHaveProperty(rule, 'off')
    }
    expect(Object.keys(sut.testRules)).toHaveLength(testRules.length)
  })

  it("should include rule's reference link", async () => {
    const expectedReferencedRules = [
      ...Object.keys(sut.rules),
      ...Object.keys(sut.testRules),
    ].map(rule => rule.replace('no-secrets/', ''))
    const file = await readFile(resolve('src/plugins/no-secrets.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/nickdeis/eslint-plugin-no-secrets/blob/master/tests/lib/rules/${rule}.md`
      )
    }
  })
})
