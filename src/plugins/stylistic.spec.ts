import type { EslintRuleMeta } from '../types.js'
import { stylisticPlugin as sut } from './stylistic.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _stylisticPlugin from '@stylistic/eslint-plugin'

describe('stylistic', () => {
  it('should config stylistic plugin rules', () => {
    const stylisticPluginRules = Object.entries(_stylisticPlugin.rules)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    for (const rule of stylisticPluginRules) {
      expect(sut.rules).toHaveProperty(`@stylistic/${rule}`)
    }
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/stylistic.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'@stylistic\//.test(line))
      .map(line => line.replace(/^\s*'@stylistic\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://eslint.style/rules/default/${rule}`
      )
    }
  })
})
