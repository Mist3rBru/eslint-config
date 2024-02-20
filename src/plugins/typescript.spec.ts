import { typescriptPlugin as sut } from '../plugins/typescript.js'
import { type EslintRuleMeta } from '../types.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _typescriptPlugin from '@typescript-eslint/eslint-plugin'

describe('typescript', () => {
  it('should config typescript plugin', () => {
    const typescriptPluginRules = Object.entries(_typescriptPlugin.rules!)
      .filter(([_, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    for (const rule of typescriptPluginRules) {
      expect(sut.rules).toHaveProperty(`@typescript-eslint/${rule}`)
    }
  })

  it('should disable rules for test environment', () => {
    const testRules: string[] = [
      '@typescript-eslint/no-explicit-any',
      '@typescript-eslint/ban-ts-comment',
      '@typescript-eslint/consistent-type-assertions',
      '@typescript-eslint/no-non-null-assertion',
      '@typescript-eslint/no-non-null-asserted-optional-chain',
      '@typescript-eslint/explicit-function-return-type',
      '@typescript-eslint/no-unsafe-argument',
    ]

    expect.assertions(testRules.length + 1)

    for (const rule of testRules) {
      expect(sut.testRules).toHaveProperty(rule, 'off')
    }
    expect(Object.keys(sut.testRules)).toHaveLength(testRules.length)
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(resolve('src/plugins/typescript.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'@typescript-eslint\//.test(line))
      .map(line => line.replace(/^\s*'@typescript-eslint\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://typescript-eslint.io/rules/${rule}`
      )
    }
  })
})
