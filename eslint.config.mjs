import mist3rbru from './dist/index.js'

export default [
  mist3rbru.configs.node,
  mist3rbru.configs.jest,
  {
    rules: {
      'security/detect-object-injection': 'off',
    },
  },
]
