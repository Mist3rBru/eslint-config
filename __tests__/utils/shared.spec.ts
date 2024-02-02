import { securityPlugin } from '#/plugins/security.js'
import { shared } from '#/utils/shared.js'

describe('shared', () => {
  it('should not include empty plugin name', () => {
    expect(shared.plugins).not.toContain('')
  })

  it('should not include security plugin on shared.rules', () => {
    const securityRules = Object.keys(securityPlugin.rules)

    expect.assertions(securityRules.length)

    for (const rule of securityRules) {
      expect(shared.rules).not.toHaveProperty(rule)
    }
  })

  it('should include security plugin test rules on shared.testRules', () => {
    const securityTestRules = Object.entries(securityPlugin.testRules)

    expect.assertions(securityTestRules.length)

    for (const [rule, value] of securityTestRules) {
      expect(shared.testRules).toHaveProperty(rule, value)
    }
  })
})
