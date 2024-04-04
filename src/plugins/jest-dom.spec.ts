import type { EslintRuleMeta } from '../types.js'
import { jestDomPlugin as sut } from './jest-dom.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _reactPlugin from 'eslint-plugin-jest-dom'

describe('jest-dom', () => {
  it('should config jest-dom plugin rules', () => {
    const reactPluginRules = Object.entries(_reactPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    expect.assertions(reactPluginRules.length)

    for (const rule of reactPluginRules) {
      expect(sut.testRules).toHaveProperty(`jest-dom/${rule}`)
    }
  })

  it("should include jest-dom rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/jest-dom.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'jest-dom\//.test(line))
      .map(line => line.replace(/^\s*'jest-dom\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/jsx-eslint/eslint-plugin-jest-dom/blob/master/docs/rules/${rule}.md`
      )
    }
  })
})
