import { shared } from '../utils/shared.js'
import { vitestConfig as sut } from './vitest.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('vitest', () => {
  it('should include shared test rules', () => {
    const sharedTestRules = Object.keys(shared.testRules)

    expect.assertions(sharedTestRules.length)

    for (const rule of sharedTestRules) {
      expect(sut.rules[rule], rule).toBeDefined()
    }
  })

  it('should config vitest environment', () => {
    expect(sut.env.node).toBe(true)
    expect(sut.env.vitest).toBe(true)
  })

  it('should config vitest', () => {
    expect(sut.plugins).toContain('vitest')
  })

  it("should include rule's reference link", async () => {
    const expectedReferencedRules = Object.keys(sut.rules)
      .filter(rule => rule.startsWith('vitest/'))
      .map(rule => rule.replace('vitest/', ''))
    const file = await readFile(resolve('src/configs/vitest.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
