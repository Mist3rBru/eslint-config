import {
  reactHooksPlugin,
  reactPlugin,
  securityPlugin,
} from '../plugins/index.js'
import { shared } from '../utils/shared.js'
import { reactConfig as sut } from './react.js'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import _prettierConfig from 'eslint-config-prettier'

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

  it('should extend shared rules', () => {
    const sharedRules = Object.keys(shared.rules)

    expect.assertions(sharedRules.length)

    for (const rule of sharedRules) {
      expect(sut.rules).toHaveProperty(rule)
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
    expect(sut.plugins).toContain(reactPlugin.name)

    for (const rule of Object.keys(reactPlugin.rules)) {
      expect(sut.rules).toHaveProperty(rule)
    }
  })

  it('should config react-hooks plugin', () => {
    expect(sut.plugins).toContain(reactHooksPlugin.name)

    for (const rule of Object.keys(reactHooksPlugin.rules)) {
      expect(sut.rules).toHaveProperty(rule)
    }
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

  it('should extend prettier config', () => {
    const prettierConfigRules = Object.entries(_prettierConfig.rules!).filter(
      ([rule]) => rule !== 'jsx-quotes'
    )

    for (const [rule, options] of prettierConfigRules) {
      expect(sut.rules).toHaveProperty(rule, options)
    }
  })

  it("should include typescript rule's reference link", async () => {
    const file = await readFile(resolve('src/configs/react.ts'))
    const fileContent = file.toString()

    const expectedReferencedRules = fileContent
      .split(/\n/g)
      .filter(line => /^\s*'@typescript-eslint/.test(line))
      .map(line => line.replace(/^\s*'@typescript-eslint\/([a-z-]+).+/, '$1'))

    expect.assertions(expectedReferencedRules.length)

    for (const rule of expectedReferencedRules) {
      expect(fileContent, rule).toMatch(
        `https://typescript-eslint.io/rules/${rule}`
      )
    }
  })
})
