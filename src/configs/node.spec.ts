import { sharedPlugins } from '../utils/constants.js'
import { nodeConfig } from './node.js'
import _prettierConfig from 'eslint-config-prettier'

const sut = await nodeConfig()

describe('node', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toHaveProperty(pluginName)
    }
  })

  it('should include security plugin', () => {
    expect(sut.plugins).toHaveProperty('security')
  })

  it('should extend prettier config', () => {
    const prettierEntries = Object.entries(_prettierConfig.rules)

    expect.assertions(prettierEntries.length)

    for (const [rule, options] of prettierEntries) {
      expect(sut.rules).toHaveProperty(rule, options)
    }
  })
})
