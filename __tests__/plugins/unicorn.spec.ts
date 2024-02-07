import { unicornPlugin as sut } from '#/plugins/unicorn.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('unicorn', () => {
  it('should extend unicorn/all config', async () => {
    expect(sut.extends).toContain('plugin:unicorn/all')
  })

  it('should disable rules for test environment', async () => {
    const testRules: string[] = ['unicorn/error-message']

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
    ].map(rule => rule.replace('unicorn/', ''))
    const file = await readFile(resolve('src/plugins/unicorn.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
