export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['jest'],
  extends: ['plugin:jest/all'],
  env: {
    es2022: true,
    node: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
  rules: {
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-expect-assertions': 'off',
    'jest/require-to-throw-message': 'off',
    'jest/no-untyped-mock-factory': 'off',
    'jest/no-hooks': 'off',
    'jest/max-expects': ['warn', { max: 10 }],
    'jest/no-disabled-tests': 'warn',

    'jest/unbound-method': 'error',
    '@typescript-eslint/unbound-method': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',

    'no-extra-semi': 'off',
  },
}
