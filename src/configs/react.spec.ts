import { sharedPlugins } from '../utils/constants.js'
import { reactConfig as sut } from './react.js'
import _prettierConfig from 'eslint-config-prettier'

describe('react', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toContain(pluginName)
    }
  })

  it('should not include security plugin', () => {
    expect(sut.plugins).not.toContain('security')
  })

  it('should include react plugin', () => {
    expect(sut.plugins).toContain('react')
  })

  it('should include react-hooks plugin', () => {
    expect(sut.plugins).toContain('react-hooks')
  })

  it('should not include jsx-a11y plugin', () => {
    expect(sut.plugins).toContain('jsx-a11y')
  })

  it('should config react environment', () => {
    expect(sut.parserOptions.ecmaFeatures?.jsx).toBe(true)
    expect(sut.settings?.react?.version).toBe('detect')
    expect(sut.globals?.React).toBe(true)
    expect(sut.globals?.JSX).toBe(true)
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
    const prettierEntries = Object.entries(_prettierConfig.rules).filter(
      ([rule]) => rule !== 'jsx-quotes'
    )

    expect.assertions(prettierEntries.length)

    for (const [rule, options] of prettierEntries) {
      expect(sut.rules).toHaveProperty(rule, options)
    }
  })
})
