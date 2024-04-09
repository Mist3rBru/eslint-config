import { jestPlugin } from '../src/plugins/jest.js'
import { vitestPlugin } from '../src/plugins/vitest.js'

;((): void => {
  const jestRules = Object.keys(jestPlugin.testRules)
  const vitestRules = Object.keys(vitestPlugin.testRules)

  const exclusiveJestRules = jestRules.filter(
    rule => !vitestRules.includes(rule.replace(/^jest/, 'vitest'))
  )
  const exclusiveVitestRules = vitestRules.filter(
    rule => !jestRules.includes(rule.replace(/^vitest/, 'jest'))
  )

  // eslint-disable-next-line no-console
  console.log({ exclusiveJestRules, exclusiveVitestRules })
})()
