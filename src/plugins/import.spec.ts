import { importPlugin as sut } from '../plugins/import.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import * as _importPlugin from 'eslint-plugin-import'

describe('import', () => {
  it('should config import plugin', () => {
    expect(sut.settings).toStrictEqual(
      _importPlugin.configs.typescript.settings
    )
  })

  it('should disable rules for test environment', async () => {
    const testRules: string[] = ['import/no-nodejs-modules']

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
    ].map(rule => rule.replace('import/', ''))
    const file = await readFile(resolve('src/plugins/import.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/${rule}.md`
      )
    }
  })

  it('should not include environment related rules', async () => {
    const avoidedRules: string[] = ['import/no-nodejs-modules']
    expect.assertions(avoidedRules.length)

    for (const avoidedRule of avoidedRules) {
      expect(sut.rules).not.toHaveProperty(avoidedRule)
    }
  })
})
