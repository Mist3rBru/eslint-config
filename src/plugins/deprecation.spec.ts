import { deprecationPlugin as sut } from '../plugins/deprecation.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _deprecationPlugin from 'eslint-plugin-deprecation'

describe('deprecation', () => {
  it('should config deprecation plugin rules', () => {
    const deprecationPluginRules = Object.keys(_deprecationPlugin.rules!)

    for (const rule of deprecationPluginRules) {
      expect(sut.rules).toHaveProperty(`deprecation/${rule}`)
    }
  })

  it("should include rule's reference link", async () => {
    const expectedReferencedRules = [
      ...Object.keys(sut.rules),
      ...Object.keys(sut.testRules),
    ].map(rule => rule.replace('deprecation/', ''))
    const file = await readFile(resolve('src/plugins/deprecation.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/gund/eslint-plugin-deprecation/blob/master/src/rules/${rule}.md`
      )
    }
  })
})
