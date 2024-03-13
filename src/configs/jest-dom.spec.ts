import { sharedPlugins } from '../utils/constants.js'
import { jestDomConfig as sut } from './jest-dom.js'

describe('jest-dom', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toContain(pluginName)
    }
  })

  it('should include jest-dom plugin', () => {
    expect(sut.plugins).toContain('jest-dom')
  })
})
