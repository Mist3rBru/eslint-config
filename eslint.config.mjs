import plugin from './dist/index.js'

export default [
  plugin.configs.node,
  plugin.configs.jest,
  {
    rules: {
      'security/detect-object-injection': 'off',
    },
  },
]
