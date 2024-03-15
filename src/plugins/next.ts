import { definePlugin } from '../utils/define-plugin.js'
import { extendPluginRules } from '../utils/mappers.js'
import _nextPlugin from '@next/eslint-plugin-next'

// https://nextjs.org/docs/pages/building-your-application/configuring/eslint#eslint-plugin
export const nextPlugin = definePlugin({
  name: '@next/next',
  source: _nextPlugin,
  rules: {
    ...extendPluginRules('@next/next', _nextPlugin.configs.recommended),
    ...extendPluginRules('@next/next', _nextPlugin.configs['core-web-vitals']),
  },
  testRules: {},
})
