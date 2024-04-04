import type { EslintRuleMeta } from '../types.js'
import { reactPlugin as sut } from './react.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _reactPlugin from 'eslint-plugin-react'

describe('react', () => {
  it('should config react plugin rules', () => {
    const reactPluginRules = Object.entries(_reactPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    expect.assertions(reactPluginRules.length)

    for (const rule of reactPluginRules) {
      expect(sut.rules).toHaveProperty(`react/${rule}`)
    }
  })

  it('should config react plugin settings', () => {
    expect(sut.settings).toStrictEqual({
      react: {
        version: 'detect',
      },
    })
  })

  it("should include react rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/react.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'react\//.test(line))
      .map(line => line.replace(/^\s*'react\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/${rule}.md`
      )
    }
  })
})
