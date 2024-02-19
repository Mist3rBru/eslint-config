import { shared } from '../utils/shared.js'
import { jestDomConfig as sut } from './jest-dom.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import * as _jestDomPlugin from 'eslint-plugin-jest-dom'

describe('jest-dom', () => {
  it('should include shared test rules', () => {
    const sharedTestRules = Object.keys(shared.testRules)

    expect.assertions(sharedTestRules.length)

    for (const rule of sharedTestRules) {
      expect(sut.rules[rule], rule).toBeDefined()
    }
  })

  it('should config jest-dom environment', () => {
    expect(sut.env.node).toBe(true)
    expect(sut.env.jest).toBe(true)
    expect(sut.env['jest/globals']).toBe(true)
  })

  it('should config jest-dom', () => {
    const jestDomRules = Object.keys(_jestDomPlugin.rules!)

    expect.assertions(jestDomRules.length + 1)

    expect(sut.plugins).toContain('jest-dom')

    for (const rule of jestDomRules) {
      expect(sut.rules).toHaveProperty(`jest-dom/${rule}`, 'error')
    }
  })

  it("should include rule's reference link", async () => {
    const file = await readFile(resolve('src/configs/jest-dom.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'jest-dom\//.test(line))
      .map(line => line.replace(/^\s*'jest-dom\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
