import { type EslintRuleMeta } from '../types.js'
import { shared } from '../utils/shared.js'
import { jestConfig as sut } from './jest.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _jestPlugin from 'eslint-plugin-jest'

describe('jest', () => {
  it('should include shared test rules', () => {
    const sharedTestRules = Object.keys(shared.testRules)

    expect.assertions(sharedTestRules.length)

    for (const rule of sharedTestRules) {
      expect(sut.rules[rule], rule).toBeDefined()
    }
  })

  it('should config jest environment', () => {
    expect(sut.env.node).toBe(true)
    expect(sut.env.jest).toBe(true)
    expect(sut.env['jest/globals']).toBe(true)
    expect(sut.settings?.jest?.version).toBeGreaterThanOrEqual(29)
  })

  it('should config jest', () => {
    expect(sut.plugins).toContain('jest')

    const jestPluginRules = Object.entries(_jestPlugin.rules!)
      .filter(([_, meta]) => !(meta as EslintRuleMeta).meta.deprecated)
      .map(([rule]) => rule)

    for (const rule of jestPluginRules) {
      expect(sut.rules).toHaveProperty(`jest/${rule}`)
    }
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(resolve('src/configs/jest.ts'))
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
