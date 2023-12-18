export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: ['plugin:jest/all'],
  env: {
    es2022: true,
    node: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 29,
    },
  },
  rules: {
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-expect-assertions': 'off',
    'jest/require-to-throw-message': 'off',
    'jest/no-untyped-mock-factory': 'off',
    'jest/unbound-method': 'off',
    'jest/no-hooks': 'off',
    'jest/max-expects': ['error', { max: 10 }],
    'jest/no-disabled-tests': 'warn',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',

    'no-extra-semi': 'off',
  },
}
