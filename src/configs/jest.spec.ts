import { sharedPlugins } from '../utils/constants.js'
import { jestConfig as sut } from './jest.js'

describe('jest', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toContain(pluginName)
    }
  })

  it('should include jest plugin', () => {
    expect(sut.plugins).toContain('jest')
  })

  it('should include security plugin', () => {
    expect(sut.plugins).toContain('security')
  })

  it('should config jest environment', () => {
    expect(sut.languageOptions.globals).toHaveProperty('test', true)
  })
})
