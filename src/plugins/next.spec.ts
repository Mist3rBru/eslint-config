import type { EslintRuleMeta } from '../types.js'
import { nextPlugin as sut } from './next.js'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import _nextPlugin from '@next/eslint-plugin-next'

describe('next', () => {
  it('should config next plugin rules', () => {
    const nextPluginRules = Object.entries(_nextPlugin.rules!)
      .filter(([, ruleMeta]) => !(ruleMeta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    expect.assertions(nextPluginRules.length)

    for (const rule of nextPluginRules) {
      expect(sut.rules).toHaveProperty(`@next/next/${rule}`)
    }
  })

  it("should include next rule's reference link", async () => {
    const file = await readFile(path.resolve('src/plugins/next.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'@next\/next\//.test(line))
      .map(line => line.replace(/^\s*'@next\/next\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://nextjs.org/docs/messages/${rule}`
      )
    }
  })
})
