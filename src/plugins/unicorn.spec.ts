import { unicornPlugin as sut } from '../plugins/unicorn.js'
import type { EslintRuleMeta } from '../types.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _unicornPlugin from 'eslint-plugin-unicorn'

describe('unicorn', () => {
  it('should config unicorn plugin rules', () => {
    const unicornPluginRules = Object.entries(_unicornPlugin.rules!)
      .filter(([, meta]) => !(meta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    for (const rule of unicornPluginRules) {
      expect(sut.rules).toHaveProperty(`unicorn/${rule}`)
    }
  })

  it('should disable rules for test environment', () => {
    const testRules: string[] = ['unicorn/error-message']

    expect.assertions(testRules.length + 1)

    for (const rule of testRules) {
      expect(sut.testRules).toHaveProperty(rule, 'off')
    }

    expect(Object.keys(sut.testRules)).toHaveLength(testRules.length)
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/unicorn.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'unicorn/.test(line))
      .map(line => line.replace(/^\s*'unicorn\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
