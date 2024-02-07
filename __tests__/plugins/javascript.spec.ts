import { javascriptPlugin as sut } from '#/plugins/javascript.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('javascript', () => {
  it('should disable rules for test environment', async () => {
    const testRules: string[] = ['no-extra-semi']

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
    ]
    const file = await readFile(resolve('src/plugins/javascript.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://eslint.org/docs/latest/rules/${rule}`
      )
    }
  })
})
