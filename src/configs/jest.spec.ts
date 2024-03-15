import { sharedPlugins } from '../utils/constants.js'
import { jestConfig } from './jest.js'

const sut = await jestConfig()

describe('jest', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toHaveProperty(pluginName)
    }
  })

  it('should include jest plugin', () => {
    expect(sut.plugins).toHaveProperty('jest')
  })

  it('should include security plugin', () => {
    expect(sut.plugins).toHaveProperty('security')
  })

  it('should config jest environment', () => {
    expect(sut.languageOptions.globals).toHaveProperty('test', 'readonly')
  })
})
