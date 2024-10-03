import { sharedPlugins } from '../utils/constants.js'
import { reactConfig as sut } from './react.js'

describe('react', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toHaveProperty(pluginName)
    }
  })

  it('should not include security plugin', () => {
    expect(sut.plugins).not.toHaveProperty('security')
  })

  it('should include react plugin', () => {
    expect(sut.plugins).toHaveProperty('react')
  })

  it('should include react-hooks plugin', () => {
    expect(sut.plugins).toHaveProperty('react-hooks')
  })

  it('should not include jsx-a11y plugin', () => {
    expect(sut.plugins).toHaveProperty('jsx-a11y')
  })

  it('should config react environment', () => {
    expect(sut.languageOptions.parserOptions.ecmaFeatures?.jsx).toBe(true)
    expect(sut.languageOptions.globals.React).toBe('readonly')
    expect(sut.languageOptions.globals.JSX).toBe('readonly')
    expect(sut.settings.react?.version).toBe('detect')
  })

  it('should disable react conflicted rules', () => {
    const expectedDisabledRules: string[] = [
      '@typescript-eslint/no-shadow',
      '@typescript-eslint/unbound-method',
      '@typescript-eslint/no-misused-promises',
      '@typescript-eslint/no-floating-promises',
      '@typescript-eslint/no-empty-function',
    ]

    expect.assertions(expectedDisabledRules.length)

    for (const rule of expectedDisabledRules) {
      expect(sut.rules).toHaveProperty(rule, 'off')
    }
  })
})
