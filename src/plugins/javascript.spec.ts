import {
  jsIgnoredRules,
  javascriptPlugin as sut,
  tsEquivalentRules,
} from '../plugins/javascript.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _javascriptPlugin from '@eslint/js'

describe('javascript', () => {
  it('should config javascript plugin rules', () => {
    const javascriptPluginRules = Object.keys(
      _javascriptPlugin.configs.all.rules
    )

    for (const rule of javascriptPluginRules) {
      expect(sut.rules).toHaveProperty(rule)
    }
  })

  it('should disable rules for test environment', () => {
    const testRules: string[] = ['no-extra-semi']

    expect.assertions(testRules.length + 1)

    for (const rule of testRules) {
      expect(sut.testRules).toHaveProperty(rule, 'off')
    }
    expect(Object.keys(sut.testRules)).toHaveLength(testRules.length)
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(resolve('src/plugins/javascript.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s+'[\w-]+':/.test(line))
      .map(line => line.replace(/^\s+'([\w-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://eslint.org/docs/latest/rules/${rule}`
      )
    }
  })

  it("should include ignored rule's reference link", async () => {
    const file = await readFile(resolve('src/plugins/javascript.ts'))
    const fileContent = file.toString()

    expect.assertions(jsIgnoredRules.length)

    for (const rule of jsIgnoredRules) {
      expect(fileContent, rule).toMatch(
        `https://eslint.org/docs/latest/rules/${rule}`
      )
    }
  })

  it("should include typescript equivalent rule's reference link", async () => {
    const file = await readFile(resolve('src/plugins/javascript.ts'))
    const fileContent = file.toString()

    expect.assertions(tsEquivalentRules.length)

    for (const rule of tsEquivalentRules) {
      expect(fileContent, rule).toMatch(
        `https://typescript-eslint.io/rules/${rule}`
      )
    }
  })
})
