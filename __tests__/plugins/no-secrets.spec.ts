import { noSecretsPlugin as sut } from '#/plugins/no-secrets.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('no-secrets', () => {
  it('should disable rules for test environment', async () => {
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
