import { sharedPlugins } from '../utils/constants.js'
import { jestDomConfig } from './jest-dom.js'

const sut = await jestDomConfig()

describe('jest-dom', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toHaveProperty(pluginName)
    }
  })

  it('should include jest-dom plugin', () => {
    expect(sut.plugins).toHaveProperty('jest-dom')
  })
})
