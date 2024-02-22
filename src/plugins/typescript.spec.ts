import { typescriptPlugin as sut } from '../plugins/typescript.js'
import { type EslintRuleMeta } from '../types.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _typescriptPlugin from '@typescript-eslint/eslint-plugin'

describe('typescript', () => {
  it('should config typescript plugin rules', () => {
    const typescriptPluginRules = Object.entries(_typescriptPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    for (const rule of typescriptPluginRules) {
      expect(sut.rules).toHaveProperty(`@typescript-eslint/${rule}`)
    }
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
