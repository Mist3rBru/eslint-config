import { sharedPlugins } from '../utils/constants.js'
import { nodeConfig as sut } from './node.js'
import _prettierConfig from 'eslint-config-prettier'

describe('node', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toContain(pluginName)
    }
  })

  it('should include security plugin', () => {
    expect(sut.plugins).toContain('security')
  })

  it('should config node environment', () => {
    expect(sut.env.node).toBe(true)
  })

  it('should extend prettier config', () => {
    const prettierEntries = Object.entries(_prettierConfig.rules)

    expect.assertions(prettierEntries.length)

    for (const [rule, options] of prettierEntries) {
      expect(sut.rules).toHaveProperty(rule, options)
    }
  })
})
