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
  },
  rules: {
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

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'no-extra-semi': 'off',
  },
}
