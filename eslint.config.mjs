import plugin from './dist/index.js'

export default [
  {
    ...plugin.configs.node,
    files: ['**/*.ts'],
  },
  {
    files: ['**/*.spec.ts'],
    ...plugin.configs.jest,
  },
]
