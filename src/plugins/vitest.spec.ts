import type { EslintRuleMeta } from '../types.js'
import { vitestPlugin as sut } from './vitest.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _vitestPlugin from 'eslint-plugin-vitest'

describe('vitest', () => {
  it('should config vitest plugin rules', () => {
    const vitestPluginRules = Object.entries(_vitestPlugin.rules)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    expect.assertions(vitestPluginRules.length)

    for (const rule of vitestPluginRules) {
      expect(sut.testRules).toHaveProperty(`vitest/${rule}`)
    }
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(resolve('src/plugins/vitest.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'vitest\//.test(line))
      .map(line => line.replace(/^\s*'vitest\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
