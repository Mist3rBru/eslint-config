import { readFile } from 'node:fs/promises'
import { reactPlugin as sut } from './react.js'
import _reactPlugin from 'eslint-plugin-react'
import { resolve } from 'node:path'

describe('react', () => {
  it('should config react plugin rules rules', () => {
    const reactPluginRules = Object.keys(_reactPlugin.rules!)

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
    const file = await readFile(resolve('src/configs/react.ts'))
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
