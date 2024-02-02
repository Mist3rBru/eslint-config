import { jestDomConfig as sut, jestDomRules } from '#/configs/jest-dom.js'
import { shared } from '#/utils/shared.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

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
    expect.assertions(jestDomRules.length + 1)

    expect(sut.plugins).toContain('jest-dom')

    for (const rule of jestDomRules) {
      expect(sut.rules).toHaveProperty(rule, 'error')
    }
  })

  it("should include rule's reference link", async () => {
    const expectedReferencedRules = Object.keys(sut.rules)
      .filter(rule => rule.startsWith('jest-dom/'))
      .map(rule => rule.replace('jest-dom/', ''))
    const file = await readFile(resolve('src/configs/jest-dom.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
