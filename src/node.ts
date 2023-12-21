import shared from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'unicorn', 'no-secrets'],
  extends: ['standard-with-typescript', 'plugin:unicorn/all', 'prettier'],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    ...shared,

    '@typescript-eslint/method-signature-style': ['error', 'method'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
      },
    ],
  },
}
