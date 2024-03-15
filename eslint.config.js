import config from './dist/index.js'

export default config('node', 'jest', {
  rules: {
    'security/detect-object-injection': 'off',
  },
})
