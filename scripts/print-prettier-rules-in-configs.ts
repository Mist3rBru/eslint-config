import plugin from '../src/index.js'
import _prettierConfig from 'eslint-config-prettier'

void (async (): Promise<void> => {
  for (const [configName, config] of Object.entries(plugin.configs)) {
    process.stdout.write(`${configName}:\n`)

    for (const rule of Object.keys(_prettierConfig.rules)) {
      const ruleValue = config.rules[rule]

      if (ruleValue && ruleValue !== 'off') {
        process.stdout.write(`  "${rule}": ${JSON.stringify(ruleValue)},\n`)
      }
    }
  }
})()
