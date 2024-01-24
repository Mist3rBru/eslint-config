import { sharedTestRules } from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vitest'],
  extends: ['plugin:vitest/all'],
  env: {
    es2022: true,
    node: true,
    vitest: true,
  },
  rules: {
    ...sharedTestRules,

    'vitest/no-hooks': 'off',
    'vitest/no-done-callback': 'off',
    'vitest/prefer-expect-assertions': 'off',
    'vitest/prefer-called-exactly-once-with': 'off',
    'vitest/no-disabled-tests': 'warn',
    'vitest/require-to-throw-message': 'warn',
    'vitest/max-expects': ['warn', { max: 10 }],

    'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'vitest/consistent-test-filename': [
      'error',
      { pattern: '.*\\.spec\\.[tj]sx?$' },
    ],
  },
}
