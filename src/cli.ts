#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-magic-numbers */
import plugin from './index.js'
import type { EslintConfig } from './types.js'
import { writeFileSync } from 'node:fs'
import path from 'node:path'

;((): void => {
  const configKey = process.argv[2]

  if (!configKey) {
    console.log('configKey not found')
    console.log('try: eslint-plugin-mist3rbru configKey')

    return
  }

  const config = plugin.configs[configKey as keyof typeof plugin.configs] as
    | EslintConfig
    | undefined

  if (!config) {
    console.log('invalid config key')

    return
  }

  writeFileSync(path.resolve('.eslintrc.json'), JSON.stringify(config, null, 2))
})()
