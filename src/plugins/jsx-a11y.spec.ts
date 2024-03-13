import type { EslintRuleMeta } from '../types.js'
import { jsxA11yPlugin as sut } from './jsx-a11y.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

describe('jsx-a11y', () => {
  it('should config jsx-a11y plugin rules rules', () => {
    const jsxA11yPluginRules = Object.entries(_jsxA11yPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    expect.assertions(jsxA11yPluginRules.length)

    for (const rule of jsxA11yPluginRules) {
      expect(sut.rules).toHaveProperty(`jsx-a11y/${rule}`)
    }
  })

  it("should include jsx-a11y rule's reference link", async () => {
    const file = await readFile(resolve('src/plugins/jsx-a11y.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'jsx-a11y\//.test(line))
      .map(line => line.replace(/^\s*'jsx-a11y\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules/${rule}.md`
      )
    }
  })
})
