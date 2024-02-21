import { importPlugin as sut } from '../plugins/import.js'
import { type EslintRuleMeta } from '../types.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import * as _importPlugin from 'eslint-plugin-import'

describe('import', () => {
  it('should config import plugin rules', () => {
    expect(sut.settings).toStrictEqual(
      _importPlugin.configs.typescript.settings
    )

    const importPluginRules = Object.entries(_importPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    for (const rule of importPluginRules) {
      expect(sut.rules).toHaveProperty(`import/${rule}`)
    }
  })

  it('should disable rules for test environment', () => {
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
})
