import type { EslintRuleMeta } from '../types.js'
import { jestPlugin as sut } from './jest.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _jestPlugin from 'eslint-plugin-jest'

describe('jest', () => {
  it('should config jest plugin rules', () => {
    const jestPluginRules = Object.entries(_jestPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    expect.assertions(jestPluginRules.length)

    for (const rule of jestPluginRules) {
      expect(sut.testRules).toHaveProperty(`jest/${rule}`)
    }
  })

  it('should config jest plugin settings', () => {
    expect(sut.settings).toStrictEqual({
      jest: {
        version: 29,
      },
    })
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/jest.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'jest\//.test(line))
      .map(line => line.replace(/^\s*'jest\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
