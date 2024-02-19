import { reactConfig as sut } from '#/configs/react.js'
import { securityPlugin } from '#/plugins/security.js'
import { shared } from '#/utils/shared.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

describe('react', () => {
  it('should include shared settings', () => {
    for (const setting of Object.keys(shared.settings)) {
      expect(sut.settings).toHaveProperty(setting)
    }
  })

  it('should include shared plugins', () => {
    for (const plugin of shared.plugins) {
      expect(sut.plugins).toContain(plugin)
    }
  })

  it('should include shared rules', () => {
    const sharedRules = Object.entries(shared.rules)

    expect.assertions(sharedRules.length)

    for (const [rule, value] of sharedRules) {
      expect(sut.rules).toHaveProperty(rule, value)
    }
  })

  it('should config react environment', () => {
    expect(sut.parserOptions.ecmaFeatures?.jsx).toBe(true)
    expect(sut.settings?.react?.version).toBe('detect')
    expect(sut.globals?.React).toBe(true)
    expect(sut.globals?.JSX).toBe(true)
  })

  it('should not config security plugin', () => {
    expect(sut.plugins).not.toContain(securityPlugin.name)
  })

  it('should config react plugin', () => {
    expect(sut.plugins).toContain('react')
    expect(sut.plugins).toContain('react-hooks')
    expect(sut.extends).toContain('plugin:react/all')
    expect(sut.extends).toContain('plugin:react-hooks/recommended')
  })

  it('should disable react conflicted rules', () => {
    const expectedDisabledRules: string[] = [
      '@typescript-eslint/no-shadow',
      '@typescript-eslint/unbound-method',
      '@typescript-eslint/no-misused-promises',
      '@typescript-eslint/no-floating-promises',
    ]
    expect.assertions(expectedDisabledRules.length + 1)

    for (const rule of expectedDisabledRules) {
      expect(sut.rules).toHaveProperty(rule, 'off')
    }
    expect(sut.overrides?.[0].rules).toHaveProperty('no-undef', 'off')
  })

  it('should include prettier as last extended config', () => {
    expect(sut.extends.at(-1)).toBe('prettier')
  })

  it("should include rule's reference link", async () => {
    const sharedRules = Object.keys(shared.rules)
    const expectedReferencedRules = Object.keys(sut.rules)
      .filter(
        rule =>
          rule.startsWith('@typescript-eslint/') && !sharedRules.includes(rule)
      )
      .map(rule => rule.replace('@typescript-eslint/', ''))
    const file = await readFile(resolve('src/configs/react.ts'))
    const fileContent = file.toString()

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://typescript-eslint.io/rules/${rule}`
      )
    }
  })
})
