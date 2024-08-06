import plugin from '../src/index.js'
import stylistic from '@stylistic/eslint-plugin'

void (async (): Promise<void> => {
  for (const [configName, config] of Object.entries(plugin.configs)) {
    if (configName === '@stylistic') {
      continue
    }

    process.stdout.write(`${configName}:\n`)

    for (const stylisticRule of Object.keys(stylistic.rules)) {
      for (const [rule, ruleValue] of Object.entries(config.rules)) {
        if (ruleValue === 'off') {
          continue
        }

        if (rule.includes(stylisticRule)) {
          process.stdout.write(`  "${rule}": ${JSON.stringify(ruleValue)},\n`)
        }
      }
    }
  }
})()
