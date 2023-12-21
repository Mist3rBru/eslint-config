import { sharedRules } from './shared.js'

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'promise',
    'security',
    'unicorn',
    'no-secrets',
  ],
  extends: [
    'standard-with-typescript',
    'plugin:promise/recommended',
    'plugin:security/recommended-legacy',
    'plugin:unicorn/all',
    'prettier',
  ],
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    ...sharedRules,

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
