import { sharedPlugins } from '../utils/constants.js'
import { vitestConfig as sut } from './vitest.js'

describe('vitest', () => {
  it('should include shared plugins', () => {
    const sharedPluginNames = sharedPlugins
      .map(plugin => plugin.name)
      .filter(Boolean)

    expect.assertions(sharedPluginNames.length)

    for (const pluginName of sharedPluginNames) {
      expect(sut.plugins).toContain(pluginName)
    }
  })

  it('should include vitest plugin', () => {
    expect(sut.plugins).toContain('vitest')
  })

  it('should include security plugin', () => {
    expect(sut.plugins).toContain('security')
  })

  it('should config vitest environment', () => {
    expect(sut.env.node).toBe(true)
    expect(sut.env.vitest).toBe(true)
  })
})
