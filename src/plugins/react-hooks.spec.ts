import { reactHooksPlugin as sut } from './react-hooks.js'
import _reactHooksPlugin from 'eslint-plugin-react-hooks'

describe('react-hooks', () => {
  it('should config react-hooks plugin rules rules', () => {
    const reactHooksPluginRules = Object.keys(_reactHooksPlugin.rules!)

    expect.assertions(reactHooksPluginRules.length)

    for (const rule of reactHooksPluginRules) {
      expect(sut.rules).toHaveProperty(`react-hooks/${rule}`)
    }
  })
})
