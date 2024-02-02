import { jestConfig as sut } from '#/configs/jest.js'
import { shared } from '#/utils/shared.js'
import { resolve } from 'node:path'
import { readFile } from 'node:fs/promises'

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
    expect(sut.extends).toContain('plugin:jest/all')
  })

  it("should include rule's reference link", async () => {
    const expectedReferencedRules = Object.keys(sut.rules)
      .filter(rule => rule.startsWith('jest/'))
      .map(rule => rule.replace('jest/', ''))
    const file = await readFile(resolve('src/configs/jest.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/${rule}.md`
      )
    }
  })
})
